import DiaryLayoutClient from "../../components/DiaryLayoutClient";

export const metadata = {
    title: "나만의 일기장 | 목록",
    description: "비밀스러운 기록들",
};

export default function DiaryLayout({ children }) {
    return (
        <DiaryLayoutClient>
            {children}
        </DiaryLayoutClient>
    );
}
