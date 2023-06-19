import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/bootstrap.css";
import "../styles/global.css";
const inter = Inter({ subsets: ["latin"] });
import ApiAuthClient from "@/context/ApiAuthClient";
import NavBar from "@/components/Navbar";
import Head from 'next/head'

export const metadata = {
  title: "Loansprouts",
  description: "Develop By Websoftex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
      <meta name="author" content="John Doe"/>
      <title>Hello</title>
    </Head>
      <body className={inter.className}>
        <ApiAuthClient>
          <NavBar /> {children}
        </ApiAuthClient>
      </body>
    </html>
  );
}
