import Document, { Html, Head, Main, NextScript } from "next/document";
import AppIcon from "@app/favicon.ico";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={AppIcon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
