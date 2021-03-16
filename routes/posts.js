var express = require('express');
var router = express.Router();

const {savePostService,readPostService,updatePostService,deletePostService} = require('../service/v1/post/post');

router.get('/', function(req, res, next) {
  console.log(req.query);
  readPostService(req.query)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
});

router.post('/',(req,res)=>{
  console.log(req.body);
  savePostService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.put('/',(req,res)=>{
  console.log(req.body);
  updatePostService(req.body)
  .then((data)=>{
    res.send({data : data});
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.delete('/',(req,res)=>{
  console.log(req.body);
  deletePostService(req.body)
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
