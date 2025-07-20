import React from 'react';
import styles from '../styles/card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}>
        <div className={styles.cardContent}>
            <h3 className = {styles.cardTitle}>{props.title}</h3>
            <p className = {styles.cardDescription}>{props.description}</p>
            <button className = {styles.cardButton}>Learn More</button>
        </div>
    </div>
  );
}