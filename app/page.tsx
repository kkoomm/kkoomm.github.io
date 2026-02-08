import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Hello, I'm</span>
            <br />
            <span className={styles.name}>KKOOMM</span>
          </h1>
          <p className={styles.subtitle}>
            Minimalist & Creative Developer
          </p>
          <div className={styles.actions}>
            <Link href="/about" className={styles.primaryBtn}>
              About Me
            </Link>
            <Link href="/projects" className={styles.secondaryBtn}>
              View Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
