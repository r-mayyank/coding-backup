import { PrismaClient } from '@prisma/client'
import { log } from 'console';

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data:{
            email: username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

interface updataParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, {
    firstName,
    lastName
}: updataParams) {
    const res = await prisma.user.update({
        where: { email: username},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
    
}

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email: username
        },
        select: {
            email: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(`Email: ${res?.email}
First Name: ${res?.firstName}
Last Name: ${res?.lastName}`);
}

async function deleteUser(username: string) {
    const res = await prisma.user.delete({
        where: {
            email: username
        }
    })
    console.log(`Deleted user with credentials: ${res}`);
    
}
// deleteUser("mayank@gmail.com");
// updateUser("mayank@gmail.com", {
    // firstName: "may",
    // lastName: "raja"
// })
// insertUser("mayank@gmail.com", "mayank123", "mayank", "raja")
getUser("mayank@gmail.com")