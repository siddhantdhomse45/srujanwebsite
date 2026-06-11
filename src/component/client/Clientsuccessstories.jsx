import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    id: 1,
    client: "Ernst & Young",
    abbr: "EY",
    color: "#f5c400",
    tag: "FinTech · Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    description:
      "Forecasts in Focus confirms E&Y as a thought-leader in the eyes of an audience relying on data to drive smarter investment decisions.",
    results: ["2.4M+ users reached", "68% engagement uplift", "Fortune 500 recognition"],
  },
  {
    id: 2,
    client: "Guinness",
    abbr: "GU",
    color: "#b7901a",
    tag: "FMCG · Mobile App",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=900&q=80",
    description:
      "This marketing communications app prepared for Arthur Guinness Day vitalized the conversation between the beloved beverage brand and its admirers.",
    results: ["1.8M app downloads", "Global campaign reach", "Award-winning UX"],
  },
  {
    id: 3,
    client: "Jaguar",
    abbr: "JAG",
    color: "#4f46e5",
    tag: "Automotive · Digital",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    description:
      "A cutting-edge digital configurator allowed Jaguar customers to explore and customise every model in stunning 3D — redefining the online showroom.",
    results: ["42% longer sessions", "3× higher conversions", "Deployed in 27 markets"],
  },
  {
    id: 4,
    client: "Cirrus Insight",
    abbr: "CI",
    color: "#0891b2",
    tag: "SaaS · CRM",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    description:
      "A seamless Salesforce integration plugin that brings CRM data directly into Gmail, saving sales teams hours of manual data entry every week.",
    results: ["200K+ active users", "4.8★ Chrome rating", "$12M ARR milestone"],
  },
  {
    id: 5,
    client: "Eurostar",
    abbr: "ES",
    color: "#16a34a",
    tag: "Transport · eCommerce",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=80",
    description:
      "A rebuilt booking platform for Europe's premier rail service, streamlining the journey from search to seat with intuitive, mobile-first design.",
    results: ["31% booking increase", "NPS score +22pts", "£4.2M revenue uplift"],
  },
];

const ACCENT = "#60a5fa";
const ACCENT_DARK = "#378ADD";

