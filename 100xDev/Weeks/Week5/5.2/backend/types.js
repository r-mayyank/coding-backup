const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string() 
})

const updateTodo = zod.object({
    id: zod.string(), 
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
//  title: string
// desc: string

/*
    {
        title: string,
        desc: string
    }

    {
        id:string,
    }
*/