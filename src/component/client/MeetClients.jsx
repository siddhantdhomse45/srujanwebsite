
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";

/* ─── CLIENT DATA ─── */
const clients = [
  { name: "Universal",        img: "https://www.intellectsoft.net/blog/wp-content/uploads/universal-1.svg",         color: "#0ea5e9" },
  { name: "NHS",              img: "https://www.intellectsoft.net/blog/wp-content/uploads/nhs.svg",                 color: "#16a34a" },
  { name: "Guinness",         img: "https://www.intellectsoft.net/blog/wp-content/uploads/guinness-1.svg",          color: "#92400e" },
  { name: "Eurostar",         img: "https://www.intellectsoft.net/blog/wp-content/uploads/eurostar-1.svg",          color: "#7c3aed" },
  { name: "EY",               img: "https://www.intellectsoft.net/blog/wp-content/uploads/ey.svg",                  color: "#d97706" },
  { name: "KJK",              img: "https://www.intellectsoft.net/blog/wp-content/uploads/kjk.svg",                 color: "#0f766e" },
  { name: "Griffins",         img: "https://www.intellectsoft.net/blog/wp-content/uploads/griffins.svg",            color: "#be123c" },
  { name: "Land Rover",       img: "https://www.intellectsoft.net/blog/wp-content/uploads/land-rover.svg",          color: "#1e40af" },
  { name: "Jaguar",           img: "https://www.intellectsoft.net/blog/wp-content/uploads/jaguar-1.svg",            color: "#4f46e5" },
  { name: "Walt Disney",      img: "https://www.intellectsoft.net/blog/wp-content/uploads/walt-disney.svg",         color: "#b45309" },
  { name: "Guest Services",   img: "https://www.intellectsoft.net/blog/wp-content/uploads/guest-services.svg",      color: "#0891b2" },
  { name: "Cirrus Insight",   img: "https://www.intellectsoft.net/blog/wp-content/uploads/cirrus-1.svg",            color: "#6d28d9" },
  { name: "Hoosbaa",          img: "https://www.intellectsoft.net/blog/wp-content/uploads/hoosbaa.svg",             color: "#0f766e" },
  { name: "AF",               img: "https://www.intellectsoft.net/blog/wp-content/uploads/af-gruppen.svg",          color: "#9f1239" },
  { name: "Wynn",             img: "https://www.intellectsoft.net/blog/wp-content/uploads/wynn.svg",                color: "#065f46" },
  { name: "Melco",            img: "https://www.intellectsoft.net/blog/wp-content/uploads/melco.svg",               color: "#1e3a8a" },
  { name: "Euro Accident",    img: "https://www.intellectsoft.net/blog/wp-content/uploads/euro-accident-1.svg",     color: "#7f1d1d" },
  { name: "Bombardier",       img: "https://www.intellectsoft.net/blog/wp-content/uploads/bombardier.svg",          color: "#1c1917" },
  { name: "Nestlé",           img: "https://www.intellectsoft.net/blog/wp-content/uploads/nestle.svg",              color: "#713f12" },
  { name: "Clinique",         img: "https://www.intellectsoft.net/blog/wp-content/uploads/clinique.svg",            color: "#831843" },
  { name: "Harley-Davidson",  img: "https://www.intellectsoft.net/blog/wp-content/uploads/harley-1.svg",            color: "#1c1917" },
  { name: "Gulls",            img: "https://www.intellectsoft.net/blog/wp-content/uploads/gulls.svg",               color: "#164e63" },
  { name: "Audi",             img: "https://www.intellectsoft.net/blog/wp-content/uploads/audi.svg",                color: "#374151" },
  { name: "Giant Bicycles",   img: "https://www.intellectsoft.net/blog/wp-content/uploads/giant.svg",               color: "#166534" },
];

const STATS = [
  { n: "500+", label: "Enterprise Clients" },
  { n: "13+",  label: "Years of Partnership" },
  { n: "98%",  label: "Client Retention" },
  { n: "40+",  label: "Countries Served" },
];

