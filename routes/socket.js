var express = require('express');
var router = express.Router();
var path = require('path');




router.get('/foo', function (req, res) {
    //res.render('socketclient')
    req.app.io.sockets.emit('cleanup', {});
    res.end()
});

router.get('/socketclient', function (req, res) {
  res.render('socketclient')
})

module.exports = router;