"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    if (!name &&!phone) {
      const msg = "Hello Angel Nails! I want to book an appointment!";
      window.open(`https://wa.me/14073937261?text=${encodeURIComponent(msg)}`, "_blank");
      return;
    }
    const msg = `Hello Angel Nails! 💅\n\nName: ${name || "Client"}\nPhone: ${phone || "N/A"}\n\nI want to book a luxury moment!`;
    window.open(`https://wa.me/14073937261?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=400",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=400",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=400",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
  ];

  return (
    <main className="min-h-screen bg-[#fef9f5] text-black">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b sticky top-0 z-50">
        <h1 className="font-black text-xl tracking-widest">ANGEL <span className="text-pink-600">NAILS</span></h1>
        <a href="#book" className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">BOOK APPOINTMENT</a>
      </header>

      {/* HERO - Nails That Speak Luxury */}
      <section className="px-6 md:px-12 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div>
          <p className="text-pink-600 text-sm font-bold tracking-widest">ORLANDO, FLORIDA</p>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mt-3">Nails That <br/><span className="text-pink-600 italic font-serif">Speak Luxury</span></h2>
          <p className="mt-6 text-zinc-600 max-w-md">Experience luxury nail artistry in the heart of Orlando. Custom designs, premium products, flawless finish.</p>
        </div>
        <div className="relative">
          <div className="bg-white p-2 rounded-3xl shadow-xl rotate-2">
            <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600" className="rounded-2xl w-full h-[400px] object-cover" alt="nails" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Galery</h3>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
              <img src={img} alt={`nail ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold">What My Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { name: "Sarah B.", text: "Angel understood exactly what I wanted! Clean, professional, and beautiful!", stars: 5 },
            { name: "Jessica L.", text: "Best nails in Orlando! Angel is so talented!", stars: 5 },
            { name: "Maria G.", text: "My nails lasted 4 weeks perfect! So happy!", stars: 5 },
          ].map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm">
              <p className="text-pink-500 text-sm">{"★".repeat(r.stars)}</p>
              <p className="mt-3 text-sm text-zinc-700 italic">"{r.text}"</p>
              <p className="mt-4 font-bold text-xs">- {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING - KENBE MENM SA + WHATSAPP */}
      <section id="book" className="bg-black text-white py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black">Book Your Luxury Moment</h3>
          <p className="text-zinc-400 text-xs mt-3 tracking-widest">ORLANDO, FLORIDA • (407) 393-7261</p>

          <div className="bg-white rounded-[24px] p-6 mt-10 space-y-4">
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-4 rounded-full bg-zinc-100 text-black outline-none text-sm"
            />
            <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-4 rounded-full bg-zinc-100 text-black outline-none text-sm"
            />
            <button
              onClick={handleBooking}
              className="w-full bg-black text-white font-black py-4 rounded-full hover:bg-zinc-800 transition"
            >
              CONFIRM BOOKING
            </button>
            <p className="text-[10px] text-zinc-400">Will open WhatsApp to (407) 393-7261</p>
          </div>

          <p className="mt-10 text-xs text-zinc-500">ANGEL NAILS • ORLANDO, FLORIDA</p>
        </div>
      </section>
    </main>
  );
}