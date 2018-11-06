const rp = require('request-promise');
const cheerio = require('cheerio');
const jumbofrikandelbroodje    = {
    uri: `https://www.jumbo.com/jumbo-frikandelbroodjes-met-currysaus-300g/188540PAK/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};


function scrapeJumbo() {
  rp(jumbofrikandelbroodje)
      .then(($) => {
          let price = ($('.jum-price-format').text());
          let title = ($('[data-dynamic-block-name=Title]').text());
          let img = ($('.jum-product-image img').attr('data-jum-src'));

          return{
            price,
            title,
            img
          }



      })
      .catch((err) => {
          console.log(err);
      });
}

module.exports = {
  scrapeJumbo
}
