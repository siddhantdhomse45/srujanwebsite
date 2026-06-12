import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Supply Chain Management Systems",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="4" y="18" width="12" height="10" rx="2" />
        <rect x="20" y="10" width="12" height="10" rx="2" />
        <rect x="36" y="18" width="8" height="10" rx="2" />
        <path d="M16 23h4M32 23h4M26 20v-4" strokeLinecap="round" />
        <path d="M8 28v6l4 4h24l4-4v-6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="38" r="3" />
        <circle cx="34" cy="38" r="3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Custom IoT Solutions",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <circle cx="24" cy="24" r="6" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" strokeLinecap="round" />
        <path d="M11.5 11.5l3 3M33.5 33.5l3 3M11.5 36.5l3-3M33.5 14.5l3-3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="14" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Blockchain & Smart Contracts",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <rect x="20" y="8" width="12" height="10" rx="2" />
        <rect x="34" y="8" width="8" height="10" rx="2" />
        <path d="M6 18h36" strokeLinecap="round" />
        <rect x="6" y="28" width="12" height="10" rx="2" />
        <rect x="20" y="28" width="12" height="10" rx="2" />
        <rect x="34" y="28" width="8" height="10" rx="2" />
        <path d="M6 28h36" strokeLinecap="round" />
        <path d="M12 18v10M26 18v10M38 18v10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Smart Warehousing",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <path d="M4 20L24 8l20 12v22H4z" strokeLinejoin="round" />
        <path d="M16 42V28h16v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8v6" strokeLinecap="round" />
        <rect x="10" y="22" width="8" height="8" rx="1" />
        <rect x="30" y="22" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Real-time Vehicle Fleet Management",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="4" y="18" width="30" height="16" rx="3" />
        <path d="M34 22h6l6 8v6h-6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="36" r="5" />
        <circle cx="32" cy="36" r="5" />
        <circle cx="42" cy="36" r="4" />
        <path d="M4 26h30" />
        <path d="M14 18v-4M22 18v-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Dashboard mockup component (responsive)
