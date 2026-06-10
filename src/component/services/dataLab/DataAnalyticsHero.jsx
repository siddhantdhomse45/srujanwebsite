import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiTrendingUp, FiShield, FiGlobe } from "react-icons/fi";

const BADGES = [
  { icon: <FiTrendingUp size={13}/>, label: "Data-Driven Growth"    },
  { icon: <FiShield    size={13}/>, label: "Enterprise-Grade"       },
  { icon: <FiGlobe    size={13}/>, label: "Fortune 500 Trusted"    },
];

/* animated counter on scroll-in */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [val, setVal]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold:0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const METRICS = [
  { value:500,  suffix:"+", label:"Data Projects"      },
  { value:98,   suffix:"%", label:"Client Retention"   },
  { value:10,   suffix:"×", label:"ROI Average"        },
  { value:200,  suffix:"+", label:"Data Engineers"     },
];

/* floating animated data bars */
function DataBars() {
  const bars = [0.4, 0.7, 0.55, 0.85, 0.65, 0.9, 0.75, 0.5, 0.8, 0.6];
  return (
    <div style={{ display:"flex",gap:6,alignItems:"flex-end",height:70,padding:"0 4px" }}>
      {bars.map((h,i) => (
        <motion.div
          key={i}
          animate={{ scaleY:[h, h*1.2, h], opacity:[0.4,0.8,0.4] }}
          transition={{ duration:1.5+i*0.2,repeat:Infinity,ease:"easeInOut",delay:i*0.15 }}
          style={{
            width:8,height:`${h*100}%`,borderRadius:"4px 4px 0 0",
            background:`linear-gradient(to top,rgba(59,130,246,0.3),rgba(96,165,250,0.8))`,
            transformOrigin:"bottom",
          }}
        />
      ))}
    </div>
  );
}

