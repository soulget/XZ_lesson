const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users',{
    name: req.params.name,
    supplies:["xx","zz","aa"]
  })
})

module.exports = router;