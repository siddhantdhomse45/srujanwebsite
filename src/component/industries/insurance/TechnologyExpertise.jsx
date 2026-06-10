import { useState } from "react";

const technologies = [
  {
    id: 1,
    title: "Legacy System Transformation",
    shortTitle: "Legacy System\nTransformation",
    description:
      "Modernize your legacy systems to keep pace with changing technologies and business environments. Let our experts enhance your crucial software by integrating advanced web or mobile solutions, upgrading your infrastructure, and bringing only necessary innovations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <path d="M8 24H6M8 18H4M8 30H4" strokeLinecap="round" />
        <path d="M8 12h32v24H8z" rx="2" />
        <path d="M16 24h8M24 24l-4-4M24 24l-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="20" r="2" />
        <circle cx="34" cy="28" r="2" />
        <path d="M28 20h4M28 28h4" strokeLinecap="round" />
        <circle cx="14" cy="32" r="1.5" fill="currentColor" stroke="none" style={{ color: "#a855f7" }} />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customer Experience",
    shortTitle: "Customer\nExperience",
    description:
      "Transforming the Customer Experience is a new and powerful shift for the Insurance domain that can bring about quantum change. Implementation of customer experience requires transforming traditional strategies, workflows, processes, and technologies.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <rect x="14" y="8" width="20" height="24" rx="3" />
        <path d="M19 16c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M17 32c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
        <circle cx="24" cy="19" r="3.5" />
        <circle cx="14" cy="36" r="2" />
        <circle cx="24" cy="38" r="2" />
        <circle cx="34" cy="36" r="2" />
        <path d="M16 36h6M26 38h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Internet of Things",
    shortTitle: "Internet of\nThings",
    description:
      "Leverage IoT-enabled telematics, wearables, and smart home sensors to build usage-based insurance products. Real-time data streams power proactive risk assessment and instant claims processing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <circle cx="24" cy="24" r="5" />
        <path d="M18 18c-3.3 3.3-3.3 8.7 0 12M30 18c3.3 3.3 3.3 8.7 0 12" strokeLinecap="round" />
        <path d="M14 14c-5.5 5.5-5.5 14.5 0 20M34 14c5.5 5.5 5.5 14.5 0 20" strokeLinecap="round" />
        <circle cx="24" cy="10" r="2" />
        <circle cx="24" cy="38" r="2" />
        <path d="M24 12v4M24 32v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Big Data",
    shortTitle: "Big\nData",
    description:
      "Harness petabyte-scale insurance data to uncover patterns invisible to traditional analytics. Our big data pipelines ingest structured and unstructured sources for real-time underwriting, fraud detection, and customer segmentation.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <rect x="12" y="10" width="24" height="28" rx="3" />
        <ellipse cx="24" cy="10" rx="12" ry="4" />
        <ellipse cx="24" cy="22" rx="12" ry="4" />
        <path d="M12 22v6M36 22v6" strokeLinecap="round" />
        <path d="M16 30h4M16 34h8" strokeLinecap="round" />
        <path d="M32 34l-4 4M32 38l-4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Blockchain",
    shortTitle: "Blockchain",
    description:
      "Deploy smart contracts for automated claims settlement, fraud-resistant policy issuance, and transparent reinsurance treaties. Our blockchain solutions bring immutable audit trails and instant settlement to insurance workflows.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <circle cx="24" cy="12" r="4" />
        <circle cx="10" cy="30" r="4" />
        <circle cx="38" cy="30" r="4" />
        <circle cx="18" cy="40" r="3" />
        <circle cx="30" cy="40" r="3" />
        <path d="M24 16v6M14 28l-6-8M34 28l6-8M20 38l-8-4M28 38l8-4M21 40h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    shortTitle: "Artificial\nIntelligence",
    description:
      "Build AI-powered underwriting engines, intelligent chatbots, and computer-vision claims assessment. Our machine learning models continuously improve fraud scoring, churn prediction, and next-best-action recommendations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" width="48" height="48">
        <path d="M16 10h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" />
        <circle cx="20" cy="20" r="2.5" />
        <circle cx="28" cy="20" r="2.5" />
        <path d="M20 26c1 1.5 7 1.5 8 0" strokeLinecap="round" />
        <path d="M12 18H8M12 24H6M36 18h4M36 24h6" strokeLinecap="round" />
        <circle cx="36" cy="10" r="2" />
        <circle cx="36" cy="34" r="2" />
        <path d="M32 10h2M32 34h2" strokeLinecap="round" />
        <circle cx="22" cy="34" r="1.5" fill="currentColor" stroke="none" style={{ color: "#a855f7" }} />
        <circle cx="30" cy="8" r="1.5" fill="currentColor" stroke="none" style={{ color: "#3b82f6" }} />
      </svg>
    ),
  },
];

