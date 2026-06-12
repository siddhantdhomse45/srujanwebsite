import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Big Data Dashboards",
    description: "Unified dashboards that aggregate sensor data across your entire supply chain for real-time visibility.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <rect x="4" y="20" width="8" height="16" rx="2" />
        <rect x="16" y="12" width="8" height="24" rx="2" />
        <rect x="28" y="6" width="8" height="30" rx="2" />
        <path d="M4 18l12-8 12 6 8-10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="6" r="3" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
    col: 1,
  },
  {
    id: 2,
    title: "KPI Dashboards",
    description: "Track key performance indicators across logistics operations with customizable real-time reporting.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <rect x="4" y="8" width="36" height="28" rx="4" />
        <path d="M4 16h36" />
        <rect x="9" y="20" width="10" height="10" rx="2" />
        <rect x="23" y="20" width="16" height="4" rx="1" />
        <path d="M23 27h10" strokeLinecap="round" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    col: 2,
  },
  {
    id: 3,
    title: "Artificial Intelligence / Machine Learning",
    description: "ML models that predict demand fluctuations, optimize routes, and detect anomalies before they impact operations.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <circle cx="22" cy="20" r="10" />
        <path d="M22 10V6M22 34v-4M12 20H8M36 20h-4" strokeLinecap="round" />
        <path d="M15 13l-3-3M29 13l3-3M15 27l-3 3M29 27l3 3" strokeLinecap="round" />
        <circle cx="22" cy="20" r="4" fill="currentColor" fillOpacity="0.15" />
        <path d="M19 20l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    col: 1,
  },
  {
    id: 4,
    title: "Custom Reporting Software Development",
    description: "Purpose-built reporting tools for manufacturing lines and warehouses with drill-down analytics and export capabilities.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <rect x="8" y="4" width="22" height="28" rx="3" />
        <path d="M14 12h10M14 17h10M14 22h6" strokeLinecap="round" />
        <path d="M26 28l8 8" strokeLinecap="round" />
        <circle cx="30" cy="34" r="6" />
        <path d="M28 34h4M30 32v4" strokeLinecap="round" />
      </svg>
    ),
    col: 2,
  },
  {
    id: 5,
    title: "Custom Logistics Software Solutions",
    description: "End-to-end logistics platforms tailored to your workflows — from order management to last-mile delivery optimization.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <rect x="4" y="18" width="24" height="14" rx="3" />
        <path d="M28 22h6l6 8v6h-6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="34" r="4" />
        <circle cx="30" cy="34" r="4" />
        <circle cx="38" cy="34" r="3" />
        <path d="M4 24h24" />
        <path d="M8 18v-4l6-6h10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    col: 1,
  },
];

