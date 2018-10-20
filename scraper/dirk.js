const rp = require('request-promise');
const cheerio = require('cheerio');
const dirkFrikandelbroodje = {
    uri: `https://www.dirk.nl/boodschappen/brood-beleg-koek/afgebakken-brood-snacks/frikandelbroodje-xxl/10614`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

  rp(dirkFrikandelbroodje)
      .then(($) => {
          console.log($('.shopping-list-header--title').text());
          console.log($('.shopping-list-header--title').html());
          console.log($('span[class="shopping-list-header--title"]').html());
          console.log($("title").text());

      })
      .catch((err) => {
          console.log(err);
      });
