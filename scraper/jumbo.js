const rp = require('request-promise');
const cheerio = require('cheerio');
const jumbofrikandelbroodje    = {
    uri: `https://www.jumbo.com/jumbo-frikandelbroodjes-met-currysaus-300g/188540PAK/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(jumbofrikandelbroodje)
    .then(($) => {
        console.log($('.jum-price-format').text());
        console.log($('[data-dynamic-block-name=Title]').text());
        console.log($('.jum-product-image img').attr('data-jum-src'));

    })
    .catch((err) => {
        console.log(err);
    });
