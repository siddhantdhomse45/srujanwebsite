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

/* ─── ANIMATED COUNTER ─── */
const Counter = ({ end, suffix = "", trigger }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    setN(0);
    let s = 0, id;
    const step = () => {
      s += end / 55;
      if (s >= end) { setN(end); return; }
      setN(Math.floor(s));
      id = requestAnimationFrame(step);
    };
    const t = setTimeout(() => { id = requestAnimationFrame(step); }, 200);
    return () => { clearTimeout(t); cancelAnimationFrame(id); };
  }, [trigger, end]);
  return <>{n}{suffix}</>;
};

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

  // Auto-play
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .css-wrap { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8f9fc; }
        .css-serif { font-family: 'DM Serif Display', serif; }
        .css-mono  { font-family: 'Space Mono', monospace; }

        .css-all-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: #1a56db;
          text-decoration: none; font-family: 'Space Mono', monospace;
          transition: gap .25s ease;
        }
        .css-all-link:hover { gap: 12px; }
        .css-all-link svg { transition: transform .25s ease; }
        .css-all-link:hover svg { transform: translateX(3px); }

        .css-nav-btn {
          width: 42px; height: 42px; border-radius: 50%;
          background: transparent; border: 1.5px solid #d1d5db;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          color: #6b7280; transition: all .25s ease;
        }
        .css-nav-btn:hover { background: #1a56db; border-color: #1a56db; color: #fff; }

        .css-tab {
          flex: 1; padding: 20px 16px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: none; background: transparent;
          border-top: 3px solid transparent;
          transition: all .25s ease; position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .css-tab.active { border-top-color: #1a56db; background: #fff; }
        .css-tab:hover:not(.active) { background: #f1f5f9; }

        .css-result-chip {
          font-size: 11px; font-family: 'Space Mono', monospace;
          padding: 5px 12px; border-radius: 999px;
          background: #eff6ff; border: 1px solid #bfdbfe;
          color: #1d4ed8; white-space: nowrap;
          transition: all .25s ease;
        }
        .css-result-chip:hover { background: #dbeafe; }

        .css-progress {
          position: absolute; bottom: 0; left: 0; height: 3px;
          background: #1a56db; border-radius: 0 2px 2px 0;
          transform-origin: left;
        }

        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .css-progress-anim {
          animation: progress-bar 5s linear forwards;
        }
      `}</style>

      <section className="css-wrap" style={{ padding: "96px 0 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <motion.h2 className="css-serif"
              initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(1.5rem,3.5vw,2.4rem)", fontWeight: 400, color: "#111827", margin: "0 0 20px", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
              Read Clients Success Stories
            </motion.h2>
            <motion.a href="#" className="css-all-link"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              All Case Studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* ── STORY PANEL ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: "#fff", borderRadius: "16px 16px 0 0", boxShadow: "0 4px 40px rgba(0,0,0,0.08)", overflow: "hidden" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>

            {/* Content row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", minHeight: 420 }}>

              {/* ── IMAGE SIDE ── */}
              <div style={{ position: "relative", overflow: "hidden", background: "#0f172a" }}>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, opacity: 0.88 }}
                  />
                </AnimatePresence>

                {/* Image gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)", zIndex: 1 }} />

                {/* Tag badge */}
                <AnimatePresence mode="wait">
                  <motion.div key={`tag-${active}`}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{ position: "absolute", top: 24, left: 24, zIndex: 2, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", borderRadius: 8, padding: "6px 14px" }}>
                    <span className="css-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{story.tag}</span>
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <div style={{ position: "absolute", bottom: 24, right: 24, zIndex: 2, display: "flex", gap: 10 }}>
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
                <div className="css-mono" style={{ position: "absolute", bottom: 28, left: 24, zIndex: 2, fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                  {String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
                </div>
              </div>

              {/* ── TEXT SIDE ── */}
              <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#fff" }}>
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div key={`text-${active}`}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>

                    {/* Client name */}
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${story.color}18`, border: `1.5px solid ${story.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, color: story.color, letterSpacing: "0.06em", flexShrink: 0 }}>
                        {story.abbr}
                      </div>
                      <h3 className="css-serif" style={{ fontSize: "clamp(1.4rem,2.2vw,1.9rem)", fontWeight: 400, color: "#111827", margin: 0, lineHeight: 1.1 }}>
                        {story.client}
                      </h3>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.85, marginBottom: 28, maxWidth: 360 }}>
                      {story.description}
                    </p>

                    {/* Results chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                      {story.results.map((r, i) => (
                        <span key={i} className="css-result-chip">{r}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="#"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a56db", textDecoration: "none", fontFamily: "'Space Mono', monospace", transition: "gap .2s ease" }}
                      onMouseEnter={e => e.currentTarget.style.gap = "14px"}
                      onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                      Read Full Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── LOGO TABS ── */}
            <div style={{ display: "flex", borderTop: "1px solid #e5e7eb", background: "#f9fafb", position: "relative" }}>
              {stories.map((s, i) => (
                <button key={s.id}
                  className={`css-tab ${i === active ? "active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={s.client}
                  style={{ borderTop: `3px solid ${i === active ? "#1a56db" : "transparent"}` }}>

                  {/* Active progress bar */}
                  {i === active && !isPaused && (
                    <div className="css-progress css-progress-anim" key={`prog-${active}`} />
                  )}

                  {/* Logo placeholder — colored abbr text matching brand */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{
                      fontFamily: i === 1 ? "'Georgia', serif" : i === 2 ? "'Palatino', serif" : "'Space Mono', monospace",
                      fontSize: i === 0 ? 18 : i === 1 ? 13 : i === 2 ? 13 : 12,
                      fontWeight: i === 0 ? 700 : i === 1 ? 700 : 600,
                      fontStyle: i === 2 ? "italic" : "normal",
                      color: i === active ? "#111827" : "#9ca3af",
                      letterSpacing: i === 0 ? "0.06em" : i === 1 ? "0.08em" : "0.04em",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      transition: "color .25s ease",
                    }}>
                      {s.client.split(" ").slice(0, 2).join(" ")}
                    </div>
                    {i === active && (
                      <div style={{ width: 28, height: 1.5, background: "#1a56db", borderRadius: 1, marginTop: 2 }} />
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