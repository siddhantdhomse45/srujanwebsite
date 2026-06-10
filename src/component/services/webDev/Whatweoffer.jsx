import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const offerings = [
  {
    title: "Custom Solution Development",
    desc: "Our team designs custom web development solutions tailored specifically to your business needs.",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
  },
  {
    title: "UX / UI Design",
    desc: "Honored as a top design firm with a Top Design Firm Award, we have even more creative ideas to discuss with you.",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
      </svg>
    ),
  },
  {
    title: "Full Stack Development",
    desc: "Highly skilled in front-end and back-end technologies, our web developers build dynamic and responsive web development solutions that bring your vision to life.",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
      </svg>
    ),
  },
  {
    title: "Testing and QA",
    desc: "Our testing and QA services ensure your web application is reliable, secure, and performs perfectly across all devices and browsers.",
    accent: "#fb923c",
    grad: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: "Re-engineering of Legacy Products",
    desc: "Got an old system that needs a refresh? We can re-engineer your legacy products, updating them with modern technologies and functionalities to help you scale, improve performance and user experience.",
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
  },
  {
    title: "Continuous Support",
    desc: "We're here for you even after your site goes live. Our continuous support and maintenance services keep your web application up-to-date, secure, and running smoothly.",
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
  },
  {
    title: "Integration Services",
    desc: "Are you looking to link your web app with other systems? Our integration services ensure flawless connectivity and data exchange with other platforms.",
    accent: "#fbbf24",
    grad: "linear-gradient(135deg,#d97706,#fbbf24)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    desc: "Our data analytics services help you gather, analyze, and interpret data to make smart decisions that drive growth and improve customer satisfaction.",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#0369a1,#38bdf8)",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
];

function OfferCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        padding: "clamp(24px,3vw,32px)",
        background: hovered
          ? `linear-gradient(145deg,${item.accent}0e,rgba(255,255,255,0.05))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${item.accent}40`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.3), 0 0 32px ${item.accent}12`
          : "0 4px 16px rgba(0,0,0,0.15)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
        fontFamily: "'DM Sans',sans-serif",
        display: "flex", flexDirection: "column", gap: 16,
      }}
    >
      {/* corner glow */}
      <div style={{
        position: "absolute", top: -40, right: -40,
        width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle,${item.accent}22,transparent 70%)`,
        filter: "blur(28px)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14, flexShrink: 0,
        background: hovered ? item.grad : `${item.accent}15`,
        border: `1px solid ${item.accent}${hovered ? "00" : "35"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "white" : item.accent,
        boxShadow: hovered ? `0 6px 20px ${item.accent}45` : "none",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}>
        {item.icon}
      </div>

      {/* text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontSize: "clamp(14px,1.8vw,17px)", fontWeight: 700,
          color: "white", lineHeight: 1.3, letterSpacing: "-0.2px",
          transition: "color 0.3s",
        }}>
          {item.title}
        </h3>

        <p style={{
          margin: 0,
          fontSize: "clamp(12px,1.4vw,14px)",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75,
        }}>
          {item.desc}
        </p>
      </div>

      {/* bottom accent line */}
      <div style={{
        height: 2, borderRadius: 2,
        background: item.grad,
        width: hovered ? "55%" : "0%",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* bottom absolute strip */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: item.grad,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        borderRadius: "0 0 20px 20px",
      }} />
    </motion.div>
  );
}

export default function WhatWeOffer() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      {/* grid texture */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wwogrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wwogrid)"/>
      </svg>

      {/* orbs */}
      <motion.div
        animate={{ scale:[1,1.1,1], opacity:[0.13,0.22,0.13] }}
        transition={{ duration:10, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:460,height:460,borderRadius:"50%",
          background:"radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}
      />
      <motion.div
        animate={{ scale:[1,1.08,1], opacity:[0.12,0.2,0.12] }}
        transition={{ duration:13, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:480,height:480,borderRadius:"50%",
          background:"radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}
      />

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(16px,5vw,48px)", position:"relative", zIndex:10 }}>

        {/* ── header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity:0, y:30 }}
          animate={headInView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center", marginBottom:"clamp(40px,7vw,72px)" }}
        >
          {/* pill badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(255,255,255,0.04)", backdropFilter:"blur(20px)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:100, padding:"6px 18px", marginBottom:20,
          }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"rgba(255,255,255,0.65)",fontSize:12,fontWeight:600,letterSpacing:2.5,textTransform:"uppercase" }}>
              What We Do
            </span>
          </div>

          <h2 style={{
            color:"white",
            fontSize:"clamp(24px,4.5vw,52px)",
            fontWeight:800, letterSpacing:"-1.5px", lineHeight:1.08, marginBottom:20,
          }}>
            What Our Web Development{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Company Offers
            </span>
          </h2>

          <p style={{
            color:"rgba(255,255,255,0.45)",
            fontSize:"clamp(14px,1.8vw,17px)",
            lineHeight:1.8, maxWidth:780, margin:"0 auto",
          }}>
            We design web products that make your brand stand out and deliver impactful business
            results. Recognized for our award-winning services, we ensure your web software is
            customer-centric, user-friendly, and up-to-date with the latest technology.
          </p>
        </motion.div>

        {/* ── 4-col grid ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(clamp(220px,22vw,300px),1fr))",
          gap:"clamp(14px,2.5vw,22px)",
        }}>
          {offerings.map((item, i) => (
            <OfferCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}