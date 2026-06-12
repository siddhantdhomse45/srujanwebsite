import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiExternalLink,
  FiZap,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

const BADGES = [
  { icon: <FiZap size={13} />,   label: "Fortune 500 Trusted" },
  { icon: <FiAward size={13} />, label: "Top 1% Engineers"    },
  { icon: <FiGlobe size={13} />, label: "21+ Countries"       },
];

export default function MobileAppHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade     = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-content-padding {
            padding: 80px 0 60px !important;
          }
          .hero-headline {
            font-size: clamp(28px, 6vw, 42px) !important;
            letter-spacing: -1px !important;
          }
          .hero-subtext {
            font-size: 14px !important;
            max-width: 100% !important;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: 12px !important;
          }
          .hero-buttons button {
            justify-content: center;
            width: 100%;
          }
          .badges-container {
            flex-wrap: wrap;
            justify-content: center;
          }
          .orb-ring {
            display: none;
          }
          .scroll-indicator {
            bottom: 20px;
          }
        }
        @media (max-width: 480px) {
          .hero-pill {
            padding: 5px 14px !important;
            margin-bottom: 20px !important;
          }
          .hero-pill span {
            font-size: 10px !important;
            letter-spacing: 2px !important;
          }
          .hero-headline {
            font-size: clamp(24px, 7vw, 32px) !important;
            line-height: 1.1 !important;
          }
          .hero-accent-line {
            width: 60px !important;
            margin-bottom: 20px !important;
          }
          .badges-container > div {
            padding: 6px 12px !important;
          }
          .badges-container span {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* ── Parallax background ── */}
      <motion.div
        style={{
          position: "absolute", inset: 0, y: bgY, scale: 1.14,
          backgroundImage: `url("https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800&q=80")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      />

      {/* ── Multi-layer blue-toned overlays ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(110deg, rgba(3,10,28,0.97) 0%, rgba(5,18,50,0.88) 45%, rgba(6,22,60,0.60) 75%, rgba(3,10,28,0.40) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 100% at 0% 50%, rgba(14,30,80,0.55), transparent 70%)",
      }} />

      {/* ── Grid texture ── */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.07,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mahgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mahgrid)"/>
      </svg>

      {/* ── Floating orbs (responsive sizes) ── */}
      <motion.div
        animate={{ scale:[1,1.13,1], opacity:[0.18,0.30,0.18] }}
        transition={{ duration:10, repeat:Infinity, ease:"easeInOut" }}
        style={{
          position:"absolute", top:"-15%", left:"-8%",
          width:"min(520px, 70vw)", height:"min(520px, 70vw)",
          borderRadius:"50%",
          background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",
          filter:"blur(90px)", pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ scale:[1,1.1,1], opacity:[0.14,0.24,0.14] }}
        transition={{ duration:13, repeat:Infinity, ease:"easeInOut", delay:3 }}
        style={{
          position:"absolute", bottom:"-10%", right:"10%",
          width:"min(460px, 60vw)", height:"min(460px, 60vw)",
          borderRadius:"50%",
          background:"radial-gradient(circle,#1d4ed8,#06b6d4,transparent 70%)",
          filter:"blur(100px)", pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ scale:[1,1.08,1], opacity:[0.10,0.18,0.10] }}
        transition={{ duration:16, repeat:Infinity, ease:"easeInOut", delay:6 }}
        style={{
          position:"absolute", top:"30%", right:"-5%",
          width:"min(380px, 50vw)", height:"min(380px, 50vw)",
          borderRadius:"50%",
          background:"radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)",
          filter:"blur(80px)", pointerEvents:"none",
        }}
      />

      {/* ── Rotating rings (hide on mobile) ── */}
      <motion.div
        className="orb-ring"
        animate={{ rotate:360 }}
        transition={{ duration:40, repeat:Infinity, ease:"linear" }}
        style={{
          position:"absolute", width:700, height:700,
          top:"50%", left:"32%", transform:"translate(-50%,-50%)",
          border:"1px solid rgba(59,130,246,0.08)",
          borderRadius:"50%", pointerEvents:"none",
        }}
      />
      <motion.div
        className="orb-ring"
        animate={{ rotate:-360 }}
        transition={{ duration:60, repeat:Infinity, ease:"linear" }}
        style={{
          position:"absolute", width:960, height:960,
          top:"50%", left:"32%", transform:"translate(-50%,-50%)",
          border:"1px solid rgba(99,102,241,0.05)",
          borderRadius:"50%", pointerEvents:"none",
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        className="hero-content-padding"
        style={{
          y: contentY, opacity: fade,
          position:"relative", zIndex:10, width:"100%",
          padding:"clamp(80px, 14vw, 140px) 0 clamp(60px, 10vw, 120px)",
        }}
      >
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(20px, 5vw, 80px)" }}>
          <div style={{ maxWidth:680 }}>

            {/* Pill badge */}
            <motion.div
              className="hero-pill"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"rgba(59,130,246,0.12)",
                backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
                border:"1px solid rgba(59,130,246,0.30)",
                borderRadius:100, padding:"7px 18px", marginBottom:30,
              }}
            >
              <motion.span
                animate={{ opacity:[1,0.3,1] }}
                transition={{ duration:1.8, repeat:Infinity }}
                style={{ width:7, height:7, borderRadius:"50%", background:"#38bdf8", boxShadow:"0 0 10px #38bdf8", display:"inline-block", flexShrink:0 }}
              />
              <span style={{ color:"#93c5fd", fontSize:"clamp(10px, 3vw, 12px)", fontWeight:700, letterSpacing:2.5, textTransform:"uppercase" }}>
                Mobile App Development
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-headline"
              initial={{ opacity:0, y:36 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.85, delay:0.2, ease:[0.22,1,0.36,1] }}
              style={{
                color:"white",
                fontSize:"clamp(30px, 4.8vw, 62px)",
                fontWeight:900, letterSpacing:"-2px", lineHeight:1.05,
                textTransform:"uppercase", marginBottom:24,
              }}
            >
              Mobile App Company<br/>
              <span style={{
                background:"linear-gradient(90deg,#38bdf8 0%,#60a5fa 40%,#818cf8 70%,#c084fc 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text",
              }}>
                Trusted by Fortune
              </span>
              <br/>500 Brands
            </motion.h1>

            {/* Accent line */}
            <motion.div
              className="hero-accent-line"
              initial={{ scaleX:0 }}
              animate={{ scaleX:1 }}
              transition={{ duration:0.8, delay:0.4, ease:[0.22,1,0.36,1] }}
              style={{
                width:80, height:3, borderRadius:2, marginBottom:24,
                background:"linear-gradient(90deg,#38bdf8,#818cf8)",
                transformOrigin:"left",
              }}
            />

            {/* Subtext */}
            <motion.p
              className="hero-subtext"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.42 }}
              style={{
                color:"rgba(186,230,255,0.60)",
                fontSize:"clamp(14px, 1.5vw, 17px)",
                lineHeight:1.85, marginBottom:46, maxWidth:530,
              }}
            >
              We build scalable, robust applications designed to evolve with your
              business. Let's craft a mobile app your customers will love and that
              drives your business forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.54 }}
              style={{ display:"flex", gap:14, flexWrap:"wrap", alignItems:"center", marginBottom:52 }}
            >
              {/* Primary */}
              <motion.button
                whileHover={{ scale:1.05, boxShadow:"0 0 44px rgba(59,130,246,0.6)" }}
                whileTap={{ scale:0.97 }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:9,
                  background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  border:"none", borderRadius:10,
                  color:"white", fontFamily:"'DM Sans',sans-serif",
                  fontWeight:700, fontSize:"clamp(11px, 1.2vw, 13px)",
                  letterSpacing:"0.16em", textTransform:"uppercase",
                  padding:"clamp(13px, 1.6vw, 16px) clamp(22px, 2.8vw, 32px)",
                  cursor:"pointer",
                  boxShadow:"0 4px 24px rgba(59,130,246,0.40)",
                }}
              >
                Book a Free Consultation
                <FiArrowRight size={15}/>
              </motion.button>

              {/* Secondary */}
              <motion.button
                whileHover={{ scale:1.04, background:"rgba(59,130,246,0.15)", borderColor:"rgba(59,130,246,0.5)" }}
                whileTap={{ scale:0.97 }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:9,
                  background:"rgba(255,255,255,0.06)",
                  backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
                  border:"1px solid rgba(255,255,255,0.20)",
                  borderRadius:10, color:"white",
                  fontFamily:"'DM Sans',sans-serif",
                  fontWeight:700, fontSize:"clamp(11px, 1.2vw, 13px)",
                  letterSpacing:"0.16em", textTransform:"uppercase",
                  padding:"clamp(13px, 1.6vw, 16px) clamp(22px, 2.8vw, 32px)",
                  cursor:"pointer", transition:"all 0.3s",
                }}
              >
                View Portfolio
                <FiExternalLink size={14}/>
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="badges-container"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration:0.8, delay:0.74 }}
              style={{ display:"flex", gap:10, flexWrap:"wrap" }}
            >
              {BADGES.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.78 + i*0.08, duration:0.4 }}
                  style={{
                    display:"flex", alignItems:"center", gap:8,
                    background:"rgba(59,130,246,0.10)",
                    backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
                    border:"1px solid rgba(59,130,246,0.22)",
                    borderRadius:8, padding:"8px 15px",
                    color:"#93c5fd",
                  }}
                >
                  {b.icon}
                  <span style={{ fontSize:"clamp(10px, 3vw, 12px)", fontWeight:600, color:"rgba(186,230,255,0.75)" }}>{b.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator (responsive bottom) ── */}
      <motion.div
        className="scroll-indicator"
        animate={{ y:[0,8,0] }}
        transition={{ duration:2, repeat:Infinity }}
        style={{
          position:"absolute", bottom:"clamp(20px, 5vh, 36px)", left:"50%", transform:"translateX(-50%)",
          display:"flex", flexDirection:"column", alignItems:"center", gap:6,
          zIndex:10,
        }}
      >
        <span style={{ color:"rgba(147,197,253,0.35)", fontSize:"clamp(8px, 2.5vw, 10px)", letterSpacing:2.5, textTransform:"uppercase" }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2"/>
          <path d="M8 14l-3 3m3-3l3 3" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:110,
        background:"linear-gradient(to top,#040d1a,transparent)",
        pointerEvents:"none",
      }}/>
    </section>
  );
}