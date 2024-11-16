//global catches
const express = require('express');
const z = require('zod');
const app = express();

app.use(express.json());

//global catches
app.use((err, req, res, next) => {
    errorCount++;
    res.json({
        msg: "Sorry something went wrong"
    })
})

//zod
const schema = z.array(z.number());
app.post("/health-checkup", (req, res) => {
    // kidneys = [1,2];
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    res.send({
        response
    })
})

 const schema2 = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
 })

app.listen(3000);