const DashboardMockup = () => (
  <div style={{
    width: "100%",
    background: "linear-gradient(145deg,rgba(4,15,38,0.97),rgba(2,10,28,0.99))",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(59,130,246,0.2)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
  }}>
    {/* Top bar */}
    <div style={{ height: "36px", background: "rgba(37,99,235,0.15)", display: "flex", alignItems: "center", padding: "0 16px", gap: "8px", borderBottom: "1px solid rgba(59,130,246,0.15)" }}>
      {["#ef4444","#f59e0b","#10b981"].map((c,i) => <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c, opacity:0.8 }} />)}
      <div style={{ flex:1, height:"18px", background:"rgba(255,255,255,0.06)", borderRadius:"4px", marginLeft:"12px", maxWidth:"240px" }} />
    </div>
    {/* Header text */}
    <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid rgba(59,130,246,0.08)" }}>
      <div style={{ fontSize:"11px", fontWeight:"700", color:"#93c5fd", marginBottom:"8px", letterSpacing:"0.05em" }}>
        AF Gruppen Construction — Supply Chain Dashboard
      </div>
      <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
        {["1 Sep – 31 Sep","Fleet View","Analytics","Export"].map((t,i) => (
          <div key={i} style={{
            padding:"3px 10px", borderRadius:"4px", fontSize:"9px", fontWeight:"700",
            background: i===0 ? "linear-gradient(135deg,#1d4ed8,#4f46e5)" : "rgba(255,255,255,0.05)",
            color: i===0 ? "white" : "rgba(148,163,184,0.6)",
            border: i===0 ? "none" : "1px solid rgba(255,255,255,0.08)",
          }}>{t}</div>
        ))}
      </div>
    </div>
    {/* Table header */}
    <div style={{ display:"grid", gridTemplateColumns:"1fr 80px 1fr", gap:"0", padding:"8px 16px", borderBottom:"1px solid rgba(59,130,246,0.08)" }}>
      {["Name","Role","Schedule"].map((h,i) => (
        <div key={i} style={{ fontSize:"8px", fontWeight:"800", color:"rgba(100,116,139,0.7)", letterSpacing:"0.12em", textTransform:"uppercase" }}>{h}</div>
      ))}
    </div>
    {/* Rows */}
    {[
      {name:"Jason Manning",role:"Driver",bar:70,color:"#3b82f6",dot:true},
      {name:"Francis Benson",role:"Driver",bar:45,color:"#6366f1"},
      {name:"Olga Cooper",role:"Driver",bar:85,color:"#3b82f6",dot:true},
      {name:"Abboud Caliph",role:"Driver",bar:55,color:"#8b5cf6"},
      {name:"Dora Fleming",role:"Driver",bar:40,color:"#3b82f6"},
      {name:"Herbert Hammond",role:"Driver",bar:65,color:"#6366f1"},
      {name:"Stella Pope",role:"Driver",bar:30,color:"#3b82f6"},
      {name:"Mark May",role:"Fabricator",bar:75,color:"#10b981"},
      {name:"Minxi Barrett",role:"Fabricator",bar:90,color:"#10b981"},
      {name:"Mary Moody",role:"Fabricator",bar:50,color:"#f59e0b"},
      {name:"Ian Lawrence",role:"Fabricator",bar:60,color:"#10b981",dot:true},
    ].map((row, i) => (
      <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 80px 1fr", gap:"0", padding:"5px 16px", borderBottom:"1px solid rgba(255,255,255,0.03)", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
          {row.dot && <div style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", flexShrink:0 }} />}
          {!row.dot && <div style={{ width:6, height:6, borderRadius:"50%", flexShrink:0 }} />}
          <span style={{ fontSize:"9px", color:"rgba(226,232,240,0.75)", letterSpacing:"0.01em" }}>{row.name}</span>
        </div>
        <span style={{ fontSize:"8px", color:"rgba(100,116,139,0.6)" }}>{row.role}</span>
        <div style={{ display:"flex", alignItems:"center", gap:"3px" }}>
          <div style={{ height:"14px", width:`${row.bar}%`, background:`linear-gradient(90deg,${row.color}88,${row.color}44)`, borderRadius:"2px", border:`1px solid ${row.color}55` }} />
        </div>
      </div>
    ))}
  </div>
);

