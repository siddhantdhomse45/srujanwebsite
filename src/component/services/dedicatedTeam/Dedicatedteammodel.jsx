import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  PROVEN DEDICATED DEVELOPMENT TEAM MODEL                    ║
 ║  Layout: Left (CLIENT) ←→ Centre (numbered) ←→ Right (IS)  ║
 ║  3 rows, each row has icon+title on both sides              ║
 ║  Centre: animated numbered circle + ←→ arrows + label      ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const BLUE_DIM  = "rgba(59,130,246,0.18)";
const E         = [0.22, 1, 0.36, 1];

/* ── Row data ── */
const ROWS = [
  {
    number: "1",
    label: "Weekly / Monthly Report",
    client: {
      title: "Director Of Software Development",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Person */}
          <circle cx="40" cy="26" r="8"/>
          <path d="M24 58c0-8.8 7.2-16 16-16s16 7.2 16 16"/>
          {/* Arrows around — expand/directions */}
          <path d="M14 30l-6-6 6-6M14 24H8"/>
          <path d="M66 30l6-6-6-6M66 24h6"/>
          <path d="M34 10l6-6 6 6M40 4v6"/>
          <path d="M34 58l6 6 6-6M40 64v-6"/>
        </svg>
      ),
    },
    is: {
      title: "Steering Committee (Business Lead, Delivery Lead)",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Three people */}
          <circle cx="40" cy="24" r="7"/>
          <path d="M26 52c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
          <circle cx="20" cy="28" r="5"/>
          <path d="M10 52c0-5.5 4.5-10 10-10"/>
          <circle cx="60" cy="28" r="5"/>
          <path d="M70 52c0-5.5-4.5-10-10-10"/>
          {/* Connect lines */}
          <line x1="28" y1="30" x2="32" y2="32"/>
          <line x1="52" y1="30" x2="48" y2="32"/>
        </svg>
      ),
    },
  },
  {
    number: "2",
    label: "Weekly / Monthly Report",
    client: {
      title: "Project Managers",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Person at board */}
          <circle cx="32" cy="22" r="7"/>
          <path d="M20 52c0-7 5.4-13 12-13"/>
          {/* Presentation board */}
          <rect x="44" y="18" width="22" height="18" rx="2"/>
          <path d="M49 24h12M49 29h8"/>
          <line x1="55" y1="36" x2="55" y2="42"/>
          {/* Arrow up on chart */}
          <path d="M47 32l4-6 4 3 4-5"/>
        </svg>
      ),
    },
    is: {
      title: "Senior Program Manager",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Person with speech bubble */}
          <circle cx="40" cy="24" r="8"/>
          <path d="M26 54c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
          {/* Chat bubble */}
          <rect x="46" y="12" width="20" height="14" rx="3"/>
          <path d="M50 19h12M50 23h8"/>
          <path d="M50 26l-3 4"/>
          {/* Dots in bubble */}
          <circle cx="51" cy="19" r="1" fill="currentColor" stroke="none"/>
          <circle cx="56" cy="19" r="1" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
  },
  {
    number: "3",
    label: "Daily Interaction",
    client: {
      title: "Development Leads / Engineers",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Group of people + magnifier */}
          <circle cx="28" cy="26" r="6"/>
          <path d="M16 52c0-6.6 5.4-12 12-12"/>
          <circle cx="46" cy="26" r="6"/>
          <path d="M46 38c6.6 0 12 5.4 12 12"/>
          <path d="M34 40c3-1 6-1 9 0"/>
          {/* Magnifier */}
          <circle cx="58" cy="20" r="7"/>
          <line x1="63" y1="26" x2="70" y2="33"/>
        </svg>
      ),
    },
    is: {
      title: "Development Teams",
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          width="64" height="64">
          {/* Three groups of people — team */}
          {[16, 40, 64].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy="26" r="5"/>
              <path d={`M${cx - 8} 50c0-5 3.6-9 8-9s8 4 8 9`}/>
            </g>
          ))}
          {/* Connecting line below */}
          <line x1="16" y1="50" x2="64" y2="50"/>
          <line x1="16" y1="50" x2="16" y2="44"/>
          <line x1="40" y1="50" x2="40" y2="44"/>
          <line x1="64" y1="50" x2="64" y2="44"/>
        </svg>
      ),
    },
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Role block (left or right side) ── */
function RoleBlock({ data, side, rowIndex }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });
  const isLeft = side === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: rowIndex * 0.12, ease: E }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        padding: "36px 24px",
        textAlign: "center",
        position: "relative",
        flex: 1,
      }}
    >
      {/* Hover area */}
      <motion.div
        whileHover={{ background: "rgba(59,130,246,0.04)" }}
        style={{
          position: "absolute", inset: 0,
          borderRadius: 14, transition: "background 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Icon circle */}
      <motion.div
        whileHover={{
          color: BLUE_LITE,
          background: "rgba(59,130,246,0.12)",
          borderColor: `${BLUE}55`,
          scale: 1.06,
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: 96, height: 96,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.06)",
          border: `1.5px solid ${BLUE}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: `${BLUE}cc`,
          position: "relative", zIndex: 1,
        }}
      >
        {data.icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        whileHover={{ color: "#ffffff" }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(13px, 1.1vw, 15px)",
          lineHeight: 1.45,
          color: "rgba(255,255,255,0.78)",
          margin: 0,
          maxWidth: 180,
          position: "relative", zIndex: 1,
        }}
      >
        {data.title}
      </motion.h3>
    </motion.div>
  );
}

/* ── Centre connector (number + arrows + label) ── */
function Connector({ row, rowIndex }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inV ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: rowIndex * 0.12 + 0.15, ease: E }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: "36px 0",
        minWidth: 160,
        position: "relative",
      }}
    >
      {/* Animated horizontal line — left side */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%" }}>
        {/* Left arrow head */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={inV ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: rowIndex * 0.12 + 0.3 }}
          style={{ color: BLUE, lineHeight: 0 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
            stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 2L2 5l5 3"/>
          </svg>
        </motion.div>

        {/* Left line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inV ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: rowIndex * 0.12 + 0.25, ease: E }}
          style={{
            flex: 1, height: 1.5,
            background: `linear-gradient(90deg, ${BLUE}22, ${BLUE})`,
            transformOrigin: "right",
          }}
        />

        {/* Number circle */}
        <motion.div
          animate={{
            boxShadow: [`0 0 0 0 ${BLUE}44`, `0 0 0 12px ${BLUE}00`],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: rowIndex * 0.4 }}
          style={{
            width: 44, height: 44,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${BLUE}, #2563eb)`,
            boxShadow: `0 0 20px ${BLUE}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 18,
            color: "#fff", flexShrink: 0,
            position: "relative", zIndex: 2,
          }}
        >
          {row.number}
        </motion.div>

        {/* Right line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inV ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: rowIndex * 0.12 + 0.25, ease: E }}
          style={{
            flex: 1, height: 1.5,
            background: `linear-gradient(90deg, ${BLUE}, ${BLUE}22)`,
            transformOrigin: "left",
          }}
        />

        {/* Right arrow head */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inV ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: rowIndex * 0.12 + 0.3 }}
          style={{ color: BLUE, lineHeight: 0 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
            stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2l5 3-5 3"/>
          </svg>
        </motion.div>
      </div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={inV ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: rowIndex * 0.12 + 0.4, ease: E }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 600, fontSize: 11,
          letterSpacing: 1.5, textTransform: "uppercase",
          color: BLUE,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {row.label}
      </motion.span>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function DedicatedTeamModel() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .dtm-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        /* Column headers row */
        .dtm-col-headers {
          display: grid;
          grid-template-columns: 1fr 160px 1fr;
          margin-bottom: 8px;
        }
        /* Each content row */
        .dtm-row {
          display: grid;
          grid-template-columns: 1fr 160px 1fr;
          position: relative;
        }
        @media (max-width: 860px) {
          .dtm-col-headers { display: none; }
          .dtm-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .dtm-connector-wrap { order: 2; }
          .dtm-left-wrap  { order: 1; }
          .dtm-right-wrap { order: 3; }
          .dtm-section { padding: 80px 28px 96px !important; }
        }
        @media (max-width: 520px) {
          .dtm-section { padding: 60px 16px 80px !important; }
          .dtm-h2 { font-size: 24px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="dtm-section">
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 580, height: 580, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 460, height: 460, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 300, height: 300, background: "rgba(59,130,246,0.05)", top: "40%", left: "42%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: E }}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 22 }}
            >
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: BLUE,
              }}>Team Model</span>
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
            </motion.div>

            <motion.h2
              className="dtm-h2"
              initial={{ opacity: 0, y: 28 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: E }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(26px, 4vw, 52px)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                lineHeight: 1.08,
                color: "#ffffff",
                margin: "0 0 24px",
              }}
            >
              Proven{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Dedicated Development
              </span>
              <br />Team Model
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16, lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 680, margin: "0 auto",
              }}
            >
              Waves Techno-Vision LLP supports multiple clients in meeting their technology needs. We stick to the
              industry's best practices in delivery, program management, and talent acquisition. As a
              result, we have implemented a standard dedicated development team governance framework.
            </motion.p>

            {/* Gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, transparent, ${BLUE} 30%, ${BLUE_LITE} 50%, ${BLUE} 70%, transparent)`,
                transformOrigin: "center", borderRadius: 2,
              }}
            />
          </div>

          {/* ── Column labels ── */}
          <div className="dtm-col-headers">
            {/* CLIENT label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: E }}
              style={{ textAlign: "center" }}
            >
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: 13,
                letterSpacing: 4, textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                display: "inline-flex", alignItems: "center", gap: 10,
              }}>
                <div style={{ width: 24, height: 1.5, background: "rgba(255,255,255,0.18)" }} />
                Client
                <div style={{ width: 24, height: 1.5, background: "rgba(255,255,255,0.18)" }} />
              </span>
            </motion.div>

            <div /> {/* Centre spacer */}

            {/* Waves Techno-Vision LLP label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: E }}
              style={{ textAlign: "center" }}
            >
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: 13,
                letterSpacing: 4, textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                display: "inline-flex", alignItems: "center", gap: 10,
              }}>
                <div style={{ width: 24, height: 1.5, background: "rgba(255,255,255,0.18)" }} />
                Waves Techno-Vision LLP
                <div style={{ width: 24, height: 1.5, background: "rgba(255,255,255,0.18)" }} />
              </span>
            </motion.div>
          </div>

          {/* ── Top border ── */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: E }}
            style={{ height: 1, background: "rgba(255,255,255,0.07)", transformOrigin: "left" }}
          />

          {/* ── 3 rows ── */}
          {ROWS.map((row, i) => (
            <div key={row.number}>
              <div className="dtm-row">
                {/* Left — CLIENT role */}
                <div className="dtm-left-wrap">
                  <RoleBlock data={row.client} side="left" rowIndex={i} />
                </div>

                {/* Centre — connector */}
                <div className="dtm-connector-wrap" style={{ display: "flex", alignItems: "center" }}>
                  <Connector row={row} rowIndex={i} />
                </div>

                {/* Right — Waves Techno-Vision LLP role */}
                <div className="dtm-right-wrap">
                  <RoleBlock data={row.is} side="right" rowIndex={i} />
                </div>
              </div>

              {/* Horizontal divider between rows */}
              {i < ROWS.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.9, ease: E }}
                  style={{ height: 1, background: "rgba(255,255,255,0.07)", transformOrigin: "left" }}
                />
              )}
            </div>
          ))}

          
          
        </div>
      </section>
    </>
  );
}