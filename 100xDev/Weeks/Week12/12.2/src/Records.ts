type User32 = {
    id: String,
    name: String
}

// type Users = {
//     [key: string] : User32;
// }

type Users = Record<string, User32>

const users: Users = {
    "first": {
        id: "first",
        name: "mahank"
    },
    "second": {
        id: "second",
        name: "man"
    }
}