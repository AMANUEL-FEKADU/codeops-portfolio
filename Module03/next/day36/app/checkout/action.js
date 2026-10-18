'use server'

export async function processCheckout(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const fullName = formData.get('fullName')
  const email = formData.get('email')
  const address = formData.get('address')

  if (!fullName || !email || !address) {
    return {
      success: false,
      message: 'Please fill out all required fields.',
    }
  }

  return {
    success: true,
    message: `Thank you, ${fullName}! Your order has been placed successfully.`,
  }
}