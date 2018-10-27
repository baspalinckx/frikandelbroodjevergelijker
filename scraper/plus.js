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

        let titel = ($('.pdpTitleRedesign').text());
        let price = ($('.product-tile__price').text());
        let omschrijving = ($('.prod-attrib-item.wettelijke_naam').text());
        let img = ("https://www.plus.nl"+$('.lazy').attr('data-src'));
        // console.log($('.price').text());
        // console.log($('.productImg img').attr('data-srcset'));

        return {
          titel,
          price,
          omschrijving,
          img
        }

    })
    .catch((err) => {
        console.log(err);
    });
