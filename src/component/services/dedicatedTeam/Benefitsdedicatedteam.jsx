import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  BENEFITS OF OUR DEDICATED DEVELOPMENT TEAM                ║
 ║  Layout: Left accordion + Right sticky image               ║
 ║  Active item: blue title + chevron rotates + body expands  ║
 ║  Bottom: certification badge strip                         ║
 ║  Color: #3b82f6 deep navy premium                          ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const BENEFITS = [
  {
    id: "scaling",
    title: "Scaling Velocity",
    body: "The scale of the local talent market and regulatory framework allows versatile flexibility in managing your software developers' team. Scale up or down instantly without the overhead of traditional hiring cycles.",
  },
  {
    id: "cross-border",
    title: "Cross-border Expertise",
    body: "Our team has strong expertise in Enterprise Software, Legacy Systems, Travel & Hospitality, Retail & eCommerce, Healthcare & Insurance Industries, etc. We bring global perspective to every engagement.",
  },
  {
    id: "flexibility",
    title: "A Great Deal of Flexibility",
    body: "Whether you need a single developer or an entire product team, we adapt to your requirements. Our engagement models are designed to give you maximum control with minimum friction.",
  },
  {
    id: "realtime",
    title: "Real-time Check on the Process",
    body: "Stay fully in the loop with dedicated project dashboards, daily standups, and transparent reporting. You have complete visibility into every sprint, milestone, and deliverable.",
  },
  {
    id: "education",
    title: "Strong Math, Science & Engineering Education",
    body: "Our developers come from top-tier technical universities with rigorous STEM curricula. This foundation ensures robust problem-solving, algorithmic thinking, and engineering excellence.",
  },
  {
    id: "market",
    title: "Scalable, Well-established, and Mature IT Market",
    body: "We operate within a mature tech ecosystem with deep talent pipelines, established vendor networks, and proven delivery infrastructure that de-risks your software investments.",
  },
  {
    id: "onshore",
    title: "Critical Onshore Resourcing & Management Layers",
    body: "Our onshore management layer ensures cultural alignment, stakeholder communication, and executive-level accountability — bridging your leadership team with our offshore delivery center.",
  },
  {
    id: "liaison",
    title: "Technical Liaison with Nearshore Development Centers",
    body: "Our technical liaisons ensure seamless knowledge transfer, architecture coherence, and delivery continuity across nearshore development hubs — giving you both cost efficiency and quality assurance.",
  },
];

