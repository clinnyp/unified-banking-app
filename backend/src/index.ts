import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono().basePath("/api/v1")

app.use(logger())

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

app.post('/transfer', async (c) => {
  try {
    const data = await c.req.json()
    const response = await fetch("https://api.akahu.io/v1/transfers", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.USER_TOKEN}`,
        "X-Akahu-Id": `${process.env.APP_TOKEN}`
      }, body: JSON.stringify({
        to: data.to._id,
        from: data.from._id,
        amount: data.amount
      })
    })

    if (!response.ok) {
      return c.json({ success: false }, response.status as 400 | 401 | 403 | 404 | 500)
    }

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
