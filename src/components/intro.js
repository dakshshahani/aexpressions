import styles from '../styles/intro.module.css';

export default function Intro() {
  return (
    <div className={styles.introContainer}>
        <div className={styles.intro}>
            <h1>AExpressions</h1>
            <h2>Here to help you with After Effects Math 🤓</h2>
            <p className={styles.introText}>
            Discover powerful expressions to automate animations, create complex effects, and streamline your workflow. From simple wiggles to advanced mathematical formulas, find exactly what you need to bring your compositions to life. </p>
            <div className={styles.introButton}>
                <button>Start Exploring</button>
            </div>
        </div>

    </div>
  );
}   