const CERTS = [
  { label: "ISO", sub: "27001" },
  { label: "GDPR", sub: "Compliant" },
  { label: "OWASP", sub: "Certified" },
  { label: "PCI", sub: "DSS" },
  { label: "SOC 2", sub: "Type II" },
  { label: "HIPAA", sub: "Compliant" },
  { label: "AML", sub: "Certified" },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Dot grid decoration (matches screenshot) ── */
function DotGrid({ style }) {
  return (
    <div style={{
      position: "absolute",
      ...style,
      backgroundImage: `radial-gradient(${BLUE}55 1.5px, transparent 1.5px)`,
      backgroundSize: "16px 16px",
      pointerEvents: "none",
    }} />
  );
}

/* ── Single accordion item ── */
function AccordionItem({ item, isOpen, onToggle, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: E }}
    >
      {/* ── Divider line above ── */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%" }} />

      {/* ── Header row (clickable) ── */}
      <motion.button
        onClick={onToggle}
        whileHover={{ background: "rgba(59,130,246,0.04)" }}
        style={{
          width: "100%", background: "none",
          border: "none", cursor: "pointer",
          padding: "22px 0",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: 16, outline: "none",
          position: "relative",
        }}
      >
        {/* Active blue left bar */}
        <motion.div
          animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          initial={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: E }}
          style={{
            position: "absolute", left: -1, top: 12, bottom: 12,
            width: 3, background: BLUE, borderRadius: "0 3px 3px 0",
            transformOrigin: "top",
          }}
        />

        {/* Title */}
        <motion.span
          animate={{ color: isOpen ? BLUE : "rgba(255,255,255,0.82)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: isOpen ? 700 : 500,
            fontSize: "clamp(14px, 1.2vw, 17px)",
            lineHeight: 1.35,
            textAlign: "left",
            transition: "font-weight 0.2s",
            paddingLeft: 16,
          }}
        >
          {item.title}
        </motion.span>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? BLUE : "rgba(255,255,255,0.35)" }}
          transition={{ duration: 0.35, ease: E }}
          style={{ flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7l5 5 5-5"/>
          </svg>
        </motion.div>
      </motion.button>

      {/* ── Expanded body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: E }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingLeft: 16, paddingBottom: 24 }}>
              {/* Blue dot accent */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE, boxShadow: `0 0 8px ${BLUE}` }} />
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${BLUE}44, transparent)` }} />
              </div>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 14.5, lineHeight: 1.85,
                color: "rgba(255,255,255,0.52)",
                margin: 0,
              }}>
                {item.body}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function BenefitsDedicatedTeam() {
  const [openId, setOpenId] = useState("scaling");
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .bdt-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 0;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .bdt-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        .bdt-image-col {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 960px) {
          .bdt-layout { grid-template-columns: 1fr; gap: 48px; }
          .bdt-image-col { position: static !important; }
          .bdt-section { padding: 80px 36px 0 !important; }
        }
        @media (max-width: 520px) {
          .bdt-section { padding: 60px 20px 0 !important; }
          .bdt-h2 { font-size: 26px !important; }
          .bdt-cert-grid { gap: 10px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="bdt-section">
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 560, height: 560, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 440, height: 440, background: "rgba(96,165,250,0.06)", bottom: 100, right: -80 }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 80 }}>
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
              }}>Dedicated Teams</span>
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
            </motion.div>

            <motion.h2
              className="bdt-h2"
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
                margin: "0 0 0",
              }}
            >
              Benefits of Our{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Dedicated
              </span>
              <br />Development Team
            </motion.h2>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.32, ease: E }}
              style={{
                marginTop: 36, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, transparent, ${BLUE} 30%, ${BLUE_LITE} 50%, ${BLUE} 70%, transparent)`,
                transformOrigin: "center", borderRadius: 2,
              }}
            />
          </div>

          {/* ── Main 2-column layout ── */}
          <div className="bdt-layout">

            {/* LEFT — accordion */}
            <div>
              {BENEFITS.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                  index={i}
                />
              ))}
              {/* Bottom border */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* RIGHT — sticky image */}
            <div className="bdt-image-col">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: E }}
                style={{ position: "relative" }}
              >
                {/* Dot grid decorations — match screenshot exactly */}
                <DotGrid style={{ top: -20, left: -20, width: 120, height: 120, borderRadius: 8, opacity: 0.6 }} />
                <DotGrid style={{ bottom: -20, right: -20, width: 120, height: 120, borderRadius: 8, opacity: 0.6 }} />

                {/* Image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px ${BLUE}22`,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Dedicated development team in a meeting"
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                  />
                  {/* Blue gradient overlay at bottom */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "40%",
                    background: `linear-gradient(to top, rgba(5,11,24,0.65), transparent)`,
                    pointerEvents: "none",
                  }} />
                  {/* Blue accent top bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE})`,
                  }} />
                </motion.div>

                {/* Active benefit label overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{
                    position: "absolute", bottom: 24, left: 24, right: 24,
                    background: "rgba(5,11,24,0.85)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid ${BLUE}33`,
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                >
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: BLUE, flexShrink: 0,
                    boxShadow: `0 0 10px ${BLUE}`,
                  }} />
                  <div>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700, fontSize: 13,
                      color: "#fff", letterSpacing: 0.3,
                    }}>
                      {BENEFITS.find(b => b.id === openId)?.title || "Select a benefit"}
                    </div>
                    <div style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 11, color: BLUE,
                      letterSpacing: 1.5, textTransform: "uppercase",
                      marginTop: 2,
                    }}>
                      Currently Expanded
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Stats row below image */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, marginTop: 20,
                background: `${BLUE}18`,
                border: `1px solid ${BLUE}22`,
                borderRadius: 12, overflow: "hidden",
              }}>
                {[
                  { value: "500+", label: "Projects" },
                  { value: "21", label: "Countries" },
                  { value: "15+", label: "Years" },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    padding: "20px 16px", textAlign: "center",
                    borderRight: i < 2 ? `1px solid ${BLUE}18` : "none",
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900, fontSize: 28,
                      color: "#fff", letterSpacing: "-0.5px",
                    }}>{s.value}</div>
                    <div style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600, fontSize: 10,
                      letterSpacing: 2, textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)", marginTop: 4,
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Certification badges strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.8, ease: E }}
            style={{
              marginTop: 80,
              padding: "32px 0",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 10,
              letterSpacing: 3, textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              textAlign: "center", marginBottom: 24,
            }}>
              Certifications & Compliance
            </div>

            <div
              className="bdt-cert-grid"
              style={{
                display: "flex", flexWrap: "wrap",
                justifyContent: "center", gap: 16,
              }}
            >
              {CERTS.map((cert, i) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: E }}
                  whileHover={{
                    background: "rgba(59,130,246,0.1)",
                    borderColor: `${BLUE}55`,
                    y: -3,
                  }}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    width: 88, height: 72,
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    cursor: "default",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                >
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900, fontSize: 16,
                    color: "#ffffff", letterSpacing: 0.5,
                    lineHeight: 1,
                  }}>
                    {cert.label}
                  </div>
                  <div style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 9, fontWeight: 600,
                    letterSpacing: 1.5, textTransform: "uppercase",
                    color: BLUE, marginTop: 4,
                  }}>
                    {cert.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}