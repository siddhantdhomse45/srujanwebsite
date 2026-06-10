import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  TECHNOLOGIES WE USE — Premium Edition                      ║
 ║  Design: NO CARDS — open column layout with                 ║
 ║  horizontal + vertical divider lines                        ║
 ║  Each category: blue icon + ALL-CAPS title + pill tags      ║
 ║  Color: #3b82f6 deep navy system                            ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    span: 2,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <circle cx="20" cy="20" r="16"/>
        <path d="M13 20h14M20 13v14"/>
        <path d="M8 20c0-5 5-9 12-9s12 4 12 9-5 9-12 9S8 25 8 20z"/>
        <path d="M14 12c-2 2-3 5-3 8s1 6 3 8M26 12c2 2 3 5 3 8s-1 6-3 8"/>
      </svg>
    ),
    tags: ["Java", "C#", "C/C++", "Objective C", "Python", "Groovy", "Swift", "Kotlin", "PHP", "Rust", "Scala"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    span: 2,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <rect x="8" y="8" width="24" height="24" rx="3"/>
        <circle cx="20" cy="20" r="5"/>
        <path d="M20 8v6M20 26v6M8 20h6M26 20h6"/>
        <path d="M12 12l4 4M24 24l4 4M24 16l4-4M12 28l4-4"/>
      </svg>
    ),
    tags: ["JDBC / JPA", "JMS", "Hibernate", ".NET", "EJB", "Apache Camel", "Nodejs", "Firebase", "LDAP / Active Directory", "Reactive (Akka, RxJava, Reactor)"],
  },
  {
    id: "mobile",
    title: "Mobile",
    span: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <rect x="11" y="4" width="18" height="32" rx="3"/>
        <circle cx="20" cy="31" r="1.5"/>
        <path d="M11 9h18M11 28h18"/>
        <path d="M15 15l3 3-3 3M19 21h6"/>
      </svg>
    ),
    tags: ["iOS", "Android", "HTML5", "React", "Xamarin", "JavaScript"],
  },
  {
    id: "web",
    title: "Web",
    span: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <rect x="4" y="8" width="32" height="24" rx="3"/>
        <path d="M4 14h32"/>
        <circle cx="9" cy="11" r="1.3" fill="currentColor" stroke="none"/>
        <circle cx="14" cy="11" r="1.3" fill="currentColor" stroke="none"/>
        <path d="M14 21l4 4-4 4M18 29h8"/>
      </svg>
    ),
    tags: ["Vue", "Sass", "CoffeeScript", "Angular", "WebGL"],
  },
  {
    id: "database",
    title: "Database Management",
    span: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <ellipse cx="20" cy="12" rx="12" ry="4"/>
        <path d="M8 12v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8"/>
        <path d="M8 20v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8"/>
      </svg>
    ),
    tags: ["NoSQL", "MySQL", "Oracle SQL", "PostgreSQL", "Microsoft SQL"],
  },
  {
    id: "cloud",
    title: "Cloud",
    span: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        width="32" height="32">
        <path d="M28 28H12a8 8 0 01-1-16 10 10 0 0119 3 6 6 0 010 13z"/>
        <path d="M20 22v-8M16 18l4-4 4 4"/>
      </svg>
    ),
    tags: ["Amazon Web Services (AWS)", "Google Cloud", "Oracle Cloud", "IBM Cloud", "Microsoft Azure"],
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

/* ── Single pill tag ── */
function Pill({ label, catAccent }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      animate={{
        background: hov ? `${BLUE}18` : "rgba(255,255,255,0.04)",
        borderColor: hov ? `${BLUE}55` : "rgba(255,255,255,0.1)",
        color: hov ? BLUE_LITE : "rgba(255,255,255,0.65)",
        y: hov ? -2 : 0,
      }}
      transition={{ duration: 0.22 }}
      style={{
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 500, fontSize: 13,
        padding: "6px 14px",
        borderRadius: 999,
        border: "1px solid",
        cursor: "default",
        letterSpacing: 0.2,
        display: "inline-block",
        userSelect: "none",
      }}
    >
      {label}
    </motion.span>
  );
}

