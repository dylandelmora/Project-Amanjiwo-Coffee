

"use client";

import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-[#21150E] text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image src="/galeri 1.jpg" alt="Suasana Gerobak Kopi Amanjiwo" fill className="object-cover opacity-50" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Tentang Amanjiwo Coffee</h1>
          <p className="text-gray-300 mt-2">Menghadirkan kehangatan di setiap cangkir kopi Semarang</p>
        </div>
      </section>

      {/* 2. Cerita Amanjiwo Coffee */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 relative rounded-lg overflow-hidden">
             <Image src="/barista.png" alt="Tim Barista Amanjiwo" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Cerita Amanjiwo Coffee</h2>
            <p className="text-gray-400 leading-relaxed">
              Berawal dari kecintaan terhadap kopi dan keinginan menciptakan ruang hangat untuk berkumpul, Amanjiwo Coffee lahir dari sebuah gerobak sederhana di jantung kota Semarang. Kami percaya setiap cangkir kopi punya cerita. Oleh karena itu, kami berkomitmen menyajikan minuman berkualitas premium dengan harga terjangkau. Nama Amanjiwo sendiri berasal dari bahasa Jawa yang berarti "Jiwa yang Tenang", sebuah filosofi yang kami tuangkan dalam setiap pelayanan kami.
            </p>
          </div>
        </div>
      </section>
      
      {/* 3. Visi & Misi */}
      <section className="bg-[#1A0F0A] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#3E2723] p-8 rounded-lg">
              <Icon icon="mdi:lightbulb-on-outline" className="text-amber-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Visi</h3>
              <p className="text-gray-400">Menjadi kedai kopi gerobak pilihan utama anak muda dan komunitas di Semarang untuk menikmati malam dengan produk yang terjangkau dan berkualitas.</p>
            </div>
            <div className="bg-[#3E2723] p-8 rounded-lg">
              <Icon icon="mdi:target-arrow" className="text-amber-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Misi</h3>
              <p className="text-gray-400">Menyajikan minuman berkualitas dengan harga terjangkau, memberikan pelayanan ramah dan hangat, serta membangun komunitas pecinta kopi di Semarang.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Galeri Suasana */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Galeri Suasana</h2>
            <p className="text-gray-400 mb-10">"Kami percaya, setiap momen bersama secangkir kopi adalah teman selamanya."</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Image src="/Gambar 4.png" alt="Suasana 1" width={400} height={500} className="rounded-lg object-cover w-full h-80" />
                <Image src="/galeri 1.jpg" alt="Suasana 2" width={400} height={500} className="rounded-lg object-cover w-full h-80" />
                <Image src="/galeri 2.jpg" alt="Suasana 3" width={400} height={500} className="rounded-lg object-cover w-full h-80" />
                <Image src="/galeri 1.jpg" alt="Suasana 4" width={400} height={500} className="rounded-lg object-cover w-full h-80" />
            </div>
        </div>
      </section>

      {/* 5. Kunjungi Kami */}
      <section className="bg-[#1A0F0A] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Kunjungi Kami</h2>
                <p className="text-gray-400 mb-6">Temukan kami dan rasakan langsung kehangatan yang tak terlupakan.</p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Icon icon="mdi:map-marker" className="text-amber-500 text-2xl mt-1"/>
                        <div>
                            <h4 className="font-semibold">Alamat</h4>
                            <p className="text-gray-400">Jl. Pahlawan, Semarang</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Icon icon="mdi:clock-outline" className="text-amber-500 text-2xl mt-1"/>
                        <div>
                            <h4 className="font-semibold">Jam Buka</h4>
                            <p className="text-gray-400">Setiap Malam, 18.00 - 01.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link 
            href="https://maps.app.goo.gl/yKAJhLccmH7yFMPt5" // <-- Link sudah diganti sesuai permintaan Anda
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden relative cursor-pointer group">
              <Image 
                src="/map.png" 
                alt="Peta Lokasi Amanjiwo" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Icon icon="mdi:map-marker-outline" />
                    Lihat di Google Maps
                  </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}