/* ─── PARTICLE CANVAS ─── */
const Particles = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.2 + .3, a: Math.random() * .3 + .06,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(148,163,184,${.07 * (1 - d / 110)})`;
          ctx.lineWidth = .4; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
};

/* ─── MORPH BLOB ─── */
const Blob = ({ color, size, top, left, delay = 0 }) => (
  <motion.div
    style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(80px)", opacity: .1, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents: "none", zIndex: 0 }}
    animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/40% 50% 60% 50%", "60% 40% 30% 70%/60% 30% 70% 40%"], scale: [1, 1.12, 1] }}
    transition={{ duration: 14 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ─── SCROLL REVEAL ─── */
const Rev = ({ children, delay = 0, y = 40 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
};

/* ─── CLIENT LOGO CARD — FIXED for dark SVG visibility ─── */
const LogoCard = ({ client, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 18,
        padding: "20px 12px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        cursor: "default",
        /* Card body stays dark — only the inner logo box is white */
        background: hovered ? `${client.color}18` : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        border: hovered ? `1px solid ${client.color}55` : "1px solid rgba(255,255,255,0.09)",
        transition: "all .3s ease",
        transform: hovered ? "translateY(-6px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 18px 52px rgba(0,0,0,0.4), 0 0 0 1px ${client.color}30` : "0 2px 8px rgba(0,0,0,0.2)",
        minHeight: 140,
        overflow: "hidden",
      }}>

      {/* Hover top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2.5,
        borderRadius: "18px 18px 0 0",
        background: `linear-gradient(90deg, transparent, ${client.color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity .3s ease",
      }} />

      {/* ── WHITE LOGO BOX — the key fix ── */}
      {/* SVGs from intellectsoft.net are dark-coloured, so white bg is mandatory */}
      <div style={{
        width: 130,
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        /* Pure white background so ANY logo colour is visible */
        background: "#ffffff",
        borderRadius: 12,
        padding: "10px 14px",
        flexShrink: 0,
        border: hovered ? `2px solid ${client.color}55` : "2px solid rgba(255,255,255,0.12)",
        transition: "border-color .3s ease, box-shadow .3s ease",
        boxShadow: hovered
          ? `0 0 0 4px ${client.color}22, 0 8px 24px rgba(0,0,0,0.25)`
          : "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}>
        {!imgError ? (
          <img
            src={client.img}
            alt={client.name}
            loading="lazy"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              /* No filter needed — white bg does the work */
              display: "block",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback: coloured initials on white */
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 15,
            fontWeight: 700,
            color: client.color,
            textAlign: "center",
            letterSpacing: "0.04em",
          }}>
            {client.name.substring(0, 3).toUpperCase()}
          </span>
        )}
      </div>

      {/* Client name */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.55)",
        margin: 0,
        textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        transition: "color .3s ease",
      }}>
        {client.name}
      </p>
    </motion.div>
  );
};

