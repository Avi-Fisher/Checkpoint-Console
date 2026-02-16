import express from "express"
import cors from "cors"
import { createToken } from "./server/createToken.js"
import { checkToken } from "./server/checkToken.js"



const app = express()
app.use(express.json())
app.use(cors())



app.get("/status", (req, res) => {
   
    checkToken(req.headers)
    res.json("info")
})

// app.get("/messages", (req, res) => {
//     res.json("info")
// })

// app.post("/login", (req, res) => {
//     const { name, password } = req.body
//     const token = createToken(name, password)
//     res.json({token,operator:{name}})
// })

// app.post("/messages", (req, res) => {
//     res.json("info")
// })



app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})





