import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db4caf9cfdfba1efa345fa6d85d8a688&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
