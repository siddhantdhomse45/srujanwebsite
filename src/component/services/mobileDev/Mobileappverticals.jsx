import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  MOBILE APP SOLUTIONS FOR VERTICALS                         ║
 ║  Matches screenshot: 3×2 grid, icon-left + text-right cards ║
 ║  Upgraded to: dark navy, #3b82f6 blue accent system        ║
 ║  Cards: glassmorphism, hover glow, animated top-edge line   ║
 ║  Responsive: 3col → 2col → 1col                            ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ── 6 vertical solutions ── */
const VERTICALS = [
  {
    id: "construction",
    title: "Construction",
    body: "Advanced mobile app solutions that take Construction into the Digital Era.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Hard hat */}
        <path d="M16 34c0-8.8 7.2-16 16-16s16 7.2 16 16"/>
        <path d="M12 34h40"/>
        <path d="M20 34v4a2 2 0 002 2h20a2 2 0 002-2v-4"/>
        {/* Visor */}
        <path d="M24 26c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        {/* Face outline */}
        <ellipse cx="32" cy="44" rx="10" ry="8"/>
        <path d="M26 48c1.5 2 3.5 3 6 3s4.5-1 6-3"/>
        {/* Eyes */}
        <circle cx="28" cy="43" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="36" cy="43" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "mhealth",
    title: "mHealth",
    body: "Patient-friendly mobile software that empowers healthcare industry workers.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Heart shape */}
        <path d="M32 50S12 38 12 24a10 10 0 0120-4 10 10 0 0120 4c0 14-20 26-20 26z"/>
        {/* ECG pulse through heart */}
        <path d="M18 30h6l3-6 4 12 3-6h12"/>
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail & eCommerce",
    body: "Engaging mobile software solutions for modern retail.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Phone frame */}
        <rect x="20" y="10" width="24" height="38" rx="3"/>
        <line x1="20" y1="17" x2="44" y2="17"/>
        <line x1="20" y1="41" x2="44" y2="41"/>
        <circle cx="32" cy="44.5" r="1.5" fill="currentColor" stroke="none"/>
        {/* Shopping cart on screen */}
        <path d="M25 23h2l2 8h8l2-6h-10"/>
        <circle cx="28" cy="33" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="34" cy="33" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "fintech",
    title: "FinTech",
    body: "Meet the demands of modern customers in speed and security with scalable financial technology.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Dollar circle */}
        <circle cx="28" cy="30" r="12"/>
        <path d="M28 22v2M28 36v2"/>
        <path d="M24 26c0-1.7 1.8-3 4-3s4 1.3 4 3-1.8 3-4 3-4 1.3-4 3 1.8 3 4 3 4-1.3 4-3"/>
        {/* Arrows */}
        <path d="M42 24l4-4 4 4"/>
        <line x1="46" y1="20" x2="46" y2="30"/>
        <path d="M42 40l4 4 4-4"/>
        <line x1="46" y1="44" x2="46" y2="34"/>
        {/* Small circle */}
        <circle cx="46" cy="32" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    body: "Extend the comfort of your resort with practical mobile software solutions.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Plane */}
        <path d="M14 36l8-4 4-12 4 4-4 6 12-4 2 2-12 6 2 6-4 2-2-6-8 4z"/>
        {/* Road/runway below */}
        <path d="M10 46h44"/>
        <path d="M18 50h28"/>
        <path d="M26 46v4M38 46v4"/>
        {/* Sun */}
        <circle cx="50" cy="20" r="5"/>
        <line x1="50" y1="12" x2="50" y2="10"/>
        <line x1="50" y1="28" x2="50" y2="30"/>
        <line x1="42" y1="20" x2="40" y2="20"/>
        <line x1="58" y1="20" x2="60" y2="20"/>
      </svg>
    ),
  },
  {
    id: "insurance",
    title: "Insurance",
    body: "Boost the profitability and safety of your business processes through innovative mobile app solutions.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
        {/* Shield */}
        <path d="M32 10L14 18v14c0 10 8 18 18 22 10-4 18-12 18-22V18L32 10z"/>
        {/* Briefcase inside */}
        <rect x="24" y="28" width="16" height="12" rx="2"/>
        <path d="M28 28v-2a2 2 0 014 0v2"/>
        <line x1="24" y1="34" x2="40" y2="34"/>
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(90px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ── Single vertical card — icon LEFT, text RIGHT ── */
function VerticalCard({ item, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-50px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.09, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative" }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute", inset: -2, borderRadius: 18,
          background: `radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.2), transparent 65%)`,
          filter: "blur(12px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          y: hov ? -5 : 0,
          background: hov ? "rgba(59,130,246,0.07)" : "rgba(255,255,255,0.03)",
          borderColor: hov ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.07)",
          boxShadow: hov
            ? "0 20px 52px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.3)"
            : "0 2px 16px rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 0.35, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
          padding: "32px 28px",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          boxSizing: "border-box",
          height: "100%",
        }}
      >
        {/* Top edge line */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: E }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2.5,
            background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)`,
            transformOrigin: "left",
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            color: hov ? BLUE : "rgba(255,255,255,0.50)",
            background: hov ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.04)",
            borderColor: hov ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.07)",
            scale: hov ? 1.04 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            flexShrink: 0,
            width: 72, height: 72,
            borderRadius: 16,
            border: "1.5px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </motion.div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.h3
            animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.88)" }}
            transition={{ duration: 0.22 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.3px",
              lineHeight: 1.2,
              margin: "0 0 10px",
            }}
          >
            {item.title}
          </motion.h3>

          {/* Divider */}
          <motion.div
            animate={{ background: hov ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.08)" }}
            transition={{ duration: 0.3 }}
            style={{ height: 1, width: "100%", marginBottom: 12 }}
          />

          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 13.5, lineHeight: 1.85,
            color: "rgba(255,255,255,0.46)",
            margin: "0 0 16px",
          }}>
            {item.body}
          </p>

          {/* Learn more */}
          <motion.div
            animate={{
              x: hov ? 4 : 0,
              color: hov ? BLUE : "rgba(255,255,255,0.22)",
            }}
            transition={{ duration: 0.25 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 10,
              letterSpacing: 2.2, textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            <div style={{ width: 16, height: 1.5, background: "currentColor", borderRadius: 2 }} />
            Learn More
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h8M7 3l3 3-3 3"/>
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
export default function MobileAppVerticals() {
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
        .mav-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .mav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 1024px) {
          .mav-grid    { grid-template-columns: repeat(2, 1fr); }
          .mav-section { padding: 88px 40px 104px !important; }
          .mav-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .mav-subtitle { text-align: left !important; max-width: 100% !important; }
        }
        @media (max-width: 600px) {
          .mav-grid    { grid-template-columns: 1fr; }
          .mav-section { padding: 64px 20px 80px !important; }
          .mav-h2      { font-size: 26px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="mav-section">

        {/* ── Atmosphere ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.08)", top: -180, left: -120 }} />
        <Orb style={{ width: 480, height: 480, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 340, height: 340, background: "rgba(59,130,246,0.05)", top: "40%", left: "40%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.065) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Structural vertical lines */}
        {[20, 50, 80].map((l, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0, left: `${l}%`, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.055) 30%, rgba(59,130,246,0.055) 70%, transparent)",
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
                Industry Verticals
              </span>
            </motion.div>

            {/* Heading + subtitle row */}
            <div
              className="mav-header-row"
              style={{
                display: "flex", alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap", gap: 28,
              }}
            >
              <motion.h2
                className="mav-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(26px, 4vw, 54px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 660,
                }}
              >
                Mobile App Solutions{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 55%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  for Verticals
                </span>
              </motion.h2>

              <motion.p
                className="mav-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.42)",
                  maxWidth: 400, margin: 0,
                  textAlign: "right",
                }}
              >
                From startups to enterprises, we've gained vast experience
                delivering innovative digital solutions for a wide range of
                clients across multiple industries.
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

          {/* ── 3×2 Vertical cards grid ── */}
          <div className="mav-grid">
            {VERTICALS.map((item, i) => (
              <VerticalCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA strip ── */}
          

        </div>
      </section>
    </>
  );
}