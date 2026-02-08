import { getAllPostIds, getPostData } from '../../../lib/posts';
import Link from 'next/link';

// 정적 경로 생성 (Static Exports 필수)
export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map((post) => ({
        slug: post.params.slug,
    }));
}

export default async function RequestPage(props) {
    const params = await props.params; // Next.js 15+에서는 props.params가 Promise일 수 있음. 14에서는 객체.
    // 안전하게 await 처리 (Next.js 버전에 따라 다름, 여기선 14+ 가정이므로 await 권장)

    const postData = await getPostData(params.slug);

    return (
        <article className="card" style={{ maxWidth: '800px', margin: '0 auto', boxShadow: 'none', padding: '0 0 2rem 0' }}>
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <Link href="/diary" className="btn-outline" style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem', marginBottom: '1rem', display: 'inline-block', border: 'none' }}>
                    ← 목록으로 돌아가기
                </Link>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', marginTop: '1rem', color: 'var(--text-color)' }}>{postData.title}</h1>
                <div style={{ color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                    {postData.date} {postData.mood && `· 기분: ${postData.mood}`}
                </div>
            </div>

            {postData.image && (
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    {/* Next.js Image 컴포넌트는 export 모드에서 최적화 이슈가 있을 수 있으므로 img 태그 사용 + unoptimized 옵션 필요하지만,
               config에서 unoptimized: true 했으므로 img 태그 사용해도 무방. */}
                    {/* <img src={postData.image} alt={postData.title} style={{ width: '100%', height: 'auto' }} /> */}
                    {/* 샘플 이미지가 없으므로 주석 처리함. 실제 사용 시 주석 해제 */}
                </div>
            )}

            {/* Markdown Content */}
            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}
            />
        </article>
    );
}
