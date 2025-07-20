import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLinks}>
          <a href="#AExpressions" className={styles.navbarLink}>
            AExpressions
          </a>
          <a href="#popularExpressions" className={styles.navbarLink}>
            Popular Expressions
          </a>
          <a href="#chat" className={styles.navbarLink}>
            Ask AI
          </a>
        </div>
      </div>
    </nav>
  );
}
