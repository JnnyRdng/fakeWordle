import Key from "./Key";
import styles from './Keyboard.module.css';

export default function Keyboard({ onKeyPress, onBackspace, onValidate, keyClasses }) {

  const topRow = mapToKey(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']);
  const midRow = mapToKey(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']);
  const botRow = mapToKey(['Z', 'X', 'C', 'V', 'B', 'N', 'M']);

  function mapToKey(array) {
    return array.map((letter, index) => {
      return (
        <Key letter={letter} key={letter} onKeyPress={onKeyPress} keyClass={keyClasses[letter]} />
      );
    });
  }

  const enterKey = <Key key='enter' letter={'GO'} width='wide' onKeyPress={onValidate} />
  const backspaceKey = <Key key='backspace' letter={'⌫'} width='wide' onKeyPress={onBackspace} />

  botRow.unshift(enterKey);
  botRow.push(backspaceKey);

  const rows = [topRow, midRow, botRow].map((row, index) => {
    return (
      <div className={styles.keyboardRow} key={index}>
        {row}
      </div>
    );
  });

  return (
    <div className={styles.keyboard}>
      {rows}
    </div>
  );


}
