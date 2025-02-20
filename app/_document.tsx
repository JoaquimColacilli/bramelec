import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          rel="alternate"
          hrefLang="es-AR"
          href="https://bramelec.com/es-AR"
        />
        <link rel="canonical" href="https://bramelec.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
