"use client";

import { useState } from "react";
import { useDiaryLock } from "../context/DiaryLockContext";
import styles from "../styles/utils.css"; // 클래스 사용을 위해

export default function DiaryLockGuard({ children }) {
    const { isLocked, unlock } = useDiaryLock();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // 환경 변수에서 비밀번호를 가져오거나 기본값 사용
        const correctPassword = process.env.NEXT_PUBLIC_DIARY_PASSWORD || "1234";

        if (password === correctPassword) {
            unlock();
            setError("");
        } else {
            setError("비밀번호가 올바르지 않습니다.");
            setPassword("");
        }
    };

    if (!isLocked) {
        return <>{children}</>;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            textAlign: "center"
        }}>
            <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 style={{ marginBottom: "1rem", color: "var(--text-color)" }}>🔒 일기장 잠금</h2>
                <p style={{ marginBottom: "1.5rem", color: "var(--primary-color)" }}>
                    이곳은 비밀스러운 공간입니다.<br />
                    비밀번호를 입력해주세요.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호 입력"
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            marginBottom: "1rem",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--border-color)",
                            fontSize: "1rem"
                        }}
                    />
                    {error && <p style={{ color: "var(--accent-color)", marginBottom: "1rem", fontSize: "0.9rem" }}>{error}</p>}
                    <button type="submit" className="btn" style={{ width: "100%" }}>
                        확인
                    </button>
                </form>
                <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#aaa" }}>
                    (초기 비밀번호: 1234)
                </p>
            </div>
        </div>
    );
}
