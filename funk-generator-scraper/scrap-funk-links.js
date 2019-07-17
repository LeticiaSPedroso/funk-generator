const puppeteer = require('puppeteer');
const { writeFileSync } = require('fs');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const navigationPromise = page.waitForNavigation();
  
  await page.goto('https://www.letras.mus.br/mais-acessadas/funk/');
  await page.waitFor(3000);

  await navigationPromise;
  await page.waitForSelector('.top-list_mus.cnt-list--col1-3');

  const urls = await page.$$eval('.top-list_mus.cnt-list--col1-3 > li > a', event => {
    return event.map(evt => 'https://www.letras.mus.br' + evt.getAttribute('href'))
  });

  console.log('funksUrl', urls);
  writeFileSync('./funks-url.js', `module.exports = ${JSON.stringify(urls, null, 2)}`, 'utf8');
  await browser.close();
}

run();