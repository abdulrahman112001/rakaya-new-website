import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
