import React, { useState } from 'react';

useState;

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login_wrap">
      <div className="login_img" />
      <h3>로그인</h3>
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
        <button type="submit">로그인</button>
      </form>
      <p>©2023 All Rights Reserved.</p>
    </div>
  );
}
