import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    schema_version: "v1",
    name: "Samanvay Foundation",
    description:
      "Open-source digital infrastructure for India's social sector. We build products like Avni (community health), Bahmni (hospital EMR), Gunak (quality assessment), TeleSathi (telemedicine), and Mentor To Go (youth mentoring).",
    url: "https://samanvayfoundation.org",
    logo_url: "https://samanvayfoundation.org/images/logos/samanvay-logo.webp",
    contact_email: "hello@samanvayfoundation.org",
    legal_info_url: "https://samanvayfoundation.org/about-us",
  })
}
