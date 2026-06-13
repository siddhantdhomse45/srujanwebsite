import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HeartPulse, Hammer, Handshake, Smile, Sprout, Users } from "lucide-react";

const values = [
  { icon: HeartPulse,  label: "Empathy",       desc: "We listen before we speak, and feel before we build.",        color: "#38bdf8", glow: "rgba(56,189,248,0.18)",  grad: "linear-gradient(135deg,#0369a1,#38bdf8)" },
  { icon: Hammer,      label: "Craftsmanship",  desc: "Every pixel, every word, every decision — made with care.",   color: "#818cf8", glow: "rgba(129,140,248,0.18)", grad: "linear-gradient(135deg,#4338ca,#818cf8)" },
  { icon: Handshake,   label: "Courtesy",       desc: "Respect is the foundation of every interaction we have.",     color: "#34d399", glow: "rgba(52,211,153,0.18)",  grad: "linear-gradient(135deg,#059669,#34d399)" },
  { icon: Smile,       label: "Playfulness",    desc: "Serious work doesn't require a serious face.",                color: "#fb923c", glow: "rgba(251,146,60,0.18)",   grad: "linear-gradient(135deg,#c2410c,#fb923c)" },
  { icon: Sprout,      label: "Thriving",       desc: "We grow together — as people, as a team, as a product.",     color: "#c084fc", glow: "rgba(192,132,252,0.18)",  grad: "linear-gradient(135deg,#9333ea,#c084fc)" },
  { icon: Users,       label: "Solidarity",     desc: "No one wins alone. We rise by lifting each other.",          color: "#f472b6", glow: "rgba(244,114,182,0.18)",  grad: "linear-gradient(135deg,#be185d,#f472b6)" },
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

export default function CoreValues() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 110px) 0 clamp(80px, 10vw, 130px)",
        background: "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .cv-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
          z-index: 10;
        }

        .cv-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: start;
        }

        .cv-left {
          position: sticky;
          top: 80px;
        }

        .cv-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 40px;
          height: clamp(220px, 28vw, 340px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .cv-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.55) saturate(0.7);
          transition: transform 8s ease, filter 0.6s ease;
        }
        .cv-img-wrap:hover img {
          filter: brightness(0.65) saturate(0.9);
        }

        .cv-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 22px 24px;
          border-radius: 14px;
          border-left: 2px solid transparent;
          position: relative;
          cursor: default;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .cv-row:hover {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .cv-inner { padding: 0 36px; }
          .cv-layout { grid-template-columns: 1fr; gap: 48px; }
          .cv-left { position: static; }
          .cv-img-wrap { height: 280px; margin-top: 28px; }
        }

        @media (max-width: 640px) {
          .cv-inner { padding: 0 20px; }
          .cv-img-wrap { height: 220px; margin-top: 20px; }
          .cv-row { padding: 18px 16px; gap: 14px; }
          .cv-row .icon-box { width: 44px; height: 44px; }
          .cv-row .icon-box svg { width: 18px; height: 18px; }
        }

        @media (max-width: 480px) {
          .cv-inner { padding: 0 16px; }
          .cv-img-wrap { height: 180px; }
          .cv-row { gap: 12px; }
          .cv-row .icon-box { width: 40px; height: 40px; }
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

      {/* Grid texture */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cvgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cvgrid)" />
      </svg>

      <div className="cv-inner">
        <div className="cv-layout">

          {/* ── LEFT: sticky header + image ── */}
          <div className="cv-left">
            <Rev>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                ...glass, borderRadius: 100, padding: "6px 18px", marginBottom: 22,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#22d3ee", boxShadow: "0 0 8px #22d3ee",
                  display: "inline-block",
                }} />
                <span style={{
                  color: "rgba(255,255,255,0.6)", fontSize: 12,
                  fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase",
                }}>
                  Who We Are
                </span>
              </div>
            </Rev>

            <Rev delay={0.1}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                fontWeight: 800, color: "white",
                letterSpacing: "-1px", lineHeight: 1.1,
                margin: "0 0 22px",
              }}>
                Our{" "}
                <span style={{
                  background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Core Values
                </span>
              </h2>
            </Rev>

            <Rev delay={0.2}>
              <p style={{
                color: "rgba(148,163,184,0.65)",
                fontSize: "clamp(13px, 1.4vw, 16px)",
                lineHeight: 1.78, margin: "0 0 0",
                maxWidth: 420,
              }}>
                These fundamental principles guide everything we do. We don't just preach them —
                we build them into our platform and products, creating real value by helping people
                work more effectively while bringing their authentic selves to everything they do.
              </p>
            </Rev>

            <Rev delay={0.3}>
              <div className="cv-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1170&q=80"
                  alt="Team collaborating"
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(2,13,30,0.96) 0%, rgba(2,13,30,0.2) 55%, transparent 100%)",
                  zIndex: 1,
                }} />
                <div style={{
                  position: "absolute", bottom: 24, left: 28, zIndex: 2,
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(42px, 6vw, 60px)",
                    fontWeight: 800, color: "white",
                    lineHeight: 1, marginBottom: 4,
                  }}>
                    6
                  </div>
                  <div style={{
                    fontSize: 11, letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 500,
                  }}>
                    Principles we live by
                  </div>
                </div>

                {/* Accent dots – matching current hover */}
                <div style={{
                  position: "absolute", bottom: 28, right: 24, zIndex: 2,
                  display: "flex", gap: 6,
                }}>
                  {values.map((v, i) => (
                    <div
                      key={i}
                      style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: hovered === i ? v.color : "rgba(255,255,255,0.2)",
                        transition: "background 0.3s, transform 0.3s",
                        transform: hovered === i ? "scale(1.5)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Rev>
          </div>

          {/* ── RIGHT: interactive value rows ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {values.map((val, i) => {
              const Icon = val.icon;
              const active = hovered === i;
              return (
                <motion.div
                  key={i}
                  className="cv-row"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onTouchStart={() => setHovered(i)}
                  onTouchEnd={() => setTimeout(() => setHovered(null), 600)}
                  style={{
                    background: active
                      ? `linear-gradient(145deg,${val.glow},rgba(255,255,255,0.03))`
                      : "transparent",
                    borderLeftColor: active ? val.color : "transparent",
                  }}
                >
                  {/* Glow blob behind the icon */}
                  <div style={{
                    position: "absolute", top: -30, left: -20,
                    width: 140, height: 140, borderRadius: "50%",
                    background: `radial-gradient(circle,${val.color}20,transparent 70%)`,
                    filter: "blur(24px)",
                    opacity: active ? 1 : 0,
                    transition: "opacity 0.4s",
                    pointerEvents: "none",
                  }} />

                  {/* Icon container */}
                  <motion.div
                    className="icon-box"
                    animate={active ? { rotate: -6, scale: 1.12 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      flexShrink: 0,
                      width: 48, height: 48, borderRadius: 14,
                      background: active
                        ? `linear-gradient(135deg,${val.color}22,${val.color}08)`
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? val.color + "45" : "rgba(255,255,255,0.08)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: active ? val.color : "rgba(255,255,255,0.4)",
                      boxShadow: active ? `0 4px 18px ${val.color}28` : "none",
                      transition: "background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s",
                      position: "relative", zIndex: 1,
                    }}
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                      fontWeight: 700,
                      color: active ? val.color : "white",
                      marginBottom: 5,
                      transition: "color 0.3s",
                      lineHeight: 1.2,
                    }}>
                      {val.label}
                    </div>
                    <div style={{
                      fontSize: "clamp(12px, 1.2vw, 14px)",
                      color: active ? "rgba(148,163,184,0.8)" : "rgba(148,163,184,0.5)",
                      lineHeight: 1.65,
                      transition: "color 0.3s",
                    }}>
                      {val.desc}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div style={{
                    flexShrink: 0,
                    width: 28, height: 28, borderRadius: 8,
                    background: active ? val.grad : "rgba(255,255,255,0.04)",
                    border: `1px solid ${active ? "transparent" : "rgba(255,255,255,0.07)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700,
                    color: active ? "white" : "rgba(255,255,255,0.25)",
                    transition: "all 0.3s",
                    boxShadow: active ? `0 2px 10px ${val.color}30` : "none",
                    position: "relative", zIndex: 1,
                  }}>
                    0{i + 1}
                  </div>

                  {/* Animated bottom line */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 24,
                    height: 1, borderRadius: 1,
                    background: val.grad,
                    width: active ? "calc(100% - 48px)" : "0%",
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}