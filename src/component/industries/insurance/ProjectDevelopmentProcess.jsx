import { useState } from "react";

const outcomes = [
  { id: 1, text: "A shared understanding of project objectives", done: false },
  { id: 2, text: "Business requirements transformed into functional", done: false },
  { id: 3, text: "The initial vision of the architecture of the project", done: false },
  { id: 4, text: "A project plan that includes risks and budgets", done: false },
  { id: 5, text: "A clear product strategy and development roadmap", done: true },
];

const phases = [
  {
    id: 1,
    label: "Discovery Phase Workshop",
    position: "top",
    x: 14,
    description: "Define goals, stakeholders, and scope. Align on business objectives before a single line of code is written.",
  },
  {
    id: 2,
    label: "Sprint 0: Project Initiation",
    position: "bottom",
    x: 26,
    description: "Set up infrastructure, finalize technical architecture, and prepare the team for iterative delivery.",
  },
  {
    id: 3,
    label: "Iterative Development: UI/UX Design, Development, QA",
    position: "top",
    x: 44,
    description: "Agile sprints delivering working software with continuous design refinement and quality assurance.",
  },
  {
    id: 4,
    label: "User Acceptance Testing",
    position: "bottom",
    x: 60,
    description: "Stakeholders validate functionality against requirements in a production-like environment.",
  },
  {
    id: 5,
    label: "MVP / Soft Launch",
    position: "top",
    x: 76,
    description: "Release to a controlled audience. Gather real user feedback and iterate rapidly before full rollout.",
  },
  {
    id: 6,
    label: "Launch",
    position: "bottom",
    x: 88,
    description: "Full production deployment with go-live support, monitoring, and performance tuning.",
  },
  {
    id: 7,
    label: "Support",
    position: "top",
    x: 97,
    description: "Ongoing maintenance, feature evolution, SLA-backed support, and continuous improvement.",
    isRocket: true,
  },
];

const RocketIcon = ({ color }) => (
  <svg viewBox="0 0 36 48" fill="none" stroke={color} strokeWidth="1.5" width="28" height="36">
    <path d="M18 4C18 4 10 12 10 24h16C26 12 18 4 18 4z" strokeLinejoin="round" />
    <path d="M10 24l-4 8h24l-4-8" strokeLinejoin="round" />
    <path d="M14 32v6M22 32v6" strokeLinecap="round" />
    <circle cx="18" cy="20" r="3" />
    <path d="M10 24c-3 2-5 5-5 8M26 24c3 2 5 5 5 8" strokeLinecap="round" />
  </svg>
);

