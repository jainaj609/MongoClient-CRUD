const express = require("express")
const app = express()

const route = require('./routes/route')

app.use(express.json())
app.use(route)

app.get('/', (req,res)=>{
    res.send("API is running")
})

app.listen(4000,()=>{
    console.log("Server is runnnig")
})