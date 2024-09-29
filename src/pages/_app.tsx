import '@styles/globals.css';

import Wrapper from '@common/components/Wrapper';
import { FONT_SIZE_COOKIE_NAME, fontSizeMap } from '@common/constants';
import { FontSizeLevelEnum } from '@common/types/UI';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const level = Cookies.get(FONT_SIZE_COOKIE_NAME) as FontSizeLevelEnum;

    document.documentElement.style.setProperty(
      '--base-font-size',
      `${fontSizeMap[level]}`
    );
  }, []);

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
