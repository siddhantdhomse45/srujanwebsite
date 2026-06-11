import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiSmartphone, FiGift, FiLink, FiDatabase,
  FiCode, FiPackage, FiArrowRight, FiRefreshCw, FiChevronRight,
} from "react-icons/fi";

const solutions = [
  {
    id: "legacy",
    label: "Legacy System Transformation",
    icon: <FiRefreshCw size={20} strokeWidth={1.6} />,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    featured: true,
    desc: "Hospitality modernization can be an open-ended journey to streamline process efficiency, improve business performance, and create new ways of serving your clients. Fully automated migration uses technology to convert legacy code and data to modern solutions, allowing hospitality organizations to tackle modernization initiatives that align with business objectives.",
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    icon: <FiSmartphone size={20} strokeWidth={1.6} />,
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    desc: "Native and cross-platform mobile experiences for hotel guests, restaurant patrons and travel customers — from room service apps to loyalty dashboards and concierge tools.",
  },
  {
    id: "loyalty",
    label: "Loyalty and Reward System Development",
    icon: <FiGift size={20} strokeWidth={1.6} />,
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    desc: "Custom loyalty engines with tiered rewards, points management, push-triggered offers and deep CRM integration to increase repeat visits and lifetime guest value.",
  },
  {
    id: "microservices",
    label: "Microservices and Third-party Integration",
    icon: <FiLink size={20} strokeWidth={1.6} />,
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    desc: "API-first microservice architecture that connects PMS, POS, channel managers, OTAs and payment gateways into a single, event-driven platform.",
  },
  {
    id: "bigdata",
    label: "Big Data Services",
    icon: <FiDatabase size={20} strokeWidth={1.6} />,
    accent: "#fbbf24",
    grad: "linear-gradient(135deg,#d97706,#fbbf24)",
    desc: "Real-time analytics pipelines, demand forecasting models and guest-behaviour dashboards that turn raw hospitality data into revenue-driving decisions.",
  },
  {
    id: "integration",
    label: "Custom Software Integration",
    icon: <FiCode size={20} strokeWidth={1.6} />,
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    desc: "Seamless integration of existing software stacks — ERP, CRM, HR, finance and operations — into a unified workflow without costly rip-and-replace migrations.",
  },
  {
    id: "custom",
    label: "Custom Software Development Solutions",
    icon: <FiPackage size={20} strokeWidth={1.6} />,
    accent: "#60a5fa",
    grad: "linear-gradient(135deg,#2563eb,#60a5fa)",
    desc: "End-to-end bespoke platforms built around your brand's unique operational needs — from reservation engines to back-office suites and staff management tools.",
  },
];

