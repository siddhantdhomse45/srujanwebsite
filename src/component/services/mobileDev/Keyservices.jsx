import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiMonitor, FiLayout, FiSearch, FiCloud,
  FiCpu, FiTool,
} from "react-icons/fi";

const services = [
  {
    id: "fullcycle",
    label: "Full Cycle Development for Most Popular Platforms",
    shortLabel: "Full Cycle Development",
    desc: "Premium software development that satisfies user demands, all while adhering to your timeline and budget constraints.",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    icon: <FiMonitor size={36} strokeWidth={1.2} />,
    highlights: ["iOS & Android", "Cross-Platform", "Timeline-Driven", "Budget-Conscious"],
  },
  {
    id: "uiux",
    label: "UI/UX Design Following Material Guidelines",
    shortLabel: "UI/UX Design",
    desc: "Intuitive and visually stunning interfaces, where every detail is crafted to perfection following Material Design best practices.",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    icon: <FiLayout size={36} strokeWidth={1.2} />,
    highlights: ["Material Design", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: "qa",
    label: "Automated QA on Most Popular Mobile Devices",
    shortLabel: "Automated QA",
    desc: "Comprehensive automated testing suites that cover thousands of real device configurations, ensuring flawless app performance everywhere.",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    icon: <FiSearch size={36} strokeWidth={1.2} />,
    highlights: ["Device Coverage", "CI/CD Testing", "Performance Tests", "Regression Suites"],
  },
  {
    id: "power",
    label: "Power Management, Notification & Location",
    shortLabel: "Power & Notifications",
    desc: "Intelligent power-aware background services, precise geolocation, and smart push notification systems that keep users engaged without draining batteries.",
    accent: "#fb923c",
    grad: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: <FiCloud size={36} strokeWidth={1.2} />,
    highlights: ["Battery Optimisation", "Push Notifications", "Geofencing", "Background Services"],
  },
  {
    id: "aosp",
    label: "Embedded Android & AOSP Customizations",
    shortLabel: "Embedded Android",
    desc: "Deep system-level Android customisations for embedded and IoT devices, tailored firmware builds, and proprietary hardware integrations.",
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    icon: <FiCpu size={36} strokeWidth={1.2} />,
    highlights: ["AOSP Builds", "Hardware Integration", "IoT Devices", "Firmware Custom"],
  },
  {
    id: "support",
    label: "Maintenance and Post-Warranty Support",
    shortLabel: "Maintenance & Support",
    desc: "Long-term partnership beyond launch — proactive monitoring, rapid bug resolution, OS compatibility updates, and continuous feature enhancements.",
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    icon: <FiTool size={36} strokeWidth={1.2} />,
    highlights: ["24/7 Monitoring", "Bug Resolution", "OS Updates", "Feature Enhancements"],
  },
];

/* ── Individual icon tab ─────────────────────────────── */
function ServiceTab({ service, isActive, onClick, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:28 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay:index*0.08, ease:[0.22,1,0.36,1] }}
      onClick={onClick}
      style={{
        flex:1, display:"flex", flexDirection:"column",
        alignItems:"center", gap:16,
        padding:"clamp(16px,2.5vw,28px) clamp(8px,1.5vw,16px)",
        cursor:"pointer", position:"relative",
        borderBottom: isActive
          ? `2px solid ${service.accent}`
          : "2px solid rgba(255,255,255,0.06)",
        transition:"border-color 0.35s",
      }}
    >
      {/* active bg glow */}
      {isActive && (
        <motion.div
          layoutId="tabGlow"
          style={{
            position:"absolute", inset:0,
            background:`radial-gradient(ellipse 90% 60% at 50% 0%,${service.accent}12,transparent)`,
            pointerEvents:"none",
          }}
          transition={{ duration:0.4 }}
        />
      )}

      {/* icon wrapper */}
      <div style={{
        color: isActive ? service.accent : "rgba(147,197,253,0.30)",
        transition:"color 0.35s, filter 0.35s",
        filter: isActive ? `drop-shadow(0 0 10px ${service.accent}70)` : "none",
        position:"relative", zIndex:1,
      }}>
        {service.icon}
      </div>

      {/* label */}
      <span style={{
        fontFamily:"'DM Sans',sans-serif",
        fontSize:"clamp(10px,1.2vw,12.5px)", fontWeight: isActive ? 700 : 500,
        color: isActive ? "white" : "rgba(186,230,255,0.40)",
        textAlign:"center", lineHeight:1.4,
        transition:"color 0.35s",
        position:"relative", zIndex:1,
      }}>
        {service.shortLabel}
      </span>
    </motion.div>
  );
}

