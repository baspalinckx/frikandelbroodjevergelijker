const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const rp = require('request-promise');



/* GET home page. */
router.get('/broodjes/jumbo', function(req, res) {

  const jumbofrikandelbroodje    = {
      uri: `https://www.jumbo.com/jumbo-frikandelbroodjes-met-currysaus-300g/188540PAK/`,
      transform: function (body) {
          return cheerio.load(body);
      }
    };


    rp(jumbofrikandelbroodje)
        .then(($) => {
            let json = { price : "", title : "", img : ""};
            let price = ($('.jum-price-format').text());
            let title = ($('[data-dynamic-block-name=Title]').text());
            let img = ($('.jum-product-image img').attr('data-jum-src'));

            json.price = price;
            json.title = title;
            json.img = img;

            res.send(json);

        })
        .catch((err) => {
            console.log(err);
        });

})

router.get('/broodjes/coop', function(req, res) {

  const coopFrikandelboordje = {
      uri: `https://www.coop.nl/coop-frikandelbroodje-xl/product/2152180000000`,
      transform: function (body) {
          return cheerio.load(body);
      }
  };

    rp(coopFrikandelboordje)
        .then(($) => {
            let json = { price : "", title : "", img : ""};
            let title = ($('.altHead.head1').text());
            let price = ($('.price').text());
            let img = ($('.productImg img').attr('data-srcset'));

            json.title = title;
            json.price = price;
            json.img = img;

            res.send(json);


        })
        .catch((err) => {
            console.log(err);
        });



})

router.get('/broodjes/plus', function(req, res) {

  const plusfrikandelbroodje = {
      uri: `https://www.plus.nl/product/plus-frikandelbroodje-stuk-145-gram-520780`,
      transform: function (body) {
          return cheerio.load(body);
      }
  };

  rp(plusfrikandelbroodje)
      .then(($) => {
          let json = { price : "", title : "", img : ""};
          let title = ($('.pdpTitleRedesign').text());
          let price = ($('.product-tile__price').text());
          let img = ("https://www.plus.nl"+$('.lazy').attr('data-src'));

          json.title = title
          json.price = price;
          json.img = img;

          res.send(json);

      })
      .catch((err) => {
          console.log(err);
      });
})

router.get('/broodjes/spar', function(req, res) {

  const sparfrikandelbroodje = {
      uri: `https://www.spar.nl/frikandelbroodje-xl-5234492/`,
      transform: function (body) {
          return cheerio.load(body);
      }
  };


  rp(sparfrikandelbroodje)
      .then(($) => {
          let json = { price : "", title : "", img : ""};
          let price = ($('.c-price').text());
          let title = ($('.c-offer__title').text());
          let img = ($('.c-gallery__main-item img').attr('src'));

          json.title = title;
          json.price = price;
          json.img = img;

          res.send(json);

      })
      .catch((err) => {
          console.log(err);
      });

  })

module.exports = router;
