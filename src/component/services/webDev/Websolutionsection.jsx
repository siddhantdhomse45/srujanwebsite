import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdOutlineSettings,
  MdOutlineDesignServices,
  MdOutlineSecurity,
  MdOutlineDevices,
  MdOutlineImage,
  MdOutlineSupportAgent,
} from "react-icons/md";

const features = [
  {
    Icon: MdOutlineSettings,
    title: "Custom Features",
    desc: "Engineered precisely for your workflow — every interaction and detail built to your exact specification.",
    accent: "#3b82f6",
  },
  {
    Icon: MdOutlineDesignServices,
    title: "Intuitive UI/UX Design",
    desc: "Visually sharp, accessible, and frictionless. Users feel right at home the moment they land.",
    accent: "#60a5fa",
  },
  {
    Icon: MdOutlineSecurity,
    title: "Scalability & Security",
    desc: "Architected to grow with you — and hardened against threats from day one.",
    accent: "#2563eb",
  },
  {
    Icon: MdOutlineDevices,
    title: "Responsive Design",
    desc: "Pixel-perfect on every screen. Mobile, tablet, desktop — one seamless experience.",
    accent: "#3b82f6",
  },
  {
    Icon: MdOutlineImage,
    title: "Professional Imagery",
    desc: "High-impact visuals curated to capture your brand's essence and stop the scroll.",
    accent: "#60a5fa",
  },
  {
    Icon: MdOutlineSupportAgent,
    title: "Ongoing Maintenance & Support",
    desc: "We don't ship and disappear. Continuous updates and dedicated support keep you ahead.",
    accent: "#2563eb",
  },
];

