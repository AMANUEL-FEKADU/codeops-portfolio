"use client"; 
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h3>{count}</h3>
    </div>
  );
}