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
          let titel = ($('.altHead.head1').text());
          let price = ($('.price').text());
          let img = ($('.productImg img').attr('data-srcset'));

          return{
            titel,
            price,
            img
          }

      })
      .catch((err) => {
          console.log(err);
      });
