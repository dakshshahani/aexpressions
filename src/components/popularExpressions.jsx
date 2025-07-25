import React from "react";
import expressionList from "./expressionList";
import styles from "../styles/popularExpressions.module.css";
import Card from "./card";
import ExpandedCard from "./ExpandedCard";
import { useState } from "react";


export default function PopularExpressions() {
  const [selectedExpression, setSelectedExpression] = useState(null);

  function handleClick(id) {
    setSelectedExpression(
      expressionList.find((expression) => expression.id === id)
    );
  }

  return (
    <div id="popularExpressions">
      <div className={styles.page}>
        <div>
          {selectedExpression && (
            <ExpandedCard
              data={selectedExpression}
              onClose={() => setSelectedExpression(null)}
            />
          )}

          <h2 className={styles.pageTitle}>Popular Expressions</h2>
          <p className={styles.pageDescription}>
            Essential expressions every After Effects artist should know.
          </p>
        </div>
        <div className={styles.popularExpressionsContainer}>
          {expressionList.map((expression) => (
            <Card
              key={expression.id}
              id={expression.id}
              title={expression.title}
              description={expression.description}
              icon={expression.icon}
              category={expression.category}
              code={expression.code}
              explanation={expression.explanation}
              example={expression.example}
              useCase={expression.useCase}
              clickFunction={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
