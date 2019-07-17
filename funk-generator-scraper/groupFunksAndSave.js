const { readdirSync, readFileSync, writeFileSync } = require('fs');

const files = readdirSync('./funks');

const funks = files.map(file => {
  return JSON.parse(
    readFileSync('./funks/' + file, 'utf8')
  );
});

writeFileSync('./funks.json', JSON.stringify(funks, null, 2));