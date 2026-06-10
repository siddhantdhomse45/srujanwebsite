import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiZap, FiAward, FiUsers } from "react-icons/fi";

const BADGES = [
  { icon: <FiAward size={13} />,  label: "Fortune 500 Trusted"  },
  { icon: <FiUsers size={13} />,  label: "200+ Design Experts"  },
  { icon: <FiZap   size={13} />,  label: "10× Faster Delivery"  },
];

const WORDS = ["Streamline", "Optimise", "Transform", "Elevate"];

export default function DesignConsultingHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
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

      {/* ── Parallax background ── */}
      <motion.div
        style={{
          position: "absolute", inset: 0, y: bgY, scale: 1.14,
          backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=85")`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }}
      />

      {/* ── Premium blue-navy overlays ── */}
      {/* Base deep navy */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(3,8,24,0.72)",
      }} />
      {/* Left-to-right directional gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(110deg, rgba(3,10,30,0.96) 0%, rgba(5,18,55,0.88) 40%, rgba(6,22,65,0.65) 65%, rgba(3,10,30,0.35) 100%)",
      }} />
      {/* Radial depth from left */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 75% 100% at 0% 50%, rgba(10,25,80,0.60), transparent 70%)",
      }} />
      {/* Subtle warm tint on right (matches the amber workspace photo) */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(30,14,4,0.30), transparent 70%)",
      }} />

      {/* ── Grid texture ── */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dchgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dchgrid)"/>
      </svg>

      {/* ── Floating orbs (premium blue) ── */}
      <motion.div
        animate={{ scale:[1,1.14,1], opacity:[0.20,0.32,0.20] }}
        transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{
          position:"absolute", top:"-18%", left:"-10%",
          width:540, height:540, borderRadius:"50%",
          background:"radial-gradient(circle,#1e3a8a,#3b82f6,transparent 70%)",
          filter:"blur(90px)", pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ scale:[1,1.10,1], opacity:[0.14,0.22,0.14] }}
        transition={{ duration:14,repeat:Infinity,ease:"easeInOut",delay:3 }}
        style={{
          position:"absolute", bottom:"-12%", left:"20%",
          width:460, height:460, borderRadius:"50%",
          background:"radial-gradient(circle,#1d4ed8,#06b6d4,transparent 70%)",
          filter:"blur(100px)", pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ scale:[1,1.08,1], opacity:[0.10,0.16,0.10] }}
        transition={{ duration:18,repeat:Infinity,ease:"easeInOut",delay:6 }}
        style={{
          position:"absolute", top:"25%", right:"-5%",
          width:360, height:360, borderRadius:"50%",
          background:"radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)",
          filter:"blur(80px)", pointerEvents:"none",
        }}
      />

      {/* ── Rotating rings ── */}
      <motion.div
        animate={{ rotate:360 }}
        transition={{ duration:45,repeat:Infinity,ease:"linear" }}
        style={{
          position:"absolute", width:720, height:720,
          top:"50%", left:"35%", transform:"translate(-50%,-50%)",
          border:"1px solid rgba(59,130,246,0.07)",
          borderRadius:"50%", pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ rotate:-360 }}
        transition={{ duration:65,repeat:Infinity,ease:"linear" }}
        style={{
          position:"absolute", width:980, height:980,
          top:"50%", left:"35%", transform:"translate(-50%,-50%)",
          border:"1px solid rgba(99,102,241,0.04)",
          borderRadius:"50%", pointerEvents:"none",
        }}
      />

      {/* ── Floating particle dots ── */}
      {[
        { top:"15%",left:"60%",size:4,delay:0 },
        { top:"35%",left:"75%",size:3,delay:1 },
        { top:"60%",left:"55%",size:5,delay:2 },
        { top:"20%",left:"45%",size:3,delay:0.5 },
        { top:"75%",left:"70%",size:4,delay:1.5 },
        { top:"50%",left:"85%",size:3,delay:2.5 },
      ].map((p,i) => (
        <motion.div
          key={i}
          animate={{ y:[0,-12,0], opacity:[0.3,0.8,0.3] }}
          transition={{ duration:3+i*0.5,repeat:Infinity,ease:"easeInOut",delay:p.delay }}
          style={{
            position:"absolute",top:p.top,left:p.left,
            width:p.size,height:p.size,borderRadius:"50%",
            background:"#60a5fa",
            boxShadow:`0 0 ${p.size*3}px #60a5fa`,
            pointerEvents:"none",
          }}
        />
      ))}

      {/* ── Main content ── */}
      <motion.div
        style={{
          y:contentY, opacity:fade,
          position:"relative",zIndex:10,width:"100%",
          padding:"clamp(100px,14vw,140px) 0 clamp(80px,10vw,120px)",
        }}
      >
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth:700 }}>

            {/* Pill badge */}
            <motion.div
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              transition={{ duration:0.6,delay:0.1 }}
              style={{
                display:"inline-flex",alignItems:"center",gap:8,
                background:"rgba(59,130,246,0.12)",
                backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
                border:"1px solid rgba(59,130,246,0.30)",
                borderRadius:100,padding:"7px 18px",marginBottom:30,
              }}
            >
              <motion.span
                animate={{ opacity:[1,0.3,1] }}
                transition={{ duration:1.8,repeat:Infinity }}
                style={{ width:7,height:7,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 10px #38bdf8",display:"inline-block",flexShrink:0 }}
              />
              <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>
                Design Services & Consulting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity:0,y:36 }}
              animate={{ opacity:1,y:0 }}
              transition={{ duration:0.85,delay:0.2,ease:[0.22,1,0.36,1] }}
              style={{
                color:"white",
                fontSize:"clamp(28px,4.5vw,60px)",
                fontWeight:900,letterSpacing:"-2px",lineHeight:1.05,
                textTransform:"uppercase",marginBottom:10,
              }}
            >
              Design Services &<br/>Consulting
            </motion.h1>

            <motion.div
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              transition={{ duration:0.8,delay:0.3,ease:[0.22,1,0.36,1] }}
            >
              <span style={{
                fontSize:"clamp(28px,4.5vw,60px)",
                fontWeight:900,letterSpacing:"-2px",lineHeight:1.05,
                textTransform:"uppercase",
                background:"linear-gradient(90deg,#38bdf8 0%,#60a5fa 35%,#818cf8 65%,#c084fc 100%)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                backgroundClip:"text",display:"block",marginBottom:24,
              }}>
                Trusted by Fortune 500 Companies
              </span>
            </motion.div>

            {/* Accent underline */}
            <motion.div
              initial={{ scaleX:0 }}
              animate={{ scaleX:1 }}
              transition={{ duration:0.9,delay:0.42,ease:[0.22,1,0.36,1] }}
              style={{
                width:90,height:3,borderRadius:2,marginBottom:26,
                background:"linear-gradient(90deg,#38bdf8,#818cf8)",
                transformOrigin:"left",
              }}
            />

            {/* Sub-text */}
            <motion.p
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              transition={{ duration:0.7,delay:0.46 }}
              style={{
                color:"rgba(186,230,255,0.62)",
                fontSize:"clamp(14px,1.5vw,17px)",
                lineHeight:1.85,marginBottom:46,maxWidth:560,
              }}
            >
              We're not just designers — we're problem solvers who focus on creating designs
              that streamline workflows, optimise time on task, and deliver measurable results.
              Our approach ensures every detail serves a purpose, driving both efficiency and
              business impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              transition={{ duration:0.6,delay:0.56 }}
              style={{ display:"flex",gap:14,flexWrap:"wrap",alignItems:"center",marginBottom:52 }}
            >
              {/* Primary — Blue gradient */}
              <motion.button
                whileHover={{ scale:1.05,boxShadow:"0 0 44px rgba(59,130,246,0.65)" }}
                whileTap={{ scale:0.97 }}
                style={{
                  display:"inline-flex",alignItems:"center",gap:9,
                  background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  border:"none",borderRadius:10,
                  color:"white",fontFamily:"'DM Sans',sans-serif",
                  fontWeight:700,fontSize:"clamp(11px,1.2vw,13px)",
                  letterSpacing:"0.16em",textTransform:"uppercase",
                  padding:"clamp(13px,1.6vw,16px) clamp(22px,2.8vw,32px)",
                  cursor:"pointer",
                  boxShadow:"0 4px 24px rgba(59,130,246,0.40)",
                }}
              >
                Book a Free Consultation
                <FiArrowRight size={15}/>
              </motion.button>

              {/* Secondary — glass */}
              <motion.button
                whileHover={{ scale:1.04,background:"rgba(59,130,246,0.15)",borderColor:"rgba(59,130,246,0.50)" }}
                whileTap={{ scale:0.97 }}
                style={{
                  display:"inline-flex",alignItems:"center",gap:9,
                  background:"rgba(255,255,255,0.07)",
                  backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",
                  border:"1px solid rgba(255,255,255,0.22)",
                  borderRadius:10,color:"white",
                  fontFamily:"'DM Sans',sans-serif",
                  fontWeight:700,fontSize:"clamp(11px,1.2vw,13px)",
                  letterSpacing:"0.16em",textTransform:"uppercase",
                  padding:"clamp(13px,1.6vw,16px) clamp(22px,2.8vw,32px)",
                  cursor:"pointer",transition:"all 0.3s",
                }}
              >
                View Portfolio
                <FiExternalLink size={14}/>
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration:0.8,delay:0.75 }}
              style={{ display:"flex",gap:10,flexWrap:"wrap" }}
            >
              {BADGES.map((b,i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0,y:10 }}
                  animate={{ opacity:1,y:0 }}
                  transition={{ delay:0.78+i*0.09,duration:0.4 }}
                  style={{
                    display:"flex",alignItems:"center",gap:8,
                    background:"rgba(59,130,246,0.10)",
                    backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",
                    border:"1px solid rgba(59,130,246,0.22)",
                    borderRadius:8,padding:"8px 15px",
                    color:"#93c5fd",
                  }}
                >
                  {b.icon}
                  <span style={{ fontSize:12,fontWeight:600,color:"rgba(186,230,255,0.75)" }}>{b.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y:[0,8,0] }}
        transition={{ duration:2,repeat:Infinity }}
        style={{
          position:"absolute",bottom:36,left:"50%",transform:"translateX(-50%)",
          display:"flex",flexDirection:"column",alignItems:"center",gap:6,zIndex:10,
        }}
      >
        <span style={{ color:"rgba(147,197,253,0.35)",fontSize:10,letterSpacing:2.5,textTransform:"uppercase" }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2"/>
          <path d="M8 14l-3 3m3-3l3 3" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div style={{
        position:"absolute",bottom:0,left:0,right:0,height:110,
        background:"linear-gradient(to top,#040d1a,transparent)",
        pointerEvents:"none",
      }}/>
    </section>
  );
}