import React from 'react';
import styles from '../styles/card.module.css';
import Button from './Button';

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.card}>
        <div className={styles.cardContent}>
            <h3 className = {styles.cardTitle}>{props.title}</h3>
            <p className = {styles.cardDescription}>{props.description}</p>
            <Button text="Learn More" />
        </div>
    </div>
    </div>
  );
}