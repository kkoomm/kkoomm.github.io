# 나만의 일기장 (My Diary)

Next.js와 Firebase, 그리고 GitHub Pages를 이용하여 만든 개인 일기장 및 방명록 프로젝트입니다.

## ✨ 기능
- **일기장**: Markdown 파일로 관리되는 감성적인 일기장 (비밀번호 잠금 기능 포함)
- **방명록**: Firebase Firestore를 연동하여 누구나(익명) 남길 수 있는 방명록
- **디자인**: Vanilla CSS로 구현한 따뜻하고 심플한 디자인

## 🚀 시작하기 (로컬 실행)

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **환경 변수 설정 (`.env.local`)**
   프로젝트 루트에 `.env.local` 파일을 생성하고 아래 내용을 채워주세요.
   (Firebase 콘솔에서 프로젝트 생성 후 발급받은 키를 입력합니다.)

   ```env
   NEXT_PUBLIC_DIARY_PASSWORD=1234  # 일기장 잠금 비밀번호 (원하는 값으로 변경)
   
   # Firebase 설정 (Firebase Console > Project Settings)
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:3000`으로 접속합니다.

## 🔥 Firebase 설정 방법
1. [Firebase Console](https://console.firebase.google.com/)에 접속하여 새 프로젝트를 생성합니다.
2. **Firestore Database**를 생성합니다. (테스트 모드 또는 프로덕션 모드 선택)
3. **규칙(Rules)** 탭에서 누구나 읽고 쓸 수 있도록 설정하거나(테스트용), 적절한 규칙을 설정합니다.
   ```
   allow read, write: if true;
   ```
4. **Project Settings**에서 **Web App**을 추가하고, SDK 설정값(`apiKey` 등)을 복사하여 `.env.local`에 붙여넣습니다.

## 📦 GitHub Pages 배포

1. `next.config.mjs`에 `output: 'export'` 설정이 되어 있는지 확인합니다. (이미 되어 있습니다)
2. 코드를 GitHub Repository에 Push합니다.
3. Repository의 **Settings > Pages**로 이동합니다.
4. **Source**를 `GitHub Actions`로 변경합니다.
5. `Static HTML` 워크플로우를 선택하거나, Next.js용 자동 설정 워크플로우를 사용합니다.
   - (참고: `npm run build`를 실행하면 `out` 폴더가 생성됩니다. 이 폴더를 배포하면 됩니다.)

## 📝 일기 작성 방법
`/content/diary` 폴더 안에 Markdown(`.md`) 파일을 추가하면 자동으로 일기장에 표시됩니다.
파일명은 고유해야 하며(예: `2024-02-08-today.md`), 상단에 아래와 같은 Frontmatter가 필요합니다.

```markdown
---
title: '일기 제목'
date: '2024-02-08'
description: '일기 목록에 보여질 짧은 요약'
mood: '😊'
image: '/images/sample.jpg' (선택 사항)
---
일기 내용을 자유롭게 작성하세요...
```
