const {logger}=require('./logger');
const express = require('express');
const app = express();
const router=require('./router')
// const Router = express.Router();
const port =3000;



// // router(app);
// app.use('/api',(req,res)=>{
//     let path=req.path.split('/');
//     console.log(`/${path[1]}/api/${path[1]}/routes`)
//     app.use(`/${path[1]}`,require(`./api/${path[1]}/routes`)(path[2]))
    
// })

const appRoutes = require('./router')
let path='';
app.use('/',(req,res,next)=>{
    path=req.path.split('/');
    console.log("path: ",path)
    appRoutes(app,path)
    // next()
})

app.listen(port,()=>{
    console.log("server connected..")
})
