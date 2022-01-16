import styles from './EndGame.module.css';
import Key from './Key';

export default function EndGame({ isSuccess, word, reset }) {

  const message = isSuccess ? 'You won!' : 'You lost!';

  return (
    <div className={styles.container}>
      <h3>{message}</h3>
      <h4>The word was <span>{word}</span></h4>
      <br />
      <Key letter='New Game' width='ultraWide' onKeyPress={reset} />
    </div>
  );
}