/* ── Technology category block ── */
function TechCategory({ cat, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.78, delay: index * 0.09, ease: E }}
      style={{ padding: "40px 36px", position: "relative" }}
    >
      {/* Hover bg fill */}
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(59,130,246,0.03)",
          pointerEvents: "none",
        }}
      />

      {/* Left edge accent line on hover */}
      <motion.div
        whileHover={{ scaleY: 1, opacity: 1 }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: E }}
        style={{
          position: "absolute", left: 0, top: "15%", bottom: "15%",
          width: 2.5, background: BLUE,
          borderRadius: "0 3px 3px 0",
          transformOrigin: "top",
        }}
      />

      {/* Icon + title row */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <motion.div
          whileHover={{ color: BLUE_LITE, scale: 1.08 }}
          transition={{ duration: 0.25 }}
          style={{ color: BLUE, lineHeight: 0 }}
        >
          {cat.icon}
        </motion.div>

        <div>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(15px, 1.4vw, 19px)",
            textTransform: "uppercase",
            letterSpacing: 2.5,
            color: BLUE,
            margin: 0,
            lineHeight: 1.15,
          }}>
            {cat.title}
          </h3>
          {/* Blue underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.07, ease: E }}
            style={{
              height: 1.5,
              background: `linear-gradient(90deg, ${BLUE}, transparent)`,
              borderRadius: 2,
              marginTop: 5,
            }}
          />
        </div>
      </div>

      {/* Pill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
        {cat.tags.map((tag, ti) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + index * 0.05 + ti * 0.04, duration: 0.4, ease: E }}
          >
            <Pill label={tag} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function TechnologiesWeUse() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  /* Row 1: languages (col 1-2) + frameworks (col 3-4) → 4-col grid */
  /* Row 2: mobile, web, database, cloud → 4-col grid */
  const row1 = CATEGORIES.filter(c => c.span === 2);
  const row2 = CATEGORIES.filter(c => c.span === 1);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .twu-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }

        /* Row 1: 2 wide columns */
        .twu-row1 {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        /* Row 2: 4 equal columns */
        .twu-row2 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        /* Divider lines */
        .twu-hdiv {
          grid-column: 1 / -1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .twu-vdiv {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
        }

        @media (max-width: 1100px) {
          .twu-row2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .twu-row1 { grid-template-columns: 1fr; }
          .twu-row2 { grid-template-columns: 1fr 1fr; }
          .twu-section { padding: 80px 28px 96px !important; }
          .twu-vdiv { display: none !important; }
        }
        @media (max-width: 520px) {
          .twu-row2 { grid-template-columns: 1fr; }
          .twu-section { padding: 60px 16px 80px !important; }
          .twu-h2 { font-size: 24px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="twu-section">
        {/* ── Atmosphere ── */}
        <Orb style={{ width: 600, height: 600, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 480, height: 480, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 320, height: 320, background: "rgba(59,130,246,0.04)", top: "45%", left: "42%" }} />

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
              }}>Our Stack</span>
              <div style={{ width: 32, height: 2, background: BLUE, borderRadius: 2 }} />
            </motion.div>

            <motion.h2
              className="twu-h2"
              initial={{ opacity: 0, y: 28 }}
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
                margin: "0 0 24px",
              }}
            >
              Technologies{" "}
              <span style={{
                background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                We Use
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 16, lineHeight: 1.85,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 680, margin: "0 auto",
              }}
            >
              Our dedicated team of developers has been helping leading companies across industries with
              their projects. We know that the success of any dedicated development team relies on
              expertise, skills, and mindset.
            </motion.p>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.32, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, transparent, ${BLUE} 30%, ${BLUE_LITE} 50%, ${BLUE} 70%, transparent)`,
                transformOrigin: "center", borderRadius: 2,
              }}
            />
          </div>

          {/* ══ GRID LAYOUT ══ */}
          <div style={{
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20,
            overflow: "hidden",
          }}>

            {/* ── ROW 1: Languages + Frameworks (2 wide columns) ── */}
            <div className="twu-row1">
              {row1.map((cat, i) => (
                <>
                  <TechCategory key={cat.id} cat={cat} index={i} />
                  {i === 0 && (
                    <div
                      key="vdiv-r1"
                      className="twu-vdiv"
                    />
                  )}
                </>
              ))}
            </div>

            {/* ── Horizontal divider between rows ── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: E }}
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                transformOrigin: "left",
              }}
            />

            {/* ── ROW 2: Mobile, Web, Database, Cloud (4 equal cols) ── */}
            <div className="twu-row2">
              {row2.map((cat, i) => (
                <>
                  <TechCategory key={cat.id} cat={cat} index={i + 2} />
                  {i < row2.length - 1 && (
                    <div
                      key={`vdiv-r2-${i}`}
                      className="twu-vdiv"
                    />
                  )}
                </>
              ))}
            </div>
          </div>

       

        </div>
      </section>
    </>
  );
}