export default function ProjectDevelopmentProcess() {
  const [activePhase, setActivePhase] = useState(null);

  return (
    <section
      style={{
                      background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#061d42 70%,#020e24 100%)",
        padding: "80px 40px 100px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Wave decoration */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          {[0, 70, 140, 210].map((o, i) => (
            <path key={i}
              d={`M-200,${280+o} C300,${180+o} 800,${420+o} 1200,${240+o} S1700,${310+o} 1700,${280+o}`}
              fill="none" stroke="white" strokeWidth="1.5" />
          ))}
        </svg>
      </div>

      {/* Top glow */}
      <div style={{
        position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "300px", pointerEvents: "none",
        background: "radial-gradient(ellipse,rgba(255,255,255,0.12),transparent 70%)",
      }} />

      {/* Dot grids */}
      <div style={{
        position: "absolute", left: "1%", top: "30%",
        display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: "14px",
        opacity: 0.2, pointerEvents: "none",
      }}>
        {Array(32).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>
      <div style={{
        position: "absolute", right: "1%", bottom: "12%",
        display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "14px",
        opacity: 0.18, pointerEvents: "none",
      }}>
        {Array(24).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "clamp(22px,3.5vw,44px)", fontWeight: "900",
            textTransform: "uppercase", color: "white",
            letterSpacing: "0.05em", lineHeight: 1.15,
            margin: "0 0 20px", textShadow: "0 2px 24px rgba(0,0,0,0.2)",
          }}>
            Project Development Process for<br />Insurance Software Solutions
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "white" }} />
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
          </div>
          <p style={{ maxWidth: "720px", margin: "0 auto", fontSize: "16px", lineHeight: "1.85", color: "rgba(255,255,255,0.82)" }}>
            We provide full-cycle IT support, operational transformation, and high impact insurance
            software solutions that help insurance companies deliver personalized, efficient, and informed care.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "40px", alignItems: "start" }}>

          {/* Left: Outcomes card */}
          <div style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(29,78,216,0.08)", borderRadius: "8px",
                padding: "6px 12px", marginBottom: "10px",
              }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1d4ed8" }} />
                <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#1d4ed8", textTransform: "uppercase" }}>
                  Discovery Outcomes
                </span>
              </div>
            </div>

            {outcomes.map((item) => (
              <div key={item.id} style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(29,78,216,0.07)",
              }}>
                {/* Bullet icon */}
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: item.done ? "rgba(29,78,216,0.12)" : "rgba(139,92,246,0.12)",
                  border: `1px solid ${item.done ? "rgba(29,78,216,0.25)" : "rgba(139,92,246,0.25)"}`,
                  marginTop: "1px",
                }}>
                  {item.done ? (
                    <svg viewBox="0 0 16 16" fill="none" stroke="#1d4ed8" strokeWidth="2" width="12" height="12">
                      <polyline points="3 8 6 11 13 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="none" stroke="#7c3aed" strokeWidth="2" width="10" height="10">
                      <path d="M8 3v10M8 13l-3-3M8 13l3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.65", color: "#334155", fontWeight: item.done ? "600" : "400" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Timeline */}
          <div style={{ paddingTop: "20px" }}>

            {/* SVG Timeline */}
            <div style={{ position: "relative", width: "100%", height: "380px" }}>
              <svg
                viewBox="0 0 900 380"
                width="100%"
                height="100%"
                style={{ overflow: "visible" }}
              >
                {/* Curved path */}
                <path
                  d="M 80 200 C 160 200 200 140 270 140 C 340 140 360 200 440 200 C 520 200 540 260 620 260 C 700 260 720 200 800 200 C 850 200 870 160 890 130"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 80 200 C 160 200 200 140 270 140 C 340 140 360 200 440 200 C 520 200 540 260 620 260 C 700 260 720 200 800 200 C 850 200 870 160 890 130"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />

                {/* Phase nodes and labels */}
                {[
                  { x: 80,  y: 200, label: "Discovery Phase\nWorkshop",                pos: "top"    },
                  { x: 270, y: 140, label: "Sprint 0:\nProject Initiation",             pos: "bottom" },
                  { x: 440, y: 200, label: "Iterative Development:\nUI/UX, Dev, QA",   pos: "top"    },
                  { x: 620, y: 260, label: "User Acceptance\nTesting",                  pos: "bottom" },
                  { x: 800, y: 200, label: "MVP / Soft Launch",                         pos: "top"    },
                  { x: 890, y: 130, label: "Support",                                   pos: "top", isRocket: true },
                ].map((p, i) => {
                  const isAct = activePhase === i;
                  const boxW = 150, boxH = 52;
                  const bx = Math.min(Math.max(p.x - boxW / 2, 4), 900 - boxW - 4);
                  const by = p.pos === "top" ? p.y - boxH - 28 : p.y + 28;
                  return (
                    <g key={i} style={{ cursor: "pointer" }} onClick={() => setActivePhase(activePhase === i ? null : i)}>
                      {/* Connector line */}
                      <line
                        x1={p.x} y1={p.y}
                        x2={p.x} y2={p.pos === "top" ? p.y - 24 : p.y + 24}
                        stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"
                      />

                      {/* Rocket for Support */}
                      {p.isRocket ? (
                        <g transform={`translate(${p.x - 14}, ${p.y - 90})`}>
                          <rect x="0" y="0" width="28" height="60" rx="4" fill="transparent" />
                          <path d="M14 2C14 2 6 10 6 22h16C22 10 14 2 14 2z" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
                          <path d="M6 22l-3 7h22l-3-7" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
                          <path d="M10 29v5M18 29v5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
                          <circle cx="14" cy="18" r="2.5" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" />
                          <path d="M6 22c-2 1.5-4 4-4 6M22 22c2 1.5 4 4 4 6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                        </g>
                      ) : null}

                      {/* Box */}
                      {!p.isRocket && (
                        <g>
                          <rect
                            x={bx} y={by} width={boxW} height={boxH} rx="10"
                            fill={isAct ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.15)"}
                            stroke={isAct ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)"}
                            strokeWidth="1"
                          />
                          {p.label.split("\n").map((line, li) => (
                            <text
                              key={li}
                              x={bx + boxW / 2}
                              y={by + (p.label.includes("\n") ? 18 + li * 17 : 31)}
                              textAnchor="middle"
                              fontSize="11"
                              fontWeight="700"
                              fill={isAct ? "#1d4ed8" : "white"}
                              fontFamily="'DM Sans','Segoe UI',sans-serif"
                            >
                              {line}
                            </text>
                          ))}
                        </g>
                      )}

                      {/* "Support" label for rocket */}
                      {p.isRocket && (
                        <text x={p.x} y={p.y - 94} textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="'DM Sans','Segoe UI',sans-serif">
                          Support
                        </text>
                      )}

                      {/* Dot on path */}
                      <circle
                        cx={p.x} cy={p.y} r={isAct ? 9 : 7}
                        fill={isAct ? "white" : "rgba(255,255,255,0.85)"}
                        stroke={isAct ? "rgba(29,78,216,0.5)" : "rgba(255,255,255,0.4)"}
                        strokeWidth={isAct ? "3" : "2"}
                      />
                      {isAct && <circle cx={p.x} cy={p.y} r="4" fill="#1d4ed8" />}
                    </g>
                  );
                })}
              </svg>

              {/* Active phase tooltip */}
              {activePhase !== null && (
                <div style={{
                  position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                  padding: "16px 24px",
                  maxWidth: "440px",
                  width: "90%",
                  animation: "fadeIn 0.3s ease",
                }}>
                  <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.75", color: "#334155" }}>
                    {[
                      "Define goals, stakeholders, and scope. Align on business objectives before a single line of code is written.",
                      "Set up infrastructure, finalize technical architecture, and prepare the team for iterative delivery.",
                      "Agile sprints delivering working software with continuous design refinement and quality assurance.",
                      "Stakeholders validate functionality against requirements in a production-like environment.",
                      "Release to a controlled audience. Gather real user feedback and iterate before full rollout.",
                      "Ongoing maintenance, feature evolution, SLA-backed support, and continuous improvement.",
                    ][activePhase]}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px) translateX(-50%); } to { opacity:1; transform:translateY(0) translateX(-50%); } }
      `}</style>
    </section>
  );
}

