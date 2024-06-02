import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Burokabit",
  description: "Burokabit",
};

const chaseFont = localFont({
  src: "../../public/chase-bold.ttf",
  display: "swap",
});

const quicksandFont = localFont({
  src: "../../public/Quicksand_Book.ttf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chaseFont.className} ${quicksandFont}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
