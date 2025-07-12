// This will respond to POST /api/donate-end
export async function POST(request: Request) {
  const body = await request.json()
  const { name, email } = body

  // Do backend logic here (e.g., send email, save to DB, etc.)
  console.log('Received donation from:', name, email)

  return new Response(JSON.stringify({ message: 'Donation received' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
