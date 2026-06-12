import { useState, useRef, useEffect } from "react";

const categories = [
  {
    id: 1,
    label: "Mobile Banking",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
        <rect x="14" y="4" width="24" height="40" rx="4" />
        <path d="M14 12h24M14 40h24" />
        <circle cx="26" cy="44" r="2" />
        <path d="M20 22h4M28 22h4M20 28h4M28 28h4" strokeLinecap="round" />
        <path d="M34 10l6 6M34 10h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    cases: [
      {
        title: "New World Bank for the Micro-Economy",
        imageGradient: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
        imageEmoji: "📱",
        challenge: "The client wanted to create a global mobile banking platform that enables people to open bank accounts, access peer-to-peer banking services, and send money across the world.",
        solution: "The platform incorporates blockchain, biometrics technologies (face and voice recognition), machine learning, and 3-factor authentication.",
        tags: ["Blockchain", "Biometrics", "ML", "P2P Banking"],
      },
    ],
  },
  {
    id: 2,
    label: "Digital Transformation",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
        <circle cx="26" cy="26" r="10" />
        <path d="M26 16V8M26 44v-8M16 26H8M44 26h-8" strokeLinecap="round" />
        <path d="M19 19l-6-6M39 39l-6-6M19 33l-6 6M39 13l-6 6" strokeLinecap="round" />
        <path d="M32 20l8-4M12 36l8-4" strokeLinecap="round" />
      </svg>
    ),
    cases: [
      {
        title: "LSE's Share Price App Enables Trading On-the-Go",
        imageGradient: "linear-gradient(135deg,#0a1628,#0d1f3c,#091525)",
        imageEmoji: "📈",
        challenge: "Today's finance professionals operate across different markets and quickly respond to significant events in the finance world. The app's job is to help facilitate trades and provide customers with the tools to succeed.",
        solution: "We delivered the app that tracks real-time information on share prices and financial data. Push notifications ensure users receive relevant data at the right time. A stock finder allows users to monitor discussions and set up alerts to follow price changes.",
        tags: ["Real-time Data", "Push Notifications", "Stock Finder", "Trading"],
      },
    ],
  },
  {
    id: 3,
    label: "Wealth Management",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
        <circle cx="26" cy="26" r="16" />
        <path d="M26 14v4M26 34v4" strokeLinecap="round" />
        <path d="M20 20c0-3.3 2.7-5 6-5s6 1.7 6 5-2.7 4-6 5-6 2-6 5 2.7 5 6 5 6-1.7 6-5" strokeLinecap="round" />
        <path d="M14 14l-4-4M38 38l4 4M14 38l-4 4M38 14l4-4" strokeLinecap="round" />
      </svg>
    ),
    cases: [
      {
        title: "AI-Powered Portfolio Optimization Platform",
        imageGradient: "linear-gradient(135deg,#0d1b2a,#1b2a4a,#0a1628)",
        imageEmoji: "💰",
        challenge: "A leading wealth management firm needed a smarter platform to help advisors manage diverse portfolios, reduce risk exposure, and deliver personalized investment strategies at scale.",
        solution: "We built an AI-driven platform with automated portfolio rebalancing, risk scoring algorithms, real-time analytics dashboards, and client-facing reporting tools integrated with major custodian APIs.",
        tags: ["AI Portfolio", "Risk Scoring", "Analytics", "API Integration"],
      },
    ],
  },
  {
    id: 4,
    label: "Wallets and PayTech",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
        <rect x="6" y="14" width="40" height="28" rx="4" />
        <path d="M6 22h40" />
        <rect x="32" y="28" width="10" height="8" rx="2" />
        <circle cx="38" cy="32" r="2" />
        <path d="M12 32h8M12 36h6" strokeLinecap="round" />
        <path d="M30 6l8 8M22 6l-8 8" strokeLinecap="round" />
      </svg>
    ),
    cases: [
      {
        title: "Cross-Border Payment Wallet for Emerging Markets",
        imageGradient: "linear-gradient(135deg,#0f0c29,#1a1a2e,#16213e)",
        imageEmoji: "💳",
        challenge: "Users in emerging markets faced high fees, slow transfers, and limited access to digital financial tools. The client needed a frictionless multi-currency wallet that worked offline and online.",
        solution: "We developed a lightweight mobile wallet supporting 40+ currencies with offline transaction queuing, NFC tap-to-pay, QR code transfers, and integration with local payment rails and crypto on-ramps.",
        tags: ["Multi-Currency", "NFC Pay", "Offline Mode", "Crypto On-ramp"],
      },
    ],
  },
];

