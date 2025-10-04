import { Icon } from "@iconify/react"; 

const features = [
  {
    title: "Manual Brew Segar",
    desc: "Setiap cangkir dibuat langsung oleh barista dengan teknik terbaik.",
    icon: "streamline-freehand:safety-drown-hand",
    color: "text-amber-500", 
  },
  {
    title: "Bahan Berkualitas",
    desc: "Menggunakan biji kopi pilihan lokal premium untuk rasa yang konsisten.",
    icon: "ph:star-fill",
    color: "text-amber-500", 
  },
  {
    title: "Lokasi Strategis",
    desc: "Terletak di pusat kota Semarang, mudah dijangkau dan nyaman.",
    icon: "mdi:map-marker",
    color: "text-amber-500", 
  },
  {
    title: "Harga Terjangkau",
    desc: "Nikmati kopi premium dengan harga ramah dompet di kantong anak muda.",
    icon: "fa6-solid:money-bill-wave",
    color: "text-amber-500", 
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-10">Kelebihan Amanjiwo Coffee</h2>

      {/* Grid fitur */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div
            key={idx}
            // Menjadi seperti ini
className="bg-[#3E2723] p-6 rounded-lg flex flex-col justify-start items-center text-center gap-4 min-h-[220px]"
          >
            <div>
              {/* 3. Ganti tag <img> dengan komponen <Icon /> */}
              <Icon
                icon={f.icon}
                className={`w-12 h-12 ${f.color} mx-auto mb-4`} // Gunakan className untuk ukuran dan warna
              />
              <h3 className="font-semibold mb-2">{f.title}</h3>
            </div>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}