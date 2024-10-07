import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaFutbol } from 'react-icons/fa';
import { TbPlayFootball } from "react-icons/tb";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "best10",
  description: "site pour meilleurs 10 de football",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"w-full text-xl flex flex-col items-center p-4"}>
        <nav className="nav">
          <Link href="/" className="nav-button">
            <FaHome style={{ marginRight: '8px' }} />
            Home
          </Link>
          <Link href="/players" className="nav-button">
            <FaFutbol style={{ marginRight: '8px' }} />
            Meilleurs 10
          </Link>
          <Link href="/avantcentres" className="nav-button">
            <TbPlayFootball  style={{ marginRight: '8px', fontSize:'26px' }} />
            Meilleurs 9
          </Link>
          <Link href="/gardiens" className="nav-button"> Meilleurs Gardiens</Link>
          <Link href="/huit" className="nav-button">Meilleurs 8</Link>
          <Link href="/aillierDroit" className="nav-button">Meilleurs 7</Link>
          <Link href="/liberos" className="nav-button">Meilleurs Libero</Link>
          <Link href="/arrieresgauches" className="nav-button">Meilleurs 3</Link>
          <Link href="/arrieresdroits" className="nav-button">Meilleurs 2</Link>
        </nav>

        {children}

      </body>
    </html>
  );
}
