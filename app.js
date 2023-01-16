const express = require("express")
const {urlencoded} = require("express");
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000;
const connectDB = require("./db/connect")


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/products', require("./routes/products"))

connectDB()

app.listen(PORT, ()=>{
    console.log(`APP is running on PORT ${PORT}`);
})
