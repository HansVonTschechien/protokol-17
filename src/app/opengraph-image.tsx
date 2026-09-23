import { ImageResponse } from "next/og";
import { siteConfig, SITE } from "@/config/site";

export const dynamic = "force-static";
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070706",
          color: "#e7e1d4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7c7a74",
          }}
        >
          <span>DIGITÁLNÍ ARCHIV</span>
          <span>VEŘEJNÁ ČÁST</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 10,
              marginBottom: 24,
            }}
          >
            {siteConfig.title}
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            Některé případy nikdy nebyly uzavřeny.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#cfc4ae",
          }}
        >
          <span>{siteConfig.seoLine}</span>
          <span>SPIS 17</span>
        </div>
      </div>
    ),
    size,
  );
}
