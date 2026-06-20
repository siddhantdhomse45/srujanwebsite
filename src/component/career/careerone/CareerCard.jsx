import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCalendar, FiTrendingUp, FiCpu, FiUsers,
  FiBookOpen, FiAward, FiSmile, FiServer
} from "react-icons/fi";

const cultureData = [
  {
    icon: <FiCalendar size={32} />,
    title: "5 Days Working",
    description: "A structured 5-day week gives you the freedom to plan your personal life with confidence — clear boundaries, real downtime, consistent rhythm.",
    color: "#38bdf8",      // cyan
    glow: "rgba(56,189,248,0.18)",
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: "Personal Growth",
    description: "Clear, achievable goals keep you focused and moving forward. We invest in your development as much as you do — through mentorship, feedback, and opportunity.",
    color: "#818cf8",      // indigo
    glow: "rgba(129,140,248,0.18)",
  },
  {
    icon: <FiCpu size={32} />,
    title: "Technology Advancement",
    description: "Technology never stands still — and neither do we. Work with cutting-edge stacks, emerging platforms, and the tools that are shaping tomorrow.",
    color: "#c084fc",      // purple
    glow: "rgba(192,132,252,0.18)",
  },
  {
    icon: <FiUsers size={32} />,
    title: "Equal Opportunity",
    description: "Fair hiring, equal pay, and an inclusive culture — regardless of gender, race, background, or identity. Every voice shapes our direction.",
    color: "#22d3ee",      // bright cyan
    glow: "rgba(34,211,238,0.18)",
  },
  {
    icon: <FiBookOpen size={32} />,
    title: "Training",
    description: "On-the-job training, workshops, seminars, and online courses — we equip you with every skill needed to excel and then push you further.",
    color: "#60a5fa",      // light blue
    glow: "rgba(96,165,250,0.18)",
  },
  {
    icon: <FiAward size={32} />,
    title: "Rewarding Opportunity",
    description: "Career advancement that actually means something — more responsibility, bigger challenges, real recognition. Your ambition has a home here.",
    color: "#a78bfa",      // lavender
    glow: "rgba(167,139,250,0.18)",
  },
  {
    icon: <FiSmile size={32} />,
    title: "Satisfaction",
    description: "A positive, supportive environment where you're valued by peers and leadership alike. Great work deserves to feel great to do.",
    color: "#2dd4bf",      // teal
    glow: "rgba(45,212,191,0.18)",
  },
  {
    icon: <FiServer size={32} />,
    title: "Infrastructure",
    description: "The tools, resources, and systems you need — no compromises. We build the infrastructure that lets you build what matters.",
    color: "#38bdf8",      // cyan (repeated for consistency)
    glow: "rgba(56,189,248,0.18)",
  },
];

const Rev = ({ children, delay = 0, y = 40, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
};

const CultureCard = ({ item, index }) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000, height: 220 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped(f => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", position: "relative" }}>

        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${item.color}28`,
          borderRadius: 20,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 14, padding: 24,
          boxShadow: `0 0 0 0 ${item.glow}`,
          transition: "box-shadow .3s ease",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "20px 20px 0 0", background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: `${item.color}14`,
            border: `1.5px solid ${item.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: item.color,
            boxShadow: `0 0 24px ${item.glow}`,
            flexShrink: 0,
          }}>
            {item.icon}
          </div>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, fontWeight: 400, color: "#f1f5f9", margin: 0, textAlign: "center", lineHeight: 1.25 }}>{item.title}</p>
          <div style={{ position: "absolute", bottom: 12, right: 14, display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>hover</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" /></svg>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: `linear-gradient(135deg, ${item.color}14 0%, rgba(255,255,255,0.04) 100%)`,
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${item.color}35`,
          borderRadius: 20,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "24px 22px",
          boxShadow: `0 8px 40px ${item.glow}`,
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "20px 20px 0 0", background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: item.color, margin: "0 0 10px", letterSpacing: "0.02em" }}>{item.title}</p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0 }}>{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CultureGrid = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .cg-wrap { background: #060d0a; overflow: hidden; }
        @keyframes rotate-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .cg-rotate { animation: rotate-slow 28s linear infinite; }
        @keyframes cg-blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;scale:1} 50%{border-radius:30% 70% 70% 30%/40% 50% 60% 50%;scale:1.1} }
        .cg-blob { animation: cg-blob 12s ease-in-out infinite; }
      `}</style>

      <section className="cg-wrap" style={{ padding: "110px 0 120px", position: "relative" }}>

        {/* Background blobs – updated to match new palette */}
        {[
          { c: "radial-gradient(circle,#38bdf8,#0891b2)", w: 500, t: "-8%", l: "-8%", d: 0 },
          { c: "radial-gradient(circle,#818cf8,#4f46e5)", w: 400, t: "50%", l: "70%", d: 3 },
          { c: "radial-gradient(circle,#c084fc,#7e22ce)", w: 350, t: "75%", l: "15%", d: 6 },
        ].map((b, i) => (
          <div key={i} className="cg-blob" style={{ position: "absolute", width: b.w, height: b.w, top: b.t, left: b.l, background: b.c, filter: "blur(80px)", opacity: 0.1, pointerEvents: "none", animationDelay: `${b.d}s` }} />
        ))}

        {/* Grid dots background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,72px)", position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Rev delay={0.1}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 400, color: "#f8fafc", margin: "0 0 6px", lineHeight: 1.1 }}>
                Life at{" "}
                <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Purple Techno-Vision LLP
                </span>
              </h2>
            </Rev>
            <Rev delay={0.2}>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 16, maxWidth: 520, margin: "20px auto 0", lineHeight: 1.8 }}>
                We've built a culture where talented people do their best work — supported, challenged, and celebrated every step of the way.
              </p>
            </Rev>

            {/* Animated divider – new gradient */}
            <Rev delay={0.3}>
              <div style={{ width: 64, height: 2, borderRadius: 1, background: "linear-gradient(90deg, #38bdf8, #818cf8)", margin: "32px auto 0" }} />
            </Rev>
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {cultureData.map((item, i) => (
              <CultureCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CultureGrid;