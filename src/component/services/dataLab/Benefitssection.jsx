import { useState } from "react";

const benefits = [
  {
    id: 1,
    title: "Experienced Data Professionals",
    description: "Work with a team of experts skilled in optimizing redundant data, eliminating wasted storage, and managing complex multi-vendor environments through our big data analytics services.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <circle cx="20" cy="14" r="6" />
        <path d="M8 34c0-6.6 5.4-12 12-12s12 5.4 12 12" strokeLinecap="round" />
        <path d="M30 10c2 1 4 3 4 6s-2 5-4 6" strokeLinecap="round" />
        <path d="M10 10c-2 1-4 3-4 6s2 5 4 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customized Solutions for Your Business",
    description: "We develop strategies designed to reduce redundant data, optimize database usage, and align with your specific objectives.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <rect x="6" y="10" width="28" height="22" rx="3" />
        <path d="M13 16h14M13 21h9" strokeLinecap="round" />
        <path d="M26 26l6 6" strokeLinecap="round" />
        <circle cx="30" cy="30" r="4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Actionable Insights for Smarter Decisions",
    description: "Transform raw data into meaningful insights to enhance scalability, resilience, operational efficiency, and business continuity.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <path d="M6 30l8-10 6 6 8-12 6 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="20" r="3" />
        <path d="M6 34h28" strokeLinecap="round" />
        <path d="M6 10v24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "State-of-the-Art Technology",
    description: "Harness advanced tools and technologies to reduce maintenance costs, lower total database expenses, and boost efficiency.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <rect x="6" y="8" width="28" height="20" rx="3" />
        <path d="M6 16h28" />
        <path d="M12 12h4M20 12h8" strokeLinecap="round" />
        <path d="M14 22h12M16 26h8" strokeLinecap="round" />
        <path d="M16 28v6M24 28v6M12 34h16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Proven Governance Frameworks",
    description: "Strengthen your database security with industry-leading frameworks and data analytics services to ensure compliance and reliability.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <path d="M20 4l14 6v10c0 8-6 13-14 16C12 33 6 28 6 20V10l14-6z" strokeLinejoin="round" />
        <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Flexible and Scalable Solutions",
    description: "Our services grow with your business, enabling seamless updates and the scalability needed to meet evolving demands.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <path d="M10 20h20M24 14l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 26l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="8" width="32" height="24" rx="4" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Results That Deliver Value",
    description: "We help reduce costs related to database maintenance, inefficiencies, and turnover, while maximizing ROI through streamlined operations and actionable insights.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4" strokeLinecap="round" />
        <path d="M20 16v4l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Unified Data Strategy",
    description: "We create integrated strategies with data analytics consulting services that improve scalability, simplify management, and enhance overall performance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
        <circle cx="20" cy="20" r="6" />
        <circle cx="8" cy="10" r="4" />
        <circle cx="32" cy="10" r="4" />
        <circle cx="8" cy="30" r="4" />
        <circle cx="32" cy="30" r="4" />
        <path d="M14 17l-3-4M26 17l3-4M14 23l-3 4M26 23l3 4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  const [hovered, setHovered] = useState(null);

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
        <div style={{ position:"absolute", top:"-80px", left:"25%", width:"600px", height:"400px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"20%", width:"500px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.14),transparent 70%)" }} />
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"72px" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
            Why Choose Us
          </span>

          <h2 style={{
            fontSize:"clamp(24px,3.8vw,46px)",
            fontWeight:"900",
            letterSpacing:"0.05em",
            textTransform:"uppercase",
            margin:"0 0 20px",
            lineHeight:1.2,
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}>
            How Can You Benefit From<br/>Working With Us?
          </h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"24px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p style={{ maxWidth:"680px", margin:"0 auto", fontSize:"16px", lineHeight:"1.8", color:"rgba(148,163,184,0.85)" }}>
            Partnering with us means gaining access to world-class data expertise, cutting-edge technology, and strategies custom-built to accelerate your business growth.
          </p>
        </div>

        {/* ── 2-column grid ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0" }}>
          {benefits.map((b, i) => {
            const isHov = hovered === i;
            const col = i % 2;
            const row = Math.floor(i / 2);
            const totalRows = Math.ceil(benefits.length / 2);
            const isLastRow = row === totalRows - 1;

            return (
              <div
                key={b.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding:"40px 44px",
                  borderRight: col === 0 ? "1px solid rgba(59,130,246,0.12)" : "none",
                  borderBottom: !isLastRow ? "1px solid rgba(59,130,246,0.12)" : "none",
                  background: isHov
                    ? "linear-gradient(135deg,rgba(29,78,216,0.14),rgba(99,102,241,0.06))"
                    : "transparent",
                  transition:"background 0.35s ease",
                  cursor:"pointer",
                  position:"relative",
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position:"absolute",
                  left:0, top:"40px", bottom:"40px",
                  width:"3px",
                  borderRadius:"2px",
                  background:"linear-gradient(to bottom,#1d4ed8,#6366f1)",
                  opacity: isHov ? 1 : 0,
                  transition:"opacity 0.35s",
                }} />

                {/* Icon + Number row */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"18px" }}>
                  <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    width:"52px",
                    height:"52px",
                    borderRadius:"14px",
                    background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
                    border: isHov ? "1.5px solid rgba(59,130,246,0.4)" : "1.5px solid rgba(255,255,255,0.07)",
                    color: isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
                    filter: isHov ? "drop-shadow(0 0 10px rgba(59,130,246,0.4))" : "none",
                    transform: isHov ? "scale(1.08)" : "scale(1)",
                    transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  }}>
                    {b.icon}
                  </div>

                  <span style={{
                    fontSize:"11px",
                    fontWeight:"900",
                    letterSpacing:"0.18em",
                    color: isHov ? "rgba(96,165,250,0.7)" : "rgba(71,85,105,0.4)",
                    transition:"color 0.3s",
                  }}>
                    {String(b.id).padStart(2,"0")}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize:"18px",
                  fontWeight:"800",
                  color: isHov ? "#f1f5f9" : "rgba(226,232,240,0.75)",
                  marginBottom:"12px",
                  letterSpacing:"0.01em",
                  transition:"color 0.3s",
                }}>
                  {b.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize:"14px",
                  lineHeight:"1.85",
                  color: isHov ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.8)",
                  margin:"0 0 20px",
                  transition:"color 0.3s",
                }}>
                  {b.description}
                </p>

                {/* Bottom "Learn more" */}
                <div style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"8px",
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? "translateY(0)" : "translateY(6px)",
                  transition:"all 0.3s ease",
                }}>
                  <span style={{
                    fontSize:"12px",
                    fontWeight:"700",
                    letterSpacing:"0.12em",
                    textTransform:"uppercase",
                    color:"#60a5fa",
                  }}>
                    Learn More
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Corner shimmer */}
                {isHov && (
                  <div style={{
                    position:"absolute", inset:0, pointerEvents:"none",
                    background:"radial-gradient(ellipse at top left,rgba(37,99,235,0.08),transparent 60%)",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign:"center", marginTop:"64px" }}>
          <button
            style={{
              display:"inline-flex", alignItems:"center", gap:"12px",
              padding:"16px 42px", borderRadius:"14px", border:"none",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb,#4f46e5)",
              color:"white", fontSize:"15px", fontWeight:"800",
              letterSpacing:"0.05em", cursor:"pointer",
              boxShadow:"0 8px 32px -4px rgba(37,99,235,0.6)",
              transition:"all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow="0 16px 48px -4px rgba(37,99,235,0.75)"; e.currentTarget.style.transform="translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow="0 8px 32px -4px rgba(37,99,235,0.6)"; e.currentTarget.style.transform="translateY(0)"; }}
          >
            <span>Get Started Today</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}