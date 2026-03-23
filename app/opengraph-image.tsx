import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Samanvay Foundation"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1120 0%, #1a2744 50%, #0B1120 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Samanvay Foundation
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#E8913A",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Deep Engineering for Social Good
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 40,
              fontSize: 22,
              color: "#E8913A",
              fontWeight: 700,
            }}
          >
            <span>60+ Nonprofits</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <span>500K+ Lives</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <span>6 Products</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
