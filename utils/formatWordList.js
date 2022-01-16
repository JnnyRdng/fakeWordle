// import fs from 'fs';
const fs = require('fs');

// function loadWords() {
//   return fs.readFileSync('fiveLetterWords.txt', 'utf-8')
//     .toString()
//     .replace(/\r\n/g, '\n')
//     .split('\n');
// }

const numbers = {
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six'
}

const number = 5;

function formatWordList() {
  const lines = fs.readFileSync('brit-a-z.txt', 'utf-8').toString().toUpperCase().replace(/\r\n/g, '\n').split('\n');
  const fiveLetterWords = [];
  console.log(lines);

  const reg = RegExp(/^[a-zA-Z]{5}$/);

  for (let line of lines) {
    if (line.match(reg) !== null && line.length === 5) {
      fiveLetterWords.push(line);
    }
  }
  console.log('5 letters count = ', fiveLetterWords.length);
  // console.log(fiveLetterWords)

  var file = fs.createWriteStream('fiveLetterWords.txt');
  file.on('error', function (err) { /* error handling */ });
  fiveLetterWords.forEach(function (v) { file.write(v + '\n'); });
  file.end();
}

formatWordList();