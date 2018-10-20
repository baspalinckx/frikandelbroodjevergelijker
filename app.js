const rp = require('request-promise');
const cheerio = require('cheerio');
const coop6stuks = {
    uri: `https://www.coop.nl/coop-rozijn-krentenbollen-6-stuks/product/8715196088085`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(coop6stuks)
    .then(($) => {
        console.log($('.price').text());
        console.log($('.logoList').text());
        console.log($('.allergyInfo').text());

    })
    .catch((err) => {
        console.log(err);
    });