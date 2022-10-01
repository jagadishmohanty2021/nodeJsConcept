const express = require('express')
const app = express()
const cron=require('node-cron')
cron.schedule('* * * * * *',()=>{
console.log("hello world")
})
app.use('/:url/:path',(req,res,next)=>{

    console.log(req.params.path)
    require(`./api/${req.params.url}/routes`)(app,req.params.url,req.params.path,req.method)
    next()
})

app.listen(3000, () => {
    console.log("server connected...")
})