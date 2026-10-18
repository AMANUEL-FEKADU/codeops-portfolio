
export async function GET(request, { params }) {
  try {
    const { id } = await params

    const result = await fetch('https://addis-eats-backend.onrender.com/menu/')
    const res = await result.json()
    const dishes = res.data || []

    const dish = dishes.find((item) => String(item.id) === String(id))

    if (!dish) {
      return Response.json(
        { error: 'No such dish' },
        { status: 404 }
      )
    }

    return Response.json(dish, { status: 200 })
  } catch (error) {
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}