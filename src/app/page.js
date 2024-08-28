
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Naomi Minagi</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img
        src="/imagen-para-website.png"
        alt="Imagen"
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <span className={styles.title + " " + styles.tellowText}>Naomi</span> 
        <br />
        <span className={styles.title}>Minagi</span>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <span className={styles.grayText}>Age: </span> 16
            </li>
          <li>
            <span className={styles.grayText}>Nationality:</span>Guatemalteca
            </li>
          <li> 
          <span className={styles.grayText}>Skill set:</span>Bach en compu
          </li>
          <li> 
          <span className={styles.grayText}>Languages:</span> English, Spa</li>
        </ul>
      </div>
      </section>
    </main>
  );
}
