import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Addis Eats";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#3b140d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#faf6f1",
        }}
      >
        <div style={{ fontSize: 28, color: "#fbbf24" }}>ADDIS ABABA</div>
        <div style={{ fontSize: 80, fontWeight: 700, marginTop: 12 }}>
          Addis Eats
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#fde68a" }}>
          Doro Wat, Tibs and Kitfo — delivered.
        </div>
      </div>
    ),
    { ...size },
  );
}
