import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const res = await fetch(`https://addis-eats-backend.onrender.com/orders/${id}`);
    if (!res.ok) {
      return NextResponse.json({ error: 'Order not found' }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data.data || data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch order status' }, { status: 500 });
  }
}