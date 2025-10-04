// src/app/tentang-kami/page.js

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}