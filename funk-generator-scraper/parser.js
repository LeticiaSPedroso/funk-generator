const { readFileSync, writeFileSync } = require('fs');

const funks = JSON.parse(
  readFileSync('./funks.json', 'utf8'),
);

const funksParsed = funks.map(funk => {
  const newFunk = {};
  newFunk.letterWithHtml = funk.letter;
  newFunk.name = funk.songName;
  newFunk.author = funk.author;
  newFunk.letter = funk.letter
    .replace(/<br>/g, '\n')
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .trim();
  return newFunk;
});

writeFileSync('./funks-parsed.json', JSON.stringify(funksParsed, null, 2), 'utf8');
console.log('* Parsed successfully');