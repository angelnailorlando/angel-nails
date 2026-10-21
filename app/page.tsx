"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Black Lakay Gym set Man", price: 70, front: "/images/P1_FRONT.jpg", back: "/images/P1_BACK.jpg" },
  { id: 2, name: "Black Lakay Gym set Woman", price: 70, front: "/images/P2_FRONT.jpg", back: "/images/P2_BACK.jpg" },
  { id: 3, name: "Lakay Hoodie 1804 edition Vertiere version limited", price: 85, front: "/images/P3_FRONT.jpg", back: "/images/P3_BACK.jpg" },
  { id: 4, name: "Lakay T-shirt acid wash black", price: 55, front: "/images/P4_FRONT.jpg", back: "/images/P4_BACK.jpg" },
  { id: 5, name: "Lakay Hoodie Summer version", price: 65, front: "/images/P5_FRONT.jpg", back: "/images/P5_BACK.jpg" },
  { id: 6, name: "Lakay T-shirt acid wash white", price: 55, front: "/images/P6_FRONT.jpg", back: "/images/P6_BACK.jpg" },
  { id: 7, name: "NYC Lakay Hoodie Acid wash black", price: 75, front: "/images/P7_FRONT.jpg", back: "/images/P7_BACK.jpg" },
  { id: 8, name: "NYC Lakay Hoodie Acid wash Grey", price: 75, front: "/images/P8_FRONT.jpg", back: "/images/P8_BACK.jpg" },
  { id: 9, name: "NYC Lakay Hoodie Acid wash cream", price: 75, front: "/images/P9_FRONT.jpg", back: "/images/P9_BACK.jpg" },
  { id: 10, name: "Lakay Hoodie Graffiti", price: 75, front: "/images/P10_FRONT.jpg", back: "/images/P10_BACK.jpg" },
];

export default function Page() {
  const [selected, setSelected] = useState<any>(null);
  const [size, setSize] = useState("M");
  const [showFront, setShowFront] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showSoonMsg, setShowSoonMsg] = useState(false);

  const openProduct = (p:any) => {
    setSelected(p);
    setSize("M");
    setShowFront(true);
    setTimeout(()=> setSheetOpen(true), 80);
  };
  const close = () => {
    setSheetOpen(false);
    setTimeout(()=> setSelected(null), 250);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="text-center py-10 border-b border-[#eee]">
        <h1 className="text-[58px] font-black tracking-[10px]">LΛKΛY</h1>
        <p className="tracking-[10px] font-bold text-[11px]">WEAR YOUR ROOTS</p>
      </div>

      <div className="max-w-[1350px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
        {products.map(p=>(
          <div key={p.id} className="bg-[#f7f7f7] rounded-[18px] overflow-hidden">
            <div onClick={()=>openProduct(p)} className="cursor-pointer">
              <img src={p.front} className="aspect-[4/5] w-full object-cover" alt={p.name} />
            </div>
            <div className="p-3">
              <p className="text-[10px] font-bold leading-[1.2] h-[24px] overflow-hidden">{p.name.toUpperCase()}</p>
              <p className="text-[11px] text-[#777] mt-1">${p.price}</p>
              <button onClick={()=>openProduct(p)} className="mt-2 w-full bg-black text-white py-2.5 rounded-full text-[9px] font-black">PREORDER SOON</button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER AK BOUTON WA + IG + TT - TOUNEN */}
      <div className="max-w-[1350px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <a href="https://wa.me/15083692956" target="_blank" className="w-full md:w-auto bg-[#25D366] text-black px-8 py-3.5 rounded-full font-black text-[11px] tracking-widest text-center">WHATSAPP - 508-369-2956</a>
          <a href="https://www.instagram.com/lakaybrand.00" target="_blank" className="w-full md:w-auto bg-black text-white px-8 py-3.5 rounded-full font-black text-[11px] tracking-widest text-center">IG @Lakaybrand.00</a>
          <a href="https://www.tiktok.com/@lakay.00" target="_blank" className="w-full md:w-auto bg-white border-2 border-black text-black px-8 py-3.5 rounded-full font-black text-[11px] tracking-widest text-center">TT @lakay.00</a>
        </div>
        <p className="text-center mt-8 text-[10px] text-[#aaa]">© LAKAY ACTIVE - lakayactive.shop - Preorders February</p>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-white text-black flex flex-col">
          <div className="flex-1 bg-[#f5f5f5] relative flex items-center justify-center">
            <img src={showFront ? selected.front : selected.back} className="w-full h-full object-contain max-h-[60vh]" alt={selected.name} />
            <button onClick={close} className="absolute top-4 left-4 bg-black text-white w-9 h-9 rounded-full">✕</button>
            <button onClick={()=>setShowFront(!showFront)} className="absolute bottom-4 right-4 bg-white border border-black px-3 py-1 rounded-full text-[10px] font-bold">FRONT / BACK</button>
          </div>
          <div className={`bg-white rounded-t-[22px] shadow-[0_-12px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}>
            <div className="flex justify-center pt-3"><div className="w-10 h-1 bg-[#ddd] rounded-full"></div></div>
            <div className="px-5 py-5">
              <h2 className="font-black text-[13px] leading-[1.3]">{selected.name.toUpperCase()}</h2>
              <p className="text-[13px] mt-1">${selected.price}</p>
              <div className="mt-4">
                <p className="font-bold text-[12px] mb-3">Select Size</p>
                <div className="grid grid-cols-4 gap-2">
                  {["XS","S","M","L","XL","XXL"].map(s=>(
                    <button key={s} onClick={()=>setSize(s)} className={`h-[46px] rounded-[8px] border text-[12px] ${size===s ? "bg-black text-white border-black" : "bg-white border-[#ddd]"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>setShowSoonMsg(true)} className="mt-6 w-full bg-black text-white h-[56px] rounded-full font-black text-[12px] tracking-widest">PREORDER SOON</button>
              <div className="flex gap-2 mt-3 justify-center">
                <a href="https://www.instagram.com/lakaybrand.00" target="_blank" className="text-[10px] underline">IG</a>
                <span className="text-[10px]">•</span>
                <a href="https://www.tiktok.com/@lakay.00" target="_blank" className="text-[10px] underline">TT</a>
                <span className="text-[10px]">•</span>
                <a href="https://wa.me/15083692956" target="_blank" className="text-[10px] underline">WA</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSoonMsg && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-6" onClick={()=>setShowSoonMsg(false)}>
          <div className="bg-white rounded-[20px] max-w-[360px] w-full p-7 text-center" onClick={e=>e.stopPropagation()}>
            <h3 className="font-black text-[18px] tracking-widest">LΛKΛY</h3>
            <p className="mt-4 text-[14px] font-bold">Preorders will be available in February.</p>
            <p className="mt-2 text-[12px] text-[#666]">Be the first to know. Follow us on Instagram @Lakaybrand.00 and TikTok @lakay.00</p>
            <button onClick={()=>setShowSoonMsg(false)} className="mt-6 w-full bg-black text-white h-[48px] rounded-full font-bold text-[12px]">OK, GOT IT</button>
            <div className="mt-4 flex justify-center gap-3">
              <a href="https://www.instagram.com/lakaybrand.00" target="_blank" className="text-[11px] font-bold underline">IG @Lakaybrand.00</a>
              <a href="https://www.tiktok.com/@lakay.00" target="_blank" className="text-[11px] font-bold underline">TT @lakay.00</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}