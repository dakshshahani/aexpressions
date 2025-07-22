
import styles from '../styles/Button.module.css';

export default function Button(props) {
  return (
    <button onClick={() => props.clickFunction(props.id)} className={styles.button}>{props.text}</button>
  );
}   