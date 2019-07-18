import * as Env   from '../env';

var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/version', function (req, res) {
  console.log(process.cwd())
  const py = new Env.Python()
  var ck = py.getVersion();
  console.log(ck);

  res.send({"data": ck})
})
// define the home page route
router.get('/projects', function (req, res) {
  res.json({"data": []})
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router