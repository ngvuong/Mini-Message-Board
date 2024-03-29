var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toDateString(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

router.post('/new', function (req, res, next) {
  const { message, name } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date().toDateString(),
  });
  res.redirect('/');
});

module.exports = router;
