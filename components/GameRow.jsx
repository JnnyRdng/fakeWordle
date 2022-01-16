import GameTile from "./GameTile";
import styles from './Game.module.css';
import { WORD_LENGTH } from "../utils/config";

export default function GameRow({ typedWord, notReached, active, classes }) {

  const letters = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    letters.push(
      <GameTile letter={typedWord[i] || ''} active={active} classString={classes[i]} key={i} />
    );
  }

  const rowStyle = [
    styles.row,
    notReached ? styles['not-reached'] : ''
  ].join(' ');

  return (
    <div className={rowStyle}>
      {letters}
    </div>
  )
}