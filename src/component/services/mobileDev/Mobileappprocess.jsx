import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiFilter, FiLayout, FiGitBranch, FiCode,
  FiCheckSquare, FiUploadCloud, FiSettings, FiChevronDown, FiChevronUp,
} from "react-icons/fi";

const steps = [
  {
    id: "planning",
    label: "Planning",
    icon: <FiFilter size={22} />,
    sdlcLabel: "PLANNING",
    angle: 210,
    desc: "We collaborate closely with you to gather all the necessary information to create a custom mobile app that perfectly aligns with your expectations.",
    highlights: ["Requirement Analysis", "Custom Roadmap", "Budget Planning", "Team Assembly"],
  },
  {
    id: "designing",
    label: "Designing",
    icon: <FiLayout size={22} />,
    sdlcLabel: "DESIGNING",
    angle: 150,
    desc: "Our team crafts detailed designs and documentation based on your requirements, ensuring the app's architecture and technology stack are tailored to your needs.",
    highlights: ["UI/UX Wireframes", "Prototyping", "Design System", "Architecture Docs"],
  },
  {
    id: "defining",
    label: "Defining",
    icon: <FiGitBranch size={22} />,
    sdlcLabel: "DEFINING",
    angle: 90,
    desc: "We establish clear technical specifications, define the project scope, and create a detailed blueprint ensuring every stakeholder is aligned before development begins.",
    highlights: ["Tech Specifications", "Scope Definition", "Milestone Planning", "Stakeholder Sign-off"],
  },
  {
    id: "building",
    label: "Building",
    icon: <FiCode size={22} />,
    sdlcLabel: "BUILDING",
    angle: 30,
    desc: "Our engineers build your application using agile sprints with bi-weekly reviews. We use modern frameworks and best coding practices to deliver a robust, scalable product.",
    highlights: ["Agile Sprints", "Code Reviews", "CI/CD Pipeline", "API Integration"],
  },
  {
    id: "testing",
    label: "Testing",
    icon: <FiCheckSquare size={22} />,
    sdlcLabel: "TESTING",
    angle: 330,
    desc: "Rigorous quality assurance across all devices and platforms. We run automated and manual tests covering performance, security, and user experience before every release.",
    highlights: ["Automated Tests", "Security Audits", "Performance Testing", "UAT Sessions"],
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: <FiUploadCloud size={22} />,
    sdlcLabel: "DEPLOYMENT",
    angle: 270,
    desc: "We manage a seamless rollout to app stores and production servers, handling all configuration, monitoring, and post-launch verification to ensure zero downtime.",
    highlights: ["App Store Release", "Zero-Downtime Deploy", "Live Monitoring", "Launch Verification"],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: <FiSettings size={22} />,
    sdlcLabel: "MAINTENANCE",
    angle: 225,
    desc: "Our dedicated support team keeps your app healthy, secure, and up to date. We provide continuous updates, performance optimisation, and fast bug resolution.",
    highlights: ["24/7 Monitoring", "Bug Resolution", "Feature Updates", "Performance Tuning"],
  },
];

/* SDLC diagram node positions (% of container) */
const NODE_POSITIONS = [
  { id:"planning",    top:"47%", left:"12%"  },
  { id:"designing",   top:"10%", left:"38%"  },
  { id:"defining",    top:"10%", left:"62%"  },
  { id:"building",    top:"32%", left:"82%"  },
  { id:"testing",     top:"58%", left:"72%"  },
  { id:"deployment",  top:"73%", left:"48%"  },
  { id:"maintenance", top:"58%", left:"12%"  },
];

