var express = require('express');
var router = express.Router();

/* My Data Page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Brunda Katragadda' });
});

module.exports = router;
