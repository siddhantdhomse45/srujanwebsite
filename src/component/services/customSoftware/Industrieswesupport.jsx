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
 ║  INDUSTRIES WE SUPPORT — Premium Dark Edition               ║
 ║  Card design: diagonal image-left / content-right split     ║
 ║  with numbered accent, animated border reveal, hover glow   ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const E = [0.22, 1, 0.36, 1];

/* ── Industry data ── */
const INDUSTRIES = [
  {
    id: "fintech",
    number: "01",
    title: "Fintech",
    short: "Financial Innovation",
    body: "We provide scalable solutions for FinTech companies, improving transaction efficiency and regulatory compliance through innovative custom software development projects.",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.22)",
    bg: "rgba(59,130,246,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <path d="M17 9v2M17 23v2" />
        <path d="M12.5 14c0-1.66 2.01-3 4.5-3s4.5 1.34 4.5 3-2.01 3-4.5 3-4.5 1.34-4.5 3 2.01 3 4.5 3 4.5-1.34 4.5-3" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    number: "02",
    title: "Healthcare & Well-being",
    short: "Patient-Centric Tech",
    body: "Our custom software solutions in healthcare optimize patient care, streamline workflows, and ensure regulatory compliance across all medical verticals.",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.22)",
    bg: "rgba(16,185,129,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <path d="M17 11v12M11 17h12" />
        <path d="M10 26c1.2-2.4 3.6-4 7-4s5.8 1.6 7 4" />
      </svg>
    ),
  },
  {
    id: "construction",
    number: "03",
    title: "Construction",
    short: "Built for the Field",
    body: "Intellectsoft helps construction firms improve productivity, safety, and project management through tailored custom software services and real-time site intelligence.",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
    bg: "rgba(245,158,11,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <path d="M11 25v-9l6-6 6 6v9" />
        <path d="M14 25v-5h6v5" />
        <path d="M9 16h-1v-3l8-6 8 6v3h-1" />
      </svg>
    ),
  },
  {
    id: "logistics",
    number: "04",
    title: "Logistics & Transportation",
    short: "Supply Chain Mastery",
    body: "Our custom software developers create solutions that optimize logistics and transportation operations, reducing costs and improving delivery efficiency at scale.",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.22)",
    bg: "rgba(14,165,233,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <rect x="8" y="14" width="12" height="8" rx="1" />
        <path d="M20 17h4l2.5 2.5V22H20v-5z" />
        <circle cx="11.5" cy="23" r="1.8" />
        <circle cx="22.5" cy="23" r="1.8" />
      </svg>
    ),
  },
  {
    id: "automotive",
    number: "05",
    title: "Automotive",
    short: "Drive Efficiency Forward",
    body: "We deliver innovative custom software development solutions tailored to meet the unique needs of the automotive industry, enhancing efficiency and peak performance.",
    accent: "#dc2626",
    glow: "rgba(220,38,38,0.22)",
    bg: "rgba(220,38,38,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <path d="M9 20h16l-2.5-6H11.5L9 20z" />
        <path d="M9 20v2.5h3V20M22 20v2.5h3V20" />
        <circle cx="12.5" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="21.5" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <path d="M13 14l1.5-3h5l1.5 3" />
      </svg>
    ),
  },
  {
    id: "travel",
    number: "06",
    title: "Travel & Hospitality",
    short: "Memorable Guest Journeys",
    body: "Intellectsoft enhances guest experiences through custom software development services, designed to streamline operations and support hospitality businesses worldwide.",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.22)",
    bg: "rgba(139,92,246,0.07)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="14" />
        <path d="M17 8c-4 0-7 3.13-7 7 0 5.25 7 12 7 12s7-6.75 7-12c0-3.87-3-7-7-7z" />
        <circle cx="17" cy="15" r="2.5" />
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -28, 0], x: [0, 14, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ══════════════════════════════════════════
   CARD — Horizontal split with left accent panel
══════════════════════════════════════════ */
function IndustryCard({ industry, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.09, ease: E }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute", inset: -3, borderRadius: 20,
          background: `radial-gradient(ellipse at 30% 50%, ${industry.glow}, transparent 65%)`,
          filter: "blur(12px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          y: hovered ? -6 : 0,
          boxShadow: hovered
            ? `0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${industry.accent}55`
            : "0 4px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.38, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 18,
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* ── TOP accent band with icon + number ── */}
        <div
          style={{
            position: "relative",
            padding: "28px 28px 24px",
            background: industry.bg,
            borderBottom: `1px solid ${industry.accent}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* Large ghost number */}
          <div
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 72,
              color: `${industry.accent}12`,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {industry.number}
          </div>

          {/* Icon circle */}
          <motion.div
            animate={{
              background: hovered ? `${industry.accent}28` : `${industry.accent}14`,
              borderColor: hovered ? `${industry.accent}70` : `${industry.accent}35`,
              color: hovered ? industry.accent : `${industry.accent}cc`,
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: 60, height: 60, borderRadius: 16,
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", zIndex: 2,
            }}
          >
            {industry.icon}
          </motion.div>

          {/* Number badge */}
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: 3,
              color: `${industry.accent}99`,
              position: "relative", zIndex: 2,
            }}
          >
            {industry.number}
          </div>
        </div>

        {/* ── Animated top-edge progress line ── */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.55, ease: E }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2.5,
            background: `linear-gradient(90deg, ${industry.accent}, ${industry.accent}44)`,
            transformOrigin: "left",
            zIndex: 10,
          }}
        />

        {/* ── Content body ── */}
        <div style={{ padding: "24px 28px 32px", flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Short tag */}
          <motion.div
            animate={{ color: hovered ? industry.accent : "rgba(255,255,255,0.3)" }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 10,
              letterSpacing: 2.5, textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {industry.short}
          </motion.div>

          {/* Title */}
          <motion.h3
            animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.88)" }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 20,
              textTransform: "uppercase", letterSpacing: "0.3px",
              lineHeight: 1.15, margin: "0 0 6px",
            }}
          >
            {industry.title}
          </motion.h3>

          {/* Divider */}
          <motion.div
            animate={{ background: hovered ? `${industry.accent}55` : "rgba(255,255,255,0.07)" }}
            transition={{ duration: 0.3 }}
            style={{ height: 1, width: "100%", margin: "14px 0 16px" }}
          />

          {/* Body */}
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 14, lineHeight: 1.85,
              color: "rgba(255,255,255,0.48)",
              margin: "0 0 20px", flex: 1,
            }}
          >
            {industry.body}
          </p>

          {/* Learn more link */}
          <motion.div
            animate={{ x: hovered ? 4 : 0, color: hovered ? industry.accent : "rgba(255,255,255,0.28)" }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 11, letterSpacing: 2,
              textTransform: "uppercase", cursor: "pointer",
            }}
          >
            <div style={{ width: 18, height: 1.5, background: "currentColor", borderRadius: 2 }} />
            Learn More
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h8M7 3l3 3-3 3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function IndustriesWeSupportPremium() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const headInV = useInView(headRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
          .ind-section { padding: 80px 40px 96px !important; }
        }
        @media (max-width: 640px) {
          .ind-grid { grid-template-columns: 1fr; }
          .ind-section { padding: 64px 20px 80px !important; }
          .ind-h2 { font-size: 28px !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ind-section"
        style={{
          position: "relative",
          background: "linear-gradient(155deg, #050c1a 0%, #081422 45%, #06101e 100%)",
          padding: "112px 72px 128px",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Ambient atmosphere ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.08)", top: -200, left: -150 }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(139,92,246,0.07)", bottom: -120, right: -100 }} />
        <Orb style={{ width: 380, height: 380, background: "rgba(16,185,129,0.05)", top: "35%", left: "40%" }} />

        {/* ── Dot grid with parallax ── */}
        <motion.div
          style={{
            position: "absolute", inset: "-12%",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            y: gridY, pointerEvents: "none",
          }}
        />

        {/* ── Vertical accent lines ── */}
        {[18, 51, 84].map((left, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${left}%`, width: 1,
            background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)`,
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Section header ── */}
          <div ref={headRef} style={{ marginBottom: 80 }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={headInV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
            >
              <div style={{ width: 36, height: 2.5, background: "#3b82f6", borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: "#3b82f6",
              }}>
                Our Expertise
              </span>
            </motion.div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
              {/* Heading */}
              <motion.h2
                className="ind-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 58px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0,
                  maxWidth: 680,
                }}
              >
                Industries{" "}
                <span style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #0ea5e9 50%, #10b981 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  We Support
                </span>
              </motion.h2>

              {/* Subtitle — right-aligned on desktop */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.42)",
                  maxWidth: 420, margin: 0,
                  textAlign: "right",
                }}
              >
                Intellectsoft offers custom software development services across a
                variety of industries, helping businesses enhance operations and
                customer experiences.
              </motion.p>
            </div>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: "linear-gradient(90deg, #3b82f6 0%, #0ea5e9 35%, #10b981 65%, transparent 100%)",
                transformOrigin: "left", borderRadius: 2,
              }}
            />
          </div>

          {/* ── 3×2 Card grid ── */}
          <div className="ind-grid">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
}