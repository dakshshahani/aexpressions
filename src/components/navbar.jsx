import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  const [hover, setHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }
  return (
    <nav className={isScrolled ? styles.navbar : styles.navbarHidden}>
      <div className={styles.navbarContent}>
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/"
          className={styles.navbarTitle}
        >
          AExpressions
        </a>
        <div className={styles.navbarLinks}>
          <a href="#popularExpressions" className={styles.navbarLink}>
            Popular
          </a>
          <a href="#chat" className={styles.navbarLink}>
            Search
          </a>
        </div>
      </div>
    </nav>
  );
}
