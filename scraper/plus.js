const rp = require('request-promise');
const cheerio = require('cheerio');
const plusfrikandelbroodje = {
    uri: `https://www.plus.nl/product/plus-frikandelbroodje-stuk-145-gram-520780`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(plusfrikandelbroodje)
    .then(($) => {
        console.log($('.pdpTitleRedesign').text());
        console.log($('.product-tile__price').text());
        console.log("https://www.plus.nl"+$('.lazy').attr('data-src'));
        // console.log($('.price').text());
        // console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });
