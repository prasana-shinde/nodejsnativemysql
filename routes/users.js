var express = require('express');
var router = express.Router();

function mulBy2(x) { 
  return new Promise((resolve) => { 
      setTimeout(() => { 
          resolve(x*2); 
      }, 2000); 
  }); 
} 

async function output(req,res,val){
  const op = await mulBy2(val)
  res.json({
    'value':op
  })
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  output(req,res,60);
});

router.get('/getme', function(req, res, next) {
  res.send('respond with a getme');
});

module.exports = router;