// ---------- Decorative circles (same as other components) ----------
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[400, 600, 800].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ─── MAIN ─── */
const ClientSuccessStories = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  }, [active]);

  const next = useCallback(() => {
    const idx = (active + 1) % stories.length;
    setDirection(1);
    setActive(idx);
  }, [active]);

  const prev = useCallback(() => {
    const idx = (active - 1 + stories.length) % stories.length;
    setDirection(-1);
    setActive(idx);
  }, [active]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(next, 5000);
    return () => clearTimeout(timerRef.current);
  }, [active, isPaused, next]);

  const story = stories[active];

  const imgVariants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  };

  const textVariants = {
    enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -30 : 30, opacity: 0 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .css-wrap { font-family: 'DM Sans', sans-serif; position: relative; }
        .css-serif { font-family: 'DM Serif Display', serif; }
        .css-mono  { font-family: 'Space Mono', monospace; }

        .css-all-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: ${ACCENT};
          text-decoration: none; font-family: 'Space Mono', monospace;
          transition: gap .25s ease;
        }
        .css-all-link:hover { gap: 12px; color: white; }
        .css-all-link svg { transition: transform .25s ease; }
        .css-all-link:hover svg { transform: translateX(3px); }

        .css-nav-btn {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(0,0,0,0.5); border: 1.5px solid rgba(255,255,255,0.2);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.7); transition: all .25s ease;
          backdrop-filter: blur(8px);
        }
        .css-nav-btn:hover { background: ${ACCENT}; border-color: ${ACCENT}; color: #0a0f1c; }

        /* ── Story panel: side-by-side on desktop ── */
        .css-story-grid {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          min-height: 420px;
        }

        /* Image side */
        .css-img-side {
          position: relative;
          overflow: hidden;
          background: #0f172a;
          min-height: 300px;
        }

        /* Text side – dark card */
        .css-text-side {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(4,21,48,0.65);
          backdrop-filter: blur(12px);
          border-left: 1px solid rgba(59,130,246,0.2);
        }

        /* ── Tabs row (dark) ── */
        .css-tabs {
          display: flex;
          border-top: 1px solid rgba(59,130,246,0.2);
          background: rgba(4,21,48,0.4);
          backdrop-filter: blur(8px);
          position: relative;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .css-tabs::-webkit-scrollbar { display: none; }

        .css-tab {
          flex: 1;
          min-width: 90px;
          padding: 18px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          background: transparent;
          border-top: 3px solid transparent;
          transition: all .25s ease;
          position: relative;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .css-tab.active { border-top-color: ${ACCENT}; background: rgba(96,165,250,0.08); }
        .css-tab:hover:not(.active) { background: rgba(96,165,250,0.05); }

        .css-result-chip {
          font-size: 11px; font-family: 'Space Mono', monospace;
          padding: 5px 12px; border-radius: 999px;
          background: rgba(96,165,250,0.12);
          border: 1px solid rgba(96,165,250,0.3);
          color: ${ACCENT};
          white-space: nowrap;
          transition: all .25s ease;
        }
        .css-result-chip:hover { background: rgba(96,165,250,0.25); }

        .css-progress {
          position: absolute; bottom: 0; left: 0; height: 3px;
          background: ${ACCENT}; border-radius: 0 2px 2px 0;
          transform-origin: left;
        }

        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .css-progress-anim {
          animation: progress-bar 5s linear forwards;
        }

        /* ── Tablet (≤900px) ── */
        @media (max-width: 900px) {
          .css-story-grid {
            grid-template-columns: 1fr 1fr;
            min-height: 360px;
          }
          .css-text-side {
            padding: 32px 28px;
          }
        }

        /* ── Mobile (≤640px): stack vertically ── */
        @media (max-width: 640px) {
          .css-story-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .css-img-side {
            min-height: 220px;
            max-height: 260px;
          }
          .css-text-side {
            padding: 24px 20px 28px;
            border-left: none;
            border-top: 1px solid rgba(59,130,246,0.2);
          }
          .css-tab {
            min-width: 68px;
            padding: 14px 8px;
          }
          .css-tab-label-full { display: none; }
          .css-tab-label-short { display: block; }
        }

        /* ── Desktop: show full name, hide short ── */
        @media (min-width: 641px) {
          .css-tab-label-full { display: block; }
          .css-tab-label-short { display: none; }
        }

        /* ── Small mobile (≤380px) ── */
        @media (max-width: 380px) {
          .css-img-side {
            min-height: 180px;
            max-height: 210px;
          }
          .css-text-side {
            padding: 20px 16px 24px;
          }
        }
      `}</style>

      <section className="css-wrap" style={{ 
        position: "relative",
        background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
        padding: "clamp(56px, 8vw, 96px) 0 0",
        overflow: "hidden",
      }}>
        {/* Blueprint grid */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="storygrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#storygrid)" />
        </svg>

        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: -80, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ position: "absolute", bottom: -60, right: -20, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }}
        />

        <DecorativeCircles />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px, 4vw, 60px)", position: "relative", zIndex: 10 }}>
          {/* ── HEADER ── */}
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 44px)" }}>
            <motion.h2
              className="css-serif"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
                fontWeight: 400, color: "#ffffff",
                margin: "0 0 20px", letterSpacing: "-0.01em",
                textTransform: "uppercase", lineHeight: 1.2,
              }}
            >
              Read Clients Success Stories
            </motion.h2>
            <motion.a
              href="#"
              className="css-all-link"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              All Case Studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* ── STORY PANEL ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "transparent",
              borderRadius: "16px 16px 0 0",
              boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
              overflow: "hidden",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1200)}
          >
            {/* Content row */}
            <div className="css-story-grid">
              {/* ── IMAGE SIDE ── */}
              <div className="css-img-side">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={`img-${active}`}
                    custom={direction}
                    variants={imgVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    src={story.image}
                    alt={story.client}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      position: "absolute", inset: 0,
                      opacity: 0.88,
                    }}
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 100%)",
                  zIndex: 1,
                }} />

                {/* Tag badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tag-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{
                      position: "absolute", top: 18, left: 18, zIndex: 2,
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 8, padding: "6px 12px",
                    }}
                  >
                    <span className="css-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {story.tag}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <div style={{
                  position: "absolute", bottom: 18, right: 18, zIndex: 2,
                  display: "flex", gap: 10,
                }}>
                  <button className="css-nav-btn" onClick={prev} aria-label="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="css-nav-btn" onClick={next} aria-label="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* Slide counter */}
                <div
                  className="css-mono"
                  style={{
                    position: "absolute", bottom: 22, left: 18, zIndex: 2,
                    fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em",
                  }}
                >
                  {String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
                </div>
              </div>

              {/* ── TEXT SIDE (dark) ── */}
              <div className="css-text-side">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={`text-${active}`}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Client name */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${story.color}18`,
                        border: `1.5px solid ${story.color}35`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10, fontWeight: 700,
                        color: story.color, letterSpacing: "0.06em",
                        flexShrink: 0,
                      }}>
                        {story.abbr}
                      </div>
                      <h3
                        className="css-serif"
                        style={{
                          fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
                          fontWeight: 400, color: "#ffffff",
                          margin: 0, lineHeight: 1.1,
                        }}
                      >
                        {story.client}
                      </h3>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: "clamp(13px, 1.3vw, 15px)",
                      color: "rgba(255,255,255,0.7)", lineHeight: 1.85,
                      marginBottom: 22, maxWidth: 360,
                    }}>
                      {story.description}
                    </p>

                    {/* Results chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                      {story.results.map((r, i) => (
                        <span key={i} className="css-result-chip">{r}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        fontSize: 12, fontWeight: 700,
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: ACCENT, textDecoration: "none",
                        fontFamily: "'Space Mono', monospace",
                        transition: "gap .2s ease",
                      }}
                      onMouseEnter={e => e.currentTarget.style.gap = "14px"}
                      onMouseLeave={e => e.currentTarget.style.gap = "8px"}
                    >
                      Read Full Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── LOGO TABS (dark) ── */}
            <div className="css-tabs">
              {stories.map((s, i) => (
                <button
                  key={s.id}
                  className={`css-tab ${i === active ? "active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={s.client}
                  style={{ borderTop: `3px solid ${i === active ? ACCENT : "transparent"}` }}
                >
                  {/* Active progress bar */}
                  {i === active && !isPaused && (
                    <div className="css-progress css-progress-anim" key={`prog-${active}`} />
                  )}

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    {/* Full label (desktop) */}
                    <div
                      className="css-tab-label-full"
                      style={{
                        fontFamily: i === 1 ? "'Georgia', serif" : i === 2 ? "'Palatino', serif" : "'Space Mono', monospace",
                        fontSize: i === 0 ? 14 : 12,
                        fontWeight: i === 0 ? 700 : 600,
                        fontStyle: i === 2 ? "italic" : "normal",
                        color: i === active ? "#ffffff" : "rgba(255,255,255,0.5)",
                        letterSpacing: i === 0 ? "0.06em" : "0.04em",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        transition: "color .25s ease",
                      }}
                    >
                      {s.client.split(" ").slice(0, 2).join(" ")}
                    </div>

                    {/* Short label (mobile) */}
                    <div
                      className="css-tab-label-short"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10,
                        fontWeight: 700,
                        color: i === active ? "#ffffff" : "rgba(255,255,255,0.5)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        transition: "color .25s ease",
                      }}
                    >
                      {s.abbr}
                    </div>

                    {i === active && (
                      <div style={{ width: 24, height: 1.5, background: ACCENT, borderRadius: 1, marginTop: 2 }} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ClientSuccessStories;