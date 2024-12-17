import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Your Project</h1>
      <p>
        Set up your custom domain{' '}
        <Link href="/custom-domain" style={{ color: 'blue' }}>
          here
        </Link>
        .
      </p>
    </div>
  );
}


