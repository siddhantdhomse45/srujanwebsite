import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "360-Degree Approach",
    description: "A time-tested framework that covers everything from ideation to post-release support — end-to-end, no gaps.",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.22)",
    number: "01",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="4.5" stroke={c} strokeWidth="1.8"/>
        {[[26,8,26,14],[26,38,26,44],[8,26,14,26],[38,26,44,26]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        ))}
        {[[13.5,13.5,17.8,17.8],[34.2,34.2,38.5,38.5],[38.5,13.5,34.2,17.8],[17.8,34.2,13.5,38.5]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Maximum Personalization",
    description: "We don't take on every project. Each engagement gets our full attention and highest level of custom craft.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.22)",
    number: "02",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="15" r="6" stroke={c} strokeWidth="1.8"/>
        <path d="M10 38 C10 30 18 24 26 24 C34 24 42 30 42 38" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M32 34 L36 30 L40 34" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="30" r="2" fill={c}/>
      </svg>
    ),
  },
  {
    title: "Design & CX First",
    description: "Each solution is tailored to a specific user's needs with a stand-out, conversion-focused visual language.",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.22)",
    number: "03",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <rect x="9" y="11" width="34" height="30" rx="2" stroke={c} strokeWidth="1.8"/>
        <line x1="9" y1="18" x2="43" y2="18" stroke={c} strokeWidth="1.8"/>
        <rect x="15" y="23" width="10" height="8" rx="1" stroke={c} strokeWidth="1.5"/>
        <rect x="28" y="23" width="9" height="3" rx="1" stroke={c} strokeWidth="1.5"/>
        <rect x="28" y="29" width="9" height="3" rx="1" stroke={c} strokeWidth="1.5"/>
        {[12,16,20].map((x,i)=>(
          <circle key={i} cx={x} cy="14.5" r="1.2" fill={c}/>
        ))}
      </svg>
    ),
  },
  {
    title: "Highest Flexibility",
    description: "Engagement models built for any team size, budget, or timeline. Stay agile across every parameter.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.22)",
    number: "04",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="10" stroke={c} strokeWidth="1.8"/>
        <path d="M26 16 C22 20 22 32 26 36" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 16 C30 20 30 32 26 36" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16.2" y1="21" x2="35.8" y2="21" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16.2" y1="31" x2="35.8" y2="31" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40 23 L44 26 L40 29" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 23 L8 26 L12 29" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Top Tech Talent",
    description: "Experienced engineers with deep niche expertise and elite problem-solving skills — no juniors on critical work.",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.22)",
    number: "05",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="15" r="5.5" stroke={c} strokeWidth="1.8"/>
        <path d="M14 42 C14 34 19 29 26 29 C33 29 38 34 38 42" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <polygon points="26,33 27.4,37.2 31.8,37.2 28.2,39.8 29.6,44 26,41.4 22.4,44 23.8,39.8 20.2,37.2 24.6,37.2" stroke={c} strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Impactful Workshops",
    description: "Prototype and refine ideas in structured, results-driven sessions before a single line of code is written.",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.22)",
    number: "06",
    icon: (c) => (
      <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
        <rect x="10" y="9" width="32" height="22" rx="2" stroke={c} strokeWidth="1.8"/>
        <line x1="26" y1="31" x2="26" y2="39" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="18" y1="39" x2="34" y2="39" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="44" r="3.5" stroke={c} strokeWidth="1.5"/>
        <circle cx="36" cy="44" r="3.5" stroke={c} strokeWidth="1.5"/>
        <path d="M20 19 L24 23 L32 15" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ─── PARTICLE CANVAS ─── */
const Particles = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35,
      r:Math.random()*1.2+.3, a:Math.random()*.3+.06,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(148,163,184,${p.a})`; ctx.fill();
      });
      pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<110){
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(148,163,184,${.07*(1-d/110)})`;
          ctx.lineWidth=.4; ctx.stroke();
        }
      }));
      raf=requestAnimationFrame(draw);
    };
    draw();
    const resize=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener("resize",resize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
};

