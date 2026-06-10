import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCheck, FiArrowDown, FiTarget, FiCode,
  FiCheckSquare, FiHeadphones, FiZap,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

/* ─────────────────────────────────────────── data ── */
const checklistItems = [
  { text: "A shared understanding of project objectives",              done: false },
  { text: "Business requirements transformed into functional specs",   done: false },
  { text: "The initial vision of the architecture of the project",     done: false },
  { text: "A project plan that includes risks and budgets",            done: false },
  { text: "A clear product strategy and development roadmap",          done: true  },
];

const phases = [
  { id:"discovery",  label:"Discovery Phase Workshop",                             row:"top",    accent:"#38bdf8", grad:"linear-gradient(135deg,#1d4ed8,#38bdf8)", icon:<FiTarget      size={15} strokeWidth={2}/>, desc:"Deep-dive workshops to align stakeholders on vision, scope and success metrics." },
  { id:"sprint0",    label:"Sprint 0: Project Initiation",                         row:"bottom", accent:"#60a5fa", grad:"linear-gradient(135deg,#2563eb,#60a5fa)", icon:<FiZap         size={15} strokeWidth={2}/>, desc:"Environment setup, tooling, CI/CD pipelines and team onboarding." },
  { id:"iterative",  label:"Iterative Development: UI/UX Design, Dev & QA",        row:"top",    accent:"#818cf8", grad:"linear-gradient(135deg,#6366f1,#818cf8)", icon:<FiCode        size={15} strokeWidth={2}/>, desc:"Agile sprints with bi-weekly demos, continuous integration and automated testing." },
  { id:"uat",        label:"User Acceptance Testing",                               row:"bottom", accent:"#34d399", grad:"linear-gradient(135deg,#059669,#34d399)", icon:<FiCheckSquare size={15} strokeWidth={2}/>, desc:"Real-user testing, bug resolution and sign-off on all acceptance criteria." },
  { id:"mvp",        label:"MVP / Soft Launch",                                     row:"top",    accent:"#c084fc", grad:"linear-gradient(135deg,#9333ea,#c084fc)", icon:<FaRocket      size={13}/>,               desc:"Controlled rollout to early adopters with real-time monitoring." },
  { id:"launch",     label:"Launch",                                                row:"bottom", accent:"#fb923c", grad:"linear-gradient(135deg,#ea580c,#fb923c)", icon:<FaRocket      size={13}/>,               desc:"Full production deployment with zero-downtime strategy." },
  { id:"support",    label:"Support",                                               row:"top",    accent:"#f472b6", grad:"linear-gradient(135deg,#db2777,#f472b6)", icon:<FiHeadphones  size={15} strokeWidth={2}/>, desc:"Ongoing monitoring, performance tuning, feature updates and 24/7 SLA." },
];

