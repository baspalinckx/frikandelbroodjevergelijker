const rp = require('request-promise');
const cheerio = require('cheerio');
const aldiFrikandelbroodje = {
    uri: `https://www.aldi.nl/onze-producten/aldi-merken/snekkers/frikandelbroodjes-1123.article.html`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

  rp(aldiFrikandelbroodje)
      .then(($) => {
          console.log($('.mod-article-intro__header-headline').text());
          console.log($('.price__main').text());
          console.log("https://www.aldi.nl"+$('.mod-gallery-article__media.mod-gallery-article__media--img.has-lightbox').attr('href'));

      })
      .catch((err) => {
          console.log(err);
      });
