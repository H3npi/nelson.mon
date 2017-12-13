var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
    const renderError = (error) => {
        res.render('error', {
          title: 'Nelson Monitor',
          message: 'Error while connecting to Nelson',
          error
        });
    };
    request('http://localhost:18600', function (error, response, body) {
        if (error) {
          return renderError(error)
        }
        let resp = null;
        try {
          resp = JSON.parse(body)
        }
        catch (e) {
          return renderError(new Error('Received erroneous response from Nelson'))
        }
        res.render('index', { title: 'Nelson Monitor', resp });
    });
});

module.exports = router;
