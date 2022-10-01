const express = require('express')
const app = express();
const sequelize=require('./db')
const router=require('./router')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',router)

sequelize.sync();

app.listen(3000,()=>{
    console.log("server connected")
})