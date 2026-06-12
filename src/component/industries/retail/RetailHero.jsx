import { useState } from "react";

export default function RetailHero() {
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
      {/* ── Background image ── */}
      <img
        src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1800&q=80"
        alt="Retail shopping environment"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          filter: "brightness(0.38)",
        }}
      />

      {/* ── Dark blue gradient overlays ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg,rgba(2,11,24,0.92) 0%,rgba(4,21,48,0.75) 50%,rgba(2,11,24,0.6) 100%)",
      }} />

      {/* Left strong vignette */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "55%",
        background: "linear-gradient(to right,rgba(2,11,24,0.98) 0%,rgba(2,11,24,0.75) 60%,transparent 100%)",
      }} />

      {/* Top vignette */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "220px",
        background: "linear-gradient(to bottom,rgba(2,11,24,0.95),transparent)",
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
        background: "linear-gradient(to top,rgba(2,11,24,0.95),transparent)",
      }} />

      {/* Blueprint grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glows */}
      <div style={{
        position: "absolute", left: "5%", top: "20%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(37,99,235,0.1),transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "10%", bottom: "15%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(99,102,241,0.08),transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles – hidden on mobile via media query */}
      <div className="particles-container">
        {[
          { top: "18%", left: "50%", size: 3, opacity: 0.4 },
          { top: "35%", left: "65%", size: 2, opacity: 0.3 },
          { top: "60%", left: "55%", size: 4, opacity: 0.2 },
          { top: "72%", left: "72%", size: 2, opacity: 0.3 },
          { top: "22%", left: "78%", size: 3, opacity: 0.25 },
          { top: "82%", left: "48%", size: 2, opacity: 0.2 },
        ].map((d, i) => (
          <div key={i} style={{
            position: "absolute", top: d.top, left: d.left,
            width: `${d.size}px`, height: `${d.size}px`,
            borderRadius: "50%", background: "#60a5fa",
            opacity: d.opacity, pointerEvents: "none",
          }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 clamp(20px, 5vw, 48px)",
        position: "relative", zIndex: 10, width: "100%",
      }}>
        <div style={{ maxWidth: "min(680px, 100%)" }}>

          {/* Category badge */}
          <div style={{ marginBottom: "24px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "7px 18px", borderRadius: "6px",
              background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
              color: "white", fontSize: "clamp(10px, 3vw, 11px)", fontWeight: "800",
              letterSpacing: "0.2em", textTransform: "uppercase",
              boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "rgba(255,255,255,0.8)", display: "inline-block",
              }} />
              Ecommerce &amp; Retail
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 62px)",
            fontWeight: "900",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1.08,
            margin: "0 0 28px",
            color: "white",
          }}>
            Disrupting{" "}
            <span style={{
              background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Retail
            </span>
            <br />
            Applications
            <br />
            <span style={{
              background: "linear-gradient(90deg,#a5b4fc,#7dd3fc,#60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              &amp; Software
            </span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "1.85",
            color: "rgba(148,163,184,0.9)",
            maxWidth: "560px", margin: "0 0 44px",
          }}>
            Create new opportunities for your business and for your customers with
            the help of specialized software. Transform the shopping experience with
            an engaging mobile app or improve business operations with a
            comprehensive enterprise software suite.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>

            {/* Primary */}
            <button
              onMouseEnter={() => setHovBtn1(true)}
              onMouseLeave={() => setHovBtn1(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "clamp(14px, 2vw, 16px) clamp(28px, 4vw, 32px)",
                borderRadius: "10px", border: "none",
                background: hovBtn1
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white", fontSize: "clamp(12px, 2vw, 13px)", fontWeight: "800",
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovBtn1
                  ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                  : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovBtn1 ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" />
              </svg>
              Contact Us
            </button>

            {/* Secondary */}
            <button
              onMouseEnter={() => setHovBtn2(true)}
              onMouseLeave={() => setHovBtn2(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "clamp(13px, 2vw, 15px) clamp(28px, 4vw, 32px)",
                borderRadius: "10px",
                border: hovBtn2 ? "1.5px solid rgba(96,165,250,0.7)" : "1.5px solid rgba(255,255,255,0.2)",
                background: hovBtn2 ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.04)",
                color: hovBtn2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
                fontSize: "clamp(12px, 2vw, 13px)", fontWeight: "800",
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovBtn2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
                transform: hovBtn2 ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Our Work
            </button>
          </div>

          {/* Stats row – responsive */}
          <div className="stats-row" style={{
            display: "flex", alignItems: "center", gap: "clamp(24px, 5vw, 32px)",
            marginTop: "clamp(40px, 8vw, 56px)",
            paddingTop: "clamp(24px, 4vw, 32px)",
            borderTop: "1px solid rgba(59,130,246,0.15)",
            flexWrap: "wrap",
          }}>
            {[
              { value: "300+", label: "Retail Clients" },
              { value: "12+", label: "Years Experience" },
              { value: "99%", label: "Uptime SLA" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{
                  fontSize: "clamp(22px, 5vw, 26px)", fontWeight: "900",
                  background: "linear-gradient(135deg,#ffffff,#60a5fa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: "clamp(10px, 2.5vw, 12px)", fontWeight: "600",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(100,116,139,0.8)",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right side decorative lines + badges (hidden on mobile) ── */}
      <div className="decorative-side" style={{
        position: "absolute", right: 0, top: "50%",
        transform: "translateY(-50%)",
        width: "40%", height: "80%",
        pointerEvents: "none", zIndex: 5,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "0 60px", gap: "18px",
      }}>
        {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
          <div key={i} style={{
            height: "1px", width: `${w}%`,
            background: "linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
            alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
            opacity: 0.6,
          }} />
        ))}

        {/* Badge 1 — Omnichannel */}
        <div style={{
          position: "absolute", top: "18%", right: "60px",
          padding: "14px 20px", borderRadius: "14px",
          background: "rgba(4,21,48,0.85)",
          border: "1px solid rgba(59,130,246,0.25)",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", gap: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>Omnichannel</div>
            <div style={{ fontSize: "11px", color: "rgba(148,163,184,0.7)", letterSpacing: "0.05em" }}>Commerce Platform</div>
          </div>
        </div>

        {/* Badge 2 — ISO */}
        <div style={{
          position: "absolute", bottom: "22%", right: "80px",
          padding: "12px 18px", borderRadius: "12px",
          background: "rgba(4,21,48,0.85)",
          border: "1px solid rgba(59,130,246,0.2)",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", gap: "10px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: "linear-gradient(135deg,#059669,#0d9488)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>ISO Certified</div>
            <div style={{ fontSize: "11px", color: "rgba(148,163,184,0.7)" }}>Quality Assured</div>
          </div>
        </div>
      </div>

      {/* Responsive CSS (media queries) */}
      <style>{`
        /* Hide decorative side and floating particles on small screens */
        @media (max-width: 900px) {
          .decorative-side {
            display: none !important;
          }
          .particles-container {
            display: none !important;
          }
        }

        /* Buttons become full width on very small phones */
        @media (max-width: 520px) {
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

        /* Stats row wrap with balanced spacing */
        @media (max-width: 640px) {
          .stats-row {
            justify-content: space-between;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .stats-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}