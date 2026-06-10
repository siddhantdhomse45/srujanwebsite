import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Kick-Off Stage",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)",
    desc: "Our experts create a full brief of your requirements and ideas. We translate these into technical documents and early-stage prototypes. We gather a team and build an initial design to lay the foundation for the entire project.",
    highlights: ["Requirements Brief", "Technical Docs", "Early Prototypes", "Team Assembly"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    number: "02",
    label: "Development Stage",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    desc: "We create your solution with regular updates and feedback. We use the Scrum methodology so that you will review results every two weeks. Our experts perform User Acceptance Testing (UAT) and deploy your application.",
    highlights: ["Agile / Scrum", "2-Week Sprints", "UAT Testing", "Deployment"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: "03",
    label: "Support Stage",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    desc: "After release, we perform continuous server monitoring, fix bugs, and provide general customer support. If any significant issues arise at this stage, we will implement contingency plans and fix things immediately.",
    highlights: ["Server Monitoring", "Bug Fixes", "Customer Support", "Contingency Plans"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
  },
  {
    number: "04",
    label: "Next Steps",
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    desc: "To meet fast-changing customer demand, web apps require regular feature updates. We can provide a small, low-cost team to deliver these updates. Ongoing cooperation is discussed after deployment.",
    highlights: ["Feature Updates", "Low-Cost Team", "Ongoing Cooperation", "Post-Deployment"],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
];

function StepPanel({ step, index, isActive, onClick }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: "clamp(140px,20vw,220px)",
        display: "flex", flexDirection: "column", alignItems: "center",
        cursor: "pointer", position: "relative",
      }}
    >
      {/* connector line (not after last) */}
      {index < steps.length - 1 && (
        <div style={{
          position: "absolute",
          top: 28, left: "calc(50% + 28px)",
          right: "calc(-50% + 28px)",
          height: 2, zIndex: 0,
          background: isActive
            ? `linear-gradient(90deg,${step.accent}80,rgba(255,255,255,0.08))`
            : "rgba(255,255,255,0.07)",
          transition: "background 0.5s",
          overflow: "hidden",
        }}>
          {/* animated dash */}
          <motion.div
            animate={isActive ? { x: ["0%", "100%"] } : { x: "0%" }}
            transition={{ duration: 1.8, repeat: isActive ? Infinity : 0, ease: "linear" }}
            style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(90deg,transparent,${step.accent},transparent)`,
              opacity: isActive ? 1 : 0,
            }}
          />
        </div>
      )}

      {/* number circle */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        style={{
          width: 56, height: 56, borderRadius: "50%",
          background: isActive ? step.grad : "rgba(255,255,255,0.04)",
          border: isActive
            ? `2px solid ${step.accent}`
            : "2px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 1,
          boxShadow: isActive ? `0 0 28px ${step.accent}50, 0 0 60px ${step.accent}20` : "none",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* pulse ring */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: -4, borderRadius: "50%",
              border: `1px solid ${step.accent}`,
              pointerEvents: "none",
            }}
          />
        )}
        <span style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 18, fontWeight: 800,
          color: isActive ? "white" : "rgba(255,255,255,0.3)",
          transition: "color 0.4s",
        }}>
          {step.number}
        </span>
      </motion.div>

      {/* label */}
      <span style={{
        marginTop: 14,
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "clamp(10px,1.3vw,13px)", fontWeight: 700,
        letterSpacing: "0.12em", textTransform: "uppercase",
        textAlign: "center",
        background: isActive ? step.grad : "none",
        WebkitBackgroundClip: isActive ? "text" : "unset",
        WebkitTextFillColor: isActive ? "transparent" : "rgba(255,255,255,0.35)",
        transition: "all 0.4s",
      }}>
        {step.label}
      </span>
    </motion.div>
  );
}

export default function DevProcess() {
  const [active, setActive] = useState(0);
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const cur = steps[active];

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dpgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dpgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:460,height:460,borderRadius:"50%",background:"radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.2,0.12] }} transition={{ duration:13,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* ── header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity:0,y:30 }}
          animate={headInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(48px,8vw,80px)" }}
        >
          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:100,padding:"6px 18px",marginBottom:20,
          }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"rgba(255,255,255,0.65)",fontSize:12,fontWeight:600,letterSpacing:2.5,textTransform:"uppercase" }}>
              How We Work
            </span>
          </div>

          <h2 style={{
            color:"white",fontSize:"clamp(24px,4.5vw,52px)",
            fontWeight:800,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:22,
          }}>
            Our Web Development{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Process
            </span>
          </h2>

          <p style={{
            color:"rgba(255,255,255,0.45)",
            fontSize:"clamp(14px,1.8vw,17px)",
            lineHeight:1.85,maxWidth:760,margin:"0 auto",
          }}>
            Because we have been delivering web development services for over a decade, our process
            is clear, effective and adheres to strict deadlines. We take care of every stage — from a
            comprehensive understanding of your requirements to continuous operation after deployment.
          </p>
        </motion.div>

        {/* ── step selector ── */}
        <div style={{
          display:"flex",alignItems:"flex-start",gap:0,
          marginBottom: "clamp(32px,5vw,52px)",
          position:"relative",
        }}>
          {steps.map((step, i) => (
            <StepPanel
              key={step.number}
              step={step} index={i}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* ── content panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-12 }}
            transition={{ duration:0.45, ease:[0.22,1,0.36,1] }}
            style={{
              borderRadius:24,
              background:`linear-gradient(145deg,${cur.accent}0c,rgba(255,255,255,0.03))`,
              border:`1px solid ${cur.accent}28`,
              backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",
              overflow:"hidden",
              position:"relative",
            }}
          >
            {/* top gradient bar */}
            <div style={{ height:3,background:cur.grad,width:"100%" }}/>

            <div style={{
              display:"flex",gap:"clamp(24px,4vw,56px)",
              padding:"clamp(28px,4vw,48px)",
              flexWrap:"wrap",alignItems:"flex-start",
            }}>

              {/* left: big number + icon + label */}
              <div style={{ flexShrink:0,display:"flex",flexDirection:"column",gap:16,minWidth:180 }}>
                {/* giant ghost number */}
                <div style={{
                  fontSize:"clamp(80px,12vw,140px)",fontWeight:900,lineHeight:1,
                  background:`linear-gradient(135deg,${cur.accent}30,transparent)`,
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                  letterSpacing:"-6px",userSelect:"none",
                  fontFamily:"'DM Sans',sans-serif",
                  marginBottom:-16,
                }}>
                  {cur.number}
                </div>

                {/* icon pill */}
                <div style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:cur.grad,
                  borderRadius:14,padding:"12px 18px",
                  width:"fit-content",
                  boxShadow:`0 8px 24px ${cur.accent}40`,
                  color:"white",
                }}>
                  {cur.icon}
                  <span style={{
                    fontSize:14,fontWeight:700,color:"white",
                    fontFamily:"'DM Sans',sans-serif",letterSpacing:"-0.2px",
                  }}>
                    {cur.label}
                  </span>
                </div>
              </div>

              {/* right: description + tags */}
              <div style={{ flex:1,minWidth:"clamp(200px,40%,500px)",display:"flex",flexDirection:"column",gap:24 }}>

                <p style={{
                  margin:0,
                  color:"rgba(255,255,255,0.6)",
                  fontSize:"clamp(14px,1.6vw,17px)",
                  lineHeight:1.9,
                }}>
                  {cur.desc}
                </p>

                {/* highlight chips */}
                <div style={{ display:"flex",flexWrap:"wrap",gap:10 }}>
                  {cur.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity:0,x:-10 }}
                      animate={{ opacity:1,x:0 }}
                      transition={{ delay:i*0.07+0.15,duration:0.4,ease:[0.22,1,0.36,1] }}
                      style={{
                        display:"inline-flex",alignItems:"center",gap:7,
                        padding:"7px 14px",borderRadius:100,
                        background:`${cur.accent}12`,
                        border:`1px solid ${cur.accent}35`,
                        backdropFilter:"blur(8px)",
                      }}
                    >
                      <span style={{ width:5,height:5,borderRadius:"50%",background:cur.accent,boxShadow:`0 0 6px ${cur.accent}` }}/>
                      <span style={{
                        color:"rgba(255,255,255,0.7)",
                        fontSize:"clamp(11px,1.3vw,13px)",fontWeight:600,
                        fontFamily:"'DM Sans',sans-serif",
                      }}>
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* step navigation */}
                <div style={{ display:"flex",gap:10,marginTop:4,alignItems:"center" }}>
                  <motion.button
                    disabled={active === 0}
                    onClick={() => setActive(a => Math.max(0,a-1))}
                    whileHover={active > 0 ? { scale:1.05 } : {}}
                    whileTap={active > 0 ? { scale:0.97 } : {}}
                    style={{
                      display:"inline-flex",alignItems:"center",gap:6,
                      padding:"9px 18px",borderRadius:10,
                      background:"rgba(255,255,255,0.05)",
                      border:"1px solid rgba(255,255,255,0.1)",
                      color: active === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                      fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,
                      cursor: active === 0 ? "not-allowed" : "pointer",
                      transition:"all 0.3s",
                    }}
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Previous
                  </motion.button>

                  {/* step dots */}
                  <div style={{ display:"flex",gap:6,flex:1,justifyContent:"center" }}>
                    {steps.map((_,i) => (
                      <motion.div
                        key={i}
                        onClick={() => setActive(i)}
                        animate={{ width: active===i ? 24 : 7, background: active===i ? cur.accent : "rgba(255,255,255,0.15)" }}
                        transition={{ duration:0.3 }}
                        style={{ height:7,borderRadius:4,cursor:"pointer" }}
                      />
                    ))}
                  </div>

                  <motion.button
                    disabled={active === steps.length - 1}
                    onClick={() => setActive(a => Math.min(steps.length-1,a+1))}
                    whileHover={active < steps.length-1 ? { scale:1.05,boxShadow:`0 0 20px ${cur.accent}40` } : {}}
                    whileTap={active < steps.length-1 ? { scale:0.97 } : {}}
                    style={{
                      display:"inline-flex",alignItems:"center",gap:6,
                      padding:"9px 18px",borderRadius:10,
                      background: active < steps.length-1 ? cur.grad : "rgba(255,255,255,0.05)",
                      border: active < steps.length-1 ? "none" : "1px solid rgba(255,255,255,0.1)",
                      color: active === steps.length-1 ? "rgba(255,255,255,0.2)" : "white",
                      fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:700,
                      cursor: active === steps.length-1 ? "not-allowed" : "pointer",
                      transition:"all 0.3s",
                    }}
                  >
                    Next Step
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}