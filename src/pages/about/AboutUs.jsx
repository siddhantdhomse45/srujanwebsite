
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Globe, Users, Zap, TrendingUp, Star, ChevronRight, Play, X, Sparkles, Award, Layers } from "lucide-react";
import CoreValues from "./CoreValues";
import Features from "./Features";
import Infosections from "./Infosections";

/* ══════════ PARTICLE CANVAS ══════════ */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const count = W < 768 ? 40 : 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,179,237,${p.a})`;
        ctx.fill();
      });
      particles.forEach((a, i) => particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(99,179,237,${0.12 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
};

/* ══════════ MAGNETIC CURSOR — desktop only ══════════ */
// const MagneticCursor = () => {
//   const cursorRef = useRef(null);
//   const trailRef = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const pos = useRef({ x: 0, y: 0 });
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices
//     setShow(true);
//     const move = e => { mouse.current = { x: e.clientX, y: e.clientY }; };
//     window.addEventListener("mousemove", move);
//     let raf;
//     const loop = () => {
//       pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
//       pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
//       if (cursorRef.current) cursorRef.current.style.transform = `translate(${mouse.current.x - 6}px, ${mouse.current.y - 6}px)`;
//       if (trailRef.current) trailRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
//       raf = requestAnimationFrame(loop);
//     };
//     loop();
//     return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
//   }, []);

//   if (!show) return null;
//   return (
//     <>
//       <div ref={cursorRef} style={{ position: "fixed", top: 0, left: 0, width: 12, height: 12, borderRadius: "50%", background: "#67e8f9", zIndex: 9999, pointerEvents: "none", mixBlendMode: "screen", willChange: "transform" }} />
//       <div ref={trailRef} style={{ position: "fixed", top: 0, left: 0, width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(103,232,249,0.4)", zIndex: 9998, pointerEvents: "none", willChange: "transform" }} />
//     </>
//   );
// };

/* ══════════ TEXT SCRAMBLE ══════════ */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const ScrambleText = ({ text, trigger }) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const total = 20;
    const iv = setInterval(() => {
      frame++;
      setDisplay(text.split("").map((ch, i) => {
        if (ch === " ") return " ";
        if (frame / total > i / text.length) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(""));
      if (frame >= total) clearInterval(iv);
    }, 40);
    return () => clearInterval(iv);
  }, [trigger, text]);
  return <span>{display}</span>;
};

/* ══════════ MORPH BLOB ══════════ */
const MorphBlob = ({ color, size, x, y, delay = 0 }) => (
  <motion.div
    style={{ position: "absolute", width: size, height: size, left: x, top: y, background: color, filter: "blur(60px)", opacity: 0.22, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents: "none" }}
    animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"], scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
    transition={{ duration: 10 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ══════════ COUNTER ══════════ */
const Counter = ({ end, suffix = "" }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let s = 0, id;
    const step = () => { s += end / 60; if (s >= end) { setN(end); return; } setN(Math.floor(s)); id = requestAnimationFrame(step); };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, end]);
  return <span ref={ref}>{n}{suffix}</span>;
};

/* ══════════ SCROLL REVEAL ══════════ */
const Rev = ({ children, y = 50, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
};

/* ══════════ TILT CARD — disabled on touch ══════════ */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const onMove = e => {
    if (isTouch) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={className}
    >{children}</motion.div>
  );
};

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function AboutPage() {
  const [heroReady, setHeroReady] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 200); return () => clearTimeout(t); }, []);

  const cards = [
    { icon: Code, title: "Modern Technologies", desc: "Latest frameworks, tools and architectures built to scale infinitely and never slow you down.", color: "#06b6d4", glow: "rgba(6,182,212,0.2)" },
    { icon: Users, title: "Expert Team", desc: "Senior engineers, architects and designers who've shipped products used by millions worldwide.", color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
    { icon: Globe, title: "Global Presence", desc: "From Pune to New York — serving enterprise clients across 28 countries with zero friction.", color: "#34d399", glow: "rgba(52,211,153,0.2)" },
  ];

  const stats = [
    { n: 500, s: "+", label: "Enterprise Clients", icon: Award },
    { n: 9, s: "+", label: "Years Excellence", icon: Star },
    { n: 1000, s: "+", label: "Projects Shipped", icon: Layers },
    { n: 100, s: "%", label: "Client Retention", icon: TrendingUp },
  ];

  const testimonials = [
    { name: "Rahul Mehta", role: "CTO · FinEdge", quote: "They transformed our entire digital infrastructure in under 90 days. Exceptional engineering.", avatar: "RM", bg: "#0891b2", acc: "#22d3ee" },
    { name: "Priya Sharma", role: "CEO · NovaTech", quote: "Delivered ahead of schedule with insane attention to detail. Our #1 development partner.", avatar: "PS", bg: "#5b21b6", acc: "#a78bfa" },
    { name: "Ankit Joshi", role: "Founder · Shopify India", quote: "They understood our vision immediately. The product exceeded every expectation.", avatar: "AJ", bg: "#065f46", acc: "#34d399" },
  ];

  const S = {
    lp: { fontFamily: "'Bricolage Grotesque',sans-serif", background: "#03070f", color: "#e2e8f0", overflowX: "hidden" },
    glass: { background: "rgba(255,255,255,0.03)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.07)" },
    glassStrong: { background: "rgba(255,255,255,0.06)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", border: "1px solid rgba(255,255,255,0.1)" },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,700&family=JetBrains+Mono:wght@300;400&display=swap');
        *{box-sizing:border-box;}
        .lp-h{font-family:'Clash Display',sans-serif;letter-spacing:-0.02em;}
        .mono{font-family:'JetBrains Mono',monospace;}
        .grad{background:linear-gradient(135deg,#67e8f9 0%,#a78bfa 45%,#f472b6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .grad-gold{background:linear-gradient(135deg,#fbbf24,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .grid-bg{background-image:linear-gradient(rgba(99,179,237,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(99,179,237,0.03)1px,transparent 1px);background-size:80px 80px;}
        .btn-glow{background:linear-gradient(135deg,#0891b2,#7c3aed);box-shadow:0 0 30px rgba(8,145,178,0.35),0 0 60px rgba(124,58,237,0.2);transition:all .3s ease;}
        .btn-glow:hover{box-shadow:0 0 50px rgba(8,145,178,0.6),0 0 90px rgba(124,58,237,0.35);transform:translateY(-2px);}
        .btn-out{border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);backdrop-filter:blur(10px);transition:all .3s ease;}
        .btn-out:hover{border-color:rgba(255,255,255,0.25);background:rgba(255,255,255,0.07);}
        .card-lift{transition:all .4s cubic-bezier(.34,1.56,.64,1);}
        .card-lift:hover{transform:translateY(-10px) scale(1.02);}
        @keyframes float-y{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulse-ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.8);opacity:0}}
        .pring::before{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid rgba(103,232,249,.5);animation:pulse-ring 2s ease-out infinite;}
        @keyframes rot{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .rot{animation:rot 20s linear infinite;}
        .rot-rev{animation:rot 30s linear infinite reverse;}
        .sline{height:1px;background:linear-gradient(90deg,transparent,rgba(103,232,249,.15),rgba(167,139,250,.2),transparent);}
        @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .ticker{animation:tick 25s linear infinite;display:flex;width:max-content;}
        .ticker-wrap{overflow:hidden;mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent);}
        @keyframes gp{0%,100%{opacity:.5}50%{opacity:1}}
        .gp{animation:gp 3s ease-in-out infinite;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#03070f}::-webkit-scrollbar-thumb{background:linear-gradient(#0891b2,#7c3aed);border-radius:2px}

        /* ── Hero layout ── */
        .hero-inner{
          position:relative; z-index:10;
          width:100%; max-width:1400px;
          margin:0 auto;
          padding:128px 64px;
        }
        .hero-grid{
          display:grid;
          grid-template-columns:1.1fr 0.9fr;
          gap:80px;
          align-items:center;
        }
        .hero-cta-row{display:flex;gap:16px;flex-wrap:wrap;}
        .hero-trust-row{display:flex;align-items:center;gap:16px;margin-top:48px;}

        /* ── Stats ── */
        .stats-inner{max-width:1400px;margin:0 auto;padding:0 64px;}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}

        /* ── About ── */
        .about-inner{max-width:1400px;margin:0 auto;padding:0 64px;position:relative;z-index:10;}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:center;}
        .features-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:32px;}

        /* ── Why choose / Testimonials ── */
        .section-inner{max-width:1400px;margin:0 auto;padding:0 64px;position:relative;z-index:10;}
        .cards-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .cards-3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-inner { padding: 96px 20px 72px; }
          .stats-inner { padding: 0 16px; }
          .about-inner { padding: 0 16px; }
          .section-inner { padding: 0 16px; }
          .hero-cta-row { flex-direction: column; gap: 12px; }
          .hero-cta-row button, .hero-cta-row > * { width: 100%; justify-content: center; }
          .hero-trust-row { flex-wrap: wrap; margin-top: 32px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid { gap: 32px; }
          .features-grid { grid-template-columns: 1fr; }
          .cards-3 { grid-template-columns: 1fr; }
          .about-hero-img-badges { display: none; } /* hide floating badges on small screens */
        }

        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .hero-ring { display: none; }
        }
      `}</style>

 

      <div style={S.lp}>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {videoOpen && (
            <motion.div style={{ position: "fixed", inset: 0, zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setVideoOpen(false)}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }} />
              <motion.div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 900, margin: "0 16px", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(103,232,249,0.2)", boxShadow: "0 0 100px rgba(8,145,178,0.3)" }}
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onClick={e => e.stopPropagation()}>
                <button onClick={() => setVideoOpen(false)}
                  style={{ position: "absolute", top: 16, right: 16, zIndex: 11, width: 40, height: 40, borderRadius: "50%", ...S.glass, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", cursor: "pointer", border: "none" }}>
                  <X size={18} />
                </button>
                <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg,#0f172a,#1e293b)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", ...S.glassStrong, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(103,232,249,0.3)" }}>
                    <Play size={28} color="#67e8f9" style={{ marginLeft: 4 }} />
                  </div>
                  <p className="mono" style={{ color: "rgba(148,163,184,0.6)", fontSize: 13 }}>// demo.mp4</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══ HERO ══ */}
        <section ref={heroRef} className="grid-bg" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <ParticleCanvas />
          <MorphBlob color="linear-gradient(135deg,#0891b2,#7c3aed)" size="700px" x="-15%" y="-20%" delay={0} />
          <MorphBlob color="linear-gradient(135deg,#7c3aed,#ec4899)" size="500px" x="55%" y="30%" delay={3} />
          <MorphBlob color="linear-gradient(135deg,#059669,#0891b2)" size="400px" x="10%" y="55%" delay={5} />

          {/* Rotating rings — hidden on mobile */}
          <div className="hero-ring" style={{ position: "absolute", right: "8%", top: "15%", width: 280, height: 280, opacity: 0.08, pointerEvents: "none" }}>
            <div className="rot" style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid rgba(103,232,249,0.8)", borderTop: "2px solid #67e8f9" }} />
            <div className="rot-rev" style={{ position: "absolute", inset: 24, borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.5)" }} />
            <div className="rot" style={{ position: "absolute", inset: 56, borderRadius: "50%", border: "1px solid rgba(52,211,153,0.4)", animationDuration: "15s" }} />
          </div>

          <motion.div className="hero-inner" style={{ y: heroY, scale: heroScale }}>
            <div className="hero-grid">

              {/* LEFT */}
              <div>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={heroReady ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                  <span className="mono pring" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, color: "#67e8f9", padding: "8px 16px", borderRadius: 999, background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", marginBottom: 32 }}>
                    <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#67e8f9", flexShrink: 0 }} />
                    Since 2011 · Web & IT Solutions
                  </span>
                </motion.div>

                {["Transform", "Ideas Into"].map((line, i) => (
                  <div key={i} style={{ overflow: "hidden", marginBottom: 4 }}>
                    <motion.h1 className="lp-h" style={{ fontSize: "clamp(2.4rem,6vw,5.5rem)", fontWeight: 700, lineHeight: 0.95, color: i === 1 ? "transparent" : "white", background: i === 1 ? "linear-gradient(135deg,#67e8f9,#a78bfa,#f472b6)" : undefined, WebkitBackgroundClip: i === 1 ? "text" : undefined, WebkitTextFillColor: i === 1 ? "transparent" : undefined, backgroundClip: i === 1 ? "text" : undefined, margin: 0 }}
                      initial={{ y: 100, opacity: 0 }} animate={heroReady ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}>
                      {line}
                    </motion.h1>
                  </div>
                ))}
                <div style={{ overflow: "hidden", marginBottom: 24 }}>
                  <motion.h1 className="lp-h" style={{ fontSize: "clamp(2.4rem,6vw,5.5rem)", fontWeight: 700, lineHeight: 0.95, color: "white", margin: 0 }}
                    initial={{ y: 100, opacity: 0 }} animate={heroReady ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}>
                    <ScrambleText text="Digital Reality" trigger={heroReady} />
                  </motion.h1>
                </div>

                <motion.p style={{ color: "#94a3b8", fontSize: "clamp(14px,1.5vw,18px)", lineHeight: 1.7, maxWidth: 520, marginBottom: 40 }}
                  initial={{ opacity: 0, y: 30 }} animate={heroReady ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
                  Purple Techno-Vision LLP engineers next-generation web software and digital transformation solutions that turn ambitious ideas into products millions love.
                </motion.p>

                <motion.div className="hero-cta-row"
                  initial={{ opacity: 0, y: 20 }} animate={heroReady ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.65 }}>
                  <button className="btn-glow" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 32px", borderRadius: 16, color: "white", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
                    Start Building
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight size={18} />
                    </motion.span>
                  </button>
                  <button className="btn-out" onClick={() => setVideoOpen(true)}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 32px", borderRadius: 16, color: "white", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Play size={13} color="#67e8f9" style={{ marginLeft: 2 }} />
                    </div>
                    Watch Demo
                  </button>
                </motion.div>

                <motion.div className="hero-trust-row"
                  initial={{ opacity: 0 }} animate={heroReady ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.85 }}>
                  <div style={{ display: "flex", marginRight: 8 }}>
                    {["#0891b2", "#7c3aed", "#059669", "#d97706"].map((c, i) => (
                      <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", background: c, border: "2px solid #03070f", marginLeft: i ? -12 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", fontFamily: "'Clash Display',sans-serif" }}>
                        {["RK", "PA", "NJ", "SM"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} color="#fbbf24" fill="#fbbf24" />)}
                    </div>
                    <p className="mono" style={{ fontSize: 11, color: "#64748b" }}>500+ clients trust us</p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — hero image, hidden on mobile via grid collapsing to 1 col */}
              <motion.div style={{ perspective: 1200 }}
                initial={{ opacity: 0, x: 80 }} animate={heroReady ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
                <TiltCard>
                  <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(103,232,249,0.12)", boxShadow: "0 40px 120px rgba(8,145,178,0.15)" }}>
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                      alt="Team" style={{ width: "100%", objectFit: "cover", aspectRatio: "4/3", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(3,7,15,0.7),transparent 60%)" }} />
                    <div className="about-hero-img-badges">
                      <motion.div style={{ position: "absolute", bottom: 20, left: 20, ...S.glassStrong, borderRadius: 16, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, animation: "float-y 4s ease-in-out infinite" }}>
                        <div style={{ width: 36, height: 36, borderRadius: 12, background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <TrendingUp size={16} color="#34d399" />
                        </div>
                        <div>
                          <p className="mono" style={{ fontSize: 10, color: "#94a3b8", marginBottom: 2 }}>Projects Delivered</p>
                          <p className="lp-h" style={{ fontWeight: 700, color: "white", fontSize: 14, margin: 0 }}>1,200+ 🚀</p>
                        </div>
                      </motion.div>
                      <motion.div style={{ position: "absolute", top: 20, right: 20, ...S.glassStrong, borderRadius: 16, padding: "12px 16px", animation: "float-y 5s ease-in-out infinite 1.5s" }}>
                        <p className="mono" style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Client Satisfaction</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          {[...Array(5)].map((_, i) => <Star key={i} size={11} color="#fbbf24" fill="#fbbf24" />)}
                          <span className="lp-h" style={{ color: "white", fontWeight: 700, fontSize: 14 }}>4.9</span>
                        </div>
                      </motion.div>
                      <motion.div style={{ position: "absolute", top: 20, left: 20, ...S.glass, borderRadius: 12, padding: "8px 12px", animation: "float-y 6s ease-in-out infinite 2s" }}>
                        <p className="mono" style={{ fontSize: 10, color: "#67e8f9", margin: 0 }}>{'> npm run build'}</p>
                        <p className="mono" style={{ fontSize: 10, color: "#34d399", margin: 0 }}>{'✓ Compiled in 0.8s'}</p>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

            </div>
          </motion.div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom,transparent,#03070f)", pointerEvents: "none", zIndex: 10 }} />
        </section>

        {/* ══ TICKER ══ */}
        <div style={{ padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="ticker-wrap">
            <div className="ticker">
              {[...Array(4)].flatMap(() => ["Web Development", "Cloud Solutions", "Mobile Apps", "UI/UX Design", "IT Consulting", "Cybersecurity", "Data Engineering", "DevOps", "AI Integration", "Digital Strategy"].map((s, i) => (
                <span key={i} className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 11, color: "#475569", padding: "0 32px", letterSpacing: 3 }}>
                  <Sparkles size={10} color="#0e7490" /> {s.toUpperCase()}
                </span>
              )))}
            </div>
          </div>
        </div>

        {/* ══ STATS ══ */}
        <section style={{ padding: "96px 0", position: "relative" }}>
          <div className="stats-inner">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <Rev key={i} delay={i * 0.1}>
                  <div className="card-lift" style={{ ...S.glassStrong, borderRadius: 24, padding: "clamp(18px,3vw,28px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <s.icon size={22} color="#67e8f9" style={{ margin: "0 auto 16px", opacity: 0.8 }} />
                    <h3 className="lp-h grad-gold" style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, margin: "0 0 4px" }}>
                      <Counter end={s.n} suffix={s.s} />
                    </h3>
                    <p className="mono" style={{ fontSize: 11, color: "#64748b", margin: 0 }}>{s.label}</p>
                  </div>
                </Rev>
              ))}
            </div>
          </div>
        </section>

        <div className="sline" />

        {/* ══ ABOUT ══ */}
        <section style={{ padding: "112px 0", position: "relative", overflow: "hidden" }}>
          <MorphBlob color="linear-gradient(135deg,#7c3aed,#0891b2)" size="600px" x="50%" y="-10%" delay={2} />
          <div className="about-inner">
            <div className="about-grid">
              <Rev>
                <div style={{ position: "relative" }}>
                  <div className="gp" style={{ position: "absolute", inset: -1, borderRadius: 24, background: "linear-gradient(135deg,rgba(8,145,178,0.3),rgba(124,58,237,0.2))", filter: "blur(1px)" }} />
                  <TiltCard>
                    <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(103,232,249,0.1)" }}>
                      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80" alt="About" style={{ width: "100%", objectFit: "cover", aspectRatio: "4/3", display: "block" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(3,7,15,0.4),transparent)" }} />
                    </div>
                  </TiltCard>
                  <div style={{ position: "absolute", bottom: -20, right: -20, width: 64, height: 64, borderRadius: 16, ...S.glassStrong, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(103,232,249,0.2)", boxShadow: "0 0 30px rgba(8,145,178,0.3)" }}>
                    <Zap size={24} color="#67e8f9" />
                  </div>
                  <div style={{ position: "absolute", top: -20, left: -20, ...S.glassStrong, borderRadius: 16, padding: "16px 20px", textAlign: "center", border: "1px solid rgba(167,139,250,0.2)" }}>
                    <p className="lp-h grad" style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>14</p>
                    <p className="mono" style={{ fontSize: 10, color: "#64748b", margin: 0 }}>Years</p>
                  </div>
                </div>
              </Rev>

              <div>
                <Rev delay={0}><span className="mono" style={{ fontSize: 11, color: "#67e8f9", letterSpacing: 4 }}>// ABOUT_US</span></Rev>
                <Rev delay={0.1}>
                  <h2 className="lp-h" style={{ fontSize: "clamp(2rem,4vw,3.8rem)", fontWeight: 700, color: "white", marginTop: 16, lineHeight: 1.1 }}>
                    Building Reliable<br />
                    <span className="grad">Digital Solutions</span><br />
                    Since 2011
                  </h2>
                </Rev>
                <Rev delay={0.2}><p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "clamp(14px,1.5vw,17px)", marginTop: 24 }}>Purple Techno-Vision LLP is a fast-growing Web & IT Development company delivering reliable, scalable, and cost-effective solutions for businesses across India and the world.</p></Rev>
                <Rev delay={0.3}><p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 16, fontSize: "clamp(13px,1.3vw,15px)" }}>With a dedicated team of experts and a track record of 500+ clients, we help organizations achieve goals through innovative software and digital transformation.</p></Rev>

                <div className="features-grid">
                  {["Custom Web Development", "Enterprise Solutions", "Dedicated Support 24/7", "Global Client Base", "Cloud Architecture", "Agile Delivery"].map((f, i) => (
                    <Rev key={i} delay={0.35 + i * 0.05}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px", borderRadius: 14, ...S.glass }}>
                        <CheckCircle size={15} color="#34d399" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "clamp(12px,1.2vw,13px)", color: "#cbd5e1" }}>{f}</span>
                      </div>
                    </Rev>
                  ))}
                </div>

                <Rev delay={0.6}>
                  <button className="btn-glow" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 32px", borderRadius: 16, color: "white", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", marginTop: 40 }}>
                    Explore Services <ChevronRight size={18} />
                  </button>
                </Rev>
              </div>
            </div>
          </div>
        </section>

        <div className="sline" />

        {/* ══ WHY CHOOSE US ══ */}
        <section style={{ padding: "112px 0", position: "relative", overflow: "hidden" }}>
          <div className="section-inner">
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <Rev><span className="mono" style={{ fontSize: 11, color: "#a78bfa", letterSpacing: 4 }}>// WHY_CHOOSE_US</span></Rev>
              <Rev delay={0.1}><h2 className="lp-h" style={{ fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 700, color: "white", marginTop: 16 }}>The Edge We<br /><span className="grad">Bring You</span></h2></Rev>
              <Rev delay={0.2}><p style={{ color: "#94a3b8", marginTop: 20, maxWidth: 480, margin: "20px auto 0", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.7 }}>Innovation, precision and relentless execution — three pillars that make us the most trusted tech partner.</p></Rev>
            </div>
            <div className="cards-3">
              {cards.map((c, i) => (
                <Rev key={i} delay={i * 0.12}>
                  <TiltCard className="h-full">
                    <div className="card-lift" style={{ ...S.glassStrong, borderRadius: 24, padding: "clamp(20px,3vw,32px)", height: "100%", position: "relative", overflow: "hidden", border: `1px solid ${c.color}22` }}>
                      <div style={{ position: "absolute", top: 0, left: 0, width: 200, height: 200, background: `radial-gradient(circle at 30% 30%,${c.glow},transparent 70%)`, pointerEvents: "none" }} />
                      <div style={{ position: "relative", width: 64, height: 64, marginBottom: 32 }}>
                        <div className="gp" style={{ position: "absolute", inset: 0, borderRadius: 16, background: c.glow, opacity: 0.5 }} />
                        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 16, background: `${c.color}15`, border: `1px solid ${c.color}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <c.icon size={28} color={c.color} />
                        </div>
                      </div>
                      <h3 className="lp-h" style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, color: "white", marginBottom: 16 }}>{c.title}</h3>
                      <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 24, fontSize: "clamp(13px,1.3vw,15px)" }}>{c.desc}</p>
                      <button className="mono" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: c.color, background: "none", border: "none", cursor: "pointer" }}>
                        Learn more <ArrowRight size={14} />
                      </button>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${c.color}40,transparent)` }} />
                    </div>
                  </TiltCard>
                </Rev>
              ))}
            </div>
          </div>
        </section>

        <div className="sline" />

        {/* ══ TESTIMONIALS ══ */}
        <section style={{ padding: "112px 0", position: "relative", overflow: "hidden" }}>
          <MorphBlob color="linear-gradient(135deg,#059669,#7c3aed)" size="500px" x="-10%" y="20%" delay={4} />
          <div className="section-inner">
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <Rev><span className="mono" style={{ fontSize: 11, color: "#34d399", letterSpacing: 4 }}>// TESTIMONIALS</span></Rev>
              <Rev delay={0.1}><h2 className="lp-h" style={{ fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 700, color: "white", marginTop: 16 }}>Loved by<br /><span className="grad">Our Clients</span></h2></Rev>
            </div>
            <div className="cards-3">
              {testimonials.map((t, i) => (
                <Rev key={i} delay={i * 0.12}>
                  <TiltCard className="h-full">
                    <div className="card-lift" style={{ ...S.glassStrong, borderRadius: 24, padding: "clamp(20px,3vw,32px)", height: "100%", position: "relative", overflow: "hidden" }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                        {[...Array(5)].map((_, j) => <Star key={j} size={14} color="#fbbf24" fill="#fbbf24" />)}
                      </div>
                      <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "clamp(13px,1.3vw,15px)", fontStyle: "italic", marginBottom: 32 }}>"{t.quote}"</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div className="lp-h" style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg,${t.bg},${t.acc})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "white", fontSize: 13, flexShrink: 0 }}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="lp-h" style={{ fontWeight: 700, color: "white", fontSize: 15, margin: 0 }}>{t.name}</p>
                          <p className="mono" style={{ fontSize: 11, color: "#64748b", margin: 0 }}>{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Rev>
              ))}
            </div>
          </div>
        </section>

        <CoreValues />
        <Features />
        <Infosections />

      </div>
    </>
  );
}