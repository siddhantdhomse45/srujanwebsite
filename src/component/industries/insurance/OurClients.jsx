import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  OUR CLIENTS — Premium Edition                              ║
 ║  Layout: heading → 4 category tabs → slide carousel        ║
 ║  Each slide: left photo + right challenge/solution          ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ── Category tabs ── */
const CATEGORIES = [
  {
    id: "mobile",
    label: "Mobile Applications",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="36" height="36">
        <rect x="14" y="6" width="14" height="24" rx="2"/>
        <circle cx="21" cy="27" r="1.5"/>
        <path d="M10 18l-4 0M10 22l-4 0"/>
        <path d="M32 18l4 0M32 22l4 0"/>
        <path d="M18 10h6"/>
      </svg>
    ),
  },
  {
    id: "legacy",
    label: "Legacy Systems Upgrade",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="36" height="36">
        <rect x="8" y="10" width="32" height="22" rx="2"/>
        <line x1="8" y1="38" x2="40" y2="38"/>
        <line x1="24" y1="32" x2="24" y2="38"/>
        <circle cx="30" cy="19" r="5"/>
        <path d="M28 17l2 2 4-4"/>
        <path d="M14 18h8M14 23h5"/>
      </svg>
    ),
  },
  {
    id: "agency",
    label: "Agency Software Solutions",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="36" height="36">
        <circle cx="24" cy="20" r="6"/>
        <rect x="16" y="14" width="16" height="12" rx="3"/>
        <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12"/>
        <path d="M30 14l6-4M18 14l-6-4"/>
        <circle cx="36" cy="10" r="3"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    id: "management",
    label: "Management Software",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="36" height="36">
        <rect x="8" y="8" width="14" height="14" rx="2"/>
        <rect x="26" y="8" width="14" height="14" rx="2"/>
        <rect x="8" y="26" width="14" height="14" rx="2"/>
        <rect x="26" y="26" width="14" height="14" rx="2"/>
        <path d="M15 15l-3 3 3 3"/>
        <path d="M33 15l3 3-3 3"/>
        <path d="M13 33h6M31 33h6"/>
      </svg>
    ),
  },
];

/* ── Slides per category ── */
const SLIDES = {
  mobile: [
    {
      id: "car-insurer",
      badge: "Mobile Applications",
      title: "Mobile App for Car Insurers",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      challenge: "A client's inspiration for delivering this product came from the need to improve the customer experience for provided car insurance products.",
      solution: "The solution has gathered all the needed functionality in one application in order to help the client to achieve the goals.",
      result: "40% higher customer engagement",
    },
    {
      id: "health-app",
      badge: "Mobile Applications",
      title: "Health Insurance Mobile Platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      challenge: "A leading health insurer needed a unified mobile app to manage policies, claims, and wellness programs across 2M+ policyholders.",
      solution: "We built a HIPAA-compliant React Native app with real-time claims tracking, telemedicine booking, and personalized wellness dashboards.",
      result: "74% reduction in call-centre volume",
    },
    {
      id: "claims-app",
      badge: "Mobile Applications",
      title: "Claims Processing App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      challenge: "Manual claims submission was causing 8-day processing delays and high customer dissatisfaction scores across all channels.",
      solution: "An AI-powered mobile claims workflow with photo evidence upload, instant triage, and automated adjudication reduced processing to under 24 hours.",
      result: "87% faster claim resolution",
    },
  ],
  legacy: [
    {
      id: "core-migration",
      badge: "Legacy Systems Upgrade",
      title: "Core Insurance Platform Migration",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      challenge: "A 30-year-old COBOL-based policy management system was blocking product launches and costing $4M/year in maintenance.",
      solution: "Incremental strangler-fig migration to a cloud-native microservices architecture over 18 months with zero downtime for 500K policies.",
      result: "62% reduction in maintenance costs",
    },
    {
      id: "api-modernisation",
      badge: "Legacy Systems Upgrade",
      title: "API-First Modernisation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      challenge: "Siloed legacy systems prevented third-party integrations and slowed down the launch of new insurance products by 6+ months.",
      solution: "API gateway layer and event-driven architecture wrapped legacy core, enabling 40+ partner integrations within 3 months of launch.",
      result: "6× faster product time-to-market",
    },
  ],
  agency: [
    {
      id: "agency-portal",
      badge: "Agency Software Solutions",
      title: "Multi-Agency Distribution Portal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      challenge: "A network of 1,200 independent agents was managing policies via email and spreadsheets, creating compliance and audit risks.",
      solution: "A unified SaaS portal for quote comparison, e-signatures, commission tracking, and real-time compliance reporting across all product lines.",
      result: "3× increase in agent productivity",
    },
  ],
  management: [
    {
      id: "risk-dashboard",
      badge: "Management Software",
      title: "Enterprise Risk Management Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      challenge: "Risk officers were working from 12 disconnected spreadsheets to aggregate exposure data, with reports taking 3 days to produce.",
      solution: "A real-time executive risk dashboard with live data feeds, Monte Carlo scenario modelling, and automated regulatory report generation.",
      result: "Reports from 3 days to 15 minutes",
    },
  ],
};

/* ── Orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Arrow button ── */
function ArrowBtn({ dir, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, background: `${BLUE}22`, borderColor: `${BLUE}66` }}
      whileTap={{ scale: 0.93 }}
      style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", outline: "none",
        color: "rgba(255,255,255,0.65)",
        flexShrink: 0,
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left"
          ? <path d="M10 4L6 8l4 4"/>
          : <path d="M6 4l4 4-4 4"/>}
      </svg>
    </motion.button>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function OurClients() {
  const [activeCat, setActiveCat]   = useState("mobile");
  const [slideIdx, setSlideIdx]     = useState(0);
  const [direction, setDirection]   = useState(1);
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const slides    = SLIDES[activeCat];
  const total     = slides.length;
  const slide     = slides[slideIdx];

  const prev = useCallback(() => {
    setDirection(-1);
    setSlideIdx(i => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setSlideIdx(i => (i + 1) % total);
  }, [total]);

  /* Reset slide on category change */
  const switchCat = (id) => {
    setActiveCat(id);
    setSlideIdx(0);
    setDirection(1);
  };

  /* Auto-advance */
  useEffect(() => {
    const t = setInterval(() => next(), 6000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, filter: "blur(4px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, filter: "blur(4px)" }),
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .oc2-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .oc2-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }
        .oc2-slide-layout {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .oc2-nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }
        @media (max-width: 960px) {
          .oc2-tabs { grid-template-columns: repeat(2, 1fr); }
          .oc2-slide-layout { grid-template-columns: 1fr; gap: 28px; }
          .oc2-section { padding: 80px 32px 96px !important; }
        }
        @media (max-width: 520px) {
          .oc2-tabs { grid-template-columns: 1fr 1fr; }
          .oc2-section { padding: 60px 16px 80px !important; }
          .oc2-h2 { font-size: 24px !important; }
          .oc2-nav-row { flex-direction: column; align-items: center; }
        }
      `}</style>

      <section ref={sectionRef} className="oc2-section">
        <Orb style={{ width: 580, height: 580, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 460, height: 460, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />

        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: E }}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: BLUE }}>
                Case Studies
              </span>
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
            </motion.div>

            <motion.h2
              className="oc2-h2"
              initial={{ opacity: 0, y: 28 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: E }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: "clamp(26px, 4vw, 54px)",
                textTransform: "uppercase", letterSpacing: "0.5px",
                lineHeight: 1.06, color: "#ffffff", margin: "0 0 20px",
              }}
            >
              Our{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Clients</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16, lineHeight: 1.85,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 620, margin: "0 auto",
              }}
            >
              Fortune 1000 satisfied customers worldwide across insurance verticals
              and a 13-year record of success speak for themselves.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.32, ease: E }}
              style={{
                marginTop: 40, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, transparent, ${BLUE} 30%, ${BLUE_LITE} 50%, ${BLUE} 70%, transparent)`,
                transformOrigin: "center", borderRadius: 2,
              }}
            />
          </div>

          {/* ── Category tabs ── */}
          <div className="oc2-tabs">
            {CATEGORIES.map((cat, i) => {
              const isActive = activeCat === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => switchCat(cat.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.6, ease: E }}
                  whileHover={{ y: isActive ? 0 : -3 }}
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${BLUE}, #2563eb)`
                      : "rgba(255,255,255,0.04)",
                    border: isActive ? `2px solid ${BLUE}` : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "22px 16px",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", gap: 12,
                    cursor: "pointer", outline: "none",
                    boxShadow: isActive ? `0 0 28px ${BLUE}44` : "none",
                    transition: "all 0.3s",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <motion.div
                    animate={{ color: isActive ? "#ffffff" : `${BLUE}88` }}
                    transition={{ duration: 0.25 }}
                    style={{ lineHeight: 0 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: 12, letterSpacing: 0.3,
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                    textAlign: "center", lineHeight: 1.4,
                    transition: "color 0.25s",
                  }}>
                    {cat.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* ── Slide panel ── */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(18px)",
            border: `1px solid rgba(255,255,255,0.07)`,
            borderRadius: 20,
            padding: "0",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Blue top bar */}
            <div style={{
              height: 2.5,
              background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)`,
            }} />

            <div style={{ padding: "40px 40px 0" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeCat}-${slideIdx}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: E }}
                  className="oc2-slide-layout"
                >
                  {/* Left — image */}
                  <div style={{
                    borderRadius: 14, overflow: "hidden",
                    position: "relative",
                    aspectRatio: "4/3",
                    boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${BLUE}22`,
                  }}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: "45%",
                      background: "linear-gradient(to top, rgba(5,11,24,0.7), transparent)",
                      pointerEvents: "none",
                    }} />
                    {/* Badge */}
                    <div style={{
                      position: "absolute", top: 16, left: 16,
                      background: "rgba(5,11,24,0.8)", backdropFilter: "blur(12px)",
                      border: `1px solid ${BLUE}44`, borderRadius: 8,
                      padding: "5px 12px",
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700, fontSize: 10,
                      letterSpacing: 2, textTransform: "uppercase",
                      color: BLUE_LITE,
                    }}>
                      {slide.badge}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div style={{ padding: "8px 0" }}>
                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900, fontSize: "clamp(20px, 2vw, 28px)",
                      textTransform: "uppercase", letterSpacing: "0.3px",
                      lineHeight: 1.15, color: "#ffffff",
                      margin: "0 0 28px",
                    }}>
                      {slide.title}
                    </h3>

                    {/* Challenge */}
                    <div style={{ marginBottom: 24 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <div style={{ width: 3, height: 16, background: BLUE, borderRadius: 2, flexShrink: 0 }} />
                        <span style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 800, fontSize: 14,
                          textTransform: "uppercase", letterSpacing: 1.5,
                          color: BLUE,
                        }}>Challenge</span>
                      </div>
                      <p style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 14.5, lineHeight: 1.85,
                        color: "rgba(255,255,255,0.55)",
                        margin: 0, paddingLeft: 11,
                      }}>
                        {slide.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div style={{ marginBottom: 28 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <div style={{ width: 3, height: 16, background: "#10b981", borderRadius: 2, flexShrink: 0 }} />
                        <span style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 800, fontSize: 14,
                          textTransform: "uppercase", letterSpacing: 1.5,
                          color: "#10b981",
                        }}>Solution</span>
                      </div>
                      <p style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 14.5, lineHeight: 1.85,
                        color: "rgba(255,255,255,0.55)",
                        margin: 0, paddingLeft: 11,
                      }}>
                        {slide.solution}
                      </p>
                    </div>

                    {/* Result badge */}
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      borderRadius: 10, padding: "10px 18px",
                    }}>
                      <span style={{ fontSize: 16 }}>📈</span>
                      <span style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 700, fontSize: 13, color: "#10b981",
                      }}>
                        {slide.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Nav row ── */}
            <div className="oc2-nav-row" style={{ padding: "24px 40px 32px" }}>
              <ArrowBtn dir="left" onClick={prev} />

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                {/* Dots */}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > slideIdx ? 1 : -1); setSlideIdx(i); }}
                      style={{
                        width: i === slideIdx ? 28 : 8,
                        height: 8, borderRadius: 4,
                        background: i === slideIdx ? BLUE : "rgba(255,255,255,0.18)",
                        border: "none", cursor: "pointer", padding: 0, outline: "none",
                        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                        boxShadow: i === slideIdx ? `0 0 10px ${BLUE}88` : "none",
                      }}
                    />
                  ))}
                </div>
                {/* Progress bar */}
                <div style={{
                  width: 120, height: 1.5,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2, overflow: "hidden",
                }}>
                  <motion.div
                    key={`${activeCat}-${slideIdx}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{ height: "100%", background: BLUE, borderRadius: 2 }}
                  />
                </div>
                {/* Counter */}
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 12,
                  letterSpacing: 2, color: "rgba(255,255,255,0.25)",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>
                    {String(slideIdx + 1).padStart(2, "0")}
                  </span>{" / "}{String(total).padStart(2, "0")}
                </span>
              </div>

              <ArrowBtn dir="right" onClick={next} />
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: E }}
            style={{ display: "flex", justifyContent: "center", marginTop: 56 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: `linear-gradient(135deg, ${BLUE}, #2563eb)`,
                color: "#fff", textDecoration: "none",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700, fontSize: 12,
                letterSpacing: 2.5, textTransform: "uppercase",
                padding: "17px 56px", borderRadius: 4,
                border: `2px solid ${BLUE}`,
                boxShadow: "0 0 24px rgba(59,130,246,0.3)",
              }}
            >
              View All Cases
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
}