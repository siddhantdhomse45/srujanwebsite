import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdCheck } from "react-icons/md";

const columns = [
  {
    label: "Our Team",
    accent: "#2563eb",
    items: [
      "Resource planning, development of team formation",
      "Staff motivation and personal development plan",
      "HR & best practise delivery processes",
      "Development of relevant technical training programs",
      "Staff replacement and knowledge transfer",
      "Provision of standard office and IT infrastructure",
    ],
  },
  {
    label: "Client",
    accent: "#1d4ed8",
    items: [
      "End-to-end product ownership, including backlog management",
      "Overall product roadmap, priorities & strategy, SDLC",
      "Acceptance criteria & acceptance process ownership",
      "Support for governance framework — feedback and review",
      "End-to-end quality & delivery ownership",
    ],
  },
];

export default function AreasOfResponsibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .aor { font-family: 'Inter', sans-serif; }
        .aor *, .aor *::before, .aor *::after { box-sizing: border-box; }

        .aor {
          background: #020b18;
          padding: 110px 0 130px;
          position: relative;
          overflow: hidden;
        }

        /* bg */
        .aor-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .aor-orb1 {
          position: absolute; top: -180px; left: -150px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.22), transparent 70%);
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .aor-orb2 {
          position: absolute; bottom: -120px; right: -120px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%);
          filter: blur(100px); pointer-events: none; z-index: 0;
        }

        .aor-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
          z-index: 2;
        }

        /* ── HEADER ── */
        .aor-head { margin-bottom: 64px; }

        .aor-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 999px; padding: 6px 16px; margin-bottom: 22px;
        }
        .aor-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.9);
          animation: aor-pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes aor-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
        }
        .aor-eyebrow span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa;
          margin: 0; padding: 0;
        }

        .aor-title {
          font-size: clamp(30px, 3.8vw, 52px);
          font-weight: 800; color: #f0f8ff;
          line-height: 1.06; letter-spacing: -1.2px;
          margin: 0 0 16px; padding: 0;
        }
        .aor-title-blue {
          background: linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .aor-subtitle {
          font-size: 16px; color: rgba(186,210,255,0.45);
          line-height: 1.8; max-width: 560px;
          margin: 0; padding: 0; font-weight: 400;
        }

        /* ── DIVIDER ── */
        .aor-divider {
          width: 80px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa, transparent);
          margin: 20px 0 0;
        }

        /* ── BODY ── */
        .aor-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* ── COLUMN PANEL ── */
        .aor-col {
          background: rgba(7,22,50,0.55);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 20px;
          padding: 36px 32px 32px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .aor-col:hover {
          border-color: rgba(59,130,246,0.28);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(37,99,235,0.08);
        }
        /* top glow line */
        .aor-col::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent);
          opacity: 0.6;
        }

        /* col label row */
        .aor-col-head {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 30px; padding-bottom: 20px;
          border-bottom: 1px solid rgba(59,130,246,0.1);
        }
        .aor-col-icon {
          width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
          background: rgba(37,99,235,0.14);
          border: 1px solid rgba(59,130,246,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 19px;
        }
        .aor-col-label {
          font-size: 13px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #60a5fa;
          margin: 0; padding: 0;
        }
        .aor-col-count {
          margin-left: auto;
          font-size: 11px; font-weight: 600;
          color: rgba(59,130,246,0.45);
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: 20px; padding: 3px 10px;
          letter-spacing: 0.06em;
        }

        /* ── LIST ── */
        .aor-list { display: flex; flex-direction: column; gap: 2px; }

        .aor-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 13px 14px; border-radius: 10px;
          border: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .aor-item:hover {
          background: rgba(37,99,235,0.07);
          border-color: rgba(59,130,246,0.14);
          transform: translateX(4px);
        }

        .aor-check {
          width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .aor-item:hover .aor-check {
          background: rgba(37,99,235,0.22);
          border-color: rgba(59,130,246,0.5);
          box-shadow: 0 0 10px rgba(59,130,246,0.3);
        }

        .aor-item-text {
          font-size: 14px; color: rgba(186,210,255,0.6);
          line-height: 1.65; margin: 0; padding: 0; font-weight: 400;
          transition: color 0.25s;
        }
        .aor-item:hover .aor-item-text { color: rgba(219,234,254,0.85); }

        /* ── BOTTOM STRIP ── */
        .aor-strip {
          margin-top: 48px;
          padding: 28px 36px;
          border-radius: 16px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(59,130,246,0.15);
          display: flex; align-items: center; gap: 20px;
          position: relative; overflow: hidden;
        }
        .aor-strip::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
        }
        .aor-strip-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: rgba(37,99,235,0.16);
          border: 1px solid rgba(59,130,246,0.25);
          display: flex; align-items: center; justify-content: center; font-size: 20px;
        }
        .aor-strip-text {
          font-size: 14px; color: rgba(186,210,255,0.6);
          line-height: 1.65; margin: 0; padding: 0; font-weight: 400; flex: 1;
        }
        .aor-strip-text strong {
          color: #93c5fd; font-weight: 600;
        }
        .aor-strip-btn {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border: none; cursor: pointer; color: #fff;
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px;
          padding: 11px 22px; border-radius: 10px; letter-spacing: 0.02em;
          box-shadow: 0 0 24px rgba(37,99,235,0.4);
          transition: all .3s ease; margin: 0;
        }
        .aor-strip-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(37,99,235,0.6);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .aor { padding: 88px 0 100px; }
          .aor-inner { padding: 0 36px; }
        }
        @media (max-width: 767px) {
          .aor { padding: 64px 0 80px; }
          .aor-inner { padding: 0 20px; }
          .aor-head { margin-bottom: 44px; }
          .aor-title { font-size: 28px; letter-spacing: -0.8px; }
          .aor-subtitle { font-size: 14px; }
          .aor-body { grid-template-columns: 1fr; gap: 16px; }
          .aor-col { padding: 28px 22px 24px; }
          .aor-strip { flex-direction: column; align-items: flex-start; gap: 16px; }
          .aor-strip-btn { width: 100%; justify-content: center; }
        }
        @media (max-width: 479px) {
          .aor-inner { padding: 0 16px; }
          .aor-title { font-size: 24px; }
          .aor-col { padding: 22px 16px 20px; }
          .aor-item { padding: 11px 10px; }
        }
      `}</style>

      <section className="aor" ref={ref}>
        <div className="aor-grid" />
        <div className="aor-orb1" />
        <div className="aor-orb2" />

        <div className="aor-inner">

          {/* Header */}
          <motion.div
            className="aor-head"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aor-eyebrow">
              <div className="aor-eyebrow-dot" />
              <span>Engagement Model</span>
            </div>
            <h2 className="aor-title">
              Areas of{" "}
              <span className="aor-title-blue">Responsibility</span>
            </h2>
            <p className="aor-subtitle">
              A clear division of ownership between our team and your organisation —
              designed for transparency, accountability, and seamless collaboration.
            </p>
            <div className="aor-divider" />
          </motion.div>

          {/* Two columns */}
          <div className="aor-body">
            {columns.map((col, ci) => (
              <motion.div
                key={col.label}
                className="aor-col"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Column header */}
                <div className="aor-col-head">
                  <div className="aor-col-icon">
                    {ci === 0 ? "🏢" : "🤝"}
                  </div>
                  <p className="aor-col-label">{col.label}</p>
                  <span className="aor-col-count">{col.items.length} items</span>
                </div>

                {/* Items */}
                <div className="aor-list">
                  {col.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      className="aor-item"
                      initial={{ opacity: 0, x: ci === 0 ? -16 : 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.45,
                        delay: 0.2 + ci * 0.1 + ii * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="aor-check">
                        <MdCheck size={14} color="#3b82f6" />
                      </div>
                      <p className="aor-item-text">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            className="aor-strip"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aor-strip-icon">💡</div>
            <p className="aor-strip-text">
              <strong>Want to learn more about our engagement model?</strong>{" "}
              Book a free consultation and we'll walk you through how responsibilities
              are structured for your specific project.
            </p>
            <button className="aor-strip-btn">
              Book a Consultation
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

        </div>
      </section>
    </>
  );
}