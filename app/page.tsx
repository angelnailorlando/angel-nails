"use client"
import { useState } from "react"
export default function Page(){
const [zoom,setZoom]=useState<string|null>(null)
const [thanks,setThanks]=useState(false)
const [name,setName]=useState("")
const reviews=[
{n:"Jessica M.",t:"Best nails in Orlando! Angel is so talented!"},
{n:"Maria L.",t:"My nails lasted 4 weeks, amazing quality!"},
{n:"Ashley K.",t:"Luxury experience, I feel like a queen!"},
{n:"Tiana R.",t:"Angel understood exactly what I wanted!"},
]
const bookWhatsApp = () => {
  if(!name){ alert("Enter your name ✨"); return }
  setThanks(true)
  setTimeout(()=>{
    const msg = `Hello Angel Nails! 💅\n\nMy name is *${name}*\nI want to book a luxury moment in Orlando!\n\nCan I book please?`
    window.open(`https://wa.me/14073937261?text=${encodeURIComponent(msg)}`, "_blank")
  }, 800)
}
return(
<main className="min-h-screen bg-[#fff4ee]">
<nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-white border-b sticky top-0 z-20">
<div className="flex items-center gap-2">
<img src="/images/logo1.jpeg" className="h-10 w-10 rounded-full object-cover" alt="" />
<h1 className="text-2xl md:text-4xl font-black tracking-widest">ANGEL <span className="text-pink-600">NAILS</span></h1>
</div>
<div className="flex gap-2">
<a href="https://www.instagram.com/nailssby_andjie" target="_blank" className="border px-4 py-2 rounded-full text-xs">IG</a>
<a href="https://www.tiktok.com/@angelnails20" target="_blank" className="border px-4 py-2 rounded-full text-xs">TT</a>
</div>
</nav>

<section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-8 items-center">
<div>
<p className="text-xs font-bold text-pink-600 tracking-widest">ORLANDO, FLORIDA • LUXURY STUDIO</p>
<h2 className="text-5xl font-black mt-4 leading-none">Nails That<br/><span className="text-pink-600 italic font-normal">Speak Luxury</span></h2>
<a href="#book" className="inline-block mt-6 bg-pink-600 text-white px-8 py-3 rounded-full text-xs font-bold">BOOK APPOINTMENT</a>
</div>
<div className="bg-gradient-to-br from-pink-200 to-amber-100 p-4 rounded-3xl max-w-sm">
<div className="bg-white p-3 rounded-2xl grid grid-cols-2 gap-3 shadow-xl">
<img onClick={()=>setZoom("/images/nail1.jpg")} src="/images/nail1.jpg" className="rounded-xl h-28 object-cover cursor-pointer" alt="" />
<img onClick={()=>setZoom("/images/nail2.jpg")} src="/images/nail2.jpg" className="rounded-xl h-28 object-cover cursor-pointer" alt="" />
<img onClick={()=>setZoom("/images/nail3.jpg")} src="/images/nail3.jpg" className="rounded-xl h-28 object-cover cursor-pointer" alt="" />
<img onClick={()=>setZoom("/images/nail4.jpg")} src="/images/nail4.jpg" className="rounded-xl h-28 object-cover cursor-pointer" alt="" />
</div>
</div>
</section>

<section className="px-6 md:px-20 pb-12">
<h3 className="text-3xl font-bold text-center">Galery</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto mt-6">
{[1,2,3,4,5,6,7,8,9].map(i=><img key={i} onClick={()=>setZoom(`/images/nail${i}.jpg`)} src={`/images/nail${i}.jpg`} className="h-40 w-full object-cover rounded-2xl cursor-pointer" alt="" />)}
</div>
</section>

<section className="bg-white border-y py-10 overflow-hidden">
<h3 className="text-2xl font-bold text-center mb-6">What My Clients Say</h3>
<div className="flex gap-4" style={{animation:"marquee 20s linear infinite"}}>
{[...reviews,...reviews].map((r,i)=><div key={i} className="min-w-[260px] bg-[#fff7f3] border rounded-2xl p-4"><p className="text-pink-500 text-xs">★★★★★</p><p className="mt-2 text-sm italic">"{r.t}"</p><p className="mt-2 font-bold text-xs">- {r.n}</p></div>)}
</div>
</section>

<section id="book" className="py-12 px-6 bg-black text-white">
<div className="max-w-md mx-auto text-center">
<h3 className="text-3xl font-black">Book Your Luxury Moment</h3>
<p className="text-sm text-zinc-400 mt-2">ORLANDO, FLORIDA - (407) 393-7261</p>
<div className="bg-white rounded-3xl p-5 mt-6">
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" className="w-full border rounded-full px-5 py-3 text-sm text-black" />
<input type="date" className="w-full border rounded-full px-5 py-3 mt-3 text-sm text-black" />
<button onClick={bookWhatsApp} className="w-full bg-black text-white rounded-full py-3 mt-4 text-sm font-bold">CONFIRM BOOKING</button>
<p className="text-[10px] text-zinc-400 mt-2">Will open WhatsApp to (407) 393-7261</p>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-white text-center py-4 text-xs">ANGEL NAILS - ORLANDO FLORIDA</footer>

{zoom && <div onClick={()=>setZoom(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"><img src={zoom} className="max-h-full rounded-2xl" alt="" /></div>}
{thanks && <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"><div className="bg-white rounded-3xl p-8 max-w-sm text-center"><div className="text-4xl">💅✨</div><h4 className="text-2xl font-bold mt-3 text-black">Thank You, Gorgeous!</h4><p className="text-sm text-zinc-600 mt-3">Your request received! Redirecting to WhatsApp (407) 393-7261 to confirm your luxury moment!</p><button onClick={()=>setThanks(false)} className="mt-5 bg-black text-white px-6 py-2 rounded-full text-xs">Close</button></div></div>}

<style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
</main>
)
}