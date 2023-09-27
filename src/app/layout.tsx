import "normalize.css";
import "styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next template",
  description: "Built by Slipuy_KamiN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
