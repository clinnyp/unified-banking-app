import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/accounts', async (c) => {
  try {
    const response = await fetch("https://api.akahu.io/v1/accounts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.USER_TOKEN}`,
        "X-Akahu-Id": `${process.env.APP_TOKEN}`
      }
    })
    if (!response.ok) {
      const code = response.status
      return c.json({ success: false }, response.status as 400 | 401 | 403 | 404 | 500)
    }
    const data = await response.json()
    return c.json({ success: true, data }, 200)
  } catch (error) {
    console.error(error)
    return c.json({ success: false }, 500)
  }
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
