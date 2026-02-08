"use client";

import { createContext, useContext, useState, useEffect } from "react";

const DiaryLockContext = createContext();

export function DiaryLockProvider({ children }) {
    const [isLocked, setIsLocked] = useState(true);

    // 컴포넌트 마운트 시 초기 상태 설정 (필요하다면 로컬 스토리지 확인 등)
    // 여기서는 항상 잠금 상태로 시작하도록 설정
    useEffect(() => {
        setIsLocked(true);
    }, []);

    const unlock = () => setIsLocked(false);
    const lock = () => setIsLocked(true);

    return (
        <DiaryLockContext.Provider value={{ isLocked, unlock, lock }}>
            {children}
        </DiaryLockContext.Provider>
    );
}

export function useDiaryLock() {
    return useContext(DiaryLockContext);
}
