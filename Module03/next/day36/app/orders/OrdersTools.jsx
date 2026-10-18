"use client";

import { useEffect } from "react";
import { cancelOrder } from "@/app/actions/orders";

export default function OrdersTools() {
  useEffect(() => {
    window.cancelOrder = cancelOrder;
  }, []);

  return (
    <p className="mt-4 text-xs text-[#5c4638]">
      Attack demo: from the console call{" "}
      <code>await cancelOrder(&quot;ord_someone_else&quot;)</code>
    </p>
  );
}
