import React from 'react';
import expressionList from './expressionList';
import styles from '../styles/popularExpressions.module.css';
import Card from './card';

export default function PopularExpressions() {


  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Popular Expressions</h2>
      <p className={styles.pageDescription}>These are the most popular expressions that you can use in After Effects</p>
      <div className={styles.popularExpressionsContainer}>
        {expressionList.map((expression) => (
          <Card key={expression.title} title={expression.title} description={expression.description} />
        ))}
      </div>
    </div>
  );
}