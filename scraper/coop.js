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
          console.log($('.altHead.head1').text());
          console.log($('.price').text());
          console.log($('.productImg img').attr('data-srcset'));
          
      })
      .catch((err) => {
          console.log(err);
      });
