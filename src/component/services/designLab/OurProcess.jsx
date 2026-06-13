import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Understand",
    accent: "#3b82f6",
    items: [
      "Stakeholder interviews to define goals and gather domain insights.",
      "Explore users' needs through research and surveys.",
      "Conduct market analysis and competitor comparisons.",
      "Perform detailed customer analytics to identify trends.",
    ],
  },
  {
    number: "02",
    label: "Define & Ideate",
    accent: "#60a5fa",
    items: [
      "Identify and outline key user use cases and scenarios.",
      "Define and refine the complete feature set for clarity.",
      "Map stories to align goals with user journeys.",
      "Prioritize features based on resources and objectives.",
    ],
  },
  {
    number: "03",
    label: "Prototype",
    accent: "#2563eb",
    items: [
      "Develop a comprehensive information architecture plan.",
      "Create black-and-white wireframes for initial designs.",
      "Define the visual design direction for the product.",
      "Add animations and finalize visual design mockups.",
    ],
  },
  {
    number: "04",
    label: "Validate",
    accent: "#93c5fd",
    items: [
      "Conduct usability testing for prototype and workflows.",
      "Analyze and iterate solutions based on collected feedback.",
      "Refine key flows and resolve usability issues.",
      "Ensure alignment between prototype goals and outcomes.",
    ],
  },
];

