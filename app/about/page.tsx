import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.content}>
                    <p className={styles.text}>
                        안녕하세요, 저는 웹 개발자 <strong>KKOOMM</strong>입니다.
                    </p>
                    <p className={styles.text}>
                        사용자 경험을 최우선으로 생각하며, 심플하고 직관적인 디자인을 추구합니다.
                        복잡한 문제를 해결하고, 아름다운 웹 경험을 만드는 것에 열정을 가지고 있습니다.
                    </p>
                    <div className={styles.divider} />
                    <h2 className={styles.subtitle}>Skills</h2>
                    <ul className={styles.skills}>
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>CSS / Tailwind / SCSS</li>
                        <li>Node.js</li>
                        <li>Git / GitHub</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
