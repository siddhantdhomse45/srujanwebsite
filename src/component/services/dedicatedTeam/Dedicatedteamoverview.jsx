import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Quick domain expertise acquisition",
    desc: "Quick, specific domain and technology expertise acquisition tailored to your project needs.",
  },
  {
    icon: "👥",
    title: "Solely allocated team",
    desc: "All employees are solely allocated to the client's engagement — full focus, zero distractions.",
  },
  {
    icon: "📈",
    title: "Flexible fast scaling",
    desc: "Flexible, fast team scaling and system alignment with a client at every stage of growth.",
  },
  {
    icon: "🔄",
    title: "Switchable engagement model",
    desc: "Ability to switch to a dedicated team or fixed scope depending on your evolving goals.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
  "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=700&q=80",
];

export default function DedicatedTeamOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIdx(p => (p + 1) % images.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .dto { font-family: 'Inter', sans-serif; }
        .dto *, .dto *::before, .dto *::after { box-sizing: border-box; }

        /* ── SECTION ── */
        .dto {
          position: relative;
          overflow: hidden;
          padding: 100px 0 110px;
          /* exact bright blue gradient from screenshot */
          background: linear-gradient(135deg,#0f0c29,#1a1a2e,#16213e);
        }

        /* subtle dot pattern overlay */
        .dto-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.12) 1.2px, transparent 1.2px);
          background-size: 28px 28px;
        }

        /* white glow top-right */
        .dto-glow-tr {
          position: absolute; top: -180px; right: -180px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%);
          pointer-events: none; z-index: 0;
        }
        /* white glow bottom-left */
        .dto-glow-bl {
          position: absolute; bottom: -150px; left: -120px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* decorative dot clusters exactly like screenshot */
        .dto-cluster {
          position: absolute; pointer-events: none; z-index: 1;
        }
        .dto-cluster svg circle { fill: rgba(255,255,255,0.22); }

        .dto-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
          z-index: 2;
        }

        /* ── HEADER ── */
        .dto-head { text-align: center; margin-bottom: 56px; }

        .dto-title {
          font-size: clamp(26px, 3.6vw, 48px);
          font-weight: 900; color: #fff;
          line-height: 1.08; letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 18px; padding: 0;
          text-shadow: 0 2px 24px rgba(0,0,0,0.18);
        }
        .dto-subtitle {
          font-size: clamp(15px, 1.3vw, 17px);
          color: rgba(255,255,255,0.82);
          line-height: 1.78; max-width: 640px;
          margin: 0 auto; padding: 0; font-weight: 400;
        }

        /* ── BODY ── */
        .dto-body {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 52px;
          align-items: center;
        }

        /* ── IMAGE COLUMN ── */
        .dto-img-wrap { position: relative; padding-bottom: 28px; }

        .dto-img-frame {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow:
            0 28px 72px rgba(0,0,0,0.32),
            0 0 0 1px rgba(255,255,255,0.15);
        }
        /* keeps aspect-ratio sizing in older browsers */
        .dto-img-inner {
          position: absolute; inset: 0;
        }
        .dto-img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          position: absolute; inset: 0;
        }
        /* very subtle blue tint at bottom */
        .dto-img-tint {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(17,85,204,0.35) 100%);
        }

        /* counter badge */
        .dto-img-badge {
          position: absolute; bottom: 14px; right: 14px;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px; padding: 4px 10px;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.85); letter-spacing: 0.08em;
          z-index: 2;
        }

        /* indicator dots */
        .dto-img-dots {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; justify-content: center; gap: 8px; align-items: center;
        }
        .dto-dot-btn {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(255,255,255,0.35);
          cursor: pointer; border: none; padding: 0;
          transition: all 0.3s ease;
        }
        .dto-dot-btn.active {
          background: #fff;
          width: 22px; border-radius: 4px;
          box-shadow: 0 0 8px rgba(255,255,255,0.7);
        }

        /* ── FEATURES GRID ── */
        .dto-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .dto-feat {
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(255,255,255,1);
          border-radius: 12px;
          padding: 26px 22px 22px;
          display: flex; flex-direction: column; gap: 10px;
          position: relative; overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease,
                      background 0.3s ease;
          cursor: default;
        }
        .dto-feat:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          background: #fff;
        }
        /* blue top accent on hover */
        .dto-feat::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1155cc, #3b8eff);
          opacity: 0; transition: opacity 0.3s;
        }
        .dto-feat:hover::before { opacity: 1; }

        .dto-feat-icon-wrap {
          width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
          background: rgba(17,85,204,0.08);
          border: 1px solid rgba(17,85,204,0.14);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .dto-feat:hover .dto-feat-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
          background: rgba(17,85,204,0.14);
        }

        .dto-feat-title {
          font-size: 13.5px; font-weight: 700;
          color: #0f172a;
          line-height: 1.35; margin: 0; padding: 0; letter-spacing: -0.1px;
        }
        .dto-feat-desc {
          font-size: 12.5px; color: #64748b;
          line-height: 1.65; margin: 0; padding: 0; font-weight: 400;
        }

        /* bottom accent bar */
        .dto-feat-bar {
          height: 2px; border-radius: 2px; margin-top: 4px;
          background: linear-gradient(90deg, #1155cc, #3b8eff);
          width: 0%; transition: width 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .dto-feat:hover .dto-feat-bar { width: 55%; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .dto { padding: 80px 0 90px; }
          .dto-inner { padding: 0 36px; }
          .dto-body { gap: 40px; }
        }
        @media (max-width: 767px) {
          .dto { padding: 64px 0 80px; }
          .dto-inner { padding: 0 20px; }
          .dto-head { margin-bottom: 40px; }
          .dto-title { font-size: 22px; letter-spacing: 0.02em; }
          .dto-subtitle { font-size: 14px; }
          .dto-body { grid-template-columns: 1fr; gap: 44px; }
          .dto-img-frame { aspect-ratio: 16/9; }
          .dto-features { gap: 12px; }
          .dto-feat { padding: 20px 16px 18px; }
        }
        @media (max-width: 479px) {
          .dto-inner { padding: 0 16px; }
          .dto-features { grid-template-columns: 1fr; }
          .dto-title { font-size: 20px; }
        }
      `}</style>

      <section className="dto" ref={ref}>
        {/* bg layers */}
        <div className="dto-dots" />
        <div className="dto-glow-tr" />
        <div className="dto-glow-bl" />

        {/* decorative dot clusters — top-left near image, bottom-right */}
        <div className="dto-cluster" style={{ top: 70, left: 44 }}>
          <svg width="120" height="100" viewBox="0 0 120 100">
            {Array.from({ length: 35 }, (_, i) => (
              <circle key={i} cx={(i % 7) * 18 + 6} cy={Math.floor(i / 7) * 18 + 6} r="2" />
            ))}
          </svg>
        </div>
        <div className="dto-cluster" style={{ bottom: 50, right: 40 }}>
          <svg width="120" height="100" viewBox="0 0 120 100">
            {Array.from({ length: 35 }, (_, i) => (
              <circle key={i} cx={(i % 7) * 18 + 6} cy={Math.floor(i / 7) * 18 + 6} r="2" />
            ))}
          </svg>
        </div>

        <div className="dto-inner">

          {/* Header */}
          <motion.div
            className="dto-head"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="dto-title">Dedicated Team Approach: Overview</h2>
            <p className="dto-subtitle">
              A dedicated, customised, and secure Team Extension model follows our client's internal
              development practices, methodologies, and culture.
            </p>
          </motion.div>

          {/* Body */}
          <div className="dto-body">

            {/* Left — auto-cycling image */}
            <motion.div
              className="dto-img-wrap"
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dto-img-frame">
                <div className="dto-img-inner">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIdx}
                      src={images[imgIdx]}
                      alt={`Team ${imgIdx + 1}`}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                  <div className="dto-img-tint" />
                  <div className="dto-img-badge">{imgIdx + 1} / {images.length}</div>
                </div>
              </div>

              {/* dots */}
              <div className="dto-img-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`dto-dot-btn ${i === imgIdx ? "active" : ""}`}
                    onClick={() => setImgIdx(i)}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right — white feature tiles */}
            <div className="dto-features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="dto-feat"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.22 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="dto-feat-icon-wrap">{f.icon}</div>
                  <p className="dto-feat-title">{f.title}</p>
                  <p className="dto-feat-desc">{f.desc}</p>
                  <div className="dto-feat-bar" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}