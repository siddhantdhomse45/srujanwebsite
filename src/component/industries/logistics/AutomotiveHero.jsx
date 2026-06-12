import { useState } from "react";

const stats = [
  { value: "300+", label: "Projects Delivered" },
  { value: "20+", label: "Years Experience" },
  { value: "50+", label: "Global Partners" },
  { value: "99%", label: "Uptime Guarantee" },
];

const tags = ["IoT Fleet Tracking", "Big Data Analytics", "AR/VR Training", "Predictive Maintenance", "Autonomous Systems"];

export default function AutomotiveHero() {
  const [hovContact, setHovContact] = useState(false);
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
      {/* ── Background layers (responsive → hidden on small screens) ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        {/* Ambient blobs – responsive size */}
        <div style={{ position:"absolute", top:"-100px", left:"-60px", width:"min(600px,80vw)", height:"min(600px,80vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.2),transparent 65%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"-40px", width:"min(500px,70vw)", height:"min(500px,70vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.14),transparent 65%)" }} />
        <div style={{ position:"absolute", top:"35%", right:"28%", width:"min(280px,50vw)", height:"min(280px,50vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.08),transparent 70%)" }} />

        {/* Grid */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />

        {/* Road perspective lines — right half (hidden on mobile) */}
        <div className="road-lines" style={{ position:"absolute", right:0, top:0, bottom:0, width:"55%", pointerEvents:"none" }}>
          {[
            { x1:"50%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"40%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"60%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"25%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"75%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"10%", y1:"0%", x2:"50%", y2:"100%" },
            { x1:"90%", y1:"0%", x2:"50%", y2:"100%" },
          ].map((line, i) => (
            <svg key={i} style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke={`rgba(59,130,246,${[0.12,0.08,0.08,0.05,0.05,0.03,0.03][i]})`} strokeWidth="0.3" />
            </svg>
          ))}
        </div>

        {/* Moving road dashes */}
        <div style={{ position:"absolute", right:"22%", top:0, bottom:0, width:"2px", background:"linear-gradient(to bottom,transparent,rgba(59,130,246,0.15) 20%,rgba(59,130,246,0.15) 80%,transparent)", backgroundSize:"1px 40px" }} />

        {/* Right gradient fade */}
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"40%", background:"linear-gradient(to left,rgba(6,29,66,0.25),transparent)" }} />

        {/* Left content fade */}
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"50%", background:"linear-gradient(to right,rgba(2,11,24,0.7) 0%,rgba(2,11,24,0.4) 70%,transparent 100%)" }} />

        {/* Floating particles (hidden on mobile) */}
        <div className="particles">
          {[
            {top:"10%",left:"50%",s:3,o:0.5},{top:"25%",left:"65%",s:2,o:0.35},
            {top:"50%",left:"58%",s:4,o:0.2},{top:"70%",left:"72%",s:2,o:0.4},
            {top:"15%",left:"80%",s:3,o:0.3},{top:"80%",left:"48%",s:2,o:0.2},
            {top:"38%",left:"88%",s:2,o:0.28},{top:"62%",left:"84%",s:3,o:0.22},
            {top:"45%",left:"42%",s:2,o:0.15},{top:"88%",left:"60%",s:2,o:0.2},
          ].map((d, i) => (
            <div key={i} style={{ position:"absolute", top:d.top, left:d.left, width:`${d.s}px`, height:`${d.s}px`, borderRadius:"50%", background:"#60a5fa", opacity:d.o }} />
          ))}
        </div>

        {/* Horizontal speed lines on right (hidden on mobile) */}
        <div className="speed-lines">
          {[15,28,42,55,68,80].map((top, i) => (
            <div key={i} style={{
              position:"absolute", top:`${top}%`,
              right:"4%", width:`${[100,60,140,80,110,70][i]}px`, height:"1px",
              background:`linear-gradient(to left,rgba(59,130,246,${[0.3,0.15,0.4,0.2,0.25,0.18][i]}),transparent)`,
            }} />
          ))}
        </div>

        {/* Vehicle silhouettes — hidden on mobile */}
        <div className="vehicle-silhouettes">
          <div style={{ position:"absolute", bottom:"15%", right:"12%", width:"160px", height:"60px", borderRadius:"8px 8px 4px 4px", background:"rgba(37,99,235,0.06)", border:"1px solid rgba(59,130,246,0.1)", backdropFilter:"blur(2px)" }} />
          <div style={{ position:"absolute", bottom:"18%", right:"12%", width:"70px", height:"30px", borderRadius:"6px 6px 0 0", background:"rgba(37,99,235,0.05)", border:"1px solid rgba(59,130,246,0.08)", margin:"0 auto", marginLeft:"45px" }} />
          <div style={{ position:"absolute", top:"20%", right:"28%", width:"100px", height:"42px", borderRadius:"5px 5px 3px 3px", background:"rgba(99,102,241,0.05)", border:"1px solid rgba(99,102,241,0.1)" }} />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 clamp(20px,5vw,48px)", position:"relative", zIndex:10, width:"100%" }}>
        <div style={{ maxWidth:"min(680px,100%)" }}>

          {/* Badge */}
          <div style={{ marginBottom:"24px", display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"7px 18px", borderRadius:"6px",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb)",
              color:"white", fontSize:"clamp(10px,3vw,11px)", fontWeight:"800",
              letterSpacing:"0.2em", textTransform:"uppercase",
              boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,0.8)", display:"inline-block" }} />
              Automotive
            </span>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"6px",
              padding:"6px 14px", borderRadius:"6px",
              background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.3)",
              color:"#34d399", fontSize:"clamp(10px,3vw,11px)", fontWeight:"700", letterSpacing:"0.1em",
            }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:"#10b981", display:"inline-block" }} />
              Next-Gen Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize:"clamp(30px,6vw,64px)", fontWeight:"900",
            letterSpacing:"0.03em", textTransform:"uppercase",
            lineHeight:1.08, margin:"0 0 28px", color:"white",
          }}>
            Logistics &{" "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#a5b4fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Automotive
            </span>
            <br />Software{" "}
            <span style={{ background:"linear-gradient(90deg,#93c5fd,#c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Solutions
            </span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize:"clamp(14px,2.5vw,16px)", lineHeight:"1.9",
            color:"rgba(148,163,184,0.9)", maxWidth:"580px", margin:"0 0 32px",
          }}>
            Logistics and automotive software solutions with the latest tech give you an edge over competition across the board. Use Internet of Things (IoT) to track your operations and predict malfunction. Add Big Data solutions, and get valuable insights into your operations. Need to simplify employee on-boarding? Use Augmented and Virtual Reality training.
          </p>

          {/* Tech tags */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"40px" }}>
            {tags.map((tag, i) => (
              <span key={i} style={{
                padding:"5px 14px", borderRadius:"8px",
                fontSize:"clamp(10px,2.5vw,11px)", fontWeight:"700", letterSpacing:"0.1em", textTransform:"uppercase",
                color:"#60a5fa", background:"rgba(37,99,235,0.1)", border:"1px solid rgba(59,130,246,0.2)",
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs – responsive stacking */}
          <div className="hero-buttons" style={{ display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap", marginBottom:"56px" }}>
            <button
              onMouseEnter={() => setHovContact(true)}
              onMouseLeave={() => setHovContact(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"clamp(14px,2vw,16px) clamp(28px,4vw,36px)", borderRadius:"10px", border:"none",
                background: hovContact ? "linear-gradient(135deg,#2563eb,#4f46e5)" : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color:"white", fontSize:"clamp(12px,2vw,13px)", fontWeight:"800",
                letterSpacing:"0.12em", textTransform:"uppercase", cursor:"pointer",
                boxShadow: hovContact ? "0 16px 48px -4px rgba(37,99,235,0.75)" : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovContact ? "translateY(-3px)" : "translateY(0)",
                transition:"all 0.3s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.79 19.79 0 0 1 .99 2.82 2 2 0 0 1 3 .84h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" strokeLinecap="round" />
              </svg>
              Contact Us
            </button>

            <button
              onMouseEnter={() => setHovPortfolio(true)}
              onMouseLeave={() => setHovPortfolio(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"clamp(13px,2vw,15px) clamp(28px,4vw,32px)", borderRadius:"10px",
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              View Portfolio
            </button>
          </div>

          {/* Stats glass card – responsive wrap */}
          <div className="stats-row" style={{
            display:"flex", gap:"0",
            padding:"clamp(20px,4vw,24px) clamp(20px,4vw,28px)",
            borderRadius:"16px",
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(59,130,246,0.12)",
            backdropFilter:"blur(12px)",
            maxWidth:"560px",
            flexWrap:"wrap",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                flex:1, textAlign:"center",
                borderRight: i < stats.length - 1 ? "1px solid rgba(59,130,246,0.12)" : "none",
                padding:"0 clamp(10px,2vw,14px)",
                marginBottom: "8px",
              }}>
                <div style={{
                  fontSize:"clamp(20px,5vw,24px)", fontWeight:"900", lineHeight:1, marginBottom:"6px",
                  background:"linear-gradient(135deg,#ffffff,#60a5fa)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize:"clamp(9px,2.5vw,10px)", fontWeight:"600", letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(100,116,139,0.8)", lineHeight:1.3 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right floating feature cards – hidden on tablet/mobile */}
      <div className="floating-cards" style={{ position:"absolute", right:"4%", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"14px", zIndex:8 }}>
        {[
          { icon:"🚛", title:"Fleet Management", sub:"Real-time IoT tracking" },
          { icon:"🔮", title:"Predictive AI", sub:"Zero downtime systems" },
          { icon:"🥽", title:"AR/VR Training", sub:"Immersive onboarding" },
          { icon:"📊", title:"Big Data Insights", sub:"Operations analytics" },
        ].map((card, i) => (
          <div key={i} style={{
            padding:"12px 16px",
            borderRadius:"14px",
            background:"rgba(4,21,48,0.85)",
            border:"1px solid rgba(59,130,246,0.18)",
            backdropFilter:"blur(12px)",
            display:"flex", alignItems:"center", gap:"12px",
            boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
            minWidth:"clamp(180px, 20vw, 200px)",
          }}>
            <span style={{ fontSize:"20px" }}>{card.icon}</span>
            <div>
              <div style={{ fontSize:"12px", fontWeight:"800", color:"white", marginBottom:"2px" }}>{card.title}</div>
              <div style={{ fontSize:"10px", color:"rgba(148,163,184,0.65)" }}>{card.sub}</div>
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
          .road-lines, .particles, .speed-lines, .vehicle-silhouettes {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .hero-buttons button {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .stats-row {
            flex-direction: column;
            align-items: center;
            gap: 12px;
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