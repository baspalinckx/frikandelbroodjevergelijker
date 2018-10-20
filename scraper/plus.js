const rp = require('request-promise');
const cheerio = require('cheerio');
const plus6stuks = {
    uri: `https://www.plus.nl/product/plus-krentenbollen-zak-6-stuks-331429`,
    transform: function (body) {
        return cheerio.load(body);
    }
};
const plus4stuks = {
    uri: `https://www.plus.nl/product/plus-reuze-krentenbollen-zak-4-stuks-321496`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(plus6stuks)
    .then(($) => {
        console.log($('.productTitle').text());
        console.log($('.product-tile__price').text());
        console.log("https://www.plus.nl"+$('.lazy').attr('data-src'));
        // console.log($('.price').text());
        // console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });

rp(plus4stuks)
    .then(($) => {
        console.log($('.productTitle').text());
        console.log($('.product-tile__price').text());
        console.log("https://www.plus.nl"+$('.lazy').attr('data-src'));
        // console.log($('.price').text());
        // console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });