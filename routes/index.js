var express = require('express');
var router = express.Router();

/* GET home page. */


var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var url = "mongodb://suhan1996:112496@ds227555.mlab.com:27555/webber";



router.get('/database', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        //var query = { address: "Park Lane 38" };
        var query = {};
        db.collection("boom").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.send(result);
        });
    });
});

module.exports = router;