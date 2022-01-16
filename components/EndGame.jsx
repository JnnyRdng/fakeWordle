import styles from './EndGame.module.css';

export default function EndGame({ isSuccess, word }) {

  const message = isSuccess ? 'You won!' : 'You lost!';

  return (
    <div className={styles.container}>
      <h3>{message}</h3>
      <h4>The word was <span>{word}</span></h4>
    </div>
  );
}