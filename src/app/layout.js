import "./globals.css";
import Link from "next/link";
import { FaHome, FaFutbol, FaShieldAlt, FaUserAlt } from 'react-icons/fa';
import { TbPlayFootball } from "react-icons/tb";
import { GiSoccerField } from "react-icons/gi";

export const metadata = {
  title: "best10",
  description: "site pour meilleurs 10 de football",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="nav-button">
            <FaHome size={18} />
            Home
          </Link>
          <Link href="/players" className="nav-button">
            <FaFutbol size={18} />
            Meilleurs 10
          </Link>
          <Link href="/avantcentres" className="nav-button">
            <TbPlayFootball size={20} />
            Meilleurs 9
          </Link>
          <Link href="/gardiens" className="nav-button">
            <FaShieldAlt size={18} />
            Meilleurs Gardiens
          </Link>
          <Link href="/huit" className="nav-button">
            <GiSoccerField size={18} />
            Meilleurs 8
          </Link>
          <Link href="/ailliersdroits" className="nav-button">
            <FaFutbol size={18} />
            Meilleurs 7
          </Link>
          <Link href="/liberos" className="nav-button">
            <FaShieldAlt size={18} />
            Meilleurs Libero
          </Link>
          <Link href="/arrieresgauches" className="nav-button">
            <FaUserAlt size={18} />
            Meilleurs 3
          </Link>
          <Link href="/arrieresdroits" className="nav-button">
            <FaUserAlt size={18} />
            Meilleurs 2
          </Link>
        </nav>
        <main className="w-full max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}