// src/app/artikel/page.js

import Navbar from "@/components/Navbar";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function ArtikelPage() {
  return (
    <>
      <Navbar />
      <main>
        <Articles />
      </main>
      <Footer />
    </>
  );
}