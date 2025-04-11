const baseUrl = "http://localhost:3000/api/v1"

export async function fetchAccounts() {
  const response = await fetch(`${baseUrl}/accounts`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

export async function transferMoney(to, from, amount) {
  const response = await fetch(`${baseUrl}/transfer`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      from,
      amount
    })
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}