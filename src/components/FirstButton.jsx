import React from 'react';
import styles from '../styles/FirstButton.module.css';

export default function Button(props) {
  return (
    <button className={styles.button} type={props.type}>{props.text}</button>
  );
}