/* ── Content panel ───────────────────────────────────── */
function ContentPanel({ service }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity:0, y:16 }}
      animate={{ opacity:1, y:0 }}
      exit={{ opacity:0, y:-10 }}
      transition={{ duration:0.45, ease:[0.22,1,0.36,1] }}
      style={{
        display:"flex", alignItems:"flex-start",
        gap:"clamp(24px,4vw,60px)",
        padding:"clamp(28px,3.5vw,44px) clamp(20px,3vw,40px)",
        background:`linear-gradient(145deg,${service.accent}0a,rgba(255,255,255,0.03))`,
        border:`1px solid ${service.accent}22`,
        borderTop:"none",
        borderRadius:"0 0 20px 20px",
        backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
        position:"relative", overflow:"hidden",
        flexWrap:"wrap",
      }}
    >
      {/* left accent strip */}
      <div style={{
        position:"absolute", top:0, left:0, bottom:0, width:3,
        background:service.grad, borderRadius:"0 0 0 20px",
      }}/>

      {/* left: title block */}
      <div style={{ minWidth:"clamp(200px,30%,320px)", paddingLeft:16 }}>
        {/* chip */}
        <div style={{
          display:"inline-flex", alignItems:"center", gap:7,
          background:`${service.accent}14`,
          border:`1px solid ${service.accent}35`,
          borderRadius:8, padding:"4px 12px", marginBottom:14,
        }}>
          <span style={{ width:5,height:5,borderRadius:"50%",background:service.accent,boxShadow:`0 0 6px ${service.accent}`,flexShrink:0 }}/>
          <span style={{ color:service.accent,fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
            Key Service
          </span>
        </div>

        <h3 style={{
          margin:0,
          fontSize:"clamp(15px,2vw,20px)", fontWeight:800,
          background:service.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          letterSpacing:"-0.4px", lineHeight:1.25,
          textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif",
        }}>
          {service.label}
        </h3>
      </div>

      {/* right: description + chips */}
      <div style={{ flex:1, minWidth:"clamp(200px,40%,500px)", display:"flex", flexDirection:"column", gap:18 }}>
        <p style={{
          margin:0,
          color:"rgba(186,230,255,0.60)",
          fontSize:"clamp(13px,1.5vw,16px)",
          lineHeight:1.85, fontFamily:"'DM Sans',sans-serif",
        }}>
          {service.desc}
        </p>

        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
          {service.highlights.map((h,i) => (
            <motion.span
              key={h}
              initial={{ opacity:0, x:-8 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:i*0.07+0.1, duration:0.35 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:6,
                padding:"6px 14px", borderRadius:100,
                background:`${service.accent}10`,
                border:`1px solid ${service.accent}30`,
                color:"rgba(186,230,255,0.70)",
                fontSize:"clamp(10px,1.2vw,12px)", fontWeight:600,
                fontFamily:"'DM Sans',sans-serif",
              }}
            >
              <span style={{ width:4,height:4,borderRadius:"50%",background:service.accent,boxShadow:`0 0 5px ${service.accent}`,flexShrink:0 }}/>
              {h}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────── */
export default function KeyServices() {
  const [active, setActive] = useState(0);
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position:"relative",
      padding:"clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background:"linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow:"hidden",
      fontFamily:"'DM Sans',sans-serif",
      borderTop:"1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ksgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ksgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",
          background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",
          background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* ── header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity:0,y:30 }}
          animate={headInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(36px,6vw,60px)" }}
        >
          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(59,130,246,0.10)",backdropFilter:"blur(20px)",
            border:"1px solid rgba(59,130,246,0.25)",
            borderRadius:100,padding:"6px 18px",marginBottom:20,
          }}>
            <motion.span
              animate={{ opacity:[1,0.3,1] }}
              transition={{ duration:1.8,repeat:Infinity }}
              style={{ width:6,height:6,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 8px #38bdf8",display:"inline-block" }}
            />
            <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>
              What We Offer
            </span>
          </div>

          <h2 style={{
            color:"white",fontSize:"clamp(24px,4.5vw,52px)",
            fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:16,
          }}>
            Our Key{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Services
            </span>
          </h2>

          <p style={{
            color:"rgba(186,230,255,0.50)",
            fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.8,maxWidth:620,margin:"0 auto",
          }}>
            End-to-end mobile and embedded solutions delivered by expert engineers — from design
            to deployment and beyond.
          </p>
        </motion.div>

        {/* ── tab row ── */}
        <div style={{
          display:"flex",
          background:"rgba(255,255,255,0.03)",
          border:"1px solid rgba(59,130,246,0.12)",
          borderBottom:"none",
          borderRadius:"20px 20px 0 0",
          overflow:"hidden",
        }}>
          {services.map((svc, i) => (
            <ServiceTab
              key={svc.id}
              service={svc}
              index={i}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* ── content panel ── */}
        <AnimatePresence mode="wait">
          <ContentPanel key={services[active].id} service={services[active]} />
        </AnimatePresence>

      </div>
    </section>
  );
}