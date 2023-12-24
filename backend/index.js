const express = require("express");
const { connection } = require("./db");
require("dotenv").config
const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {

    res.send({
        message:"api is working now"
    })
  })

app.listen(port,async() => {

    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port number",port)
}  
);