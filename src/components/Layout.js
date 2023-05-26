import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="Layout_wrap">
      <header>
        <h1>
          서버리스 <span> 데이터베이스</span> 연습하기
        </h1>
        <ul>
          <li>
            <Link href="/">홈으로</Link>
          </li>
          <li>
            <Link href="/login">로그인</Link>
          </li>

          <li>
            <Link href="/login/SignUp">가입하기</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
