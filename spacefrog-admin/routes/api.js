var express = require('express');
var router = express.Router();
var prices = require('../configs/options.json');


/* GET price. */
router.get('/v1/pricing/:product', function(req, res, next) {
    var priceObject = {
        "description":"",
        "price":0,
        "title":"",
        "options": {}
    };

    var product = req.params.product;
    if(product && prices[product]) {
        priceObject.title = prices[product].title;
        priceObject.price = prices[product].price;
        if(prices[product].description) {
            priceObject.description = prices[product].description;
        }
    }
    res.status(200);
    res.header('Content-type', 'application/json');
    res.send(JSON.stringify(priceObject));
});

module.exports = router;