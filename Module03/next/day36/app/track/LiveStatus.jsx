
"use client";

import { useEffect, useState } from "react";

export default function LiveStatus({ id, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const es = new EventSource(`/api/orders/${id}/stream`);

    es.onopen = () => {
      setConnected(true);
    };

    es.onmessage = (e) => {
      const newStatus = JSON.parse(e.data);
      setStatus(newStatus);

      if (newStatus === "delivered") {
        es.close();
        setConnected(false);
      }
    };

    es.onerror = () => {
      setConnected(false);
      es.close();
    };

    return () => {
      es.close();
    };
  }, [id]);

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-900/10">
      <div>
        <div className="text-xs text-[#5c4638]">Order Status</div>
        <div className="mt-1 font-serif text-lg font-bold capitalize text-[#3b140d]">
          {status}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            connected ? "bg-green-500 animate-pulse" : "bg-gray-300"
          }`}
        />
        <span className="text-xs text-[#5c4638]">
          {connected ? "Live" : status === "delivered" ? "Delivered" : "Connecting"}
        </span>
      </div>
    </div>
  );
}