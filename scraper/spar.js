const rp = require('request-promise');
const cheerio = require('cheerio');
const sparfrikandelbroodje = {
    uri: `https://www.spar.nl/frikandelbroodje-xl-5234492/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};


rp(sparfrikandelbroodje)
    .then(($) => {
        console.log($('.c-price').text());
        console.log($('.c-offer__title').text());
        console.log($('.c-gallery__main-item img').attr('src'));
        // console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });
