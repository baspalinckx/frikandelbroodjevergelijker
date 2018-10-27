var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/broodjes', function(req, res) {
    res.contentType('application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));

});


module.exports = router;
