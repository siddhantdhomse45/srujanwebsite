import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Scroll-reveal helper ──────────────────────────────── */
const Rev = ({ children, delay = 0, y = 32, x = 0, style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ─── Data ──────────────────────────────────────────────── */
const features = [
  { title: "600+ Custom Mobile App Solutions",                              sub: null,                                                         color: "#38bdf8", grad: "linear-gradient(135deg,#0369a1,#38bdf8)" },
  { title: "Enterprise Mobile App Development & Integrations",              sub: "From ERP to workflow management",                            color: "#818cf8", grad: "linear-gradient(135deg,#4338ca,#818cf8)" },
  { title: "Native and Cross-Platform Development",                         sub: "Mobile apps that work on any device",                        color: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)" },
  { title: "250+ Top IT Experts",                                           sub: null,                                                         color: "#fb923c", grad: "linear-gradient(135deg,#c2410c,#fb923c)" },
  { title: "17+ Years of Experience",                                       sub: "Leading mobile development since iOS & Android launched",    color: "#c084fc", grad: "linear-gradient(135deg,#7e22ce,#c084fc)" },
  { title: "Full Cycle Development and Support",                            sub: null,                                                         color: "#38bdf8", grad: "linear-gradient(135deg,#0369a1,#38bdf8)" },
  { title: "Strategic Long-Term Partnerships",                              sub: null,                                                         color: "#818cf8", grad: "linear-gradient(135deg,#4338ca,#818cf8)" },
  { title: "35 Fortune 1000 Clients",                                       sub: null,                                                         color: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)" },
  { title: "9 Offices in 7 Countries",                                      sub: null,                                                         color: "#fb923c", grad: "linear-gradient(135deg,#c2410c,#fb923c)" },
];

const badges = [
  { label: "ISO",       icon: "🏅" },
  { label: "GDPR",      icon: "🔒" },
  { label: "OWASP",     icon: "🛡️" },
  { label: "PCI DSS",   icon: "💳" },
  { label: "PSD2",      icon: "📋" },
  { label: "HIPAA",     icon: "🏥" },
  { label: "AML",       icon: "⚖️" },
];

const stats = [
  { value: "600+", label: "Apps Delivered" },
  { value: "17+",  label: "Years Active"   },
  { value: "35",   label: "Fortune 1000"   },
  { value: "9",    label: "Global Offices" },
];

/* ─── Phone mock screenshots ───────────────────────────── */
const PHONE_SCREENS = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=85",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=85",
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(64px, 8vw, 120px) 0 clamp(80px, 10vw, 130px)",
        background: "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }

        /* base container */
        .wc-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 64px);
          position: relative;
          z-index: 10;
        }

        /* responsive grid */
        .wc-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
          margin-top: 60px;
        }

        /* stats strip */
        .wc-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          margin-top: 48px;
          background: rgba(255,255,255,0.02);
        }
        .wc-stat {
          padding: clamp(16px, 3vw, 24px) clamp(12px, 2vw, 20px);
          text-align: center;
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(16px);
          transition: background 0.3s;
          cursor: default;
        }
        .wc-stat:hover { background: rgba(255,255,255,0.05); }

        /* feature cards – improved gap */
        .wc-feat-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .wc-feat {
          display: grid;
          grid-template-columns: 36px 1fr;
          align-items: center;
          gap: 16px;
          padding: 18px 20px 18px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.022);
          cursor: default;
          position: relative;
          transition: all 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        .wc-feat:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.045);
          border-color: rgba(255,255,255,0.12);
        }
        .wc-feat-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-radius: 0 4px 4px 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .wc-feat:hover .wc-feat-bar { opacity: 1; }

        /* phone column – remove sticky on mobile */
        .wc-phones-col {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .wc-phones-stack {
          position: relative;
          width: 100%;
          height: clamp(380px, 60vw, 480px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wc-phone {
          position: absolute;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.09), inset 0 1px 0 rgba(255,255,255,0.14);
        }
        .wc-phone img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .wc-phone-back {
          width: 180px;
          height: 340px;
          left: 0;
          top: 40px;
          z-index: 1;
          filter: brightness(0.65) saturate(0.7);
          transform: rotate(3deg);
        }
        .wc-phone-front {
          width: 200px;
          height: 380px;
          right: 0;
          top: 0;
          z-index: 2;
        }

        /* floating chips */
        .wc-chip {
          position: absolute;
          background: rgba(7,15,38,0.88);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.55);
          white-space: nowrap;
          z-index: 5;
        }
        .wc-chip > div:first-child {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .wc-chip div:first-child + div div:first-child {
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          color: white;
        }
        .wc-chip div:first-child + div div:last-child {
          font-size: 9px;
          color: rgba(148,163,184,0.55);
        }

        /* badges */
        .wc-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .wc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(148,163,184,0.6);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.25s;
          cursor: default;
        }
        .wc-badge:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.8);
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */
        @media (max-width: 1024px) {
          .wc-cols {
            grid-template-columns: 1fr;
            gap: 48px;
            margin-top: 48px;
          }
          .wc-phones-col {
            position: static; /* remove sticky on tablet */
          }
          .wc-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1px;
          }
          .wc-phone-back {
            width: 160px;
            height: 300px;
            left: 5%;
          }
          .wc-phone-front {
            width: 180px;
            height: 340px;
            right: 5%;
          }
          .wc-feat-list {
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .wc-inner {
            padding: 0 24px;
          }
          .wc-cols {
            gap: 40px;
            margin-top: 40px;
          }
          .wc-feat-list {
            gap: 12px;
          }
          .wc-feat {
            padding: 14px 16px;
            gap: 12px;
          }
          .wc-feat:hover {
            transform: translateX(4px);
          }
          .wc-stats {
            margin-top: 36px;
          }
          .wc-phone-back {
            width: 140px;
            height: 260px;
            left: 0;
            top: 30px;
          }
          .wc-phone-front {
            width: 160px;
            height: 300px;
            right: 0;
          }
          .wc-phones-stack {
            height: 340px;
          }
          .wc-chip {
            padding: 6px 10px;
            white-space: normal;
            max-width: 85%;
          }
          .wc-chip div:first-child + div div:first-child {
            font-size: 10px;
          }
          .wc-chip div:first-child + div div:last-child {
            font-size: 8px;
          }
        }

        @media (max-width: 640px) {
          .wc-inner {
            padding: 0 20px;
          }
          .wc-cols {
            gap: 36px;
          }
          .wc-feat-list {
            gap: 10px;
          }
          .wc-feat {
            grid-template-columns: 28px 1fr;
            gap: 10px;
            padding: 12px 14px;
            border-radius: 16px;
          }
          .wc-feat > div:first-child {
            width: 28px;
            height: 28px;
          }
          .wc-feat > div:first-child svg {
            width: 12px;
            height: 12px;
          }
          .wc-phone-back {
            width: 110px;
            height: 210px;
            top: 25px;
          }
          .wc-phone-front {
            width: 130px;
            height: 250px;
          }
          .wc-phones-stack {
            height: 280px;
          }
          .wc-stats {
            grid-template-columns: 1fr 1fr;
            gap: 1px;
          }
          .wc-stat {
            padding: 12px 8px;
          }
          .wc-badges {
            gap: 8px;
            margin-top: 20px;
          }
          .wc-badge {
            padding: 4px 10px;
            font-size: 9px;
          }
        }

        @media (max-width: 480px) {
          .wc-inner {
            padding: 0 16px;
          }
          .wc-feat {
            padding: 10px 12px;
          }
          .wc-feat-list {
            gap: 8px;
          }
          .wc-phone-back {
            width: 95px;
            height: 180px;
          }
          .wc-phone-front {
            width: 115px;
            height: 220px;
          }
          .wc-phones-stack {
            height: 250px;
          }
          .wc-chip {
            padding: 5px 8px;
            border-radius: 10px;
          }
          .wc-chip div:first-child + div div:first-child {
            font-size: 9px;
          }
          .wc-chip div:first-child + div div:last-child {
            font-size: 7px;
          }
        }
      `}</style>

      {/* Ambient orbs (responsive) */}
      <motion.div
        animate={{ scale: [1,1.13,1], opacity: [0.10,0.20,0.10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-10%", left: "-8%",
          width: "min(580px, 80vw)", height: "min(580px, 80vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1,1.10,1], opacity: [0.10,0.17,0.10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        style={{
          position: "absolute", bottom: "-10%", right: "-6%",
          width: "min(520px, 70vw)", height: "min(520px, 70vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.04,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wc-grid)" />
      </svg>

      <div className="wc-inner">

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
          <Rev>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 100, padding: "5px 16px", marginBottom: 24,
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#22d3ee", boxShadow:"0 0 8px #22d3ee", display:"inline-block" }} />
              <span style={{ color:"rgba(255,255,255,0.6)", fontSize: "clamp(10px, 3vw, 12px)", fontWeight:600, letterSpacing:2.5, textTransform:"uppercase" }}>
                Why Choose Us
              </span>
            </div>
          </Rev>

          <Rev delay={0.1}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 6vw, 54px)",
              fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.08,
              color: "white", margin: "0 0 20px",
            }}>
              Why Choose{" "}
              <span style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Srujan Infotech
              </span>{" "}
              for Your Mobile App Development Project?
            </h2>
          </Rev>

          <Rev delay={0.18}>
            <p style={{
              color: "rgba(148,163,184,0.65)",
              fontSize: "clamp(14px, 3.5vw, 17px)",
              lineHeight: 1.7, margin: 0,
            }}>
              We offer a full cycle of application design, integration and management services.
              Whether it's a consumer app or a transformative enterprise-class solution, we lead
              the entire development process — from ideation to delivery and ongoing support.
            </p>
          </Rev>
        </div>

        {/* Stats strip */}
        <Rev delay={0.22}>
          <div className="wc-stats">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label} className="wc-stat" whileHover={{ scale: 1.02 }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(24px, 4.5vw, 38px)",
                  fontWeight: 800, lineHeight: 1,
                  background: [
                    "linear-gradient(135deg,#0369a1,#38bdf8)",
                    "linear-gradient(135deg,#4338ca,#818cf8)",
                    "linear-gradient(135deg,#059669,#34d399)",
                    "linear-gradient(135deg,#c2410c,#fb923c)"
                  ][i],
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: 5,
                }}>
                  {value}
                </div>
                <div style={{ color:"rgba(148,163,184,0.50)", fontSize: "clamp(9px, 2.5vw, 11px)", fontWeight:600, letterSpacing:1.5, textTransform:"uppercase" }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </Rev>

        {/* Two columns */}
        <div className="wc-cols">

          {/* Feature list */}
          <motion.div
            className="wc-feat-list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.065 } }
            }}
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="wc-feat"
                variants={{
                  hidden: { opacity: 0, x: -28 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } }
                }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                style={{
                  borderColor: activeIdx === i ? `${feat.color}38` : "rgba(255,255,255,0.06)",
                  boxShadow: activeIdx === i ? `0 8px 32px rgba(0,0,0,0.35), 0 0 22px ${feat.color}14` : "none",
                }}
              >
                <div className="wc-feat-bar" style={{ background: feat.grad }} />
                <div style={{
                  width: 36, height: 36, borderRadius: 11, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg,${feat.color}1a,${feat.color}08)`,
                  border: `1px solid ${feat.color}30`,
                  boxShadow: activeIdx === i ? `0 0 18px ${feat.color}28` : "none",
                  transition: "box-shadow 0.3s",
                }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke={feat.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    color: activeIdx === i ? "rgba(255,255,255,0.95)" : "rgba(226,232,240,0.82)",
                    fontSize: "clamp(13px, 3.2vw, 15px)",
                    fontWeight: 600, lineHeight: 1.4,
                    marginBottom: feat.sub ? 4 : 0,
                    transition: "color 0.25s",
                  }}>
                    {feat.title}
                  </div>
                  {feat.sub && (
                    <div style={{
                      color: "rgba(148,163,184,0.48)",
                      fontSize: "clamp(11px, 2.8vw, 13px)",
                      fontWeight: 400,
                    }}>
                      {feat.sub}
                    </div>
                  )}
                </div>
                <div style={{
                  position: "absolute", right: "clamp(12px, 2vw, 20px)", top: "50%", transform: "translateY(-50%)",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800,
                  color: activeIdx === i ? `${feat.color}18` : `${feat.color}08`,
                  userSelect: "none", pointerEvents: "none",
                  transition: "color 0.3s",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}

            {/* Badges */}
            <Rev delay={0.15}>
              <div className="wc-badges">
                <div style={{ width: "100%", marginBottom: 8 }}>
                  <span style={{ color:"rgba(148,163,184,0.35)", fontSize:"clamp(9px, 2.8vw, 11px)", fontWeight:700, letterSpacing:2, textTransform:"uppercase" }}>
                    Certifications &amp; Compliance
                  </span>
                </div>
                {badges.map(({ label, icon }) => (
                  <div key={label} className="wc-badge">
                    <span>{icon}</span> {label}
                  </div>
                ))}
              </div>
            </Rev>
          </motion.div>

          {/* Phone mockups column */}
          <div className="wc-phones-col">
            <Rev x={48} y={0} style={{ width: "100%" }}>
              <div className="wc-phones-stack">
                {/* Glow halo */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "min(340px, 80vw)", height: "min(340px, 80vw)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(56,189,248,0.12), rgba(129,140,248,0.08), transparent 70%)",
                  filter: "blur(48px)", pointerEvents: "none",
                }} />

                {/* Back phone */}
                <motion.div
                  className="wc-phone wc-phone-back"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <img src={PHONE_SCREENS[0]} alt="App UI 1" />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(56,189,248,0.06), transparent 50%, rgba(0,0,0,0.30))",
                  }} />
                </motion.div>

                {/* Front phone */}
                <motion.div
                  className="wc-phone wc-phone-front"
                  animate={{ y: [0, -16, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={PHONE_SCREENS[1]} alt="App UI 2" />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(129,140,248,0.06), transparent 50%, rgba(0,0,0,0.25))",
                  }} />

                  {/* Bottom floating chip */}
                  <motion.div
                    className="wc-chip"
                    style={{ bottom: "clamp(8px, 3vw, 28px)", left: "50%", transform: "translateX(-50%)" }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div style={{ background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
                    <div>
                      <div>600+ Apps Delivered</div>
                      <div>Across 9 Offices Worldwide</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Top-left floating chip */}
                <motion.div
                  className="wc-chip"
                  style={{ top: "clamp(4px, 2vw, 12px)", left: "clamp(-10px, -2vw, 0)" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div style={{ background: "#818cf8", boxShadow: "0 0 8px #818cf8" }} />
                  <div>
                    <div>17+ Yrs Experience</div>
                    <div>Since iOS & Android Launch</div>
                  </div>
                </motion.div>
              </div>
            </Rev>
          </div>
        </div>

      </div>
    </section>
  );
}