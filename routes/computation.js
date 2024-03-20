var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  let x = Math.random()*10;
  let y = Math.tanh(x);
  res.send(`tanh of ${x} is ${y}`);
});

module.exports = router;
