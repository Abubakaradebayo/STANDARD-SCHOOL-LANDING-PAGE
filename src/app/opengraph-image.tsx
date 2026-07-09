import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "STANDARD SCHOOLS, ILORIN. Knowledge is power.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded card shown when the site link is shared on WhatsApp, Facebook, X, etc. */
export default async function OpengraphImage() {
  // logo.png is actually JPEG data; logo-og.png is a true PNG re-encode for satori.
  const logo = await readFile(join(process.cwd(), "public/logo/logo-og.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          backgroundColor: "#071231",
          padding: 48,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(231, 205, 143, 0.45)",
            gap: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 170,
              height: 170,
              borderRadius: 999,
              backgroundColor: "#FAF8F2",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={112} height={112} style={{ borderRadius: 12 }} />
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              color: "#FAF8F2",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            STANDARD SCHOOLS, ILORIN
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#C0913E",
              letterSpacing: 12,
            }}
          >
            KNOWLEDGE IS POWER
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#A8C3F0",
              letterSpacing: 3,
              marginTop: 10,
            }}
          >
            Creche · Nursery · Primary · Junior Secondary
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
