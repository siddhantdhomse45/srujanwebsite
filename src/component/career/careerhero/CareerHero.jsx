import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoBriefcaseOutline } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { TbBrandReact } from "react-icons/tb";

/* ─── BREAKPOINT HOOK ─── */
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    return w < 480 ? "mobile" : w < 768 ? "tablet-sm" : w < 1024 ? "tablet" : "desktop";
  });
  useEffect(() => {
    const fn = () => {
      const w = window.innerWidth;
      setBp(w < 480 ? "mobile" : w < 768 ? "tablet-sm" : w < 1024 ? "tablet" : "desktop");
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return bp;
}

/* ─── PARTICLE CANVAS ─── */
const Particles = ({ isMobile }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const count = isMobile ? 28 : 60;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.4 + .3, a: Math.random() * .4 + .08,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(56,189,248,${.08 * (1 - d / 130)})`;
          ctx.lineWidth = .5; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [isMobile]);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }} />;
};

/* ─── FLOATING BLOB ─── */
const Blob = ({ color, size, top, left, delay = 0 }) => (
  <motion.div
    style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(80px)", opacity: 0.15, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents: "none", zIndex: 1 }}
    animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/40% 50% 60% 50%", "60% 40% 30% 70%/60% 30% 70% 40%"], scale: [1, 1.15, 1] }}
    transition={{ duration: 12 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ─── SCRAMBLE TEXT ─── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const useScramble = (text, trigger, delay = 0) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    const timeout = setTimeout(() => {
      let frame = 0; const total = 22;
      const iv = setInterval(() => {
        frame++;
        setDisplay(text.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (frame / total > i / text.length) return ch;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(""));
        if (frame >= total) clearInterval(iv);
      }, 38);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger, text, delay]);
  return display;
};

/* ─── STAT COUNTER ─── */
const Counter = ({ end, suffix = "", duration = 1800 }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let s = 0, id;
    const step = () => { s += end / (duration / 16); if (s >= end) { setN(end); return; } setN(Math.floor(s)); id = requestAnimationFrame(step); };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [started, end, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
};

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const CareerHero = () => {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile" || bp === "tablet-sm";
  const isTablet = bp === "tablet";

  const [ready, setReady] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 80 : 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t); }, []);

  const line1 = useScramble("Shape Your", ready, 300);
  const line2 = useScramble("Career With Us", ready, 600);

  const px = isMobile ? "20px" : isTablet ? "36px" : "clamp(24px,6vw,80px)";

  // Updated color variables (blue/cyan/purple palette)
  const primaryColor = "#3b82f6";
  const primaryLight = "#60a5fa";
  const primaryDark = "#2563eb";
  const accentColor = "#38bdf8";
  const purpleAccent = "#8b5cf6";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .ch-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
        .ch-serif { font-family: 'Cormorant Garamond', serif; }
        .ch-mono  { font-family: 'Space Mono', monospace; }

        .ch-glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .ch-glass-blue {
          background: rgba(59,130,246,0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(59,130,246,0.2);
        }

        .ch-btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; color: #fff;
          border-radius: 14px;
          box-shadow: 0 0 28px rgba(59,130,246,0.35), 0 4px 20px rgba(0,0,0,0.3);
          transition: all .3s ease;
          letter-spacing: 0.01em;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .ch-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 48px rgba(59,130,246,0.55), 0 8px 32px rgba(0,0,0,0.3);
        }
        .ch-btn-ghost {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500; color: rgba(255,255,255,0.8);
          borderRadius: 14px;
          transition: all .3s ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .ch-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.28);
          color: #fff;
        }

        .ch-stat-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease;
        }
        .ch-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.1);
        }

        .ch-chip {
          font-family: 'Space Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 7px 14px; border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.45);
          cursor: default;
          transition: all .25s ease;
          white-space: nowrap;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .ch-chip:hover {
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.3);
          color: #60a5fa;
        }

        .chip-scroll {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .chip-scroll {
            flex-wrap: nowrap; overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; padding-bottom: 4px;
          }
          .chip-scroll::-webkit-scrollbar { display: none; }
        }

        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
        }
        .badge-pulse { animation: badge-pulse 2.5s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .float-slow { animation: float-slow 5s ease-in-out infinite; }
        .float-slow-2 { animation: float-slow 7s ease-in-out 1.5s infinite; }

        @keyframes shimmer-move {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(96,165,250,0.9) 40%, rgba(255,255,255,0.4) 80%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-move 3.5s linear infinite;
        }

        .scroll-hint {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px; z-index: 10;
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: .6; }
          50% { transform: translateY(8px) scaleY(.85); opacity: 1; }
        }
        .scroll-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.4); animation: scroll-bounce 1.6s ease-in-out infinite; }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.25), rgba(255,255,255,0.1), transparent);
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060d0a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#3b82f6, #2563eb); border-radius: 2px; }
      `}</style>

      <div className="ch-wrap" style={{ background: "#060d0a", overflowX: "hidden" }}>
        <section ref={heroRef} style={{ position: "relative", minHeight: isMobile ? "100svh" : "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>

          {/* BG with parallax */}
          <motion.div style={{ position: "absolute", inset: "-20px", backgroundImage: "url('../../../assets/Careerback.jpg')", backgroundSize: "cover", backgroundPosition: "center", y: bgY, zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,13,10,0.92) 0%, rgba(6,13,10,0.78) 50%, rgba(6,13,10,0.92) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(56,189,248,0.08) 0%, transparent 60%)" }} />
          </motion.div>

          {/* Blobs with new colors */}
          <Blob color="radial-gradient(circle, #3b82f6, #1e40af)" size={isMobile ? "300px" : "600px"} top="-10%" left="-8%" delay={0} />
          <Blob color="radial-gradient(circle, #1e3a8a, #0c1a3a)" size={isMobile ? "250px" : "500px"} top="40%" left="65%" delay={3} />
          <Blob color="radial-gradient(circle, #38bdf8, #0ea5e9)" size={isMobile ? "180px" : "350px"} top="65%" left="5%" delay={5} />

          <Particles isMobile={isMobile} />

          {/* Watermark — hidden on mobile */}
          {!isMobile && (
            <div className="ch-serif" style={{ position: "absolute", right: "-2%", bottom: "-2%", fontSize: "clamp(160px,22vw,320px)", fontWeight: 400, color: "rgba(59,130,246,0.025)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em", zIndex: 1 }}>
              SRUJAN
            </div>
          )}

          {/* Floating card top-right — hidden on mobile */}
          {!isMobile && (
            <motion.div
              className="ch-glass float-slow"
              style={{ position: "absolute", top: "12%", right: "6%", borderRadius: 20, padding: "18px 22px", zIndex: 5, maxWidth: 200 }}
              initial={{ opacity: 0, x: 40 }} animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: primaryLight, flexShrink: 0 }} className="badge-pulse" />
                <span className="ch-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Now Hiring</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IoBriefcaseOutline size={18} color={primaryLight} />
                <p className="ch-serif" style={{ fontSize: 22, fontWeight: 400, color: "#fff", margin: 0 }}>50+</p>
              </div>
              <p className="ch-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", textTransform: "uppercase", letterSpacing: "0.15em" }}>Open Positions</p>
            </motion.div>
          )}

          {/* Floating card bottom-right — hidden on mobile */}
          {!isMobile && (
            <motion.div
              className="ch-glass-blue float-slow-2"
              style={{ position: "absolute", bottom: "18%", right: "8%", borderRadius: 16, padding: "14px 18px", zIndex: 5 }}
              initial={{ opacity: 0, x: 40 }} animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <HiOutlineGlobeAlt size={22} color={primaryLight} />
                <div>
                  <p className="ch-mono" style={{ fontSize: 9, color: primaryLight, margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>Remote Friendly</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: "3px 0 0", fontWeight: 500 }}>Work from anywhere</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── MAIN CONTENT ── */}
          <motion.div
            style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1200, margin: "0 auto", padding: `${isMobile ? "88px" : "clamp(80px,10vh,120px)"} ${px} ${isMobile ? "72px" : "80px"}`, y: contentY, opacity }}>

            {/* Eyebrow badge */}
            <motion.div initial={{ opacity: 0, y: -16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
              <div className="ch-glass" style={{ borderRadius: 999, padding: "8px 18px 8px 10px", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 24 : 32 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: primaryLight }} className="badge-pulse" />
                </div>
                <span className="ch-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Srujan &nbsp;·&nbsp; Careers</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div style={{ overflow: "hidden", marginBottom: 6 }}>
              <motion.h1 className="ch-serif"
                style={{ fontSize: isMobile ? "clamp(2.6rem,11vw,3.6rem)" : "clamp(3.2rem,7.5vw,7rem)", fontWeight: 400, color: primaryLight, lineHeight: 0.97, margin: 0 }}
                initial={{ y: 110, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                {line1}
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: isMobile ? 20 : 32 }}>
              <motion.h1 className="ch-serif shimmer-text"
                style={{ fontSize: isMobile ? "clamp(2.6rem,11vw,3.6rem)" : "clamp(3.2rem,7.5vw,7rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 0.97, margin: 0 }}
                initial={{ y: 110, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                {line2}
              </motion.h1>
            </div>

            {/* Body copy */}
            <motion.p
              style={{ color: "rgba(255,255,255,0.62)", fontSize: isMobile ? "0.95rem" : "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.85, maxWidth: 600, marginBottom: isMobile ? 32 : 44 }}
              initial={{ opacity: 0, y: 28 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              At Srujan, we believe that people are our greatest asset. Our mission is driven by passionate, curious, and forward-thinking individuals who are ready to challenge the status quo — whether you're a developer, designer, strategist, or support specialist.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: isMobile ? 36 : 52 }}
              initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}>
              <button className="ch-btn-primary" style={{ fontSize: isMobile ? 14 : 15, padding: isMobile ? "13px 24px" : "15px 36px", flex: isMobile ? "1 1 auto" : "0 0 auto" }}>
                <IoBriefcaseOutline size={16} />
                Explore Open Roles
                <BsArrowRight size={14} />
              </button>
              <button className="ch-btn-ghost" style={{ fontSize: isMobile ? 14 : 15, padding: isMobile ? "13px 20px" : "15px 36px", flex: isMobile ? "1 1 auto" : "0 0 auto" }}>
                <BsStars size={14} />
                Our Culture &amp; Values
              </button>
            </motion.div>

            {/* Mobile: inline floating stats row before divider */}
            {isMobile && (
              <motion.div
                style={{ display: "flex", gap: 10, marginBottom: 28 }}
                initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.8 }}>
                <div className="ch-glass-blue" style={{ borderRadius: 14, padding: "12px 14px", flex: 1, textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 4 }}>
                    <IoBriefcaseOutline size={13} color={primaryLight} />
                    <span className="ch-serif" style={{ fontSize: 22, color: primaryLight, lineHeight: 1 }}>50+</span>
                  </div>
                  <p className="ch-mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.38)", margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>Openings</p>
                </div>
                <div className="ch-glass-blue" style={{ borderRadius: 14, padding: "12px 14px", flex: 1, textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 4 }}>
                    <HiOutlineGlobeAlt size={13} color={primaryLight} />
                    <span className="ch-serif" style={{ fontSize: 22, color: primaryLight, lineHeight: 1 }}>14+</span>
                  </div>
                  <p className="ch-mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.38)", margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>Yrs Growing</p>
                </div>
              </motion.div>
            )}

            {/* Divider */}
            <motion.div className="divider-line" style={{ marginBottom: isMobile ? 24 : 36, maxWidth: 640 }}
              initial={{ scaleX: 0, opacity: 0 }} animate={ready ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }} />

            {/* Role chips — scrollable on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.95 }}
              style={{ marginBottom: isMobile ? 28 : 48 }}>
              <div className="chip-scroll">
                {["Engineering", "Design", "Product", "Sales", "Marketing", "Operations"].map((c, i) => (
                  <motion.button key={c} className="ch-chip"
                    initial={{ opacity: 0, scale: 0.85 }} animate={ready ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.07 }}>
                    <TbBrandReact size={11} style={{ opacity: 0.6 }} />
                    {c}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(auto-fit, minmax(130px, 1fr))",
                gap: isMobile ? 10 : 14,
                maxWidth: 640,
              }}
              initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}>
              {[
                { n: 5, s: "+", label: "Open Roles", icon: <IoBriefcaseOutline size={14} color={primaryLight} /> },
                { n: 20, s: "+", label: "Team Members", icon: <BsStars size={13} color={primaryLight} /> },
                { n: 14, s: "+", label: "Years Growing", icon: <HiOutlineGlobeAlt size={14} color={primaryLight} /> },
                { n: 98, s: "%", label: "Retention", icon: <TbBrandReact size={14} color={primaryLight} /> },
              ].map((st, i) => (
                <div key={i} className="ch-stat-card ch-glass" style={{ borderRadius: isMobile ? 14 : 16, padding: isMobile ? "14px 12px" : "18px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    {st.icon}
                    <p className="ch-serif" style={{ fontSize: isMobile ? 26 : 30, fontWeight: 400, color: primaryLight, margin: 0, lineHeight: 1 }}>
                      <Counter end={st.n} suffix={st.s} />
                    </p>
                  </div>
                  <p className="ch-mono" style={{ fontSize: isMobile ? 8 : 9, color: "rgba(255,255,255,0.38)", margin: 0, textTransform: "uppercase", letterSpacing: "0.18em" }}>{st.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

         
        </section>
      </div>
    </>
  );
};

export default CareerHero;