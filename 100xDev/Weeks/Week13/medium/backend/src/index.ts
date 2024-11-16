import { Hono } from 'hono'
import user from './routes/user'
import blogRouter from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors())

app.get('/health', (c) => {
  return c.text('Hello From Backend!')
})

app.route('/api/v1/user', user)
app.route('/api/v1/blog', blogRouter)

export default app;