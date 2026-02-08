import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

// 정적 생성을 위해 데이터 가져오기 (Next.js 13+ App Router에서는 컴포넌트 내부에서 직접 호출 가능)
// 하지만 여기서는 데이터 fetching 로직 분리를 위해 getSortedPostsData 사용

export default function DiaryPage() {
    const allPostsData = getSortedPostsData();

    return (
        <section>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                borderBottom: '2px solid var(--primary-color)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
            }}>
                일기 목록
            </h2>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {allPostsData.map(({ id, date, title, description, mood }) => (
                    <article key={id} className="card" style={{ cursor: 'pointer' }}>
                        <Link href={`/diary/${id}`} style={{ display: 'block', textDecoration: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <small style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{date}</small>
                                {mood && <span style={{ fontSize: '1.2rem' }}>{mood}</span>}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                                {title}
                            </h3>
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                {description}
                            </p>
                        </Link>
                    </article>
                ))}

                {allPostsData.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
                        작성된 일기가 없습니다.
                    </p>
                )}
            </div>
        </section>
    );
}
