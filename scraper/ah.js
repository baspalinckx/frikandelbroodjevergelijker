// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const ah6stuks = {
//     uri: `https://www.ah.nl/producten/product/wi30248/ah-krentenbollen`,
//     transform: function (body) {
//         return cheerio.load(body);
//         }
// };
// const coopReuze = {
//     uri: `https://www.coop.nl/coop-reuze-krentenbollen-4-stuks/product/8715196088078`,
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };
//
// rp(ah6stuks)
//     .then(($) => {
//         console.log($('.multicol').text());
//         console.log($('.product-description').text());
//         console.log($('.bold.discount-block__label').text());
//         console.log($('.section__content').text());
//         // console.log($);
//
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// rp(coopReuze)
//     .then(($) => {
//         console.log($('.price').text());
//         console.log($('.logoList').text());
//         console.log($('.allergyInfo').text());
//
//     })
//     .catch((err) => {
//         console.log(err);
//     });

var xray = require('x-ray');
var x = xray();

xray('http://google.com', 'title')(function(err, title) {
    console.log(title) // Google
})