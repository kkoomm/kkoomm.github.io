import Guestbook from "../../components/Guestbook";

export const metadata = {
    title: "방명록 | My Diary",
    description: "방문자들의 소중한 흔적",
};

export default function GuestbookPage() {
    return (
        <section>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h2 className="title" style={{ fontSize: "1.8rem" }}>Guestbook</h2>
                <p className="subtitle">자유롭게 흔적을 남겨주세요.</p>
            </div>
            <Guestbook />
        </section>
    );
}
