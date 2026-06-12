import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCloud,
  FiSmartphone,
  FiRefreshCw,
  FiWifi,
  FiCpu,
  FiLink,
} from "react-icons/fi";

const services = [
  {
    id: "cloud",
    shortLabel: "Cloud\nTechnologies",
    icon: <FiCloud size={32} strokeWidth={1.2} />,
    label: "Cloud Technologies",
    desc: "Scalable, resilient cloud architectures designed to grow with your business — leveraging leading platforms for deployment, storage, and real-time data processing.",
    highlights: ["AWS / Azure / GCP", "Serverless", "Auto-Scaling", "Cloud Migration"],
  },
  {
    id: "mobile",
    shortLabel: "Native & Cross-\nPlatform Mobile",
    icon: <FiSmartphone size={32} strokeWidth={1.2} />,
    label: "Native and Cross-Platform Mobile App Development",
    desc: "Get top-notch mobile applications that run on multiple platforms while providing your users with an app that fits their OS. Use this alternative to reduce costs and time-to-market and to reach more users without loss of quality.",
    highlights: ["iOS & Android", "React Native", "Flutter", "Time-to-Market"],
  },
  {
    id: "legacy",
    shortLabel: "Legacy System\nTransformation",
    icon: <FiRefreshCw size={32} strokeWidth={1.2} />,
    label: "Legacy System Transformation",
    desc: "Modernise aging infrastructure with minimal disruption — migrating monolithic systems to microservices, updating outdated stacks, and restoring performance and maintainability.",
    highlights: ["Microservices", "Re-platforming", "API-First", "Zero Downtime"],
  },
  {
    id: "iot",
    shortLabel: "Internet of\nThings",
    icon: <FiWifi size={32} strokeWidth={1.2} />,
    label: "Internet of Things",
    desc: "Connected device solutions that bridge the physical and digital — from sensor integration and edge computing to real-time dashboards and secure device management.",
    highlights: ["Edge Computing", "Sensor Integration", "Real-Time Data", "Device Management"],
  },
  {
    id: "ai",
    shortLabel: "Artificial\nIntelligence & ML",
    icon: <FiCpu size={32} strokeWidth={1.2} />,
    label: "Artificial Intelligence and Machine Learning",
    desc: "Intelligent systems that learn from your data — recommendation engines, predictive analytics, NLP pipelines, and computer vision tailored to travel industry use cases.",
    highlights: ["Predictive Analytics", "NLP", "Computer Vision", "Recommendations"],
  },
  {
    id: "blockchain",
    shortLabel: "Blockchain",
    icon: <FiLink size={32} strokeWidth={1.2} />,
    label: "Blockchain",
    desc: "Decentralised trust and transparency for travel ecosystems — smart contracts for loyalty programs, tokenised assets, and immutable audit trails for compliance.",
    highlights: ["Smart Contracts", "Loyalty Tokens", "Audit Trails", "DeFi Integrations"],
  },
];

const BLUE = "#60a5fa";
const BLUE_LIGHT = "rgba(59,130,246,0.15)";
const BLUE_MID = "#38bdf8";
const BLUE_BORDER = "rgba(59,130,246,0.35)";

/* ── Decorative circles – hidden on mobile ── */
function DecorativeCircles() {
  return (
    <div className="decor-circles" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[500, 700, 900].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ── Tab item – responsive width ── */
function ServiceTab({ service, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="tech-tab"
      style={{
        flex: "1 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "clamp(12px, 2vw, 20px) clamp(8px, 1.5vw, 16px)",
        background: "none",
        border: "none",
        borderBottom: isActive ? `2.5px solid ${BLUE_MID}` : "2.5px solid transparent",
        cursor: "pointer",
        transition: "border-color 0.25s",
        outline: "none",
        minWidth: "clamp(70px, 15vw, 100px)",
      }}
    >
      <span
        style={{
          color: isActive ? BLUE : "rgba(148,163,184,0.6)",
          transition: "color 0.25s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {service.icon}
      </span>

      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(9px, 2.5vw, 11.5px)",
          fontWeight: isActive ? 600 : 400,
          color: isActive ? BLUE : "rgba(186,230,255,0.5)",
          textAlign: "center",
          lineHeight: 1.3,
          whiteSpace: "pre-line",
          transition: "color 0.25s",
        }}
      >
        {service.shortLabel}
      </span>
    </button>
  );
}

/* ── Content panel – fully responsive ── */
function ContentPanel({ service }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          gap: "clamp(20px, 4vw, 60px)",
          padding: "clamp(20px, 3vw, 32px) 0 clamp(16px, 2vw, 24px)",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <div style={{ minWidth: "clamp(160px, 25%, 260px)" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontWeight: 700,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.2px",
              lineHeight: 1.3,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {service.label}
          </h3>
        </div>

        <div style={{ flex: 1, minWidth: "clamp(200px, 50%, 480px)", display: "flex", flexDirection: "column", gap: 14 }}>
          <p
            style={{
              margin: 0,
              color: "rgba(186,230,255,0.70)",
              fontSize: "clamp(13px, 1.4vw, 15px)",
              lineHeight: 1.8,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {service.desc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {service.highlights.map((h, i) => (
              <motion.span
                key={h}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.05, duration: 0.3 }}
                style={{
                  fontSize: "clamp(10px, 1.2vw, 12px)",
                  fontWeight: 600,
                  color: BLUE,
                  background: BLUE_LIGHT,
                  border: `0.5px solid ${BLUE_BORDER}`,
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {h}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main export with media queries for horizontal scrolling tabs ── */
export default function TechnologyExpertise() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);

  // Scroll active tab into view on mobile when changed
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.children[active];
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [active]);

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
        padding: "clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 80px)",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        borderTop: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Blueprint grid – hidden on mobile via media query */}
      <svg className="bg-pattern" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="techgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#techgrid)" />
      </svg>

      {/* Animated orbs – hidden on mobile */}
      <div className="bg-orbs">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.26, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: -120, left: -80, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ position: "absolute", bottom: -80, right: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }}
        />
      </div>

      <DecorativeCircles />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 48px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 5vw, 32px)",
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            Technology Expertise for Travel
            <br />
            Software Solutions
          </h2>
        </div>

        {/* tab row – horizontally scrollable on narrow screens */}
        <div
          ref={tabsRef}
          className="tab-row"
          style={{
            display: "flex",
            borderBottom: "1px solid rgba(59,130,246,0.2)",
            overflowX: "auto",
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {services.map((svc, i) => (
            <ServiceTab
              key={svc.id}
              service={svc}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* content */}
        <ContentPanel service={services[active]} />
      </div>

      {/* Responsive CSS media queries */}
      <style>{`
        /* Hide decorative elements on tablet/mobile */
        @media (max-width: 1024px) {
          .bg-orbs, .decor-circles, .bg-pattern {
            display: none !important;
          }
        }
        /* Ensure tabs row scrolls nicely */
        @media (max-width: 768px) {
          .tab-row {
            gap: 0;
            padding-bottom: 8px;
          }
          .tab-row::-webkit-scrollbar {
            height: 3px;
          }
          .tab-row::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 4px;
          }
          .tab-row::-webkit-scrollbar-thumb {
            background: rgba(59,130,246,0.5);
            border-radius: 4px;
          }
        }
      `}</style>
    </section>
  );
}