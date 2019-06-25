const express = require('express');
const router = express.Router();

router.post('/',function(req, res, next){
  res.end('登录');
});

module.exports = router