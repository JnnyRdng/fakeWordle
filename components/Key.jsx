import styles from './Key.module.css';

export default function Key({ onKeyPress, letter, keyClass, wide = false }) {

  const keyStyle = [
    styles.key,
    wide ? styles.wideKey : styles.regularKey,
    'default-colour',
    keyClass,
  ].join(' ');


  return (
    <button
      className={keyStyle}
      onClick={() => onKeyPress(letter)}
    >
      {letter}
    </button >
  )
}