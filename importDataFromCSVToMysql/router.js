const router= require('express').Router();
const controller = require('./controller')()

// router.get('/',(req,res)=>{
//     res.send('API working correctly.')
// })
router.get('/',controller.importData);
module.exports=router;