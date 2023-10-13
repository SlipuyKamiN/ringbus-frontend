import "normalize.css";
import "styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Знайти перевізника | RingBus ↺",
  description: "Built by Slipuy_KamiN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <Head>
        <link rel="icon" href={"./favicon.svg"} type="image/svg+xml" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
