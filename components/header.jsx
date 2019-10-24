import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MainSearch from './index/mainSearch';
import { Nav, SearchWrapper } from '../styled-components/header';

const Header = ({ pageProps }) => {
  const router = useRouter();
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

      <div id="profileDummy">다용</div>
    </Nav>
  );
};

export default Header;
