const rp = require('request-promise');
const cheerio = require('cheerio');
const ah6stuks = {
    uri: `https://www.ah.nl/producten/product/wi30248/ah-krentenbollen`,
    transform: function (body) {
        return cheerio.load(body);
        }
};

rp(ah6stuks)
    .then(($) => {
        console.log($('.multicol').text());
        console.log($('.product-description').text());
        console.log($('.bold.discount-block__label').text());
        console.log($('.section__content').text());
        console.log($("title").text());
        console.log($("product__summary").html());

        // console.log($);

    })
    .catch((err) => {
        console.log(err);
    });
