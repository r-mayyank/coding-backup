// Readonly, readonly, Pick, Partial, using ?? for optional chaining 

interface User{
    id: number,
    name: String,
    age: number
    email: String
    password: String
}

interface user2{
    readonly id: Number,
    readonly name: String
}

const mayank:user2 = {
    id: 111,
    name: "MAYANK"
}

const mayank2: Readonly<user2> = {
    id: 11,
    name: "mayank1"
}

// mayank.id = 1;

type UpdateUser = Pick<User, 'name' | 'age'>

type updateUserOptional = Partial<UpdateUser>

function sumOfAge(user1: updateUserOptional, user2: updateUserOptional) {
    return (user1.age ?? 0) + (user2.age ?? 0);
}

const age = sumOfAge({age: 20}, {name: "mayank", age: 17});
console.log(age);