import { getClasses, checkForValidWordInDictionary } from "../utils/wordDictionary";
import { words } from '../utils/fiveLetterWords';

const correct = 'correct-colour';
const wrongPos = 'wrong-position-colour';
const wrong = 'incorrect-colour';
const invalid = 'not-a-word';

describe("get correct classes for guessed letters", () => {

  it("should get all green for correct answer", () => {
    const expected = [correct, correct, correct, correct, correct];
    const actual = getClasses('TOAST', 'TOAST');
    expect(actual).toEqual(expected);
  });

  it("should return invalid for bad word", () => {
    const expected = [invalid, invalid, invalid, invalid, invalid];
    const actual = getClasses('TOAST', 'FFFFF');
    expect(actual).toEqual(expected);
  });

  it('should get the first letter correct', () => {
    const expected = [correct, wrong, wrong, wrong, wrong];
    const actual = getClasses('BRAVE', 'BOOKS');
    expect(actual).toEqual(expected);
  });

  it('should get the second letter correct', () => {
    const expected = [wrong, correct, wrong, wrong, wrong];
    const actual = getClasses('BRAVE', 'CROOK');
    expect(actual).toEqual(expected);
  });

  it('should get the third letter correct', () => {
    const expected = [wrong, wrong, correct, wrong, wrong];
    const actual = getClasses('PRAWN', 'BLADE');
    expect(actual).toEqual(expected);
  });

  it('should get the fourth letter correct', () => {
    const expected = [wrong, wrong, wrong, correct, wrong];
    const actual = getClasses('BLANK', 'THING');
    expect(actual).toEqual(expected);
  });

  it('should get the fifth letter correct', () => {
    const expected = [wrong, wrong, wrong, wrong, correct];
    const actual = getClasses('PLACE', 'WORSE');
    expect(actual).toEqual(expected);
  });

  it('should get TOAST and THUMB correct', () => {
    const expected = [correct, wrong, wrong, wrong, wrong];
    const actual = getClasses('TOAST', 'THUMB');
    expect(actual).toEqual(expected);
  });

  it('should get TESTS and TOAST correct', () => {
    const expected = [correct, wrong, wrong, wrongPos, wrongPos];
    const actual = getClasses('TESTS', 'TOAST');
    expect(actual).toEqual(expected);
  });

  it('should show RIVED and DRIVE as all wrong position', () => {
    const expected = [wrongPos, wrongPos, wrongPos, wrongPos, wrongPos];
    const actual = getClasses('RIVED', 'DRIVE');
    expect(actual).toEqual(expected);
  });

  it('should get THUMB and PROUD correct', () => {
    const expected = [wrong, wrong, wrong, wrongPos, wrong];
    const actual = getClasses('THUMB', 'PROUD');
    expect(actual).toEqual(expected);
  })
});

describe('can verify words are in the dictionary', () => {
  it('should find a word in the dictionary', () => {
    let word = words[10];
    expect(checkForValidWordInDictionary(word)).toEqual(true);
    word = words[100];
    expect(checkForValidWordInDictionary(word)).toEqual(true);
    expect(checkForValidWordInDictionary('THUMB')).toEqual(true);
  });

  it('should reject words not in the dictionary', () => {
    expect(checkForValidWordInDictionary('FUCKY')).toEqual(false);
    expect(checkForValidWordInDictionary('AAAAA')).toEqual(false);
    expect(checkForValidWordInDictionary('12345')).toEqual(false);
  });
});