import React from "react";
import styles from "../styles/chatPage.module.css";
import Button from "./Button";
import Replicate from "replicate";
import { useState } from "react";

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function handleRequest() {
    setResponse("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error("Front-End Error:", error);
      setResponse("An error occured");
    }
  }

  return (
    <div id="chat">
      <div className={styles.page}>
        <h2 className={styles.pageTitle}>Chat with AExpressions</h2>
        <div className={styles.chatBox}>
          <div className={styles.chatTextLeft}>
            <p>Enter your expression and we'll create it for you!</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRequest();
              }}
            >
              <input
                type="text"
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="camera shake wiggle expression.."
              />
              <div className={styles.buttons}>
                <Button type="submit" text="Submit" />
                <Button type="reset" text="Reset" />
              </div>
            </form>
          </div>
          <div className={styles.codeContainer}>
            <p>Copy the code and paste it into your After Effects project.</p>
            <div className={styles.code}>
              <code>code</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
