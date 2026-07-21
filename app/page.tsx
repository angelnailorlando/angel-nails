"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Manicure");

  const reviews = [
    { t: "Best nails in Orlando! Jennifer is amazing!", n: "Sarah M." },
    { t: "Love Angel Nails, always perfect! 💅", n: "Jessica L." },
    { t: "Helen did my nails so beautiful!", n: "Maria G." },
    { t: "I been coming 4 years, never disappointed", n: "Amanda R." },
  ];

  const handleBooking = () => {
    if (!name) {
      alert("Please enter your name ✨");
      return;
    }
    const message = `Hello Angel Nails! 💅\n\nMy name is *${name}*\nService: ${service}\nDate: ${date || "ASAP"}\n\nCan I book please?`;
    const url = `https://wa.me/14073937261?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="py-20 px-6 text-center bg-zinc-50">
        <h1 className="text-5xl font-black">ANGEL NAILS</h1>
        <p className="mt-2 tracking-[0.3em] text-sm">ORLANDO • FLORIDA</p>
        <p className="mt-6 max-w-md mx-auto text-zinc-600">Luxury nails, perfect every time. Walk-ins welcome, appointments preferred.</p>
        <a href="#book" className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full font-bold">BOOK NOW</a>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="bg-white border-y py-10 overflow-hidden">
        <h3 className="text-2xl font-bold text-center mb-6">What Clients Say</h3>
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[...reviews,...reviews].map((r, i) => (
              <div key={i} className="min-w-[260px] bg-pink-50 p-5 rounded-2xl border">
                <p className="text-pink-500 text-xs">★★★★★</p>
                <p className="mt-2 text-sm italic">"{r.t}"</p>
                <p className="mt-2 font-bold text-xs">- {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-16 px-6 bg-black text-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-black text-center">Book Your Luxury Moment</h3>
          <p className="text-sm text-zinc-400 text-center mt-2">3020 Lamberton Blvd #104, Orlando FL</p>

          <div className="mt-8 space-y-4">
            <input
              value={name}
              onChange={e=>setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-full p-5 bg-white text-black outline-none"
            />
            <input
              type="date"
              value={date}
              onChange={e=>setDate(e.target.value