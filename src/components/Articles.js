

"use client"; 

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react'; 

// --- DATA ARTIKEL & VIDEO ---
const allPosts = [
  { id: 1, type: 'Artikel', title: 'Cara Menikmati Manual Brew di Rumah', excerpt: 'Tips brewing manual untuk pemula yang ingin merasakan sensasi barista handal di rumah dengan peralatan sederhana.', date: '15 Oktober 2024', image: '/Gambar 1.jpg' },
  { id: 2, type: 'Video', title: 'Behind The Scene: Proses Manual Brew Amanjiwo', excerpt: 'Saksikan proses pembuatan kopi manual brew yang autentik dari biji hingga cangkir.', date: '12 Oktober 2024', image: '/Gambar 2.jpg' },
  { id: 3, type: 'Artikel', title: 'Menu Favorit Pengunjung Amanjiwo Coffee', excerpt: 'Daftar menu paling populer yang selalu menjadi primadona di kedai kopi kami.', date: '10 Oktober 2024', image: '/Gambar 3.png' },
  { id: 4, type: 'Video', title: 'Suasana Nongkrong Malam', excerpt: 'Rasakan vibe hangat dan nyaman suasana nongkrong di kedai kopi Amanjiwo bersama teman-teman.', date: '8 Oktober 2024', image: '/Gambar 4.png' },
  { id: 5, type: 'Artikel', title: 'Cerita Malam di Gerobak Amanjiwo', excerpt: 'Kisah-kisah menarik yang tercipta setiap malam di sekitar gerobak kopi Amanjiwo yang penuh kehangatan.', date: '5 Oktober 2024', image: '/Gambar 5.png' },
  { id: 6, type: 'Artikel', title: 'Kenapa Kopi Lokal Itu Istimewa', excerpt: 'Mengenal lebih dalam tentang keistimewaan dan ragam cita rasa dari kopi nusantara.', date: '3 Oktober 2024', image: '/Gambar 6.png' },
  { id: 7, type: 'Video', title: 'Review Menu Kopi Susu Aren oleh Pelanggan', excerpt: 'Testimoni jujur dari pelanggan setia tentang menu andalan Amanjiwo Coffee, kopi susu aren yang legendaris.', date: '1 Oktober 2024', image: '/Gambar 7.jpg' },
 
];


const categories = ['Semua', 'Artikel', 'Video'];

export default function Articles() {
  const [filter, setFilter] = useState('Semua');
  const [visibleCount, setVisibleCount] = useState(6); 

  const filteredPosts = allPosts.filter(post => 
    filter === 'Semua' ? true : post.type === filter
  );

  const postsToShow = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3); 
  };

  return (
    <div className="bg-[#21150E] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('/bg kopo 2.jpg')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Artikel & Video</h1>
          <p className="text-gray-300 mt-2">Temukan cerita, tips, dan inspirasi seputar kopi & gaya hidup malam</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map(category => (
              <button key={category} onClick={() => setFilter(category)} className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === category ? 'bg-amber-600 text-white' : 'bg-[#3E2723] text-gray-300 hover:bg-amber-700'}`}>
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map(post => (
              <div key={post.id} className="bg-[#3E2723] rounded-lg overflow-hidden group">
                <div className="relative">
                  <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded ${post.type === 'Video' ? 'bg-red-600' : 'bg-amber-600'}`}>
                    {post.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 h-14">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 h-20">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Icon icon="mdi:calendar" className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="text-center mt-16">
              <button onClick={handleLoadMore} className="bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}