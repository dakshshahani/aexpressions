import React from "react";
import styles from "../styles/FirstButton.module.css";
import { Check, ChevronDown } from "lucide-react";

export default function FirstButton() {
    function scrollToContent() {
        window.scrollTo({
            top: 900,
            behavior: "smooth",
        });
    }
  return (
    <div onClick={scrollToContent} className={styles.buttonContainer}>
        <ChevronDown className={styles.chevronDown} />
        <span className={styles.buttonText}>Start Exploring</span>
    </div>
  );
}