/* ─── MORPH BLOB ─── */
const Blob = ({color,size,top,left,delay=0}) => (
  <motion.div style={{position:"absolute",width:size,height:size,top,left,background:color,filter:"blur(80px)",opacity:.14,borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%",pointerEvents:"none",zIndex:0}}
    animate={{borderRadius:["60% 40% 30% 70%/60% 30% 70% 40%","30% 70% 70% 30%/40% 50% 60% 50%","60% 40% 30% 70%/60% 30% 70% 40%"],scale:[1,1.12,1]}}
    transition={{duration:14+delay*2,repeat:Infinity,ease:"easeInOut",delay}}/>
);

/* ─── SCROLL REVEAL ─── */
const Rev = ({children,delay=0,y=40}) => {
  const ref = useRef(null);
  const inView = useInView(ref,{once:true,margin:"-50px"});
  return (
    <motion.div ref={ref} initial={{opacity:0,y}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:.85,delay,ease:[0.16,1,0.3,1]}}>
      {children}
    </motion.div>
  );
};

/* ─── FEATURE CARD ─── */
const FeatureCard = ({ feature, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 + Math.floor(index / 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 22,
        padding: "40px 32px 36px",
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", cursor: "default", overflow: "hidden",
        background: hovered ? `${feature.color}0d` : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        border: hovered ? `1px solid ${feature.color}45` : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${feature.color}20` : "0 4px 24px rgba(0,0,0,0.15)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all .4s cubic-bezier(.34,1.56,.64,1)",
      }}>

      {/* Top color accent */}
      <div style={{ position:"absolute",top:0,left:0,right:0,height:2,borderRadius:"22px 22px 0 0", background:`linear-gradient(90deg, transparent, ${feature.color}, transparent)`, opacity: hovered ? 1 : 0.3, transition:"opacity .3s ease" }} />

      {/* Radial glow on hover */}
      <div style={{ position:"absolute",inset:0,background:`radial-gradient(circle at 50% 0%, ${feature.glow}, transparent 65%)`, opacity: hovered ? 1 : 0, transition:"opacity .4s ease", pointerEvents:"none" }} />

      {/* Number badge */}
      <div style={{ position:"absolute",top:18,right:20, fontFamily:"'Space Mono',monospace", fontSize:10, color: hovered ? feature.color : "rgba(255,255,255,0.15)", letterSpacing:"0.12em", transition:"color .3s ease" }}>
        {feature.number}
      </div>

      {/* Icon */}
      <motion.div
        animate={hovered ? { y: -4, scale: 1.12 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: 24, position: "relative", zIndex: 1,
          padding: 14, borderRadius: 18,
          background: hovered ? `${feature.color}15` : "rgba(255,255,255,0.04)",
          border: `1.5px solid ${hovered ? feature.color + "40" : "rgba(255,255,255,0.08)"}`,
          boxShadow: hovered ? `0 0 24px ${feature.glow}` : "none",
          transition: "all .3s ease",
        }}>
        {feature.icon(hovered ? feature.color : "rgba(255,255,255,0.5)")}
      </motion.div>

      {/* Title */}
      <h3 style={{ fontFamily:"'DM Serif Display',serif", fontSize:21, fontWeight:400, color: hovered ? "#f8fafc" : "rgba(255,255,255,0.85)", margin:"0 0 14px", lineHeight:1.2, position:"relative",zIndex:1, transition:"color .3s ease" }}>
        {feature.title}
      </h3>

      {/* Description */}
      <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14, color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.38)", lineHeight:1.8, margin:0, maxWidth:240, position:"relative",zIndex:1, transition:"color .3s ease" }}>
        {feature.description}
      </p>

      {/* Bottom shimmer on hover */}
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:1, background:`linear-gradient(90deg, transparent, ${feature.color}50, transparent)`, opacity: hovered ? 1 : 0, transition:"opacity .3s ease" }} />
    </motion.div>
  );
};

/* ─── MAIN ─── */
const WhyChooseUsGlass = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .wcu-gl { font-family:'Plus Jakarta Sans',sans-serif; }
        .wcu-serif { font-family:'DM Serif Display',serif; }
        .wcu-mono { font-family:'Space Mono',monospace; }
        .wcu-btn {
          background:linear-gradient(135deg,#0ea5e9,#6366f1);
          border:none; cursor:pointer; color:#fff;
          font-family:'Plus Jakarta Sans',sans-serif;
          font-size:13px; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
          padding:14px 32px; border-radius:12px;
          box-shadow:0 0 28px rgba(14,165,233,.28);
          transition:all .3s ease; display:inline-flex; align-items:center; gap:10px;
        }
        .wcu-btn:hover{transform:translateY(-2px);box-shadow:0 0 48px rgba(14,165,233,.5);}
        @keyframes wcu-pulse{0%,100%{opacity:.5}50%{opacity:1}}
        .wcu-dot{animation:wcu-pulse 2.5s ease-in-out infinite;}
      `}</style>

      <section ref={sectionRef} className="wcu-gl"
        style={{ background:"#060b14", padding:"110px 0 120px", position:"relative", overflow:"hidden" }}>

        {/* Blobs */}
        <Blob color="radial-gradient(circle,#22d3ee,#0891b2)" size="600px" top="-10%" left="-8%" delay={0}/>
        <Blob color="radial-gradient(circle,#a78bfa,#6366f1)" size="500px" top="35%" left="65%" delay={3}/>
        <Blob color="radial-gradient(circle,#34d399,#0f766e)" size="400px" top="70%" left="8%" delay={6}/>

        {/* Particles */}
        <div style={{position:"absolute",inset:0,zIndex:0}}><Particles/></div>

        {/* Dot grid */}
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",backgroundSize:"72px 72px",zIndex:0,pointerEvents:"none"}}/>

        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 clamp(24px,5vw,72px)",position:"relative",zIndex:2}}>

          {/* ── HEADER ── */}
          <div style={{textAlign:"center",marginBottom:72}}>
            <Rev>
              <span className="wcu-mono" style={{fontSize:10,color:"#0ea5e9",letterSpacing:"0.28em",textTransform:"uppercase",display:"block",marginBottom:16}}>
                // why_clients_choose_us
              </span>
            </Rev>
            <Rev delay={0.1}>
              <h2 className="wcu-serif" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:400,color:"#f8fafc",margin:"0 0 6px",lineHeight:1.08}}>
                Why Clients{" "}
                <span style={{fontStyle:"italic",background:"linear-gradient(135deg,#38bdf8,#a78bfa,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Choose Us
                </span>
              </h2>
            </Rev>
            <Rev delay={0.2}>
              <p style={{color:"rgba(255,255,255,0.42)",fontSize:16,maxWidth:520,margin:"20px auto 0",lineHeight:1.8}}>
                Six pillars that separate truly exceptional technology partners from everyone else.
              </p>
            </Rev>
            <Rev delay={0.3}>
              <div style={{width:60,height:2,borderRadius:1,background:"linear-gradient(90deg,#0ea5e9,#6366f1)",margin:"28px auto 0"}}/>
            </Rev>
          </div>

          {/* ── CARD GRID ── */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:20,marginBottom:64}}>
            {features.map((f,i) => (
              <FeatureCard key={i} feature={f} index={i}/>
            ))}
          </div>

          {/* ── CTA ── */}
         

        </div>
      </section>
    </>
  );
};

export default WhyChooseUsGlass;