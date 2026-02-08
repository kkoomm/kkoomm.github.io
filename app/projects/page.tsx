import Link from 'next/link';
import styles from './page.module.css';

const projects = [
    {
        id: 1,
        title: "Personal Website",
        description: "Next.js와 GitHub Pages를 이용한 개인 홈페이지",
        tags: ["Next.js", "TypeScript", "CSS Modules"],
        link: "https://kkoomm.github.io"
    },
    {
        id: 2,
        title: "Project Alpha",
        description: "사용자 중심의 웹 애플리케이션 프로토타입",
        tags: ["React", "Firebase", "Tailwind CSS"],
        link: "#"
    },
    {
        id: 3,
        title: "Project Beta",
        description: "데이터 시각화 대시보드",
        tags: ["Vue.js", "D3.js", "Node.js"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <Link href={project.link} className={styles.link} target="_blank">
                            View Project &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
