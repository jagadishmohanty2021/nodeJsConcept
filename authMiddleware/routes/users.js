var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send(jwt.sign({name:req.body.name,userId:req.body.userId},process.env.SECRETE));
});

module.exports = router;
