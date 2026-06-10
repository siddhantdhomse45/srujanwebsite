import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Blockchain Technology",
    shortLabel: "Blockchain",
    title: "BLOCKCHAIN TECHNOLOGY",
    description:
      "Harness the power of distributed ledger technology to bolster security and transparency in your business. Automate processes efficiently with Smart Contracts and decentralized architectures that eliminate single points of failure.",
    detail: "Smart Contracts · DeFi · NFT Infrastructure · Supply Chain Transparency · Crypto Wallets",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="8" r="4" />
        <circle cx="10" cy="34" r="4" />
        <circle cx="46" cy="34" r="4" />
        <circle cx="18" cy="48" r="4" />
        <circle cx="38" cy="48" r="4" />
        <path d="M28 12l-14 18M28 12l14 18M14 34l4 10M42 34l-4 10M22 48h12" strokeLinecap="round" />
        <circle cx="28" cy="28" r="5" />
        <path d="M10 34l18-6M46 34L28 28" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Augmented Reality",
    shortLabel: "AR/VR",
    title: "AUGMENTED REALITY",
    description:
      "Tap into AR's potential to revolutionize key operations, driving efficiency and innovation in your workflows. From immersive training environments to real-time data overlays, we build AR experiences that transform how your teams work.",
    detail: "AR Overlays · VR Training · Mixed Reality · Spatial Computing · HoloLens Apps",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <path d="M10 22c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v4c0 6.6-5.4 12-12 12H22c-6.6 0-12-5.4-12-12v-4z" />
        <ellipse cx="20" cy="24" rx="5" ry="6" />
        <ellipse cx="36" cy="24" rx="5" ry="6" />
        <path d="M25 24h6" />
        <path d="M10 24H4M46 24h6" strokeLinecap="round" />
        <path d="M22 40l-4 8M34 40l4 8" strokeLinecap="round" />
        <path d="M16 48h24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Artificial Intelligence",
    shortLabel: "AI/ML",
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Integrate AI-driven intelligence into your business workflows for smarter automation, predictive analytics, and personalized customer experiences. Our AI consulting covers ML pipelines, NLP solutions, and computer vision implementations.",
    detail: "Machine Learning · NLP · Computer Vision · Predictive Analytics · AutoML",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="24" r="12" />
        <path d="M22 20c1-3 3-5 6-5s5 2 6 5M22 28c1 3 3 5 6 5s5-2 6-5" strokeLinecap="round" />
        <circle cx="22" cy="20" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="34" cy="20" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="22" cy="28" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="34" cy="28" r="2" fill="currentColor" fillOpacity="0.3" />
        <path d="M28 12V6M28 42v6M16 24H8M40 24h8" strokeLinecap="round" />
        <path d="M20 16l-4-4M36 16l4-4M20 32l-4 4M36 32l4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Internet of Things",
    shortLabel: "IoT",
    title: "INTERNET OF THINGS",
    description:
      "Connect and manage your devices at scale with robust IoT architectures. We design sensor networks, edge computing solutions, and real-time data pipelines that give your business unprecedented operational visibility and control.",
    detail: "Edge Computing · Sensor Networks · MQTT · Industrial IoT · Smart Devices",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="28" r="8" />
        <circle cx="8" cy="16" r="4" />
        <circle cx="48" cy="16" r="4" />
        <circle cx="8" cy="40" r="4" />
        <circle cx="48" cy="40" r="4" />
        <path d="M12 16l10 8M44 16L34 24M12 40l10-8M44 40l-10-8" strokeLinecap="round" />
        <path d="M20 10c4-4 12-4 16 0M20 46c4 4 12 4 16 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Cloud Computing",
    shortLabel: "Cloud",
    title: "CLOUD COMPUTING",
    description:
      "Migrate, modernize, and manage your cloud infrastructure with confidence. We architect multi-cloud and hybrid cloud environments on AWS, Azure, and GCP, optimizing performance, cost, and security at every layer.",
    detail: "AWS · Azure · GCP · Kubernetes · Serverless · Cloud Migration",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <path d="M40 34H18a12 12 0 1 1 2.4-23.8A16 16 0 1 1 40 34z" />
        <path d="M28 38v8M22 42l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="40" width="20" height="10" rx="3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "FinTech",
    shortLabel: "FinTech",
    title: "FINTECH",
    description:
      "Transform financial services with secure, scalable digital platforms. From payment processing to algorithmic trading, our FinTech solutions blend regulatory compliance with cutting-edge innovation to keep you ahead.",
    detail: "Payment Systems · Open Banking · RegTech · Algo Trading · Digital Wallets",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="28" r="18" />
        <path d="M28 14v4M28 38v4" strokeLinecap="round" />
        <path d="M21 20c0-3 3-5 7-5s7 2 7 5-3 4-7 5-7 2-7 5 3 5 7 5 7-2 7-5" strokeLinecap="round" />
        <path d="M16 20l-6-6M40 20l6-6M16 36l-6 6M40 36l6 6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ITStrategyConsulting() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "90px 40px 110px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient bg */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-80px", left:"20%", width:"580px", height:"380px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"15%", width:"480px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)" }} />
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"64px" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
            Technology Focus
          </span>

          <h2 style={{
            fontSize:"clamp(28px,4.5vw,54px)",
            fontWeight:"900",
            letterSpacing:"0.06em",
            textTransform:"uppercase",
            margin:"0 0 20px",
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}>
            IT Strategy Consulting
          </h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"24px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p style={{ maxWidth:"720px", margin:"0 auto", fontSize:"16px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)" }}>
            We're always on the pulse of emerging technologies, ensuring we deliver cutting-edge software solutions. Our strategic IT consulting services guide you in selecting and implementing the most apt technologies tailored to your business and industry.
          </p>
        </div>

        {/* ── Icon Tab Row ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(6,1fr)",
          gap:"0",
          marginBottom:"0",
          borderRadius:"20px 20px 0 0",
          overflow:"hidden",
          border:"1px solid rgba(59,130,246,0.12)",
          borderBottom:"none",
        }}>
          {tabs.map((tab, i) => {
            const isAct = activeTab === i;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(i)}
                style={{
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                  gap:"16px",
                  padding:"32px 16px 24px",
                  cursor:"pointer",
                  position:"relative",
                  background: isAct
                    ? "linear-gradient(145deg,rgba(29,78,216,0.2),rgba(99,102,241,0.1))"
                    : "rgba(255,255,255,0.02)",
                  borderRight: i < 5 ? "1px solid rgba(59,130,246,0.1)" : "none",
                  transition:"all 0.35s ease",
                }}
              >
                {/* Top glow bar */}
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:"3px",
                  background: isAct
                    ? "linear-gradient(90deg,#1d4ed8,#6366f1)"
                    : "transparent",
                  transition:"all 0.3s",
                }} />

                {/* Icon */}
                <div style={{
                  color: isAct ? "#60a5fa" : "rgba(148,163,184,0.35)",
                  filter: isAct ? "drop-shadow(0 0 10px rgba(59,130,246,0.5))" : "none",
                  transform: isAct ? "scale(1.1) translateY(-3px)" : "scale(1) translateY(0)",
                  transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  {tab.icon}
                </div>

                {/* Label */}
                <span style={{
                  fontSize:"12px",
                  fontWeight: isAct ? "800" : "600",
                  color: isAct ? "#93c5fd" : "rgba(100,116,139,0.7)",
                  textAlign:"center",
                  letterSpacing:"0.02em",
                  lineHeight:1.3,
                  transition:"color 0.3s",
                }}>
                  {tab.shortLabel}
                </span>

                {/* Active underline */}
                {isAct && (
                  <div style={{
                    position:"absolute", bottom:0, left:"20%", right:"20%",
                    height:"2px", borderRadius:"2px",
                    background:"linear-gradient(90deg,#3b82f6,#6366f1)",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Active Tab Content Panel ── */}
        <div style={{
          border:"1px solid rgba(59,130,246,0.15)",
          borderTop:"1px solid rgba(59,130,246,0.25)",
          borderRadius:"0 0 20px 20px",
          background:"linear-gradient(135deg,rgba(15,35,70,0.6),rgba(6,15,38,0.8))",
          backdropFilter:"blur(12px)",
          overflow:"hidden",
          position:"relative",
        }}>
          {/* Left accent */}
          <div style={{
            position:"absolute", left:0, top:0, bottom:0, width:"3px",
            background:"linear-gradient(to bottom,#1d4ed8,#6366f1,transparent)",
          }} />

          <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 2fr",
            gap:"0",
            minHeight:"200px",
          }}>
            {/* Left: title + tags */}
            <div style={{
              padding:"44px 40px",
              borderRight:"1px solid rgba(59,130,246,0.12)",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
            }}>
              <div>
                <div style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center",
                  width:"56px", height:"56px", borderRadius:"16px",
                  background:"linear-gradient(135deg,rgba(29,78,216,0.3),rgba(99,102,241,0.2))",
                  border:"1px solid rgba(59,130,246,0.3)",
                  color:"#60a5fa",
                  marginBottom:"20px",
                  boxShadow:"0 4px 20px rgba(37,99,235,0.3)",
                }}>
                  {active.icon}
                </div>

                <h3 style={{
                  fontSize:"20px",
                  fontWeight:"900",
                  letterSpacing:"0.08em",
                  textTransform:"uppercase",
                  color:"#f1f5f9",
                  lineHeight:1.2,
                  margin:"0 0 16px",
                }}>
                  {active.title}
                </h3>

                <div style={{
                  display:"flex", alignItems:"center", gap:"8px",
                  color:"#60a5fa", fontSize:"12px", fontWeight:"700",
                  letterSpacing:"0.12em", textTransform:"uppercase",
                  cursor:"pointer",
                }}>
                  <span>Explore More</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Tab number */}
              <div style={{
                fontSize:"64px", fontWeight:"900",
                color:"rgba(255,255,255,0.04)",
                lineHeight:1, userSelect:"none",
                marginTop:"20px",
              }}>
                0{active.id}
              </div>
            </div>

            {/* Right: description + tags */}
            <div style={{
              padding:"44px 48px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
            }}>
              <p style={{
                fontSize:"15px",
                lineHeight:"1.9",
                color:"rgba(148,163,184,0.9)",
                margin:"0 0 28px",
              }}>
                {active.description}
              </p>

              {/* Tech tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
                {active.detail.split(" · ").map((tag, i) => (
                  <span key={i} style={{
                    display:"inline-block",
                    padding:"6px 14px",
                    borderRadius:"8px",
                    fontSize:"11px",
                    fontWeight:"700",
                    letterSpacing:"0.1em",
                    textTransform:"uppercase",
                    color:"#60a5fa",
                    background:"rgba(37,99,235,0.12)",
                    border:"1px solid rgba(59,130,246,0.2)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation dots ── */}
        <div style={{ display:"flex", justifyContent:"center", gap:"8px", marginTop:"32px" }}>
          {tabs.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                width: activeTab === i ? "28px" : "8px",
                height:"8px",
                borderRadius:"4px",
                background: activeTab === i
                  ? "linear-gradient(90deg,#1d4ed8,#6366f1)"
                  : "rgba(59,130,246,0.25)",
                cursor:"pointer",
                transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
