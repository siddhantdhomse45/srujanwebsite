import { useState } from "react";

export default function HeroSection() {
  const [hovBtn1, setHovBtn1] = useState(false);
  const [hovBtn2, setHovBtn2] = useState(false);
  
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      {/* ── Background image layer (simulated office scene) ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#0a1f3d 70%,#061228 100%)",
      }} />

      {/* Subtle people silhouette grid - decorative blurred shapes */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        {/* Large soft right-side glow to simulate photo lighting */}
        <div style={{
          position:"absolute", right:"-80px", top:"0", bottom:"0", width:"62%",
          background:"linear-gradient(135deg,transparent 0%,rgba(15,40,80,0.6) 30%,rgba(10,30,60,0.85) 100%)",
        }} />

        {/* Animated abstract shapes for depth */}
        <div style={{
          position:"absolute", right:"8%", top:"10%",
          width:"380px", height:"380px", borderRadius:"50%",
          background:"radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%)",
        }} />
        <div style={{
          position:"absolute", right:"20%", bottom:"5%",
          width:"280px", height:"280px", borderRadius:"50%",
          background:"radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)",
        }} />
        <div style={{
          position:"absolute", left:"35%", top:"20%",
          width:"200px", height:"200px", borderRadius:"50%",
          background:"radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)",
        }} />

        {/* Right half visual blocks — silhouette people suggestion */}
        <div style={{
          position:"absolute", right:"5%", top:"15%", bottom:"0", width:"55%",
          opacity:0.06,
          backgroundImage:"repeating-linear-gradient(0deg,rgba(255,255,255,0.5) 0px,rgba(255,255,255,0.5) 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,rgba(255,255,255,0.5) 0px,rgba(255,255,255,0.5) 1px,transparent 1px,transparent 60px)",
        }} />

        {/* Grid pattern overlay */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />

        {/* Left edge vignette */}
        <div style={{
          position:"absolute", left:0, top:0, bottom:0, width:"50%",
          background:"linear-gradient(to right,rgba(2,11,24,0.95) 0%,rgba(2,11,24,0.7) 60%,transparent 100%)",
        }} />

        {/* Top vignette */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:"200px",
          background:"linear-gradient(to bottom,rgba(2,11,24,0.9),transparent)",
        }} />

        {/* Bottom vignette */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0, height:"200px",
          background:"linear-gradient(to top,rgba(2,11,24,0.9),transparent)",
        }} />

        {/* Floating particle dots */}
        {[
          {top:"18%",left:"48%",size:3,opacity:0.4},
          {top:"32%",left:"62%",size:2,opacity:0.3},
          {top:"55%",left:"55%",size:4,opacity:0.25},
          {top:"70%",left:"70%",size:2,opacity:0.35},
          {top:"25%",left:"75%",size:3,opacity:0.3},
          {top:"80%",left:"45%",size:2,opacity:0.2},
          {top:"10%",left:"55%",size:2,opacity:0.3},
        ].map((dot, i) => (
          <div key={i} style={{
            position:"absolute",
            top:dot.top, left:dot.left,
            width:`${dot.size}px`, height:`${dot.size}px`,
            borderRadius:"50%",
            background:"#60a5fa",
            opacity:dot.opacity,
          }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 48px", position:"relative", zIndex:10, width:"100%" }}>
        <div style={{ maxWidth:"680px" }}>

          {/* Category badge */}
          <div style={{ marginBottom:"24px" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"7px 18px",
              borderRadius:"6px",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb)",
              color:"white",
              fontSize:"11px",
              fontWeight:"800",
              letterSpacing:"0.2em",
              textTransform:"uppercase",
              boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
            }}>
              <span style={{
                width:"6px", height:"6px", borderRadius:"50%",
                background:"rgba(255,255,255,0.8)", display:"inline-block",
              }} />
              IT Consulting
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontSize:"clamp(32px,5vw,62px)",
            fontWeight:"900",
            letterSpacing:"0.04em",
            textTransform:"uppercase",
            lineHeight:1.1,
            margin:"0 0 28px",
            color:"white",
          }}>
            IT Consulting Services{" "}
            <br />
            <span style={{
              background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
            }}>
              Trusted By
            </span>
            <br />
            Fortune 500 Brands
          </h1>

          {/* Description */}
          <p style={{
            fontSize:"16px",
            lineHeight:"1.85",
            color:"rgba(148,163,184,0.9)",
            maxWidth:"560px",
            margin:"0 0 44px",
          }}>
            We offer IT consulting services tailored to help your business evolve and thrive. Let's partner to design innovative solutions your customers will love, driving your company forward with technology that meets your unique needs.
          </p>

          {/* CTA Buttons */}
          <div style={{ display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap" }}>
            {/* Primary button */}
            <button
              onMouseEnter={() => setHovBtn1(true)}
              onMouseLeave={() => setHovBtn1(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"16px 32px",
                borderRadius:"10px",
                border:"none",
                background: hovBtn1
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color:"white",
                fontSize:"13px",
                fontWeight:"800",
                letterSpacing:"0.12em",
                textTransform:"uppercase",
                cursor:"pointer",
                boxShadow: hovBtn1
                  ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                  : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovBtn1 ? "translateY(-3px)" : "translateY(0)",
                transition:"all 0.3s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" />
              </svg>
              Book a Free Consultation
            </button>

            {/* Secondary button */}
            <button
              onMouseEnter={() => setHovBtn2(true)}
              onMouseLeave={() => setHovBtn2(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"15px 32px",
                borderRadius:"10px",
                border: hovBtn2 ? "1.5px solid rgba(96,165,250,0.7)" : "1.5px solid rgba(255,255,255,0.2)",
                background: hovBtn2
                  ? "rgba(37,99,235,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: hovBtn2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
                fontSize:"13px",
                fontWeight:"800",
                letterSpacing:"0.12em",
                textTransform:"uppercase",
                cursor:"pointer",
                boxShadow: hovBtn2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
                transform: hovBtn2 ? "translateY(-3px)" : "translateY(0)",
                transition:"all 0.3s ease",
                backdropFilter:"blur(8px)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Portfolio
            </button>
          </div>

          {/* Trust indicators */}
          <div style={{
            display:"flex", alignItems:"center", gap:"32px",
            marginTop:"56px",
            paddingTop:"32px",
            borderTop:"1px solid rgba(59,130,246,0.15)",
          }}>
            {[
              { value:"500+", label:"Fortune Clients" },
              { value:"15+", label:"Years Experience" },
              { value:"98%", label:"Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} style={{ display:"flex", flexDirection:"column", gap:"4px" }}>
                <span style={{
                  fontSize:"26px",
                  fontWeight:"900",
                  background:"linear-gradient(135deg,#ffffff,#60a5fa)",
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                  lineHeight:1,
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize:"12px",
                  fontWeight:"600",
                  letterSpacing:"0.08em",
                  textTransform:"uppercase",
                  color:"rgba(100,116,139,0.8)",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Dividers between stats */}
          </div>

        </div>
      </div>

      {/* Right side decorative tech lines */}
      <div style={{
        position:"absolute", right:0, top:"50%", transform:"translateY(-50%)",
        width:"40%", height:"80%", pointerEvents:"none", zIndex:5,
        display:"flex", flexDirection:"column", justifyContent:"center",
        padding:"0 60px",
        gap:"18px",
      }}>
        {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
          <div key={i} style={{
            height:"1px",
            width:`${w}%`,
            background:"linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
            alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
            opacity:0.6,
          }} />
        ))}

        {/* Floating badge */}
        <div style={{
          position:"absolute",
          top:"20%", right:"60px",
          padding:"14px 20px",
          borderRadius:"14px",
          background:"rgba(4,21,48,0.85)",
          border:"1px solid rgba(59,130,246,0.25)",
          backdropFilter:"blur(12px)",
          display:"flex", alignItems:"center", gap:"12px",
          boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            width:"36px", height:"36px", borderRadius:"50%",
            background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>Fortune 500</div>
            <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.7)", letterSpacing:"0.05em" }}>Trusted Partner</div>
          </div>
        </div>

        {/* Second badge */}
        <div style={{
          position:"absolute",
          bottom:"22%", right:"80px",
          padding:"12px 18px",
          borderRadius:"12px",
          background:"rgba(4,21,48,0.85)",
          border:"1px solid rgba(59,130,246,0.2)",
          backdropFilter:"blur(12px)",
          display:"flex", alignItems:"center", gap:"10px",
          boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            width:"32px", height:"32px", borderRadius:"50%",
            background:"linear-gradient(135deg,#059669,#0d9488)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>ISO Certified</div>
            <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.7)" }}>Quality Assured</div>
          </div>
        </div>
      </div>

    </section>
  );
}  