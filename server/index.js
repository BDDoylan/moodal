import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import db from './database/index.js'

const app = new Hono()
const port = process.env.PORT

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
})
