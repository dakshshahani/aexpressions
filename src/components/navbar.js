import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  const [hover, setHover] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setHover(true);
//       } else {
//         setHover(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }
  return (
    <nav className={styles.navbar}>
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
