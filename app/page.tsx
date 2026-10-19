"use client";
import { useState } from "react";

const IG_LINK = "https://www.instagram.com/lakaybrand.00";
const TIKTOK_LINK = "https://www.tiktok.com/@lakay.00";
const WA_LINK = "https://wa.me/15083692956";

const products = [
  { id: 1, name: "PRODUCT ONE", price: 55, front: "/images/P1_FRONT.jpg", back: "/images/P1_BACK.jpg" },
  { id: 2, name: "PRODUCT TWO", price: 55, front: "/images/P2_FRONT.jpg", back: "/images/P2_BACK.jpg" },
  { id: 3, name: "PRODUCT THREE", price: 70, front: "/images/P3_FRONT.jpg", back: "/images/P3_BACK.jpg" },
  { id: 4, name: "PRODUCT FOUR", price: 55, front: "/images/P4_FRONT.jpg", back: "/images/P4_BACK.jpg" },
  { id: 5, name: "PRODUCT FIVE", price: 55, front: "/images/P5_FRONT.jpg", back: "/images/P5_BACK.jpg" },
  { id: 6, name: "PRODUCT SIX", price: 55, front: "/images/P6_FRONT.jpg", back: "/images/P6_BACK.jpg" },
  { id: 7, name: "PRODUCT SEVEN", price: 55, front: "/images/P7_FRONT.jpg", back: "/images/P7_BACK.jpg" },
  { id: 8, name: "PRODUCT EIGHT", price: 55, front: "/images/P8_FRONT.jpg", back: "/images/P8_BACK.jpg" },
  { id: 9, name: "PRODUCT NINE", price: 55, front: "/images/P9_FRONT.jpg", back: "/images/P9_BACK.jpg" },
  { id: 10, name: "PRODUCT TEN", price: 55, front: "/images/P10_FRONT.jpg", back: "/images/P10_BACK.jpg" },
];

function ProductCard({ p, size, setSize, order }: any){
  const [showBack, setShowBack] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const onTouchStart = (e:any) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e:any) => {
    const diff = e.changedTouches[0].clientX - touchStart;
    if(Math.abs(diff) > 40) setShowBack(!showBack);
  };
  return(
    <div className="bg-[#141414] border border-[#222] rounded-[22px] overflow-hidden">
      <div className="relative aspect-[4/5] bg-[#0e0e0e] cursor-pointer select-none" onClick={()=>setShowBack(!showBack)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img src={p.front} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showBack ? "opacity-0" : "opacity-100"}`} alt="" />
        <img src={p.back} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showBack ? "opacity-100" : "opacity-0"}`} alt="" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${!showBack ? "bg-white" : "bg-white/30"}`}></div>
          <div className={`w-1.5 h-1.5 rounded-full ${showBack ? "bg-white" : "bg-white/30"}`}></div>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded-full text-[9px] tracking-widest font-bold">
          {showBack ? "BACK • TAP" : "FRONT • TAP"}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[11px] font-bold tracking-widest">{p.name} - ${p.price}</h3>
        <div className="flex gap-1 mt-3">
          {["S","M","L","XL","XXL"].map((s)=><button key={s} onClick={()=>setSize(p.id, s)} className={`border px-3 py-1 rounded-full text-[10px] font-bold ${size===s ? "bg-white text-black" : "border-[#333]"}`}>{s}</button>)}
        </div>
        <button onClick={()=>order(p)} className={`mt-3 w-full py-3 rounded-full font-black text-[11px] tracking-widest ${p.price===70 ? "bg-[#ff1a1a] text-white" : "bg-[#f5e6d3] text-black"}`}>PREORDER - ${p.price}</button>
      </div>
    </div>
  );
}

export default function Page(){
  const [sizes,setSizes]=useState<any>({});
  const setSize = (id:any, s:string) => setSizes((prev:any)=>({...prev, [id]:s}));
  const order=(p:any)=>{
    const size=sizes[p.id]||"M";
    const msg=`Hi LAKAY ACTIVE! 👋\n\nI want to preorder:\n• ${p.name}\n• Price: $${p.price}\n• Size: ${size}\n\nPlease confirm availability. Thank you!`;
    window.open(WA_LINK+"?text="+encodeURIComponent(msg),"_blank");
  };
  return(
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="sticky top-0 z-50 bg-[#090909]/95 backdrop-blur border-b border-[#1a1a1a]">
        <div className="max-w-[1350px] mx-auto flex flex-col items-center justify-center px-6 py-8">
          <h1 className="text-[52px] md:text-[68px] font-black tracking-[12px] leading-none">LΛKΛY</h1>
          <p className="tracking-[10px] text-[#f5e6d3] font-black text-[11px] mt-2">WEAR YOUR ROOTS</p>
          <div className="flex items-center gap-2 mt-5">
            <a href={IG_LINK} target="_blank" className="px-5 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:bg-white hover:text-black transition text-[10px] font-bold tracking-widest">IG: @lakaybrand.00</a>
            <a href={TIKTOK_LINK} target="_blank" className="px-5 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:bg-white hover:text-black transition text-[10px] font-bold tracking-widest">TT: @lakay.00</a>
            <a href={WA_LINK} target="_blank" className="px-5 h-9 rounded-full bg-[#f5e6d3] text-black flex items-center justify-center font-black text-[10px] tracking-widest">WHATSAPP</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map(p=><ProductCard key={p.id} p={p} size={sizes[p.id]} setSize={setSize} order={order} />)}
      </div>
      <div className="border-t border-[#1a1a1a] mt-10 py-10 text-center">
        <p className="text-[10px] opacity-30 tracking-widest">© 2024 LAKAY ACTIVE • WEAR YOUR ROOTS • IG: @lakaybrand.00 • TT: @lakay.00</p>
      </div>
    </div>
  );
}
