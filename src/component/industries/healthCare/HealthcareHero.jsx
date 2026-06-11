import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  HEALTHCARE IT SOLUTIONS AND SERVICES                       ║
 ║  TRUSTED BY FORTUNE 500 BRANDS — Premium Hero              ║
 ║  Matches screenshot: full-bleed photo, dark overlay,        ║
 ║  bold 2-line ALL-CAPS heading, subtitle, dual CTAs          ║
 ║  Color: #3b82f6 BLUE replaces screenshot red               ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ── Topo wave lines — brand asset ── */
const TopoLines = () => (
  <svg
    style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", opacity: 0.055,
    }}
    viewBox="0 0 1400 600"
    preserveAspectRatio="xMidYMid slice"
  >
    {[
      "M0,90  Q220,50  440,100 Q660,150 860,80  Q1060,10  1260,72  Q1370,105 1400,95",
      "M0,170 Q245,125 475,178 Q705,232 908,157 Q1111,82  1318,147 Q1382,178 1400,172",
      "M0,255 Q228,205 458,260 Q688,318 894,238 Q1100,158 1308,226 Q1376,256 1400,250",
      "M0,345 Q250,290 482,347 Q714,405 922,320 Q1130,235 1338,306 Q1382,336 1400,330",
      "M0,438 Q265,378 500,438 Q735,498 946,408 Q1157,318 1362,393 Q1392,423 1400,417",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={BLUE} strokeWidth="0.9"/>
    ))}
  </svg>
);

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(88px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function HealthcareHero() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

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
        .hch-section {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .hch-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 110px 80px;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .hch-content { max-width: 660px; }

        /* PRIMARY — solid blue fill + blue border */
        .hch-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: ${BLUE};
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 15px 36px;
          border-radius: 3px;
          border: 2px solid ${BLUE};
          white-space: nowrap;
          cursor: pointer;
          transition: box-shadow 0.25s, transform 0.2s;
        }
        .hch-btn-primary:hover {
          box-shadow: 0 0 36px rgba(59,130,246,0.68);
          transform: scale(1.04);
        }
        .hch-btn-primary:active { transform: scale(0.97); }

        /* SECONDARY — transparent + blue border */
        .hch-btn-secondary {
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
          padding: 15px 32px;
          border-radius: 3px;
          border: 2px solid ${BLUE};
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .hch-btn-secondary:hover {
          background: rgba(59,130,246,0.15);
          box-shadow: 0 0 28px rgba(59,130,246,0.4);
          transform: scale(1.04);
        }
        .hch-btn-secondary:active { transform: scale(0.97); }

        /* Responsive */
        @media (max-width: 900px) {
          .hch-inner   { padding: 80px 36px !important; }
          .hch-h1      { font-size: clamp(28px, 6vw, 46px) !important; }
          .hch-content { max-width: 100% !important; }
        }
        @media (max-width: 520px) {
          .hch-inner  { padding: 64px 20px !important; }
          .hch-btns   { flex-direction: column !important; align-items: stretch !important; }
          .hch-btns a { justify-content: center; }
          .hch-trust  { display: none !important; }
        }
      `}</style>

      <section ref={ref} className="hch-section">

        {/* ── Parallax background photo — healthcare / nurse ── */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-16% 0",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
            y: bgY,
          }}
        />

        {/* ── Multi-stop dark overlay — heavy left, opens right ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(108deg, rgba(3,7,22,0.97) 0%, rgba(4,9,26,0.94) 30%, rgba(5,11,28,0.82) 54%, rgba(3,8,22,0.55) 74%, rgba(2,6,16,0.26) 100%)",
        }} />

        {/* ── Deep blue tint wash on left ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 4% 52%, rgba(8,22,72,0.55) 0%, transparent 58%)",
          pointerEvents: "none",
        }} />

        {/* ── Blue glow accent top-right ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 80% 18%, rgba(59,130,246,0.13) 0%, transparent 48%)",
          pointerEvents: "none",
        }} />

        {/* ── Ambient orbs ── */}
        <Orb style={{ width: 580, height: 580, background: "rgba(59,130,246,0.10)", top: -160, left: -140 }} />
        <Orb style={{ width: 420, height: 420, background: "rgba(96,165,250,0.07)", bottom: -80, right: "22%" }} />

        {/* ── Topo wave lines ── */}
        <TopoLines />

        {/* ── Dot grid ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(59,130,246,0.07) 1px, transparent 1px)",
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
          <div className="hch-inner">
            <div className="hch-content">

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
                  fontWeight: 700, fontSize: 11,
                  letterSpacing: 3.5, textTransform: "uppercase",
                  color: BLUE,
                }}>
                  Healthcare IT
                </span>
              </motion.div>

              {/* ── Heading — exact 2-line copy from screenshot ── */}
              <div style={{ overflow: "hidden", marginBottom: 24 }}>
                <motion.h1
                  className="hch-h1"
                  initial={{ y: 80, opacity: 0 }}
                  animate={inV ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.32, ease: E }}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(30px, 5vw, 64px)",
                    lineHeight: 1.04,
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Healthcare IT Solutions<br />
                  and Services Trusted<br />
                  <span style={{
                    background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 50%, #ffffff 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    by Fortune 500 Brands
                  </span>
                </motion.h1>
              </div>

              {/* Animated blue rule */}
              <motion.div
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
                We deliver scalable, efficient, and secure healthcare IT solutions
                that evolve with your business. Let's create innovative healthcare
                solutions that your patients will love and drive your company forward.
              </motion.p>

              {/* ── CTA Buttons — both matched to #3b82f6 ── */}
              <motion.div
                className="hch-btns"
                initial={{ opacity: 0, y: 20 }}
                animate={inV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.62, ease: E }}
                style={{
                  display: "flex", gap: 16,
                  flexWrap: "wrap", alignItems: "center",
                }}
              >
                {/* PRIMARY — solid blue */}
                <a href="#" className="hch-btn-primary">
                  Talk to Us
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>

                {/* SECONDARY — blue outline */}
                <a href="#" className="hch-btn-secondary">
                  View Portfolio
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                className="hch-trust"
                initial={{ opacity: 0 }}
                animate={inV ? { opacity: 1 } : {}}
                transition={{ delay: 0.95, duration: 0.8 }}
                style={{
                  display: "flex", gap: 0,
                  marginTop: 64, flexWrap: "wrap",
                }}
              >
                {[
                  { value: "500+", label: "Healthcare Projects" },
                  { value: "21",   label: "Countries Served"   },
                  { value: "15+",  label: "Years in HealthIT"  },
                  { value: "98%",  label: "Client Retention"   },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    paddingRight: 28, marginRight: 28,
                    borderRight: i < 3
                      ? "1px solid rgba(255,255,255,0.09)"
                      : "none",
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900, fontSize: 28,
                      color: "#ffffff", lineHeight: 1,
                      letterSpacing: "-0.5px",
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600, fontSize: 10,
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
            position: "absolute", bottom: 36,
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
          position: "absolute", bottom: 0,
          left: 0, right: 0, height: 120,
          background: "linear-gradient(to bottom, transparent, rgba(3,7,22,0.65))",
          pointerEvents: "none",
        }} />

      </section>
    </>
  );
}