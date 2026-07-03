const express = require('express');
const router = express.Router();
const model = require('../models/index');
router.get('/', (req, res) => {
  const data = new model({ title: 'Hello World', content: 'Welcome to the webpage' });
  res.render('index', { data: data });
});
module.exports = router;