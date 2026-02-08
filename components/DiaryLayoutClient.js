"use client";

import { DiaryLockProvider } from "../context/DiaryLockContext";
import DiaryLockGuard from "./DiaryLockGuard";

export default function DiaryLayoutClient({ children }) {
    return (
        <DiaryLockProvider>
            <DiaryLockGuard>
                {children}
            </DiaryLockGuard>
        </DiaryLockProvider>
    );
}
