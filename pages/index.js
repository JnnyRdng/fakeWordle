import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Keyboard from '../components/Keyboard';
import Game from '../components/Game';
import { getRandomWord, getClasses } from '../utils/wordDictionary';
import { ROWS } from '../utils/config';
import EndGame from '../components/EndGame';


export default function Home() {

  const emptyBoard = {};
  const emptyClasses = {};
  for (let i = 0; i < ROWS; i++) {
    emptyBoard[i] = '';
    emptyClasses[i] = ['', '', '', '', ''];
  }
  const emptyKeys = { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '', Q: '', R: '', S: '', T: '', U: '', V: '', W: '', X: '', Y: '', Z: '', }

  const [selectedWord, setSelectedWord] = useState(getRandomWord());
  const [typedWords, setTypedWords] = useState(emptyBoard);
  const [active, setActive] = useState(0);
  const [classes, setClasses] = useState(emptyClasses);
  const [keyClasses, setKeyClasses] = useState(emptyKeys);
  const [won, setWon] = useState(false);
  const [failed, setFailed] = useState(false);

  const resetGame = () => {
    setTypedWords(emptyBoard);
    setClasses(emptyClasses);
    setKeyClasses(emptyKeys);
    setActive(0);
    setWon(false);
    setFailed(false);
    setSelectedWord(getRandomWord());
  }

  const onKeyPress = letter => {
    if (typedWords[active].length === selectedWord.length) return;
    setTypedWords({ ...typedWords, [active]: typedWords[active] + letter });
  }
  const onBackspace = () => {
    if (typedWords[active].length === 0) return;
    setTypedWords({ ...typedWords, [active]: typedWords[active].slice(0, typedWords[active].length - 1) });
  }

  const onValidate = () => {
    const word = typedWords[active];
    if (word.length !== 5) return;

    const rowClass = getClasses(selectedWord, word);
    // set classes on keyboard keys if a valid word
    if (!rowClass.every(className => className === 'not-a-word')) {
      addKeyClasses(word, rowClass);
    }
    // set classes on game grid tiles
    setClasses({ ...classes, [active]: rowClass });
    const success = word === selectedWord;
    if (success) {
      setWon(true);
      return;
    } else if (active === ROWS - 1) {
      setFailed(true);
    }
    // increment active row
    setActive(active + 1);
  }

  const addKeyClasses = (word, rowClass) => {
    const tempKeys = { ...keyClasses };
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (tempKeys[letter] === '' || tempKeys[letter] === 'wrong-position-colour') {
        tempKeys[letter] = rowClass[i];
      }
    }
    setKeyClasses(tempKeys);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Wordle</title>
        <meta name="description" content="Another wordle clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Fake Wordle</h1>
        <Game typedWords={typedWords} activeRow={active} classes={classes} />
        <br />
        {failed || won ?
          <EndGame isSuccess={won} word={selectedWord} reset={resetGame} />
          :
          <Keyboard onKeyPress={onKeyPress} onBackspace={onBackspace} onValidate={onValidate} keyClasses={keyClasses} />
        }
      </main>
    </div>
  )
}
