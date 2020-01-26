var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var request = require('request');
request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        request.post('https://webhook.site/1b0bf188-7392-48df-9455-30df1be8222d', {form:{body}})
     }
})


router.post('/',function(req, res, next) {

 
  request.post('https://webhook.site/1b0bf188-7392-48df-9455-30df1be8222d', {form:{req}})
})

});

module.exports = router;
