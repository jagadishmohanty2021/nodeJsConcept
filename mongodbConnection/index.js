const router = require('./src/routers/router')
const express = require('express')
require('dotenv').config()
const app = express()
let port=process.env.PORT
app.use(express.urlencoded({extended: false}))
app.use(express.json())
require('./src/database/db')
app.use('/',router)

app.listen(port,()=>{
    console.log("server connected to ",port)
})