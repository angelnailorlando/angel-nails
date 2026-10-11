export default function Page(){
return(
<div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",fontFamily:"Inter, sans-serif"}}>

<div style={{background:"#f5e8d3",color:"#000",textAlign:"center",padding:"10px",fontWeight:"600",letterSpacing:"5px",fontSize:"12px"}}>LAKAY ACTIVE</div>

<div style={{
flex:1,
background:"#0a0a0a",
display:"flex",
flexDirection:"column",
alignItems:"center",
padding:"60px 24px 30px",
textAlign:"left",
backgroundImage:`linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.95)), url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600')`,
backgroundSize:"cover",
backgroundPosition:"center"
}}>

<div style={{width:"100%",maxWidth:"340px"}}>
<h1 style={{fontSize:"74px",fontWeight:"900",lineHeight:"0.85",color:"#f5e8d3",letterSpacing:"-1px",margin:0}}>
L<span style={{fontWeight:"300"}}>Λ</span>K<span style={{fontWeight:"300"}}>Λ</span>Y<br/>ACTIVE
</h1>

<p style={{marginTop:"18px",color:"#f5e8d3",fontWeight:"800",fontSize:"15px",lineHeight:"1.2",letterSpacing:"0.3px"}}>NEW ACTIVEWEAR COLLECTION<br/>DROPPING SOON</p>

<p style={{marginTop:"22px",color:"#f5e8d3",fontSize:"13px",opacity:0.85,lineHeight:"1.4"}}>Premium activewear crafted for strength •<br/>movement • everyday</p>

<div style={{marginTop:"32px",display:"flex",flexDirection:"column",gap:"18px"}}>
<a href="https://wa.me/15083692956" style={{background:"#f5e8d3",color:"#000",padding:"16px 20px",borderRadius:"14px",display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",fontWeight:"600",fontSize:"17px",justifyContent:"flex-start"}}>
<span style={{fontSize:"32px"}}>💬</span> Join on WhatsApp
</a>
<a href="https://www.instagram.com/lakaybrand.00" style={{background:"#f5e8d3",color:"#000",padding:"16px 20px",borderRadius:"14px",display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",fontWeight:"600",fontSize:"17px",justifyContent:"flex-start"}}>
<span style={{fontSize:"28px"}}>📷</span> Follow on Instagram
</a>
</div>

<p style={{marginTop:"30px",textAlign:"center",color:"#f5e8d3",fontSize:"12px",opacity:0.8}}>Launching February 2027</p>
</div>

<p style={{marginTop:"auto",paddingTop:"60px",textAlign:"center",fontSize:"7.5px",letterSpacing:"1.5px",opacity:0.35,color:"#f5e8d3"}}>© 2024 LAKAY ACTIVE • EST. 2024 • MADE FOR ATHLETES</p>

</div>
</div>
)
}