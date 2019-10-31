import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { RegisterWrapper } from '../styled-components/register';
import SubmitInput from '../components/register/SubmitInput';
import ButtonInput from '../components/register/ButtonInput';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginWrapper = styled(RegisterWrapper)`
  padding: 0 20px 100px;
  background-color: white;
  & h1 {
    text-align: center;
  }
`;

const Login = () => {
  const { logInErrorReason, me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const emailReg = /^[0-9a-zA-Z]([-_.]*?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]*?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeEmail = useCallback(
    e => {
      if (emailError && e.target.value.match(emailReg)) {
        setEmailError('');
      }
      SetEmail(e.target.value);
    },
    [emailError],
  );

  const onChangePassword = useCallback(
    e => {
      if (passwordError && e.target.value.length >= 8) {
        setPasswordError('');
      }
      SetPassword(e.target.value);
    },
    [passwordError],
  );

  const onSubmit = e => {
    e.preventDefault();
    if (!email.match(emailReg)) {
      setEmailError('정확한 이메일를 입력해주세요.');
    }

    if (password.length < 8) {
      setPasswordError('정확한 비밀번호를 입력해주세요.');
    }

    if (!emailError && !passwordError && email && password) {
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          email,
          password,
        },
      });
    }
  };

  useEffect(() => {
    if (logInErrorReason.match('사용자')) {
      setEmailError('존재하지 않는 이메일입니다.');
    }
    if (logInErrorReason.match('비밀번호')) {
      setPasswordError('비밀번호가 틀렸습니다.');
    }
  }, [logInErrorReason]);

  useEffect(() => {
    if (me) {
      router.back();
    }
  }, [me]);

  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <form noValidate onSubmit={onSubmit}>
        <SubmitInput
          onChange={onChangeEmail}
          value={email}
          name="이메일"
          placeholder="example@naver.com"
          error={emailError}
          autoComplete="email"
        />
        <SubmitInput
          onChange={onChangePassword}
          value={password}
          name="비밀번호"
          placeholder="********"
          error={passwordError}
          type="password"
          autoComplete="current-password"
        />
        <ButtonInput>로그인</ButtonInput>
      </form>
      <Link href="/register">
        <span
          style={{
            display: 'inline-block',
            textAlign: 'right',
            fontSize: '14px',
            color: '#999',
            padding: '10px 0',
            cursor: 'pointer',
          }}
        >
          회원가입
        </span>
      </Link>
    </LoginWrapper>
  );
};

export default Login;