export default function SupplyChain() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "clamp(60px, 10vw, 90px) clamp(20px, 5vw, 48px) clamp(80px, 10vw, 110px)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient bg – hidden on narrow screens */}
      <div className="ambient-bg" style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-80px", left:"15%", width:"min(500px, 70vw)", height:"min(400px, 60vh)", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"10%", width:"min(440px, 60vw)", height:"min(360px, 50vh)", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>

      <div style={{ maxWidth:"1240px", margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Responsive two-column grid – stacks on ≤1024px */}
        <div className="supply-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px, 6vw, 80px)", alignItems:"center" }}>

          {/* ── LEFT: Content ── */}
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
              Supply Chain
            </span>

            {/* Heading */}
            <h2 style={{
              fontSize:"clamp(28px, 5vw, 46px)", fontWeight:"900",
              textTransform:"uppercase", letterSpacing:"0.04em",
              lineHeight:1.1, margin:"0 0 24px",
              color:"white",
            }}>
              Digital{" "}
              <span style={{ background:"linear-gradient(90deg,#60a5fa,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Transformation
              </span>
              <br />
              of Your{" "}
              <span style={{ background:"linear-gradient(90deg,#93c5fd,#c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Supply Chain
              </span>
            </h2>

            {/* Divider */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"22px" }}>
              <div style={{ height:"1px", width:"clamp(40px, 10vw, 60px)", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
              <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#3b82f6" }} />
              <div style={{ height:"1px", width:"clamp(40px, 10vw, 60px)", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
            </div>

            {/* Description */}
            <p style={{
              fontSize:"clamp(14px, 2.5vw, 15px)", lineHeight:"1.9",
              color:"rgba(148,163,184,0.88)", margin:"0 0 40px",
            }}>
              Build a scalable supply chain management system to streamline operations, reduce operating costs, and grow faster. Combine Smart Contracts on blockchain with IoT sensors to automate delivery and introduce pinpoint tracking on the manufacturing line. Use IoT-driven logistics software solutions in warehousing, and optimize processes like inventory management, picking, and auditing.
            </p>

            {/* Features list */}
            <div style={{ display:"flex", flexDirection:"column", gap:"clamp(8px, 2vw, 12px)" }}>
              {features.map((f, i) => {
                const isHov = hovered === i;
                return (
                  <div
                    key={f.id}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display:"flex", alignItems:"center", gap:"clamp(12px, 3vw, 18px)",
                      padding:"clamp(12px, 2vw, 14px) clamp(16px, 3vw, 20px)",
                      borderRadius:"14px",
                      border: isHov ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(255,255,255,0.05)",
                      background: isHov ? "linear-gradient(135deg,rgba(29,78,216,0.14),rgba(99,102,241,0.06))" : "rgba(255,255,255,0.02)",
                      boxShadow: isHov ? "0 8px 32px -8px rgba(37,99,235,0.3)" : "none",
                      transform: isHov ? "translateX(6px)" : "translateX(0)",
                      transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                      cursor:"pointer",
                      position:"relative",
                    }}
                  >
                    {/* Left accent */}
                    <div style={{
                      position:"absolute", left:0, top:"20%", bottom:"20%",
                      width:"3px", borderRadius:"2px",
                      background:"linear-gradient(to bottom,#1d4ed8,#6366f1)",
                      opacity: isHov ? 1 : 0,
                      transition:"opacity 0.3s",
                    }} />

                    {/* Icon */}
                    <div style={{
                      width:"clamp(44px, 8vw, 52px)", height:"clamp(44px, 8vw, 52px)", borderRadius:"14px", flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
                      border: isHov ? "1.5px solid rgba(59,130,246,0.4)" : "1.5px solid rgba(255,255,255,0.07)",
                      color: isHov ? "#60a5fa" : "rgba(148,163,184,0.45)",
                      filter: isHov ? "drop-shadow(0 0 10px rgba(59,130,246,0.45))" : "none",
                      transform: isHov ? "scale(1.06)" : "scale(1)",
                      transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    }}>
                      {f.icon}
                    </div>

                    {/* Title */}
                    <span style={{
                      fontSize:"clamp(13px, 2.5vw, 15px)", fontWeight:"700",
                      color: isHov ? "#f1f5f9" : "rgba(148,163,184,0.75)",
                      letterSpacing:"0.01em",
                      transition:"color 0.3s",
                      flex:1,
                    }}>
                      {f.title}
                    </span>

                    {/* Arrow */}
                    <div style={{
                      width:"clamp(24px, 5vw, 28px)", height:"clamp(24px, 5vw, 28px)", borderRadius:"50%", flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      border: isHov ? "1.5px solid rgba(96,165,250,0.5)" : "1.5px solid rgba(255,255,255,0.06)",
                      background: isHov ? "rgba(37,99,235,0.2)" : "transparent",
                      transform: isHov ? "translateX(3px)" : "translateX(0)",
                      transition:"all 0.35s ease",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={isHov ? "#60a5fa" : "rgba(71,85,105,0.5)"} strokeWidth="2" width="12" height="12">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Dashboard mockup (responsive laptop frame + floating badges) ── */}
          <div className="mockup-container" style={{ position:"relative" }}>
            {/* Laptop frame */}
            <div style={{ position:"relative" }}>
              {/* Glow behind laptop */}
              <div style={{
                position:"absolute", inset:"-20px",
                background:"radial-gradient(ellipse at center,rgba(37,99,235,0.2),transparent 65%)",
                borderRadius:"50%", zIndex:0,
              }} />

              {/* Laptop lid */}
              <div style={{
                position:"relative", zIndex:1,
                background:"linear-gradient(145deg,#1e293b,#0f172a)",
                borderRadius:"16px 16px 4px 4px",
                padding:"12px 12px 0",
                border:"1.5px solid rgba(59,130,246,0.2)",
                boxShadow:"0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}>
                {/* Camera */}
                <div style={{ display:"flex", justifyContent:"center", marginBottom:"8px" }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,0.15)" }} />
                </div>
                {/* Screen */}
                <DashboardMockup />
              </div>

              {/* Laptop base */}
              <div style={{
                position:"relative", zIndex:1,
                height:"clamp(12px, 3vw, 18px)",
                background:"linear-gradient(145deg,#1e293b,#0f172a)",
                borderRadius:"0 0 8px 8px",
                border:"1.5px solid rgba(59,130,246,0.2)",
                borderTop:"none",
                boxShadow:"0 8px 24px rgba(0,0,0,0.5)",
              }}>
                <div style={{ width:"clamp(40px, 10vw, 60px)", height:"4px", borderRadius:"0 0 4px 4px", background:"rgba(255,255,255,0.08)", margin:"0 auto" }} />
              </div>

              {/* Floating badges – reposition on smaller screens */}
              <div className="badge-top-right" style={{
                position:"absolute", top:"-16px", right:"-16px", zIndex:3,
                padding:"clamp(6px, 2vw, 10px) clamp(12px, 3vw, 16px)", borderRadius:"12px",
                background:"rgba(4,21,48,0.92)", border:"1px solid rgba(59,130,246,0.3)",
                backdropFilter:"blur(12px)",
                display:"flex", alignItems:"center", gap:"clamp(6px, 2vw, 10px)",
                boxShadow:"0 8px 24px rgba(0,0,0,0.5)",
              }}>
                <div style={{ width:"clamp(22px, 5vw, 28px)", height:"clamp(22px, 5vw, 28px)", borderRadius:"8px", background:"linear-gradient(135deg,#1d4ed8,#4f46e5)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="clamp(10px, 3vw, 14px)" height="clamp(10px, 3vw, 14px)">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize:"clamp(10px, 2.5vw, 11px)", fontWeight:"800", color:"white" }}>Live Tracking</div>
                  <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"rgba(148,163,184,0.6)" }}>Real-time updates</div>
                </div>
              </div>

              <div className="badge-bottom-left" style={{
                position:"absolute", bottom:"30px", left:"-16px", zIndex:3,
                padding:"clamp(6px, 2vw, 10px) clamp(12px, 3vw, 16px)", borderRadius:"12px",
                background:"rgba(4,21,48,0.92)", border:"1px solid rgba(16,185,129,0.3)",
                backdropFilter:"blur(12px)",
                display:"flex", alignItems:"center", gap:"clamp(6px, 2vw, 10px)",
                boxShadow:"0 8px 24px rgba(0,0,0,0.5)",
              }}>
                <div style={{ width:"clamp(22px, 5vw, 28px)", height:"clamp(22px, 5vw, 28px)", borderRadius:"8px", background:"linear-gradient(135deg,#059669,#10b981)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="clamp(10px, 3vw, 14px)" height="clamp(10px, 3vw, 14px)">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize:"clamp(10px, 2.5vw, 11px)", fontWeight:"800", color:"white" }}>98% On-Time</div>
                  <div style={{ fontSize:"clamp(8px, 2vw, 9px)", color:"rgba(148,163,184,0.6)" }}>Delivery rate</div>
                </div>
              </div>
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
          .mockup-container {
            order: -1;
          }
          .ambient-bg {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .badge-top-right {
            position: absolute !important;
            top: -8px !important;
            right: -8px !important;
          }
          .badge-bottom-left {
            position: absolute !important;
            bottom: 20px !important;
            left: -8px !important;
          }
        }
        @media (max-width: 640px) {
          .badge-top-right, .badge-bottom-left {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}