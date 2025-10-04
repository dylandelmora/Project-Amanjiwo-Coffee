// src/app/menu/page.js

import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <Menu />
      </main>
      <Footer />
    </>
  );
}