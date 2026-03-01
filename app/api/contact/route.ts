import { NextRequest, NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1477679507161878791/8xs1f0eHChNQZexdTH5hHHlmiW4iFSyXX_wjed0tTbKrX6MqU6mVRILJOTykIgm8aMNO"

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(input: string): string {
  return input.trim().slice(0, 2000)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = sanitize(body.name || "")
    const email = sanitize(body.email || "")
    const organization = sanitize(body.organization || "")
    const message = sanitize(body.message || "")
    const source = sanitize(body.source || "contact-form")

    // Validation
    const errors: string[] = []

    if (!name || name.length < 2) {
      errors.push("Name is required (minimum 2 characters)")
    }
    if (name.length > 100) {
      errors.push("Name is too long (maximum 100 characters)")
    }
    if (!email) {
      errors.push("Email is required")
    } else if (!validateEmail(email)) {
      errors.push("Please provide a valid email address")
    }
    if (!message || message.length < 10) {
      errors.push("Message is required (minimum 10 characters)")
    }
    if (organization && organization.length > 200) {
      errors.push("Organization name is too long (maximum 200 characters)")
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(". ") }, { status: 400 })
    }

    // Send to Discord webhook
    const discordPayload = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0xea580c, // orange
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            ...(organization
              ? [{ name: "Organization", value: organization, inline: true }]
              : []),
            { name: "Message", value: message },
            { name: "Source", value: source, inline: true },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "samanvayfoundation.org",
          },
        },
      ],
    }

    const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    })

    if (!discordRes.ok) {
      console.error("Discord webhook failed:", discordRes.status, await discordRes.text())
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 500 }
      )
    }

    // Also push to Notion CRM if configured
    if (process.env.NOTION_API_KEY && process.env.NOTION_CRM_DB) {
      try {
        const { Client } = await import("@notionhq/client")
        const notion = new Client({ auth: process.env.NOTION_API_KEY })

        await notion.pages.create({
          parent: { database_id: process.env.NOTION_CRM_DB },
          properties: {
            Name: { title: [{ text: { content: name } }] },
            Email: { email },
            Organization: {
              rich_text: [{ text: { content: organization } }],
            },
            Message: { rich_text: [{ text: { content: message } }] },
            Source: { select: { name: source } },
            Status: { select: { name: "new" } },
            Date: { date: { start: new Date().toISOString() } },
          },
        })
      } catch (notionError) {
        console.error("Notion CRM push failed (non-blocking):", notionError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    )
  }
}
