
"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("@/app/track/DeliveryMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-2xl bg-amber-900/10 flex items-center justify-center text-sm text-[#5c4638]">
      Loading map...
    </div>
  ),
});

export default function MapPanel({ center, zoom }) {
  return <DeliveryMap center={center} zoom={zoom} />;
}