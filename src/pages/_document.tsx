import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='mx-auto bg-gradient-to-r from-pink-200 via-purple-100 to-indigo-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
