import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
        />
      </Head>
      <body className="bg-gray-700 overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
