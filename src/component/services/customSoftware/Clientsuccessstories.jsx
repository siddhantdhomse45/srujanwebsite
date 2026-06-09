import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

/*
 ╔═══════════════════════════════════════════════════════════════╗
 ║  CLIENT SUCCESS STORIES — Premium Carousel                   ║
 ║  • 3 slides, one at a time                                   ║
 ║  • Left photo + right content layout                         ║
 ║  • Left/right arrow navigation                               ║
 ║  • Dot indicators                                            ║
 ║  • Red "VIEW ALL CASES" CTA                                  ║
 ║  • Dark premium edition with glassmorphism                   ║
 ╚═══════════════════════════════════════════════════════════════╝
*/

const E = [0.22, 1, 0.36, 1];

/* ── Case study data ── */
const CASES = [
  {
    id: "event-portal",
    number: "01",
    title: "Event Portal Revamp",
    tag: "Web & Mobile",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    challenge:
      "The client required extra programmers to add new features to their event portal. The 10-year-old .NET platform needed modernizing and migration to Angular.",
    solution:
      "Workshops in Norway led to enhanced functionality and UX. Intellectsoft's team developed solutions for registrations, payments, and feedback evaluation. Additionally, we simplified event setup for organizers and streamlined registration page models.",
    tech: ["Angular", ".NET Migration", "Payment APIs", "UX Workshops"],
    result: "40% faster registration flow",
  },
  {
    id: "travel-mgmt",
    number: "02",
    title: "Travel Management Solutions",
    tag: "Cloud & iOS",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    challenge:
      "Eurostar needed a web and mobile app to automate ERP processes and enhance customer convenience across multiple touchpoints.",
    solution:
      "Intellectsoft created Eurostar iTM, a cloud solution for web and iOS. Expanding on the existing app, the team improved content management, user roles, reservation handling, reporting, and added an internal chat feature.",
    tech: ["iOS Native", "Cloud ERP", "Real-time Chat", "Reservation Engine"],
    result: "60% reduction in manual ERP tasks",
  },
  {
    id: "ai-healthcare",
    number: "03",
    title: "AI-Powered Healthcare Platform",
    tag: "AI & ML",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    challenge:
      "A leading healthcare provider needed an intelligent platform to streamline patient data management, automate diagnostics screening, and reduce administrative overhead across 50+ clinics.",
    solution:
      "We built a HIPAA-compliant AI platform integrating ML-based diagnostic assistance, automated scheduling, and a unified patient dashboard. Real-time data sync across all clinic locations was achieved via a custom API gateway.",
    tech: ["TensorFlow", "HIPAA Compliance", "HL7 FHIR", "React Native"],
    result: "74% reduction in admin overhead",
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(90px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ── Arrow button ── */
function ArrowBtn({ dir, onClick, accent }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, background: accent + "22", borderColor: accent + "88" }}
      whileTap={{ scale: 0.93 }}
      style={{
        width: 52, height: 52, borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", outline: "none", flexShrink: 0,
        transition: "background 0.25s, border-color 0.25s",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left"
          ? <path d="M11 4L6 9l5 5" />
          : <path d="M7 4l5 5-5 5" />}
      </svg>
    </motion.button>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function ClientSuccessStories() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1=right, -1=left
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const headInV = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const total = CASES.length;
  const activeCase = CASES[current];

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  /* Auto-advance every 6s */
  useEffect(() => {
    const t = setInterval(() => next(), 6000);
    return () => clearInterval(t);
  }, [next]);

  /* Slide variants */
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, filter: "blur(4px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, filter: "blur(4px)" }),
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .css-slide-layout {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .css-slide-img {
          aspect-ratio: 4/3;
          border-radius: 18px;
          overflow: hidden;
          width: 100%;
        }
        @media (max-width: 900px) {
          .css-slide-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .css-slide-img { aspect-ratio: 16/9; }
          .css-section { padding: 72px 28px 88px !important; }
          .css-nav-row { flex-direction: column; align-items: center; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .css-section { padding: 56px 16px 72px !important; }
          .css-h2 { font-size: 26px !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="css-section"
        style={{
          position: "relative",
          background: "linear-gradient(158deg, #050b18 0%, #080f22 55%, #050e1c 100%)",
          padding: "112px 64px 128px",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 700, height: 700, background: `${activeCase.glow.replace("0.18", "0.08")}`, top: -200, right: -200, transition: "background 0.6s" }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(59,130,246,0.06)", bottom: -100, left: -100 }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "44px 44px", y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Section header ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: E }}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <div style={{ width: 32, height: 2, background: "#dc2626", borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: "#dc2626",
              }}>
                Case Studies
              </span>
              <div style={{ width: 32, height: 2, background: "#dc2626", borderRadius: 2 }} />
            </motion.div>

            <motion.h2
              className="css-h2"
              initial={{ opacity: 0, y: 28 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: E }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(26px, 4vw, 54px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: 1.06,
                margin: 0,
                color: "#ffffff",
              }}
            >
              Client{" "}
              <span style={{
                background: "linear-gradient(90deg, #dc2626, #f87171)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Success
              </span>{" "}Stories
            </motion.h2>

            {/* Slide counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={headInV ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: 16,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 13,
                letterSpacing: 2, color: "rgba(255,255,255,0.25)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.6)" }}>{String(current + 1).padStart(2, "0")}</span>
              {" / "}
              {String(total).padStart(2, "0")}
            </motion.div>
          </div>

          {/* ── Gradient rule ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInV ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: E }}
            style={{
              height: 1.5, width: "100%", marginBottom: 56,
              background: "linear-gradient(90deg, #dc2626, #f87171 40%, rgba(255,255,255,0.08) 100%)",
              transformOrigin: "left", borderRadius: 2,
            }}
          />

          {/* ── Slide content ── */}
          <div style={{ position: "relative", minHeight: 420 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeCase.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: E }}
                className="css-slide-layout"
              >
                {/* LEFT — image */}
                <div className="css-slide-img" style={{ position: "relative" }}>
                  {/* Accent border overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                      position: "absolute", inset: 0,
                      borderRadius: 18,
                      boxShadow: `inset 0 0 0 1px ${activeCase.accent}40`,
                      zIndex: 2, pointerEvents: "none",
                    }}
                  />
                  {/* Number badge */}
                  <div style={{
                    position: "absolute", top: 20, left: 20, zIndex: 3,
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${activeCase.accent}44`,
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800, fontSize: 13, letterSpacing: 3,
                    color: activeCase.accent,
                  }}>
                    {activeCase.number}
                  </div>
                  {/* Tag badge */}
                  <div style={{
                    position: "absolute", bottom: 20, left: 20, zIndex: 3,
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${activeCase.accent}44`,
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700, fontSize: 10,
                    letterSpacing: 2.5, textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                  }}>
                    {activeCase.tag}
                  </div>
                  <img
                    src={activeCase.image}
                    alt={activeCase.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {/* Dark gradient bottom */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "45%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* RIGHT — content */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${activeCase.accent}28`,
                  borderRadius: 20,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Top accent bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2.5,
                    background: `linear-gradient(90deg, ${activeCase.accent}, ${activeCase.accent}33)`,
                  }} />
                  {/* Corner glow */}
                  <div style={{
                    position: "absolute", top: -50, right: -50,
                    width: 180, height: 180, borderRadius: "50%",
                    background: `radial-gradient(circle, ${activeCase.glow}, transparent 70%)`,
                    pointerEvents: "none",
                  }} />

                  {/* Tag + number */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeCase.accent, boxShadow: `0 0 8px ${activeCase.accent}` }} />
                    <span style={{
                      fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                      fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                      color: activeCase.accent,
                    }}>
                      {activeCase.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(20px, 2.2vw, 32px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.4px",
                    lineHeight: 1.1,
                    color: "#ffffff",
                    margin: "0 0 28px",
                  }}>
                    {activeCase.title}
                  </h3>

                  {/* Divider */}
                  <div style={{
                    height: 1, width: "100%",
                    background: `linear-gradient(90deg, ${activeCase.accent}44, rgba(255,255,255,0.06))`,
                    marginBottom: 24,
                  }} />

                  {/* Challenge */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 3, height: 14, background: activeCase.accent, borderRadius: 2, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                        fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                        color: activeCase.accent,
                      }}>
                        Challenge
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 14.5, lineHeight: 1.85,
                      color: "rgba(255,255,255,0.6)",
                      margin: 0, paddingLeft: 11,
                    }}>
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 3, height: 14, background: "#10b981", borderRadius: 2, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                        fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                        color: "#10b981",
                      }}>
                        Solution
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 14.5, lineHeight: 1.85,
                      color: "rgba(255,255,255,0.6)",
                      margin: 0, paddingLeft: 11,
                    }}>
                      {activeCase.solution}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {activeCase.tech.map((t) => (
                      <span key={t} style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600, fontSize: 11,
                        color: activeCase.accent,
                        background: `${activeCase.accent}14`,
                        border: `1px solid ${activeCase.accent}30`,
                        borderRadius: 6, padding: "5px 12px",
                        letterSpacing: 0.3,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Result badge */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: 10, padding: "10px 18px",
                    marginBottom: 28,
                  }}>
                    <span style={{ fontSize: 16 }}>📈</span>
                    <span style={{
                      fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                      fontSize: 13, color: "#10b981",
                    }}>
                      {activeCase.result}
                    </span>
                  </div>

                  {/* View more */}
                  <div>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: activeCase.accent }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                        fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      <div style={{ width: 20, height: 1.5, background: "currentColor", borderRadius: 1 }} />
                      View More
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6h8M7 3l3 3-3 3"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Nav row: arrows + dots + CTA ── */}
          <div
            className="css-nav-row"
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              marginTop: 56, gap: 32, flexWrap: "wrap",
            }}
          >
            {/* Left arrow */}
            <ArrowBtn dir="left" onClick={prev} accent={activeCase.accent} />

            {/* Dots + progress */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {CASES.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8, borderRadius: 4,
                      background: i === current ? activeCase.accent : "rgba(255,255,255,0.18)",
                      border: "none", cursor: "pointer", padding: 0, outline: "none",
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: i === current ? `0 0 10px ${activeCase.accent}88` : "none",
                    }}
                  />
                ))}
              </div>
              {/* Auto-progress bar */}
              <div style={{ width: 120, height: 1.5, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  style={{ height: "100%", background: activeCase.accent, borderRadius: 2 }}
                />
              </div>
            </div>

            {/* Right arrow */}
            <ArrowBtn dir="right" onClick={next} accent={activeCase.accent} />
          </div>

          {/* ── VIEW ALL CASES CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: E }}
            style={{ display: "flex", justifyContent: "center", marginTop: 56 }}
          >
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                color: "#fff", textDecoration: "none",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700, fontSize: 12,
                letterSpacing: 2.5, textTransform: "uppercase",
                padding: "18px 56px", borderRadius: 4,
                boxShadow: "0 0 24px rgba(220,38,38,0.3)",
              }}
            >
              View All Cases
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
}