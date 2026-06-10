import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  CUSTOM FINANCIAL SOFTWARE DEVELOPMENT                      ║
 ║  Layout: Left photo + Right 2-column checklist              ║
 ║  Each item: blue circle-check icon + label                  ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const LISTS = [
  {
    id: "mobile",
    title: "Mobile Apps",
    accent: BLUE,
    items: [
      "Mobile Banking",
      "Mobile Payment",
      "Digital Financial Solutions",
      "Digital Identity",
    ],
  },
  {
    id: "fintech",
    title: "Custom FinTech Solutions",
    accent: "#60a5fa",
    items: [
      "Lending Software",
      "Payment Software",
      "Enterprise Data Visualisation",
      "Data Hub Platform",
    ],
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
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
      backgroundImage: `radial-gradient(${BLUE}55 1.5px, transparent 1.5px)`,
      backgroundSize: "16px 16px",
      pointerEvents: "none",
      borderRadius: 8,
      ...style,
    }} />
  );
}

/* ── Single check item ── */
function CheckItem({ label, accent, index, groupIndex }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-30px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: groupIndex * 0.1 + index * 0.08, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center",
        gap: 16, padding: "14px 16px",
        borderRadius: 10, cursor: "default",
        position: "relative",
      }}
    >
      {/* Hover bg */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute", inset: 0, borderRadius: 10,
          background: `rgba(59,130,246,0.06)`,
          pointerEvents: "none",
        }}
      />

      {/* Circle check icon */}
      <motion.div
        animate={{
          background: hov ? `${accent}22` : `${accent}0e`,
          borderColor: hov ? `${accent}66` : `${accent}30`,
          scale: hov ? 1.1 : 1,
        }}
        transition={{ duration: 0.25 }}
        style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "1.5px solid",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, position: "relative", zIndex: 1,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
          stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 7l3 3 6-6"/>
        </svg>
      </motion.div>

      {/* Label */}
      <motion.span
        animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.72)" }}
        transition={{ duration: 0.22 }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(13px, 1.1vw, 15px)",
          lineHeight: 1.4,
          position: "relative", zIndex: 1,
        }}
      >
        {label}
      </motion.span>

      {/* Right arrow on hover */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : -6 }}
        transition={{ duration: 0.22 }}
        style={{
          marginLeft: "auto", color: accent,
          position: "relative", zIndex: 1, flexShrink: 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6h8M7 3l3 3-3 3"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Checklist column ── */
function CheckColumn({ list, groupIndex }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: groupIndex * 0.12, ease: E }}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 18,
        padding: "36px 28px",
        position: "relative",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inV ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: groupIndex * 0.12 + 0.2, ease: E }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 2.5,
          background: `linear-gradient(90deg, ${list.accent}, ${list.accent}44)`,
          transformOrigin: "left",
        }}
      />

      {/* Corner glow */}
      <div style={{
        position: "absolute", top: -40, right: -40,
        width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle, ${list.accent}14, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Title row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <div style={{
          width: 4, height: 22,
          background: `linear-gradient(180deg, ${list.accent}, ${list.accent}44)`,
          borderRadius: 2, flexShrink: 0,
        }} />
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(16px, 1.5vw, 20px)",
          textTransform: "uppercase",
          letterSpacing: "0.4px",
          color: "#ffffff",
          margin: 0, lineHeight: 1.2,
        }}>
          {list.title}
        </h3>
      </div>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${list.accent}40, rgba(255,255,255,0.06))`,
        marginBottom: 20,
      }} />

      {/* Check items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {list.items.map((item, i) => (
          <CheckItem
            key={item}
            label={item}
            accent={list.accent}
            index={i}
            groupIndex={groupIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function CustomFinancialSoftware() {
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
        .cfs-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        /* Main 3-col layout: photo | list1 | list2 */
        .cfs-layout {
          display: grid;
          grid-template-columns: 0.85fr 1fr 1fr;
          gap: 28px;
          align-items: center;
        }
        .cfs-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .cfs-layout {
            grid-template-columns: 1fr 1fr;
          }
          .cfs-photo-col {
            grid-column: 1 / -1;
            max-height: 320px;
          }
        }
        @media (max-width: 680px) {
          .cfs-layout {
            grid-template-columns: 1fr;
          }
          .cfs-photo-col {
            grid-column: 1;
            max-height: 260px;
          }
          .cfs-section { padding: 64px 20px 80px !important; }
          .cfs-h2 { font-size: 24px !important; }
          .cfs-header-row { flex-direction: column; align-items: flex-start; gap: 16px; }
          .cfs-subtitle { text-align: left !important; max-width: 100% !important; }
        }
      `}</style>

      <section ref={sectionRef} className="cfs-section">

        {/* ── Atmosphere ── */}
        <Orb style={{ width: 580, height: 580, background: "rgba(59,130,246,0.09)", top: -160, left: -100 }} />
        <Orb style={{ width: 460, height: 460, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Dot decorations — matches screenshot corners */}
        <DotGrid style={{ top: 80, left: 40,  width: 130, height: 130, opacity: 0.55 }} />
        <DotGrid style={{ bottom: 80, right: 40, width: 130, height: 130, opacity: 0.55 }} />

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
                FinTech Development
              </span>
            </motion.div>

            <div className="cfs-header-row">
              {/* Heading */}
              <motion.h2
                className="cfs-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 4vw, 54px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 720,
                }}
              >
                Custom{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 55%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Financial Software
                </span>
                {" "}Development
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="cfs-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 340, margin: 0,
                  textAlign: "right",
                }}
              >
                Purpose-built financial software engineered for
                security, scale, and seamless customer experience.
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

          {/* ── Main 3-column layout ── */}
          <div className="cfs-layout">

            {/* LEFT — Photo */}
            <motion.div
              className="cfs-photo-col"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: E }}
              style={{ position: "relative" }}
            >
              {/* Dot grid decoration — top-left of image */}
              <DotGrid style={{
                top: -16, left: -16,
                width: 100, height: 100, opacity: 0.7,
              }} />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px ${BLUE}22`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                  alt="Financial software professionals at work"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Dark bottom gradient */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(5,11,24,0.65), transparent)",
                  pointerEvents: "none",
                }} />
                {/* Blue top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE})`,
                }} />

                {/* Stats overlay badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, ease: E }}
                  style={{
                    position: "absolute", bottom: 16, left: 16, right: 16,
                    background: "rgba(5,11,24,0.85)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid ${BLUE}33`,
                    borderRadius: 12,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  {[
                    { value: "500+", label: "Projects" },
                    { value: "15+",  label: "Years" },
                    { value: "98%",  label: "Retention" },
                  ].map((s, i) => (
                    <div key={s.label} style={{
                      textAlign: "center", flex: 1,
                      borderRight: i < 2 ? `1px solid rgba(255,255,255,0.08)` : "none",
                      paddingRight: i < 2 ? 12 : 0,
                    }}>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900, fontSize: 20,
                        color: "#fff", lineHeight: 1,
                        letterSpacing: "-0.5px",
                      }}>{s.value}</div>
                      <div style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600, fontSize: 9,
                        letterSpacing: 1.8, textTransform: "uppercase",
                        color: BLUE, marginTop: 3,
                      }}>{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* MIDDLE & RIGHT — Checklist columns */}
            {LISTS.map((list, i) => (
              <CheckColumn key={list.id} list={list} groupIndex={i} />
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
                Build your custom financial platform today
              </div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13.5,
                color: "rgba(255,255,255,0.35)",
              }}>
                Talk to our FinTech specialists and get a free project assessment.
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {/* Primary */}
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

              {/* Secondary */}
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