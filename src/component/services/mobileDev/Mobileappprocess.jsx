import { useState, useRef } from "react";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiFilter, FiLayout, FiGitBranch, FiCode,
  FiCheckSquare, FiUploadCloud, FiSettings, FiChevronDown,
} from "react-icons/fi";

const steps = [
  {
    id: "planning",
    label: "Planning",
    icon: <FiFilter size={22} />,
    sdlcLabel: "PLANNING",
    desc: "We collaborate closely with you to gather all the necessary information to create a custom mobile app that perfectly aligns with your expectations.",
    highlights: ["Requirement Analysis", "Custom Roadmap", "Budget Planning", "Team Assembly"],
  },
  {
    id: "designing",
    label: "Designing",
    icon: <FiLayout size={22} />,
    sdlcLabel: "DESIGNING",
    desc: "Our team crafts detailed designs and documentation based on your requirements, ensuring the app's architecture and technology stack are tailored to your needs.",
    highlights: ["UI/UX Wireframes", "Prototyping", "Design System", "Architecture Docs"],
  },
  {
    id: "defining",
    label: "Defining",
    icon: <FiGitBranch size={22} />,
    sdlcLabel: "DEFINING",
    desc: "We establish clear technical specifications, define the project scope, and create a detailed blueprint ensuring every stakeholder is aligned before development begins.",
    highlights: ["Tech Specifications", "Scope Definition", "Milestone Planning", "Stakeholder Sign-off"],
  },
  {
    id: "building",
    label: "Building",
    icon: <FiCode size={22} />,
    sdlcLabel: "BUILDING",
    desc: "Our engineers build your application using agile sprints with bi-weekly reviews. We use modern frameworks and best coding practices to deliver a robust, scalable product.",
    highlights: ["Agile Sprints", "Code Reviews", "CI/CD Pipeline", "API Integration"],
  },
  {
    id: "testing",
    label: "Testing",
    icon: <FiCheckSquare size={22} />,
    sdlcLabel: "TESTING",
    desc: "Rigorous quality assurance across all devices and platforms. We run automated and manual tests covering performance, security, and user experience before every release.",
    highlights: ["Automated Tests", "Security Audits", "Performance Testing", "UAT Sessions"],
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: <FiUploadCloud size={22} />,
    sdlcLabel: "DEPLOYMENT",
    desc: "We manage a seamless rollout to app stores and production servers, handling all configuration, monitoring, and post-launch verification to ensure zero downtime.",
    highlights: ["App Store Release", "Zero-Downtime Deploy", "Live Monitoring", "Launch Verification"],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: <FiSettings size={22} />,
    sdlcLabel: "MAINTENANCE",
    desc: "Our dedicated support team keeps your app healthy, secure, and up to date. We provide continuous updates, performance optimisation, and fast bug resolution.",
    highlights: ["24/7 Monitoring", "Bug Resolution", "Feature Updates", "Performance Tuning"],
  },
];

/* ─── FIXED SDLC DIAGRAM – no overlapping ─── */
function SDLCDiagram({ active, onSelect }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Angles in degrees, evenly spaced (7 nodes)
  const angles = [
    { id: "planning",    angle: 195 },
    { id: "designing",   angle: 135 },
    { id: "defining",    angle: 75 },
    { id: "building",    angle: 15 },
    { id: "testing",     angle: 345 },
    { id: "deployment",  angle: 285 },
    { id: "maintenance", angle: 240 },
  ];

  // Circle centre and radius (%)
  const cx = 50, cy = 52, radius = 38;

  const getPosition = (angle) => {
    const rad = (angle - 90) * Math.PI / 180;
    const x = cx + radius * Math.cos(rad);
    const y = cy + radius * Math.sin(rad);
    return { top: `${y}%`, left: `${x}%` };
  };

  // Offset for labels (further outward from the centre)
  const labelOffset = 11; // percentage points

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1/1",
        maxWidth: 560,
        margin: "0 auto",
      }}
    >
      {/* SVG background – circular path */}
      <svg
        viewBox="0 0 100 100"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sdlcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="52" r="38"
          fill="none" stroke="url(#sdlcGrad)" strokeWidth="1.2"
          strokeDasharray="6 4" opacity="0.6"
        />
        <text x="50" y="54" textAnchor="middle"
          fill="rgba(147,197,253,0.3)" fontSize="9" fontWeight="900"
          fontFamily="'DM Sans', sans-serif" letterSpacing="2"
        >
          SDLC
        </text>
      </svg>

      {/* Nodes and labels */}
      {angles.map(({ id, angle }) => {
        const pos = getPosition(angle);
        const step = steps.find(s => s.id === id);
        const isActive = active === id;
        const nodeSize = isActive ? "clamp(56px, 8vw, 72px)" : "clamp(48px, 6vw, 58px)";
        const iconSize = isActive ? 24 : 20;

        // Calculate label position (radially outward)
        const rad = (angle - 90) * Math.PI / 180;
        const labelX = cx + (radius + labelOffset) * Math.cos(rad);
        const labelY = cy + (radius + labelOffset) * Math.sin(rad);

        return (
          <div key={id}>
            {/* Node button */}
            <motion.button
              onClick={() => onSelect(id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "absolute",
                top: pos.top, left: pos.left,
                transform: "translate(-50%, -50%)",
                width: nodeSize, height: nodeSize,
                borderRadius: "50%",
                background: isActive
                  ? "linear-gradient(135deg,#1d4ed8,#3b82f6)"
                  : "rgba(30,58,138,0.7)",
                border: isActive
                  ? "2.5px solid #60a5fa"
                  : "1.5px solid rgba(59,130,246,0.45)",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(12px)",
                boxShadow: isActive
                  ? "0 0 32px rgba(59,130,246,0.5)"
                  : "0 4px 16px rgba(0,0,0,0.3)",
                cursor: "pointer",
                outline: "none",
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                zIndex: 10,
              }}
            >
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: "absolute", inset: -4, borderRadius: "50%",
                    border: "1.5px solid #60a5fa", pointerEvents: "none",
                  }}
                />
              )}
              <span style={{ color: isActive ? "white" : "rgba(147,197,253,0.85)", lineHeight: 1 }}>
                {React.cloneElement(step.icon, { size: iconSize })}
              </span>
            </motion.button>

            {/* Label – clearly outside the circle */}
            <div
              style={{
                position: "absolute",
                top: `${labelY}%`, left: `${labelX}%`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                zIndex: 5,
              }}
            >
              <span style={{
                fontSize: "clamp(9px, 1.4vw, 12px)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isActive ? "#60a5fa" : "rgba(147,197,253,0.5)",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.3s",
                textShadow: isActive ? "0 0 6px rgba(96,165,250,0.4)" : "none",
              }}>
                {step.sdlcLabel}
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

