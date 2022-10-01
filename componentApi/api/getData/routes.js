// const controller = require('./control')();
// const {Router}=require('express')

// module.exports = (path) => {
// console.log(controller[`${path}`])

// Router.get(`/${path}`,controller[`${path}`])
// }


const express = require('express');
const router = express.Router();
try{
router.get('/list',function(req,res,next){
    console.log(req.path);
    res.send("welcome to api")
    // next()
 });
}catch(err){
    console.log(err)
}

module.exports = router;