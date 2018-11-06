const rp = require('request-promise');
const cheerio = require('cheerio');
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
