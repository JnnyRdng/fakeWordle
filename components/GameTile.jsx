import { useState } from 'react';
import styles from './Game.module.css';

export default function GameTile({ letter, active, classString }) {

  const [display, setDisplay] = useState(letter);

  const classNames = [
    'default-colour',
    styles.tile,
    // active ? '' : styles.darken,
    classString
  ].join(' ');

  return (
    <div className={classNames}>
      {letter}
    </div>
  );
}