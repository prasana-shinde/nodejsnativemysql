var express = require('express');
var router = express.Router();

const {saveUserService} = require('../service/v1/user/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in user');
});

router.post('/save',(req,res)=>{
  console.log(req.body);
  saveUserService(req.body)
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.get('/getme', function(req, res, next) {
  res.send('respond with a getme');
});

module.exports = router;
