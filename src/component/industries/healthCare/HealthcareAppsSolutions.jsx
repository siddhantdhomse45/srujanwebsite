import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiVideo, FiCpu, FiMessageSquare, FiSmartphone,
  FiDatabase, FiLink, FiCloud, FiTruck, FiUser,
  FiCheck,
} from "react-icons/fi";

const solutions = [
  { label: "Telehealth Services",                  icon: <FiVideo       size={14}/>, accent:"#22d3ee", grad:"linear-gradient(135deg,#0891b2,#22d3ee)" },
  { label: "Artificial Intelligence",              icon: <FiCpu         size={14}/>, accent:"#38bdf8", grad:"linear-gradient(135deg,#1d4ed8,#38bdf8)" },
  { label: "Medical Chatbots",                     icon: <FiMessageSquare size={14}/>, accent:"#818cf8", grad:"linear-gradient(135deg,#6366f1,#818cf8)" },
  { label: "Mobile Healthcare Apps",               icon: <FiSmartphone  size={14}/>, accent:"#34d399", grad:"linear-gradient(135deg,#059669,#34d399)" },
  { label: "Electronic Data Management Systems",   icon: <FiDatabase    size={14}/>, accent:"#60a5fa", grad:"linear-gradient(135deg,#2563eb,#60a5fa)" },
  { label: "Blockchain",                           icon: <FiLink        size={14}/>, accent:"#c084fc", grad:"linear-gradient(135deg,#9333ea,#c084fc)" },
  { label: "Cloud Computing",                      icon: <FiCloud       size={14}/>, accent:"#f472b6", grad:"linear-gradient(135deg,#db2777,#f472b6)" },
  { label: "Digital Supply Chains",                icon: <FiTruck       size={14}/>, accent:"#fb923c", grad:"linear-gradient(135deg,#ea580c,#fb923c)" },
  { label: "Hyper-Personalized Medicine",          icon: <FiUser        size={14}/>, accent:"#fbbf24", grad:"linear-gradient(135deg,#d97706,#fbbf24)" },
];

/* orbital icon nodes around the central logo */
const ORBIT_NODES = [
  { icon: <FiSmartphone  size={18} strokeWidth={1.4}/>, accent:"#38bdf8", angle:  45, label:"Mobile" },
  { icon: <FiCpu         size={18} strokeWidth={1.4}/>, accent:"#818cf8", angle: 130, label:"AI"     },
  { icon: <FiLink        size={18} strokeWidth={1.4}/>, accent:"#22d3ee", angle: 220, label:"Chain"  },
  { icon: <FiVideo       size={18} strokeWidth={1.4}/>, accent:"#34d399", angle: 310, label:"Tele"   },
  { icon: <FiCloud       size={18} strokeWidth={1.4}/>, accent:"#c084fc", angle:  -5, label:"Cloud"  },
  { icon: <FiDatabase    size={18} strokeWidth={1.4}/>, accent:"#f472b6", angle: 175, label:"Data"   },
];

/* polar → cartesian */
function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function OrbitalDiagram() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cx = 200, cy = 200, R1 = 80, R2 = 150;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", width: 400, height: 400, flexShrink: 0, margin: "0 auto" }}
    >
      {/* SVG base: circles + spokes */}
      <svg viewBox="0 0 400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0891b2" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.10"/>
          </radialGradient>
          <radialGradient id="ring1Grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* outer ring fill */}
        <circle cx={cx} cy={cy} r={R2} fill="url(#ring1Grad)"/>
        {/* outer ring border */}
        <circle cx={cx} cy={cy} r={R2} fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1"/>
        {/* inner ring */}
        <circle cx={cx} cy={cy} r={R1} fill="url(#centerGrad)" stroke="rgba(34,211,238,0.28)" strokeWidth="1.2"/>

        {/* spokes from center to node positions */}
        {ORBIT_NODES.map((n, i) => {
          const p = polar(cx, cy, R2, n.angle);
          return (
            <motion.line
              key={i}
              x1={cx} y1={cy} x2={p.x} y2={p.y}
              stroke={n.accent} strokeWidth="1" strokeOpacity="0.25"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            />
          );
        })}
      </svg>

      {/* central logo circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: R1 * 2 + 16, height: R1 * 2 + 16,
          transform: "translate(-50%,-50%)",
          border: "1.5px dashed rgba(34,211,238,0.22)",
          borderRadius: "50%",
        }}
      />
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        width: 72, height: 72,
        transform: "translate(-50%,-50%)",
        borderRadius: "50%",
        background: "linear-gradient(135deg,#1d4ed8,#22d3ee)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 40px rgba(34,211,238,0.50), 0 0 80px rgba(29,78,216,0.25)",
        zIndex: 3,
      }}>
        <span style={{ color: "white", fontSize: 26, fontWeight: 900, fontFamily: "'DM Sans',sans-serif", letterSpacing: -1 }}>IS</span>
      </div>

      {/* orbital icon nodes */}
      {ORBIT_NODES.map((n, i) => {
        const p = polar(cx, cy, R2, n.angle);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 240, damping: 18 }}
            style={{
              position: "absolute",
              left: p.x, top: p.y,
              transform: "translate(-50%,-50%)",
              width: 48, height: 48, borderRadius: "50%",
              background: `${n.accent}16`,
              border: `1.5px solid ${n.accent}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: n.accent,
              boxShadow: `0 0 16px ${n.accent}28`,
              zIndex: 2,
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {n.icon}
            </motion.div>

            {/* pulse */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
              style={{ position: "absolute", inset: -3, borderRadius: "50%", border: `1px solid ${n.accent}`, pointerEvents: "none" }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function SolutionItem({ solution, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "clamp(10px,1.4vw,14px) clamp(12px,1.6vw,18px)",
        borderRadius: 12,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(59,130,246,0.08)",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        position: "relative", overflow: "hidden",
      }}
      whileHover={{
        background: `rgba(${solution.accent.replace('#','').match(/.{2}/g).map(h=>parseInt(h,16)).join(',')},0.08)`,
        borderColor: `${solution.accent}35`,
        x: 4,
      }}
    >
      {/* check badge */}
      <div style={{
        width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
        background: solution.grad,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 2px 10px ${solution.accent}40`,
      }}>
        <FiCheck size={12} color="white" strokeWidth={2.8}/>
      </div>

      {/* icon */}
      <div style={{
        width: 32, height: 32, borderRadius: 9, flexShrink: 0,
        background: `${solution.accent}12`,
        border: `1px solid ${solution.accent}25`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: solution.accent,
      }}>
        {solution.icon}
      </div>

      {/* label */}
      <span style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 600,
        color: "rgba(186,230,255,0.80)", lineHeight: 1.3,
      }}>
        {solution.label}
      </span>

      {/* right dot indicator */}
      <div style={{
        marginLeft: "auto", width: 5, height: 5, borderRadius: "50%",
        background: solution.accent, boxShadow: `0 0 6px ${solution.accent}`,
        flexShrink: 0,
      }}/>
    </motion.div>
  );
}

