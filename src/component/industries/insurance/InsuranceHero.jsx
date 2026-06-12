import { useState } from "react";

const stats = [
  { value: "200+", label: "Insurance Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Client Retention" },
  { value: "50+", label: "Countries Served" },
];

const tags = ["InsurTech", "Claims Automation", "Risk Analytics", "Policy Management", "AI Underwriting"];

export default function InsuranceHero() {
  const [hovTalk, setHovTalk] = useState(false);
  const [hovPortfolio, setHovPortfolio] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#061d42 70%,#020e24 100%)",
      }}
    >
      {/* ── Background layers ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        {/* Large ambient blobs */}
        <div style={{ position:"absolute", top:"-100px", left:"-80px", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.18),transparent 65%)" }} />
        <div style={{ position:"absolute", bottom:"-100px", right:"-60px", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.14),transparent 65%)" }} />
        <div style={{ position:"absolute", top:"30%", right:"25%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.09),transparent 70%)" }} />

        {/* Grid */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />

        {/* Right-side abstract office silhouette shapes – hidden on mobile */}
        <div className="silhouette-shapes" style={{
          position:"absolute", right:"8%", top:"10%", bottom:0,
          width:"28%",
          background:"linear-gradient(180deg,rgba(37,99,235,0.06) 0%,rgba(37,99,235,0.02) 100%)",
          borderRadius:"200px 200px 0 0",
          filter:"blur(2px)",
        }} />
        <div className="silhouette-shapes" style={{
          position:"absolute", right:"24%", top:"18%", bottom:0,
          width:"18%",
          background:"linear-gradient(180deg,rgba(99,102,241,0.07) 0%,rgba(99,102,241,0.02) 100%)",
          borderRadius:"200px 200px 0 0",
          filter:"blur(2px)",
        }} />

        {/* Diagonal lines */}
        <div style={{
          position:"absolute", right:0, top:0, bottom:0, width:"55%",
          backgroundImage:"repeating-linear-gradient(-45deg,rgba(59,130,246,0.02) 0px,rgba(59,130,246,0.02) 1px,transparent 1px,transparent 40px)",
        }} />

        {/* Right gradient fade */}
        <div style={{
          position:"absolute", right:0, top:0, bottom:0, width:"45%",
          background:"linear-gradient(to left,rgba(6,29,66,0.3),transparent)",
        }} />

        {/* Floating particles – hidden on mobile */}
        <div className="particles">
          {[
            {top:"12%",left:"52%",s:3,o:0.5},{top:"28%",left:"68%",s:2,o:0.35},
            {top:"55%",left:"58%",s:4,o:0.25},{top:"72%",left:"74%",s:2,o:0.4},
            {top:"18%",left:"78%",s:3,o:0.3},{top:"82%",left:"48%",s:2,o:0.2},
            {top:"40%",left:"88%",s:2,o:0.3},{top:"65%",left:"86%",s:3,o:0.25},
          ].map((d, i) => (
            <div key={i} style={{
              position:"absolute", top:d.top, left:d.left,
              width:`${d.s}px`, height:`${d.s}px`,
              borderRadius:"50%", background:"#60a5fa", opacity:d.o,
            }} />
          ))}
        </div>

        {/* Decorative horizontal lines */}
        <div className="decor-lines">
          {[20,35,50,65,78].map((top,i) => (
            <div key={i} style={{
              position:"absolute", top:`${top}%`,
              right:"5%", width:`${[120,80,140,90,110][i]}px`, height:"1px",
              background:`linear-gradient(to left,rgba(59,130,246,${[0.3,0.2,0.4,0.15,0.25][i]}),transparent)`,
            }} />
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 clamp(20px,5vw,48px)", position:"relative", zIndex:10, width:"100%" }}>
        <div style={{ maxWidth:"min(700px,100%)" }}>

          {/* Badge */}
          <div style={{ marginBottom:"28px", display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"7px 18px", borderRadius:"6px",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb)",
              color:"white", fontSize:"clamp(10px,3vw,11px)", fontWeight:"800",
              letterSpacing:"0.2em", textTransform:"uppercase",
              boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,0.8)", display:"inline-block" }} />
              Insurance Software
            </span>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"6px",
              padding:"6px 14px", borderRadius:"6px",
              background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.3)",
              color:"#34d399", fontSize:"clamp(10px,3vw,11px)", fontWeight:"700", letterSpacing:"0.1em",
            }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:"#10b981", display:"inline-block" }} />
              Trusted Globally
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize:"clamp(30px,6vw,62px)",
            fontWeight:"900",
            letterSpacing:"0.04em",
            textTransform:"uppercase",
            lineHeight:1.1,
            margin:"0 0 28px",
            color:"white",
          }}>
            Custom Insurance{" "}
            <span style={{
              background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>
              Software
            </span>
            <br />
            Development{" "}
            <span style={{
              background:"linear-gradient(90deg,#93c5fd,#c4b5fd)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>
              Services
            </span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize:"clamp(14px,2.5vw,16px)",
            lineHeight:"1.85",
            color:"rgba(148,163,184,0.9)",
            maxWidth:"580px", margin:"0 0 36px",
          }}>
            We are a paramount global provider of software solutions for the insurance industry. We help the world's insurance organizations to boost their efficiency, profitability, and safety through innovative digital transformation technologies.
          </p>

          {/* Tech tags */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"40px" }}>
            {tags.map((tag, i) => (
              <span key={i} style={{
                padding:"5px 14px", borderRadius:"8px",
                fontSize:"clamp(10px,2.5vw,11px)", fontWeight:"700",
                letterSpacing:"0.1em", textTransform:"uppercase",
                color:"#60a5fa",
                background:"rgba(37,99,235,0.1)",
                border:"1px solid rgba(59,130,246,0.2)",
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons – responsive */}
          <div className="hero-buttons" style={{ display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap", marginBottom:"56px" }}>
            <button
              onMouseEnter={() => setHovTalk(true)}
              onMouseLeave={() => setHovTalk(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"clamp(14px,2vw,16px) clamp(28px,4vw,36px)",
                borderRadius:"10px", border:"none",
                background: hovTalk
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color:"white", fontSize:"clamp(12px,2vw,13px)", fontWeight:"800",
                letterSpacing:"0.12em", textTransform:"uppercase", cursor:"pointer",
                boxShadow: hovTalk ? "0 16px 48px -4px rgba(37,99,235,0.75)" : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovTalk ? "translateY(-3px)" : "translateY(0)",
                transition:"all 0.3s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .84h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" strokeLinecap="round" />
              </svg>
              Talk To Us
            </button>

            <button
              onMouseEnter={() => setHovPortfolio(true)}
              onMouseLeave={() => setHovPortfolio(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"clamp(13px,2vw,15px) clamp(28px,4vw,32px)",
                borderRadius:"10px",
                border: hovPortfolio ? "1.5px solid rgba(96,165,250,0.7)" : "1.5px solid rgba(255,255,255,0.15)",
                background: hovPortfolio ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.04)",
                color: hovPortfolio ? "#93c5fd" : "rgba(255,255,255,0.8)",
                fontSize:"clamp(12px,2vw,13px)", fontWeight:"800",
                letterSpacing:"0.12em", textTransform:"uppercase", cursor:"pointer",
                boxShadow: hovPortfolio ? "0 0 24px rgba(37,99,235,0.25)" : "none",
                transform: hovPortfolio ? "translateY(-3px)" : "translateY(0)",
                transition:"all 0.3s ease", backdropFilter:"blur(8px)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Portfolio
            </button>
          </div>

          {/* Stats row – responsive */}
          <div className="stats-row" style={{
            display:"flex", gap:"0",
            padding:"clamp(20px,4vw,28px) clamp(20px,4vw,32px)",
            borderRadius:"16px",
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(59,130,246,0.12)",
            backdropFilter:"blur(12px)",
            maxWidth:"580px",
            flexWrap:"wrap",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                flex:1,
                textAlign:"center",
                borderRight: i < stats.length - 1 ? "1px solid rgba(59,130,246,0.12)" : "none",
                padding:"0 clamp(10px,2vw,16px)",
                marginBottom: "8px",
              }}>
                <div style={{
                  fontSize:"clamp(22px,5vw,26px)", fontWeight:"900", lineHeight:1, marginBottom:"6px",
                  background:"linear-gradient(135deg,#ffffff,#60a5fa)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize:"clamp(9px,2.5vw,10px)", fontWeight:"600", letterSpacing:"0.08em",
                  textTransform:"uppercase", color:"rgba(100,116,139,0.8)",
                  lineHeight:1.3,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right side floating info cards – hidden on mobile/tablet */}
      <div className="floating-cards" style={{ position:"absolute", right:"4%", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"16px", zIndex:8 }}>
        {[
          { icon:"🛡️", title:"Risk Management", sub:"AI-powered assessment" },
          { icon:"📋", title:"Policy Automation", sub:"End-to-end digital" },
          { icon:"⚡", title:"Fast Claims", sub:"Real-time processing" },
        ].map((card, i) => (
          <div key={i} style={{
            padding:"14px 18px",
            borderRadius:"14px",
            background:"rgba(4,21,48,0.85)",
            border:"1px solid rgba(59,130,246,0.2)",
            backdropFilter:"blur(12px)",
            display:"flex", alignItems:"center", gap:"12px",
            boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
            minWidth:"200px",
          }}>
            <span style={{ fontSize:"22px" }}>{card.icon}</span>
            <div>
              <div style={{ fontSize:"13px", fontWeight:"800", color:"white", marginBottom:"2px" }}>{card.title}</div>
              <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.65)" }}>{card.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive CSS (media queries) */}
      <style>{`
        @media (max-width: 1024px) {
          .floating-cards {
            display: none !important;
          }
          .silhouette-shapes {
            display: none !important;
          }
          .particles {
            display: none !important;
          }
          .decor-lines {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .hero-buttons button {
            width: 100%;
            justify-content: center;
          }
          .stats-row {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          .stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(59,130,246,0.12);
            padding-bottom: 12px;
            margin-bottom: 8px;
            width: 100%;
          }
          .stats-row > div:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}