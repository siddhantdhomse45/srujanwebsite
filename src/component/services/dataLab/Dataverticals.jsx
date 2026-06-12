import { useState } from "react";

const verticals = [
  {
    id: 1,
    title: "Healthcare",
    description: "Transforming patient care and operational efficiency with innovative data solutions tailored for the healthcare industry.",
    number: "01",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="28" r="20" />
        <path d="M28 18v20M18 28h20" strokeLinecap="round" />
        <path d="M20 20a12 12 0 0 1 16 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Construction",
    description: "Helping construction firms optimize project management and resource allocation through advanced analytics and insights.",
    number: "02",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <path d="M10 44h36" strokeLinecap="round" />
        <path d="M16 44V28l12-16 12 16v16" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="22" y="34" width="12" height="10" rx="1" />
        <path d="M22 28h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Fintech",
    description: "Transforming financial services with secure, scalable, and impactful data analytics in financial services to drive innovation.",
    number: "03",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="28" r="20" />
        <path d="M28 16v4M28 36v4" strokeLinecap="round" />
        <path d="M21 22c0-3.3 3.1-5 7-5s7 1.7 7 5-3 4-7 5-7 2-7 5 3.1 5 7 5 7-1.7 7-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Insurance",
    description: "Enhancing risk assessment, claims processing, and customer experience with the power of data analytics consulting services designed for the insurance sector.",
    number: "04",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <path d="M28 8l18 8v14c0 10-8 16-18 20C18 46 10 40 10 30V16l18-8z" strokeLinejoin="round" />
        <path d="M20 28l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Transportation & Logistics",
    description: "Improving operational efficiency with customized data-driven solutions for the automotive and logistics industry.",
    number: "05",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="6" y="20" width="32" height="20" rx="3" />
        <path d="M38 26h6l6 8v6h-6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="42" r="5" />
        <circle cx="38" cy="42" r="5" />
        <path d="M6 32h32" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Travel & Hospitality",
    description: "Elevating guest experiences and streamlining operations through actionable insights tailored to travel and hospitality businesses.",
    number: "06",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="22" r="10" />
        <path d="M28 32v6" strokeLinecap="round" />
        <path d="M20 38c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
        <path d="M10 46h36" strokeLinecap="round" />
        <path d="M16 18c2-5 6-8 12-8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function DataVerticals() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "clamp(60px, 10vw, 90px) clamp(20px, 5vw, 40px) clamp(80px, 10vw, 110px)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .verticals-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .verticals-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .header-description {
            font-size: 14px !important;
            padding: 0 16px !important;
          }
          .card-icon {
            width: 50px !important;
            height: 50px !important;
          }
          .card-icon svg {
            width: 44px !important;
            height: 44px !important;
          }
          .card-title {
            font-size: 18px !important;
          }
          .card-description {
            font-size: 13px !important;
            line-height: 1.7 !important;
          }
          .cta-button {
            padding: 14px 32px !important;
            font-size: 13px !important;
          }
        }
        @media (max-width: 480px) {
          .verticals-grid {
            gap: 16px !important;
          }
          .card-padding {
            padding: 28px 20px 24px !important;
          }
          .icon-row {
            margin-bottom: 18px !important;
          }
          .card-number {
            font-size: 10px !important;
            padding: 3px 8px !important;
          }
          .card-bottom {
            padding-top: 12px !important;
          }
          .arrow-icon {
            width: 28px !important;
            height: 28px !important;
          }
        }
      `}</style>

      {/* Ambient background */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-100px", left:"30%", width:"560px", height:"400px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.2),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-100px", right:"20%", width:"460px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)" }} />
        <div style={{ position:"absolute", top:"50%", left:"-60px", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.1),transparent 70%)" }} />
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"clamp(48px, 8vw, 72px)" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
            Industries We Serve
          </span>

          <h2 style={{
            fontSize:"clamp(30px,4.5vw,54px)",
            fontWeight:"900",
            letterSpacing:"0.06em",
            textTransform:"uppercase",
            margin:"0 0 20px",
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}>
            Data-Driven Solutions<br/>For Verticals
          </h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"24px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p className="header-description" style={{ maxWidth:"780px", margin:"0 auto", fontSize:"16px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)" }}>
            From fast-growing startups to well-established enterprises, we empower businesses with data-driven insights that fuel smarter decision-making. Our extensive industry experience enables us to develop custom analytics solutions that transform raw data into actionable intelligence.
          </p>
        </div>

        {/* Verticals Grid - responsive via CSS */}
        <div className="verticals-grid" style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"16px",
        }}>
          {verticals.map((v, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={v.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius:"20px",
                  overflow:"hidden",
                  border: isHov ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  background: isHov
                    ? "linear-gradient(145deg,rgba(29,78,216,0.18),rgba(99,102,241,0.08))"
                    : "linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
                  boxShadow: isHov ? "0 20px 60px -10px rgba(37,99,235,0.4),inset 0 1px 0 rgba(255,255,255,0.06)" : "0 4px 20px -4px rgba(0,0,0,0.3)",
                  transform: isHov ? "translateY(-8px)" : "translateY(0)",
                  transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  cursor:"pointer",
                  backdropFilter:"blur(10px)",
                  WebkitBackdropFilter:"blur(10px)",
                  position:"relative",
                }}
              >
                <div style={{
                  height:"3px",
                  background: isHov
                    ? "linear-gradient(90deg,#1d4ed8,#3b82f6,#6366f1)"
                    : "linear-gradient(90deg,rgba(37,99,235,0.3),rgba(59,130,246,0.1))",
                  transition:"all 0.4s ease",
                }} />

                <div className="card-padding" style={{ padding:"clamp(28px, 5vw, 36px) clamp(24px, 4vw, 32px) clamp(24px, 4vw, 32px)" }}>
                  <div className="icon-row" style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"24px" }}>
                    <div className="card-icon" style={{
                      width:"clamp(50px, 8vw, 60px)",
                      height:"clamp(50px, 8vw, 60px)",
                      borderRadius:"50%",
                      border: isHov ? "1.5px solid rgba(59,130,246,0.5)" : "1.5px solid rgba(255,255,255,0.08)",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.03)",
                      color: isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
                      transform: isHov ? "scale(1.08)" : "scale(1)",
                      filter: isHov ? "drop-shadow(0 0 12px rgba(59,130,246,0.5))" : "none",
                      transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    }}>
                      {v.icon}
                    </div>

                    <span className="card-number" style={{
                      fontSize:"clamp(10px, 2vw, 12px)",
                      fontWeight:"900",
                      letterSpacing:"0.15em",
                      padding:"4px 10px",
                      borderRadius:"8px",
                      background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
                      border: isHov ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      color: isHov ? "#93c5fd" : "rgba(100,116,139,0.6)",
                      transition:"all 0.3s",
                    }}>
                      {v.number}
                    </span>
                  </div>

                  <h3 className="card-title" style={{
                    fontSize:"clamp(18px, 3.5vw, 20px)",
                    fontWeight:"800",
                    color: isHov ? "#f1f5f9" : "rgba(226,232,240,0.75)",
                    marginBottom:"12px",
                    letterSpacing:"0.01em",
                    transition:"color 0.3s",
                  }}>
                    {v.title}
                  </h3>

                  <p className="card-description" style={{
                    fontSize:"clamp(13px, 2.5vw, 14px)",
                    lineHeight:"1.85",
                    color: isHov ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.8)",
                    margin:"0 0 20px",
                    transition:"color 0.3s",
                  }}>
                    {v.description}
                  </p>

                  <div className="card-bottom" style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    paddingTop:"16px",
                    borderTop: isHov ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(255,255,255,0.05)",
                    transition:"border-color 0.3s",
                  }}>
                    <span style={{
                      fontSize:"clamp(10px, 2vw, 12px)",
                      fontWeight:"700",
                      letterSpacing:"0.12em",
                      textTransform:"uppercase",
                      color: isHov ? "#60a5fa" : "rgba(71,85,105,0.8)",
                      transition:"color 0.3s",
                    }}>
                      Explore Solutions
                    </span>
                    <div className="arrow-icon" style={{
                      width:"clamp(28px, 5vw, 32px)",
                      height:"clamp(28px, 5vw, 32px)",
                      borderRadius:"50%",
                      border: isHov ? "1.5px solid rgba(96,165,250,0.5)" : "1.5px solid rgba(255,255,255,0.07)",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      background: isHov ? "rgba(37,99,235,0.25)" : "transparent",
                      transform: isHov ? "translateX(3px)" : "translateX(0)",
                      transition:"all 0.35s ease",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={isHov ? "#60a5fa" : "rgba(71,85,105,0.6)"} strokeWidth="2" width="14" height="14">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {isHov && (
                  <div style={{
                    position:"absolute", top:0, left:0, right:0, bottom:0, borderRadius:"20px",
                    background:"radial-gradient(ellipse at top left,rgba(37,99,235,0.1),transparent 60%)",
                    pointerEvents:"none",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign:"center", marginTop:"clamp(48px, 8vw, 64px)" }}>
          <button className="cta-button"
            style={{
              display:"inline-flex", alignItems:"center", gap:"12px",
              padding:"clamp(14px, 2.5vw, 16px) clamp(32px, 5vw, 42px)",
              borderRadius:"14px", border:"none",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb,#4f46e5)",
              color:"white", fontSize:"clamp(13px, 2vw, 15px)", fontWeight:"800",
              letterSpacing:"0.05em", cursor:"pointer",
              boxShadow:"0 8px 32px -4px rgba(37,99,235,0.6)",
              transition:"all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow="0 16px 48px -4px rgba(37,99,235,0.75)"; e.currentTarget.style.transform="translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow="0 8px 32px -4px rgba(37,99,235,0.6)"; e.currentTarget.style.transform="translateY(0)"; }}
          >
            <span>View All Industries</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}