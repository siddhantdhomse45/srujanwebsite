import { useState } from "react";

const categories = [
  {
    id: 1,
    label: "Medical Data Systems",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <rect x="10" y="8" width="32" height="36" rx="4" />
        <path d="M18 20h16M18 26h16M18 32h10" strokeLinecap="round" />
        <path d="M22 8v-4M30 8v-4" strokeLinecap="round" />
        <circle cx="38" cy="38" r="8" fill="none" />
        <path d="M35 38h6M38 35v6" strokeLinecap="round" />
      </svg>
    ),
    case: {
      title: "Stream Data for Hospital",
      emoji: "🏥",
      gradientBg: "linear-gradient(135deg,#020b18,#041530,#061d42)",
      challenge: "Our client wants to collect data from privacy-preserving sensors to analyze clinical activity for research and patient care applications.",
      solution: "Our Solution enabler consists of a custom multi-sensor collection module, Google Cloud ingestion pipeline, 3 level fault tolerance approach for data loss prevention, secure networking layer, etc.",
      tags: ["Sensor Data", "Google Cloud", "HIPAA Compliant", "Fault Tolerance"],
    },
  },
  {
    id: 2,
    label: "Medical Staff & Transport",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <path d="M8 30c0-8 6-14 14-14h4c8 0 14 6 14 14" strokeLinecap="round" />
        <path d="M6 30h40" strokeLinecap="round" />
        <path d="M30 16l10-8 6 4-10 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 8h10v6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="34" r="4" />
        <circle cx="36" cy="34" r="4" />
      </svg>
    ),
    case: {
      title: "Healthcare Staff Management — Nurse and Hospital Management",
      emoji: "👩‍⚕️",
      gradientBg: "linear-gradient(135deg,#0a1628,#0d1f3c,#091525)",
      challenge: "Current healthcare and economic environments force medical experts to take extra shifts, which affects their own quality of life. The idea behind this solution was to empower medical professionals with a simple tool that gives them flexibility, control, and more.",
      solution: "We created on-demand healthcare IT solutions consisting of:\n- iOS and Android app with an Uber-like feel (for the Nurse role)\n- Web Admin Panel (for Hospital Administrator or Security Supervisor role)",
      tags: ["iOS & Android", "On-Demand", "Staff Scheduling", "Admin Panel"],
    },
  },
  {
    id: 3,
    label: "Medical Devices & Equipment",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <rect x="12" y="16" width="28" height="22" rx="3" />
        <path d="M12 24h28" />
        <path d="M20 30h12M22 34h8" strokeLinecap="round" />
        <path d="M20 12c0-2 2-4 6-4s6 2 6 4" strokeLinecap="round" />
        <path d="M26 38v6M20 44h12" strokeLinecap="round" />
        <circle cx="38" cy="20" r="3" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    case: {
      title: "Smart Medical Device Monitoring Platform",
      emoji: "🩺",
      gradientBg: "linear-gradient(135deg,#0d1b2a,#1b2a4a,#0a1628)",
      challenge: "A medical device manufacturer needed a unified platform to remotely monitor equipment performance, predict failures, and reduce costly downtime across 200+ hospital sites.",
      solution: "We built an IoT-connected monitoring dashboard with real-time alerts, predictive maintenance AI, device lifecycle tracking, and automated compliance reporting integrated with hospital CMMS systems.",
      tags: ["IoT Monitoring", "Predictive AI", "CMMS Integration", "Real-time Alerts"],
    },
  },
  {
    id: 4,
    label: "Treatment & Rehabilitation",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <path d="M26 10c-8 0-14 6-14 14s6 14 14 14 14-6 14-14" strokeLinecap="round" />
        <path d="M34 10h8v8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 38v6M20 44h12" strokeLinecap="round" />
        <path d="M20 24l4 4 8-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    case: {
      title: "AI-Powered Rehabilitation Progress Tracker",
      emoji: "💪",
      gradientBg: "linear-gradient(135deg,#0f0c29,#1a1a2e,#16213e)",
      challenge: "Physical therapists lacked digital tools to objectively track patient progress, set measurable recovery milestones, and communicate outcomes to insurance providers.",
      solution: "We developed a mobile + web platform with motion-capture exercise tracking, AI-driven progress scoring, automated insurance documentation, and telehealth video sessions integrated with EHR systems.",
      tags: ["Motion Capture", "EHR Integration", "Telehealth", "AI Scoring"],
    },
  },
  {
    id: 5,
    label: "Wellness",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <path d="M26 42s-18-12-18-24a12 12 0 0 1 18-10 12 12 0 0 1 18 10c0 12-18 24-18 24z" />
        <circle cx="26" cy="22" r="5" />
        <path d="M26 17v-5M26 32v5M16 22h5M31 22h5" strokeLinecap="round" />
      </svg>
    ),
    case: {
      title: "Corporate Wellness & Mental Health Platform",
      emoji: "🧘",
      gradientBg: "linear-gradient(135deg,#020b18,#041530,#06244a)",
      challenge: "A Fortune 500 company needed a scalable digital wellness platform to improve employee mental health, reduce burnout, and provide anonymous access to therapy resources across 30+ countries.",
      solution: "We delivered a white-labeled wellness app with mood tracking, guided meditation, licensed therapist matching, anonymous peer support groups, and HR analytics dashboards for engagement metrics.",
      tags: ["Mental Health", "Mood Tracking", "Therapist Matching", "HR Analytics"],
    },
  },
  {
    id: 6,
    label: "Insurance",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="46" height="46">
        <path d="M26 6l18 8v14c0 10-8 16-18 20C16 44 8 38 8 28V14l18-8z" strokeLinejoin="round" />
        <path d="M18 28l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    case: {
      title: "Digital Health Insurance Claims Automation",
      emoji: "🛡️",
      gradientBg: "linear-gradient(135deg,#0a1628,#0d1f3c,#091525)",
      challenge: "A leading health insurer processed 2M+ claims annually through manual workflows causing delays, high error rates, and poor policyholder satisfaction scores.",
      solution: "We built an AI-powered claims processing engine with OCR document ingestion, automated fraud detection, real-time eligibility verification, and a self-service policyholder portal with live claim status.",
      tags: ["Claims Automation", "OCR & AI", "Fraud Detection", "Self-Service Portal"],
    },
  },
];

