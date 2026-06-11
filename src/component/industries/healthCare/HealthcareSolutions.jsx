import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiActivity, FiDatabase, FiWifi, FiMonitor,
  FiHeart, FiFileText, FiShield, FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    id: "his",
    label: "Comprehensive Hospital Information Systems",
    icon: <FiActivity size={20} strokeWidth={1.6} />,
    accent: "#22d3ee",
    grad: "linear-gradient(135deg,#0891b2,#22d3ee)",
    active: true,
    desc: "End-to-end HIS platforms covering patient registration, billing, scheduling, lab, pharmacy and reporting in one unified system.",
  },
  {
    id: "data",
    label: "Robust Data Engines",
    icon: <FiDatabase size={20} strokeWidth={1.6} />,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    active: false,
    desc: "High-performance clinical data pipelines with real-time analytics, HL7/FHIR compliance and AI-powered diagnostic insights.",
  },
  {
    id: "iomt",
    label: "Internet of Medical Things (IoMT)",
    icon: <FiWifi size={20} strokeWidth={1.6} />,
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    active: false,
    desc: "Seamless integration of wearables, smart devices and sensors with secure cloud infrastructure for continuous patient monitoring.",
  },
  {
    id: "remote",
    label: "Remote Patient Care Solutions",
    icon: <FiMonitor size={20} strokeWidth={1.6} />,
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    active: false,
    desc: "Telehealth platforms with HD video consultations, digital prescriptions, remote diagnostics and real-time vital monitoring.",
  },
  {
    id: "fitness",
    label: "Fitness and Health Awareness Apps",
    icon: <FiHeart size={20} strokeWidth={1.6} />,
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    active: false,
    desc: "Personalised wellness apps with AI coaching, nutrition tracking, mental health tools and gamification for behaviour change.",
  },
  {
    id: "ehr",
    label: "Electronic Health Records",
    icon: <FiFileText size={20} strokeWidth={1.6} />,
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    active: false,
    desc: "HIPAA-compliant EHR systems with structured clinical data, e-prescribing, decision support and seamless interoperability.",
  },
];

/* ── feature row ── */
function FeatureRow({ feature, index, activeId, onActivate }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const isActive = activeId === feature.id;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onActivate(feature.id)}
      style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: "clamp(12px,1.5vw,16px) clamp(14px,1.8vw,20px)",
        borderRadius: 14, cursor: "pointer",
        background: isActive ? `${feature.accent}14` : "rgba(255,255,255,0.02)",
        border: isActive ? `1px solid ${feature.accent}40` : "1px solid transparent",
        boxShadow: isActive ? `0 0 28px ${feature.accent}14` : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* active left bar */}
      {isActive && (
        <motion.div
          layoutId="activeBar"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: feature.grad, borderRadius: "14px 0 0 14px",
          }}
          transition={{ duration: 0.35 }}
        />
      )}

      {/* icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: isActive ? feature.grad : `${feature.accent}12`,
        border: isActive ? "none" : `1px solid ${feature.accent}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: isActive ? "white" : feature.accent,
        boxShadow: isActive ? `0 4px 16px ${feature.accent}40` : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}>
        {feature.icon}
      </div>

      {/* label */}
      <div style={{ flex: 1 }}>
        <span style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "clamp(13px,1.4vw,15px)", fontWeight: isActive ? 700 : 500,
          color: isActive ? "white" : "rgba(186,230,255,0.65)",
          lineHeight: 1.4, transition: "color 0.3s",
        }}>
          {feature.label}
        </span>

        {/* expandable desc */}
        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              margin: "6px 0 0",
              color: "rgba(186,230,255,0.50)",
              fontSize: "clamp(11px,1.2vw,13px)", lineHeight: 1.65,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {feature.desc}
          </motion.p>
        )}
      </div>

      {/* chevron */}
      <motion.div
        animate={{ rotate: isActive ? 90 : 0, x: isActive ? 3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ color: isActive ? feature.accent : "rgba(147,197,253,0.25)", flexShrink: 0 }}
      >
        <FiArrowRight size={16} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}

