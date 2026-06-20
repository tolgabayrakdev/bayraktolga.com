import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(900px circle at 50% -10%, rgba(94,234,212,0.14), transparent 60%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid #232328",
              backgroundColor: "#131316",
              color: "#5eead4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 26 }}>bayraktolga.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ededee",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Tolga Bayrak
          </div>
          <div
            style={{
              color: "#5eead4",
              fontSize: 40,
              fontWeight: 600,
              marginTop: 8,
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: 28,
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Node.js · Express.js · React · PostgreSQL ile ölçeklenebilir web
            uygulamaları ve SaaS ürünleri.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