/* ─── Accordion item (unchanged) ─── */
function AccordionItem({ step, isOpen, onToggle, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: "1px solid rgba(59,130,246,0.12)", overflow: "hidden" }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          gap: 16, padding: "clamp(14px,2vw,20px) 0",
          background: "transparent", border: "none", cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: isOpen
            ? "linear-gradient(135deg,#1d4ed8,#3b82f6)"
            : "rgba(30,58,138,0.35)",
          border: isOpen ? "none" : "1px solid rgba(59,130,246,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isOpen ? "white" : "rgba(147,197,253,0.60)",
          boxShadow: isOpen ? "0 4px 18px rgba(59,130,246,0.40)" : "none",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}>
          {step.icon}
        </div>
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "clamp(14px,1.8vw,17px)", fontWeight: 700,
          color: isOpen ? "#60a5fa" : "rgba(255,255,255,0.75)",
          transition: "color 0.3s",
          letterSpacing: "-0.2px",
        }}>
          {step.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: isOpen ? "#60a5fa" : "rgba(147,197,253,0.40)", flexShrink: 0 }}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              paddingBottom: "clamp(16px,2.5vw,24px)",
              paddingLeft: 60,
            }}>
              <div style={{
                borderLeft: "2px solid rgba(59,130,246,0.35)",
                paddingLeft: 16,
              }}>
                <p style={{
                  color: "rgba(186,230,255,0.60)",
                  fontSize: "clamp(13px,1.5vw,15px)",
                  lineHeight: 1.85, margin: "0 0 16px",
                  fontFamily: "'DM Sans',sans-serif",
                }}>
                  {step.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {step.highlights.map((h, i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35 }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "5px 12px", borderRadius: 100,
                        background: "rgba(59,130,246,0.10)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        color: "#93c5fd",
                        fontSize: "clamp(10px,1.2vw,12px)", fontWeight: 600,
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#60a5fa", boxShadow: "0 0 5px #60a5fa", flexShrink: 0 }} />
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── MAIN ─── */
export default function MobileAppProcess() {
  const [openId, setOpenId] = useState("planning");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* background grid and orbs (unchanged) */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mapgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapgrid)" />
      </svg>

      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.14, 0.24, 0.14] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -100, left: -80, width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.20, 0.12] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: -80, right: -80, width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,5vw,48px)", position: "relative", zIndex: 10 }}>

        {/* header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,72px)" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.10)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 20,
          }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8", display: "inline-block" }}
            />
            <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Development Lifecycle
            </span>
          </div>

          <h2 style={{
            color: "white", fontSize: "clamp(22px,4vw,50px)",
            fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 20,
          }}>
            Key Steps in Our{" "}
            <span style={{ background: "linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Mobile App Development
            </span>
            {" "}Process
          </h2>

          <p style={{
            color: "rgba(186,230,255,0.50)",
            fontSize: "clamp(14px,1.7vw,17px)",
            lineHeight: 1.85, maxWidth: 700, margin: "0 auto",
          }}>
            Tailored to your needs and budget, we use top practices to build mobile app solutions
            quickly and efficiently. Enjoy a smooth development process with clear communication
            with our professional team.
          </p>
        </motion.div>

        {/* two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(280px,45%,540px) 1fr",
          gap: "clamp(32px,6vw,80px)",
          alignItems: "center",
        }}>
          <div>
            {steps.map((step, i) => (
              <AccordionItem
                key={step.id}
                step={step}
                index={i}
                isOpen={openId === step.id}
                onToggle={() => toggle(step.id)}
              />
            ))}
          </div>
          <SDLCDiagram
            active={openId}
            onSelect={(id) => setOpenId(prev => prev === id ? prev : id)}
          />
        </div>

      </div>
    </section>
  );
}