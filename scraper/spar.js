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
        let price = ($('.c-price').text());
        let title = ($('.c-offer__title').text());
        let img = ($('.c-gallery__main-item img').attr('src'));

        return {
          price,
          title,
          img
        }

    })
    .catch((err) => {
        console.log(err);
    });
