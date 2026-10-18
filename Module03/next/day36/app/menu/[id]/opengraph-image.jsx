import { ImageResponse } from "next/og";
import { getDish } from "@/lib/dishes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Addis Eats dish preview";

export default async function Image({ params }) {
  const { id } = await params;
  const dish = getDish(id);

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
        <div style={{ fontSize: 28, color: "#fbbf24", marginBottom: 16 }}>
          ADDIS EATS
        </div>
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          {dish?.nameEn || "Dish"}
        </div>
        <div style={{ fontSize: 36, marginTop: 20, color: "#fde68a" }}>
          {dish ? `${dish.priceETB} ETB` : ""}
        </div>
      </div>
    ),
    { ...size },
  );
}
