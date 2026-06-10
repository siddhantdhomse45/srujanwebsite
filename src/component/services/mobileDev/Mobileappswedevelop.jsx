import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  MOBILE APPS WE DEVELOP — Premium Edition                   ║
 ║  Design: NO CARDS — alternating 2-col numbered row list     ║
 ║  Each row: large number + title + body + arrow link         ║
 ║  Separated by full-width animated divider lines             ║
 ║  Color: #3b82f6 blue system on deep navy                    ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const APPS = [
  {
    id: "banking",
    number: "01",
    title: "Mobile Banking Apps",
    body: "Give your customers the power of effortless financial management with mobile banking apps. Provide secure transactions, easy account management, and real-time updates, all in one place.",
    tag: "FinTech",
  },
  {
    id: "ewallet",
    number: "02",
    title: "Ewallet / Crypto Wallet Apps",
    body: "Simplify digital transactions for your customers with ewallet and crypto wallet apps. Offer secure storage and easy access to their funds and cryptocurrencies.",
    tag: "Blockchain",
  },
  {
    id: "stock",
    number: "03",
    title: "Stock Exchange Apps",
    body: "Keep your customers ahead of the market with stock exchange apps. Provide real-time stock tracking, seamless trading capabilities, and up-to-the-minute financial news.",
    tag: "Trading",
  },
  {
    id: "telemedicine",
    number: "04",
    title: "Telemedicine Apps",
    body: "Bring healthcare to your customers' fingertips with telemedicine apps. Offer virtual consultations, easy appointment scheduling, and access to electronic medical records from anywhere.",
    tag: "Healthcare",
  },
  {
    id: "hotel",
    number: "05",
    title: "Hotel Booking Apps",
    body: "Transform your customers' travel experiences with hotel booking apps. Simplify browsing, booking, and managing hotel reservations worldwide.",
    tag: "Hospitality",
  },
  {
    id: "social",
    number: "06",
    title: "Social Media Apps",
    body: "Build vibrant communities with social media apps. Enable dynamic content sharing, seamless messaging, and robust networking features for your customers.",
    tag: "Community",
  },
  {
    id: "fitness",
    number: "07",
    title: "Fitness Apps",
    body: "Inspire your customers to reach their health goals with fitness apps. Provide personalized workout plans, activity tracking, and health insights to keep them motivated and on track.",
    tag: "Wellness",
  },
  {
    id: "custom",
    number: "08",
    title: "Custom App",
    body: "Turn your concept into reality with our mobile app solutions tailored to your industry, market trends, and unique business needs. We build custom apps of any complexity that you envision for your business.",
    tag: "Bespoke",
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

/* ── Single row item (left or right cell) ── */
function AppItem({ app, index, side }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });
  const [hov, setHov] = useState(false);

  const isLeft = side === "left";
  const delay  = (Math.floor(index / 2)) * 0.1 + (isLeft ? 0 : 0.07);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "44px 48px",
        position: "relative",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Active hover bg fill */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(59,130,246,0.04)",
          pointerEvents: "none",
        }}
      />

      {/* Left edge accent line */}
      <motion.div
        animate={{ scaleY: hov ? 1 : 0, opacity: hov ? 1 : 0 }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: E }}
        style={{
          position: "absolute",
          left: 0, top: "15%", bottom: "15%",
          width: 2.5,
          background: BLUE,
          borderRadius: "0 2px 2px 0",
          transformOrigin: "top",
        }}
      />

      {/* Number + tag row */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}>
        <motion.span
          animate={{ color: hov ? BLUE : "rgba(255,255,255,0.14)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 52,
            letterSpacing: "-2px", lineHeight: 1,
            userSelect: "none",
          }}
        >
          {app.number}
        </motion.span>

        <motion.span
          animate={{
            color: hov ? BLUE : "rgba(255,255,255,0.25)",
            background: hov ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.04)",
            borderColor: hov ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.08)",
          }}
          transition={{ duration: 0.28 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: 10,
            letterSpacing: 2.5, textTransform: "uppercase",
            padding: "5px 12px", borderRadius: 6,
            border: "1px solid",
          }}
        >
          {app.tag}
        </motion.span>
      </div>

      {/* Title */}
      <motion.h3
        animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.86)" }}
        transition={{ duration: 0.22 }}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(18px, 1.8vw, 24px)",
          textTransform: "uppercase",
          letterSpacing: "0.3px",
          lineHeight: 1.15,
          margin: "0 0 16px",
        }}
      >
        {app.title}
      </motion.h3>

      {/* Animated thin line */}
      <motion.div
        animate={{
          background: hov
            ? `linear-gradient(90deg, ${BLUE}, rgba(255,255,255,0.06))`
            : "rgba(255,255,255,0.07)",
          width: hov ? "60%" : "100%",
        }}
        transition={{ duration: 0.45, ease: E }}
        style={{ height: 1, marginBottom: 16 }}
      />

      {/* Body */}
      <p style={{
        fontFamily: "'Barlow', sans-serif",
        fontSize: 14.5, lineHeight: 1.85,
        color: "rgba(255,255,255,0.46)",
        margin: "0 0 24px",
      }}>
        {app.body}
      </p>

      {/* Learn more */}
      <motion.div
        animate={{
          x: hov ? 5 : 0,
          color: hov ? BLUE : "rgba(255,255,255,0.22)",
        }}
        transition={{ duration: 0.25 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700, fontSize: 10,
          letterSpacing: 2.2, textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <div style={{ width: 20, height: 1.5, background: "currentColor", borderRadius: 2 }} />
        Explore Service
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"
          stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6h8M7 3l3 3-3 3"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Full-width animated divider row ── */
function DividerRow({ index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inV ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.06, ease: E }}
      style={{
        gridColumn: "1 / -1",
        height: 1,
        background: "rgba(255,255,255,0.07)",
        transformOrigin: "left",
      }}
    />
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function MobileAppsWeDevelop() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  /* Pair apps into rows of 2 */
  const rows = [];
  for (let i = 0; i < APPS.length; i += 2) {
    rows.push([APPS[i], APPS[i + 1]]);
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .mawd-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 0 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .mawd-inner { max-width: 1280px; margin: 0 auto; padding: 0 72px; }
        .mawd-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
        }
        .mawd-vline {
          background: rgba(255,255,255,0.07);
          width: 1px;
        }
        .mawd-header-row {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap; gap: 28px;
        }

        @media (max-width: 900px) {
          .mawd-grid { grid-template-columns: 1fr; }
          .mawd-vline { display: none; }
          .mawd-inner { padding: 0 32px; }
          .mawd-section { padding: 80px 0 96px; }
          .mawd-header-row { flex-direction: column; align-items: flex-start; gap: 16px; }
          .mawd-subtitle { text-align: left !important; max-width: 100% !important; }
        }
        @media (max-width: 520px) {
          .mawd-inner { padding: 0 20px; }
          .mawd-section { padding: 60px 0 80px; }
          .mawd-h2 { font-size: 26px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="mawd-section">
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.08)", top: -160, left: -120 }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 320, height: 320, background: "rgba(59,130,246,0.05)", top: "45%", left: "42%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        <div className="mawd-inner" style={{ position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: 80 }}>
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
                Development Portfolio
              </span>
            </motion.div>

            <div className="mawd-header-row">
              <motion.h2
                className="mawd-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(26px, 4vw, 54px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 660,
                }}
              >
                Mobile Apps{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 55%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  We Develop
                </span>
              </motion.h2>

              <motion.p
                className="mawd-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 380, margin: 0,
                  textAlign: "right",
                }}
              >
                Eight specialised mobile app categories,
                engineered to meet the demands of modern industries.
              </motion.p>
            </div>

            {/* Gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE} 40%, rgba(255,255,255,0.05) 100%)`,
                transformOrigin: "left", borderRadius: 2,
              }}
            />
          </div>

          {/* ── Main grid: rows of 2 with vertical center divider ── */}
          <div>
            {/* Top border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: E }}
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                transformOrigin: "left", marginBottom: 0,
              }}
            />

            {rows.map(([left, right], rowIdx) => (
              <div key={rowIdx}>
                {/* Row with 3-col grid: left | vline | right */}
                <div className="mawd-grid">
                  <AppItem app={left} index={rowIdx * 2} side="left" />

                  {/* Vertical divider */}
                  <div className="mawd-vline" style={{ alignSelf: "stretch" }} />

                  <AppItem app={right} index={rowIdx * 2 + 1} side="right" />
                </div>

                {/* Horizontal divider between rows */}
                {rowIdx < rows.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.9, delay: 0.05, ease: E }}
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.07)",
                      transformOrigin: "left",
                    }}
                  />
                )}
              </div>
            ))}

            {/* Bottom border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: E }}
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                transformOrigin: "left",
              }}
            />
          </div>

          

        </div>
      </section>
    </>
  );
}
