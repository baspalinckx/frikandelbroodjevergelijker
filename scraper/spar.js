const rp = require('request-promise');
const cheerio = require('cheerio');
const spar4stuks = {
    uri: `https://www.spar.nl/spar-rozijnenbollen-reuze-2329654/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};


rp(spar4stuks)
    .then(($) => {
        console.log($('.c-price').text());
        console.log($('.c-offer__title').text());
        console.log($('.c-gallery__main-item img').attr('src'));
        // console.log($('.productImg img').attr('data-srcset'));

    })
    .catch((err) => {
        console.log(err);
    });

// rp(coopReuze)
//     .then(($) => {
//         console.log($('.altHead.head1').text());
//         console.log($('.price').text());
//         console.log($('.productImg img').attr('data-srcset'));
//
//     })
//     .catch((err) => {
//         console.log(err);
//     });