export default function HealthcareAppsSolutions() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(80px,12vw,130px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(34,211,238,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hasgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hasgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.12,1],opacity:[0.18,0.30,0.18] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:520,height:520,borderRadius:"50%",background:"radial-gradient(circle,#0891b2,#22d3ee,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.15,0.25,0.15] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut",delay:3 }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      {/* decorative rings */}
      {[560,740,920].map((s,i) => (
        <div key={i} style={{
          position:"absolute",top:"60%",left:"20%",transform:"translate(-50%,-50%)",
          width:s,height:s,borderRadius:"50%",
          border:"1px solid rgba(34,211,238,0.05)",pointerEvents:"none",
        }}/>
      ))}

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* header */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(34,211,238,0.12)",backdropFilter:"blur(20px)",border:"1px solid rgba(34,211,238,0.28)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"#67e8f9",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Healthcare Applications</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20 }}>
            Software Applications &{" "}
            <span style={{ background:"linear-gradient(90deg,#22d3ee,#38bdf8,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Solutions for Healthcare
            </span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.9,maxWidth:800,margin:"0 auto" }}>
            The future of healthcare rests on embracing emerging trends and innovations. We recognise this shift, and to assist you
            in staying at the forefront, we offer an extensive portfolio of custom healthcare IT solutions designed to navigate
            both daily operations and large-scale endeavors.
          </p>
        </motion.div>

        {/* two-column body */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,5vw,72px)",alignItems:"center" }}>

          {/* LEFT: orbital diagram */}
          <OrbitalDiagram/>

          {/* RIGHT: solution checklist */}
          <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
            {/* section label */}
            <motion.div
              initial={{ opacity:0,y:16 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true,margin:"-40px" }}
              transition={{ duration:0.55 }}
              style={{ display:"inline-flex",alignItems:"center",gap:8,marginBottom:8 }}
            >
              <div style={{ height:1,width:28,background:"linear-gradient(90deg,#22d3ee,transparent)" }}/>
              <span style={{ color:"rgba(34,211,238,0.60)",fontSize:11,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
                These solutions include
              </span>
              <div style={{ height:1,width:28,background:"linear-gradient(90deg,transparent,#22d3ee)" }}/>
            </motion.div>

            {solutions.map((s, i) => <SolutionItem key={s.label} solution={s} index={i}/>)}

            {/* bottom CTA */}
            <motion.button
              initial={{ opacity:0,y:16 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{ delay:0.8,duration:0.5 }}
              whileHover={{ scale:1.04,boxShadow:"0 0 36px rgba(34,211,238,0.45)" }}
              whileTap={{ scale:0.97 }}
              style={{
                marginTop:12,
                display:"inline-flex",alignItems:"center",justifyContent:"center",gap:9,
                padding:"clamp(12px,1.6vw,15px) clamp(22px,3vw,32px)",borderRadius:12,
                background:"linear-gradient(135deg,#0891b2,#22d3ee)",
                border:"none",color:"white",
                fontFamily:"'DM Sans',sans-serif",fontWeight:700,
                fontSize:"clamp(12px,1.3vw,14px)",letterSpacing:"0.14em",textTransform:"uppercase",
                cursor:"pointer",
                boxShadow:"0 4px 24px rgba(34,211,238,0.30)",
                alignSelf:"flex-start",
              }}
            >
              Explore All Solutions
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}