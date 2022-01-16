import styles from './Key.module.css';

export default function Key({ onKeyPress, letter, keyClass, width = 'regular' }) {

  const keyStyle = [
    styles.key,
    styles[`${width}Key`],
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