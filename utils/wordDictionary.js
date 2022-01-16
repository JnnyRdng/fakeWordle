import { WORD_LENGTH } from './config';
import { words } from './fiveLetterWords';

/**
 * Get a random word from the word list
 * @returns string: A word from the list
 */
export function getRandomWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  return words[randIndex];
}

/**
 * Checks that a word is in the dictionary
 * @param {string} word The word to check in the dictionary
 * @returns  True if in dictionary
 */
export function checkForValidWordInDictionary(word) {
  return words.includes(word);
}

/**
 * Gets classes for each guessed letter to show if it is correct, in wrong position, incorrect, or if word is not in dictionary
 * @param {string} actualWord The word that needs to be guessed
 * @param {string} guessedWord The current guess attempt
 * @returns {string[]} String array of classnames for each letter
 */
export function getClasses(actualWord, guessedWord) {
  if (!checkForValidWordInDictionary(guessedWord)) {
    return notAWordClasses;
  }

  let actual = actualWord.split('');
  let guessed = guessedWord.split('');
  const classes = [];

  // find correct letters
  for (let i = 0; i < 5; i++) {
    if (actual[i] === guessed[i]) {
      classes[i] = 'correct-colour';
      actual[i] = '-';
      guessed[i] = '-';
    }
  }

  // find letters in the wrong position OR that are just plain wrong
  for (let i = 0; i < 5; i++) {
    const guess = guessed[i];
    if (guess === '-') continue;
    if (actual.indexOf(guess) > -1) {
      classes[i] = 'wrong-position-colour';
    } else {
      classes[i] = 'incorrect-colour';
    }
    guessed[i] = '-';
  }

  return classes;
}

/**
 * class list for word not in dictionary
 */
const notAWordClasses = [
  'not-a-word',
  'not-a-word',
  'not-a-word',
  'not-a-word',
  'not-a-word',
];
