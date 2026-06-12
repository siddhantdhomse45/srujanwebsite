import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  FINANCIAL SOFTWARE DEVELOPMENT — Premium Hero Banner       ║
 ║  Matches screenshot: full-bleed photo, dark overlay,        ║
 ║  bold ALL-CAPS heading, subtitle, single CTA button         ║
 ║  Color upgrade: #3b82f6 blue replaces screenshot green      ║
 ║  FULLY RESPONSIVE (mobile, tablet, desktop)                 ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ── Topo wave lines — brand asset (hidden on mobile) ── */
const TopoLines = () => (
  <svg
    style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", opacity: 0.06,
      display: "none",
    }}
    viewBox="0 0 1400 600"
    preserveAspectRatio="xMidYMid slice"
  >
    {[
      "M0,100 Q200,60 420,110 Q640,160 840,90 Q1040,20 1240,80 Q1360,120 1400,108",
      "M0,175 Q240,130 470,183 Q700,235 900,157 Q1100,79 1310,143 Q1380,173 1400,168",
      "M0,255 Q225,205 455,260 Q685,318 890,235 Q1095,152 1300,220 Q1374,250 1400,246",
      "M0,340 Q248,285 478,343 Q708,400 912,313 Q1116,225 1318,298 Q1382,328 1400,322",
      "M0,425 Q262,368 496,428 Q730,490 938,396 Q1146,303 1350,380 Q1390,410 1400,405",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={BLUE} strokeWidth="0.9"/>
    ))}
  </svg>
);

