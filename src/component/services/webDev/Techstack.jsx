import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const techGroups = [
  {
    title: "Languages",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ["Java","C#","C/C++","ObjectiveC","Python","Groovy","Swift","Kotlin","PHP","Rust","Scala"],
  },
  {
    title: "Frameworks",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    items: ["JDBC/SPA","JMS","Hibernate",".Net","EJB","Apache Camel","Firebase","Node JS","LDAP/Active Directory","Reactive (Akka, RxJava, Reactor)"],
  },
  {
    title: "Cloud",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    items: ["Amazon Web Services (AWS)","Google Cloud","Oracle Cloud","IBM Cloud","Microsoft Azure"],
  },
  {
    title: "Mobile",
    accent: "#fb923c",
    grad: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    items: ["iOS","Android","HTML5","React Native","Xamarin","JavaScript"],
  },
  {
    title: "Web",
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    items: ["Vue","Sass","CoffeeScript","Angular","WebGL","React","TypeScript"],
  },
  {
    title: "Database Management",
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    items: ["NoSQL","MySQL","Oracle SQL","PostgreSQL","Microsoft SQL","MongoDB","Redis"],
  },
];

function Tag({ label, accent, grad, groupHovered }) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || groupHovered;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "7px 14px", borderRadius: 100, cursor: "default",
        background: hovered ? `${accent}18` : "rgba(255,255,255,0.04)",
        border: hovered ? `1px solid ${accent}50` : "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        boxShadow: hovered ? `0 0 16px ${accent}20` : "none",
      }}
    >
      {hovered && (
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent, boxShadow: `0 0 6px ${accent}`, flexShrink: 0 }} />
      )}
      <span style={{
        fontSize: "clamp(11px,1.5vw,13px)", fontWeight: hovered ? 600 : 500,
        fontFamily: "'DM Sans',sans-serif",
        background: hovered ? grad : "none",
        WebkitBackgroundClip: hovered ? "text" : "unset",
        WebkitTextFillColor: hovered ? "transparent" : "rgba(255,255,255,0.6)",
        transition: "all 0.3s",
        whiteSpace: "nowrap",
      }}>
        {label}
      </span>
    </motion.div>
  );
}

function GroupCard({ group, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20, padding: "clamp(24px,3vw,32px)",
        background: hovered ? `linear-gradient(145deg,${group.accent}0d,rgba(255,255,255,0.05))` : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${group.accent}40` : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.3),0 0 36px ${group.accent}12` : "0 4px 16px rgba(0,0,0,0.15)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      {/* corner glow */}
      <div style={{
        position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle,${group.accent}20,transparent 70%)`,
        filter: "blur(30px)", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s", pointerEvents: "none",
      }} />

      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: group.grad,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 4px 14px ${group.accent}40`,
          color: "white",
        }}>
          {group.icon}
        </div>
        <h3 style={{
          margin: 0,
          fontSize: "clamp(15px,2vw,18px)", fontWeight: 800,
          background: group.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "-0.3px",
        }}>
          {group.title}
        </h3>
      </div>

      {/* divider */}
      <div style={{
        height: 1, marginBottom: 20,
        background: `linear-gradient(90deg,${group.accent}30,transparent)`,
      }} />

      {/* tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px,1vw,10px)" }}>
        {group.items.map((item) => (
          <Tag key={item} label={item} accent={group.accent} grad={group.grad} groupHovered={false} />
        ))}
      </div>

      {/* bottom accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: group.grad, opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        borderRadius: "0 0 20px 20px",
      }} />
    </motion.div>
  );
}

export default function TechStack() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden", fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tsgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tsgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:460,height:460,borderRadius:"50%",background:"radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.2,0.12] }} transition={{ duration:13,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

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
            background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:100,padding:"6px 18px",marginBottom:20,
          }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"rgba(255,255,255,0.65)",fontSize:12,fontWeight:600,letterSpacing:2.5,textTransform:"uppercase" }}>
              Engineering Excellence
            </span>
          </div>

          <h2 style={{
            color:"white", fontSize:"clamp(26px,5vw,54px)",
            fontWeight:800,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20,
          }}>
            Our Technology{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Stack
            </span>
          </h2>

          <p style={{
            color:"rgba(255,255,255,0.45)",
            fontSize:"clamp(14px,1.8vw,17px)",
            lineHeight:1.8,maxWidth:720,margin:"0 auto",
          }}>
            With over 200 engineers on our team, including experts with 20+ years of experience and
            skilled mid-level developers, we ensure your entire development stack is fully covered.
            Your app will be in excellent hands.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(clamp(260px,28vw,380px),1fr))",
          gap:"clamp(14px,2.5vw,24px)",
        }}>
          {techGroups.map((group, i) => (
            <GroupCard key={group.title} group={group} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}