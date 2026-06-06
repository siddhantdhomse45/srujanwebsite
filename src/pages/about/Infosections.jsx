import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const sections = [
  {
    number: "01",
    title: "Our Clients",
    description: "See how we helped our clients succeed in Digital Transformation.",
    link: "/our-clients",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    number: "02",
    title: "Our Team",
    description: "Meet the leadership and talents propelling our company's progress.",
    link: "/team",
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    number: "03",
    title: "Our Careers",
    description: "Explore current career opportunities in our offices around the world.",
    link: "/careers",
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
];

function SectionCard({ section, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 700)}
      className="info-card"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        overflow: "hidden",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        background: hovered
          ? `linear-gradient(145deg, ${section.accent}14, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${section.accent}45`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.35), 0 0 40px ${section.accent}18`
          : "0 4px 24px rgba(0,0,0,0.15)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderRadius: 0,
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -60, left: -40,
        width: 200, height: 200, borderRadius: "50%",
        background: `radial-gradient(circle, ${section.accent}25, transparent 70%)`,
        filter: "blur(40px)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Ghost number */}
      <span style={{
        position: "relative", zIndex: 1,
        fontSize: "clamp(52px, 8vw, 80px)",
        fontWeight: 900, lineHeight: 1,
        letterSpacing: "-3px",
        color: hovered ? `${section.accent}18` : "rgba(255,255,255,0.04)",
        transition: "color 0.4s",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {section.number}
      </span>

      {/* Title */}
      <h3 style={{
        position: "relative", zIndex: 1,
        fontSize: 11, fontWeight: 800,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: hovered ? "white" : "rgba(255,255,255,0.85)",
        transition: "color 0.3s",
        margin: 0,
      }}>
        {section.title}
      </h3>

      {/* Accent bar */}
      <div style={{
        position: "relative", zIndex: 1,
        height: 2, borderRadius: 2,
        background: hovered ? section.grad : `${section.accent}50`,
        width: hovered ? 56 : 28,
        transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s",
      }} />

      {/* Description */}
      <p style={{
        position: "relative", zIndex: 1,
        fontSize: "clamp(13px, 1.3vw, 14px)",
        lineHeight: 1.75,
        color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
        transition: "color 0.3s",
        flex: 1, margin: 0,
      }}>
        {section.description}
      </p>

      {/* Learn More */}
      <a
        href={section.link}
        style={{
          position: "relative", zIndex: 1,
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11, fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: hovered ? "white" : section.accent,
          textDecoration: "none",
          transition: "color 0.3s",
          marginTop: 4,
        }}
      >
        Learn More
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 26, height: 26, borderRadius: "50%",
            border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : section.accent}`,
            background: hovered ? "rgba(255,255,255,0.1)" : "transparent",
            fontSize: 13,
            transition: "border-color 0.3s, background 0.3s",
            flexShrink: 0,
          }}
        >
          →
        </motion.span>
      </a>
    </motion.div>
  );
}

export default function InfoSections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 100px) 0",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .info-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
        }

        /* 3-column desktop grid */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .info-card {
          padding: 44px 36px;
        }

        /* ── Tablet (≤900px): 3 columns but tighter padding ── */
        @media (max-width: 900px) {
          .info-inner {
            padding: 0 28px;
          }
          .info-card {
            padding: 32px 24px;
          }
        }

        /* ── Mobile (≤640px): single column stack ── */
        @media (max-width: 640px) {
          .info-inner {
            padding: 0 16px;
          }
          .info-grid {
            grid-template-columns: 1fr;
            border-radius: 16px;
            gap: 10px;
          }
          /* Divider between stacked cards */
          .info-card:not(:last-child) {
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
          }
          .info-card {
            padding: 28px 22px;
            /* No lift on mobile to avoid layout jump */
            transform: none !important;
          }
        }
      `}</style>

      {/* Grid texture */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="infogrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#infogrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -100, left: -80,
          width: "min(440px, 70vw)", height: "min(440px, 70vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -80, right: -80,
          width: "min(460px, 70vw)", height: "min(460px, 70vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      <div className="info-inner">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(36px, 5vw, 64px)" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 20,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#22d3ee", boxShadow: "0 0 8px #22d3ee",
              display: "inline-block",
            }} />
            <span style={{
              color: "rgba(255,255,255,0.65)", fontSize: 12,
              fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase",
            }}>
              Explore More
            </span>
          </div>

          <h2 style={{
            color: "white",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1,
            marginBottom: 16, marginTop: 0,
          }}>
            Get to Know{" "}
            <span style={{
              background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Us Better
            </span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            maxWidth: 480, margin: "0 auto", lineHeight: 1.75,
            padding: "0 8px",
          }}>
            Clients, team, and careers — three pillars that define who we are and how we work.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="info-grid">
          {sections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}