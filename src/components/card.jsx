import React from "react";
import styles from "../styles/card.module.css";
import Button from "./Button";

export default function Card(props) {

    function handleClick(id) {
        props.clickFunction(id);
    }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{props.title}</h3>
          <p className={styles.cardDescription}>{props.description}</p>
          <Button
            text="Learn More"
            clickFunction={handleClick}
            id={props.id}
          />
        </div>
      </div>
    </div>
  );
}
