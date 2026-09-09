import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#070706",
          color: "#e7e1d4",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: 4 }}>P</div>
        <div style={{ fontSize: 42, letterSpacing: 2 }}>17</div>
      </div>
    ),
    size,
  );
}
