import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Custom JS files */}
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        ></script>
        {/* theme js */}
        <script async src="./js/scripts.js"></script>
        {/* startbootstrap forms */}
        <script
          async
          src="https://cdn.startbootstrap.com/sb-forms-latest.js"
        ></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </Html>
  );
}
