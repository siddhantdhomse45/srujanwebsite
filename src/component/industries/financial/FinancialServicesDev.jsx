import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  FINANCIAL SERVICES AND SOFTWARE DEVELOPMENT                ║
 ║  Layout: 2-col × 3-row service grid                         ║
 ║  Each card: blue SVG icon + bold title + body + bullet list ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    id: "banking",
    title: "Online Banking",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.22)",
    body: "Architect new experiences with renewed online banking systems. We use a comprehensive set of functionalities to create state-of-the-art solutions for your end-users.",
    bullets: [
      "Custom Online Banking Platforms",
      "Online Banking Mobile Apps",
      "Online Banking Security",
      "Online Banking UI/UX",
      "Online Banking System Integration",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <rect x="12" y="8" width="22" height="36" rx="3"/>
        <circle cx="23" cy="38" r="2"/>
        <path d="M17 14h12M17 19h8"/>
        <path d="M38 22l4 4-4 4M42 26H32"/>
        <circle cx="23" cy="26" r="4"/>
        <path d="M19 30c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
      </svg>
    ),
  },
  {
    id: "blockchain",
    title: "Blockchain & Cryptocurrencies",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.22)",
    body: "Blockchain solutions and platforms help financial institutions increase services' security, reduce transaction fee costs, and automate operations.",
    bullets: [
      "ICO Launch Support",
      "Cryptocurrency Operations",
      "Smart Contracts",
      "Identity Management",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <rect x="8" y="18" width="12" height="10" rx="2"/>
        <rect x="36" y="18" width="12" height="10" rx="2"/>
        <rect x="22" y="8" width="12" height="10" rx="2"/>
        <rect x="22" y="38" width="12" height="10" rx="2"/>
        <line x1="20" y1="23" x2="36" y2="23"/>
        <line x1="28" y1="18" x2="28" y2="8"/>
        <line x1="28" y1="48" x2="28" y2="38"/>
        <circle cx="28" cy="28" r="5"/>
        <path d="M25 28h6M28 25v6"/>
      </svg>
    ),
  },
  {
    id: "wallet",
    title: "Digital Wallet",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.22)",
    body: "Well-made wallet apps allow banks to cater to modern customers' demands in high security and tailored promotions.",
    bullets: [
      "P2P Payments",
      "Digital Money Transfer",
      "Digital Payments",
      "In-app Currency",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <rect x="8" y="16" width="36" height="26" rx="3"/>
        <path d="M8 24h36"/>
        <rect x="34" y="27" width="10" height="8" rx="2"/>
        <circle cx="39" cy="31" r="1.5" fill="currentColor" stroke="none"/>
        <path d="M14 32h8M14 36h6"/>
        <path d="M38 16v-4a2 2 0 00-2-2H14a2 2 0 00-2 2v4"/>
        <path d="M44 31l4-3"/>
      </svg>
    ),
  },
  {
    id: "aiml",
    title: "AI and ML",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
    body: "Our financial software development company can help build efficient, automated, and highly accurate systems using emerging AI technology.",
    bullets: [
      "Predictive and Recommendation Systems",
      "Natural Language Processing",
      "Computer Vision",
      "Data Mining and Analytics",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <circle cx="28" cy="20" r="8"/>
        <path d="M20 30c-4 2-8 6-8 12h32c0-6-4-10-8-12"/>
        <path d="M22 20c0-3.3 2.7-6 6-6"/>
        <path d="M36 16l4-4M36 24l4 4M20 16l-4-4M20 24l-4 4"/>
        <path d="M24 38l2 6h4l2-6"/>
        <line x1="28" y1="38" x2="28" y2="44"/>
      </svg>
    ),
  },
  {
    id: "trading",
    title: "Trading and Securities",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.22)",
    body: "Mobile stock tracking, AI-assisted trading automation, and blockchain-based smart contracts —Srujan Infotech develops software solutions that cater to your business's individual needs.",
    bullets: [
      "Securities Trading",
      "Digital Brokerage",
      "Blockchain Ledgers",
      "AI and Automation",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <rect x="8" y="20" width="8" height="20" rx="1"/>
        <rect x="20" y="14" width="8" height="26" rx="1"/>
        <rect x="32" y="22" width="8" height="18" rx="1"/>
        <path d="M10 18l10-8 10 10 12-12"/>
        <path d="M44 8h-6v6"/>
        <line x1="8" y1="44" x2="48" y2="44"/>
      </svg>
    ),
  },
  {
    id: "rpa",
    title: "Robotic Process Automation (RPA)",
    accent: "#dc2626",
    glow: "rgba(220,38,38,0.22)",
    body: "RPA enables financial organizations to improve productivity, drive down costs, and streamline compliance. Enhance intelligent automation solutions with our experts.",
    bullets: [
      "Account Reconciliation",
      "Automated Mailers",
      "Monthly Account Reviews",
      "Regulatory Reporting",
    ],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        width="48" height="48">
        <rect x="16" y="24" width="24" height="16" rx="3"/>
        <circle cx="22" cy="32" r="2.5"/>
        <circle cx="34" cy="32" r="2.5"/>
        <path d="M22 24v-4a6 6 0 0112 0v4"/>
        <path d="M14 30H8M42 30h6"/>
        <path d="M20 40l-3 6h22l-3-6"/>
        <line x1="28" y1="40" x2="28" y2="46"/>
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

/* ── Dot grid decoration ── */
function DotGrid({ style }) {
  return (
    <div style={{
      position: "absolute",
      backgroundImage: `radial-gradient(${BLUE}44 1.5px, transparent 1.5px)`,
      backgroundSize: "16px 16px",
      pointerEvents: "none",
      ...style,
    }} />
  );
}

/* ── Single service card ── */
function ServiceCard({ service, index }) {
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
      style={{ position: "relative" }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute", inset: -3, borderRadius: 20,
          background: `radial-gradient(ellipse at 30% 30%, ${service.glow}, transparent 65%)`,
          filter: "blur(12px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          y: hov ? -6 : 0,
          background: hov
            ? `linear-gradient(145deg, ${service.accent}0f, rgba(255,255,255,0.04))`
            : "rgba(255,255,255,0.03)",
          borderColor: hov ? `${service.accent}45` : "rgba(255,255,255,0.07)",
          boxShadow: hov
            ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${service.accent}33`
            : "0 2px 20px rgba(0,0,0,0.28)",
        }}
        transition={{ duration: 0.38, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 18,
          padding: "36px 32px 40px",
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Top accent line */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: E }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2.5,
            background: `linear-gradient(90deg, ${service.accent}, ${service.accent}44)`,
            transformOrigin: "left",
          }}
        />

        {/* Icon row — icon left, number right */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 24,
        }}>
          {/* Icon container */}
          <motion.div
            animate={{
              color: hov ? service.accent : `${service.accent}cc`,
              background: hov ? `${service.accent}1e` : `${service.accent}0e`,
              borderColor: hov ? `${service.accent}50` : `${service.accent}22`,
              scale: hov ? 1.06 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: 72, height: 72, borderRadius: 16,
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {service.icon}
          </motion.div>

          {/* Number */}
          <motion.span
            animate={{ color: hov ? service.accent : "rgba(255,255,255,0.14)" }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 48,
              letterSpacing: "-2px", lineHeight: 1,
              userSelect: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.9)" }}
          transition={{ duration: 0.22 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 1.8vw, 22px)",
            textTransform: "uppercase",
            letterSpacing: "0.3px",
            lineHeight: 1.15,
            margin: "0 0 4px",
          }}
        >
          {service.title}
        </motion.h3>

        {/* Accent tag */}
        <motion.div
          animate={{ color: hov ? service.accent : "rgba(255,255,255,0.28)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: 10,
            letterSpacing: 2.5, textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Financial Technology
        </motion.div>

        {/* Divider */}
        <motion.div
          animate={{
            background: hov
              ? `linear-gradient(90deg, ${service.accent}55, rgba(255,255,255,0.05))`
              : "rgba(255,255,255,0.07)",
          }}
          transition={{ duration: 0.3 }}
          style={{ height: 1, width: "100%", marginBottom: 18 }}
        />

        {/* Body text */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 14, lineHeight: 1.85,
          color: "rgba(255,255,255,0.48)",
          margin: "0 0 22px",
        }}>
          {service.body}
        </p>

        {/* Bullet list */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {service.bullets.map((b, bi) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -10 }}
              animate={inV ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + bi * 0.05 + 0.4, duration: 0.45, ease: E }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13.5, lineHeight: 1.5,
                color: "rgba(255,255,255,0.58)",
              }}
            >
              {/* Blue dot */}
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: service.accent,
                boxShadow: `0 0 6px ${service.accent}88`,
                flexShrink: 0,
              }} />
              {b}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function FinancialServicesDev() {
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
        .fsd-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .fsd-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .fsd-grid    { grid-template-columns: 1fr; }
          .fsd-section { padding: 80px 32px 96px !important; }
          .fsd-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .fsd-subtitle { text-align: left !important; max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .fsd-section { padding: 60px 16px 80px !important; }
          .fsd-h2      { font-size: 24px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="fsd-section">

        {/* ── Atmosphere ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(139,92,246,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 340, height: 340, background: "rgba(16,185,129,0.05)", top: "40%", left: "40%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Dot grid decorations — matches screenshot corners */}
        <DotGrid style={{ top: 60, left: 40, width: 120, height: 120, opacity: 0.5, borderRadius: 8 }} />
        <DotGrid style={{ bottom: 80, right: 40, width: 120, height: 120, opacity: 0.5, borderRadius: 8 }} />

        {/* Vertical structural lines */}
        {[25, 50, 75].map((l, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0, left: `${l}%`, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.05) 30%, rgba(59,130,246,0.05) 70%, transparent)",
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: 80 }}>
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
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase",
                color: BLUE,
              }}>
                FinTech Solutions
              </span>
            </motion.div>

            {/* Heading + subtitle */}
            <div
              className="fsd-header-row"
              style={{
                display: "flex", alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap", gap: 28,
              }}
            >
              <motion.h2
                className="fsd-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 4vw, 54px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 700,
                }}
              >
                Financial Services and{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 55%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Software Development
                </span>
              </motion.h2>

              <motion.p
                className="fsd-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 360, margin: 0,
                  textAlign: "right",
                }}
              >
                Six specialised financial engineering disciplines
                built to modernise banking, trading, and insurance operations.
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

          {/* ── 2×3 service grid ── */}
          <div className="fsd-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.85, delay: 0.3, ease: E }}
            style={{
              marginTop: 64,
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", gap: 24,
              padding: "32px 40px",
              background: "rgba(59,130,246,0.05)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: 16,
            }}
          >
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800, fontSize: 20,
                textTransform: "uppercase", letterSpacing: 0.5,
                color: "#fff", marginBottom: 5,
              }}>
                Ready to modernise your financial systems?
              </div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13.5, color: "rgba(255,255,255,0.35)",
              }}>
                Talk to our FinTech specialists and get a free project assessment.
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `linear-gradient(135deg, ${BLUE}, #2563eb)`,
                  color: "#fff", textDecoration: "none",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700, fontSize: 11,
                  letterSpacing: 2, textTransform: "uppercase",
                  padding: "14px 28px", borderRadius: 8,
                  border: `2px solid ${BLUE}`,
                  boxShadow: "0 0 18px rgba(59,130,246,0.28)",
                  whiteSpace: "nowrap",
                }}
              >
                Talk to Us
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6h8M7 3l3 3-3 3"/>
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ background: "rgba(59,130,246,0.14)", boxShadow: "0 0 24px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  color: "rgba(255,255,255,0.8)", textDecoration: "none",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600, fontSize: 11,
                  letterSpacing: 2, textTransform: "uppercase",
                  padding: "14px 28px", borderRadius: 8,
                  border: `2px solid ${BLUE}`,
                  background: "transparent", whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}