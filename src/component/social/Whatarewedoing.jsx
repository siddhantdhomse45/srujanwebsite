import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HeartPulse, HandCoins, Gavel, Shield } from "lucide-react";

const programs = [
  {
    icon: HeartPulse,
    title: "Humanitarian Funds",
    text: "The purpose of our humanitarian initiatives is to assist people facing various forms of adversity. We focus our financial support on helping IT specialists in case of emergency related to medical treatment.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    grad: "linear-gradient(135deg,#0369a1,#38bdf8)",
  },
  {
    icon: HandCoins,
    title: "Social Fund",
    text: "Our company is deeply aware of the profound impact of war. To support colleagues from Ukraine during tribulation times, we provide contributions from our dedicated internal social fund. The company's teammates also voluntarily support the fund with donations, helping people receive imperative supplies.",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.18)",
    grad: "linear-gradient(135deg,#4338ca,#818cf8)",
  },
  {
    icon: Gavel,
    title: "Charity Auctions",
    text: "We regularly host a charity auction where our team members submit requests to raise funds to save the lives of those serving on the war front. The proceeds are used to acquire essential medical equipment, such as medical kits, ambulances, means of surveillance, and communication.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    grad: "linear-gradient(135deg,#059669,#34d399)",
  },
  {
    icon: Shield,
    title: "Defence Fund",
    text: "Waves Techno-Vision LLP has established a dedicated defense aid fund to support IT professionals who have been affected by the war, offering resources for rebuilding their homes and covering medical expenses. The leadership also retains jobs and pays salaries to team members who have taken up arms to defend their country.",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.18)",
    grad: "linear-gradient(135deg,#c2410c,#fb923c)",
  },
];

const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const Rev = ({ children, delay = 0, y = 40, x = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function WhatAreWeDoing() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0 100px",
        background: "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .wwd-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
          z-index: 10;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          border-radius: 28px;
        }

        .wwd-card {
          padding: clamp(24px, 3.5vw, 44px);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        /* Tablet and desktop: 2 columns */
        @media (min-width: 768px) {
          .wwd-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        /* Extra spacing on large screens */
        @media (min-width: 1200px) {
          .wwd-grid {
            gap: 32px;
          }
        }

        /* Mobile padding */
        @media (max-width: 640px) {
          .wwd-inner {
            padding: 0 20px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .wwd-inner {
            padding: 0 16px;
          }
          .wwd-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-10%", left: "-8%",
          width: "min(520px, 80vw)", height: "min(520px, 80vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", bottom: "-8%", right: "-6%",
          width: "min(480px, 75vw)", height: "min(480px, 75vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* Grid bg pattern */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="wwdgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wwdgrid)" />
      </svg>

      <div className="wwd-inner">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>
          <Rev>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              ...glass, borderRadius: 100, padding: "6px 18px", marginBottom: 22,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block",
              }} />
              <span style={{
                color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600,
                letterSpacing: 2.5, textTransform: "uppercase",
              }}>
                Our Programs
              </span>
            </div>
          </Rev>

          <Rev delay={0.1}>
            <h2 style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              margin: "0 0 22px",
            }}>
              What Are We{" "}
              <span style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Doing
              </span>
            </h2>
          </Rev>

          <Rev delay={0.2}>
            <p style={{
              color: "rgba(148,163,184,0.65)",
              fontSize: "clamp(13px, 1.6vw, 17px)",
              lineHeight: 1.78,
              maxWidth: 740,
              margin: "0 auto",
              padding: "0 8px",
            }}>
              As a socially responsible company, we are committed to providing support to individuals
              impacted by the war. Each request is carefully reviewed, prioritized based on urgency,
              and addressed accordingly. To accommodate the diverse nature of the requests, we have
              established four distinct financial programs.
            </p>
          </Rev>
        </div>

        {/* ── 2×2 Card Grid with proper gap ── */}
        <Rev delay={0.3}>
          <div className="wwd-grid">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={i}
                  className="wwd-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onTouchStart={() => setHovered(i)}
                  onTouchEnd={() => setTimeout(() => setHovered(null), 600)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: hovered === i
                      ? `linear-gradient(145deg,${prog.glow},rgba(255,255,255,0.04))`
                      : "rgba(255,255,255,0.03)",
                    boxShadow: hovered === i ? `inset 0 0 40px ${prog.color}08, 0 12px 28px -8px rgba(0,0,0,0.3)` : "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Glow blob on hover */}
                  <div style={{
                    position: "absolute", top: -40, left: "40%",
                    transform: "translateX(-50%)",
                    width: 200, height: 200, borderRadius: "50%",
                    background: `radial-gradient(circle,${prog.color}20,transparent 70%)`,
                    filter: "blur(30px)",
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.4s",
                    pointerEvents: "none",
                  }} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      width: 54, height: 54, borderRadius: 14,
                      background: `linear-gradient(135deg,${prog.color}18,${prog.color}06)`,
                      border: `1px solid ${prog.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 20,
                      boxShadow: `0 4px 20px ${prog.color}28`,
                      position: "relative", zIndex: 1,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color={prog.color} />
                  </motion.div>

                  {/* Number badge */}
                  <div style={{
                    position: "absolute", top: 18, right: 18,
                    width: 28, height: 28, borderRadius: 8,
                    background: prog.grad,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: "white",
                    opacity: 0.75,
                    boxShadow: `0 2px 10px ${prog.color}30`,
                  }}>
                    0{i + 1}
                  </div>

                  {/* Ghost number bg */}
                  <div style={{
                    position: "absolute", bottom: -10, right: 10,
                    fontSize: "clamp(56px, 8vw, 88px)",
                    fontWeight: 900, lineHeight: 1,
                    color: `${prog.color}07`,
                    fontFamily: "'Syne',sans-serif",
                    userSelect: "none", pointerEvents: "none",
                    transition: "color 0.4s",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    color: "white",
                    fontSize: "clamp(14px, 1.8vw, 19px)",
                    fontWeight: 700,
                    fontFamily: "'Syne',sans-serif",
                    letterSpacing: "-0.2px",
                    marginBottom: 12,
                    position: "relative", zIndex: 1,
                    lineHeight: 1.25,
                  }}>
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: "rgba(148,163,184,0.62)",
                    fontSize: "clamp(12px, 1.2vw, 15px)",
                    lineHeight: 1.75,
                    margin: 0,
                    position: "relative", zIndex: 1,
                  }}>
                    {prog.text}
                  </p>

                  {/* Animated bottom accent line */}
                  <div style={{
                    height: 2, borderRadius: 2, marginTop: 22,
                    background: prog.grad,
                    width: hovered === i ? "65%" : "0%",
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                    position: "relative", zIndex: 1,
                  }} />
                </motion.div>
              );
            })}
          </div>
        </Rev>

      </div>
    </section>
  );
}