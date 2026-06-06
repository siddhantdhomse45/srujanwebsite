import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Rev = ({ children, delay = 0, y = 40, x = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const stats = [
  { value: "21+", label: "Countries", accent: "#38bdf8", grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)" },
  { value: "10+", label: "Years Active", accent: "#818cf8", grad: "linear-gradient(135deg,#6366f1,#818cf8)" },
  { value: "500+", label: "Professionals", accent: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)" },
  { value: "3", label: "Global Offices", accent: "#c084fc", grad: "linear-gradient(135deg,#9333ea,#c084fc)" },
];

const tags = [
  { label: "Software Development", color: "#38bdf8" },
  { label: "IT Consultancy", color: "#818cf8" },
  { label: "Global Operations", color: "#34d399" },
  { label: "Team Safety First", color: "#fb923c" },
];

const GLASS = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 24,
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  .sr-section {
    width: 100%;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(160deg, #020d1e 0%, #04152d 45%, #060e20 100%);
  }

  /* ── Hero ── */
  .sr-hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .sr-hero-content {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 120px 0 100px;
  }

  .sr-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 64px;
  }

  .sr-glass-card {
    padding: clamp(28px, 5vw, 60px);
    position: relative;
    overflow: hidden;
  }

  .sr-hero-title {
    font-size: clamp(2.2rem, 5vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.05;
    margin: 0 0 24px;
    background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'DM Sans', sans-serif;
  }

  .sr-hero-divider {
    width: 56px;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    margin-bottom: 28px;
  }

  .sr-hero-body {
    color: rgba(255,255,255,0.5);
    font-size: clamp(15px, 1.5vw, 18px);
    line-height: 1.9;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .sr-btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 40px;
  }

  .sr-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 30px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0369a1, #38bdf8);
    color: white;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    border: none;
    box-shadow: 0 0 28px rgba(56,189,248,0.25);
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    white-space: nowrap;
  }

  .sr-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 30px;
    border-radius: 12px;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.10);
    color: rgba(255,255,255,0.6);
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
  }

  /* ── Stats ── */
  .sr-stats-section {
    position: relative;
    padding: 80px 0;
    border-top: 1px solid rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .sr-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .sr-section-title {
    color: white;
    font-size: clamp(24px, 3vw, 40px);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.1;
    font-family: 'DM Sans', sans-serif;
    margin: 0;
  }

  /* ── Who are we ── */
  .sr-who-section {
    position: relative;
    padding: 110px 0 120px;
    overflow: hidden;
  }

  .sr-who-title {
    font-size: clamp(2rem, 4.5vw, 4rem);
    font-weight: 800;
    text-align: center;
    letter-spacing: -1.5px;
    line-height: 1.08;
    margin: 0 0 52px;
    background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'DM Sans', sans-serif;
  }

  .sr-pull-quote {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 700;
    font-style: italic;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'DM Sans', sans-serif;
    text-align: center;
    margin-bottom: 28px;
  }

  .sr-who-body {
    color: rgba(255,255,255,0.5);
    font-size: clamp(15px, 1.5vw, 18px);
    line-height: 1.9;
    text-align: center;
    margin: 0 0 20px;
    position: relative;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
  }

  .sr-tags-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  /* ── MOBILE RESPONSIVE ── */
  @media (max-width: 768px) {
    .sr-hero-content {
      padding: 100px 0 80px;
    }

    .sr-container {
      padding: 0 20px;
    }

    .sr-glass-card {
      border-radius: 18px;
    }

    .sr-hero-title {
      letter-spacing: -1px;
    }

    .sr-btn-row {
      flex-direction: column;
      gap: 12px;
    }

    .sr-btn-primary,
    .sr-btn-secondary {
      justify-content: center;
      padding: 14px 24px;
      width: 100%;
      font-size: 15px;
    }

    .sr-stats-section {
      padding: 60px 0;
    }

    .sr-stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .sr-who-section {
      padding: 80px 0 90px;
    }

    .sr-who-title {
      letter-spacing: -1px;
      margin-bottom: 36px;
    }

    .sr-tags-row {
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    .sr-container {
      padding: 0 16px;
    }

    .sr-hero-content {
      padding: 90px 0 70px;
    }

    .sr-glass-card {
      padding: 24px 20px;
      border-radius: 16px;
    }

    .sr-stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .sr-who-section {
      padding: 70px 0 80px;
    }

    .sr-pull-quote {
      font-size: 1rem;
    }
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #020d1e; }
  ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 3px; }
`;

function GridSVG({ id }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function Orb({ style, duration = 10, delay = 0 }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.14, 0.24, 0.14] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none", ...style }}
    />
  );
}

function PillBadge({ label }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: 100, padding: "6px 18px", marginBottom: 20,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
      <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

function StatCardProper({ stat }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(18px,3vw,28px) clamp(12px,2vw,20px)",
        borderRadius: 18, textAlign: "center",
        background: hovered ? `${stat.accent}0e` : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        border: hovered ? `1px solid ${stat.accent}40` : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${stat.accent}15` : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default", position: "relative", overflow: "hidden",
        width: "100%",
      }}
    >
      <div style={{
        position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
        width: 120, height: 120, borderRadius: "50%",
        background: `radial-gradient(circle,${stat.accent}25,transparent 70%)`,
        filter: "blur(20px)", opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />
      <div style={{
        fontSize: "clamp(1.6rem,3vw,2.8rem)", fontWeight: 800, lineHeight: 1,
        background: stat.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginBottom: 8, fontFamily: "'DM Sans',sans-serif",
      }}>
        {stat.value}
      </div>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(9px,1vw,11px)", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>
        {stat.label}
      </div>
      <div style={{
        height: 2, borderRadius: 2, marginTop: 14,
        background: stat.grad,
        width: hovered ? "60%" : "0%",
        margin: "14px auto 0",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </motion.div>
  );
}

export default function SocialResponsibility() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade     = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const BG = "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)";

  return (
    <>
      <style>{styles}</style>
      <section className="sr-section">

        {/* ══ HERO ══ */}
        <div ref={heroRef} className="sr-hero">
          <motion.div style={{ position: "absolute", inset: 0, background: BG, y: bgY }} />

          <Orb style={{ top: "-10%", left: "-8%", width: "clamp(280px,50vw,560px)", height: "clamp(280px,50vw,560px)", background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)" }} duration={12} />
          <Orb style={{ bottom: "-10%", right: "-6%", width: "clamp(250px,45vw,500px)", height: "clamp(250px,45vw,500px)", background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)" }} duration={14} delay={4} />

          {/* Rotating rings — hidden on very small screens for perf */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", width: "clamp(300px,65vw,700px)", height: "clamp(300px,65vw,700px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1px solid rgba(56,189,248,0.06)", borderRadius: "50%", pointerEvents: "none" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", width: "clamp(400px,88vw,950px)", height: "clamp(400px,88vw,950px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1px solid rgba(129,140,248,0.04)", borderRadius: "50%", pointerEvents: "none" }}
          />

          <GridSVG id="srgrid1" />

          <motion.div
            style={{ y: contentY, opacity: fade, position: "relative", zIndex: 10, width: "100%" }}
            className="sr-hero-content"
          >
            <div className="sr-container">

              <Rev><PillBadge label="Our Commitment" /></Rev>

              <Rev delay={0.12}>
                <div style={{ ...GLASS }} className="sr-glass-card">

                  {/* Corner glows */}
                  <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: 220, pointerEvents: "none", background: "radial-gradient(circle at top right,rgba(129,140,248,0.1),transparent 65%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, width: 200, height: 200, pointerEvents: "none", background: "radial-gradient(circle at bottom left,rgba(56,189,248,0.07),transparent 65%)" }} />

                  <Rev delay={0.2}>
                    <h1 className="sr-hero-title">Social Responsibility</h1>
                  </Rev>

                  <Rev delay={0.24}>
                    <div className="sr-hero-divider" />
                  </Rev>

                  <Rev delay={0.3}>
                    <p className="sr-hero-body">
                      On 24th of February 2022, the russian federation started a full-scale war in Ukraine,
                      causing{" "}
                      <span style={{ color: "white", fontWeight: 600 }}>devastating consequences</span>{" "}
                      for civilians. Thousands of lives were lost, infrastructure destroyed, and millions
                      displaced. Continuous international support and humanitarian aid are crucial for
                      recovery and rebuilding efforts. Despite the hardships,{" "}
                      <span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>
                        Ukraine persists
                      </span>{" "}
                      in resisting the aggression. Srujan Infotech has been providing financial aid ever
                      since and encourages others to support Ukraine.
                    </p>
                  </Rev>

                  <Rev delay={0.38}>
                    <div className="sr-btn-row">
                      <motion.a
                        href="#"
                        className="sr-btn-primary"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(56,189,248,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Support Ukraine
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#who"
                        className="sr-btn-secondary"
                        whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Learn more ↓
                      </motion.a>
                    </div>
                  </Rev>
                </div>
              </Rev>
            </div>
          </motion.div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top,#020d1e,transparent)", pointerEvents: "none" }} />
        </div>

        {/* ══ STATS STRIP ══ */}
        <div className="sr-stats-section">
          <GridSVG id="srgrid2" />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 100% at 50% 50%,rgba(29,111,240,0.06),transparent)", pointerEvents: "none" }} />

          <div className="sr-container" style={{ position: "relative", zIndex: 10 }}>
            <Rev>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <PillBadge label="By the Numbers" />
                <h2 className="sr-section-title">
                  Our Global{" "}
                  <span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Footprint
                  </span>
                </h2>
              </div>
            </Rev>

            <motion.div
              className="sr-stats-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  <StatCardProper stat={stat} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ══ WHO ARE WE ══ */}
        <div id="who" className="sr-who-section">
          <Orb
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "clamp(300px,60vw,700px)", height: "clamp(300px,60vw,700px)", background: "radial-gradient(circle,#818cf8,#38bdf8,transparent 65%)", opacity: 0.08 }}
            duration={10} delay={2}
          />
          <GridSVG id="srgrid3" />

          <div className="sr-container" style={{ position: "relative", zIndex: 10 }}>

            <Rev>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 4 }}>
                <div style={{ height: 1, width: 32, background: "linear-gradient(90deg,transparent,rgba(56,189,248,0.4))" }} />
                <PillBadge label="About Us" />
                <div style={{ height: 1, width: 32, background: "linear-gradient(90deg,rgba(56,189,248,0.4),transparent)" }} />
              </div>
            </Rev>

            <Rev delay={0.1}>
              <h2 className="sr-who-title">Who Are We</h2>
            </Rev>

            <Rev delay={0.2}>
              <div style={{ ...GLASS }} className="sr-glass-card">

                <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: 220, pointerEvents: "none", background: "radial-gradient(circle at top right,rgba(56,189,248,0.08),transparent 65%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: 200, height: 200, pointerEvents: "none", background: "radial-gradient(circle at bottom left,rgba(129,140,248,0.08),transparent 65%)" }} />

                <div className="sr-pull-quote">"A global team, one shared mission."</div>

                <div style={{ width: 40, height: 1, margin: "0 auto 28px", background: "rgba(255,255,255,0.10)" }} />

                <p className="sr-who-body">
                  Srujan Infotech is a renowned multinational software development and IT consultancy
                  technology partner, operating globally with offices in the{" "}
                  <span style={{ color: "white", fontWeight: 600 }}>US, UK, and Norway</span>.
                  Our exceptional team of professionals spans across{" "}
                  <span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>
                    21 countries
                  </span>
                  , bringing together a diverse range of expertise and perspectives.
                </p>

                <p className="sr-who-body" style={{ marginBottom: 0 }}>
                  For over a decade, we have maintained a dedicated team in{" "}
                  <span style={{ background: "linear-gradient(90deg,#fbbf24,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>
                    Ukraine
                  </span>
                  , where a number of our colleagues are based. We prioritize the safety and
                  well-being of all our team members and their loved ones, ensuring a{" "}
                  <span style={{ color: "white", fontWeight: 600 }}>conducive and secure working environment</span>.
                </p>

                <motion.div
                  className="sr-tags-row"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                  {tags.map((tag) => (
                    <motion.span
                      key={tag.label}
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        padding: "7px 14px", borderRadius: 100,
                        background: `${tag.color}10`,
                        border: `1px solid ${tag.color}30`,
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "clamp(11px,1.2vw,12px)",
                        fontWeight: 600,
                        fontFamily: "'DM Sans',sans-serif",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: tag.color, boxShadow: `0 0 6px ${tag.color}`, flexShrink: 0 }} />
                      {tag.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Rev>
          </div>
        </div>

      </section>
    </>
  );
}