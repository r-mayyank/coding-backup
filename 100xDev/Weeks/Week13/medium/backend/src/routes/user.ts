import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { jwt, sign, verify } from "hono/jwt"
import { signupInput, signinInput } from "@r_mayyank/medium-common";

const user = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>()

user.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = signupInput.safeParse(body) 
    if (!success) {
        c.status(411);
        return c.json({ error: 'Invalid input' })
    }

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
        }
    })

    const jwt = await sign({ userId: user.id }, c.env.JWT_SECRET)

    return c.json({ jwt })
})

user.post('/signin', async (c) => {
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body)

    if (!success) {
        c.status(411);
        return c.json({ error: 'Invalid input' })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        },
        select: {
            id: true
        }
    })

    if (!user) {
        return c.json({ msg: 'User not found' })
    }
    
    const jwt = await sign({ userId: user.id }, c.env.JWT_SECRET)

    return c.json({ jwt })
})

export default user
