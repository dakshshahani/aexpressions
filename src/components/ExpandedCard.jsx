import React from "react";
import styles from "../styles/ExpandedCard.module.css";
import Button from "./Button";

export default function ExpandedCard(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.ExpandedCard}></div>
      <Button text="Close" clickFunction={props.onClose} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <div className={styles.codeContainer}>
          <p className={styles.code}>{props.code}</p>
        </div>
        <h3 className="cardTitle">How it works</h3>
        <p className="cardDescription">{props.explanation}</p>
        <h3 className="cardTitle">Example</h3>
        <p className="cardDescription">{props.example}</p>
        <h3 className="cardTitle">Use Case</h3>
        <p className="cardDescription">{props.useCase}</p>
      </div>
    </div>
  );
}
