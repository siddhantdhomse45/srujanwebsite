import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  OUR CLIENTS — Premium Edition                              ║
 ║  Color: #3b82f6 blue accent on deep navy dark bg            ║
 ║  Layout: centered heading + subtitle + 5×2 logo grid        ║
 ║  + infinite marquee scroll strip below                      ║
 ║  Responsive: 5col → 3col → 2col                             ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ── Client logos — SVG text-based marks (grayscale → blue on hover) ── */
const CLIENTS = [
  {
    id: "guinness",
    label: "Guinness",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="44">
        <text x="50%" y="34" textAnchor="middle" fontFamily="'Barlow Condensed', Georgia, serif"
          fontWeight="800" fontSize="26" fill="currentColor" letterSpacing="3">GUINNESS</text>
        <path d="M50 12 Q60 4 70 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="60" cy="9" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "eurostar",
    label: "Eurostar",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="44">
        <text x="12" y="36" fontFamily="'Barlow', cursive" fontWeight="300" fontSize="18"
          fill="currentColor" letterSpacing="2" fontStyle="italic">Eurostar</text>
        <path d="M8 20 Q14 14 10 26" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "kjk",
    label: "KJK",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="44">
        <text x="50%" y="30" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="900" fontSize="28" fill="currentColor" letterSpacing="3">KJK</text>
        <text x="50%" y="42" textAnchor="middle" fontFamily="'Barlow', sans-serif"
          fontWeight="400" fontSize="7" fill="currentColor" letterSpacing="2.5">KOHRMAN JACKSON KRANTZ</text>
      </svg>
    ),
  },
  {
    id: "melco",
    label: "Melco",
    svg: (
      <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="130" height="44">
        <text x="50%" y="34" textAnchor="middle" fontFamily="'Barlow', sans-serif"
          fontWeight="300" fontSize="22" fill="currentColor" letterSpacing="5">MELCO</text>
      </svg>
    ),
  },
  {
    id: "audi",
    label: "Audi",
    svg: (
      <svg viewBox="0 0 120 54" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="48">
        {/* Four rings */}
        {[16, 36, 56, 76].map((cx, i) => (
          <circle key={i} cx={cx} cy="24" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        ))}
        <text x="50%" y="48" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="700" fontSize="13" fill="currentColor" letterSpacing="4">AUDI</text>
      </svg>
    ),
  },
  {
    id: "jaguar",
    label: "Jaguar",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="44">
        <text x="50%" y="38" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="300" fontSize="20" fill="currentColor" letterSpacing="6">JAGUAR</text>
        <path d="M48 16 Q60 6 72 16 Q66 22 60 20 Q54 22 48 16z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      </svg>
    ),
  },
  {
    id: "disney",
    label: "Walt Disney",
    svg: (
      <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="130" height="44">
        <text x="50%" y="35" textAnchor="middle" fontFamily="'Barlow', sans-serif"
          fontWeight="300" fontSize="18" fill="currentColor" letterSpacing="1" fontStyle="italic">Walt Disney</text>
      </svg>
    ),
  },
  {
    id: "guest",
    label: "Guest Services",
    svg: (
      <svg viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="48">
        <text x="50%" y="30" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="3">GUEST</text>
        <text x="50%" y="45" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="400" fontSize="12" fill="currentColor" letterSpacing="3">SERVICES</text>
        {/* pineapple icon */}
        <path d="M62 8 Q65 2 68 8 Q71 14 65 16 Q59 14 62 8z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="65" y1="2" x2="63" y2="0" stroke="currentColor" strokeWidth="1"/>
        <line x1="65" y1="2" x2="65" y2="-1" stroke="currentColor" strokeWidth="1"/>
        <line x1="65" y1="2" x2="67" y2="0" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: "cirrus",
    label: "Cirrus Insight",
    svg: (
      <svg viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="48">
        <path d="M55 20 Q55 12 62 12 Q70 12 70 20 Q70 28 62 28 Q58 28 56 24" stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
        <text x="50%" y="46" textAnchor="middle" fontFamily="'Barlow', sans-serif"
          fontWeight="400" fontSize="11" fill="currentColor" letterSpacing="2.5">cirrus insight</text>
      </svg>
    ),
  },
  {
    id: "griffins",
    label: "Griffins",
    svg: (
      <svg viewBox="0 0 120 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="48">
        {/* Shield shape */}
        <path d="M60 6 L80 14 L80 30 Q80 42 60 48 Q40 42 40 30 L40 14 Z"
          stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <text x="50%" y="34" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="800" fontSize="11" fill="currentColor" letterSpacing="2">GRIFFINS</text>
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Single logo card ── */
function LogoCard({ client, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: E }}
    >
      <motion.div
        whileHover={{
          y: -5,
          background: "rgba(59,130,246,0.07)",
          borderColor: "rgba(59,130,246,0.35)",
          boxShadow: "0 12px 36px rgba(59,130,246,0.18)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px 20px",
          borderRadius: 14,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          cursor: "pointer",
          minHeight: 96,
        }}
      >
        <motion.div
          whileHover={{ color: BLUE }}
          transition={{ duration: 0.25 }}
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 0 }}
        >
          {client.svg}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Infinite marquee strip ── */
function MarqueeStrip() {
  const items = [...CLIENTS, ...CLIENTS]; // duplicate for seamless loop
  return (
    <div style={{
      overflow: "hidden",
      width: "100%",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "20px 0",
      background: "rgba(255,255,255,0.015)",
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 64, alignItems: "center", width: "max-content" }}
      >
        {items.map((c, i) => (
          <div key={`${c.id}-${i}`}
            style={{ color: "rgba(255,255,255,0.22)", lineHeight: 0, flexShrink: 0 }}>
            {c.svg}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function OurClients() {
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
        .oc-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 0;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .oc-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) {
          .oc-grid { grid-template-columns: repeat(4, 1fr); }
          .oc-section { padding: 88px 40px 0 !important; }
        }
        @media (max-width: 800px) {
          .oc-grid { grid-template-columns: repeat(3, 1fr); }
          .oc-section { padding: 72px 28px 0 !important; }
        }
        @media (max-width: 520px) {
          .oc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .oc-section { padding: 56px 16px 0 !important; }
          .oc-h2 { font-size: 26px !important; }
          .oc-sub { font-size: 14px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="oc-section">
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 560, height: 560, background: "rgba(59,130,246,0.07)", top: -160, left: -100 }} />
        <Orb style={{ width: 440, height: 440, background: "rgba(96,165,250,0.05)", bottom: 0, right: -80 }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Vertical accent lines */}
        {[20, 50, 80].map((l, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0, left: `${l}%`, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.06) 30%, rgba(59,130,246,0.06) 70%, transparent)",
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
            {/* Eyebrow */}
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
              }}>
                Trusted Partners
              </span>
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="oc-h2"
              initial={{ opacity: 0, y: 28 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: E }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(26px, 4vw, 52px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: 1.06,
                color: "#ffffff",
                margin: "0 0 28px",
              }}
            >
              Our{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Clients
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="oc-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16, lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 760, margin: "0 auto",
              }}
            >
              We've successfully partnered with clients spanning from startups to Fortune 500 companies
              to create impactful web development solutions. Our well-defined development cycle
              guarantees a smooth process with strong collaboration and support.
            </motion.p>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.32, ease: E }}
              style={{
                marginTop: 40, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)`,
                transformOrigin: "center", borderRadius: 2,
              }}
            />
          </div>

          {/* ── 5×2 Logo grid ── */}
          <div className="oc-grid" style={{ marginBottom: 72 }}>
            {CLIENTS.map((client, i) => (
              <LogoCard key={client.id} client={client} index={i} />
            ))}
          </div>

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: E }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              marginBottom: 0,
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: 72,
            }}
          >
            {[
              { value: "10+", label: "Fortune 500 Clients" },
              { value: "50+", label: "Industries Served"   },
              { value: "500+",label: "Projects Delivered"  },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: "28px 24px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(59,130,246,0.12)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900, fontSize: "clamp(28px, 3vw, 40px)",
                  color: "#ffffff", letterSpacing: "-0.5px", lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600, fontSize: 10,
                  letterSpacing: 2, textTransform: "uppercase",
                  color: "rgba(255,255,255,0.32)", marginTop: 8,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Infinite marquee strip at bottom ── */}
        <MarqueeStrip />

      </section>
    </>
  );
}