export default function DataAnalyticsHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target:heroRef, offset:["start start","end start"] });
  const bgY      = useTransform(scrollYProgress, [0,1], ["0%","28%"]);
  const contentY = useTransform(scrollYProgress, [0,1], [0, 70]);
  const fade     = useTransform(scrollYProgress, [0,0.7], [1, 0]);

  return (
    <section ref={heroRef} style={{
      position:"relative", minHeight:"92vh",
      display:"flex", alignItems:"center",
      overflow:"hidden", fontFamily:"'DM Sans',sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* ── Parallax background ── */}
      <motion.div style={{
        position:"absolute",inset:0,y:bgY,scale:1.14,
        backgroundImage:`url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=85")`,
        backgroundSize:"cover",backgroundPosition:"center 40%",
      }}/>

      {/* ── Deep blue layered overlays ── */}
      <div style={{ position:"absolute",inset:0,background:"rgba(3,8,24,0.78)" }}/>
      <div style={{
        position:"absolute",inset:0,
        background:"linear-gradient(110deg,rgba(3,10,30,0.97) 0%,rgba(5,18,55,0.90) 40%,rgba(6,22,70,0.68) 65%,rgba(3,10,30,0.30) 100%)",
      }}/>
      <div style={{
        position:"absolute",inset:0,
        background:"radial-gradient(ellipse 80% 100% at 0% 50%,rgba(10,25,80,0.65),transparent 70%)",
      }}/>
      {/* cyan/teal tint echoing the dashboard screen on right */}
      <div style={{
        position:"absolute",inset:0,
        background:"radial-gradient(ellipse 40% 60% at 100% 40%,rgba(6,40,60,0.35),transparent 70%)",
      }}/>

      {/* ── Grid texture ── */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dahgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dahgrid)"/>
      </svg>

      {/* ── Floating orbs (deep blue + cyan) ── */}
      <motion.div animate={{ scale:[1,1.14,1],opacity:[0.20,0.34,0.20] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:"-18%",left:"-10%",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle,#1e3a8a,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.10,1],opacity:[0.15,0.25,0.15] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut",delay:3 }}
        style={{ position:"absolute",bottom:"-12%",left:"15%",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#164e63,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.10,0.18,0.10] }} transition={{ duration:18,repeat:Infinity,ease:"easeInOut",delay:6 }}
        style={{ position:"absolute",top:"20%",right:"-5%",width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)",filter:"blur(80px)",pointerEvents:"none" }}/>

      {/* ── Rotating rings ── */}
      <motion.div animate={{ rotate:360 }} transition={{ duration:50,repeat:Infinity,ease:"linear" }}
        style={{ position:"absolute",width:750,height:750,top:"50%",left:"35%",transform:"translate(-50%,-50%)",border:"1px solid rgba(59,130,246,0.07)",borderRadius:"50%",pointerEvents:"none" }}/>
      <motion.div animate={{ rotate:-360 }} transition={{ duration:80,repeat:Infinity,ease:"linear" }}
        style={{ position:"absolute",width:1020,height:1020,top:"50%",left:"35%",transform:"translate(-50%,-50%)",border:"1px solid rgba(6,182,212,0.04)",borderRadius:"50%",pointerEvents:"none" }}/>

      {/* ── Floating data particles ── */}
      {[
        {top:"12%",left:"58%",size:4,delay:0,c:"#38bdf8"},
        {top:"28%",left:"72%",size:3,delay:0.8,c:"#818cf8"},
        {top:"55%",left:"62%",size:5,delay:1.6,c:"#06b6d4"},
        {top:"18%",left:"48%",size:3,delay:0.4,c:"#60a5fa"},
        {top:"70%",left:"75%",size:4,delay:1.2,c:"#38bdf8"},
        {top:"42%",left:"84%",size:3,delay:2.0,c:"#818cf8"},
        {top:"80%",left:"55%",size:3,delay:0.6,c:"#06b6d4"},
      ].map((p,i) => (
        <motion.div key={i}
          animate={{ y:[0,-14,0],opacity:[0.25,0.75,0.25] }}
          transition={{ duration:3+i*0.4,repeat:Infinity,ease:"easeInOut",delay:p.delay }}
          style={{ position:"absolute",top:p.top,left:p.left,width:p.size,height:p.size,borderRadius:"50%",background:p.c,boxShadow:`0 0 ${p.size*3}px ${p.c}`,pointerEvents:"none" }}
        />
      ))}

      {/* ── Main content ── */}
      <motion.div style={{ y:contentY,opacity:fade,position:"relative",zIndex:10,width:"100%",padding:"clamp(100px,14vw,140px) 0 clamp(80px,10vw,120px)" }}>
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth:680 }}>

            {/* Pill badge */}
            <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.1 }}
              style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.12)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.30)",borderRadius:100,padding:"7px 18px",marginBottom:30 }}>
              <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:7,height:7,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 10px #38bdf8",display:"inline-block",flexShrink:0 }}/>
              <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Data Analytics Services</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity:0,y:36 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.85,delay:0.2,ease:[0.22,1,0.36,1] }}
              style={{ color:"white",fontSize:"clamp(28px,4.5vw,60px)",fontWeight:900,letterSpacing:"-2px",lineHeight:1.05,textTransform:"uppercase",marginBottom:10 }}>
              Data Analytics Services
            </motion.h1>

            <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.3,ease:[0.22,1,0.36,1] }}>
              <span style={{
                display:"block",
                fontSize:"clamp(28px,4.5vw,60px)",fontWeight:900,letterSpacing:"-2px",lineHeight:1.05,textTransform:"uppercase",marginBottom:24,
                background:"linear-gradient(90deg,#38bdf8 0%,#60a5fa 35%,#818cf8 65%,#c084fc 100%)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
              }}>
                Trusted by Fortune 500 Brands
              </span>
            </motion.div>

            {/* Accent line */}
            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.9,delay:0.42,ease:[0.22,1,0.36,1] }}
              style={{ width:90,height:3,borderRadius:2,marginBottom:26,background:"linear-gradient(90deg,#38bdf8,#818cf8)",transformOrigin:"left" }}/>

            {/* Sub-text */}
            <motion.p initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:0.46 }}
              style={{ color:"rgba(186,230,255,0.62)",fontSize:"clamp(14px,1.5vw,17px)",lineHeight:1.85,marginBottom:46,maxWidth:560 }}>
              Maximize the value of your data with our analytics services. Transform your organization into a data-driven powerhouse through cutting-edge solutions that drive smarter decision-making, operational efficiency, and business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.56 }}
              style={{ display:"flex",gap:14,flexWrap:"wrap",alignItems:"center",marginBottom:52 }}>
              <motion.button
                whileHover={{ scale:1.05,boxShadow:"0 0 44px rgba(59,130,246,0.65)" }}
                whileTap={{ scale:0.97 }}
                style={{ display:"inline-flex",alignItems:"center",gap:9,background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",border:"none",borderRadius:10,color:"white",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:"clamp(11px,1.2vw,13px)",letterSpacing:"0.16em",textTransform:"uppercase",padding:"clamp(13px,1.6vw,16px) clamp(22px,2.8vw,32px)",cursor:"pointer",boxShadow:"0 4px 24px rgba(59,130,246,0.40)" }}>
                Book a Free Consultation <FiArrowRight size={15}/>
              </motion.button>
              <motion.button
                whileHover={{ scale:1.04,background:"rgba(59,130,246,0.15)",borderColor:"rgba(59,130,246,0.50)" }}
                whileTap={{ scale:0.97 }}
                style={{ display:"inline-flex",alignItems:"center",gap:9,background:"rgba(255,255,255,0.07)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.22)",borderRadius:10,color:"white",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:"clamp(11px,1.2vw,13px)",letterSpacing:"0.16em",textTransform:"uppercase",padding:"clamp(13px,1.6vw,16px) clamp(22px,2.8vw,32px)",cursor:"pointer",transition:"all 0.3s" }}>
                View Portfolio <FiExternalLink size={14}/>
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8,delay:0.75 }} style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
              {BADGES.map((b,i) => (
                <motion.div key={i} initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.78+i*0.09,duration:0.4 }}
                  style={{ display:"flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.10)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(59,130,246,0.22)",borderRadius:8,padding:"8px 15px",color:"#93c5fd" }}>
                  {b.icon}
                  <span style={{ fontSize:12,fontWeight:600,color:"rgba(186,230,255,0.75)" }}>{b.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* ── Floating data metrics widget ── */}
          <motion.div
            initial={{ opacity:0,x:60,y:20 }}
            animate={{ opacity:1,x:0,y:0 }}
            transition={{ duration:0.9,delay:0.7,ease:[0.22,1,0.36,1] }}
            style={{
              position:"absolute",right:"clamp(20px,5vw,80px)",top:"50%",transform:"translateY(-50%)",
              background:"rgba(5,15,45,0.80)",
              backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",
              border:"1px solid rgba(59,130,246,0.22)",
              borderRadius:20,padding:"24px 28px",
              width:"clamp(220px,22vw,280px)",
              boxShadow:"0 24px 60px rgba(0,0,0,0.45),0 0 40px rgba(59,130,246,0.12)",
              display:"flex",flexDirection:"column",gap:20,
            }}
          >
            {/* widget header */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
              <span style={{ color:"rgba(147,197,253,0.65)",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>Analytics Overview</span>
              <div style={{ width:8,height:8,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee" }}/>
            </div>

            {/* bar chart */}
            <DataBars/>

            {/* divider */}
            <div style={{ height:1,background:"rgba(59,130,246,0.15)" }}/>

            {/* metrics grid */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
              {METRICS.map((m,i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0,y:10 }}
                  animate={{ opacity:1,y:0 }}
                  transition={{ delay:0.9+i*0.1,duration:0.4 }}
                  style={{ textAlign:"center" }}
                >
                  <div style={{
                    fontSize:"clamp(18px,2.5vw,24px)",fontWeight:900,lineHeight:1,
                    background:`linear-gradient(135deg,#38bdf8,#818cf8)`,
                    WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                    fontFamily:"'DM Sans',sans-serif",letterSpacing:"-1px",marginBottom:4,
                  }}>
                    <Counter target={m.value} suffix={m.suffix} duration={1600}/>
                  </div>
                  <div style={{ color:"rgba(147,197,253,0.45)",fontSize:10,fontWeight:600,letterSpacing:0.5,fontFamily:"'DM Sans',sans-serif" }}>
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* bottom accent */}
            <div style={{ height:2,borderRadius:2,background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)" }}/>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2,repeat:Infinity }}
        style={{ position:"absolute",bottom:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,zIndex:10 }}>
        <span style={{ color:"rgba(147,197,253,0.35)",fontSize:10,letterSpacing:2.5,textTransform:"uppercase" }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2"/>
          <path d="M8 14l-3 3m3-3l3 3" stroke="rgba(147,197,253,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:110,background:"linear-gradient(to top,#040d1a,transparent)",pointerEvents:"none" }}/>
    </section>
  );
}

