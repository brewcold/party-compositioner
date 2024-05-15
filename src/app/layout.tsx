import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로스트아크 공대 구성 도우미',
  description: '로스트아크 공대 구성 도우미',
  openGraph: {
    title: '로스트아크 공대 구성 도우미',
    description: '로스트아크 공대 구성 도우미',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="ko">
        <head>
          <meta name="theme-color" content="#000000" />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
          />
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">{children}</div>
        </body>
      </html>
    </>
  );
}
