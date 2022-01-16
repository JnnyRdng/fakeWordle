import GameRow from "./GameRow";
import styles from './Game.module.css';
import { ROWS } from "../utils/config";

export default function Game({ typedWords, activeRow, classes }) {
  const rows = [];

  for (let row = 0; row < ROWS; row++) {
    rows.push(
      <GameRow
        typedWord={typedWords[row] || ''}
        key={row}
        notReached={activeRow < row}
        active={activeRow === row}
        classes={classes[row]}
      />);
  }

  return (
    <div className={styles.game}>
      {rows}
    </div>
  );
}