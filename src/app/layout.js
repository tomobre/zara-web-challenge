import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { AppWrapper } from "./context";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Marvel app",
  description: "Marvel Heroes list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Navbar></Navbar>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
