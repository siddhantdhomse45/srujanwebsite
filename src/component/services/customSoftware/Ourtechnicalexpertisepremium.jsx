import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/*
 ╔═══════════════════════════════════════════════════════════════╗
 ║  OUR TECHNICAL EXPERTISE — Premium Dark Edition              ║
 ║                                                              ║
 ║  Layout: left vertical tab rail + right glassmorphism panel  ║
 ║  Theme:  deep navy, per-expertise accent colors              ║
 ║  Motion: staggered load, icon morph, panel crossfade         ║
 ╚═══════════════════════════════════════════════════════════════╝
*/

const E = [0.22, 1, 0.36, 1];

/* ─── Expertise data ─── */
const TABS = [
  {
    id: "fullstack",
    number: "01",
    label: "Full-Stack Application Development",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    tag: "Web & Mobile",
    title: "Full-Stack Application Development",
    body: "As a leading custom software development company, we excel in full-stack development, delivering high-performance web and mobile applications. Our expert software developers handle everything from Front-End Development to Middleware Integration and Back-End Development. We leverage modern technologies like React Native, NoSQL, and Git to ensure seamless integration and operational efficiency.",
    highlights: ["React & React Native", "Node.js / Python", "NoSQL & PostgreSQL", "REST & GraphQL APIs"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="36" height="26" rx="2"/>
        <line x1="20" y1="28" x2="20" y2="34"/>
        <line x1="12" y1="34" x2="28" y2="34"/>
        <line x1="8" y1="9" x2="20" y2="9"/>
        <line x1="8" y1="14" x2="17" y2="14"/>
        <line x1="8" y1="19" x2="19" y2="19"/>
        <rect x="23" y="8" width="10" height="13" rx="1"/>
      </svg>
    ),
  },
  {
    id: "uxui",
    number: "02",
    label: "UX/UI Design and Ideation",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    tag: "Design Systems",
    title: "UX/UI Design and Ideation",
    body: "Our design team specializes in creating intuitive and visually appealing interfaces. With a focus on user experience, we provide custom software development solutions that deliver seamless cross-platform functionality. From root cause analysis to animation design, we ensure your custom solutions enhance user engagement and deliver exceptional value.",
    highlights: ["Figma & Design Systems", "Prototyping & Testing", "Motion Design", "Accessibility (WCAG)"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="36" height="28" rx="2"/>
        <line x1="2" y1="10" x2="38" y2="10"/>
        <circle cx="6" cy="6" r="1.5"/>
        <circle cx="11" cy="6" r="1.5"/>
        <circle cx="16" cy="6" r="1.5"/>
        <rect x="7" y="15" width="6" height="9" rx="1"/>
        <rect x="17" y="13" width="6" height="11" rx="1"/>
        <path d="M29 22l4 8-2-1-1 3-1-3-2 1 2-8z"/>
      </svg>
    ),
  },
  {
    id: "ml",
    number: "03",
    label: "Machine Learning & AI Production",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.18)",
    tag: "AI & Data",
    title: "Machine Learning & AI Model Production",
    body: "We design and deploy scalable machine learning models and AI-driven systems tailored to your business. Our data scientists and ML engineers build end-to-end pipelines — from data ingestion and model training to production deployment — using frameworks like TensorFlow, PyTorch, and cloud-native MLOps tools to accelerate your AI transformation.",
    highlights: ["TensorFlow & PyTorch", "LLM Fine-tuning", "MLOps Pipelines", "Real-time Inference"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="30" height="22" rx="2"/>
        <line x1="2" y1="30" x2="38" y2="30"/>
        <path d="M6 18 Q10 10 14 15 Q18 20 22 12 Q26 4 30 10"/>
        <circle cx="32" cy="16" r="6"/>
        <line x1="36" y1="20" x2="40" y2="24"/>
      </svg>
    ),
  },
  {
    id: "power",
    number: "04",
    label: "Power, Notification & Location",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    tag: "Mobile Services",
    title: "Power Management, Notification & Location",
    body: "Our engineers build intelligent power management systems, real-time push notification platforms, and precise location-based services. We leverage native device APIs, geofencing, BLE, and cloud messaging infrastructure to deliver seamless experiences across iOS and Android — ensuring your application remains responsive, battery-efficient, and context-aware.",
    highlights: ["Push Notifications (FCM/APNs)", "Geofencing & BLE", "Battery Optimisation", "Background Services"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22c-4 0-6-2.7-6-6 0-2.9 2-5.3 4.8-5.9C7.6 6.8 11 4 15 4c4.7 0 8.5 3.4 8.9 7.8C26.3 12.2 28 14.2 28 17c0 4-3.4 7-7.5 7H8z"/>
        <ellipse cx="32" cy="20" rx="7" ry="2.5"/>
        <ellipse cx="32" cy="25" rx="7" ry="2.5"/>
        <line x1="25" y1="20" x2="25" y2="25"/>
        <line x1="39" y1="20" x2="39" y2="25"/>
        <ellipse cx="32" cy="30" rx="7" ry="2.5"/>
        <line x1="25" y1="25" x2="25" y2="30"/>
        <line x1="39" y1="25" x2="39" y2="30"/>
      </svg>
    ),
  },
  {
    id: "process",
    number: "05",
    label: "Process Consulting",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    tag: "Strategy",
    title: "Process Consulting",
    body: "Our process consulting practice helps organisations re-engineer workflows, eliminate inefficiencies, and build scalable operating models. We combine deep technical expertise with business strategy to map current-state processes, identify automation opportunities, and deliver transformation roadmaps that align technology investment with measurable business outcomes.",
    highlights: ["Workflow Automation", "Process Mapping (BPMN)", "RPA & Integration", "KPI & OKR Alignment"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="10" width="16" height="16" rx="2"/>
        <rect x="16" y="14" width="8" height="8" rx="1"/>
        <line x1="16" y1="10" x2="16" y2="6"/><line x1="20" y1="10" x2="20" y2="6"/><line x1="24" y1="10" x2="24" y2="6"/>
        <line x1="16" y1="26" x2="16" y2="30"/><line x1="20" y1="26" x2="20" y2="30"/><line x1="24" y1="26" x2="24" y2="30"/>
        <line x1="12" y1="16" x2="8" y2="16"/><line x1="12" y1="20" x2="8" y2="20"/>
        <line x1="28" y1="16" x2="32" y2="16"/><line x1="28" y1="20" x2="32" y2="20"/>
      </svg>
    ),
  },
  {
    id: "legacy",
    number: "06",
    label: "Legacy Software Re-Engineering",
    accent: "#dc2626",
    glow: "rgba(220,38,38,0.18)",
    tag: "Modernisation",
    title: "Legacy Software Re-Engineering",
    body: "We modernize outdated systems without disrupting business continuity. Our legacy re-engineering service covers complete architecture assessment, incremental migration strategies, API-first refactoring, and cloud adoption. Whether replacing a monolith with microservices or migrating from on-premise to cloud, we de-risk the transition while preserving institutional knowledge.",
    highlights: ["Monolith → Microservices", "Cloud Migration (AWS/Azure)", "API-First Refactoring", "Zero-Downtime Cutover"],
    icon: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="9"/>
        <circle cx="20" cy="18" r="3.5"/>
        <line x1="20" y1="2" x2="20" y2="7"/>
        <line x1="20" y1="29" x2="20" y2="34"/>
        <line x1="4" y1="18" x2="9" y2="18"/>
        <line x1="31" y1="18" x2="36" y2="18"/>
        <line x1="7.5" y1="5.5" x2="11" y2="9"/>
        <line x1="29" y1="27" x2="32.5" y2="30.5"/>
        <line x1="32.5" y1="5.5" x2="29" y2="9"/>
        <line x1="11" y1="27" x2="7.5" y2="30.5"/>
        <circle cx="33" cy="9" r="3.5"/>
        <circle cx="33" cy="9" r="1.5"/>
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Left sidebar tab item ── */
function SideTab({ tab, isActive, onClick, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: E }}
      onClick={() => onClick(tab.id)}
      style={{
        width: "100%", background: "none", border: "none",
        cursor: "pointer", padding: 0, textAlign: "left", outline: "none",
        position: "relative",
      }}
    >
      <motion.div
        animate={{
          background: isActive
            ? `linear-gradient(90deg, ${tab.accent}18, ${tab.accent}08)`
            : "transparent",
          borderColor: isActive ? `${tab.accent}55` : "rgba(255,255,255,0.05)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "16px 20px", borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Active left bar */}
        <motion.div
          animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
          initial={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: E }}
          style={{
            position: "absolute", left: 0, top: 8, bottom: 8,
            width: 3, borderRadius: "0 3px 3px 0",
            background: tab.accent,
            transformOrigin: "top",
          }}
        />

        {/* Icon container */}
        <motion.div
          animate={{
            background: isActive ? `${tab.accent}20` : "rgba(255,255,255,0.04)",
            color: isActive ? tab.accent : "rgba(255,255,255,0.35)",
            borderColor: isActive ? `${tab.accent}40` : "rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            border: "1px solid",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {tab.icon}
        </motion.div>

        {/* Text */}
        <div style={{ minWidth: 0 }}>
          <motion.div
            animate={{ color: isActive ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.22)" }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 10, letterSpacing: 2.5,
              textTransform: "uppercase", marginBottom: 4,
            }}
          >
            {tab.number}
          </motion.div>
          <motion.div
            animate={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.52)" }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: isActive ? 600 : 400,
              fontSize: 13, lineHeight: 1.45,
            }}
          >
            {tab.label}
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6, color: tab.accent }}
          transition={{ duration: 0.3 }}
          style={{ marginLeft: "auto", flexShrink: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h8M8 4l3 3-3 3"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}

/* ── Right content panel ── */
function ContentPanel({ tab }) {
  return (
    <motion.div
      key={tab.id}
      initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: E }}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        border: `1px solid ${tab.accent}30`,
        borderRadius: 20,
        padding: "48px 44px",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 200, height: 200, borderRadius: "50%",
        background: `radial-gradient(circle, ${tab.glow}, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: E }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${tab.accent}, ${tab.accent}33)`,
          transformOrigin: "left",
        }}
      />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: E }}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          marginBottom: 24,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: tab.accent, boxShadow: `0 0 8px ${tab.accent}` }} />
        <span style={{
          fontFamily: "'Barlow', sans-serif", fontWeight: 700,
          fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
          color: tab.accent,
        }}>
          {tab.tag}
        </span>
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 2 }}>
          / {tab.number}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.6, ease: E }}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: "clamp(22px, 2.2vw, 34px)",
          textTransform: "uppercase", letterSpacing: 0.5,
          lineHeight: 1.08, color: "#ffffff",
          margin: "0 0 24px",
        }}
      >
        {tab.title}
      </motion.h3>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.26, duration: 0.6, ease: E }}
        style={{
          height: 1, width: "100%",
          background: `linear-gradient(90deg, ${tab.accent}50, rgba(255,255,255,0.06))`,
          marginBottom: 24, transformOrigin: "left",
        }}
      />

      {/* Body */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: E }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 15.5, lineHeight: 1.9,
          color: "rgba(255,255,255,0.55)",
          margin: "0 0 36px",
        }}
      >
        {tab.body}
      </motion.p>

      {/* Highlights chips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.55, ease: E }}
      >
        <div style={{
          fontFamily: "'Barlow', sans-serif", fontWeight: 700,
          fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)", marginBottom: 14,
        }}>
          Key Technologies
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {tab.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.07, duration: 0.4, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600, fontSize: 12,
                color: tab.accent,
                background: `${tab.accent}14`,
                border: `1px solid ${tab.accent}30`,
                borderRadius: 8,
                padding: "6px 14px",
                letterSpacing: 0.3,
              }}
            >
              {h}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        whileHover={{ scale: 1.04, boxShadow: `0 0 24px ${tab.accent}55` }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          marginTop: 36,
          background: `linear-gradient(135deg, ${tab.accent}, ${tab.accent}cc)`,
          color: "#fff", textDecoration: "none",
          fontFamily: "'Barlow', sans-serif", fontWeight: 700,
          fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
          padding: "12px 24px", borderRadius: 8,
          boxShadow: `0 0 16px ${tab.accent}30`,
        }}
      >
        Learn More
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6h8M7 3l3 3-3 3"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function OurTechnicalExpertisePremium() {
  const [activeId, setActiveId] = useState("fullstack");
  const activeTab = TABS.find((t) => t.id === activeId);
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const headInV = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .exp-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          align-items: start;
        }
        .exp-mobile-tabs {
          display: none;
        }
        @media (max-width: 1024px) {
          .exp-layout {
            grid-template-columns: 280px 1fr;
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .exp-layout {
            grid-template-columns: 1fr;
          }
          .exp-sidebar {
            display: none !important;
          }
          .exp-mobile-tabs {
            display: flex !important;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 24px;
          }
          .exp-section {
            padding: 72px 24px 88px !important;
          }
          .exp-header {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
          }
          .exp-subtitle {
            text-align: left !important;
          }
        }
        @media (max-width: 480px) {
          .exp-section { padding: 60px 16px 72px !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="exp-section"
        style={{
          position: "relative",
          background: "linear-gradient(158deg, #050b18 0%, #08142a 50%, #05101e 100%)",
          padding: "112px 64px 128px",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 640, height: 640, background: "rgba(59,130,246,0.07)", top: -200, left: -160 }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(168,85,247,0.06)", bottom: -100, right: -100 }} />
        <Orb style={{ width: 360, height: 360, background: "rgba(16,185,129,0.05)", top: "40%", left: "35%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-12%",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div
            ref={headRef}
            className="exp-header"
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={headInV ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: E }}
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
              >
                <div style={{ width: 36, height: 2.5, background: "#3b82f6", borderRadius: 2 }} />
                <span style={{
                  fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                  fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: "#3b82f6",
                }}>
                  What We Build
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 58px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  lineHeight: 1.06,
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Our Technical{" "}
                <span style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Expertise
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="exp-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 15, lineHeight: 1.85,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 380, margin: 0,
                textAlign: "right",
              }}
            >
              Six core disciplines powering our clients' most ambitious digital products.
            </motion.p>
          </div>

          {/* ── Gradient rule ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInV ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: E }}
            style={{
              height: 1.5, width: "100%", marginBottom: 48,
              background: "linear-gradient(90deg, #3b82f6, #06b6d4 40%, #a855f7 75%, transparent)",
              transformOrigin: "left", borderRadius: 2,
            }}
          />

          {/* ── Mobile pill tabs (hidden on desktop) ── */}
          <div className="exp-mobile-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                style={{
                  background: activeId === tab.id ? `${tab.accent}20` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeId === tab.id ? tab.accent + "55" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 8, padding: "8px 16px",
                  fontFamily: "'Barlow', sans-serif", fontWeight: 600,
                  fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
                  color: activeId === tab.id ? tab.accent : "rgba(255,255,255,0.45)",
                  cursor: "pointer", outline: "none",
                  transition: "all 0.25s",
                }}
              >
                {tab.number}
              </button>
            ))}
          </div>

          {/* ── Main layout: sidebar + panel ── */}
          <div className="exp-layout">
            {/* Left: vertical tab rail */}
            <div
              className="exp-sidebar"
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              {TABS.map((tab, i) => (
                <SideTab
                  key={tab.id}
                  tab={tab}
                  isActive={activeId === tab.id}
                  onClick={setActiveId}
                  index={i}
                />
              ))}
            </div>

            {/* Right: content panel */}
            <AnimatePresence mode="wait">
              <ContentPanel key={activeId} tab={activeTab} />
            </AnimatePresence>
          </div>

        </div>
      </section>
    </>
  );
}