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
 ║  • Blue‑accented CTA & branding                              ║
 ║  • Dark theme with grid & orbs (consistent with other pages) ║
 ╚═══════════════════════════════════════════════════════════════╝
*/

const E = [0.22, 1, 0.36, 1];
const ACCENT = "#60a5fa";
const ACCENT_DARK = "#3b82f6";
const ACCENT_SOLUTION = "#38bdf8";

/* ── Case study data (updated accents to match theme) ── */
const CASES = [
  {
    id: "event-portal",
    number: "01",
    title: "Event Portal Revamp",
    tag: "Web & Mobile",
    accent: ACCENT_DARK,
    glow: "rgba(59,130,246,0.18)",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    challenge:
      "The client required extra programmers to add new features to their event portal. The 10-year-old .NET platform needed modernizing and migration to Angular.",
    solution:
      "Workshops in Norway led to enhanced functionality and UX.  Purple Techno-Vision LLP's team developed solutions for registrations, payments, and feedback evaluation. Additionally, we simplified event setup for organizers and streamlined registration page models.",
    tech: ["Angular", ".NET Migration", "Payment APIs", "UX Workshops"],
    result: "40% faster registration flow",
  },
  {
    id: "travel-mgmt",
    number: "02",
    title: "Travel Management Solutions",
    tag: "Cloud & iOS",
    accent: "#10b981",  // keep green for variety, but we'll use blue in UI accents mostly
    glow: "rgba(16,185,129,0.18)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    challenge:
      "Eurostar needed a web and mobile app to automate ERP processes and enhance customer convenience across multiple touchpoints.",
    solution:
      " Purple Techno-Vision LLP created Eurostar iTM, a cloud solution for web and iOS. Expanding on the existing app, the team improved content management, user roles, reservation handling, reporting, and added an internal chat feature.",
    tech: ["iOS Native", "Cloud ERP", "Real-time Chat", "Reservation Engine"],
    result: "60% reduction in manual ERP tasks",
  },
  {
    id: "ai-healthcare",
    number: "03",
    title: "AI-Powered Healthcare Platform",
    tag: "AI & ML",
    accent: "#a855f7",   // keep purple for variety
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

/* ── Decorative circles (consistent with other components) ── */
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[400, 600, 800].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ── Ambient orb (blurred radial gradient) ── */
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

/* ── Arrow button (dark theme, blue accent) ── */
function ArrowBtn({ dir, onClick, accent }) {
  const hoverColor = accent || ACCENT;
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, background: `${hoverColor}22`, borderColor: `${hoverColor}88` }}
      whileTap={{ scale: 0.93 }}
      style={{
        width: 52, height: 52, borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
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
  const activeAccent = activeCase.accent;

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
          background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
          padding: "112px 64px 128px",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Blueprint grid (consistent) ── */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="clientgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#clientgrid)" />
        </svg>

        {/* ── Animated orbs ── */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: -80, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ position: "absolute", bottom: -60, right: -20, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }}
        />

        <DecorativeCircles />

        {/* Parallax dot grid overlay */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "44px 44px", y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Section header (blue accent) ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: E }}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <div style={{ width: 32, height: 2, background: ACCENT, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: ACCENT,
              }}>
                Case Studies
              </span>
              <div style={{ width: 32, height: 2, background: ACCENT, borderRadius: 2 }} />
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
                background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})`,
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
                letterSpacing: 2, color: "rgba(255,255,255,0.35)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.7)" }}>{String(current + 1).padStart(2, "0")}</span>
              {" / "}
              {String(total).padStart(2, "0")}
            </motion.div>
          </div>

          {/* ── Gradient rule (blue) ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInV ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: E }}
            style={{
              height: 1.5, width: "100%", marginBottom: 56,
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK} 40%, rgba(255,255,255,0.08) 100%)`,
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
                      boxShadow: `inset 0 0 0 1px ${activeAccent}40`,
                      zIndex: 2, pointerEvents: "none",
                    }}
                  />
                  {/* Number badge */}
                  <div style={{
                    position: "absolute", top: 20, left: 20, zIndex: 3,
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${activeAccent}44`,
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800, fontSize: 13, letterSpacing: 3,
                    color: activeAccent,
                  }}>
                    {activeCase.number}
                  </div>
                  {/* Tag badge */}
                  <div style={{
                    position: "absolute", bottom: 20, left: 20, zIndex: 3,
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${activeAccent}44`,
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700, fontSize: 10,
                    letterSpacing: 2.5, textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
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

                {/* RIGHT — content (glass card) */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${activeAccent}28`,
                  borderRadius: 20,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Top accent bar (blue) */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2.5,
                    background: `linear-gradient(90deg, ${activeAccent}, ${activeAccent}33)`,
                  }} />
                  {/* Corner glow */}
                  <div style={{
                    position: "absolute", top: -50, right: -50,
                    width: 180, height: 180, borderRadius: "50%",
                    background: `radial-gradient(circle, ${activeAccent}22, transparent 70%)`,
                    pointerEvents: "none",
                  }} />

                  {/* Tag + number */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeAccent, boxShadow: `0 0 8px ${activeAccent}` }} />
                    <span style={{
                      fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                      fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                      color: activeAccent,
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
                    background: `linear-gradient(90deg, ${activeAccent}44, rgba(255,255,255,0.06))`,
                    marginBottom: 24,
                  }} />

                  {/* Challenge (blue accent) */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 3, height: 14, background: activeAccent, borderRadius: 2, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                        fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                        color: activeAccent,
                      }}>
                        Challenge
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 14.5, lineHeight: 1.85,
                      color: "rgba(255,255,255,0.7)",
                      margin: 0, paddingLeft: 11,
                    }}>
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* Solution (cyan accent) */}
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 3, height: 14, background: ACCENT_SOLUTION, borderRadius: 2, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                        fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                        color: ACCENT_SOLUTION,
                      }}>
                        Solution
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 14.5, lineHeight: 1.85,
                      color: "rgba(255,255,255,0.7)",
                      margin: 0, paddingLeft: 11,
                    }}>
                      {activeCase.solution}
                    </p>
                  </div>

                  {/* Tech chips (use active accent) */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {activeCase.tech.map((t) => (
                      <span key={t} style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600, fontSize: 11,
                        color: activeAccent,
                        background: `${activeAccent}14`,
                        border: `1px solid ${activeAccent}30`,
                        borderRadius: 6, padding: "5px 12px",
                        letterSpacing: 0.3,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Result badge (cyan) */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.25)",
                    borderRadius: 10, padding: "10px 18px",
                    marginBottom: 28,
                  }}>
                    <span style={{ fontSize: 16 }}>📈</span>
                    <span style={{
                      fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                      fontSize: 13, color: ACCENT_SOLUTION,
                    }}>
                      {activeCase.result}
                    </span>
                  </div>

                  {/* View more (blue) */}
                  <div>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: activeAccent }}
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

          {/* ── Nav row: arrows + dots + progress (blue accents) ── */}
          <div
            className="css-nav-row"
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              marginTop: 56, gap: 32, flexWrap: "wrap",
            }}
          >
            <ArrowBtn dir="left" onClick={prev} accent={activeAccent} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {CASES.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8, borderRadius: 4,
                      background: i === current ? activeAccent : "rgba(255,255,255,0.18)",
                      border: "none", cursor: "pointer", padding: 0, outline: "none",
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: i === current ? `0 0 10px ${activeAccent}88` : "none",
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
                  style={{ height: "100%", background: activeAccent, borderRadius: 2 }}
                />
              </div>
            </div>
            <ArrowBtn dir="right" onClick={next} accent={activeAccent} />
          </div>

          {/* ── VIEW ALL CASES CTA (blue gradient) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: E }}
            style={{ display: "flex", justifyContent: "center", marginTop: 56 }}
          >
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.04, boxShadow: `0 0 40px ${ACCENT}66` }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`,
                color: "#fff", textDecoration: "none",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700, fontSize: 12,
                letterSpacing: 2.5, textTransform: "uppercase",
                padding: "18px 56px", borderRadius: 4,
                boxShadow: `0 0 24px ${ACCENT}55`,
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