/* ── mock app card ── */
function MockupCard() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative" }}
    >
      {/* desktop screenshot card */}
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: "1px solid rgba(59,130,246,0.20)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        background: "rgba(5,15,50,0.85)",
        backdropFilter: "blur(20px)",
      }}>
        {/* browser chrome */}
        <div style={{ background: "rgba(15,25,60,0.95)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(59,130,246,0.12)" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }}/>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }}/>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }}/>
          <div style={{ flex: 1, marginLeft: 8, background: "rgba(59,130,246,0.12)", borderRadius: 6, padding: "4px 10px" }}>
            <span style={{ color: "rgba(147,197,253,0.45)", fontSize: 10, fontFamily: "'DM Sans',sans-serif" }}>hospital.hms.in/dashboard</span>
          </div>
        </div>
        {/* fake HIS table */}
        <div style={{ padding: "14px", overflowX: "hidden" }}>
          {/* tab row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {["Projects","Users","Vendors","Materials","Machines"].map((t, i) => (
              <div key={t} style={{ padding: "4px 10px", borderRadius: 6, fontSize: 10, fontFamily: "'DM Sans',sans-serif",
                background: i === 2 ? "rgba(34,211,238,0.18)" : "rgba(255,255,255,0.04)",
                border: i === 2 ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.06)",
                color: i === 2 ? "#22d3ee" : "rgba(186,230,255,0.40)",
              }}>{t}</div>
            ))}
          </div>
          {/* status pills */}
          <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
            {[["Active","#22c55e"],["Disabled","#6b7280"],["With deviations","#f59e0b"]].map(([l,c]) => (
              <div key={l} style={{ padding: "3px 9px", borderRadius: 5, fontSize: 9, fontFamily: "'DM Sans',sans-serif",
                background: `${c}18`, border: `1px solid ${c}30`, color: c }}>
                {l}
              </div>
            ))}
          </div>
          {/* fake rows */}
          {["BrainPump.com","BrainPan.com","Brainquil","BrainWire","Brain Dandy"].map((name, i) => (
            <div key={i} style={{ display: "flex", gap: 8, padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", alignItems: "center" }}>
              <span style={{ flex: 2, fontSize: 10, color: "#38bdf8", fontFamily: "'DM Sans',sans-serif" }}>{name}</span>
              <span style={{ flex: 1, fontSize: 9, color: "rgba(186,230,255,0.30)", fontFamily: "'DM Sans',sans-serif" }}>
                {["Active","Inactive","Disabled","Active","Inactive"][i]}
              </span>
              <div style={{ flex: 1, height: 4, borderRadius: 2, background: `rgba(${i%2===0?"34,211,238":"96,165,250"},0.25)` }}/>
            </div>
          ))}
        </div>
      </div>

      {/* mobile overlay card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -24, right: -20,
          width: 180,
          background: "rgba(5,15,50,0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(34,211,238,0.22)",
          borderRadius: 20, overflow: "hidden",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* phone chrome */}
        <div style={{ background: "rgba(15,25,60,0.98)", padding: "8px 12px", textAlign: "center", borderBottom: "1px solid rgba(34,211,238,0.10)" }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 6px" }}/>
          {/* doctor image strip */}
          <div style={{ height: 80, borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&q=80"
              alt="doctor"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75)" }}
            />
          </div>
        </div>
        <div style={{ padding: "10px 10px 12px" }}>
          {[["Register via HMS Card","#22d3ee"],["Log in via HMS Card","#38bdf8"]].map(([l,c]) => (
            <div key={l} style={{
              background: `${c}18`, border: `1px solid ${c}35`,
              borderRadius: 8, padding: "7px 10px", marginBottom: 6, textAlign: "center",
            }}>
              <span style={{ color: c, fontSize: 9, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>{l}</span>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <span style={{ color: "rgba(186,230,255,0.35)", fontSize: 8, fontFamily: "'DM Sans',sans-serif" }}>Register or Log in via phone</span>
          </div>
        </div>
      </motion.div>

      {/* HIPAA badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, type: "spring", stiffness: 240, damping: 16 }}
        style={{
          position: "absolute", top: -16, left: -16,
          background: "linear-gradient(135deg,#059669,#34d399)",
          borderRadius: 10, padding: "6px 12px",
          boxShadow: "0 6px 20px rgba(52,211,153,0.40)",
          display: "flex", alignItems: "center", gap: 6,
        }}
      >
        <FiShield size={13} color="white" strokeWidth={2}/>
        <span style={{ color: "white", fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>HIPAA Compliant</span>
      </motion.div>
    </motion.div>
  );
}

/* ── decorative circle lines ── */
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[400, 560, 720].map((size, i) => (
        <div key={i} style={{
          position: "absolute",
          width: size, height: size,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.07)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
        }}/>
      ))}
    </div>
  );
}

/* ── main section ── */
export default function HealthcareSolutions() {
  const [activeId, setActiveId] = useState("his");
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(80px,14vw,140px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hcgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hcgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.18,0.30,0.18] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:520,height:520,borderRadius:"50%",background:"radial-gradient(circle,#0891b2,#22d3ee,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.15,0.25,0.15] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut",delay:3 }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <DecorativeCircles/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* ── header ── */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(34,211,238,0.12)",backdropFilter:"blur(20px)",border:"1px solid rgba(34,211,238,0.28)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"#67e8f9",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Healthcare IT</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20 }}>
            Pioneering Healthcare{" "}
            <span style={{ background:"linear-gradient(90deg,#22d3ee,#38bdf8,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Software Solutions
            </span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.9,maxWidth:800,margin:"0 auto" }}>
            As a seasoned healthcare IT provider, we stand at the forefront of technological advancements in the healthcare sector.
            Our solutions, backed by years of experience and in-depth technical knowledge, are designed to offer comprehensive
            tools that empower your services and streamline operations — from robust hospital information systems to remote patient
            care solutions and fitness apps.
          </p>
        </motion.div>

        {/* ── 3-column body ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr clamp(220px,26vw,340px) clamp(260px,30%,380px)",
          gap: "clamp(20px,3.5vw,48px)",
          alignItems: "center",
        }}>

          {/* LEFT: feature list */}
          <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
            {features.map((f, i) => (
              <FeatureRow
                key={f.id}
                feature={f}
                index={i}
                activeId={activeId}
                onActivate={setActiveId}
              />
            ))}
          </div>

          {/* CENTER: mockup */}
          <MockupCard/>

          {/* RIGHT: large feature highlight */}
          <motion.div
            key={activeId}
            initial={{ opacity:0,x:20 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:0.45,ease:[0.22,1,0.36,1] }}
            style={{
              borderRadius:22,padding:"clamp(24px,3vw,36px)",
              background:`${features.find(f=>f.id===activeId)?.accent}0c`,
              border:`1px solid ${features.find(f=>f.id===activeId)?.accent}30`,
              backdropFilter:"blur(20px)",
              boxShadow:`0 16px 40px rgba(0,0,0,0.25),0 0 30px ${features.find(f=>f.id===activeId)?.accent}10`,
              position:"relative",overflow:"hidden",
            }}
          >
            {(() => {
              const f = features.find(x => x.id === activeId);
              if (!f) return null;
              return (
                <>
                  <div style={{ position:"absolute",top:-40,right:-20,width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle,${f.accent}20,transparent 70%)`,filter:"blur(28px)",pointerEvents:"none" }}/>
                  <div style={{ height:3,background:f.grad,borderRadius:2,marginBottom:22 }}/>
                  <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                    <div style={{ width:48,height:48,borderRadius:14,background:f.grad,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 6px 20px ${f.accent}45` }}>
                      {f.icon}
                    </div>
                    <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:`${f.accent}14`,border:`1px solid ${f.accent}30`,borderRadius:8,padding:"4px 12px" }}>
                      <span style={{ width:5,height:5,borderRadius:"50%",background:f.accent,boxShadow:`0 0 6px ${f.accent}`,flexShrink:0 }}/>
                      <span style={{ color:f.accent,fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>Featured</span>
                    </div>
                  </div>
                  <h3 style={{ color:"white",fontSize:"clamp(15px,1.8vw,19px)",fontWeight:800,lineHeight:1.3,marginBottom:12,background:f.grad,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'DM Sans',sans-serif" }}>
                    {f.label}
                  </h3>
                  <p style={{ color:"rgba(186,230,255,0.55)",fontSize:"clamp(12px,1.3vw,14px)",lineHeight:1.8,margin:0,fontFamily:"'DM Sans',sans-serif" }}>
                    {f.desc}
                  </p>
                  <motion.button whileHover={{ scale:1.04,boxShadow:`0 0 20px ${f.accent}40` }} whileTap={{ scale:0.97 }}
                    style={{ marginTop:20,display:"inline-flex",alignItems:"center",gap:7,padding:"10px 20px",borderRadius:10,background:f.grad,border:"none",color:"white",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:12,cursor:"pointer" }}>
                    Learn More <FiArrowRight size={13}/>
                  </motion.button>
                </>
              );
            })()}
          </motion.div>

        </div>
      </div>
    </section>
  );
}