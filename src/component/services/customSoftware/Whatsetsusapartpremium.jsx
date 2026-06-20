import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  WHAT SETS OUR CUSTOM SOFTWARE DEVELOPMENT SERVICES APART  ║
 ║  Premium dark edition — glassmorphism + Framer Motion       ║
 ║  Fully responsive (mobile, tablet, desktop)                 ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const E = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    number: "01",
    title: "Custom Solutions",
    short: "Built for you, not the masses.",
    body: "We design and develop custom software solutions that align with your business strategy and operational requirements, ensuring seamless integration into your existing business processes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    number: "02",
    title: "Knowledge Retention & Transfer",
    short: "Continuity baked in.",
    body: "We maintain a strong knowledge base throughout the entire software development process to ensure consistency and quality across all phases of development.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M21 8l2 2-2 2M23 10h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    number: "03",
    title: "Architecture & Due Diligence",
    short: "Foundations that scale.",
    body: "Our dedicated architect team conducts thorough audits, ensuring that your software architecture is optimized for your specific business needs and objectives.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L14 6l10 16H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M14 12v5M14 19v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    number: "04",
    title: "Top Talent",
    short: "Senior minds, proven results.",
    body: "Our senior tech experts bring over eight years of experience, with 79% of our team holding more than five years in IT and 81% possessing a Master's degree or higher.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.6 5.3 5.8.85-4.2 4.1.99 5.77L14 17.5l-5.19 2.52.99-5.77-4.2-4.1 5.8-.85L14 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
  },
];

/* ── Floating ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 14 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(72px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

/* ── Individual feature card ── */
function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.1, ease: E }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", cursor: "default" }}
    >
      {/* Glow behind card on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: 22,
              background: `radial-gradient(ellipse at 50% 50%, ${feature.glow}, transparent 70%)`,
              filter: "blur(18px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          y: hovered ? -6 : 0,
          boxShadow: hovered
            ? `0 32px 72px rgba(0,0,0,0.5), 0 0 0 1px ${feature.accent}44`
            : "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.35, ease: E }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "clamp(24px, 5vw, 36px) clamp(20px, 4vw, 32px)",
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Top-left accent line */}
        <motion.div
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.55, ease: E }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 2,
            background: `linear-gradient(90deg, ${feature.accent}, transparent)`,
            borderRadius: "0 0 4px 0",
          }}
        />

        {/* Number tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <motion.div
            animate={{ color: hovered ? feature.accent : "rgba(255,255,255,0.18)" }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {feature.number}
          </motion.div>

          {/* Icon container */}
          <motion.div
            animate={{
              background: hovered ? `${feature.accent}22` : "rgba(255,255,255,0.06)",
              color: hovered ? feature.accent : "rgba(255,255,255,0.5)",
              borderColor: hovered ? `${feature.accent}44` : "rgba(255,255,255,0.08)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {feature.icon}
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.9)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 4vw, 21px)",
            textTransform: "uppercase",
            letterSpacing: "0.4px",
            lineHeight: 1.15,
            margin: "0 0 8px",
          }}
        >
          {feature.title}
        </motion.h3>

        {/* Short tagline */}
        <motion.p
          animate={{ color: hovered ? feature.accent : "rgba(255,255,255,0.35)" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            margin: "0 0 18px",
          }}
        >
          {feature.short}
        </motion.p>

        {/* Divider */}
        <motion.div
          animate={{ background: hovered ? `${feature.accent}60` : "rgba(255,255,255,0.08)" }}
          transition={{ duration: 0.3 }}
          style={{ height: 1, width: "100%", marginBottom: 20 }}
        />

        {/* Body */}
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 3vw, 14.5px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.52)",
            margin: 0,
          }}
        >
          {feature.body}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT (FULLY RESPONSIVE)
══════════════════════════════════════════ */
export default function WhatSetsUsApartPremium() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const headInV = useInView(headRef, { once: true, margin: "-60px" });

  /* Subtle parallax on decorative grid */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          /* Responsive grid: 2 columns on desktop, 1 column on tablet/mobile */
          @media (max-width: 900px) {
            .features-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 640px) {
            .cta-strip {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding: 28px 24px !important;
            }
            .cta-buttons {
              width: 100% !important;
              flex-direction: column !important;
            }
            .cta-buttons a {
              justify-content: center !important;
              width: 100% !important;
              text-align: center !important;
            }
          }
          @media (max-width: 480px) {
            section {
              padding: 80px 24px !important;
            }
            .hero-subtitle {
              font-size: 14px !important;
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          position: "relative",
          background: "linear-gradient(160deg, #060c18 0%, #0a1628 50%, #06101e 100%)",
          padding: "clamp(80px, 12vw, 120px) clamp(24px, 6vw, 72px)",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Ambient orbs (responsive sizes) ── */}
        <Orb style={{ width: "min(560px, 80vw)", height: "min(560px, 80vw)", background: "rgba(59,130,246,0.09)", top: -160, left: -120 }} />
        <Orb style={{ width: "min(480px, 70vw)", height: "min(480px, 70vw)", background: "rgba(139,92,246,0.07)", bottom: -100, right: -80 }} />
        <Orb style={{ width: "min(320px, 60vw)", height: "min(320px, 60vw)", background: "rgba(14,165,233,0.06)", top: "40%", left: "45%" }} />

        {/* ── Scrolling dot grid overlay ── */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-10%",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            y: gridY,
            pointerEvents: "none",
          }}
        />

        {/* ── Diagonal accent line (hide on mobile) ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 180,
            width: 1,
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, rgba(59,130,246,0.15) 30%, rgba(139,92,246,0.12) 70%, transparent)",
            pointerEvents: "none",
            display: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* ── Header block ── */}
          <div ref={headRef} style={{ maxWidth: 900, marginBottom: "clamp(48px, 8vw, 80px)" }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headInV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: E }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 2.5,
                  background: "#3b82f6",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: 3.5,
                  textTransform: "uppercase",
                  color: "#3b82f6",
                }}
              >
                Why Choose Us
              </span>
            </motion.div>

            {/* Main heading */}
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={headInV ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(30px, 4vw, 58px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: "0 0 28px",
                }}
              >
                What Sets Our Custom<br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Software Development
                </span>
                <br />Services Apart
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.25, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.8vw, 16px)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 720,
                margin: 0,
              }}
            >
              As a leading custom software development company, we at Purple Techno-Vision LLP
              offer a comprehensive range of software development services designed
              to meet your business's unique demands. Here's what sets us apart:
            </motion.p>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.38, ease: E }}
              style={{
                marginTop: 44,
                height: 1.5,
                width: "100%",
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6 50%, transparent 100%)",
                transformOrigin: "left",
                borderRadius: 2,
              }}
            />
          </div>

          {/* ── Feature cards grid (responsive via CSS) ── */}
          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
          >
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.number} feature={f} index={i} />
            ))}
          </div>

       
        </div>
      </section>
    </>
  );
}