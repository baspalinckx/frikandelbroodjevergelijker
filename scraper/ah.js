
const puppeteer = require('puppeteer');

  const scrape = async () => {
      const browser = await puppeteer.launch({headless: true});
      const page = await browser.newPage();

      await page.goto('https://www.ah.nl/producten/product/wi230720/ah-frikandelbroodje',
    {waitUntil: 'networkidle2'});
      await page.waitForSelector('div.product-price')

      const result = await page.evaluate(() => {
          let price = document.querySelector('div.product-price').innerText;
          let summary = document.querySelector('p.product__summary').innerText;
          // let title = "document.querySelector('h1.product-description__title.heading--6.-multiline').innerText;"
          let title = "AH Frikandelbroodje"
          let img = document.querySelector('img.image.image--lazy-load.product-image.js-product-image-animated.image-container__image.js-imageloaded');
          let src = img.getAttribute('src');

          return {
              summary,
              price,
              title,
              src
          }

      });

      browser.close();
      return result;
  };

scrape().then((value) => {
    console.log(value);
});

module.exports = {
  scrape
}
