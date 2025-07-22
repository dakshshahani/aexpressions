import React from "react";
import styles from "../styles/ExpandedCard.module.css";
import Button from "./Button";
import close from "./close.svg";

export default function ExpandedCard(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.ExpandedCard}>
        <div className={styles.cardSection}>
          <h2 className={styles.cardTitle}>
            {props.data.icon} {props.data.title}
          </h2>
          <div className={styles.button} onClick={props.onClose}>
            <img src={close} alt="close" />
          </div>
        </div>
        <div className={styles.codeContainer}>
          <code className={styles.code}>{props.data.code}</code>
        </div>
        <div className={styles.cardPart}>
          <h3 className={styles.cardTitle}>Explanation</h3>
          <p className={styles.cardDescription}>{props.data.explanation}</p>
        </div>
        <div className={styles.cardPart}>
          <h3 className={styles.cardTitle}>Example</h3>
          <p className={styles.cardDescription}>{props.data.example}</p>
        </div>
        <div className={styles.cardPart}>
          <h3 className={styles.cardTitle}>Use Case</h3>
          <p className={styles.cardDescription}>{props.data.useCase}</p>
        </div>
      </div>
    </div>
  );
}
