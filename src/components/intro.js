import styles from "../styles/intro.module.css";
import { useState } from "react";

import FirstButton from "./FirstButton";


export default function Intro() {
  const [isScrolled, setIsScrolled] = useState(false);

  function scrollToContent() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsScrolled(true);
  }
  return (
    <div id="AExpressions" className={styles.introContainer}>
      <div className={styles.intro}>
        <h1>AExpressions</h1>
        <h2>Here to help you with <span>After Effects Math</span> 🤓</h2>
      </div>
      <p className={styles.introText}>
        Discover powerful expressions to automate animations, create complex
        effects, and streamline your workflow. From simple wiggles to advanced
        mathematical formulas, find exactly what you need to bring your
        compositions to life.{" "}
      </p>
      <div className={styles.introButton}>
       <FirstButton />
      </div>
    </div>
  );
}
