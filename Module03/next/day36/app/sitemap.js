export default async function sitemap() {
  const baseUrl = 'https://addiseats.et'

  let dishRoutes = []
  try {
    const res = await fetch('https://addis-eats-backend.onrender.com/menu/')
    const data = await res.json()
    const dishes = data.data || []

    dishRoutes = dishes.map((dish) => ({
      url: `${baseUrl}/menu/${dish.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  } catch (e) {
    // Fallback if backend fetch fails
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...dishRoutes,
  ]
}