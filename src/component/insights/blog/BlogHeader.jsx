import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  INTELLECTSOFT BLOG — Hero Header                           ║
 ║  Layout: full-bleed photo + dark overlay + centered         ║
 ║           heading + pill tag filters + search bar           ║
 ║  Active tag: white filled pill                              ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const TAGS = [
  "ALL", "IOT", "AI", "MOBILE DEVELOPMENT",
  "BLOCKCHAIN", "INSURANCE", "HEALTHCARE",
  "FINTECH", "OUTSTAFFING", "ECOMMERCE",
  "HOSPITALITY", "CONSTRUCTION", "CUSTOM SOFTWARE DEVELOPMENT",
];

/* ── Topo wave lines ── */
const TopoLines = () => (
  <svg
    style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", opacity: 0.06,
    }}
    viewBox="0 0 1400 500"
    preserveAspectRatio="xMidYMid slice"
  >
    {[
      "M0,80  Q240,40  480,90  Q720,140 960,70  Q1160,10  1400,80",
      "M0,150 Q260,105 510,158 Q760,210 1010,138 Q1200,80  1400,150",
      "M0,225 Q280,175 535,228 Q790,280 1045,205 Q1240,148 1400,220",
      "M0,305 Q295,250 555,306 Q815,360 1075,278 Q1275,215 1400,295",
      "M0,388 Q310,328 576,386 Q842,442 1108,354 Q1308,285 1400,370",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={BLUE} strokeWidth="0.9"/>
    ))}
  </svg>
);

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(90px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ── Single pill tag ── */
function TagPill({ tag, isActive, onClick, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

  return (
    <motion.button
      ref={ref}
      onClick={() => onClick(tag)}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={inV ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: E }}
      whileHover={{
        scale: 1.06,
        background: isActive ? "#ffffff" : "rgba(255,255,255,0.16)",
        borderColor: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: 1.8,
        textTransform: "uppercase",
        color: isActive ? "#0b1828" : "rgba(255,255,255,0.75)",
        background: isActive ? "#ffffff" : "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: `1.5px solid ${isActive ? "#ffffff" : "rgba(255,255,255,0.22)"}`,
        borderRadius: 999,
        padding: "8px 18px",
        cursor: "pointer",
        outline: "none",
        transition: "all 0.25s",
        whiteSpace: "nowrap",
        boxShadow: isActive
          ? "0 4px 20px rgba(255,255,255,0.25)"
          : "none",
      }}
    >
      <span style={{
        color: isActive ? `${BLUE}` : "rgba(255,255,255,0.45)",
        fontSize: 12,
        lineHeight: 1,
      }}>
        #
      </span>
      {tag}
    </motion.button>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function BlogHeader() {
  const [activeTag, setActiveTag] = useState("ALL");
  const [search, setSearch]       = useState("");
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .bh-section {
          position: relative;
          width: 100%;
          min-height: 68vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          padding: 100px 48px 80px;
          box-sizing: border-box;
        }
        .bh-tags-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
        }
        .bh-search-row {
          width: 100%;
          max-width: 1100px;
          display: flex;
          justify-content: flex-end;
          margin-top: 36px;
        }
        .bh-search-input {
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 999px;
          padding: 10px 20px 10px 42px;
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.3px;
          width: 240px;
          outline: none;
          backdrop-filter: blur(14px);
          transition: border-color 0.25s, box-shadow 0.25s, width 0.35s;
          position: relative;
        }
        .bh-search-input::placeholder { color: rgba(255,255,255,0.42); }
        .bh-search-input:focus {
          border-color: rgba(96,165,250,0.7);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.18);
          width: 300px;
        }
        @media (max-width: 768px) {
          .bh-section { padding: 80px 24px 64px !important; min-height: 56vh; }
          .bh-h1 { font-size: clamp(28px, 7vw, 48px) !important; }
          .bh-search-row { justify-content: center; margin-top: 28px; }
          .bh-search-input { width: 200px !important; }
          .bh-search-input:focus { width: 260px !important; }
        }
        @media (max-width: 480px) {
          .bh-section { padding: 64px 16px 52px !important; }
          .bh-tags-row { gap: 8px; }
        }
      `}</style>

      <section ref={ref} className="bh-section">

        {/* ── Parallax background — geometric blue architecture ── */}
        <motion.div
          style={{
            position: "absolute", inset: "-14% 0",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            y: bgY,
          }}
        />

        {/* ── Dark overlay — uniform deep navy ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(180deg, rgba(3,8,24,0.78) 0%, rgba(4,10,28,0.82) 40%, rgba(3,8,22,0.88) 100%)",
        }} />

        {/* ── Blue tint wash ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(14,40,100,0.45) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* ── Ambient orbs ── */}
        <Orb style={{ width: 560, height: 560, background: "rgba(59,130,246,0.10)", top: -160, left: -80 }} />
        <Orb style={{ width: 440, height: 440, background: "rgba(96,165,250,0.07)", bottom: -80, right: -60 }} />
        <Orb style={{ width: 300, height: 300, background: "rgba(59,130,246,0.06)", top: "30%", right: "20%" }} />

        {/* ── Topo lines ── */}
        <TopoLines />

        {/* ── Dot grid ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(59,130,246,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* ── Blue bottom fade ── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 80,
          background: "linear-gradient(to bottom, transparent, rgba(5,11,24,0.55))",
          pointerEvents: "none",
        }} />

        {/* ── Content ── */}
        <motion.div
          style={{ opacity: fadeOut, position: "relative", zIndex: 10, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inV ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: E }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
          >
            <div style={{ width: 28, height: 2, background: BLUE, borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Barlow', sans-serif", fontWeight: 700,
              fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
              color: BLUE,
            }}>
              Knowledge Hub
            </span>
            <div style={{ width: 28, height: 2, background: BLUE, borderRadius: 2 }} />
          </motion.div>

          {/* ── Heading ── */}
          <div style={{ overflow: "hidden", marginBottom: 48 }}>
            <motion.h1
              className="bh-h1"
              initial={{ y: 70, opacity: 0 }}
              animate={inV ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.95, delay: 0.15, ease: E }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 78px)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                lineHeight: 1.04,
                color: "#ffffff",
                margin: 0,
                textAlign: "center",
                textShadow: "0 4px 32px rgba(0,0,0,0.4)",
              }}
            >
              Intellectsoft{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 60%, #ffffff 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Blog
              </span>
            </motion.h1>
          </div>

          {/* ── Tag pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inV ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: E }}
            className="bh-tags-row"
          >
            {TAGS.map((tag, i) => (
              <TagPill
                key={tag}
                tag={tag}
                isActive={activeTag === tag}
                onClick={setActiveTag}
                index={i}
              />
            ))}
          </motion.div>

          {/* ── Search bar row ── */}
          <div className="bh-search-row">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: E }}
              style={{ position: "relative" }}
            >
              {/* Search icon */}
              <svg
                style={{
                  position: "absolute", left: 14, top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
                width="15" height="15" viewBox="0 0 16 16" fill="none"
                stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="7" cy="7" r="5"/>
                <path d="M11 11l3 3"/>
              </svg>
              <input
                className="bh-search-input"
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </motion.div>
          </div>

          {/* Active filter indicator */}
          {activeTag !== "ALL" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}
              style={{
                marginTop: 20,
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "'Barlow', sans-serif",
                fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Filtering by:
              <span style={{ color: BLUE_LITE, fontWeight: 700 }}>#{activeTag}</span>
              <motion.button
                onClick={() => setActiveTag("ALL")}
                whileHover={{ color: "#ffffff" }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(255,255,255,0.35)", fontSize: 14,
                  padding: "0 4px", outline: "none",
                }}
              >
                ×
              </motion.button>
            </motion.div>
          )}
        </motion.div>

      </section>
    </>
  );
}