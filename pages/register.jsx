import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { RegisterWrapper } from '../styled-components/register';
import ButtonInput from '../components/register/ButtonInput';
import SubmitInput from '../components/register/SubmitInput';
import {
  REGISTER_REQUEST,
  REGISTER_RESET,
  REGISTER_FAILURE,
} from '../reducers/user';

const Register = () => {
  const emailReg = /^[0-9a-zA-Z]([-_.]*?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]*?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const dispatch = useDispatch();
  const { registerErrorReason, isRegistered } = useSelector(
    state => state.user,
  );
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telError, setTelError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const onChangeName = useCallback(
    e => {
      if (
        nameError &&
        e.target.value.match(/[가-힣]/g) &&
        e.target.value.match(/[가-힣]/g).length === e.target.value.length
      ) {
        setNameError('');
      }
      setName(e.target.value);
    },
    [name, nameError],
  );

  const onChangeEmail = useCallback(
    e => {
      if (emailError && e.target.value.match(emailReg)) {
        setEmailError('');
      }
      setEmail(e.target.value);
    },
    [email, emailError],
  );

  const onChangeTel = useCallback(
    e => {
      if (telError && e.target.value.length === 11 && !tel.match(/\D/)) {
        setTelError('');
      }
      setTel(e.target.value);
    },
    [tel, telError],
  );

  const onChangePassword = useCallback(
    e => {
      if (passwordCheck && e.target.value !== passwordCheck) {
        setPasswordCheckError('설정하신 비밀번호와 다릅니다.');
      }
      if (passwordCheck === e.target.value) {
        setPasswordCheckError('');
      }
      if (passwordError && e.target.value.length >= 8) {
        setPasswordError('');
      }
      setPassword(e.target.value);
    },
    [password, passwordCheck, passwordError],
  );

  const onChangePasswordCheck = useCallback(
    e => {
      if (password !== e.target.value) {
        setPasswordCheckError('설정하신 비밀번호와 다릅니다.');
      } else {
        setPasswordCheckError('');
      }
      setPasswordCheck(e.target.value);
    },
    [password, passwordCheck],
  );

  const onSubmit = e => {
    e.preventDefault();

    if (
      !name.match(/[가-힣]/g) ||
      name.match(/[가-힣]/g).length !== name.length
    ) {
      setNameError('정확한 이름을 입력해주세요.');
    }

    if (tel.length !== 11 || tel.match(/\D/)) {
      setTelError('정확한 휴대폰 번호를 입력해주세요.');
    }

    if (password.length < 8) {
      setPasswordError('안전을 위해 8자 이상의 비밀번호를 설정해주세요.');
    }

    if (!email.match(emailReg)) {
      setEmailError('정확한 이메일를 입력해주세요.');
    }

    if (password !== passwordCheck) {
      setPasswordCheckError('설정하신 비밀번호와 다릅니다.');
    }

    if (
      !nameError &&
      !emailError &&
      !telError &&
      !passwordError &&
      !passwordCheckError &&
      name &&
      email &&
      tel &&
      password &&
      passwordCheck
    ) {
      dispatch({
        type: REGISTER_REQUEST,
        data: {
          email,
          name,
          tel,
          password,
        },
      });
    }
  };

  const routeChangeStart = useCallback(() => {
    dispatch({
      type: REGISTER_RESET,
    });
  }, [REGISTER_RESET]);

  useEffect(() => {
    if (registerErrorReason) {
      setEmailError(registerErrorReason);
    }
  }, [registerErrorReason]);

  useEffect(() => {
    if (isRegistered === true) {
      router.push('/');
    }
  }, [isRegistered]);

  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeStart);
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [router]);

  return (
    <>
      <RegisterWrapper>
        <h1>회원가입</h1>
        <form noValidate onSubmit={onSubmit}>
          <SubmitInput
            onChange={onChangeName}
            value={name}
            name="이름"
            placeholder="홍길동"
            error={nameError}
            autoComplete="name"
          />
          <SubmitInput
            onChange={onChangeEmail}
            value={email}
            type="email"
            name="이메일"
            placeholder="example@naver.com"
            error={emailError}
            autoComplete="email"
          />
          <SubmitInput
            onChange={onChangeTel}
            value={tel}
            type="tel"
            name="휴대폰 번호"
            placeholder="01012345678"
            error={telError}
            autoComplete="tel"
          />
          <SubmitInput
            onChange={onChangePassword}
            value={password}
            type="password"
            name="비밀번호(8자 이상)"
            placeholder="********"
            error={passwordError}
            autoComplete="new-password"
          />
          <SubmitInput
            onChange={onChangePasswordCheck}
            value={passwordCheck}
            type="password"
            name="비밀번호 확인"
            placeholder="********"
            error={passwordCheckError}
          />
          <ButtonInput bgColor="#5e3eda" fontColor="white">
            가입하기
          </ButtonInput>
        </form>
      </RegisterWrapper>
    </>
  );
};

export default Register;
