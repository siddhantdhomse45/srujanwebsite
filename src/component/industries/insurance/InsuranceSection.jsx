import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Dedicated Team",
    description:
      "Our dedicated team of developers has helped lead insurance companies meet their technology needs and build specific tech expertise.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="12" cy="12" r="5" />
        <circle cx="24" cy="12" r="5" />
        <circle cx="18" cy="13" r="5" />
        <path d="M10 30c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
        <path d="M2 30c0-5 4-8 10-8M34 30c0-5-4-8-10-8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Team Extension",
    description:
      "Augment your existing team with skilled engineers who integrate seamlessly into your workflow and accelerate delivery timelines.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="14" cy="12" r="5" />
        <path d="M4 30c0-5.5 4.5-9 10-9" strokeLinecap="round" />
        <circle cx="26" cy="22" r="4" />
        <path d="M26 18v8M22 22h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Software Engineering",
    description:
      "End-to-end software engineering services tailored to the unique compliance and performance demands of the insurance industry.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="18" cy="18" r="6" />
        <path d="M18 4v4M18 28v4M4 18h4M28 18h4" strokeLinecap="round" />
        <path d="M8.1 8.1l2.8 2.8M25.1 25.1l2.8 2.8M8.1 27.9l2.8-2.8M25.1 10.9l2.8-2.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function InsuranceSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#061d42 70%,#020e24 100%)",
        padding: "clamp(60px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(80px, 10vw, 100px)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wave decoration – hidden on mobile */}
      <div className="wave-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          {[0, 70, 140, 210].map((o, i) => (
            <path
              key={i}
              d={`M-200,${200 + o} C300,${100 + o} 800,${340 + o} 1200,${160 + o} S1700,${230 + o} 1700,${200 + o}`}
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Top glow – responsive size */}
      <div style={{
        position: "absolute", top: "-80px", left: "50%",
        transform: "translateX(-50%)", width: "clamp(400px, 70vw, 700px)", height: "300px",
        pointerEvents: "none",
        background: "radial-gradient(ellipse,rgba(255,255,255,0.12),transparent 70%)",
      }} />

      {/* Dot grids – hidden on narrow screens */}
      <div className="dot-grid-left" style={{
        position: "absolute", left: "2%", top: "30%",
        display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: "14px",
        opacity: 0.25, pointerEvents: "none",
      }}>
        {Array(32).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      <div className="dot-grid-right" style={{
        position: "absolute", right: "2%", bottom: "15%",
        display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "14px",
        opacity: 0.2, pointerEvents: "none",
      }}>
        {Array(24).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 60px)" }}>
          <h2 style={{
            fontSize: "clamp(24px, 5vw, 46px)", fontWeight: "900",
            textTransform: "uppercase", color: "white",
            letterSpacing: "0.05em", lineHeight: 1.15,
            margin: "0 0 20px", textShadow: "0 2px 24px rgba(0,0,0,0.2)",
          }}>
            Custom Insurance Software<br />Development and Consulting
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "6px", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "white" }} />
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
          </div>

          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "clamp(14px, 2.5vw, 16px)", lineHeight: "1.85", color: "rgba(255,255,255,0.82)" }}>
            Scale your delivery capacity with intelligent cooperation models.
          </p>
        </div>

        {/* Cards – responsive grid */}
        <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(16px, 3vw, 20px)" }}>
          {cards.map((card, i) => {
            const isAct = active === i;
            return (
              <div
                key={card.id}
                onClick={() => setActive(i)}
                className="card-item"
                style={{
                  borderRadius: "18px",
                  padding: "clamp(28px, 5vw, 36px) clamp(20px, 4vw, 28px) clamp(24px, 4vw, 32px)",
                  cursor: "pointer",
                  border: isAct ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.12)",
                  background: isAct ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.07)",
                  boxShadow: isAct ? "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)" : "none",
                  backdropFilter: isAct ? "none" : "blur(6px)",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "clamp(16px, 3vw, 20px)",
                  transform: isAct ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "clamp(56px, 10vw, 68px)", height: "clamp(56px, 10vw, 68px)", borderRadius: "18px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: isAct
                    ? "linear-gradient(135deg,rgba(29,78,216,0.12),rgba(37,99,235,0.06))"
                    : "rgba(255,255,255,0.12)",
                  border: isAct ? "1px solid rgba(29,78,216,0.2)" : "1px solid rgba(255,255,255,0.15)",
                  color: isAct ? "#1d4ed8" : "rgba(255,255,255,0.88)",
                  transition: "all 0.35s",
                  flexShrink: 0,
                }}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  margin: 0, fontSize: "clamp(15px, 3vw, 16px)", fontWeight: "800",
                  letterSpacing: "0.01em",
                  color: isAct ? "#0f172a" : "rgba(255,255,255,0.95)",
                  transition: "color 0.3s",
                }}>
                  {card.title}
                </h3>

                {/* Description – expands on active */}
                <p style={{
                  margin: 0, fontSize: "clamp(12px, 2.5vw, 13px)", lineHeight: "1.85",
                  color: isAct ? "#475569" : "rgba(255,255,255,0.6)",
                  transition: "all 0.3s",
                  maxHeight: isAct ? "200px" : "0",
                  overflow: "hidden",
                  opacity: isAct ? 1 : 0,
                }}>
                  {card.description}
                </p>

                {/* Learn more link */}
                {isAct && (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                    <span style={{ fontSize: "clamp(10px, 2vw, 11px)", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1d4ed8" }}>
                      Learn More
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2.5" width="12" height="12">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Dot indicator */}
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: isAct ? "#1d4ed8" : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s",
                  marginTop: "auto",
                }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive CSS media queries */}
      <style>{`
        @media (max-width: 900px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .card-item {
            max-width: 380px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
          .wave-bg {
            display: none !important;
          }
          .dot-grid-left, .dot-grid-right {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .card-item {
            padding: 24px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .card-item {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}