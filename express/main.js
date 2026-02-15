import express, { json } from "express"

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/logIn",(req,res)=>{
    const db = req.body
    console.log(db)
    res.send(db)
})



app.listen(3000 ,()=>{
    console.log("server running on http://localhost:3000");  
})


