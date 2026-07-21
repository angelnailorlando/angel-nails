"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Manicure");

  const book = () => {
    if (!name) { alert("Please enter your name ✨"); return; }
    const msg = `Hello Angel Nails! 💅\n\nMy name is *${name}*\nService: ${service}\nDate: ${date || "ASAP"}\n\nCan I book please?`;
    window.open(`https://wa.me/14073937261?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const reviews = [
    { t: "Best nails in Orlando! Jennifer is amazing!", n: "Sarah M." },
    { t: "Love Angel Nails, always perfect! 💅", n: "Jessica L." },
    { t: "Helen did my nails so beautiful!", n: "Maria G." },
    { t: "I been coming 4 years, never disappointed", n: "Amanda R." },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-pink-50 to-white">
        <h1 className="text-6xl font-black tracking-tighter">ANGEL NAILS</h1>
        <p className="mt-2 tracking-[0.4em] text-xs text-zinc-500">ORLANDO • FLORIDA</p>
        <p className="mt-6 max-w-lg mx-auto text-zinc-600">Luxury nails, perfect every time. Walk-ins welcome, appointments preferred. Located in Orlando.</p>
        <a href="#book" className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800">BOOK NOW</a>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {["Manicure","Pedicure","Full Set","Gel Nails","Acrylic","Nail Art"].map(s=>(
            <div key={s} className="bg-zinc-50 border rounded-2xl p-6 text-center font-bold hover:bg-black hover:text-white transition">{s}</div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white border-y py-10 overflow-hidden">
        <h3 className="text-2xl font-bold text-center mb-6">What Clients Say ★★★★★</h3>
        <div className="flex gap-4 px-6 overflow-x-auto">
          {reviews.map((r,i)=>(
            <div key={i} className="min-w-[280px] bg-pink-50 p-6 rounded-2xl border">
              <p className="text-sm italic">"{r.t}"</p>
              <p className="mt-3 font-black text-xs">- {r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING - SA KI ENPÒTAN */}
      <section id="book" className="py-20 px-6 bg-black text-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-4xl font-black text-center">Book Your Luxury Moment</h3>
          <p className="text-center text-zinc-400 mt-3 text-sm">3020 Lamberton Blvd #104, Orlando FL • (407) 393-7261</p>

          <div className="mt-10 bg-white rounded-[2rem] p-8 space-y-4">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" className="w-full p-5 rounded-full bg-zinc-100 text-black outline-none" />
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full p-5 rounded-full bg-zinc-100 text-black outline-none" />
            <select value={service} onChange={(e)=>setService(e.target.value)} className="w-full p-5 rounded-full bg-zinc-100 text-black outline-none">
              <option>Manicure</option>
              <option>Pedicure</option>
              <option>Full Set</option>
              <option>Gel Nails</option>
              <option>Acrylic</option>
              <option>Nail Art</option>
            </select>
            <button onClick={book} className="w-full bg-black text-white font-black py-5 rounded-full hover:bg-zinc-800">CONFIRM BOOKING → WHATSAPP</button>
            <p className="text-center text-[11px] text-zinc-500">Will open WhatsApp to (407) 393-7261 with your details</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-zinc-400">© 2026 Angel Nails Orlando • angel-nails-gamma.vercel.app</footer>
    </main>
  );
}