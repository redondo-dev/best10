import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaFutbol } from 'react-icons/fa';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "best10",
  description: "site pour meilleurs 10 de football",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>

        <nav
         style= {{
          width:"100%",
          background:'teal',
          fonteSize:"50px",
          display:'flex',
          justifyContent:'space-around',
          justifyItems:'center',
         
       

         }}>
<Link href="/" className="nav-button">
            <FaHome style={{ marginRight: '8px' }} /> {/* Icône de maison */}
            Home
          </Link>
          <Link href="/players" className="nav-button">
            <FaFutbol style={{ marginRight: '8px' }} /> {/* Icône de foot */}
            Meilleurs 10
          </Link>
          <Link href="/avantcentres" className="nav-button">Meilleurs 9</Link>
          <Link href="/gardiens" className="nav-button">Meilleurs Gardiens</Link>
          <Link href="/huit" className="nav-button">Meilleurs 8</Link>
          <Link href="/aillierDroit" className="nav-button">Meilleurs 7</Link>
          <Link href="/arriereGauche" className="nav-button">Meilleurs 3</Link>
          <Link href="/arriereDroit" className="nav-button">Meilleurs 2</Link>
        </nav>
      
        {children}

      
      </body>
    </html>
  );
}
