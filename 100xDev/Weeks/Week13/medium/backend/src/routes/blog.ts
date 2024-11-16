import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { sign, verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from "@r_mayyank/medium-common";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }, 
    Variables: {
        userId: string;
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header('Authorization') || '';
    const user = await verify(header, c.env.JWT_SECRET)
    if (user) {
        c.set("userId", user.userId as string)
        await next()
    } else {
        c.status(403)
        return c.json({ error: 'Unauthorized' })
    }
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body)

    if (!success) {
        c.status(411);
        return c.json({ error: 'Invalid input' })
    }

    const authorId = c.get('userId');

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body)
    
    if (!success) {
        c.status(411);
        return c.json({ error: 'Invalid input' })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where: {
            id: Number(body.id)
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.get('/', async (c) => {
    const id = c.req.query('id');

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: Number(id)
            }, select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                },
                publishedAt: true
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411);
        return c.json({
            msg: 'Error while fetching blog post'
        })
    }
})

blogRouter.get('/all', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            },
            publishedAt: true
        }
    });

    return c.json({
        blogs
    })
})

export default blogRouter