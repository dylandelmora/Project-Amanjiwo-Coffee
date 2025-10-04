

"use client"; 

import { useState } from 'react';
import Image from 'next/image';


const menuItems = [
  { id: 1, name: 'Espresso Robusta', desc: 'Kopi hitam murni dengan karakter kuat dan aroma yang intens.', price: '10.000', image: '/espresso.jpg', category: 'Coffee' },
  { id: 2, name: 'Cappuccino', desc: 'Espresso dipadukan dengan susu steamed yang creamy dan foam lembut.', price: '15.000', image: '/cappucino.jpg', category: 'Coffee' },
  { id: 3, name: 'Vietnam Drip', desc: 'Kopi susu autentik dengan teknik drip tradisional dan susu kental manis.', price: '15.000', image: '/vietnam drip.jpg', category: 'Coffee' },
  { id: 4, name: 'V60 Arabika', desc: 'Kopi diseduh manual dengan metode pour over V60 untuk cita rasa optimal.', price: '17.000', image: '/arabika.jpg', category: 'Coffee' },
  { id: 5, name: 'Kopi Susu Aren', desc: 'Kopi tradisional dengan susu dan gula aren untuk rasa manis alami.', price: '15.000', image: '/kopi susu aren.jpg', category: 'Coffee' },
  { id: 6, name: 'Matcha', desc: 'Teh hijau premium Jepang dengan rasa earthy dan manfaat antioksidan.', price: '15.000', image: '/matcha.jpg', category: 'Non Coffee' },
  { id: 7, name: 'Lemon Tea', desc: 'Teh segar dengan perasan lemon asli untuk kesegaran maksimal.', price: '10.000', image: '/lemon tea.jpg', category: 'Non Coffee' },
  { id: 8, name: 'Thai Tea', desc: 'Teh Thailand autentik dengan susu kental manis dan rasa yang khas.', price: '13.000', image: '/thai tea.jpg', category: 'Non Coffee' },
  { id: 9, name: 'Tiramisu', desc: 'Minuman dengan cita rasa dessert Italia yang creamy dan rich.', price: '13.000', image: '/tiramisu.jpg', category: 'Specialty' },
  { id: 10, name: 'Mangga', desc: 'Minuman segar dengan rasa mangga tropis yang manis dan menyegarkan.', price: '13.000', image: '/mangga.jpg', category: 'Non Coffee' },
  { id: 11, name: 'Coklat', desc: 'Hot chocolate premium dengan rasa coklat yang rich dan creamy.', price: '13.000', image: '/coklat.jpg', category: 'Specialty' },
  { id: 12, name: 'Red Velvet', desc: 'Minuman dengan cita rasa cake red velvet yang unik dan menggoda.', price: '13.000', image: '/red velvet.jpg', category: 'Specialty' },
];


const categories = ['Semua', 'Coffee', 'Non Coffee', 'Specialty'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="bg-[#21150E] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Menu Amanjiwo Coffee</h2>
        <p className="text-gray-400 mb-12">Temukan minuman favoritmu untuk menemani malam hangatmu</p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors
                ${activeCategory === category 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-[#3E2723] text-gray-300 hover:bg-amber-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-[#3E2723] p-6 rounded-lg flex items-center gap-6">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg object-cover w-24 h-24" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                <p className="text-amber-500 font-bold">Rp {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}