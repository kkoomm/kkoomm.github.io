import Link from "next/link";
import styles from "../styles/utils.css"; // utils.css는 global로 import 되었으므로 여기서 import할 필요는 없지만 명시적으로 사용 가능. 실제로는 className 문자열로 사용.

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 0" }}>
      <h2 className="title">오늘의 기록, 내일의 추억</h2>
      <p className="subtitle">
        소소한 일상을 기록하고 간직해보세요.<br />
        당신의 이야기가 이곳에 쌓여갑니다.
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
        <Link href="/diary" className="btn">
          일기 쓰러 가기
        </Link>
        <Link href="/guestbook" className="btn btn-outline">
          방명록 남기기
        </Link>
      </div>

      <div style={{ marginTop: "4rem", opacity: 0.8 }}>
        {/* 장식용 이미지 영역 (추후 이미지 추가 가능) */}
        <div style={{
          width: "100%",
          height: "300px",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#aaa",
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)"
        }}>
          <span>Design Placeholder (Image)</span>
        </div>
      </div>
    </div>
  );
}
