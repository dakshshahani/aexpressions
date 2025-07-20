import React from "react";
import styles from "../styles/chatPage.module.css";

export default function ChatPage() {
  return (
    <div id = "chat">
        <div className={styles.page}>
      <h2 className={styles.pageTitle}>Chat with AExpressions</h2>
      <div className={styles.chatBox}>
        <div className={styles.chatTextLeft}>
          <p>Enter your expression and we'll create it for you!</p>
          <form>
            <input type="text" placeholder="camera shake wiggle expression.." />
           <div className={styles.buttons}>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
           </div>
          </form>
        </div>
        <div className={styles.codeContainer}>
          <p>Copy the code and paste it into your After Effects project.</p>
          <div className={styles.code}>
            <code>
              <p>camera shake wiggle expression..</p>
            </code>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
