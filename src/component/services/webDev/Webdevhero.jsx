import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  WEB DEVELOPMENT SERVICES — Premium Hero                    ║
 ║  Color scheme: #3b82f6 BLUE throughout                      ║
 ║  — Both buttons matched to same blue accent                 ║
 ║  — Primary: solid #3b82f6 fill                              ║
 ║  — Secondary: transparent + #3b82f6 border                  ║
 ║  — All eyebrows, bars, glows, lines → #3b82f6              ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE       = "#3b82f6";
const BLUE_LIGHT = "#60a5fa";
const BLUE_DIM   = "rgba(59,130,246,0.18)";
const E          = [0.22, 1, 0.36, 1];

/* ── Floating code lines ── */
const CODE_LINES = [
  "const deploy = async (app) => {",
  "  await build(app, { target: 'production' });",
  "  return ship(app).to('fortune500');",
  "};",
  "",
  "function scaleTo(clients) {",
  "  return clients.map(c => optimize(c));",
  "}",
  "",
  "// 500+ enterprise projects delivered",
  "const results = deliver({ quality: 'top1%' });",
  "",
  "export default WebDevelopment;",
];

function CodeRain() {
  return (
    <div style={{
      position: "absolute", right: "4%", top: "50%",
      transform: "translateY(-50%)", width: "44%",
      pointerEvents: "none", zIndex: 2, opacity: 0.16,
    }}>
      {CODE_LINES.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: line ? 1 : 0, x: 0 }}
          transition={{ delay: 0.6 + i * 0.11, duration: 0.65, ease: E }}
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: "clamp(11px, 0.95vw, 13px)",
            lineHeight: 2,
            color: i % 4 === 0 ? BLUE_LIGHT
                 : i % 4 === 1 ? "#93c5fd"
                 : i % 4 === 2 ? "#bfdbfe"
                 : "rgba(255,255,255,0.45)",
            whiteSpace: "nowrap",
            letterSpacing: 0.3,
          }}
        >
          {line || "\u00A0"}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -26, 0], x: [0, 12, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Topo wave lines (brand asset) ── */
const TopoOverlay = () => (
  <svg style={{
    position: "absolute", inset: 0,
    width: "100%", height: "100%",
    pointerEvents: "none", opacity: 0.055,
  }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
    {[
      "M0,120 Q200,75 420,125 Q640,175 840,105 Q1040,35 1240,95 Q1360,130 1400,118",
      "M0,205 Q240,155 470,208 Q700,260 900,182 Q1100,104 1310,168 Q1380,200 1400,198",
      "M0,295 Q225,242 455,298 Q685,355 890,272 Q1095,190 1300,255 Q1374,285 1400,282",
      "M0,390 Q248,335 478,393 Q708,451 912,363 Q1116,275 1318,344 Q1382,374 1400,370",
      "M0,488 Q262,430 496,490 Q730,552 938,458 Q1146,365 1350,438 Q1390,468 1400,464",
      "M0,590 Q278,528 514,592 Q750,656 960,556 Q1170,456 1372,535 Q1394,564 1400,560",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={BLUE} strokeWidth="0.9"/>
    ))}
  </svg>
);

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function Webdevhero() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ─── Section shell ─── */
        .wdb-section {
          position: relative;
          width: 100%;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }

        /* ─── Inner container ─── */
        .wdb-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 110px 80px;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        /* ─── PRIMARY button — solid #3b82f6 ─── */
        .wdb-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #3b82f6;
          color: #ffffff;
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
          transition: box-shadow 0.25s, transform 0.2s;
        }
        .wdb-btn-primary:hover {
          box-shadow: 0 0 38px rgba(59,130,246,0.70);
          transform: scale(1.04);
        }
        .wdb-btn-primary:active { transform: scale(0.97); }

        /* ─── SECONDARY button — transparent + #3b82f6 border ─── */
        .wdb-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #ffffff;
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
        .wdb-btn-secondary:hover {
          background: rgba(59,130,246,0.15);
          box-shadow: 0 0 28px rgba(59,130,246,0.40);
          transform: scale(1.04);
        }
        .wdb-btn-secondary:active { transform: scale(0.97); }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .wdb-code-rain { display: none !important; }
        }
        @media (max-width: 860px) {
          .wdb-inner { padding: 80px 36px !important; }
          .wdb-h1 { font-size: clamp(28px, 6.5vw, 46px) !important; }
          .wdb-btns { flex-wrap: wrap; }
        }
        @media (max-width: 520px) {
          .wdb-inner { padding: 64px 20px !important; }
          .wdb-btns { flex-direction: column !important; align-items: stretch !important; }
          .wdb-btns a { justify-content: center; }
          .wdb-trust { display: none !important; }
        }
      `}</style>

      <section ref={ref} className="wdb-section">

        {/* ── Parallax BG photo ── */}
        <motion.div style={{
          position: "absolute", inset: "-16% 0",
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1800&q=85')",
          backgroundSize: "cover", backgroundPosition: "center 40%", y: bgY,
        }} />

        {/* ── Primary dark overlay ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(108deg, rgba(3,7,22,0.97) 0%, rgba(4,9,28,0.94) 32%, rgba(5,11,30,0.80) 58%, rgba(3,8,24,0.50) 78%, rgba(2,6,18,0.22) 100%)",
        }} />

        {/* ── Blue tint — reinforces the #3b82f6 palette ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 5% 55%, rgba(10,28,80,0.55) 0%, transparent 58%)",
          pointerEvents: "none",
        }} />

        {/* ── Blue glow top-right ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 85% 20%, rgba(59,130,246,0.12) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        {/* ── Ambient orbs ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.10)", top: -160, left: -140 }} />
        <Orb style={{ width: 440, height: 440, background: "rgba(96,165,250,0.07)", bottom: -80, right: "25%" }} />

        {/* ── Topo wave lines in blue ── */}
        <TopoOverlay />

        {/* ── Dot grid ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* ── Floating code ── */}
        <div className="wdb-code-rain" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <CodeRain />
        </div>

        {/* ── Blue left accent bar ── */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inV ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: E }}
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: 4,
            background: `linear-gradient(180deg, ${BLUE} 0%, ${BLUE_LIGHT} 50%, ${BLUE} 100%)`,
            transformOrigin: "top", zIndex: 8,
          }}
        />

        {/* ── Content ── */}
        <motion.div style={{ opacity: fadeOut, width: "100%" }}>
          <div className="wdb-inner">
            <div style={{ maxWidth: 640 }}>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={inV ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2, ease: E }}
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}
              >
                <div style={{ width: 40, height: 2.5, background: BLUE, borderRadius: 2 }} />
                <span style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700, fontSize: 11,
                  letterSpacing: 3.5, textTransform: "uppercase",
                  color: BLUE,
                }}>
                  Web Development
                </span>
              </motion.div>

              {/* Heading */}
              <div style={{ overflow: "hidden", marginBottom: 24 }}>
                <motion.h1
                  className="wdb-h1"
                  initial={{ y: 80, opacity: 0 }}
                  animate={inV ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.32, ease: E }}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(32px, 5vw, 66px)",
                    lineHeight: 1.04,
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Web Development<br />
                  Services Trusted<br />
                  <span style={{
                    background: `linear-gradient(90deg, ${BLUE_LIGHT} 0%, ${BLUE} 45%, #ffffff 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    by Fortune 500 Brands
                  </span>
                </motion.h1>
              </div>

              {/* Blue animated rule */}
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
                  fontSize: "clamp(14px, 1.1vw, 16.5px)",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.60)",
                  margin: "0 0 48px",
                  maxWidth: 520,
                }}
              >
                We deliver scalable, high-performance web development solutions
                that evolve with your business. Let's create a web solution that
                your customers will love and drive your company forward.
              </motion.p>

              {/* ── CTA Buttons — both #3b82f6 ── */}
              <motion.div
                className="wdb-btns"
                initial={{ opacity: 0, y: 20 }}
                animate={inV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.62, ease: E }}
                style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
              >
                {/* PRIMARY — solid blue */}
                <a href="#" className="wdb-btn-primary">
                  Talk to Us
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>

                {/* SECONDARY — blue outline, same colour */}
                <a href="#" className="wdb-btn-secondary">
                  View Portfolio
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>
              </motion.div>

              {/* Trust stats */}
             
            </div>
          </div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          style={{
            position: "absolute", bottom: 36,
            left: "50%", transform: "translateX(-50%)", zIndex: 10,
          }}
        >
          <div style={{
            width: 1.5, height: 52,
            background: `linear-gradient(to bottom, ${BLUE}bb, transparent)`,
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