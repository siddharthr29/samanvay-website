import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidation-secret")

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const path = body.path || "/articles"

    revalidatePath(path)

    return NextResponse.json({ revalidated: true, path })
  } catch {
    return NextResponse.json({ error: "Failed to revalidate" }, { status: 500 })
  }
}
