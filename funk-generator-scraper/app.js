const puppeteer = require('puppeteer');
const { writeFileSync, existsSync } = require('fs');
const funksUrl = require('./funks-url');

const slugify = input => input
  .toString()
  .toLowerCase()
  .replace(/[áãâà]/gi, 'a')
  .replace(/[éê]/gi, 'e')
  .replace(/í/gi, 'i')
  .replace(/[óõô]/gi, 'o')
  .replace(/ú/gi, 'u')
  .replace(/ñ/gi, 'n')
  .replace(/ç/g, 'c')
  .replace(/[\s_]+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/-+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');

function run(url) {
  return new Promise(async resolve => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    const navigationPromise = page.waitForNavigation();
    
    await page.goto(url);
    await page.waitFor(3000);
  
    await navigationPromise;
    await page.waitForSelector('.cnt-letra.p402_premium');
  
    const songName = await page.$eval('.cnt-head_title > h1', event => event.textContent.trim());
    const author = await page.$eval('.cnt-head_title > h2', event => event.textContent.trim());
    const letter = await page.$eval('.cnt-letra.p402_premium', event => event.innerHTML.trim());
    const letterWithHtml = await page.$eval('.cnt-letra.p402_premium', event => event.textContent.trim());
  
    const objSong = { songName, author, letter, letterWithHtml };
    console.log(`${songName} by ${author} downloaded`);

    await browser.close();
    resolve(objSong);
  });
}

async function main() {
  for (let index = 0; index < funksUrl.length; index++) {
    const url = funksUrl[index];
    const song = await run(url);
    const filename = `${slugify(song.songName)}-${slugify(song.author)}.json`;
    const path = './funks/' + filename;
    if (!existsSync(path)) {
      writeFileSync(path, JSON.stringify(song, null, 2));
      console.log(`${(funksUrl.length - index) - 1} to finish...`)
      console.log('\n');
    }
  }
}

main();