/* ─── MAIN ─── */
const MeetClients = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .mc-wrap  { font-family: 'Plus Jakarta Sans', sans-serif; }
        .mc-serif { font-family: 'DM Serif Display', serif; }
        .mc-mono  { font-family: 'Space Mono', monospace; }

        .mc-btn-primary {
          background: linear-gradient(135deg,#0ea5e9,#6366f1);
          border: none; cursor: pointer; color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 15px 34px; border-radius: 12px;
          box-shadow: 0 0 28px rgba(14,165,233,0.3);
          transition: all .3s ease; display: inline-flex; align-items: center; gap: 10px;
        }
        .mc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 48px rgba(14,165,233,0.55); }

        .mc-btn-ghost {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.14);
          cursor: pointer; color: rgba(255,255,255,0.7);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          text-transform: uppercase; padding: 15px 34px; border-radius: 12px;
          transition: all .3s ease; display: inline-flex; align-items: center; gap: 10px;
        }
        .mc-btn-ghost:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25); }

        .stat-card { transition: transform .35s cubic-bezier(.34,1.56,.64,1); }
        .stat-card:hover { transform: translateY(-5px); }

        /* Responsive logo grid */
        .mc-logo-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          margin-bottom: 72px;
        }
        @media (max-width: 1200px) { .mc-logo-grid { grid-template-columns: repeat(5,1fr); } }
        @media (max-width: 960px)  { .mc-logo-grid { grid-template-columns: repeat(4,1fr); } }
        @media (max-width: 680px)  { .mc-logo-grid { grid-template-columns: repeat(3,1fr); gap: 10px; } }
        @media (max-width: 460px)  { .mc-logo-grid { grid-template-columns: repeat(2,1fr); gap: 10px; } }

        .mc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 72px;
        }
        @media (max-width: 680px) { .mc-stats-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section
        ref={sectionRef}
        className="mc-wrap"
        style={{
          background: "#060b14",
          padding: "110px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <Blob color="radial-gradient(circle,#0ea5e9,#6366f1)" size="600px" top="-10%" left="-8%" delay={0} />
        <Blob color="radial-gradient(circle,#a78bfa,#ec4899)" size="500px" top="40%" left="65%" delay={3} />
        <Blob color="radial-gradient(circle,#0ea5e9,#0f766e)" size="400px" top="75%" left="5%" delay={6} />

        {/* Particle canvas */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Particles />
        </div>

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "72px 72px", zIndex: 0, pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1380,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,72px)",
          position: "relative",
          zIndex: 2,
        }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Rev>
              <span className="mc-mono" style={{
                fontSize: 10, color: "#0ea5e9",
                letterSpacing: "0.28em", textTransform: "uppercase",
                display: "block", marginBottom: 16,
              }}>
                // meet_our_clients
              </span>
            </Rev>

            <Rev delay={0.1}>
              <h2 className="mc-serif" style={{
                fontSize: "clamp(2.2rem,5vw,4rem)",
                fontWeight: 400, color: "#f8fafc",
                margin: "0 0 6px", lineHeight: 1.08,
              }}>
                Meet Our{" "}
                <span style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg,#38bdf8,#a78bfa,#f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Clients
                </span>
              </h2>
            </Rev>

            <Rev delay={0.2}>
              <p style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 16, maxWidth: 520,
                margin: "20px auto 0", lineHeight: 1.8,
              }}>
                World-class brands and established companies have chosen us as their reliable technology partner.
              </p>
            </Rev>

            <Rev delay={0.3}>
              <div style={{
                width: 60, height: 2, borderRadius: 1,
                background: "linear-gradient(90deg,#0ea5e9,#6366f1)",
                margin: "28px auto 0",
              }} />
            </Rev>
          </div>

          {/* ── STATS ── */}
          <Rev delay={0.1}>
            <div className="mc-stats-grid">
              {STATS.map((s, i) => (
                <div key={i} className="stat-card" style={{
                  borderRadius: 18, padding: "24px 16px",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <p className="mc-serif" style={{
                    fontSize: 36, fontWeight: 400,
                    color: "#38bdf8", margin: "0 0 6px", lineHeight: 1,
                  }}>{s.n}</p>
                  <p className="mc-mono" style={{
                    fontSize: 9, color: "rgba(255,255,255,0.35)",
                    margin: 0, textTransform: "uppercase", letterSpacing: "0.18em",
                  }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Rev>

          {/* ── LOGO GRID ── */}
          <div className="mc-logo-grid">
            {clients.map((c, i) => (
              <LogoCard key={i} client={c} index={i} />
            ))}
          </div>

          {/* ── CTA ── */}
          <Rev delay={0.15}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="mc-btn-primary">
                Talk to Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="mc-btn-ghost">
                View Case Studies
              </button>
            </div>
          </Rev>

        </div>
      </section>
    </>
  );
};

export default MeetClients;

