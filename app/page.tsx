"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Manicure");

  const book = () => {
    if (!name) { alert("Enter name"); return; }
    const m = `Hello Angel Nails! My name is ${name}, Service: ${service}, Date: ${date}`;
    window.open(`https://wa.me/14073937261?text=${encodeURIComponent(m)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-black text-center">ANGEL NAILS</h1>
      <div className="max-w-sm mx-auto mt-10 bg-black p-8 rounded-3xl">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" className="w-full p-4 rounded-full" />
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full p-4 rounded-full mt-4" />
        <select value={service} onChange={(e)=>setService(e.target.value)} className="w-full p-4 rounded-full mt-4">
          <option>Manicure</option>
          <option>Pedicure</option>
          <option>Full Set</option>
        </select>
        <button onClick={book} className="w-full bg-white text-black p-4 rounded-full mt-6 font-black">BOOK ON WHATSAPP</button>
      </div>
    </main>
  );
}