/* ── Solution row (non-featured) ── */
function SolutionRow({ solution, index, activeId, onActivate }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const isActive = activeId === solution.id;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onActivate(solution.id)}
      style={{
        display: "flex", alignItems: "center",
        gap: 16, padding: "18px 20px",
        borderBottom: "1px solid rgba(59,130,246,0.12)",
        cursor: "pointer",
        background: isActive ? `${solution.accent}10` : "transparent",
        borderRadius: isActive ? 12 : 0,
        border: isActive ? `1px solid ${solution.accent}35` : undefined,
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Active left accent */}
      {isActive && (
        <motion.div
          layoutId="activeBarHosp"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: solution.grad, borderRadius: "12px 0 0 12px",
          }}
        />
      )}

      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: isActive ? solution.grad : `${solution.accent}12`,
        border: isActive ? "none" : `1px solid ${solution.accent}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: isActive ? "white" : solution.accent,
        boxShadow: isActive ? `0 4px 16px ${solution.accent}40` : "none",
        transition: "all 0.3s ease",
      }}>
        {solution.icon}
      </div>

      {/* Label */}
      <div style={{ flex: 1 }}>
        <span style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "clamp(13px,1.4vw,15px)",
          fontWeight: isActive ? 700 : 500,
          color: isActive ? "white" : "rgba(186,230,255,0.70)",
          transition: "color 0.3s",
          lineHeight: 1.4,
        }}>
          {solution.label}
        </span>
        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 6 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                margin: 0, color: "rgba(186,230,255,0.50)",
                fontSize: "clamp(11px,1.2vw,13px)",
                lineHeight: 1.65, fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {solution.desc}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Chevron */}
      <motion.div
        animate={{ rotate: isActive ? 90 : 0, x: isActive ? 3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ color: isActive ? solution.accent : "rgba(147,197,253,0.25)", flexShrink: 0 }}
      >
        <FiChevronRight size={18} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}

/* ── Device mockup (tablet + phone) ── */
function DeviceMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, scale: 0.96 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", height: 500, width: "100%" }}
    >
      {/* Glow behind devices */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(37,99,235,0.2),transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Tablet */}
      <motion.div
        style={{
          position: "absolute", left: 0, top: 20,
          width: 320, height: 420,
          borderRadius: 22,
          background: "rgba(4,21,48,0.95)",
          border: "1.5px solid rgba(59,130,246,0.25)",
          boxShadow: "0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(59,130,246,0.1)",
          overflow: "hidden", zIndex: 1,
        }}
      >
        {/* Tablet status bar */}
        <div style={{
          background: "rgba(2,11,24,0.98)", padding: "10px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid rgba(59,130,246,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
          </div>
          <span style={{ fontSize: 9, color: "rgba(148,163,184,0.4)", fontFamily: "'DM Sans',sans-serif" }}>15 MIN · ETA · TODAY · TABL</span>
        </div>

        {/* Tablet content */}
        <div style={{ position: "relative", height: "calc(100% - 36px)" }}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80"
            alt="Restaurant interior"
            style={{ width: "100%", height: "55%", objectFit: "cover", filter: "brightness(0.55)", display: "block" }}
          />
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "55%",
            background: "linear-gradient(to bottom,rgba(2,11,24,0.3),rgba(2,11,24,0.6))",
          }} />
          {/* Overlay text */}
          <div style={{ position: "absolute", top: "30%", left: 16, right: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: "white", fontFamily: "Georgia,serif", fontStyle: "italic", marginBottom: 4 }}>Café Salle</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans',sans-serif" }}>A two Michelin-star restaurant serving mind-blowing 180 degree river views</div>
          </div>
          {/* Bottom info panel */}
          <div style={{ padding: "14px 16px", background: "linear-gradient(180deg,#0a1628,#041530)" }}>
            <div style={{ fontSize: 9, color: "rgba(148,163,184,0.5)", fontFamily: "'DM Sans',sans-serif", marginBottom: 8 }}>MENU</div>
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
              {["Full Menu (3)"].map((m) => (
                <div key={m} style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(37,99,235,0.2)", border: "1px solid rgba(59,130,246,0.3)", fontSize: 9, color: "#60a5fa", fontFamily: "'DM Sans',sans-serif", fontWeight: 700 }}>{m}</div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 9, color: "rgba(148,163,184,0.5)", fontFamily: "'DM Sans',sans-serif" }}>Chef Profile</span>
              <span style={{ fontSize: 9, color: "rgba(148,163,184,0.7)", fontFamily: "'DM Sans',sans-serif" }}>Vincent Thierry</span>
            </div>
            <div style={{ fontSize: 9, color: "rgba(148,163,184,0.4)", fontFamily: "'DM Sans',sans-serif", marginTop: 8 }}>ADDRESS</div>
            <div style={{ fontSize: 8, color: "rgba(148,163,184,0.55)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5, marginTop: 2 }}>41st Floor, Siara Tower Bangkok 105 Silom Road</div>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", right: 20, top: 60,
          width: 185, height: 380,
          borderRadius: 32,
          background: "rgba(4,21,48,0.97)",
          border: "1.5px solid rgba(59,130,246,0.3)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 50px rgba(37,99,235,0.15)",
          overflow: "hidden", zIndex: 2,
        }}
      >
        {/* Status bar */}
        <div style={{
          background: "rgba(2,11,24,0.99)", padding: "10px 14px 8px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid rgba(59,130,246,0.1)",
        }}>
          <span style={{ fontSize: 8, color: "rgba(148,163,184,0.4)", fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>9:41</span>
          <div style={{ width: 28, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontSize: 8, color: "rgba(148,163,184,0.4)", fontFamily: "'DM Sans',sans-serif" }}>58%</span>
        </div>

        {/* Hero image */}
        <div style={{ height: 110, overflow: "hidden", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
            alt="Restaurant"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent,rgba(4,21,48,0.8))" }} />
          <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: "white", fontFamily: "Georgia,serif", fontStyle: "italic" }}>Café Salle</div>
          </div>
        </div>

        {/* Time slots */}
        <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(59,130,246,0.08)" }}>
          <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
            {["19:00", "19:15", "19:30", "19:45"].map((t, i) => (
              <div key={t} style={{
                padding: "4px 6px", borderRadius: 6, fontSize: 8, fontWeight: 700,
                fontFamily: "'DM Sans',sans-serif",
                background: i === 1 ? "linear-gradient(135deg,#1d4ed8,#4f46e5)" : "rgba(255,255,255,0.04)",
                border: i === 1 ? "none" : "1px solid rgba(59,130,246,0.15)",
                color: i === 1 ? "white" : "rgba(148,163,184,0.5)",
              }}>{t}</div>
            ))}
          </div>
        </div>

        {/* People selector */}
        <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(59,130,246,0.08)" }}>
          <div style={{ fontSize: 8, color: "rgba(148,163,184,0.4)", fontFamily: "'DM Sans',sans-serif", marginBottom: 6 }}>PEOPLE</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", fontSize: 14, cursor: "pointer" }}>−</div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif" }}>4</span>
              <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", fontSize: 14, cursor: "pointer" }}>+</div>
            </div>
            <div style={{ padding: "7px 14px", borderRadius: 8, background: "linear-gradient(135deg,#1d4ed8,#4f46e5)", fontSize: 9, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.05em" }}>BOOK NOW</div>
          </div>
        </div>

        {/* See availability */}
        <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(59,130,246,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 9, color: "#60a5fa", fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>See Future Availability</span>
          <FiChevronRight size={12} color="#60a5fa" />
        </div>

        {/* Actions */}
        <div style={{ padding: "10px 12px 14px" }}>
          {[["Phone", "+66 (0) 626 5555"], ["Address", "41st Floor, Siara Tower"]].map(([label, val]) => (
            <div key={label} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 8, color: "rgba(148,163,184,0.35)", fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.08em" }}>{label.toUpperCase()}</div>
              <div style={{ fontSize: 9, color: "rgba(148,163,184,0.65)", fontFamily: "'DM Sans',sans-serif", marginTop: 2 }}>{val}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Rating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.9, type: "spring", stiffness: 240, damping: 16 }}
        style={{
          position: "absolute", top: -12, right: 10,
          padding: "7px 14px", borderRadius: 10,
          background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
          boxShadow: "0 6px 20px rgba(37,99,235,0.5)",
          display: "flex", alignItems: "center", gap: 7, zIndex: 10,
        }}
      >
        <FiGift size={13} color="white" strokeWidth={2} />
        <span style={{ color: "white", fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Loyalty Ready</span>
      </motion.div>
    </motion.div>
  );
}

/* ── Decorative circles ── */
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[500, 700, 900].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ── Main Section ── */
export default function HospitalitySolutions() {
  const [activeId, setActiveId] = useState("legacy");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const activeFeature = solutions.find((s) => s.id === activeId);

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
        <defs><pattern id="hospgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hospgrid)" />
      </svg>

      {/* Animated orbs */}
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
            <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Hospitality Tech</span>
          </div>
          <h2 style={{ color: "white", fontSize: "clamp(26px,4.5vw,52px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.08, marginBottom: 20, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>
            Hospitality{" "}
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Software Solutions
            </span>
            <br />and Services
          </h2>
          <p style={{ color: "rgba(186,230,255,0.50)", fontSize: "clamp(14px,1.6vw,17px)", lineHeight: 1.9, maxWidth: 680, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            End-to-end technology solutions built for hotels, restaurants, and travel brands — from impactful mobile applications to comprehensive custom-made systems that leading brands rely on.
          </p>
        </motion.div>

        {/* ── 3-column body ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(260px,30%,360px) 1fr clamp(260px,28%,340px)",
          gap: "clamp(24px,3.5vw,52px)",
          alignItems: "start",
        }}>

          {/* LEFT: device mockup */}
          <DeviceMockup />

          {/* CENTER: solution list */}
          <div>
            {/* Featured card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderRadius: 18, padding: "24px 28px",
                background: "rgba(4,21,48,0.75)",
                border: "1px solid rgba(59,130,246,0.25)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                marginBottom: 12,
                cursor: "pointer",
              }}
              onClick={() => setActiveId("legacy")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#1d4ed8,#38bdf8)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 4px 16px rgba(37,99,235,0.45)" }}>
                  <FiRefreshCw size={20} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontSize: "clamp(14px,1.6vw,17px)", fontWeight: 800, color: "white", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>Legacy System Transformation</h3>
              </div>
              <div style={{ height: 2, background: "linear-gradient(90deg,#2563eb,#38bdf8)", borderRadius: 2, marginBottom: 14 }} />
              <p style={{ fontSize: "clamp(12px,1.3vw,14px)", lineHeight: 1.8, color: "rgba(186,230,255,0.60)", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>
                Hospitality modernization can be an open-ended journey to streamline process efficiency, improve business performance, and create new ways of serving your clients. Fully automated migration uses technology to convert legacy code and data to modern solutions, allowing hospitality organizations to tackle modernization initiatives that align with business objectives.
              </p>
            </motion.div>

            {/* Other rows */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {solutions.filter((s) => !s.featured).map((s, i) => (
                <SolutionRow key={s.id} solution={s} index={i} activeId={activeId} onActivate={setActiveId} />
              ))}
            </div>
          </div>

          {/* RIGHT: active feature panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: 22, padding: "clamp(22px,3vw,34px)",
                background: `${activeFeature?.accent}0c`,
                border: `1px solid ${activeFeature?.accent}30`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 16px 40px rgba(0,0,0,0.3),0 0 30px ${activeFeature?.accent}0e`,
                position: "relative", overflow: "hidden",
                top: 0,
              }}
            >
              {activeFeature && (
                <>
                  <div style={{ position: "absolute", top: -40, right: -20, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle,${activeFeature.accent}1a,transparent 70%)`, filter: "blur(28px)", pointerEvents: "none" }} />
                  <div style={{ height: 3, background: activeFeature.grad, borderRadius: 2, marginBottom: 22 }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: activeFeature.grad, display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: `0 6px 20px ${activeFeature.accent}45` }}>
                      {activeFeature.icon}
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${activeFeature.accent}14`, border: `1px solid ${activeFeature.accent}30`, borderRadius: 8, padding: "4px 12px" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: activeFeature.accent, boxShadow: `0 0 6px ${activeFeature.accent}`, flexShrink: 0 }} />
                      <span style={{ color: activeFeature.accent, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Featured</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "clamp(14px,1.8vw,19px)", fontWeight: 800, lineHeight: 1.3, marginBottom: 12, background: activeFeature.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'DM Sans',sans-serif" }}>
                    {activeFeature.label}
                  </h3>
                  <p style={{ color: "rgba(186,230,255,0.55)", fontSize: "clamp(12px,1.3vw,14px)", lineHeight: 1.8, margin: 0, fontFamily: "'DM Sans',sans-serif" }}>
                    {activeFeature.desc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${activeFeature.accent}40` }}
                    whileTap={{ scale: 0.97 }}
                    style={{ marginTop: 22, display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10, background: activeFeature.grad, border: "none", color: "white", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer", letterSpacing: "0.05em" }}
                  >
                    Learn More <FiArrowRight size={13} />
                  </motion.button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}