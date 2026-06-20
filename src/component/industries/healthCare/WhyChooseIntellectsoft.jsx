import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  WHY CHOOSEPurple Techno-Vision LLP FOR HEALTHCARE IT SOLUTIONS?     ║
 ║  Layout: heading → subtitle → 4-col cards → wide CTA btn  ║
 ║  Each card: blue circle icon + bold title + body text       ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ║  FULLY RESPONSIVE (mobile, tablet, desktop)                 ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    id: "comprehensive",
    number: "01",
    title: "Comprehensive IT Solutions",
    tag: "End-to-End",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.22)",
    body: "We provide healthcare IT solutions that address every aspect of your organization's needs. From EHR/EMR systems to patient engagement platforms, our healthcare software solutions ensure seamless integration and deliver measurable results.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="26" height="26">
        <rect x="6" y="8" width="28" height="24" rx="3"/>
        <path d="M20 14v12M14 20h12"/>
        <circle cx="20" cy="20" r="4"/>
      </svg>
    ),
  },
  {
    id: "patient",
    number: "02",
    title: "Patient-Focused Software",
    tag: "Patient Care",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.22)",
    body: "Our IT services for healthcare prioritize patient care, enhancing access, communication, and overall health outcomes through cutting-edge technology.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="26" height="26">
        <circle cx="14" cy="14" r="5"/>
        <circle cx="26" cy="14" r="5"/>
        <path d="M6 32c0-6.6 3.6-12 8-12M34 32c0-6.6-3.6-12-8-12"/>
        <path d="M18 24c0-4.4 0.9-8 2-8s2 3.6 2 8"/>
        <path d="M14 32h12"/>
      </svg>
    ),
  },
  {
    id: "compliance",
    number: "03",
    title: "Compliance and Security",
    tag: "HIPAA & GDPR",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.22)",
    body: "With in-depth knowledge of HIPAA, GDPR, and other healthcare regulations, we deliver healthcare software solutions designed to keep your systems secure and compliant.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="26" height="26">
        <path d="M20 4L6 10v10c0 8.8 6.2 17 14 19 7.8-2 14-10.2 14-19V10L20 4z"/>
        <path d="M14 20l4 4 8-8"/>
      </svg>
    ),
  },
  {
    id: "insights",
    number: "04",
    title: "Data-Powered Insights",
    tag: "AI & Analytics",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.22)",
    body: "Empower your organization with advanced analytics and AI tools. Our healthcare IT solutions help providers harness data to improve care and streamline operations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="26" height="26">
        <rect x="6" y="6" width="28" height="28" rx="3"/>
        <path d="M12 28l5-8 4 5 4-10 5 8"/>
        <path d="M6 14h28"/>
        <circle cx="30" cy="10" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(88px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ── Single feature card ── */
function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-50px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative", height: "100%" }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute", inset: -3, borderRadius: 20,
          background: `radial-gradient(ellipse at 40% 30%, ${feature.glow}, transparent 65%)`,
          filter: "blur(12px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          y: hov ? -6 : 0,
          background: hov
            ? `linear-gradient(145deg, ${feature.accent}10, rgba(255,255,255,0.04))`
            : "rgba(255,255,255,0.03)",
          borderColor: hov
            ? `${feature.accent}45`
            : "rgba(255,255,255,0.07)",
          boxShadow: hov
            ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${feature.accent}33`
            : "0 2px 20px rgba(0,0,0,0.28)",
        }}
        transition={{ duration: 0.38, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "clamp(16px, 3vw, 18px)",
          padding: "clamp(28px, 5vw, 36px) clamp(20px, 4vw, 28px) clamp(32px, 5vw, 40px)",
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Top accent line on hover */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: E }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2.5,
            background: `linear-gradient(90deg, ${feature.accent}, ${feature.accent}44)`,
            transformOrigin: "left",
          }}
        />

        {/* Header: icon circle + number */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 24,
        }}>
          {/* Icon circle */}
          <motion.div
            animate={{
              background: hov ? `${feature.accent}22` : `${feature.accent}0e`,
              borderColor: hov ? `${feature.accent}60` : `${feature.accent}28`,
              color: hov ? feature.accent : `${feature.accent}bb`,
              scale: hov ? 1.06 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: "clamp(48px, 8vw, 58px)",
              height: "clamp(48px, 8vw, 58px)",
              borderRadius: "50%",
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {feature.icon}
          </motion.div>

          {/* Ghost number */}
          <motion.span
            animate={{ color: hov ? feature.accent : "rgba(255,255,255,0.12)" }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: "clamp(32px, 6vw, 44px)",
              letterSpacing: "-2px", lineHeight: 1,
              userSelect: "none",
            }}
          >
            {feature.number}
          </motion.span>
        </div>

        {/* Tag */}
        <motion.div
          animate={{ color: hov ? feature.accent : "rgba(255,255,255,0.28)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: "clamp(9px, 2vw, 10px)",
            letterSpacing: 2.5, textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {feature.tag}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.9)" }}
          transition={{ duration: 0.22 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 3.2vw, 21px)",
            textTransform: "uppercase",
            letterSpacing: "0.3px",
            lineHeight: 1.15,
            margin: "0 0 6px",
          }}
        >
          {feature.title}
        </motion.h3>

        {/* Divider */}
        <motion.div
          animate={{
            background: hov
              ? `linear-gradient(90deg, ${feature.accent}55, rgba(255,255,255,0.05))`
              : "rgba(255,255,255,0.07)",
          }}
          transition={{ duration: 0.3 }}
          style={{ height: 1, width: "100%", margin: "14px 0 16px" }}
        />

        {/* Body */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "clamp(13px, 2.5vw, 14px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.48)",
          margin: "0 0 20px",
          flex: 1,
        }}>
          {feature.body}
        </p>

        {/* Learn more */}
        <motion.div
          animate={{
            x: hov ? 4 : 0,
            color: hov ? feature.accent : "rgba(255,255,255,0.22)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: "clamp(9px, 2vw, 10px)",
            letterSpacing: 2.2, textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          <div style={{ width: 18, height: 1.5, background: "currentColor", borderRadius: 2 }} />
          Learn More
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none"
            stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M7 3l3 3-3 3"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT (FULLY RESPONSIVE)
══════════════════════════════════════════ */
export default function WhyChooseIntellectsoft() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .wci-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .wci-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .wci-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
        }
        /* Responsive breakpoints */
        @media (max-width: 1100px) {
          .wci-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .wci-section { padding: 88px 40px 104px !important; }
        }
        @media (max-width: 768px) {
          .wci-section { padding: 72px 24px 88px !important; }
          .wci-grid { gap: 20px; }
          .wci-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .wci-subtitle { text-align: left !important; max-width: 100% !important; }
          .wci-h2 { font-size: 28px !important; letter-spacing: 0 !important; }
        }
        @media (max-width: 640px) {
          .wci-grid { grid-template-columns: 1fr; }
          .wci-section { padding: 56px 20px 72px !important; }
          .wci-h2 { font-size: 26px !important; }
          .wci-cta-button {
            white-space: normal !important;
            text-align: center;
            padding: 16px 32px !important;
            font-size: 12px !important;
            letter-spacing: 1.5px !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .wci-section { padding: 48px 16px 64px !important; }
          .wci-h2 { font-size: 24px !important; }
          .wci-cta-button {
            padding: 14px 24px !important;
            font-size: 11px !important;
          }
          .wci-subtitle { font-size: 14px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="wci-section">

        {/* ── Atmosphere ── */}
        <Orb style={{ width: "min(600px, 80vw)", height: "min(600px, 80vw)", background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: "min(480px, 70vw)", height: "min(480px, 70vw)", background: "rgba(14,165,233,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: "min(340px, 60vw)", height: "min(340px, 60vw)", background: "rgba(139,92,246,0.05)", top: "40%", left: "42%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Vertical structural lines (hide on narrow screens) */}
        {[25, 50, 75].map((l, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${l}%`, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.05) 30%, rgba(59,130,246,0.05) 70%, transparent)",
            pointerEvents: "none",
            display: window.innerWidth < 768 ? "none" : "block", // hide on mobile via CSS but we'll just leave it; they won't hurt
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={headInV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
            >
              <div style={{ width: 36, height: 2.5, background: BLUE, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: "clamp(10px, 2.5vw, 11px)", letterSpacing: 3.5, textTransform: "uppercase",
                color: BLUE,
              }}>
                Why Choose Us
              </span>
            </motion.div>

            <div className="wci-header-row">
              {/* Heading */}
              <motion.h2
                className="wci-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 50px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 720,
                }}
              >
                Why Choose Purple Techno-Vision LLP for{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 55%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Healthcare IT Solutions?
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="wci-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "clamp(14px, 2.5vw, 15px)",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.42)",
                  maxWidth: 400, margin: 0,
                  textAlign: "right",
                }}
              >
                We've provided healthcare IT services, helping providers succeed
                with reliable, innovative solutions since 2007.
              </motion.p>
            </div>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE} 40%, rgba(255,255,255,0.06) 100%)`,
                transformOrigin: "left", borderRadius: 2,
              }}
            />
          </div>

          {/* ── 4-column feature grid (responsive) ── */}
          <div className="wci-grid">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>

          {/* ── Wide CTA button (fully responsive) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: E }}
            style={{
              marginTop: "clamp(48px, 8vw, 64px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 48px rgba(59,130,246,0.60)",
              }}
              whileTap={{ scale: 0.97 }}
              className="wci-cta-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                background: `linear-gradient(135deg, ${BLUE}, #2563eb)`,
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(12px, 2.5vw, 13px)",
                letterSpacing: 2.5,
                textTransform: "uppercase",
                padding: "clamp(16px, 3vw, 20px) clamp(32px, 5vw, 72px)",
                borderRadius: 6,
                border: `2px solid ${BLUE}`,
                boxShadow: "0 0 28px rgba(59,130,246,0.35)",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              See What Purple Techno-Vision LLP Can Do for You
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                stroke="white" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
}