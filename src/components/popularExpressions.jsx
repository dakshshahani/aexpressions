import React from "react";
import expressionList from "./expressionList";
import styles from "../styles/popularExpressions.module.css";
import Card from "./card";

export default function PopularExpressions() {
  return (
    <div id="popularExpressions">
      <div className={styles.page}>
        <div>
          <h2 className={styles.pageTitle}>Popular Expressions</h2>
          <p className={styles.pageDescription}>
            Essential expressions every After Effects artist should know.
          </p>
        </div>
        <div className={styles.popularExpressionsContainer}>
          {expressionList.map((expression) => (
            <Card
              key={expression.title}
              title={expression.title}
              description={expression.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
