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
    pos: "top-left",
  },
  {
    icon: HandCoins,
    title: "Social Fund",
    text: "Our company is deeply aware of the profound impact of war. To support colleagues from Ukraine during tribulation times, we provide contributions from our dedicated internal social fund. The company's teammates also voluntarily support the fund with donations, helping people receive imperative supplies.",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.18)",
    grad: "linear-gradient(135deg,#4338ca,#818cf8)",
    pos: "top-right",
  },
  {
    icon: Gavel,
    title: "Charity Auctions",
    text: "We regularly host a charity auction where our team members submit requests to raise funds to save the lives of those serving on the war front. The proceeds are used to acquire essential medical equipment, such as medical kits, ambulances, means of surveillance, and communication.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    pos: "bottom-left",
  },
  {
    icon: Shield,
    title: "Defence Fund",
    text: "Intellectsoft has established a dedicated defense aid fund to support IT professionals who have been affected by the war, offering resources for rebuilding their homes and covering medical expenses. The leadership also retains jobs and pays salaries to team members who have taken up arms to defend their country.",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.18)",
    grad: "linear-gradient(135deg,#c2410c,#fb923c)",
    pos: "bottom-right",
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
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

export default function WhatAreWeDoing() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{
      position: "relative",
      padding: "110px 0 120px",
      background: "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;}

        .wwd-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
          z-index: 10;
        }
        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .wwd-card {
          padding: clamp(28px,4vw,44px);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .wwd-card-divider-v {
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .wwd-card-divider-h {
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        @media (max-width: 768px) {
          .wwd-inner { padding: 0 18px; }
          .wwd-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .wwd-card-divider-v {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
        }
      `}</style>

      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-10%", left: "-8%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", bottom: "-8%", right: "-6%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }}
      />

      {/* Grid bg pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wwdgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wwdgrid)" />
      </svg>

      <div className="wwd-inner">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <Rev>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, ...glass, borderRadius: 100, padding: "6px 18px", marginBottom: 22 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>Our Programs</span>
            </div>
          </Rev>

          <Rev delay={0.1}>
            <h2 style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(2rem,4vw,3.4rem)",
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
              fontSize: "clamp(14px,1.4vw,17px)",
              lineHeight: 1.78,
              maxWidth: 740,
              margin: "0 auto",
            }}>
              As a socially responsible company, we are committed to providing support to individuals impacted by the war. Each request is carefully reviewed, prioritized based on urgency, and addressed accordingly. To accommodate the diverse nature of the requests, we have established four distinct financial programs.
            </p>
          </Rev>
        </div>

        {/* ── 2×2 Card Grid ── */}
        <Rev delay={0.3}>
          <div className="wwd-grid" style={{
            background: "rgba(255,255,255,0.025)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}>
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              const isLeft = i % 2 === 0;
              const isTop = i < 2;
              return (
                <motion.div
                  key={i}
                  className={`wwd-card ${isLeft ? "wwd-card-divider-v" : ""} ${isTop ? "wwd-card-divider-h" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: hovered === i
                      ? `linear-gradient(145deg,${prog.glow},rgba(255,255,255,0.04))`
                      : "transparent",
                    boxShadow: hovered === i
                      ? `inset 0 0 40px ${prog.color}08`
                      : "none",
                  }}
                >
                  {/* Glow blob on hover */}
                  <div style={{
                    position: "absolute", top: -40, left: "40%", transform: "translateX(-50%)",
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
                      width: 58, height: 58, borderRadius: 16,
                      background: `linear-gradient(135deg,${prog.color}18,${prog.color}06)`,
                      border: `1px solid ${prog.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 22,
                      boxShadow: `0 4px 20px ${prog.color}28`,
                      position: "relative", zIndex: 1,
                    }}>
                    <Icon size={26} color={prog.color} />
                  </motion.div>

                  {/* Number badge */}
                  <div style={{
                    position: "absolute", top: 20, right: 22,
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
                    fontSize: 88, fontWeight: 900, lineHeight: 1,
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
                    fontSize: "clamp(15px,1.5vw,19px)",
                    fontWeight: 700,
                    fontFamily: "'Syne',sans-serif",
                    letterSpacing: "-0.2px",
                    marginBottom: 14,
                    position: "relative", zIndex: 1,
                  }}>
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: "rgba(148,163,184,0.62)",
                    fontSize: "clamp(13px,1.15vw,15px)",
                    lineHeight: 1.75,
                    margin: 0,
                    position: "relative", zIndex: 1,
                  }}>
                    {prog.text}
                  </p>

                  {/* Animated bottom accent line */}
                  <div style={{
                    height: 2, borderRadius: 2, marginTop: 24,
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

        {/* ── Bottom flag stripe ── */}
        

      </div>
    </section>
  );
}