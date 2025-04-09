const baseUrl = "http://localhost:3000/api/v1"

export async function fetchAccounts() {
  const response = await fetch(`${baseUrl}/accounts`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}