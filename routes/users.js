var express = require('express');
var router = express.Router();

function mulBy2(x) { 
  return new Promise((resolve) => { 
      setTimeout(() => { 
          resolve(x*2); 
      }, 2000); 
  }); 
} 

async function output(val){
  const op = await mulBy2(val)
  console.log(op);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  output(50);
  res.json({
    'message':'async initiated'
  })
});

router.get('/getme', function(req, res, next) {
  res.send('respond with a getme');
});

module.exports = router;
