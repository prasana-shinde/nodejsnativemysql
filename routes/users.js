var express = require('express');
var router = express.Router();

const {saveUserService,readUserService,updateUserService,deleteUserService} = require('../service/v1/user/user');

router.get('/', function(req, res, next) {
  console.log(req.body);
  readUserService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

router.post('/',(req,res)=>{
  console.log(req.body);
  saveUserService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.put('/',(req,res)=>{
  console.log(req.body);
  updateUserService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.delete('/',(req,res)=>{
  console.log(req.body);
  deleteUserService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.get('/getme', function(req, res, next) {
  res.send('respond with a getme');
});

module.exports = router;
