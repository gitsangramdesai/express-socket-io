var express = require('express');
var router = express.Router();
var path =require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/abcd', function (req, res, next) {
  console.log('abcd');
  next();
})

/*once or none*/
router.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})



/*atleast once or more */
router.get('/pq+rs', function (req, res) {
  res.send('pq+rs')
})

/* 'zw' can occur once or never */
router.get('/xy(zw)?e', function (req, res) {
  res.send('xy(zw)?e')
})


/*zero or more*/
router.get('/lm*no', function (req, res) {
  res.send('lm*no')
})


router.get('/movie/:movieId/song/:songId', function (req, res) {
  res.send(req.params)
})


router.get('/movietime', function (req, res, next) {
  console.log('sms movie time')
  next()
}, function (req, res) {
  res.send('email movie time')
})

router.get('/doc', function (req, res) {
  res.download('public/documents/1.pdf', 'gunicorn.pdf');
})


router.get('/ddlg', function (req, res) {
  var staticJson = {
    'movie': 'Dilwale Dulhania Le Jayenge',
    'songs': [
      'Mere Khwabon Mein',
      'Mehndi Laga Ke Rakhna',
      'Ruk Ja O Dil Deewane',
      'Ho Gaya Hai Tujhko To Pyar Sajna',
      'Zara Sa Jhoom Loon Main',
      'Tujhe Dekha To',
      'Ghar Aaja Pardesi'
    ]
  };

  //res.json(staticJson);

  res.send(staticJson);
})

router.get('/inlinehtml', function (req, res) {
  res.send('<p>Inline HTML</p>');
})

router.post('/createmodel', function (req, res) {
  //res.sendStatus(201);
  //res.status(201).send('200');
  res.status(400).send('Bad Request,aborted');
  //res.sendStatus(2000); 
  //res.status(2000).send('2000')
})



router.get('/ddlg/show', function (req, res) {
  res.header("Content-Type", "text/plain");
  res.send('ddlg|15-02-2018|10:00,14:00,17:00');
})

router.get('/doc/writer', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/documents/', 'sample.odt'));
})

router.get('/data/jsonp', function (req, res) {
  res.jsonp({ user: 'tobi' });
  //res.status(500).jsonp({ error: 'message' })
})

// router.get('/socketclient', function (req, res) {
//   res.render('socketclient')
// })



module.exports = router;