/* ─────────────────────────────────── checklist ── */
function ChecklistPanel() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, x:-36 }}
      animate={inView ? { opacity:1, x:0 } : {}}
      transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
      style={{
        borderRadius:20, padding:"clamp(22px,3vw,34px)",
        background:"rgba(255,255,255,0.03)",
        border:"1px solid rgba(59,130,246,0.14)",
        backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
        boxShadow:"0 8px 32px rgba(0,0,0,0.25)",
        position:"relative", overflow:"hidden",
      }}
    >
      <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)" }}/>
      <div style={{ position:"absolute",top:-30,left:-20,width:160,height:160,borderRadius:"50%",background:"radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%)",filter:"blur(20px)",pointerEvents:"none" }}/>

      <div style={{ display:"flex",alignItems:"center",gap:9,marginBottom:22 }}>
        <div style={{ width:32,height:32,borderRadius:9,background:"linear-gradient(135deg,#1d4ed8,#38bdf8)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
          <FiTarget size={15} color="white" strokeWidth={2}/>
        </div>
        <span style={{ color:"rgba(147,197,253,0.70)",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
          Discovery Deliverables
        </span>
      </div>

      <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
        {checklistItems.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity:0, x:-12 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ delay:0.15+i*0.09, duration:0.4, ease:[0.22,1,0.36,1] }}
            style={{ display:"flex",alignItems:"flex-start",gap:10 }}
          >
            <div style={{
              width:22,height:22,borderRadius:"50%",flexShrink:0,marginTop:1,
              background: item.done ? "linear-gradient(135deg,#059669,#34d399)" : "rgba(59,130,246,0.12)",
              border: item.done ? "none" : "1px solid rgba(59,130,246,0.25)",
              display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow: item.done ? "0 2px 10px rgba(52,211,153,0.35)" : "none",
            }}>
              {item.done ? <FiCheck size={11} color="white" strokeWidth={2.5}/> : <FiArrowDown size={11} color="#60a5fa" strokeWidth={2}/>}
            </div>
            <span style={{
              color: item.done ? "rgba(186,230,255,0.85)" : "rgba(186,230,255,0.55)",
              fontSize:"clamp(12px,1.3vw,14px)",lineHeight:1.65,
              fontFamily:"'DM Sans',sans-serif",fontWeight: item.done ? 600 : 400,
            }}>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── timeline (fixed grid) ── */
function PhaseLabel({ phase, hovered, isTop }) {
  return (
    <motion.div
      whileHover={{ scale:1.04 }}
      style={{
        borderRadius:11, padding:"9px 12px",
        background: hovered ? phase.grad : `${phase.accent}14`,
        border:`1px solid ${phase.accent}${hovered?"00":"2e"}`,
        boxShadow: hovered ? `0 8px 20px ${phase.accent}45` : "none",
        transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
        textAlign:"center", width:"100%",
      }}
    >
      <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:4,
        color: hovered ? "white" : phase.accent }}>
        {phase.icon}
      </div>
      <span style={{
        color: hovered ? "white" : "rgba(186,230,255,0.80)",
        fontSize:"clamp(9px,1.1vw,11px)", fontWeight:700, lineHeight:1.35,
        fontFamily:"'DM Sans',sans-serif", display:"block",
      }}>
        {phase.label}
      </span>
    </motion.div>
  );
}

function PhaseNode({ phase, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-40px" });
  const [hovered, setHovered] = useState(false);
  const isTop = phase.row === "top";

  return (
    /* Each phase occupies one column in a 3-row grid:
       row 1 = top labels, row 2 = dot, row 3 = bottom labels */
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:"grid",
        gridTemplateRows:"1fr auto 1fr",
        alignItems:"center",
        justifyItems:"center",
        rowGap:12,
        position:"relative",
        padding:"0 4px",
      }}
    >
      {/* ROW 1: top label (or empty spacer) */}
      <motion.div
        initial={{ opacity:0, y:-20 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:0.55, delay:0.1+index*0.09, ease:[0.22,1,0.36,1] }}
        style={{ width:"100%", display:"flex", alignItems:"flex-end", justifyContent:"center" }}
      >
        {isTop
          ? <PhaseLabel phase={phase} hovered={hovered} isTop={true}/>
          : <div style={{ height:90 }}/> /* fixed-height spacer */
        }
      </motion.div>

      {/* ROW 2: dot */}
      <motion.div
        initial={{ opacity:0, scale:0 }}
        animate={inView ? { opacity:1, scale:1 } : {}}
        transition={{ duration:0.45, delay:0.2+index*0.09, type:"spring", stiffness:260, damping:18 }}
        animate-scale={hovered ? 1.35 : 1}
        style={{ position:"relative", zIndex:2, flexShrink:0 }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.35 : 1 }}
          transition={{ duration:0.25 }}
          style={{
            width:16, height:16, borderRadius:"50%",
            background:phase.grad,
            boxShadow:`0 0 ${hovered?22:10}px ${phase.accent}`,
          }}
        />
        {/* pulse ring */}
        <motion.div
          animate={{ scale:[1,2.2,1], opacity:[0.5,0,0.5] }}
          transition={{ duration:2.8, repeat:Infinity, ease:"easeInOut", delay:index*0.28 }}
          style={{ position:"absolute",inset:-2,borderRadius:"50%",border:`1.5px solid ${phase.accent}`,pointerEvents:"none" }}
        />
      </motion.div>

      {/* ROW 3: bottom label (or empty spacer) */}
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:0.55, delay:0.1+index*0.09, ease:[0.22,1,0.36,1] }}
        style={{ width:"100%", display:"flex", alignItems:"flex-start", justifyContent:"center" }}
      >
        {!isTop
          ? <PhaseLabel phase={phase} hovered={hovered} isTop={false}/>
          : <div style={{ height:90 }}/> /* matching spacer */
        }
      </motion.div>

      {/* tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity:0, y:6, scale:0.92 }}
          animate={{ opacity:1, y:0, scale:1 }}
          exit={{ opacity:0 }}
          transition={{ duration:0.22 }}
          style={{
            position:"absolute",
            top: isTop ? "calc(100% + 6px)" : "auto",
            bottom: !isTop ? "calc(100% + 6px)" : "auto",
            left:"50%", transform:"translateX(-50%)",
            background:"rgba(5,15,45,0.97)",
            backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
            border:`1px solid ${phase.accent}35`,
            borderRadius:10, padding:"8px 12px",
            zIndex:40,
            boxShadow:`0 8px 24px rgba(0,0,0,0.45),0 0 16px ${phase.accent}18`,
            width:170, textAlign:"center",
            pointerEvents:"none",
          }}
        >
          <p style={{ color:"rgba(186,230,255,0.75)",fontSize:11,fontFamily:"'DM Sans',sans-serif",margin:0,lineHeight:1.55 }}>
            {phase.desc}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function TimelineDiagram() {
  const lineRef   = useRef(null);
  const lineInView = useInView(lineRef, { once:true, margin:"-40px" });

  return (
    <div style={{ position:"relative", padding:"0 8px" }}>

      {/* animated gradient line through the middle row (row 2) */}
      <div
        ref={lineRef}
        style={{
          /* place it at the vertical center of the dot row.
             dot-row height = 40px (16px dot + ~24px padding around).
             top labels + gap = 90 + 12 = 102px from top of grid container */
          position:"absolute",
          top:"calc(90px + 12px + 8px)",   /* row1 height + gap + half-dot offset */
          left:0, right:0, height:4,
          zIndex:1, pointerEvents:"none",
        }}
      >
        <motion.div
          initial={{ scaleX:0 }}
          animate={lineInView ? { scaleX:1 } : {}}
          transition={{ duration:1.4, delay:0.15, ease:[0.22,1,0.36,1] }}
          style={{
            height:"100%", borderRadius:2, transformOrigin:"left",
            background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc,#f472b6)",
            boxShadow:"0 0 10px rgba(96,165,250,0.45)",
          }}
        />
      </div>

      {/* phase columns */}
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${phases.length},1fr)`, position:"relative", zIndex:2 }}>
        {phases.map((p, i) => <PhaseNode key={p.id} phase={p} index={i}/>)}
      </div>

      {/* floating rocket at the far right top */}
      <motion.div
        initial={{ opacity:0, scale:0 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ delay:1.3, type:"spring", stiffness:200, damping:15 }}
        style={{ position:"absolute", right:0, top:-44, zIndex:5 }}
      >
        <motion.div
          animate={{ y:[0,-7,0] }}
          transition={{ duration:2.4, repeat:Infinity, ease:"easeInOut" }}
          style={{
            width:44, height:44, borderRadius:"50%",
            background:"linear-gradient(135deg,#f472b6,#c084fc)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 0 22px rgba(244,114,182,0.55)",
          }}
        >
          <FaRocket size={18} color="white"/>
        </motion.div>
      </motion.div>

      {/* legend */}
      <div style={{ display:"flex",justifyContent:"center",gap:"clamp(14px,2vw,24px)",flexWrap:"wrap",marginTop:24 }}>
        {[
          { color:"#38bdf8", label:"Planning"    },
          { color:"#818cf8", label:"Development" },
          { color:"#34d399", label:"Testing"     },
          { color:"#fb923c", label:"Delivery"    },
        ].map(l => (
          <div key={l.label} style={{ display:"flex",alignItems:"center",gap:6 }}>
            <div style={{ width:7,height:7,borderRadius:"50%",background:l.color,boxShadow:`0 0 5px ${l.color}` }}/>
            <span style={{ color:"rgba(147,197,253,0.40)",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
              {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────── page section ── */
export default function FintechDevProcess() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once:true, margin:"-60px" });

  return (
    <section style={{
      position:"relative",
      padding:"clamp(64px,10vw,110px) 0 clamp(80px,12vw,130px)",
      background:"linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow:"hidden",
      fontFamily:"'DM Sans',sans-serif",
      borderTop:"1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* grid texture */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="fdpg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#fdpg)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* header */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.10)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.25)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 8px #38bdf8",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Development Lifecycle</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:18 }}>
            FinTech Software{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Development Process
            </span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.85,maxWidth:680,margin:"0 auto" }}>
            Our skilled experts provide full-cycle custom financial software development to fit your business domain and budget requirements while leveraging leading-edge technologies.
          </p>
        </motion.div>

        {/* two-column layout */}
        <div style={{ display:"grid",gridTemplateColumns:"clamp(240px,26%,320px) 1fr",gap:"clamp(20px,4vw,48px)",alignItems:"center" }}>
          <ChecklistPanel/>
          <TimelineDiagram/>
        </div>

      </div>
    </section>
  );
}