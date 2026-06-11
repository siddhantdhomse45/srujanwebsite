import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiPlay, FiArrowRight, FiChevronRight,
  FiSmartphone, FiWifi, FiMonitor, FiCpu,
  FiShield, FiStar,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   SECTION 1 — HOW WE CAN HELP (video block)
───────────────────────────────────────────── */
function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(60px,9vw,110px) 0",
        background: "linear-gradient(180deg,#020b18 0%,#041530 55%,#020b18 100%)",
        fontFamily: "'DM Sans',sans-serif",
        overflow: "hidden",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Blueprint grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.04,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="vgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#vgrid)"/>
      </svg>

      {/* Orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.1,0.2,0.1] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-120,left:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.08,0.16,0.08] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut",delay:4 }}
        style={{ position:"absolute",bottom:-80,right:-60,width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div ref={ref} style={{ maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* Header */}
        <motion.div initial={{ opacity:0,y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(32px,5vw,56px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.12)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.28)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }}
              style={{ width:6,height:6,borderRadius:"50%",background:"#60a5fa",boxShadow:"0 0 8px #60a5fa",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>Our Approach</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(26px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1px",lineHeight:1.08,marginBottom:16,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
            How We{" "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Can Help
            </span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.6vw,17px)",lineHeight:1.85,maxWidth:600,margin:"0 auto",fontFamily:"'DM Sans',sans-serif" }}>
            Discover how we turn hospitality challenges into technology advantages — from legacy modernisation to next-generation guest experiences.
          </p>
        </motion.div>

        {/* Video card */}
        <motion.div initial={{ opacity:0,y:40,scale:0.97 }} animate={inView?{opacity:1,y:0,scale:1}:{}} transition={{ duration:0.8,delay:0.2,ease:[0.22,1,0.36,1] }}
          style={{ maxWidth:720,margin:"0 auto",position:"relative" }}>

          {/* Glow ring */}
          <div style={{ position:"absolute",inset:-2,borderRadius:22,background:"linear-gradient(135deg,rgba(37,99,235,0.4),rgba(99,102,241,0.2))",filter:"blur(12px)",zIndex:0,pointerEvents:"none" }}/>

          {/* Card */}
          <div style={{ position:"relative",borderRadius:20,overflow:"hidden",border:"1.5px solid rgba(59,130,246,0.3)",boxShadow:"0 32px 80px rgba(0,0,0,0.65),0 0 0 1px rgba(59,130,246,0.1)",zIndex:1 }}>
            {playing ? (
              <div style={{ position:"relative",paddingTop:"56.25%",background:"#000" }}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  style={{ position:"absolute",inset:0,width:"100%",height:"100%",border:"none" }}
                  allow="autoplay; fullscreen"
                  title="How We Can Help"
                />
              </div>
            ) : (
              <div
                onClick={() => setPlaying(true)}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{ position:"relative",cursor:"pointer",display:"block" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                  alt="Hotel"
                  style={{ width:"100%",display:"block",height:"clamp(240px,35vw,420px)",objectFit:"cover",objectPosition:"center",filter:`brightness(${hov?0.45:0.38})`,transition:"filter 0.3s" }}
                />
                {/* Dark overlay */}
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(4,21,48,0.5),rgba(4,21,48,0.25))" }}/>

                {/* Play button */}
                <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <motion.div
                    whileHover={{ scale:1.12 }}
                    whileTap={{ scale:0.95 }}
                    animate={{ boxShadow: hov
                      ? ["0 0 0 0 rgba(37,99,235,0.5)","0 0 0 20px rgba(37,99,235,0)"]
                      : ["0 0 0 0 rgba(37,99,235,0.35)","0 0 0 16px rgba(37,99,235,0)"] }}
                    transition={{ duration:1.6,repeat:Infinity,ease:"easeOut" }}
                    style={{
                      width:72,height:72,borderRadius:"50%",
                      background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      boxShadow:"0 8px 32px rgba(37,99,235,0.6)",
                      border:"2px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <FiPlay size={26} color="white" strokeWidth={2.5} style={{ marginLeft:3 }}/>
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div style={{ position:"absolute",bottom:16,right:16,padding:"5px 12px",borderRadius:8,background:"rgba(4,21,48,0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(59,130,246,0.25)",fontSize:11,fontWeight:700,color:"rgba(148,163,184,0.8)",fontFamily:"'DM Sans',sans-serif" }}>
                  3:42
                </div>

                {/* Top label */}
                <div style={{ position:"absolute",top:16,left:16,padding:"5px 14px",borderRadius:8,background:"rgba(4,21,48,0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(59,130,246,0.25)",fontSize:10,fontWeight:700,color:"#60a5fa",fontFamily:"'DM Sans',sans-serif",letterSpacing:"0.1em",textTransform:"uppercase" }}>
                  Watch Overview
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA link */}
        <motion.div initial={{ opacity:0,y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6,delay:0.5 }}
          style={{ textAlign:"center",marginTop:40 }}>
          <motion.a
            href="#"
            whileHover={{ x:4 }}
            style={{ display:"inline-flex",alignItems:"center",gap:8,color:"#60a5fa",fontSize:"clamp(13px,1.5vw,16px)",fontWeight:700,fontFamily:"'DM Sans',sans-serif",textDecoration:"none",letterSpacing:"0.02em" }}
          >
            Got a Project for Us? Let's Talk
            <FiChevronRight size={18} strokeWidth={2.5}/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   SECTION 2 — CUSTOM-MADE IT SOLUTIONS
───────────────────────────────────────────── */
const itSolutions = [
  {
    id: "mobile",
    label: "Mobile Hotel Applications",
    icon: <FiSmartphone size={20} strokeWidth={1.6}/>,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    desc: "Surpass your guests' service expectations by providing a superior mobile experience. Use innovative hospitality software development for room booking, loyalty and personalisation engines, amenity services, and smart capabilities.",
  },
  {
    id: "contactless",
    label: "Contactless Hospitality Solutions",
    icon: <FiWifi size={20} strokeWidth={1.6}/>,
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    featured: true,
    desc: "Enable contactless hotel operations with mobile and kiosk solutions. Provide your customers with intuitive, touchless technology and 24-hour access to amenities and services.",
  },
  {
    id: "kiosk",
    label: "Mobile Kiosk",
    icon: <FiMonitor size={20} strokeWidth={1.6}/>,
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    desc: "Mobile kiosks enable guests to enjoy their vacation earlier. Our custom software development for travel provides guests with a convenient, hassle-free way to check-in, allowing them to bypass the line at the front desk.",
  },
  {
    id: "smart",
    label: "Smart Rooms",
    icon: <FiCpu size={20} strokeWidth={1.6}/>,
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    desc: "Impress your clients with personalised IT hospitality solutions, including digital control of room environment and sensors with an in-room tablet, offline and online operation, and preventive maintenance.",
  },
  {
    id: "security",
    label: "Security & Compliance",
    icon: <FiShield size={20} strokeWidth={1.6}/>,
    accent: "#fbbf24",
    grad: "linear-gradient(135deg,#d97706,#fbbf24)",
    desc: "Enterprise-grade security frameworks covering PCI-DSS payment compliance, GDPR guest data protection, and end-to-end encryption across all guest-facing and back-office touchpoints.",
  },
  {
    id: "loyalty2",
    label: "Guest Experience & Loyalty",
    icon: <FiStar size={20} strokeWidth={1.6}/>,
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    desc: "AI-driven personalisation engines, tiered loyalty programmes, and predictive upsell recommendations that increase RevPAR and drive repeat bookings.",
  },
];

function ITSolutionRow({ solution, index, activeId, onActivate }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const isActive = activeId === solution.id;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0,x:-24 }}
      animate={inView?{opacity:1,x:0}:{}}
      transition={{ duration:0.5,delay:index*0.07,ease:[0.22,1,0.36,1] }}
      onClick={() => onActivate(solution.id)}
      style={{
        padding:"clamp(14px,2vw,20px) clamp(14px,2vw,20px)",
        borderBottom:"1px solid rgba(59,130,246,0.1)",
        cursor:"pointer",
        background: isActive ? `${solution.accent}10` : "transparent",
        borderRadius: isActive ? 14 : 0,
        border: isActive ? `1px solid ${solution.accent}35` : undefined,
        position:"relative",overflow:"hidden",
        transition:"all 0.3s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {isActive && (
        <motion.div layoutId="itActiveBar"
          style={{ position:"absolute",left:0,top:0,bottom:0,width:3,background:solution.grad,borderRadius:"14px 0 0 14px" }}
          transition={{ duration:0.35 }}/>
      )}
      <div style={{ display:"flex",alignItems:"flex-start",gap:14 }}>
        <div style={{
          width:42,height:42,borderRadius:12,flexShrink:0,marginTop:2,
          background: isActive ? solution.grad : `${solution.accent}12`,
          border: isActive ? "none" : `1px solid ${solution.accent}28`,
          display:"flex",alignItems:"center",justifyContent:"center",
          color: isActive ? "white" : solution.accent,
          boxShadow: isActive ? `0 4px 16px ${solution.accent}40` : "none",
          transition:"all 0.3s ease",
        }}>
          {solution.icon}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:6 }}>
            <span style={{
              fontFamily:"'DM Sans',sans-serif",
              fontSize:"clamp(13px,1.5vw,16px)",
              fontWeight: isActive ? 800 : 600,
              color: isActive ? "white" : "rgba(186,230,255,0.72)",
              lineHeight:1.35,
              transition:"color 0.3s",
            }}>
              {solution.label}
            </span>
            {solution.featured && (
              <span style={{ padding:"2px 8px",borderRadius:5,background:`${solution.accent}18`,border:`1px solid ${solution.accent}35`,fontSize:9,fontWeight:700,color:solution.accent,fontFamily:"'DM Sans',sans-serif",letterSpacing:"0.08em",textTransform:"uppercase",flexShrink:0 }}>
                Popular
              </span>
            )}
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity:0,height:0,marginTop:0 }}
                animate={{ opacity:1,height:"auto",marginTop:6 }}
                exit={{ opacity:0,height:0,marginTop:0 }}
                transition={{ duration:0.35 }}
                style={{ margin:0,color:"rgba(186,230,255,0.52)",fontSize:"clamp(11px,1.2vw,13px)",lineHeight:1.7,fontFamily:"'DM Sans',sans-serif" }}
              >
                {solution.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <motion.div animate={{ rotate:isActive?90:0,x:isActive?3:0 }} transition={{ duration:0.3 }}
          style={{ color:isActive?solution.accent:"rgba(147,197,253,0.2)",flexShrink:0,marginTop:10 }}>
          <FiChevronRight size={17} strokeWidth={2}/>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ITSolutionsSection() {
  const [activeId, setActiveId] = useState("contactless");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-60px" });
  const activeFeature = itSolutions.find((s) => s.id === activeId);

  return (
    <section style={{
      position:"relative",
      padding:"clamp(64px,10vw,110px) 0 clamp(80px,14vw,140px)",
      background:"linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      fontFamily:"'DM Sans',sans-serif",
      borderTop:"1px solid rgba(59,130,246,0.08)",
      overflow:"hidden",
    }}>
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="itgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#itgrid)"/>
      </svg>

      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.14,0.24,0.14] }} transition={{ duration:11,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,right:-80,width:520,height:520,borderRadius:"50%",background:"radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.07,1],opacity:[0.1,0.18,0.1] }} transition={{ duration:15,repeat:Infinity,ease:"easeInOut",delay:5 }}
        style={{ position:"absolute",bottom:-80,left:-60,width:460,height:460,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* Header */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.12)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.28)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }}
              style={{ width:6,height:6,borderRadius:"50%",background:"#60a5fa",boxShadow:"0 0 8px #60a5fa",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>Hospitality Tech</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(26px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1px",lineHeight:1.08,marginBottom:20,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
            Custom-Made{" "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              IT Solutions
            </span>
            <br/>for Hospitality Industry
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.6vw,17px)",lineHeight:1.9,maxWidth:680,margin:"0 auto",fontFamily:"'DM Sans',sans-serif" }}>
            Purpose-built technology for hotels, resorts, and hospitality brands — designed to elevate guest experiences and streamline every operation.
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr clamp(260px,32%,400px) clamp(240px,26%,320px)",
          gap:"clamp(24px,3.5vw,52px)",
          alignItems:"start",
        }}>

          {/* LEFT: solution list */}
          <div style={{ display:"flex",flexDirection:"column" }}>
            {itSolutions.map((s, i) => (
              <ITSolutionRow key={s.id} solution={s} index={i} activeId={activeId} onActivate={setActiveId}/>
            ))}
          </div>

          {/* CENTER: hotel image */}
          <motion.div ref={imgRef} initial={{ opacity:0,y:40,scale:0.96 }} animate={imgInView?{opacity:1,y:0,scale:1}:{}} transition={{ duration:0.85,ease:[0.22,1,0.36,1] }}
            style={{ position:"relative" }}>
            <div style={{ borderRadius:20,overflow:"hidden",border:"1.5px solid rgba(59,130,246,0.25)",boxShadow:"0 28px 70px rgba(0,0,0,0.6),0 0 0 1px rgba(59,130,246,0.1)" }}>
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Hotel guest with phone"
                style={{ width:"100%",height:"clamp(320px,45vw,520px)",objectFit:"cover",objectPosition:"center top",filter:"brightness(0.6)",display:"block" }}
              />
              <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 40%,rgba(4,21,48,0.85))" }}/>
            </div>

            {/* Dot grid decoration */}
            <div style={{ position:"absolute",top:-20,right:-20,width:100,height:100,opacity:0.15,pointerEvents:"none",
              backgroundImage:"radial-gradient(circle,rgba(96,165,250,0.8) 1px,transparent 1px)",
              backgroundSize:"12px 12px" }}/>
            <div style={{ position:"absolute",bottom:-20,left:-20,width:80,height:80,opacity:0.12,pointerEvents:"none",
              backgroundImage:"radial-gradient(circle,rgba(96,165,250,0.8) 1px,transparent 1px)",
              backgroundSize:"10px 10px" }}/>

            {/* Stat badge */}
            <motion.div
              initial={{ opacity:0,scale:0 }}
              animate={imgInView?{opacity:1,scale:1}:{}}
              transition={{ delay:0.9,type:"spring",stiffness:240,damping:16 }}
              style={{ position:"absolute",bottom:20,left:20,padding:"12px 16px",borderRadius:14,background:"rgba(4,21,48,0.9)",backdropFilter:"blur(14px)",border:"1px solid rgba(59,130,246,0.28)",boxShadow:"0 8px 32px rgba(0,0,0,0.4)",display:"flex",alignItems:"center",gap:12 }}>
              <div style={{ width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <FiStar size={17} color="white" strokeWidth={2}/>
              </div>
              <div>
                <div style={{ fontSize:14,fontWeight:900,background:"linear-gradient(135deg,#fff,#60a5fa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'DM Sans',sans-serif" }}>4.9 / 5.0</div>
                <div style={{ fontSize:10,color:"rgba(148,163,184,0.6)",fontFamily:"'DM Sans',sans-serif",letterSpacing:"0.06em" }}>Guest Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: active feature panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity:0,x:20 }}
              animate={{ opacity:1,x:0 }}
              exit={{ opacity:0,x:-20 }}
              transition={{ duration:0.4,ease:[0.22,1,0.36,1] }}
              style={{
                borderRadius:22,padding:"clamp(22px,3vw,34px)",
                background:`${activeFeature?.accent}0c`,
                border:`1px solid ${activeFeature?.accent}30`,
                backdropFilter:"blur(20px)",
                boxShadow:`0 16px 40px rgba(0,0,0,0.3),0 0 30px ${activeFeature?.accent}0e`,
                position:"relative",overflow:"hidden",
              }}
            >
              {activeFeature && (() => {
                const f = activeFeature;
                return (
                  <>
                    <div style={{ position:"absolute",top:-40,right:-20,width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle,${f.accent}1a,transparent 70%)`,filter:"blur(28px)",pointerEvents:"none" }}/>
                    <div style={{ height:3,background:f.grad,borderRadius:2,marginBottom:22 }}/>
                    <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                      <div style={{ width:48,height:48,borderRadius:14,background:f.grad,display:"flex",alignItems:"center",justifyContent:"center",color:"white",boxShadow:`0 6px 20px ${f.accent}45` }}>
                        {f.icon}
                      </div>
                      <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:`${f.accent}14`,border:`1px solid ${f.accent}30`,borderRadius:8,padding:"4px 12px" }}>
                        <span style={{ width:5,height:5,borderRadius:"50%",background:f.accent,boxShadow:`0 0 6px ${f.accent}`,flexShrink:0 }}/>
                        <span style={{ color:f.accent,fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>Featured</span>
                      </div>
                    </div>
                    <h3 style={{ fontSize:"clamp(14px,1.8vw,19px)",fontWeight:800,lineHeight:1.3,marginBottom:12,background:f.grad,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'DM Sans',sans-serif" }}>
                      {f.label}
                    </h3>
                    <p style={{ color:"rgba(186,230,255,0.55)",fontSize:"clamp(12px,1.3vw,14px)",lineHeight:1.8,margin:0,fontFamily:"'DM Sans',sans-serif" }}>
                      {f.desc}
                    </p>
                    <motion.button
                      whileHover={{ scale:1.04,boxShadow:`0 0 20px ${f.accent}40` }}
                      whileTap={{ scale:0.97 }}
                      style={{ marginTop:22,display:"inline-flex",alignItems:"center",gap:8,padding:"11px 22px",borderRadius:10,background:f.grad,border:"none",color:"white",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:12,cursor:"pointer",letterSpacing:"0.05em" }}
                    >
                      Learn More <FiArrowRight size={13}/>
                    </motion.button>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMBINED EXPORT
───────────────────────────────────────────── */
export default function HospitalityPage() {
  return (
    <>
      <VideoSection />
      <ITSolutionsSection />
    </>
  );
}