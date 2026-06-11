import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiWifi, FiCpu, FiNavigation, FiSmartphone,
  FiSettings, FiCode, FiArrowRight, FiShield,
} from "react-icons/fi";

const features = [
  {
    id: "android",
    label: "Android Auto",
    icon: <FiSmartphone size={20} strokeWidth={1.6} />,
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    desc: "Deep Android Auto integration enabling voice commands, Google Maps, media controls and hands-free communication directly from the vehicle's infotainment display.",
  },
  {
    id: "ford",
    label: "Ford SYNC AppLink",
    icon: <FiWifi size={20} strokeWidth={1.6} />,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    desc: "AppLink-certified apps that let drivers interact with smartphones through Ford SYNC voice recognition and steering-wheel controls without distraction.",
  },
  {
    id: "carplay",
    label: "Apple CarPlay",
    icon: <FiNavigation size={20} strokeWidth={1.6} />,
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    desc: "Seamless CarPlay experiences with Siri integration, Apple Maps, Messages and third-party apps optimised for in-dash touch and knob interaction.",
  },
  {
    id: "iot",
    label: "Internet of Things",
    icon: <FiCpu size={20} strokeWidth={1.6} />,
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    desc: "Connected vehicle IoT frameworks linking OBD-II data, telematics units, smart sensors and cloud dashboards for fleet health and predictive maintenance.",
  },
  {
    id: "custom",
    label: "Custom Automotive Software Solutions",
    icon: <FiSettings size={20} strokeWidth={1.6} />,
    accent: "#fbbf24",
    grad: "linear-gradient(135deg,#d97706,#fbbf24)",
    desc: "Bespoke in-vehicle software for OEMs and Tier-1 suppliers — from heads-up display overlays to long-haul navigation systems with offline map capabilities.",
  },
  {
    id: "embedded",
    label: "Embedded Software Development",
    icon: <FiCode size={20} strokeWidth={1.6} />,
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    desc: "AUTOSAR-compliant embedded firmware, RTOS-based control units and in-built tablet solutions for complex automotive and transport environments.",
  },
];

/* ── feature row ── */
function FeatureRow({ feature, index, activeId, onActivate }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const isActive = activeId === feature.id;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onActivate(feature.id)}
      style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: "clamp(12px,1.5vw,16px) clamp(14px,1.8vw,20px)",
        borderRadius: 14, cursor: "pointer",
        background: isActive ? `${feature.accent}14` : "rgba(255,255,255,0.02)",
        border: isActive ? `1px solid ${feature.accent}40` : "1px solid transparent",
        boxShadow: isActive ? `0 0 28px ${feature.accent}14` : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* active left bar */}
      {isActive && (
        <motion.div
          layoutId="activeBarAuto"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: feature.grad, borderRadius: "14px 0 0 14px",
          }}
          transition={{ duration: 0.35 }}
        />
      )}

      {/* icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: isActive ? feature.grad : `${feature.accent}12`,
        border: isActive ? "none" : `1px solid ${feature.accent}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: isActive ? "white" : feature.accent,
        boxShadow: isActive ? `0 4px 16px ${feature.accent}40` : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}>
        {feature.icon}
      </div>

      {/* label + expandable desc */}
      <div style={{ flex: 1 }}>
        <span style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "clamp(13px,1.4vw,15px)", fontWeight: isActive ? 700 : 500,
          color: isActive ? "white" : "rgba(186,230,255,0.65)",
          lineHeight: 1.4, transition: "color 0.3s",
        }}>
          {feature.label}
        </span>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              margin: "6px 0 0",
              color: "rgba(186,230,255,0.50)",
              fontSize: "clamp(11px,1.2vw,13px)", lineHeight: 1.65,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {feature.desc}
          </motion.p>
        )}
      </div>

      {/* chevron */}
      <motion.div
        animate={{ rotate: isActive ? 90 : 0, x: isActive ? 3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ color: isActive ? feature.accent : "rgba(147,197,253,0.25)", flexShrink: 0 }}
      >
        <FiArrowRight size={16} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}