/* ── Ambient orb (scaled for mobile) ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(88px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT (FULLY RESPONSIVE)
══════════════════════════════════════════ */
export default function FinancialSoftwareHero() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

  /* Parallax on bg photo */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .fsh-section {
          position: relative;
          width: 100%;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .fsh-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 110px 80px;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .fsh-content { max-width: 660px; }

        /* Primary blue button */
        .fsh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #3b82f6;
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 16px 40px;
          border-radius: 3px;
          border: 2px solid #3b82f6;
          white-space: nowrap;
          cursor: pointer;
          transition: box-shadow 0.25s, transform 0.2s;
        }
        .fsh-btn-primary:hover {
          box-shadow: 0 0 38px rgba(59,130,246,0.70);
          transform: scale(1.04);
        }
        .fsh-btn-primary:active { transform: scale(0.97); }

        /* Outline button */
        .fsh-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 3px;
          border: 2px solid #3b82f6;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .fsh-btn-outline:hover {
          background: rgba(59,130,246,0.15);
          box-shadow: 0 0 28px rgba(59,130,246,0.40);
          transform: scale(1.04);
        }
        .fsh-btn-outline:active { transform: scale(0.97); }

        /* Trust stats strip */
        .fsh-stats {
          display: flex;
          gap: 0;
          margin-top: 64px;
          flex-wrap: wrap;
        }
        .fsh-stat-item {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.09);
        }
        .fsh-stat-item:last-child {
          border-right: none;
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */
        @media (max-width: 900px) {
          .fsh-inner  { padding: 80px 36px !important; }
          .fsh-h1     { font-size: clamp(28px, 6.5vw, 48px) !important; }
          .fsh-content { max-width: 100% !important; text-align: left; }
          .fsh-stat-item {
            padding-right: 20px;
            margin-right: 20px;
          }
        }

        @media (max-width: 640px) {
          .fsh-inner  { padding: 64px 24px !important; }
          .fsh-btns   { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
          .fsh-btns a { justify-content: center; width: 100%; white-space: normal; text-align: center; padding: 14px 24px; }
          .fsh-stats  { justify-content: space-between; gap: 16px; margin-top: 48px; }
          .fsh-stat-item {
            padding-right: 0;
            margin-right: 0;
            border-right: none;
            flex: 1;
            text-align: center;
          }
          .fsh-stat-item .stat-value { font-size: 24px !important; }
          .fsh-stat-item .stat-label { font-size: 9px !important; letter-spacing: 1.2px !important; }
        }

        @media (max-width: 480px) {
          .fsh-inner  { padding: 56px 20px !important; }
          .fsh-h1     { font-size: 28px !important; line-height: 1.1 !important; }
          .fsh-subtitle { font-size: 14px !important; margin-bottom: 36px !important; }
          .fsh-rule   { margin-bottom: 20px !important; }
          .fsh-stats  { gap: 12px; }
          .fsh-stat-item .stat-value { font-size: 20px !important; }
          .fsh-stat-item .stat-label { font-size: 8px !important; }
        }
      `}</style>

      <section ref={ref} className="fsh-section">

        {/* ── Parallax background photo ── */}
        <motion.div
          style={{
            position: "absolute", inset: "-16% 0",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            y: bgY,
          }}
        />

        {/* ── Multi-stop dark overlay — heavy left, lighter right ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(106deg, rgba(3,7,22,0.97) 0%, rgba(4,9,26,0.94) 30%, rgba(5,11,28,0.82) 55%, rgba(3,8,22,0.55) 75%, rgba(2,6,16,0.28) 100%)",
        }} />

        {/* ── Deep blue tint wash ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 5% 55%, rgba(8,22,72,0.58) 0%, transparent 58%)",
          pointerEvents: "none",
        }} />

        {/* ── Top-right blue glow ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 82% 20%, rgba(59,130,246,0.14) 0%, transparent 48%)",
          pointerEvents: "none",
        }} />

        {/* ── Ambient orbs (responsive size) ── */}
        <Orb style={{ width: "min(580px, 80vw)", height: "min(580px, 80vw)", background: "rgba(59,130,246,0.10)", top: -160, left: -140 }} />
        <Orb style={{ width: "min(420px, 60vw)", height: "min(420px, 60vw)", background: "rgba(96,165,250,0.07)", bottom: -80, right: "22%" }} />

        {/* ── Topo wave lines (hidden on mobile via CSS inside SVG) ── */}
        <TopoLines />

        {/* ── Dot grid ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* ── Blue left accent bar ── */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inV ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: E }}
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: 4,
            background: `linear-gradient(180deg, ${BLUE} 0%, ${BLUE_LITE} 50%, ${BLUE} 100%)`,
            transformOrigin: "top", zIndex: 8,
          }}
        />

        {/* ── Content ── */}
        <motion.div style={{ opacity: fadeOut, width: "100%" }}>
          <div className="fsh-inner">
            <div className="fsh-content">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={inV ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2, ease: E }}
                style={{
                  display: "flex", alignItems: "center",
                  gap: 12, marginBottom: 26,
                }}
              >
                <div style={{ width: 40, height: 2.5, background: BLUE, borderRadius: 2 }} />
                <span style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700, fontSize: "clamp(10px, 2.5vw, 11px)",
                  letterSpacing: 3.5, textTransform: "uppercase",
                  color: BLUE,
                }}>
                  FinTech Solutions
                </span>
              </motion.div>

              {/* Heading */}
              <div style={{ overflow: "hidden", marginBottom: 24 }}>
                <motion.h1
                  className="fsh-h1"
                  initial={{ y: 80, opacity: 0 }}
                  animate={inV ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.32, ease: E }}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(30px, 5vw, 66px)",
                    lineHeight: 1.04,
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Financial Software<br />
                  <span style={{
                    background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 50%, #ffffff 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Development
                  </span>
                </motion.h1>
              </div>

              {/* Animated blue rule */}
              <motion.div
                className="fsh-rule"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inV ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.5, ease: E }}
                style={{
                  height: 1.5, width: "100%",
                  background: `linear-gradient(90deg, ${BLUE}, rgba(255,255,255,0.06))`,
                  transformOrigin: "left", borderRadius: 2, marginBottom: 28,
                }}
              />

              {/* Subtitle */}
              <motion.p
                className="fsh-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={inV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.46, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.1vw, 17px)",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.62)",
                  margin: "0 0 48px",
                  maxWidth: 540,
                }}
              >
                Accelerate innovation using the power of Srujan Infotech software
                development for banking and financial services. Advance your
                efficiency, customer experience, and business performance with
                our future-proof solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="fsh-btns"
                initial={{ opacity: 0, y: 20 }}
                animate={inV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.62, ease: E }}
                style={{
                  display: "flex", gap: 16,
                  flexWrap: "wrap", alignItems: "center",
                }}
              >
                <a href="#" className="fsh-btn-primary">
                  Talk to Us
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>
                <a href="#" className="fsh-btn-outline">
                  View Portfolio
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>
              </motion.div>

              {/* Trust strip stats — responsive */}
              <motion.div
                className="fsh-stats"
                initial={{ opacity: 0 }}
                animate={inV ? { opacity: 1 } : {}}
                transition={{ delay: 0.95, duration: 0.8 }}
              >
                {[
                  { value: "500+",  label: "FinTech Projects"    },
                  { value: "15+",   label: "Years in Finance"    },
                  { value: "21",    label: "Countries Served"    },
                  { value: "98%",   label: "Client Retention"    },
                ].map((s, i) => (
                  <div key={s.label} className="fsh-stat-item">
                    <div className="stat-value" style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900, fontSize: "clamp(20px, 4vw, 28px)",
                      color: "#ffffff", lineHeight: 1, letterSpacing: "-0.5px",
                    }}>
                      {s.value}
                    </div>
                    <div className="stat-label" style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600, fontSize: "clamp(8px, 2vw, 10px)",
                      letterSpacing: 1.8, textTransform: "uppercase",
                      color: "rgba(255,255,255,0.30)", marginTop: 5,
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          style={{
            position: "absolute", bottom: "clamp(20px, 5vh, 36px)",
            left: "50%", transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div style={{
            width: 1.5, height: 52,
            background: `linear-gradient(to bottom, ${BLUE}bb, transparent)`,
            margin: "0 auto",
          }} />
        </motion.div>

        {/* ── Bottom vignette ── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
          background: "linear-gradient(to bottom, transparent, rgba(3,7,22,0.65))",
          pointerEvents: "none",
        }} />

      </section>
    </>
  );
}