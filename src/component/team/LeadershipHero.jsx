import { motion } from "framer-motion";

const LeadershipHero = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "clamp(420px, 55vh, 580px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("https://www.intellectsoft.net/blog/wp-content/uploads/header-copy-1.15.30-%D0%9F%D0%9F-scaled.jpg")`,
        backgroundSize: "cover", backgroundPosition: "center",
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(4,13,26,0.88) 0%, rgba(7,20,40,0.82) 50%, rgba(10,31,61,0.78) 100%)",
      }} />

      {/* Grid overlay */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lhgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lhgrid)" />
      </svg>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -80, left: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -60, right: -60,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />

      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", width: 500, height: 500,
          border: "1px solid rgba(56,189,248,0.07)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 860, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 28,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
            Executive Team
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "white",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05,
            textTransform: "uppercase", marginBottom: 24,
          }}
        >
          Leader
          <span style={{
            background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            ship
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(15px, 1.6vw, 20px)",
            lineHeight: 1.75, fontWeight: 400,
            maxWidth: 720, margin: "0 auto",
          }}
        >
          Our Executive Leadership and Senior Management bring decades of
          industry experience, a global perspective, and a passion for
          achieving results.
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 2, borderRadius: 2, marginTop: 36,
            background: "linear-gradient(90deg, transparent, #38bdf8, #818cf8, #c084fc, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to bottom, transparent, #040d1a)",
        pointerEvents: "none",
      }} />
    </section>
  );
};

export default LeadershipHero;