import Image from "next/image";
import Link from "next/link"; // Pastikan Link di-import dari next/link

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-amber-950 text-white">
      {/* Logo (Tidak ada perubahan) */}
      <Link href="/" className="flex items-center space-x-6">
        <Image 
          src="/Logo Amanjiwo .jpg"   
          alt="Amanjiwo Coffee Logo"
          width={60}
          height={60}
          className="rounded-full"  
        />
        {/*
          Catatan: Bagian ini perlu diperbaiki agar font Poppins berfungsi, 
          tapi sesuai permintaan, saya tidak mengubahnya.
        */}
        <span className="`${poppins.className} text-2xl font-black`">Amanjiwo Coffee</span>
      </Link>

      {/* Menu navigasi */}
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-yellow-400">Beranda</Link></li>
        
        {/* === PERUBAHAN HANYA DI BARIS INI === */}
        <li><Link href="/menu" className="hover:text-yellow-400">Menu</Link></li>
        
        {/* Menggunakan <Link> dan href="/..." tidak akan mengubah desain */}
        <li><Link href="/artikel" className="hover:text-yellow-400">Artikel</Link></li>
        <li><Link href="/tentang-kami" className="hover:text-yellow-400">Tentang Kami</Link></li>
      </ul>
    </nav>
  );
}