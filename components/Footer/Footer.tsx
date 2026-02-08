import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} KKOOMM. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="https://github.com/kkoomm" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:contact@kkoomm.com">Email</a>
                </div>
            </div>
        </footer>
    );
}