// Tablet mockup component (responsive)
const TabletMockup = () => (
  <div style={{
    width:"100%", maxWidth:"420px", margin:"0 auto",
    background:"linear-gradient(145deg,#f8fafc,#f1f5f9)",
    borderRadius:"20px",
    padding:"clamp(6px, 2vw, 12px)",
    boxShadow:"0 40px 100px rgba(0,0,0,0.7), 0 0 0 2px rgba(59,130,246,0.2)",
    border:"1px solid rgba(255,255,255,0.2)",
    fontFamily:"'DM Sans','Segoe UI',sans-serif",
    position:"relative",
  }}>
    {/* Inner screen */}
    <div style={{ background:"white", borderRadius:"12px", overflow:"hidden", boxShadow:"inset 0 1px 4px rgba(0,0,0,0.1)" }}>
      {/* Top bar */}
      <div style={{ background:"linear-gradient(135deg,#1d4ed8,#4f46e5)", padding:"clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 16px)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <span style={{ fontSize:"clamp(10px, 2vw, 12px)", color:"rgba(255,255,255,0.7)", fontWeight:"600" }}>← Back</span>
          <span style={{ fontSize:"clamp(10px, 2vw, 12px)", color:"white", fontWeight:"800", marginLeft:"8px" }}>SE-EV</span>
        </div>
        <div style={{
          padding:"clamp(2px, 1vw, 4px) clamp(8px, 2vw, 12px)", borderRadius:"4px",
          background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.3)",
          fontSize:"clamp(8px, 2vw, 10px)", fontWeight:"800", color:"white", letterSpacing:"0.1em",
        }}>
          SELECT
        </div>
        <span style={{ fontSize:"clamp(8px, 2vw, 10px)", color:"rgba(255,255,255,0.6)" }}>10:59</span>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"clamp(140px, 35%, 180px) 1fr" }}>
        {/* Left panel */}
        <div style={{ padding:"clamp(6px, 1.5vw, 12px)", borderRight:"1px solid #e2e8f0" }}>
          <div style={{ height:"clamp(50px, 15vw, 70px)", background:"linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius:"8px", marginBottom:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg viewBox="0 0 60 40" fill="none" stroke="#3b82f6" strokeWidth="1.5" width="clamp(40px, 12vw, 56px)" height="clamp(24px, 8vw, 36px)">
              <rect x="4" y="10" width="30" height="22" rx="3" />
              <rect x="34" y="14" width="20" height="14" rx="2" />
              <path d="M10 16h18M10 21h12" strokeLinecap="round" />
              <circle cx="42" cy="28" r="4" />
              <path d="M8 32h28" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize:"clamp(7px, 2vw, 8px)", color:"#64748b", marginBottom:"3px", fontWeight:"600" }}>Clamp Force Range</div>
          <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"#1e40af", fontWeight:"700", marginBottom:"8px" }}>JIS, SPI</div>
          <div style={{ fontSize:"clamp(7px, 2vw, 8px)", color:"#64748b", marginBottom:"3px", fontWeight:"600" }}>Tie bar Clearance</div>
          <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"#1e40af", fontWeight:"700", marginBottom:"8px" }}>JIS, SPI</div>
          <div style={{ fontSize:"clamp(7px, 2vw, 8px)", color:"#64748b", marginBottom:"3px", fontWeight:"600" }}>Overall Platen Size</div>
          <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"#1e40af", fontWeight:"700", marginBottom:"8px" }}>JIS, SPI</div>
          <div style={{ fontSize:"clamp(6px, 2vw, 7px)", color:"#94a3b8", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"2px" }}>
            {["55","85","110","144","200"].map((v,i) => <span key={i} style={{ background:"#f1f5f9", borderRadius:"2px", padding:"2px 3px", textAlign:"center" }}>{v}</span>)}
          </div>
          <div style={{ fontSize:"clamp(6px, 2vw, 7px)", color:"#64748b", marginTop:"3px" }}>US Tonnage</div>
        </div>

        {/* Right panel */}
        <div>
          <div style={{ background:"#1d4ed8", padding:"clamp(4px, 1.5vw, 8px) clamp(8px, 2vw, 12px)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2px" }}>
                {Array(9).fill(0).map((_,i) => <div key={i} style={{ width:3, height:3, background:"rgba(255,255,255,0.6)", borderRadius:"1px" }} />)}
              </div>
              <span style={{ fontSize:"clamp(8px, 2vw, 10px)", fontWeight:"700", color:"white", marginLeft:"6px" }}>OPTIONS</span>
            </div>
            <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" width="14" height="14">
              <circle cx="7" cy="7" r="5" /><path d="M11 11l3 3" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display:"flex", borderBottom:"1px solid #e2e8f0" }}>
            {["All","B","C","D","Q","X"].map((t,i) => (
              <div key={i} style={{
                flex:1, padding:"clamp(3px, 1.5vw, 5px) 0", textAlign:"center",
                fontSize:"clamp(7px, 2vw, 9px)", fontWeight:"700",
                background: i===0 ? "white" : "#f8fafc",
                color: i===0 ? "#1d4ed8" : "#94a3b8",
                borderBottom: i===0 ? "2px solid #1d4ed8" : "none",
                borderRight: i < 5 ? "1px solid #e2e8f0" : "none",
              }}>{t}</div>
            ))}
          </div>
          <div style={{ maxHeight:"clamp(200px, 40vh, 240px)", overflowY:"auto" }}>
            {[
              {label:"Power Unit for cores",checked:false},
              {label:"Pneumatic ejector",checked:false},
              {label:"Cavity ventilator",checked:true,active:true},
              {label:"Core Pull control circuit (manual setting)",checked:false},
              {label:"Core Pull control circuit (Remote control)",checked:false},
              {label:"Core Pull circuit (Remote, Pump Hydraulic)",checked:true},
              {label:"Pneumatic core pull control circuit",checked:false},
              {label:"Rotating core control circuit",checked:false},
              {label:"SPI take-out robot connection circuit",checked:false},
              {label:"Products chute",checked:false},
            ].map((opt, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:"8px",
                padding:"clamp(4px, 1.5vw, 5px) clamp(8px, 2vw, 10px)",
                background: opt.active ? "#eff6ff" : "white",
                borderBottom:"1px solid #f1f5f9",
              }}>
                <div style={{
                  width:12, height:12, borderRadius:"50%", flexShrink:0,
                  border: opt.checked ? "none" : "1.5px solid #cbd5e1",
                  background: opt.checked ? "linear-gradient(135deg,#1d4ed8,#4f46e5)" : "white",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  {opt.checked && <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" width="8" height="8"><polyline points="2 5 4 7 8 3" /></svg>}
                </div>
                <span style={{ fontSize:"clamp(7px, 2vw, 8px)", color: opt.active ? "#1e40af" : "#475569", fontWeight: opt.active ? "600" : "400", lineHeight:1.3 }}>{opt.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function DataCentricLogistics() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background:"linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight:"100vh",
        padding:"clamp(60px, 10vw, 90px) clamp(20px, 5vw, 48px) clamp(80px, 10vw, 110px)",
        fontFamily:"'DM Sans','Segoe UI',sans-serif",
        position:"relative",
        overflow:"hidden",
      }}
    >
      {/* Ambient bg – hidden on mobile */}
      <div className="ambient-bg" style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-80px", right:"10%", width:"min(500px, 80vw)", height:"min(400px, 60vh)", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"15%", width:"min(440px, 70vw)", height:"min(340px, 50vh)", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>

      <div style={{ maxWidth:"1240px", margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Responsive two‑column grid – stacks on ≤1024px */}
        <div className="supply-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px, 6vw, 72px)", alignItems:"center" }}>

          {/* LEFT: Tablet mockup + floating badges */}
          <div style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute", inset:"-40px", background:"radial-gradient(ellipse at center,rgba(37,99,235,0.15),transparent 65%)", borderRadius:"50%", zIndex:0 }} />
            <div style={{ position:"relative", zIndex:1, transform:"rotate(-2deg)", width:"100%" }}>
              <TabletMockup />
            </div>
            {/* Floating badges (reposition/hide on mobile) */}
            <div className="badge-bottom-right" style={{
              position:"absolute", bottom:"10%", right:"-10px", zIndex:3,
              padding:"clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)", borderRadius:"14px",
              background:"rgba(4,21,48,0.9)", border:"1px solid rgba(59,130,246,0.25)",
              backdropFilter:"blur(12px)", boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
              display:"flex", alignItems:"center", gap:"clamp(8px, 2vw, 12px)",
            }}>
              <div style={{ width:"clamp(24px, 5vw, 32px)", height:"clamp(24px, 5vw, 32px)", borderRadius:"8px", background:"linear-gradient(135deg,#059669,#10b981)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5" width="clamp(10px, 3vw, 14px)" height="clamp(10px, 3vw, 14px)">
                  <polyline points="4 10 8 14 16 6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize:"clamp(10px, 2.5vw, 12px)", fontWeight:"800", color:"white" }}>40% Cost Reduction</div>
                <div style={{ fontSize:"clamp(8px, 2vw, 10px)", color:"rgba(148,163,184,0.65)" }}>via ML optimization</div>
              </div>
            </div>

            <div className="badge-top-left" style={{
              position:"absolute", top:"8%", left:"-10px", zIndex:3,
              padding:"clamp(6px, 2vw, 10px) clamp(10px, 2.5vw, 14px)", borderRadius:"12px",
              background:"rgba(4,21,48,0.9)", border:"1px solid rgba(99,102,241,0.25)",
              backdropFilter:"blur(12px)", boxShadow:"0 8px 24px rgba(0,0,0,0.4)",
              display:"flex", alignItems:"center", gap:"clamp(8px, 2vw, 10px)",
            }}>
              <div style={{ width:"clamp(22px, 4vw, 28px)", height:"clamp(22px, 4vw, 28px)", borderRadius:"8px", background:"linear-gradient(135deg,#7c3aed,#6366f1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" width="clamp(10px, 3vw, 13px)" height="clamp(10px, 3vw, 13px)">
                  <path d="M10 2v8M10 14v4" strokeLinecap="round" /><circle cx="10" cy="12" r="2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize:"clamp(9px, 2.5vw, 11px)", fontWeight:"800", color:"white" }}>Live Sensor Data</div>
                <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"rgba(148,163,184,0.65)" }}>2.4M data points/sec</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            {/* Badge */}
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"6px 18px", borderRadius:"100px",
              background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
              color:"#60a5fa", fontSize:"clamp(10px, 2.5vw, 11px)", fontWeight:"700",
              letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"22px",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
              Data & Analytics
            </span>

            {/* Heading */}
            <h2 style={{
              fontSize:"clamp(26px, 5vw, 44px)", fontWeight:"900",
              textTransform:"uppercase", letterSpacing:"0.04em",
              lineHeight:1.1, margin:"0 0 16px", color:"white",
            }}>
              Data-Centric{" "}
              <span style={{ background:"linear-gradient(90deg,#60a5fa,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Logistics
              </span>
              <br />&{" "}
              <span style={{ background:"linear-gradient(90deg,#93c5fd,#c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Supply Chain
              </span>
            </h2>

            {/* Divider */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"18px" }}>
              <div style={{ height:"1px", width:"clamp(40px, 10vw, 60px)", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
              <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#3b82f6" }} />
              <div style={{ height:"1px", width:"clamp(40px, 10vw, 60px)", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
            </div>

            {/* Description */}
            <p style={{
              fontSize:"clamp(14px, 2.5vw, 15px)", lineHeight:"1.9",
              color:"rgba(148,163,184,0.88)", margin:"0 0 36px",
            }}>
              Data is a key element of a supply chain system. Use automotive and logistics software solutions with Big Data and Machine Learning to gather information from sensors. Then, view it on a single dashboard to gain competitive insights. Need more reliable data on your operations? Introduce user-friendly reporting software for the manufacturing line or warehousing.
            </p>

            {/* Features grid – 2 columns on desktop, 1 on mobile */}
            <div className="features-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(10px, 2vw, 12px)" }}>
              {features.map((f, i) => {
                const isHov = hovered === i;
                const isLast = i === features.length - 1;
                return (
                  <div
                    key={f.id}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      gridColumn: isLast ? "1 / -1" : "auto",
                      display:"flex", alignItems:"flex-start", gap:"clamp(12px, 2.5vw, 14px)",
                      padding:"clamp(14px, 2.5vw, 16px) clamp(14px, 2.5vw, 18px)",
                      borderRadius:"14px",
                      border: isHov ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      background: isHov ? "linear-gradient(135deg,rgba(29,78,216,0.16),rgba(99,102,241,0.07))" : "rgba(255,255,255,0.03)",
                      boxShadow: isHov ? "0 8px 32px -8px rgba(37,99,235,0.35)" : "none",
                      transform: isHov ? "translateY(-4px)" : "translateY(0)",
                      transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                      cursor:"pointer",
                      position:"relative",
                      overflow:"hidden",
                    }}
                  >
                    {/* Top accent bar */}
                    <div style={{
                      position:"absolute", top:0, left:"16px", right:"16px", height:"2px",
                      borderRadius:"0 0 2px 2px",
                      background:"linear-gradient(90deg,#1d4ed8,#6366f1)",
                      opacity: isHov ? 1 : 0,
                      transition:"opacity 0.3s",
                    }} />

                    {/* Icon */}
                    <div style={{
                      width:"clamp(44px, 8vw, 48px)", height:"clamp(44px, 8vw, 48px)", borderRadius:"12px", flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
                      border: isHov ? "1.5px solid rgba(59,130,246,0.4)" : "1.5px solid rgba(255,255,255,0.07)",
                      color: isHov ? "#60a5fa" : "rgba(148,163,184,0.45)",
                      filter: isHov ? "drop-shadow(0 0 10px rgba(59,130,246,0.5))" : "none",
                      transform: isHov ? "scale(1.06)" : "scale(1)",
                      transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    }}>
                      {f.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex:1 }}>
                      <div style={{
                        fontSize:"clamp(13px, 2.5vw, 14px)", fontWeight:"700",
                        color: isHov ? "#f1f5f9" : "rgba(148,163,184,0.8)",
                        letterSpacing:"0.01em", marginBottom:"4px",
                        transition:"color 0.3s",
                      }}>
                        {f.title}
                      </div>
                      <div style={{
                        fontSize:"clamp(10px, 2vw, 11px)", lineHeight:"1.6",
                        color: isHov ? "rgba(148,163,184,0.75)" : "rgba(100,116,139,0.6)",
                        transition:"color 0.3s",
                      }}>
                        {f.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Responsive CSS media queries */}
      <style>{`
        @media (max-width: 1024px) {
          .supply-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .ambient-bg {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .badge-bottom-right {
            bottom: 5% !important;
            right: -5px !important;
            padding: 6px 12px !important;
          }
          .badge-top-left {
            top: 2% !important;
            left: -5px !important;
            padding: 6px 10px !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .badge-bottom-right, .badge-top-left {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}