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
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f2440 100%)",
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
              color: "#94b8db",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Deep Engineering, Grassroots Understanding
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            {["Avni", "Bahmni", "Gunak", "TeleSathi", "Shwaas"].map(
              (product) => (
                <div
                  key={product}
                  style={{
                    padding: "8px 20px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 999,
                    color: "#f97316",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {product}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