export default function WebSolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        /* ── ALL selectors scoped to .wss — zero global bleed ── */

        .wss {
          font-family: 'Inter', sans-serif;
          background: #020b18;
          padding: 120px 0 140px;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        .wss *, .wss *::before, .wss *::after {
          box-sizing: border-box;
        }

        .wss-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .wss-orb1 {
          position: absolute; top: -180px; left: -180px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .wss-orb2 {
          position: absolute; bottom: -120px; right: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%);
          filter: blur(90px); pointer-events: none; z-index: 0;
        }

        .wss-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
          z-index: 2;
        }

        /* ── eyebrow ── */
        .wss-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.28);
          border-radius: 999px; padding: 6px 16px; margin-bottom: 22px;
        }
        .wss-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.8);
          animation: wss-pulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes wss-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
        }
        .wss-eyebrow-text {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa;
          margin: 0; padding: 0;
        }

        /* ── heading ── */
        .wss-title {
          font-size: clamp(34px, 4.2vw, 58px);
          font-weight: 800; color: #f0f8ff;
          line-height: 1.06; letter-spacing: -1.5px;
          margin: 0 0 18px; padding: 0;
        }
        .wss-title-blue {
          background: linear-gradient(90deg, #60a5fa, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wss-subtitle {
          font-size: 16px; color: rgba(186,210,255,0.5);
          line-height: 1.85; max-width: 520px; font-weight: 400;
          margin: 0; padding: 0;
        }

        /* ── body grid ── */
        .wss-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start; margin-top: 72px;
        }

        /* ── browser mockup ── */
        .wss-device-wrap { position: relative; }
        .wss-device-outer {
          border-radius: 18px; overflow: hidden;
          background: #071629;
          border: 1px solid rgba(59,130,246,0.15);
          box-shadow:
            0 0 0 1px rgba(59,130,246,0.06),
            0 32px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(37,99,235,0.12);
        }
        .wss-browser-bar {
          display: flex; align-items: center; gap: 8px;
          padding: 11px 16px;
          background: #0a1f3d;
          border-bottom: 1px solid rgba(59,130,246,0.1);
          margin: 0;
        }
        .wss-traffic { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .wss-url-bar {
          flex: 1; background: rgba(59,130,246,0.06);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 6px; padding: 5px 12px;
          font-size: 11px; color: rgba(147,197,253,0.4);
          letter-spacing: 0.02em; font-family: 'Inter', monospace;
          margin: 0;
        }
        .wss-screen { position: relative; height: 300px; overflow: hidden; }
        .wss-screen img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          margin: 0; padding: 0;
        }
        .wss-screen-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(2,11,24,0) 30%, rgba(2,11,24,0.6) 100%);
        }
        .wss-screen-topglow {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent);
          opacity: 0.7; z-index: 1;
        }

        /* ── floating badges ── */
        .wss-badge {
          position: absolute;
          background: rgba(5,20,50,0.92);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 14px; padding: 11px 15px;
          display: flex; align-items: center; gap: 10px;
        }
        .wss-badge-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0;
        }
        .wss-badge-label {
          font-size: 9px; color: rgba(147,197,253,0.5);
          text-transform: uppercase; letter-spacing: 0.14em;
          font-weight: 600; line-height: 1;
          margin: 0; padding: 0;
        }
        .wss-badge-value {
          font-size: 19px; font-weight: 800; color: #e0f0ff;
          line-height: 1; margin: 3px 0 0; padding: 0;
        }

        /* ── features list ── */
        .wss-features { display: flex; flex-direction: column; gap: 4px; }
        .wss-feature {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 15px 16px; border-radius: 12px;
          border: 1px solid transparent;
          background: transparent;
          transition: background 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .wss-feature:hover {
          background: rgba(59,130,246,0.05);
          border-color: rgba(59,130,246,0.14);
        }
        .wss-feat-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .wss-feature:hover .wss-feat-icon {
          background: rgba(59,130,246,0.18);
          transform: scale(1.08) rotate(-3deg);
        }
        .wss-feat-title {
          font-size: 14px; font-weight: 700; color: #dbeafe;
          line-height: 1; margin: 0 0 5px; padding: 0; letter-spacing: -0.1px;
        }
        .wss-feat-desc {
          font-size: 13px; color: rgba(147,197,253,0.45);
          line-height: 1.65; font-weight: 400;
          margin: 0; padding: 0;
        }

        /* ── CTA row ── */
        .wss-cta-row {
          display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap;
          padding: 0;
        }
        .wss-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border: none; cursor: pointer; color: #fff;
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px;
          padding: 13px 28px; border-radius: 11px; letter-spacing: 0.01em;
          box-shadow: 0 0 30px rgba(37,99,235,0.4), 0 4px 20px rgba(0,0,0,0.4);
          transition: all .3s ease; margin: 0;
        }
        .wss-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 50px rgba(37,99,235,0.6), 0 8px 30px rgba(0,0,0,0.4);
        }
        .wss-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.06);
          border: 1px solid rgba(59,130,246,0.2);
          cursor: pointer; color: rgba(147,197,253,0.75);
          font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;
          padding: 13px 24px; border-radius: 11px;
          transition: all .3s ease; margin: 0;
        }
        .wss-btn-ghost:hover {
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.35);
          color: #93c5fd;
        }

        /* ── responsive ── */
        @media (max-width: 1023px) {
          .wss { padding: 88px 0 100px; }
          .wss-inner { padding: 0 36px; }
          .wss-body { gap: 52px; }
        }
        @media (max-width: 767px) {
          .wss { padding: 64px 0 80px; }
          .wss-inner { padding: 0 20px; }
          .wss-body { grid-template-columns: 1fr; gap: 44px; margin-top: 52px; }
          .wss-title { font-size: 30px; letter-spacing: -1px; }
          .wss-subtitle { font-size: 15px; }
          .wss-screen { height: 200px; }
          .wss-badge { display: none !important; }
          .wss-cta-row { flex-direction: column; }
          .wss-btn-primary, .wss-btn-ghost { justify-content: center; width: 100%; }
        }
        @media (max-width: 479px) {
          .wss-inner { padding: 0 16px; }
          .wss-title { font-size: 26px; }
          .wss-feature { padding: 13px 12px; }
          .wss-feat-icon { width: 34px; height: 34px; }
        }
      `}</style>

      <section className="wss" ref={ref}>
        <div className="wss-grid" />
        <div className="wss-orb1" />
        <div className="wss-orb2" />

        <div className="wss-inner">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wss-eyebrow">
              <div className="wss-eyebrow-dot" />
              <span className="wss-eyebrow-text">Web Development</span>
            </div>
            <h2 className="wss-title">
              Get a Ready-Made<br />
              <span className="wss-title-blue">Web Solution</span>
            </h2>
            <p className="wss-subtitle">
              Constantly tested, refined, and built on the latest stack —
              so your project launches with a real competitive edge from day one.
            </p>
          </motion.div>

          {/* Body */}
          <div className="wss-body">

            {/* Left — browser mockup */}
            <motion.div
              className="wss-device-wrap"
              initial={{ opacity: 0, x: -36 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wss-device-outer">
                <div className="wss-browser-bar">
                  <div className="wss-traffic" style={{ background: "#ff5f57" }} />
                  <div className="wss-traffic" style={{ background: "#ffbd2e" }} />
                  <div className="wss-traffic" style={{ background: "#28c840" }} />
                  <div className="wss-url-bar">yourproject.io</div>
                </div>
                <div className="wss-screen">
                  <div className="wss-screen-topglow" />
                  <img
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80"
                    alt="Web solution preview"
                  />
                  <div className="wss-screen-overlay" />
                </div>
              </div>

              {/* Badge bottom-right */}
              <motion.div
                className="wss-badge"
                style={{ bottom: -18, right: -16 }}
                initial={{ opacity: 0, y: 12, scale: 0.88 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="wss-badge-icon">🚀</div>
                <div>
                  <div className="wss-badge-label">Delivered</div>
                  <div className="wss-badge-value">500+</div>
                </div>
              </motion.div>

              {/* Badge top-left */}
              <motion.div
                className="wss-badge"
                style={{ top: 52, left: -18 }}
                initial={{ opacity: 0, x: -12, scale: 0.88 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="wss-badge-icon">⚡</div>
                <div>
                  <div className="wss-badge-label">Avg load</div>
                  <div className="wss-badge-value">0.9s</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — features + CTA */}
            <div>
              <div className="wss-features">
                {features.map(({ Icon, title, desc, accent }, i) => (
                  <motion.div
                    key={title}
                    className="wss-feature"
                    initial={{ opacity: 0, x: 28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.18 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="wss-feat-icon">
                      <Icon size={18} color={accent} />
                    </div>
                    <div>
                      <p className="wss-feat-title">{title}</p>
                      <p className="wss-feat-desc">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="wss-cta-row"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
              >
                <button className="wss-btn-primary">
                  Start Your Project
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="wss-btn-ghost">View Case Studies</button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}