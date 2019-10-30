import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import MainSearch from './index/mainSearch';
import { Nav, SearchWrapper, ProfileNav } from '../styled-components/header';
import { LOG_OUT_REQUEST } from '../reducers/user';

const Header = ({ pageProps }) => {
  const [profileNavDisplay, setProfileNavDisplay] = useState('none');
  const router = useRouter();
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const onClickProfile = useCallback(() => {
    setProfileNavDisplay(profileNavDisplay === 'none' ? 'block' : 'none');
  }, [profileNavDisplay]);

  const onClickClose = useCallback(
    e => {
      if (profileNavDisplay === 'block') {
        if (typeof e === 'string' || !e.target.closest('#modalProfile')) {
          setProfileNavDisplay('none');
        }
      }
    },
    [profileNavDisplay],
  );

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    setProfileNavDisplay('none');
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', onClickClose);
    document.addEventListener('click', onClickClose);
    return () => {
      document.removeEventListener('click', onClickClose);
      router.events.off('routeChangeStart', onClickClose);
    };
  }, [profileNavDisplay]);

  return (
    <Nav>
      <Link href="/" prefetch={false}>
        <div id="logoDummy" style={{ cursor: 'pointer' }}></div>
      </Link>
      <SearchWrapper>
        {router.pathname === '/productList' ? (
          <MainSearch defaultValue={pageProps.value}></MainSearch>
        ) : (
          <MainSearch></MainSearch>
        )}
      </SearchWrapper>

      <div onClick={onClickProfile} className="profileDummy">
        {me ? me.nickname.substring(0, 1) : '?'}
      </div>
      <ProfileNav id="modalProfile" display={profileNavDisplay}>
        <div className="mainWrap">
          <div className="profileDummy">
            {me ? me.nickname.substring(0, 1) : '?'}
          </div>
          <div className="textWrap">
            <p className="name">{me ? me.nickname : '로그인을 하세요'}</p>
            <p className="myPage link">마이페이지</p>
          </div>
        </div>
        <div className="subWrap">
          <p className="orderNship link">주문/배송</p>
          <Link href="/cart">
            <p className="cart link">장바구니</p>
          </Link>
          <p className="contact link">고객센터</p>
        </div>
        {me ? (
          <p onClick={onClickLogOut} className="logout link">
            로그아웃
          </p>
        ) : (
          <Link href="/logIn">
            <p className="logout link">로그인</p>
          </Link>
        )}
      </ProfileNav>
    </Nav>
  );
};

export default Header;