export default function OurClientsCaseStudies() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hovTab, setHovTab] = useState(null);
  const [hovCTA, setHovCTA] = useState(false);
  const tabsContainerRef = useRef(null);

  // Auto‑scroll active tab into view on mobile
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.children[activeCategory];
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeCategory]);

  const cat = categories[activeCategory];
  const cs = cat.cases[0];

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "clamp(60px, 10vw, 90px) clamp(20px, 5vw, 40px) clamp(80px, 10vw, 110px)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient bg */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-80px", left:"20%", width:"580px", height:"380px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"15%", width:"480px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"clamp(40px, 7vw, 60px)" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
            Case Studies
          </span>

          <h2 style={{
            fontSize:"clamp(32px,5vw,58px)", fontWeight:"900", letterSpacing:"0.06em",
            textTransform:"uppercase", margin:"0 0 14px",
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>
            Our Clients
          </h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"16px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p style={{ fontSize:"clamp(14px, 3vw, 16px)", color:"rgba(148,163,184,0.75)", letterSpacing:"0.05em" }}>
            Case studies we engineered
          </p>
        </div>

        {/* Category Tabs – horizontally scrollable on mobile */}
        <div
          ref={tabsContainerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "12px",
            marginBottom: "32px",
            paddingBottom: "8px",
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
          className="tabs-scroll"
        >
          {categories.map((cat, i) => {
            const isAct = activeCategory === i;
            const isHov = hovTab === i;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(i)}
                onMouseEnter={() => setHovTab(i)}
                onMouseLeave={() => setHovTab(null)}
                style={{
                  display:"flex", flexDirection:"column", alignItems:"center",
                  justifyContent:"center", gap:"14px",
                  padding:"28px 16px 24px",
                  borderRadius:"16px",
                  cursor:"pointer",
                  flex: "0 0 auto",
                  minWidth: "140px",
                  border: isAct
                    ? "1.5px solid rgba(96,165,250,0.6)"
                    : isHov ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  background: isAct
                    ? "linear-gradient(145deg,rgba(29,78,216,0.3),rgba(99,102,241,0.15))"
                    : isHov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
                  boxShadow: isAct
                    ? "0 8px 32px -4px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "none",
                  transform: isAct ? "translateY(-4px)" : isHov ? "translateY(-2px)" : "translateY(0)",
                  transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  position:"relative",
                  overflow:"hidden",
                }}
              >
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:"3px",
                  background: isAct ? "linear-gradient(90deg,#1d4ed8,#6366f1)" : "transparent",
                }}/>
                <div style={{
                  color: isAct ? "#93c5fd" : isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
                  filter: isAct ? "drop-shadow(0 0 10px rgba(59,130,246,0.6))" : "none",
                  transform: isAct ? "scale(1.08)" : "scale(1)",
                  transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  {cat.icon}
                </div>
                <span style={{
                  fontSize:"clamp(12px, 3vw, 13px)", fontWeight: isAct ? "800" : "600",
                  color: isAct ? "#93c5fd" : isHov ? "rgba(148,163,184,0.8)" : "rgba(100,116,139,0.7)",
                  textAlign:"center", letterSpacing:"0.02em", lineHeight:1.3,
                }}>
                  {cat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Case Study Panel – stacks on mobile */}
        <div className="case-panel" style={{
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0",
          borderRadius:"20px", overflow:"hidden",
          border:"1px solid rgba(59,130,246,0.15)",
          boxShadow:"0 24px 80px -16px rgba(0,0,0,0.6)",
        }}>
          {/* Left: Image area */}
          <div style={{
            position:"relative",
            background: cs.imageGradient,
            minHeight:"clamp(300px, 50vh, 420px)",
            display:"flex", alignItems:"center", justifyContent:"center",
            overflow:"hidden",
          }}>
            <div style={{
              position:"absolute", inset:0,
              backgroundImage:"linear-gradient(rgba(59,130,246,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)",
              backgroundSize:"40px 40px",
            }} />
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(37,99,235,0.2),transparent 70%)" }} />
            <div style={{ position:"relative", zIndex:2, textAlign:"center" }}>
              <div style={{
                fontSize:"clamp(64px, 15vw, 96px)", lineHeight:1, marginBottom:"24px",
                filter:"drop-shadow(0 0 30px rgba(59,130,246,0.5))",
              }}>
                {cs.imageEmoji}
              </div>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"8px 20px", borderRadius:"100px",
                background:"rgba(37,99,235,0.2)", border:"1px solid rgba(59,130,246,0.35)",
                color:"#93c5fd", fontSize:"clamp(10px, 3vw, 12px)", fontWeight:"700", letterSpacing:"0.1em",
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6" }} />
                {cat.label}
              </div>
            </div>
            <div style={{ position:"absolute", top:"16px", left:"16px", width:"32px", height:"32px", borderTop:"2px solid rgba(59,130,246,0.5)", borderLeft:"2px solid rgba(59,130,246,0.5)", borderRadius:"4px 0 0 0" }} />
            <div style={{ position:"absolute", bottom:"16px", right:"16px", width:"32px", height:"32px", borderBottom:"2px solid rgba(59,130,246,0.5)", borderRight:"2px solid rgba(59,130,246,0.5)", borderRadius:"0 0 4px 0" }} />
          </div>

          {/* Right: Content */}
          <div style={{
            padding:"clamp(32px, 5vw, 48px) clamp(28px, 5vw, 44px)",
            background:"linear-gradient(145deg,rgba(6,18,42,0.95),rgba(4,15,38,0.98))",
            display:"flex", flexDirection:"column", justifyContent:"space-between",
          }}>
            <div>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"5px 14px", borderRadius:"8px",
                background:"rgba(37,99,235,0.15)", border:"1px solid rgba(59,130,246,0.25)",
                color:"#60a5fa", fontSize:"11px", fontWeight:"700",
                letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"20px",
              }}>
                Case Study
              </div>

              <h3 style={{
                fontSize:"clamp(20px, 4vw, 22px)", fontWeight:"900", color:"#f1f5f9",
                marginBottom:"32px", lineHeight:1.3,
              }}>
                {cs.title}
              </h3>

              {/* Challenge */}
              <div style={{ marginBottom:"24px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <div style={{
                    width:"28px", height:"28px", borderRadius:"8px",
                    background:"linear-gradient(135deg,#dc2626,#ef4444)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 4px 12px rgba(239,68,68,0.35)",
                  }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" width="12" height="12">
                      <path d="M8 2v8M8 12v2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize:"14px", fontWeight:"800", color:"#f1f5f9", letterSpacing:"0.04em" }}>Challenge</span>
                </div>
                <p style={{ fontSize:"clamp(13px, 2.5vw, 14px)", lineHeight:"1.85", color:"rgba(148,163,184,0.85)", margin:0, paddingLeft:"38px" }}>
                  {cs.challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom:"32px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <div style={{
                    width:"28px", height:"28px", borderRadius:"8px",
                    background:"linear-gradient(135deg,#059669,#10b981)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 4px 12px rgba(16,185,129,0.35)",
                  }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" width="12" height="12">
                      <polyline points="3 8 6 11 13 4" />
                    </svg>
                  </div>
                  <span style={{ fontSize:"14px", fontWeight:"800", color:"#f1f5f9", letterSpacing:"0.04em" }}>Solution</span>
                </div>
                <p style={{ fontSize:"clamp(13px, 2.5vw, 14px)", lineHeight:"1.85", color:"rgba(148,163,184,0.85)", margin:0, paddingLeft:"38px" }}>
                  {cs.solution}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"32px" }}>
                {cs.tags.map((tag, i) => (
                  <span key={i} style={{
                    padding:"5px 12px", borderRadius:"8px",
                    fontSize:"clamp(10px, 2.5vw, 11px)", fontWeight:"700", letterSpacing:"0.1em", textTransform:"uppercase",
                    color:"#60a5fa", background:"rgba(37,99,235,0.12)", border:"1px solid rgba(59,130,246,0.2)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onMouseEnter={() => setHovCTA(true)}
              onMouseLeave={() => setHovCTA(false)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"clamp(12px, 2vw, 14px) clamp(24px, 4vw, 28px)", borderRadius:"12px", border:"none",
                background: hovCTA ? "linear-gradient(135deg,#2563eb,#4f46e5)" : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color:"white", fontSize:"clamp(12px, 2.5vw, 13px)", fontWeight:"800",
                letterSpacing:"0.1em", textTransform:"uppercase", cursor:"pointer",
                boxShadow: hovCTA ? "0 12px 36px -4px rgba(37,99,235,0.65)" : "0 6px 20px -4px rgba(37,99,235,0.45)",
                transform: hovCTA ? "translateY(-2px)" : "translateY(0)",
                transition:"all 0.3s ease", alignSelf:"flex-start",
              }}
            >
              <span>View Full Case Study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display:"flex", justifyContent:"center", gap:"8px", marginTop:"28px" }}>
          {categories.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveCategory(i)}
              style={{
                width: activeCategory === i ? "28px" : "8px",
                height:"8px", borderRadius:"4px", cursor:"pointer",
                background: activeCategory === i ? "linear-gradient(90deg,#1d4ed8,#6366f1)" : "rgba(59,130,246,0.25)",
                transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          ))}
        </div>

      </div>

      {/* Responsive CSS overrides */}
      <style>{`
        @media (max-width: 900px) {
          .case-panel {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .tabs-scroll {
            gap: 10px !important;
          }
          .tabs-scroll > div {
            min-width: 120px !important;
            padding: 20px 10px 16px !important;
            gap: 10px !important;
          }
          .tabs-scroll > div svg {
            width: 40px !important;
            height: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .tabs-scroll > div {
            min-width: 105px !important;
            padding: 16px 8px 12px !important;
          }
          .tabs-scroll > div svg {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}