/* ── phone mockup ── */
function MockupCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", height: 420 }}
    >
      {/* glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%)", pointerEvents: "none" }} />

      {/* Back phone */}
      <div style={{
        position: "absolute", left: 0, top: 40, width: 180,
        borderRadius: 28, overflow: "hidden",
        background: "rgba(4,21,48,0.92)",
        border: "1px solid rgba(59,130,246,0.22)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
        zIndex: 1,
      }}>
        <div style={{ background: "rgba(2,11,24,0.98)", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
          <span style={{ fontSize: 8, color: "rgba(148,163,184,0.5)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>●●● CELL</span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>12:30</span>
        </div>
        <div style={{ padding: "12px", background: "linear-gradient(180deg,#0a1628,#041530)", minHeight: 300 }}>
          {/* App bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, padding: "8px 10px", background: "rgba(59,130,246,0.1)", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)" }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#1d4ed8,#4f46e5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiNavigation size={12} color="white" />
            </div>
            <span style={{ fontSize: 10, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif" }}>My Cards</span>
          </div>
          <div style={{ fontSize: 9, color: "rgba(96,165,250,0.6)", fontFamily: "'DM Sans',sans-serif", marginBottom: 10, letterSpacing: "0.08em" }}>Tap the Card to see more</div>
          {/* Contact cards */}
          {[
            { name: "John Meo", role: "Software Engineer", color: "#1d4ed8" },
            { name: "@johny_m", role: "Android developer", color: "#4f46e5" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(59,130,246,0.12)", marginBottom: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${c.color},#6366f1)`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif" }}>{c.name[0]}</span>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "white", fontFamily: "'DM Sans',sans-serif" }}>{c.name}</div>
                <div style={{ fontSize: 8, color: "rgba(148,163,184,0.5)", fontFamily: "'DM Sans',sans-serif" }}>{c.role}</div>
              </div>
            </div>
          ))}
          {/* NFC / SMS tags */}
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            {["NFC", "SMS"].map((t) => (
              <div key={t} style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(37,99,235,0.2)", border: "1px solid rgba(59,130,246,0.3)", fontSize: 8, fontWeight: 800, color: "#60a5fa", fontFamily: "'DM Sans',sans-serif" }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Front phone (Connector app) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", right: 0, top: 0, width: 210,
          borderRadius: 36, overflow: "hidden",
          background: "rgba(4,21,48,0.97)",
          border: "1.5px solid rgba(59,130,246,0.3)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(37,99,235,0.15)",
          zIndex: 2,
        }}
      >
        {/* Status bar */}
        <div style={{ background: "rgba(2,11,24,0.99)", padding: "10px 14px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
          <span style={{ fontSize: 8, color: "rgba(148,163,184,0.4)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>●●● GS</span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>9:41 AM</span>
          <span style={{ fontSize: 8, color: "rgba(148,163,184,0.4)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>58%</span>
        </div>

        {/* App screen */}
        <div style={{ padding: "28px 20px 32px", background: "linear-gradient(180deg,#0d1f3c 0%,#020b18 100%)", textAlign: "center", minHeight: 320 }}>
          {/* Logo mark */}
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#1d4ed8,#6366f1)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(37,99,235,0.5)" }}>
            <svg viewBox="0 0 40 40" width="36" height="36">
              <polygon points="4,36 20,4 36,36" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinejoin="round" />
              <polygon points="10,36 20,16 30,36" fill="#818cf8" opacity="0.6" />
            </svg>
          </div>
          <div style={{ fontSize: 9, color: "rgba(148,163,184,0.4)", fontFamily: "'DM Sans',sans-serif", marginBottom: 4, letterSpacing: "0.05em" }}>an intellectsoft company</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: "white", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.12em", marginBottom: 28 }}>CONNECTOR</div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 32 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: i === 1 ? 20 : 6, height: 6, borderRadius: 3, background: i === 1 ? "linear-gradient(90deg,#2563eb,#6366f1)" : "rgba(59,130,246,0.25)", transition: "all 0.3s" }} />
            ))}
          </div>

          {/* Ford logo area */}
          <div style={{ width: "100%", padding: "18px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <div style={{ width: 80, height: 40, borderRadius: 20, border: "2px solid #1d4ed8", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(29,78,216,0.12)" }}>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#60a5fa", fontFamily: "Georgia, serif", fontStyle: "italic", letterSpacing: "0.02em" }}>Ford</span>
            </div>
          </div>

          {/* Caption */}
          <div style={{ marginTop: 16, fontSize: 9, color: "rgba(148,163,184,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.06em" }}>FORD SYNC APPLINK</div>
        </div>
      </motion.div>

      {/* ISO / Certified badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, type: "spring", stiffness: 240, damping: 16 }}
        style={{
          position: "absolute", top: -14, left: -10,
          background: "linear-gradient(135deg,#059669,#34d399)",
          borderRadius: 10, padding: "6px 12px",
          boxShadow: "0 6px 20px rgba(52,211,153,0.40)",
          display: "flex", alignItems: "center", gap: 6, zIndex: 10,
        }}
      >
        <FiShield size={13} color="white" strokeWidth={2} />
        <span style={{ color: "white", fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>AUTOSAR Compliant</span>
      </motion.div>
    </motion.div>
  );
}

/* ── decorative circles ── */
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[400, 560, 720].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ── main section ── */
export default function AutoPlatforms() {
  const [activeId, setActiveId] = useState("android");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const activeFeature = features.find((f) => f.id === activeId);

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(80px,14vw,140px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Blueprint grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="autogrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#autogrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -100, left: -80, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#3b82f6,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", bottom: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,#059669,#34d399,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }}
      />

      <DecorativeCircles />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,5vw,48px)", position: "relative", zIndex: 10 }}>

        {/* ── Header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,7vw,72px)" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,0.12)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.28)", borderRadius: 100, padding: "6px 18px", marginBottom: 20 }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", boxShadow: "0 0 8px #60a5fa", display: "inline-block" }}
            />
            <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Automotive IT</span>
          </div>
          <h2 style={{ color: "white", fontSize: "clamp(24px,4.5vw,52px)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>
            In-Vehicle Connectivity{" "}
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              &amp; Auto Platforms
            </span>
          </h2>
          <p style={{ color: "rgba(186,230,255,0.50)", fontSize: "clamp(14px,1.7vw,17px)", lineHeight: 1.9, maxWidth: 800, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            Extend the user experience of your ecosystem to vehicles with automotive software solutions for key auto platforms. Provide drivers and passengers with new ways to stay connected while on the road with built-in connectivity suites or tethering and app mirroring. For more complex tasks like long-haul navigation, use custom embedded software and in-built tablet solutions.
          </p>
        </motion.div>

        {/* ── 3-column body ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr clamp(220px,26vw,320px) clamp(260px,28%,360px)",
          gap: "clamp(20px,3.5vw,48px)",
          alignItems: "center",
        }}>

          {/* LEFT: feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {features.map((f, i) => (
              <FeatureRow key={f.id} feature={f} index={i} activeId={activeId} onActivate={setActiveId} />
            ))}
          </div>

          {/* CENTER: phone mockup */}
          <MockupCard />

          {/* RIGHT: feature highlight */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: 22,
              padding: "clamp(24px,3vw,36px)",
              background: `${activeFeature?.accent}0c`,
              border: `1px solid ${activeFeature?.accent}30`,
              backdropFilter: "blur(20px)",
              boxShadow: `0 16px 40px rgba(0,0,0,0.25),0 0 30px ${activeFeature?.accent}10`,
              position: "relative", overflow: "hidden",
            }}
          >
            {activeFeature && (() => {
              const f = activeFeature;
              return (
                <>
                  <div style={{ position: "absolute", top: -40, right: -20, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle,${f.accent}20,transparent 70%)`, filter: "blur(28px)", pointerEvents: "none" }} />
                  <div style={{ height: 3, background: f.grad, borderRadius: 2, marginBottom: 22 }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: f.grad, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 6px 20px ${f.accent}45`, color: "white" }}>
                      {f.icon}
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${f.accent}14`, border: `1px solid ${f.accent}30`, borderRadius: 8, padding: "4px 12px" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: f.accent, boxShadow: `0 0 6px ${f.accent}`, flexShrink: 0 }} />
                      <span style={{ color: f.accent, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Featured</span>
                    </div>
                  </div>
                  <h3 style={{ color: "white", fontSize: "clamp(15px,1.8vw,19px)", fontWeight: 800, lineHeight: 1.3, marginBottom: 12, background: f.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'DM Sans',sans-serif" }}>
                    {f.label}
                  </h3>
                  <p style={{ color: "rgba(186,230,255,0.55)", fontSize: "clamp(12px,1.3vw,14px)", lineHeight: 1.8, margin: 0, fontFamily: "'DM Sans',sans-serif" }}>
                    {f.desc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${f.accent}40` }}
                    whileTap={{ scale: 0.97 }}
                    style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 20px", borderRadius: 10, background: f.grad, border: "none", color: "white", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer" }}
                  >
                    Learn More <FiArrowRight size={13} />
                  </motion.button>
                </>
              );
            })()}
          </motion.div>

        </div>
      </div>
    </section>
  );
}