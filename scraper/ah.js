const fetch = require('node-fetch')
const JSDOM = require('jsdom').JSDOM

let selector = 'ul > li > a'
let url = 'https://www.ah.nl/producten/product/wi230720/ah-frikandelbroodje'

fetch(url)
  .then(resp => resp.text())
  .then(text => {
    let dom = new JSDOM(text,{ runScripts: "dangerously", resources: "usable" });
    let { document } = dom.window;
    let summary = document.getElementsByClassName('product__summary')[0].innerHTML;
    console.log(summary);
   })
