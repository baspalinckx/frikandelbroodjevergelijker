const rp = require('request-promise');
const cheerio = require('cheerio');
const coop6stuks = {
    uri: `https://www.coop.nl/coop-rozijn-krentenbollen-6-stuks/product/8715196088085`,
    transform: function (body) {
        return cheerio.load(body);
    }
};
const coopReuze = {
    uri: `https://www.coop.nl/coop-reuze-krentenbollen-4-stuks/product/8715196088078`,
    transform: function (body) {
        return cheerio.load(body);
    }
};



rp(coop6stuks)
    .then(($) => {
        console.log($('.altHead.head1').text());
        console.log($('.price').text());
        console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });

rp(coopReuze)
    .then(($) => {
        console.log($('.altHead.head1').text());
        console.log($('.price').text());
        console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });