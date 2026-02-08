import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    KKOOMM
                </Link>
                <nav className={styles.nav}>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/projects" className={styles.link}>Projects</Link>
                </nav>
            </div>
        </header>
    );
}
