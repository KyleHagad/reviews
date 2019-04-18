const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const router = express.Router()

// v== to Index
router.get('/', (req, res) => {
  res.render('index/index');
});

// v== to Info
router.get('/info', (req, res) => {
  res.render('index/info');
})

module.exports = router;