function SDLCDiagram({ active, onSelect }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, scale:0.94 }}
      animate={inView ? { opacity:1, scale:1 } : {}}
      transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
      style={{
        position:"relative", width:"100%",
        aspectRatio:"1/1", maxWidth:480,
        margin:"0 auto",
      }}
    >
      {/* Curved SDLC path (SVG) */}
      <svg
        viewBox="0 0 480 480"
        style={{ position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sdlcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4"/>
          </linearGradient>
          <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#38bdf8" opacity="0.7"/>
          </marker>
        </defs>
        {/* Elliptical cycle path */}
        <ellipse cx="240" cy="255" rx="185" ry="180"
          fill="none" stroke="url(#sdlcGrad)" strokeWidth="1.8"
          strokeDasharray="8 6" opacity="0.5"
          markerEnd="url(#arrowBlue)"
        />
        {/* SDLC label */}
        <text x="240" y="268" textAnchor="middle"
          fill="rgba(147,197,253,0.35)" fontSize="28" fontWeight="900"
          fontFamily="'DM Sans',sans-serif" letterSpacing="6">
          SDLC
        </text>
      </svg>

      {/* Nodes */}
      {NODE_POSITIONS.map((pos) => {
        const step    = steps.find(s => s.id === pos.id);
        const isActive = active === pos.id;
        return (
          <motion.button
            key={pos.id}
            onClick={() => onSelect(pos.id)}
            whileHover={{ scale:1.12 }}
            whileTap={{ scale:0.95 }}
            style={{
              position:"absolute",
              top: pos.top, left: pos.left,
              transform:"translate(-50%,-50%)",
              width: isActive ? 72 : 58,
              height: isActive ? 72 : 58,
              borderRadius:"50%",
              background: isActive
                ? "linear-gradient(135deg,#1d4ed8,#3b82f6)"
                : "rgba(30,58,138,0.45)",
              border: isActive
                ? "2.5px solid #60a5fa"
                : "1.5px solid rgba(59,130,246,0.30)",
              display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
              gap:2, cursor:"pointer",
              backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
              boxShadow: isActive
                ? "0 0 32px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.25)"
                : "0 4px 16px rgba(0,0,0,0.3)",
              transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
              outline:"none",
            }}
          >
            {/* pulse ring */}
            {isActive && (
              <motion.div
                animate={{ scale:[1,1.65,1], opacity:[0.5,0,0.5] }}
                transition={{ duration:2, repeat:Infinity }}
                style={{
                  position:"absolute", inset:-5, borderRadius:"50%",
                  border:"1.5px solid rgba(96,165,250,0.5)",
                  pointerEvents:"none",
                }}
              />
            )}
            <span style={{ color: isActive ? "white" : "rgba(147,197,253,0.7)", lineHeight:1 }}>
              {step.icon}
            </span>
          </motion.button>
        );
      })}

      {/* Node labels outside circles */}
      {NODE_POSITIONS.map((pos) => {
        const step    = steps.find(s => s.id === pos.id);
        const isActive = active === pos.id;
        /* offset label away from center */
        const topNum  = parseFloat(pos.top);
        const leftNum = parseFloat(pos.left);
        const cx = 50, cy = 50;
        const dx = leftNum - cx, dy = topNum - cy;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const ox = dx/dist * 10, oy = dy/dist * 10;
        return (
          <div
            key={pos.id + "-label"}
            style={{
              position:"absolute",
              top:`calc(${pos.top} + ${oy + (topNum > 50 ? 5 : -5)}%)`,
              left:`calc(${pos.left} + ${ox}%)`,
              transform:"translate(-50%,-50%)",
              pointerEvents:"none",
              textAlign:"center",
              whiteSpace:"nowrap",
            }}
          >
            <span style={{
              fontSize:"clamp(8px,1vw,11px)", fontWeight:700,
              letterSpacing:"0.15em", textTransform:"uppercase",
              color: isActive ? "#60a5fa" : "rgba(147,197,253,0.45)",
              fontFamily:"'DM Sans',sans-serif",
              transition:"color 0.35s",
              textShadow: isActive ? "0 0 12px rgba(96,165,250,0.6)" : "none",
            }}>
              {step.sdlcLabel}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

function AccordionItem({ step, isOpen, onToggle, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, x:-24 }}
      animate={inView ? { opacity:1, x:0 } : {}}
      transition={{ duration:0.55, delay:index*0.07, ease:[0.22,1,0.36,1] }}
      style={{
        borderBottom:"1px solid rgba(59,130,246,0.12)",
        overflow:"hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width:"100%",display:"flex",alignItems:"center",
          gap:16, padding:"clamp(14px,2vw,20px) 0",
          background:"transparent",border:"none",cursor:"pointer",
          textAlign:"left",
        }}
      >
        {/* icon box */}
        <div style={{
          width:44, height:44, borderRadius:12, flexShrink:0,
          background: isOpen
            ? "linear-gradient(135deg,#1d4ed8,#3b82f6)"
            : "rgba(30,58,138,0.35)",
          border: isOpen ? "none" : "1px solid rgba(59,130,246,0.22)",
          display:"flex",alignItems:"center",justifyContent:"center",
          color: isOpen ? "white" : "rgba(147,197,253,0.60)",
          boxShadow: isOpen ? "0 4px 18px rgba(59,130,246,0.40)" : "none",
          transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}>
          {step.icon}
        </div>

        <span style={{
          flex:1,
          fontFamily:"'DM Sans',sans-serif",
          fontSize:"clamp(14px,1.8vw,17px)", fontWeight:700,
          color: isOpen ? "#60a5fa" : "rgba(255,255,255,0.75)",
          transition:"color 0.3s",
          letterSpacing:"-0.2px",
        }}>
          {step.label}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration:0.3 }}
          style={{ color: isOpen ? "#60a5fa" : "rgba(147,197,253,0.40)", flexShrink:0 }}
        >
          <FiChevronDown size={18}/>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height:0, opacity:0 }}
            animate={{ height:"auto", opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.4, ease:[0.22,1,0.36,1] }}
            style={{ overflow:"hidden" }}
          >
            <div style={{
              paddingBottom:"clamp(16px,2.5vw,24px)",
              paddingLeft:60,
            }}>
              {/* Left accent bar */}
              <div style={{
                borderLeft:"2px solid rgba(59,130,246,0.35)",
                paddingLeft:16,
              }}>
                <p style={{
                  color:"rgba(186,230,255,0.60)",
                  fontSize:"clamp(13px,1.5vw,15px)",
                  lineHeight:1.85, margin:"0 0 16px",
                  fontFamily:"'DM Sans',sans-serif",
                }}>
                  {step.desc}
                </p>

                <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                  {step.highlights.map((h,i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity:0,y:8 }}
                      animate={{ opacity:1,y:0 }}
                      transition={{ delay:i*0.06,duration:0.35 }}
                      style={{
                        display:"inline-flex",alignItems:"center",gap:6,
                        padding:"5px 12px",borderRadius:100,
                        background:"rgba(59,130,246,0.10)",
                        border:"1px solid rgba(59,130,246,0.25)",
                        color:"#93c5fd",
                        fontSize:"clamp(10px,1.2vw,12px)",fontWeight:600,
                        fontFamily:"'DM Sans',sans-serif",
                      }}
                    >
                      <span style={{ width:4,height:4,borderRadius:"50%",background:"#60a5fa",boxShadow:"0 0 5px #60a5fa",flexShrink:0 }}/>
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MobileAppProcess() {
  const [openId, setOpenId] = useState("planning");
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

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
          <pattern id="mapgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.14,0.24,0.14] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",
          background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",
          background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* header */}
        <motion.div
          ref={headRef}
          initial={{ opacity:0,y:30 }}
          animate={headInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}
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
              Development Lifecycle
            </span>
          </div>

          <h2 style={{
            color:"white",fontSize:"clamp(22px,4vw,50px)",
            fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20,
          }}>
            Key Steps in Our{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Mobile App Development
            </span>
            {" "}Process
          </h2>

          <p style={{
            color:"rgba(186,230,255,0.50)",
            fontSize:"clamp(14px,1.7vw,17px)",
            lineHeight:1.85,maxWidth:700,margin:"0 auto",
          }}>
            Tailored to your needs and budget, we use top practices to build mobile app solutions
            quickly and efficiently. Enjoy a smooth development process with clear communication
            with our professional team.
          </p>
        </motion.div>

        {/* two-column layout */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"clamp(280px,45%,540px) 1fr",
          gap:"clamp(32px,6vw,80px)",
          alignItems:"center",
        }}>

          {/* LEFT: accordion */}
          <div>
            {steps.map((step,i) => (
              <AccordionItem
                key={step.id}
                step={step}
                index={i}
                isOpen={openId === step.id}
                onToggle={() => toggle(step.id)}
              />
            ))}
          </div>

          {/* RIGHT: SDLC diagram */}
          <SDLCDiagram
            active={openId}
            onSelect={(id) => setOpenId(prev => prev === id ? prev : id)}
          />

        </div>

      </div>
    </section>
  );
}