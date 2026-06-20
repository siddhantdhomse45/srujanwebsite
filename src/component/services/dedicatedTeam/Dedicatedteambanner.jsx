import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiStar, FiUsers, FiExternalLink } from "react-icons/fi";

const PARTICLES_COUNT = 40;

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = c.offsetWidth;
    let H = c.height = c.offsetHeight;
    const pts = Array.from({ length: PARTICLES_COUNT }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3, a: Math.random() * 0.3 + 0.05,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(96,165,250,${0.06 * (1 - d / 100)})`;
          ctx.lineWidth = 0.4; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 3,
    }} />
  );
}

export default function DedicatedTeamBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .dtb { font-family: 'Inter', sans-serif; }
        .dtb *, .dtb *::before, .dtb *::after { box-sizing: border-box; }

        .dtb {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #020b18;
        }

        /* ── BG photo ── */
        .dtb-bg {
          position: absolute;
          inset: -30px;
          background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80');
          background-size: cover;
          background-position: center top;
          will-change: transform;
          z-index: 0;
        }

        /* ── overlays ── */
        .dtb-overlay-dark {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            105deg,
            rgba(2,11,24,0.92) 0%,
            rgba(2,11,24,0.80) 45%,
            rgba(2,11,24,0.45) 100%
          );
        }
        .dtb-overlay-blue {
          position: absolute; inset: 0; z-index: 2;
          background: radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.18) 0%, transparent 60%);
        }

        /* grid pattern */
        .dtb-grid {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        /* ── content ── */
        .dtb-content {
          position: relative; z-index: 10;
          width: 100%; max-width: 1200px;
          margin: 0 auto;
          padding: 0 56px;
        }

        /* eyebrow */
        .dtb-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.28);
          border-radius: 999px; padding: 6px 16px;
          margin-bottom: 28px;
        }
        .dtb-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.9);
          animation: dtb-pulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes dtb-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
        }
        .dtb-eyebrow span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa;
          margin: 0; padding: 0;
        }

        /* headline */
        .dtb-title {
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 900;
          color: #f0f8ff;
          line-height: 1.03;
          letter-spacing: -2px;
          margin: 0 0 6px; padding: 0;
          max-width: 720px;
        }
        .dtb-title-blue {
          background: linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* animated underline */
        .dtb-underline {
          width: 100px; height: 3px; border-radius: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa, transparent);
          margin: 16px 0 32px;
        }

        /* body copy */
        .dtb-desc {
          font-size: clamp(15px, 1.4vw, 18px);
          color: rgba(186,210,255,0.6);
          line-height: 1.85; max-width: 560px;
          font-weight: 400;
          margin: 0 0 44px; padding: 0;
        }

        /* CTA row */
        .dtb-cta {
          display: flex; gap: 14px; flex-wrap: wrap;
          align-items: center; margin: 0; padding: 0;
        }
        .dtb-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border: none; cursor: pointer; color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 15px 32px; border-radius: 10px;
          box-shadow: 0 0 32px rgba(37,99,235,0.45), 0 4px 20px rgba(0,0,0,0.4);
          transition: all .3s ease;
          margin: 0;
        }
        .dtb-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 56px rgba(37,99,235,0.65), 0 10px 30px rgba(0,0,0,0.4);
        }
        .dtb-btn-ghost {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(59,130,246,0.06);
          border: 1.5px solid rgba(59,130,246,0.35);
          cursor: pointer; color: rgba(147,197,253,0.9);
          font-family: 'Inter', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 15px 32px; border-radius: 10px;
          transition: all .3s ease;
          margin: 0;
        }
        .dtb-btn-ghost:hover {
          background: rgba(59,130,246,0.14);
          border-color: rgba(59,130,246,0.6);
          color: #93c5fd;
          transform: translateY(-2px);
        }

        /* ── floating stat cards ── */
        .dtb-stat-card {
          position: absolute; z-index: 10;
          background: rgba(5,20,50,0.88);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 16px; padding: 16px 20px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.06);
        }
        .dtb-stat-icon {
          width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.22);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .dtb-stat-label {
          font-size: 10px; color: rgba(147,197,253,0.45);
          text-transform: uppercase; letter-spacing: 0.14em;
          font-weight: 600; margin: 0; padding: 0; line-height: 1;
        }
        .dtb-stat-val {
          font-size: 22px; font-weight: 800; color: #e0f0ff;
          line-height: 1; margin: 4px 0 0; padding: 0;
          background: linear-gradient(135deg, #93c5fd, #3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── scroll hint ── */
        .dtb-scroll-hint {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          z-index: 10;
        }
        .dtb-scroll-label {
          font-size: 9px; color: rgba(147,197,253,0.3);
          letter-spacing: 0.22em; text-transform: uppercase;
          margin: 0; padding: 0; font-family: 'Inter', monospace;
        }
        .dtb-scroll-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(59,130,246,0.45);
          animation: dtb-bounce 1.6s ease-in-out infinite;
        }
        @keyframes dtb-bounce {
          0%,100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        /* ── responsive ── */
        @media (max-width: 1023px) {
          .dtb-content { padding: 0 36px; }
          .dtb-stat-card { display: none; }
        }
        @media (max-width: 767px) {
          .dtb { min-height: 100svh; }
          .dtb-content { padding: 100px 20px 80px; }
          .dtb-title { font-size: clamp(30px, 8vw, 44px); letter-spacing: -1.2px; }
          .dtb-desc { font-size: 15px; margin-bottom: 36px; }
          .dtb-cta { flex-direction: column; gap: 12px; }
          .dtb-btn-primary, .dtb-btn-ghost { width: 100%; justify-content: center; }
          .dtb-scroll-hint { display: none; }
        }
        @media (max-width: 479px) {
          .dtb-content { padding: 90px 16px 72px; }
          .dtb-title { font-size: 28px; }
        }
      `}</style>

      <section className="dtb" ref={ref}>

        {/* BG photo with parallax */}
        <motion.div className="dtb-bg" style={{ y: bgY }} />

        {/* Overlays */}
        <div className="dtb-overlay-dark" />
        <div className="dtb-overlay-blue" />
        <div className="dtb-grid" />

        {/* Particles */}
        <Particles />

        {/* Floating stat cards — desktop only */}
        <motion.div
          className="dtb-stat-card"
          style={{ top: "18%", right: "7%" }}
          initial={{ opacity: 0, x: 30 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dtb-stat-icon"><FiBriefcase size={20} strokeWidth={1.8} /></div>
          <div>
            <p className="dtb-stat-label">Projects Delivered</p>
            <p className="dtb-stat-val">500+</p>
          </div>
        </motion.div>

        <motion.div
          className="dtb-stat-card"
          style={{ bottom: "22%", right: "10%" }}
          initial={{ opacity: 0, x: 30 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dtb-stat-icon"><FiStar size={20} strokeWidth={1.8} /></div>
          <div>
            <p className="dtb-stat-label">Client Satisfaction</p>
            <p className="dtb-stat-val">98%</p>
          </div>
        </motion.div>

        <motion.div
          className="dtb-stat-card"
          style={{ top: "55%", right: "5%" }}
          initial={{ opacity: 0, x: 30 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dtb-stat-icon"><FiUsers size={20} strokeWidth={1.8} /></div>
          <div>
            <p className="dtb-stat-label">Expert Engineers</p>
            <p className="dtb-stat-val">50+</p>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div className="dtb-content" style={{ y: contentY, opacity }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dtb-eyebrow">
              <div className="dtb-eyebrow-dot" />
              <span>Purple Techno-Vision LLP</span>
            </div>
          </motion.div>

          {/* Title */}
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              className="dtb-title"
              initial={{ y: 80, opacity: 0 }}
              animate={ready ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Dedicated
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              className="dtb-title"
              initial={{ y: 80, opacity: 0 }}
              animate={ready ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="dtb-title-blue">Development Team</span>
            </motion.h1>
          </div>

          {/* Animated underline */}
          <motion.div
            className="dtb-underline"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={ready ? { scaleX: 1, opacity: 1 } : {}}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Description */}
          <motion.p
            className="dtb-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            With a dedicated team of developers and architects bringing years of experience
            across various industries, we deliver scalable, secure, and future-ready solutions.
            Let's craft a software solution your customers will love and drive your company forward.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="dtb-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="dtb-btn-primary">
              Book a Free Consultation
              <FiArrowRight size={14} strokeWidth={2.5} />
            </button>
            <button className="dtb-btn-ghost">
              View Portfolio
              <FiExternalLink size={14} strokeWidth={2.5} />
            </button>
          </motion.div>

        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="dtb-scroll-hint"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <p className="dtb-scroll-label">Scroll</p>
          <div className="dtb-scroll-dot" />
        </motion.div>

      </section>
    </>
  );
}