export default function ClientSuccess() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [slide, setSlide] = useState(0);

  const cat = categories[activeCategory];
  const cs = cat.case;

  const prev = () => setActiveCategory((p) => (p - 1 + categories.length) % categories.length);
  const next = () => setActiveCategory((p) => (p + 1) % categories.length);

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "90px 40px 110px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient bg */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-80px", left:"20%", width:"580px", height:"380px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"15%", width:"480px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"60px" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
            Portfolio
          </span>

          <h2 style={{
            fontSize:"clamp(32px,5vw,58px)", fontWeight:"900", letterSpacing:"0.06em",
            textTransform:"uppercase", margin:"0 0 20px",
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>
            Client Success
          </h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"22px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p style={{ maxWidth:"740px", margin:"0 auto", fontSize:"16px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)" }}>
            Navigating through our extensive portfolio of healthcare IT solutions unveils the depth of our experience in servicing various domains within the healthcare industry. Our projects range from creating a healthcare IT infrastructure to implementing RFID systems and developing AI engines for treatment.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:"10px", marginBottom:"28px" }}>
          {categories.map((c, i) => {
            const isAct = activeCategory === i;
            return (
              <div
                key={c.id}
                onClick={() => setActiveCategory(i)}
                style={{
                  display:"flex", flexDirection:"column", alignItems:"center",
                  justifyContent:"center", gap:"12px",
                  padding:"22px 10px 18px",
                  borderRadius:"16px",
                  cursor:"pointer",
                  border: isAct ? "1.5px solid rgba(96,165,250,0.6)" : "1px solid rgba(255,255,255,0.07)",
                  background: isAct
                    ? "linear-gradient(145deg,rgba(29,78,216,0.3),rgba(99,102,241,0.15))"
                    : "rgba(255,255,255,0.03)",
                  boxShadow: isAct ? "0 8px 32px -4px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.08)" : "none",
                  transform: isAct ? "translateY(-4px)" : "translateY(0)",
                  transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  position:"relative", overflow:"hidden",
                }}
              >
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:"3px",
                  background: isAct ? "linear-gradient(90deg,#1d4ed8,#6366f1)" : "transparent",
                  transition:"all 0.3s",
                }} />
                <div style={{
                  color: isAct ? "#93c5fd" : "rgba(148,163,184,0.35)",
                  filter: isAct ? "drop-shadow(0 0 10px rgba(59,130,246,0.6))" : "none",
                  transform: isAct ? "scale(1.08)" : "scale(1)",
                  transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  {c.icon}
                </div>
                <span style={{
                  fontSize:"11px", fontWeight: isAct ? "800" : "600",
                  color: isAct ? "#93c5fd" : "rgba(100,116,139,0.7)",
                  textAlign:"center", lineHeight:1.3, letterSpacing:"0.01em",
                  transition:"color 0.3s",
                }}>
                  {c.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Case Study Panel ── */}
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0",
          borderRadius:"20px", overflow:"hidden",
          border:"1px solid rgba(59,130,246,0.15)",
          boxShadow:"0 24px 80px -16px rgba(0,0,0,0.6)",
          position:"relative",
        }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            style={{
              position:"absolute", left:"-20px", top:"50%", transform:"translateY(-50%)",
              width:"40px", height:"40px", borderRadius:"50%",
              background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",
              border:"none", cursor:"pointer", zIndex:10,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
              transition:"all 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform="translateY(-50%) scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform="translateY(-50%) scale(1)"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            style={{
              position:"absolute", right:"-20px", top:"50%", transform:"translateY(-50%)",
              width:"40px", height:"40px", borderRadius:"50%",
              background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",
              border:"none", cursor:"pointer", zIndex:10,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
              transition:"all 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform="translateY(-50%) scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform="translateY(-50%) scale(1)"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Left visual */}
          <div style={{
            position:"relative", minHeight:"460px",
            background: cs.gradientBg,
            display:"flex", alignItems:"center", justifyContent:"center",
            overflow:"hidden",
          }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(37,99,235,0.2),transparent 70%)" }} />
            <div style={{ position:"relative", zIndex:2, textAlign:"center" }}>
              <div style={{ fontSize:"100px", lineHeight:1, marginBottom:"28px", filter:"drop-shadow(0 0 30px rgba(59,130,246,0.5))" }}>
                {cs.emoji}
              </div>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"8px 20px", borderRadius:"100px",
                background:"rgba(37,99,235,0.2)", border:"1px solid rgba(59,130,246,0.35)",
                color:"#93c5fd", fontSize:"12px", fontWeight:"700", letterSpacing:"0.1em",
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
                {cat.label}
              </div>
            </div>
            {/* Corner brackets */}
            <div style={{ position:"absolute", top:"16px", left:"16px", width:"32px", height:"32px", borderTop:"2px solid rgba(59,130,246,0.5)", borderLeft:"2px solid rgba(59,130,246,0.5)" }} />
            <div style={{ position:"absolute", bottom:"16px", right:"16px", width:"32px", height:"32px", borderBottom:"2px solid rgba(59,130,246,0.5)", borderRight:"2px solid rgba(59,130,246,0.5)" }} />
            {/* Case number */}
            <div style={{ position:"absolute", bottom:"20px", left:"24px", fontSize:"11px", fontWeight:"700", letterSpacing:"0.15em", color:"rgba(96,165,250,0.4)", textTransform:"uppercase" }}>
              0{activeCategory + 1} / 0{categories.length}
            </div>
          </div>

          {/* Right content */}
          <div style={{
            padding:"48px 44px",
            background:"linear-gradient(145deg,rgba(6,18,42,0.97),rgba(4,15,38,0.99))",
            display:"flex", flexDirection:"column", justifyContent:"space-between",
          }}>
            <div>
              {/* Badge */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"5px 14px", borderRadius:"8px",
                background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.25)",
                color:"#60a5fa", fontSize:"11px", fontWeight:"700",
                letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"20px",
              }}>
                Case Study
              </div>

              {/* Title */}
              <h3 style={{ fontSize:"22px", fontWeight:"900", color:"#f1f5f9", marginBottom:"32px", lineHeight:1.3 }}>
                {cs.title}
              </h3>

              {/* Challenge */}
              <div style={{ marginBottom:"24px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <div style={{
                    width:"28px", height:"28px", borderRadius:"8px",
                    background:"linear-gradient(135deg,#dc2626,#ef4444)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 4px 12px rgba(239,68,68,0.35)",
                  }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" width="11" height="11">
                      <path d="M8 2v7M8 11v2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize:"14px", fontWeight:"800", color:"#f1f5f9", letterSpacing:"0.04em" }}>Challenge</span>
                </div>
                <p style={{ fontSize:"14px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)", margin:0, paddingLeft:"38px" }}>
                  {cs.challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom:"28px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <div style={{
                    width:"28px", height:"28px", borderRadius:"8px",
                    background:"linear-gradient(135deg,#059669,#10b981)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 4px 12px rgba(16,185,129,0.35)",
                  }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" width="11" height="11">
                      <polyline points="3 8 6 11 13 4" />
                    </svg>
                  </div>
                  <span style={{ fontSize:"14px", fontWeight:"800", color:"#f1f5f9", letterSpacing:"0.04em" }}>Solution</span>
                </div>
                <p style={{ fontSize:"14px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)", margin:0, paddingLeft:"38px", whiteSpace:"pre-line" }}>
                  {cs.solution}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"32px" }}>
                {cs.tags.map((tag, i) => (
                  <span key={i} style={{
                    padding:"5px 12px", borderRadius:"8px",
                    fontSize:"11px", fontWeight:"700", letterSpacing:"0.1em", textTransform:"uppercase",
                    color:"#60a5fa", background:"rgba(37,99,235,0.12)", border:"1px solid rgba(59,130,246,0.2)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button style={{
              display:"inline-flex", alignItems:"center", gap:"10px",
              padding:"14px 28px", borderRadius:"12px", border:"none",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb)",
              color:"white", fontSize:"13px", fontWeight:"800",
              letterSpacing:"0.1em", textTransform:"uppercase", cursor:"pointer",
              boxShadow:"0 6px 20px -4px rgba(37,99,235,0.45)",
              transition:"all 0.3s ease", alignSelf:"flex-start",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 12px 36px -4px rgba(37,99,235,0.65)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="0 6px 20px -4px rgba(37,99,235,0.45)"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              <span>View Full Case Study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot nav */}
        <div style={{ display:"flex", justifyContent:"center", gap:"8px", marginTop:"28px" }}>
          {categories.map((_, i) => (
            <div key={i} onClick={() => setActiveCategory(i)} style={{
              width: activeCategory === i ? "28px" : "8px", height:"8px",
              borderRadius:"4px", cursor:"pointer",
              background: activeCategory === i ? "linear-gradient(90deg,#1d4ed8,#6366f1)" : "rgba(59,130,246,0.25)",
              transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }} />
          ))}
        </div>

      </div>
    </section>
  );
}