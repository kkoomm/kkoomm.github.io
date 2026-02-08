import { Noto_Sans_KR } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "나만의 일기장",
  description: "소중한 기억을 기록하는 공간",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <div className="container">
          <header>
            <Link href="/">
              <h1>My Diary</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/diary">일기장</Link>
                </li>
                <li>
                  <Link href="/guestbook">방명록</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2026 My Diary. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
