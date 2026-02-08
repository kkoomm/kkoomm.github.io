"use client";

import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import styles from "../styles/utils.css";

export default function Guestbook() {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({ name: "", content: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [deleteId, setDeleteId] = useState(null); // 삭제 확인 모달용 ID
    const [deletePassword, setDeletePassword] = useState("");

    // 방명록 목록 불러오기 (실시간)
    useEffect(() => {
        const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setEntries(data);
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.content || !form.password) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, "guestbook"), {
                name: form.name,
                content: form.content,
                password: form.password, // 실제 서비스에선 해싱 필요하지만 여기선 간단히 저장
                createdAt: serverTimestamp()
            });
            setForm({ name: "", content: "", password: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("방명록 등록에 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        // 클라이언트 사이드에서 비밀번호 확인 (보안상 취약하지만 정적 사이트 한계)
        // 실제로는 서버(Cloud Functions)에서 검증하거나 Security Rules 사용 권장
        // 여기서는 간단히 로컬 데이터와 비교
        const entry = entries.find(e => e.id === deleteId);
        if (entry && entry.password === deletePassword) {
            try {
                await deleteDoc(doc(db, "guestbook", deleteId));
                setDeleteId(null);
                setDeletePassword("");
                alert("삭제되었습니다.");
            } catch (error) {
                alert("삭제 중 오류가 발생했습니다.");
            }
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <form onSubmit={handleSubmit} className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1rem" }}>방명록 남기기</h3>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <input
                        type="text"
                        placeholder="이름 (닉네임)"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        maxLength={20}
                    />
                    <input
                        type="password"
                        placeholder="삭제 비밀번호"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        style={inputStyle}
                        maxLength={20}
                    />
                </div>
                <textarea
                    placeholder="따뜻한 한마디를 남겨주세요."
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                    maxLength={500}
                />
                <button type="submit" className="btn" disabled={loading} style={{ width: "100%", marginTop: "0.5rem" }}>
                    {loading ? "등록 중..." : "등록하기"}
                </button>
            </form>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map(entry => (
                    <div key={entry.id} className="card" style={{ padding: "1rem", position: "relative" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                            <span style={{ fontWeight: "bold", color: "var(--text-color)" }}>{entry.name}</span>
                            <span style={{ fontSize: "0.8rem", color: "#888" }}>
                                {entry.createdAt?.toDate().toLocaleDateString()}
                            </span>
                        </div>
                        <p style={{ whiteSpace: "pre-wrap", color: "#444", fontSize: "0.95rem" }}>{entry.content}</p>
                        <button
                            onClick={() => setDeleteId(entry.id)}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "none",
                                border: "none",
                                color: "#ccc",
                                cursor: "pointer",
                                fontSize: "0.8rem"
                            }}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>

            {deleteId && (
                <div style={modalOverlayStyle}>
                    <div className="card" style={{ minWidth: "300px" }}>
                        <p style={{ marginBottom: "1rem" }}>삭제하시겠습니까?</p>
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            value={deletePassword}
                            onChange={e => setDeletePassword(e.target.value)}
                            style={{ ...inputStyle, marginBottom: "1rem" }}
                        />
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <button onClick={handleDelete} className="btn" style={{ flex: 1, backgroundColor: "var(--accent-color)" }}>삭제</button>
                            <button onClick={() => setDeleteId(null)} className="btn btn-outline" style={{ flex: 1 }}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border-color)",
    fontSize: "0.95rem",
};

const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};
