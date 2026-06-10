import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiUsers, FiUserPlus, FiTarget, FiArrowRight, FiCheck } from "react-icons/fi";

const models = [
  {
    id: "dedicated",
    title: "Dedicated Team",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    icon: <FiUsers size={28} strokeWidth={1.4} />,
    tagline: "Your own remote engineering squad",
    desc: "A fully managed team of developers, designers, and QA engineers working exclusively on your product. Ideal for long-term projects that require deep product knowledge and continuous iteration.",
    features: [
      "Dedicated project manager",
      "Full-time resource allocation",
      "Sprint-based delivery",
      "Direct team communication",
      "Scalable team size",
      "Monthly billing model",
    ],
    best: "Long-term products",
  },
  {
    id: "extension",
    title: "Team Extension",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    icon: <FiUserPlus size={28} strokeWidth={1.4} />,
    tagline: "Seamlessly extend your in-house team",
    desc: "Augment your existing team with pre-vetted senior engineers who integrate directly into your workflows, tools, and culture. No ramp-up time — they're ready from day one.",
    features: [
      "Rapid onboarding",
      "Works in your timezone",
      "Uses your tools & processes",
      "Top 1% vetted engineers",
      "Flexible engagement length",
      "No long-term commitment",
    ],
    best: "Scaling existing teams",
  },
  {
    id: "project",
    title: "Project-Based Model",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    icon: <FiTarget size={28} strokeWidth={1.4} />,
    tagline: "Fixed scope, fixed price, on time",
    desc: "We take full ownership of delivering a defined scope of work within an agreed timeline and budget. Best for well-defined products where requirements are stable and outcomes are clear.",
    features: [
      "Fixed timeline & budget",
      "Full ownership of delivery",
      "Milestone-based payments",
      "Detailed technical specs",
      "Post-launch support included",
      "Transparent reporting",
    ],
    best: "Well-defined projects",
  },
];

function ModelCard({ model, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:50 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.65, delay:index*0.13, ease:[0.22,1,0.36,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex:1, minWidth:"clamp(260px,28vw,380px)",
        borderRadius:22,
        padding:"clamp(28px,3.5vw,40px)",
        background: hovered
          ? `linear-gradient(145deg,${model.accent}0f,rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${model.accent}42`
          : "1px solid rgba(59,130,246,0.12)",
        backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.35),0 0 40px ${model.accent}16`
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
        display:"flex", flexDirection:"column", gap:20,
        fontFamily:"'DM Sans',sans-serif",
        position:"relative", overflow:"hidden",
      }}
    >
      {/* corner glow */}
      <div style={{
        position:"absolute",top:-40,left:"50%",transform:"translateX(-50%)",
        width:200,height:200,borderRadius:"50%",
        background:`radial-gradient(circle,${model.accent}22,transparent 70%)`,
        filter:"blur(30px)",
        opacity: hovered ? 1 : 0,
        transition:"opacity 0.4s",
        pointerEvents:"none",
      }}/>

      {/* top: icon + badge */}
      <div style={{ display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12 }}>
        <div style={{
          width:56,height:56,borderRadius:16,flexShrink:0,
          background: hovered ? model.grad : `${model.accent}16`,
          border:`1px solid ${model.accent}${hovered?"00":"30"}`,
          display:"flex",alignItems:"center",justifyContent:"center",
          color: hovered ? "white" : model.accent,
          boxShadow: hovered ? `0 6px 20px ${model.accent}45` : "none",
          transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}>
          {model.icon}
        </div>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:6,
          background:`${model.accent}12`,border:`1px solid ${model.accent}30`,
          borderRadius:8,padding:"4px 11px",
        }}>
          <span style={{ color:model.accent,fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
            Best for: {model.best}
          </span>
        </div>
      </div>

      {/* title + tagline */}
      <div>
        <h3 style={{
          margin:"0 0 6px",
          fontSize:"clamp(17px,2vw,22px)",fontWeight:800,
          background: model.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          letterSpacing:"-0.4px",
        }}>
          {model.title}
        </h3>
        <p style={{
          margin:0,color:"rgba(147,197,253,0.55)",
          fontSize:"clamp(12px,1.3vw,13.5px)",fontWeight:500,
          fontStyle:"italic",
        }}>
          {model.tagline}
        </p>
      </div>

      {/* divider */}
      <div style={{ height:1,background:`linear-gradient(90deg,${model.accent}35,transparent)` }}/>

      {/* description */}
      <p style={{
        margin:0,color:"rgba(186,230,255,0.55)",
        fontSize:"clamp(13px,1.4vw,14.5px)",lineHeight:1.8,
      }}>
        {model.desc}
      </p>

      {/* features */}
      <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
        {model.features.map((f,i) => (
          <motion.div
            key={f}
            initial={{ opacity:0,x:-8 }}
            animate={hovered ? { opacity:1,x:0 } : { opacity:0.7,x:0 }}
            transition={{ delay:i*0.04,duration:0.3 }}
            style={{ display:"flex",alignItems:"center",gap:9 }}
          >
            <div style={{
              width:18,height:18,borderRadius:"50%",flexShrink:0,
              background:`${model.accent}18`,border:`1px solid ${model.accent}35`,
              display:"flex",alignItems:"center",justifyContent:"center",
            }}>
              <FiCheck size={10} color={model.accent} strokeWidth={2.5}/>
            </div>
            <span style={{
              color:"rgba(186,230,255,0.65)",
              fontSize:"clamp(11px,1.3vw,13px)",fontWeight:500,
            }}>
              {f}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale:1.03,boxShadow:`0 0 24px ${model.accent}45` }}
        whileTap={{ scale:0.97 }}
        style={{
          marginTop:"auto",
          display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,
          padding:"12px 24px",borderRadius:10,
          background: hovered ? model.grad : "rgba(255,255,255,0.05)",
          border: hovered ? "none" : `1px solid ${model.accent}25`,
          color:"white",fontFamily:"'DM Sans',sans-serif",
          fontWeight:700,fontSize:13,cursor:"pointer",
          transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        Learn More <FiArrowRight size={14}/>
      </motion.button>

      {/* bottom accent strip */}
      <div style={{
        position:"absolute",bottom:0,left:0,right:0,height:2,
        background:model.grad,
        opacity: hovered ? 1 : 0,
        transition:"opacity 0.4s",
        borderRadius:"0 0 22px 22px",
      }}/>
    </motion.div>
  );
}

export default function EngagementModels() {
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

      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="emgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#emgrid)"/>
      </svg>
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }} style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.10)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.25)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 8px #38bdf8",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Engagement Models</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20 }}>
            Flexible{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>Engagement Models</span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.85,maxWidth:680,margin:"0 auto" }}>
            Whether you need to extend your in-house team, build specific tech expertise, or speed up development — choose the model that fits your goals and budget perfectly.
          </p>
        </motion.div>

        <div style={{ display:"flex",gap:"clamp(16px,2.5vw,24px)",flexWrap:"wrap" }}>
          {models.map((m,i) => <ModelCard key={m.id} model={m} index={i}/>)}
        </div>
      </div>
    </section>
  );
}