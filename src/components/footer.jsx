import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer id="end" className={styles.footer}>
      <p>© {new Date().getFullYear()} AExpressions</p>
    </footer>
  );
}
