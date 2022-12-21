var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function(req, res, next) {
  res.render('products');
});

router.get('/Nosotros', function(req, res, next) {
  res.render('nosotros');
});

router.get('/Contact', function(req, res, next) {
  res.render('Contactos');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;