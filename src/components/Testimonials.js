const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Pelanggan setia",
    text: "Kopinya enak banget! Manual brew yang fresh dan suasana kafenya bikin betah berlama-lama nongkrong malam-malam.",
    img: "/Sarah.jpg",
  },
  {
    name: "Riski Pratama",
    role: "Pecinta kopi lokal",
    text: "Biji kopinya premium banget, baristanya ramah dan profesional. Recommended banget buat pecinta kopi di Semarang!",
    img: "/Riski.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-[#3E2723] text-center text-white"> 
      <h2 className="text-2xl font-bold mb-10">Testimoni Pelanggan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#2C1A14] p-6 rounded-lg">
            <p className="mb-4 text-gray-200">"{t.text}"</p> 
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6"> 
              <img
                src={t.img}
                
                className="w-16 h-16 rounded-full object-cover"
                alt={t.name}
              />
              <div className="text-left"> 
                <h4 className="font-semibold text-white">{t.name}</h4>
                <span className="text-sm text-gray-400">{t.role}</span> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}