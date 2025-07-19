import React from "react";
import styles from '../styles/navbar.module.css';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <p className={styles.navbarTitle}>AExpressions</p>
        <div className={styles.navbarLinks}>
            <a href="/popularExpressions" className={styles.navbarLink}>
              Popular Expressions
            </a>
            <a href="/chat" className={styles.navbarLink}>
            Ask AI
            </a>
            <a href="/about" className={styles.navbarLink}>
            About
          </a>
        </div>
      </div>
    </nav>
  );
}