export default function OurProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .opr { font-family: 'Inter', sans-serif; }
        .opr *, .opr *::before, .opr *::after { box-sizing: border-box; }

        .opr {
          background: #020b18;
          padding: 110px 0 130px;
          overflow: hidden;
          position: relative;
        }

        /* bg */
        .opr-grid {
          position: absolute; inset: 0; z-index: 0; pointerEvents: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .opr-orb1 {
          position: absolute; top: -160px; left: -160px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.22), transparent 70%);
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .opr-orb2 {
          position: absolute; bottom: -100px; right: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%);
          filter: blur(100px); pointer-events: none; z-index: 0;
        }

        .opr-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
          z-index: 2;
        }

        /* ── header ── */
        .opr-head { text-align: center; margin-bottom: 72px; }
        .opr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 999px; padding: 6px 16px; margin-bottom: 22px;
        }
        .opr-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.9);
          animation: opr-pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes opr-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
        }
        .opr-eyebrow span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin: 0; padding: 0;
        }
        .opr-title {
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 800; color: #f0f8ff;
          line-height: 1.06; letter-spacing: -1.4px;
          margin: 0 0 18px; padding: 0;
        }
        .opr-title-blue {
          background: linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .opr-subtitle {
          font-size: 16px; color: rgba(186,210,255,0.45);
          line-height: 1.8; max-width: 560px;
          margin: 0 auto; padding: 0; font-weight: 400;
        }

        /* ── stepper row ── */
        .opr-stepper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 56px;
          position: relative;
        }

        .opr-step-wrap {
          display: flex; flex-direction: column; align-items: center;
          gap: 14px; flex: 1; cursor: pointer; position: relative; z-index: 1;
        }

        .opr-step-circle {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 800;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative; flex-shrink: 0;
        }
        .opr-step-circle.active {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border: 2px solid rgba(96,165,250,0.5);
          color: #fff;
          box-shadow: 0 0 32px rgba(37,99,235,0.55), 0 0 0 8px rgba(37,99,235,0.08);
          transform: scale(1.12);
        }
        .opr-step-circle.inactive {
          background: rgba(7,22,50,0.7);
          border: 2px solid rgba(59,130,246,0.2);
          color: rgba(147,197,253,0.45);
          box-shadow: none;
          transform: scale(1);
        }
        .opr-step-circle.inactive:hover {
          border-color: rgba(59,130,246,0.45);
          color: #60a5fa;
          transform: scale(1.05);
        }

        .opr-step-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; margin: 0; padding: 0;
          text-align: center; transition: color 0.3s ease;
          white-space: nowrap;
        }
        .opr-step-label.active { color: #60a5fa; }
        .opr-step-label.inactive { color: rgba(147,197,253,0.3); }

        /* connector line between steps */
        .opr-connector {
          flex: 1; height: 1px; margin-bottom: 44px;
          background: linear-gradient(90deg, rgba(59,130,246,0.2), rgba(59,130,246,0.4), rgba(59,130,246,0.2));
          position: relative; max-width: 140px;
        }
        .opr-connector::after {
          content: '';
          position: absolute; top: 50%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: translateY(-50%);
          animation: opr-flow 2s linear infinite;
          background-size: 200% 100%;
        }
        @keyframes opr-flow {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── content panel – UPDATED: 15px gap ── */
        .opr-panel {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          background: transparent;
          border-radius: 20px;
        }

        .opr-col {
          padding: 36px 28px;
          display: flex; flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
          min-height: 360px;
          border-radius: 20px;
          background: rgba(7,18,38,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(59,130,246,0.12);
        }
        .opr-col.col-active {
          background: linear-gradient(135deg, rgba(37,99,235,0.12), rgba(59,130,246,0.06));
          border-color: rgba(59,130,246,0.35);
        }
        .opr-col.col-inactive {
          background: rgba(7,18,38,0.5);
        }
        /* top border glow only for active column */
        .opr-col.col-active::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent);
          border-radius: 20px 20px 0 0;
        }

        /* col header */
        .opr-col-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
        }
        .opr-col-num {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          padding: 3px 9px; border-radius: 6px;
          transition: all 0.3s;
          margin: 0;
        }
        .opr-col-num.num-active {
          background: rgba(37,99,235,0.2);
          border: 1px solid rgba(59,130,246,0.35);
          color: #60a5fa;
        }
        .opr-col-num.num-inactive {
          background: rgba(59,130,246,0.05);
          border: 1px solid rgba(59,130,246,0.1);
          color: rgba(147,197,253,0.3);
        }
        .opr-col-title {
          font-size: 13px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin: 0; padding: 0;
          transition: color 0.3s;
        }
        .opr-col-title.title-active { color: #93c5fd; }
        .opr-col-title.title-inactive { color: rgba(147,197,253,0.25); }

        /* items */
        .opr-items { display: flex; flex-direction: column; gap: 0; flex: 1; }
        .opr-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(59,130,246,0.06);
          transition: all 0.3s ease;
        }
        .opr-item:last-child { border-bottom: none; }
        .opr-col.col-active .opr-item:hover {
          padding-left: 4px;
        }
        .opr-item-dot {
          width: 5px; height: 5px; border-radius: 50%;
          margin-top: 7px; flex-shrink: 0;
          transition: box-shadow 0.3s;
        }
        .opr-col.col-active .opr-item-dot {
          background: #3b82f6;
          box-shadow: 0 0 6px rgba(59,130,246,0.6);
        }
        .opr-col.col-inactive .opr-item-dot {
          background: rgba(59,130,246,0.2);
        }
        .opr-item-text {
          font-size: 13.5px; line-height: 1.65; margin: 0; padding: 0;
          font-weight: 400; transition: color 0.3s;
        }
        .opr-col.col-active .opr-item-text { color: rgba(186,210,255,0.75); }
        .opr-col.col-inactive .opr-item-text { color: rgba(147,197,253,0.28); }

        /* ── progress bar below stepper ── */
        .opr-progress-wrap {
          width: 100%; height: 2px;
          background: rgba(59,130,246,0.1);
          border-radius: 2px;
          margin-bottom: 56px;
          overflow: hidden;
        }
        .opr-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #1d4ed8, #60a5fa);
          border-radius: 2px;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        /* ── responsive ── */
        @media (max-width: 1023px) {
          .opr { padding: 88px 0 100px; }
          .opr-inner { padding: 0 36px; }
          .opr-panel { grid-template-columns: repeat(2, 1fr); gap: 15px; }
        }
        @media (max-width: 767px) {
          .opr { padding: 64px 0 80px; }
          .opr-inner { padding: 0 20px; }
          .opr-head { margin-bottom: 48px; }
          .opr-title { font-size: 28px; letter-spacing: -1px; }
          .opr-subtitle { font-size: 15px; }
          .opr-stepper { gap: 0; }
          .opr-step-circle { width: 48px; height: 48px; font-size: 17px; }
          .opr-step-label { font-size: 9px; }
          .opr-connector { max-width: 60px; }
          .opr-panel { grid-template-columns: 1fr; gap: 15px; }
          .opr-col.col-inactive { display: none; }
          .opr-col.col-active { display: flex; }
        }
        @media (max-width: 479px) {
          .opr-inner { padding: 0 16px; }
          .opr-title { font-size: 24px; }
          .opr-step-circle { width: 42px; height: 42px; font-size: 15px; }
          .opr-connector { max-width: 32px; }
        }
      `}</style>

      <section className="opr" ref={ref}>
        <div className="opr-grid" />
        <div className="opr-orb1" />
        <div className="opr-orb2" />

        <div className="opr-inner">

          {/* Header */}
          <motion.div
            className="opr-head"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="opr-eyebrow">
              <div className="opr-eyebrow-dot" />
              <span>How We Work</span>
            </div>
            <h2 className="opr-title">
              Our <span className="opr-title-blue">Process</span>
            </h2>
            <p className="opr-subtitle">
              A battle-tested four-step framework that turns your ideas into
              scalable, user-loved digital products — on time, every time.
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="opr-progress-wrap"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="opr-progress-bar"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </motion.div>

          {/* Stepper */}
          <motion.div
            className="opr-stepper"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {steps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <div
                  className="opr-step-wrap"
                  onClick={() => setActive(i)}
                >
                  <motion.div
                    className={`opr-step-circle ${i === active ? "active" : "inactive"}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.number}
                  </motion.div>
                  <p className={`opr-step-label ${i === active ? "active" : "inactive"}`}>
                    {step.label}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div key={`conn-${i}`} className="opr-connector" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Content panel with 15px gap */}
          <motion.div
            className="opr-panel"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {steps.map((step, si) => (
              <div
                key={step.number}
                className={`opr-col ${si === active ? "col-active" : "col-inactive"}`}
                onClick={() => setActive(si)}
                style={{ cursor: "pointer" }}
              >
                {/* Col header */}
                <div className="opr-col-head">
                  <span className={`opr-col-num ${si === active ? "num-active" : "num-inactive"}`}>
                    {step.number}
                  </span>
                  <p className={`opr-col-title ${si === active ? "title-active" : "title-inactive"}`}>
                    {step.label}
                  </p>
                </div>

                {/* Items */}
                <div className="opr-items">
                  {step.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      className="opr-item"
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.35 + si * 0.05 + ii * 0.06 }}
                    >
                      <div className="opr-item-dot" />
                      <p className="opr-item-text">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}