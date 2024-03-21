var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  let x = Math.random()*10;
  let c = Math.random()*10;
  let y = Math.tanh(x);
  let z = Math.pow(x,c);
  let a = Math.sign(x);
  let b = Math.trunc(x);
  res.render("computation",{
    y: `tanh value applied to ${x} is ${y}`,
    z: `pow value applied to ${x} and ${c} is ${z}`,
    a: `sign value applied to ${x} is ${a}`,
    b: `trunc value applied to ${x} is ${b}`
})
});

module.exports = router;
