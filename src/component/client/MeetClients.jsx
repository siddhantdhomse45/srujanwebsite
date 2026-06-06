import  { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── DATA ─── */
const clients = [
  { name: "Universal",        abbr: "U",    color: "#0ea5e9" },
  { name: "NHS",              abbr: "NH",   color: "#16a34a" },
  { name: "Guinness",         abbr: "G",    color: "#92400e" },
  { name: "Eurostar",         abbr: "E★",   color: "#7c3aed" },
  { name: "EY",               abbr: "EY",   color: "#d97706" },
  { name: "KJK",              abbr: "KJK",  color: "#0f766e" },
  { name: "Griffins",         abbr: "GR",   color: "#be123c" },
  { name: "Land Rover",       abbr: "LR",   color: "#1e40af" },
  { name: "Jaguar",           abbr: "JAG",  color: "#4f46e5" },
  { name: "Walt Disney",      abbr: "WD",   color: "#b45309" },
  { name: "Guest Services",   abbr: "GS",   color: "#0891b2" },
  { name: "Cirrus Insight",   abbr: "CI",   color: "#6d28d9" },
  { name: "Hoosbaa",          abbr: "HB",   color: "#0f766e" },
  { name: "AF",               abbr: "AF",   color: "#9f1239" },
  { name: "Wynn",             abbr: "WN",   color: "#065f46" },
  { name: "Melco",            abbr: "∞M",   color: "#1e3a8a" },
  { name: "Euro Accident",    abbr: "EA",   color: "#7f1d1d" },
  { name: "Bombardier",       abbr: "BD",   color: "#1c1917" },
  { name: "Nestlé",           abbr: "NE",   color: "#713f12" },
  { name: "Clinique",         abbr: "CL",   color: "#831843" },
  { name: "Harley-Davidson",  abbr: "H-D",  color: "#1c1917" },
  { name: "Gulls",            abbr: "GU",   color: "#164e63" },
  { name: "Audi",             abbr: "AU",   color: "#374151" },
  { name: "Giant Bicycles",   abbr: "GNT",  color: "#166534" },
];

const STATS = [
  { n: "500+",  label: "Enterprise Clients" },
  { n: "13+",   label: "Years of Partnership" },
  { n: "98%",   label: "Client Retention" },
  { n: "40+",   label: "Countries Served" },
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
    style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(80px)", opacity: .12, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents: "none", zIndex: 0 }}
    animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/40% 50% 60% 50%", "60% 40% 30% 70%/60% 30% 70% 40%"], scale: [1, 1.12, 1] }}
    transition={{ duration: 14 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ─── SCROLL REVEAL ─── */
const Rev = ({ children, delay = 0, y = 40, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
};

/* ─── CLIENT LOGO CARD ─── */
const LogoCard = ({ client, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        padding: "20px 14px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
        cursor: "default",
        background: hovered ? `${client.color}14` : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: hovered ? `1px solid ${client.color}40` : "1px solid rgba(255,255,255,0.07)",
        transition: "all .3s ease",
        transform: hovered ? "translateY(-6px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px ${client.color}25` : "none",
        minHeight: 100,
        overflow: "hidden",
      }}>

      {/* Top accent on hover */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "16px 16px 0 0", background: `linear-gradient(90deg, transparent, ${client.color}, transparent)`, opacity: hovered ? 1 : 0, transition: "opacity .3s ease" }} />

      {/* Avatar circle */}
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        background: `${client.color}18`,
        border: `1.5px solid ${client.color}35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Space Mono', monospace",
        fontSize: 11, fontWeight: 700, color: client.color,
        letterSpacing: "0.04em",
        flexShrink: 0,
        boxShadow: hovered ? `0 0 20px ${client.color}30` : "none",
        transition: "box-shadow .3s ease",
      }}>
        {client.abbr}
      </div>

      {/* Name */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 11, fontWeight: 600, color: hovered ? "#f1f5f9" : "rgba(255,255,255,0.45)",
        margin: 0, textAlign: "center", lineHeight: 1.3,
        letterSpacing: "0.02em",
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
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .mc-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
        .mc-serif { font-family: 'DM Serif Display', serif; }
        .mc-mono  { font-family: 'Space Mono', monospace; }
        .mc-btn-primary {
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none; cursor: pointer; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 14px 32px; border-radius: 12px;
          box-shadow: 0 0 28px rgba(14,165,233,0.28);
          transition: all .3s ease; display: inline-flex; align-items: center; gap: 10px;
        }
        .mc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 48px rgba(14,165,233,0.5); }
        .mc-btn-ghost {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer; color: rgba(255,255,255,0.7); font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
          padding: 14px 32px; border-radius: 12px; transition: all .3s ease;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .mc-btn-ghost:hover { background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.22); }
        .stat-card { transition: transform .35s cubic-bezier(.34,1.56,.64,1); }
        .stat-card:hover { transform: translateY(-5px); }
      `}</style>

      <section ref={sectionRef} className="mc-wrap"
        style={{ background: "#060b14", padding: "110px 0 120px", position: "relative", overflow: "hidden" }}>

        {/* Blobs */}
        <Blob color="radial-gradient(circle,#0ea5e9,#6366f1)" size="600px" top="-10%" left="-8%" delay={0} />
        <Blob color="radial-gradient(circle,#a78bfa,#ec4899)" size="500px" top="40%" left="65%" delay={3} />
        <Blob color="radial-gradient(circle,#0ea5e9,#0f766e)" size="400px" top="75%" left="5%" delay={6} />

        {/* Particle canvas */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}><Particles /></div>

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "72px 72px", zIndex: 0, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,5vw,72px)", position: "relative", zIndex: 2 }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Rev>
              <span className="mc-mono" style={{ fontSize: 10, color: "#0ea5e9", letterSpacing: "0.28em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
                // meet_our_clients
              </span>
            </Rev>
            <Rev delay={0.1}>
              <h2 className="mc-serif" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 400, color: "#f8fafc", margin: "0 0 6px", lineHeight: 1.08 }}>
                Meet Our{" "}
                <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#38bdf8,#a78bfa,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Clients
                </span>
              </h2>
            </Rev>
            <Rev delay={0.2}>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, maxWidth: 520, margin: "20px auto 0", lineHeight: 1.8 }}>
                World-class brands and established companies have chosen us as their reliable technology partner.
              </p>
            </Rev>
            <Rev delay={0.3}>
              <div style={{ width: 60, height: 2, borderRadius: 1, background: "linear-gradient(90deg,#0ea5e9,#6366f1)", margin: "28px auto 0" }} />
            </Rev>
          </div>

          {/* ── STATS ROW ── */}
          <Rev delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, marginBottom: 72 }}>
              {STATS.map((s, i) => (
                <div key={i} className="stat-card"
                  style={{ borderRadius: 18, padding: "22px 16px", textAlign: "center", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="mc-serif" style={{ fontSize: 34, fontWeight: 400, color: "#38bdf8", margin: "0 0 6px", lineHeight: 1 }}>{s.n}</p>
                  <p className="mc-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", margin: 0, textTransform: "uppercase", letterSpacing: "0.18em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Rev>

          {/* ── LOGO GRID ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(172px,1fr))", gap: 14, marginBottom: 72 }}>
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