export default function TechnologyExpertise() {
  const [active, setActive] = useState(0);
  const current = technologies[active];

  return (
    <section
      style={{
             background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#061d42 70%,#020e24 100%)",
        padding: "80px 40px 100px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wave decoration */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          {[0, 70, 140, 210].map((o, i) => (
            <path key={i}
              d={`M-200,${260 + o} C300,${160 + o} 800,${400 + o} 1200,${220 + o} S1700,${290 + o} 1700,${260 + o}`}
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

      {/* Dot grid left */}
      <div style={{
        position: "absolute", left: "2%", top: "35%",
        display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: "14px",
        opacity: 0.2, pointerEvents: "none",
      }}>
        {Array(32).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      {/* Dot grid right */}
      <div style={{
        position: "absolute", right: "2%", bottom: "10%",
        display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "14px",
        opacity: 0.18, pointerEvents: "none",
      }}>
        {Array(24).fill(0).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "clamp(22px,3.5vw,44px)", fontWeight: "900",
            textTransform: "uppercase", color: "white",
            letterSpacing: "0.05em", lineHeight: 1.15,
            margin: "0 0 20px", textShadow: "0 2px 24px rgba(0,0,0,0.2)",
          }}>
            Technology Expertise of the Insurance<br />Software Development Company
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "6px", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "white" }} />
            <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
          </div>

          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "16px", lineHeight: "1.85", color: "rgba(255,255,255,0.82)" }}>
            Leading insurance carriers benefit from our professional services and methodologies
            that accelerate growth and impact the bottom line.
          </p>
        </div>

        {/* Icon tab row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "8px",
          marginBottom: "4px",
        }}>
          {technologies.map((tech, i) => {
            const isAct = active === i;
            return (
              <button
                key={tech.id}
                onClick={() => setActive(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                  padding: "24px 12px 20px",
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  outline: "none",
                  background: isAct ? "rgba(255,255,255,0.12)" : "transparent",
                }}
              >
                {/* Icon wrapper */}
                <div style={{
                  width: "72px", height: "72px", borderRadius: "20px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: isAct ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.1)",
                  border: isAct ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.15)",
                  boxShadow: isAct ? "0 12px 40px rgba(0,0,0,0.25)" : "none",
                  color: isAct ? "#1d4ed8" : "rgba(255,255,255,0.8)",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: isAct ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
                }}>
                  {tech.icon}
                </div>

                {/* Label */}
                <span style={{
                  fontSize: "12px",
                  fontWeight: isAct ? "700" : "500",
                  color: isAct ? "white" : "rgba(255,255,255,0.7)",
                  textAlign: "center",
                  lineHeight: "1.4",
                  whiteSpace: "pre-line",
                  transition: "all 0.3s",
                }}>
                  {tech.shortTitle}
                </span>

                {/* Active underline */}
                <div style={{
                  position: "absolute", bottom: 0, left: "10%",
                  width: "80%", height: "3px", borderRadius: "2px",
                  background: isAct ? "white" : "transparent",
                  transition: "all 0.3s",
                }} />
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "40px" }} />

        {/* Detail panel */}
        <div
          key={active}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "60px",
            alignItems: "start",
            animation: "fadeIn 0.35s ease",
          }}
        >
          {/* Left: Title */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px", padding: "8px 16px", marginBottom: "20px",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "white" }} />
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>
                Technology
              </span>
            </div>
            <h3 style={{
              fontSize: "clamp(18px,2.5vw,28px)", fontWeight: "900",
              textTransform: "uppercase", color: "white",
              letterSpacing: "0.04em", lineHeight: 1.25,
              margin: "0 0 24px",
              textShadow: "0 2px 12px rgba(0,0,0,0.2)",
            }}>
              {current.title}
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
                Learn More
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" width="12" height="12">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right: Description */}
          <div>
            <p style={{
              fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}>
              {current.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}