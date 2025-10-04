import "./globals.css";
import { Poppins, Geist, Geist_Mono } from "next/font/google";

// Poppins buat global font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

// Geist optional (kalau memang mau dipakai di beberapa elemen saja)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amanjiwo Coffee",
  description: "Website Amanjiwo Coffee",
};

// ✅ RootLayout cuma 1
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
