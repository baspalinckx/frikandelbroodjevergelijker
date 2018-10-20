const rp = require('request-promise');
const cheerio = require('cheerio');
const jumbo4stuks    = {
    uri: `https://www.jumbo.com/jumbo-reuze-rozijnenbollen-4-stuks/63582STK/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};
const jumbo9stuks = {
    uri: `https://www.jumbo.com/jumbo-roomboter-mini-rozijnenbollen-9-stuks/63891STK/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(jumbo4stuks)
    .then(($) => {
        console.log($('.jum-price-format').text());
        console.log($('[data-dynamic-block-name=Title]').text());
        // console.log($('.jum-item-price').text());

    })
    .catch((err) => {
        console.log(err);
    });

rp(jumbo9stuks)
    .then(($) => {
        console.log($('.jum-price-format').text());
        console.log($('[data-dynamic-block-name=Title]').text());
        // console.log($('.jum-item-price').text());

    })
    .catch((err) => {
        console.log(err);
    });

