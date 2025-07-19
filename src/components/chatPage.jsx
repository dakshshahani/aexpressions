import React from 'react';
import styles from '../styles/chatPage.module.css';

export default function ChatPage() {
  return (
    <div className={styles.chatBox}>
        <div className={styles.chatTextLeft}>
        <h2>Can't find your expression? Ask AI to create it!</h2>
        <p>Enter your expression and we'll create it for you!</p>
        <form>
            <input type='text' placeholder='camera shake wiggle expression..' />
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
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
  );
}