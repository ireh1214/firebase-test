import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignup();

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className="login_wrap">
      <div className="login_img" />
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="myEmail">이메일</label>{' '}
        <input
          type="email"
          id="myEmail"
          required
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleData}
        />
        <label htmlFor="myPassWord">패스워드</label>{' '}
        <input
          type="password"
          id="myPassWord"
          required
          placeholder="패스워드를 입력하세요"
          value={password}
          onChange={handleData}
        />
        <label htmlFor="myNickName">닉네임</label>{' '}
        <input
          type="text"
          id="myNickName"
          required
          placeholder="이메일을 입력하세요"
          value={displayName}
          onChange={handleData}
        />
        <button type="submit">회원가입</button>
      </form>
      <p>©2023 All Rights Reserved.</p>
    </div>
  );
}
