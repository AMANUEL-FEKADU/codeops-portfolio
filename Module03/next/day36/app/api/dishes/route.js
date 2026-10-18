import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const page = searchParams.get('page');

  try {
    let url = 'https://addis-eats-backend.onrender.com/menu/';
    
    const params = new URLSearchParams();
    if (q) params.append('q', q);
    if (page) params.append('page', page);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const result = await fetch(url);
    const res = await result.json();
    const dishes = res.data || res || [];

    return NextResponse.json(dishes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch dishes' },
      { status: 500 }
    );
  }
}