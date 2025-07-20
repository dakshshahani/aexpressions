
import styles from '../styles/Button.module.css';

export default function Button(props) {
  return (
    <button className={styles.button} type={props.type}>{props.text}</button>
  );
}   