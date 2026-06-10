import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MdArrowForward, MdOpenInNew } from "react-icons/md";

const stories = [
  {
    id: 1,
    tag: "Retail",
    title: "Retail Chain",
    desc: "A respected marketing and design agency tapped our team to collaborate on a project for a worldwide clothing and accessories retailer — delivering a seamless omnichannel experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    accent: "#3b82f6",
    grad: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
    logo: "🏪",
  },
  {
    id: 2,
    tag: "E-Commerce",
    title: "SmartCart",
    desc: "Application for internet-connected shopping carts that creates optimal routes based on shoppers' grocery lists, providing shop owners with additional promotional opportunities and heat-maps.",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80",
    accent: "#60a5fa",
    grad: "linear-gradient(135deg,#2563eb,#60a5fa)",
    logo: "🛒",
  },
  {
    id: 3,
    tag: "HealthTech",
    title: "Chuze",
    desc: "Mobile application that helps grocery shoppers save time and money with brand price comparisons, in-app coupons, discount and sale announcements, and QR-code scanning.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    accent: "#93c5fd",
    grad: "linear-gradient(135deg,#3b82f6,#93c5fd)",
    logo: "💰",
  },
];

/* animated count-up */
function useCounter(end, run, duration = 1800) {
  const [n, setN] = useState(0);
  const ran = useRef(false);
  if (run && !ran.current) {
    ran.current = true;
    let s = 0;
    const tick = () => {
      s += end / (duration / 16);
      if (s >= end) { setN(end); return; }
      setN(Math.floor(s));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  return n;
}

function StoryCard({ story, index, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="ss-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? `${story.accent}40` : "rgba(59,130,246,0.1)",
        background: hovered
          ? `linear-gradient(145deg,${story.accent}08,rgba(7,22,50,0.9))`
          : "rgba(7,18,44,0.6)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 28px 70px rgba(0,0,0,0.5), 0 0 40px ${story.accent}18`
          : "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* top accent line */}
      <div className="ss-card-topline" style={{
        background: story.grad,
        opacity: hovered ? 1 : 0,
      }} />

      {/* image */}
      <div className="ss-img-wrap">
        <img
          src={story.image}
          alt={story.title}
          className="ss-img"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            filter: hovered ? "brightness(0.7)" : "brightness(0.5)",
          }}
        />
        <div className="ss-img-overlay" style={{
          background: `linear-gradient(to bottom, transparent 20%, rgba(2,11,24,0.88) 100%)`,
        }} />

        {/* tag chip */}
        <div className="ss-tag" style={{
          background: `${story.accent}22`,
          border: `1px solid ${story.accent}45`,
          color: story.accent,
        }}>
          <span className="ss-tag-dot" style={{ background: story.accent, boxShadow: `0 0 6px ${story.accent}` }} />
          {story.tag}
        </div>

        {/* logo icon bottom-left */}
        <motion.div
          className="ss-logo"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          style={{ background: story.grad }}
        >
          <span style={{ fontSize: 20 }}>{story.logo}</span>
        </motion.div>

        {/* arrow */}
        <motion.div
          className="ss-arrow"
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          style={{ background: story.grad, boxShadow: `0 4px 16px ${story.accent}50` }}
        >
          <MdArrowForward size={16} color="#fff" />
        </motion.div>
      </div>

      {/* content */}
      <div className="ss-body">
        <h3 className="ss-title">{story.title}</h3>
        <p className="ss-desc">{story.desc}</p>

        {/* read more */}
        <motion.div
          className="ss-readmore"
          animate={{ color: hovered ? story.accent : "rgba(59,130,246,0.4)" }}
          transition={{ duration: 0.3 }}
        >
          <span>Read case study</span>
          <MdOpenInNew size={13} />
        </motion.div>

        {/* bottom accent bar */}
        <div className="ss-bar" style={{
          background: story.grad,
          width: hovered ? "55%" : "0%",
        }} />
      </div>
    </motion.div>
  );
}

export default function SuccessStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(500, inView);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .ss { font-family:'Inter',sans-serif; }
        .ss *,.ss *::before,.ss *::after { box-sizing:border-box; }

        .ss {
          background:#020b18;
          padding:110px 0 130px;
          position:relative; overflow:hidden;
        }

        /* bg */
        .ss-grid {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px);
          background-size:52px 52px;
        }
        .ss-orb1 {
          position:absolute; top:-180px; left:-150px;
          width:600px; height:600px; border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.22),transparent 70%);
          filter:blur(90px); pointer-events:none; z-index:0;
        }
        .ss-orb2 {
          position:absolute; bottom:-100px; right:-100px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%);
          filter:blur(100px); pointer-events:none; z-index:0;
        }

        .ss-inner {
          max-width:1240px; margin:0 auto; padding:0 56px;
          position:relative; z-index:2;
        }

        /* ── HEADER ── */
        .ss-head { text-align:center; margin-bottom:72px; }
        .ss-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(59,130,246,0.08);
          border:1px solid rgba(59,130,246,0.25);
          border-radius:999px; padding:6px 16px; margin-bottom:22px;
        }
        .ss-eyebrow-dot {
          width:7px; height:7px; border-radius:50%;
          background:#3b82f6; box-shadow:0 0 8px rgba(59,130,246,0.9);
          animation:ss-pulse 2.4s ease-in-out infinite; flex-shrink:0;
        }
        @keyframes ss-pulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(59,130,246,0.5); }
          50%    { box-shadow:0 0 0 6px rgba(59,130,246,0); }
        }
        .ss-eyebrow span {
          font-size:11px; font-weight:600; letter-spacing:0.2em;
          text-transform:uppercase; color:#60a5fa; margin:0; padding:0;
        }
        .ss-title {
          font-size:clamp(32px,4vw,56px);
          font-weight:900; color:#f0f8ff;
          line-height:1.05; letter-spacing:-1.2px;
          margin:0 0 18px; padding:0; text-transform:uppercase;
        }
        .ss-title-blue {
          background:linear-gradient(90deg,#93c5fd,#3b82f6,#1d4ed8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .ss-subtitle {
          font-size:16px; color:rgba(186,210,255,0.45);
          line-height:1.8; max-width:560px;
          margin:0 auto; padding:0; font-weight:400;
        }
        .ss-divider {
          width:80px; height:2px; border-radius:2px;
          background:linear-gradient(90deg,#2563eb,#60a5fa,transparent);
          margin:22px auto 0;
        }

        /* ── GRID ── */
        .ss-grid-cards {
          display:grid;
          grid-template-columns:repeat(3,1fr) 340px;
          gap:20px;
          align-items:stretch;
        }

        /* ── STORY CARD ── */
        .ss-card {
          border-radius:20px; overflow:hidden;
          border:1px solid rgba(59,130,246,0.1);
          backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
          display:flex; flex-direction:column;
          position:relative;
          transition:transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease,
                      background 0.3s ease;
          cursor:pointer;
        }
        .ss-card-topline {
          position:absolute; top:0; left:0; right:0; height:2px;
          transition:opacity 0.3s;
        }
        .ss-img-wrap {
          position:relative; height:220px; overflow:hidden; flex-shrink:0;
        }
        .ss-img {
          width:100%; height:100%; object-fit:cover; display:block;
          transition:transform 0.6s cubic-bezier(0.22,1,0.36,1),filter 0.4s ease;
        }
        .ss-img-overlay { position:absolute; inset:0; }

        .ss-tag {
          position:absolute; top:12px; left:12px;
          display:inline-flex; align-items:center; gap:6px;
          backdrop-filter:blur(12px); border-radius:100px; padding:4px 12px;
          font-size:10px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase;
        }
        .ss-tag-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }

        .ss-logo {
          position:absolute; bottom:14px; left:14px;
          width:44px; height:44px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 16px rgba(0,0,0,0.4);
        }
        .ss-arrow {
          position:absolute; bottom:14px; right:14px;
          width:34px; height:34px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
        }

        .ss-body {
          padding:22px 22px 26px; flex:1;
          display:flex; flex-direction:column; gap:8px;
        }
        .ss-title {
          font-size:15px; font-weight:700; color:#dbeafe;
          line-height:1.3; margin:0; padding:0; letter-spacing:-0.1px;
          text-transform:none;
        }
        .ss-desc {
          font-size:13px; color:rgba(147,197,253,0.45);
          line-height:1.72; margin:0; padding:0; font-weight:400; flex:1;
        }
        .ss-readmore {
          display:inline-flex; align-items:center; gap:5px;
          font-size:12px; font-weight:600; letter-spacing:0.04em;
          margin-top:8px; transition:color 0.3s; cursor:pointer;
        }
        .ss-bar {
          height:2px; border-radius:2px; margin-top:10px;
          transition:width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        /* ── CTA PANEL ── */
        .ss-cta-panel {
          border-radius:20px; overflow:hidden; position:relative;
          display:flex; flex-direction:column;
          justify-content:space-between; align-items:flex-start;
          padding:40px 32px;
          background:linear-gradient(145deg,#0d47c0,#1565e8,#1976f5,#2176ff);
          box-shadow:0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(13,71,192,0.45);
        }
        /* dot grid on cta panel */
        .ss-cta-dots {
          position:absolute; inset:0; pointer-events:none;
          background-image:radial-gradient(rgba(255,255,255,0.15) 1.2px,transparent 1.2px);
          background-size:22px 22px;
        }
        /* white glow orb */
        .ss-cta-orb {
          position:absolute; top:-60px; right:-60px;
          width:240px; height:240px; border-radius:50%;
          background:radial-gradient(circle,rgba(255,255,255,0.12),transparent 70%);
          pointer-events:none;
        }
        .ss-cta-content { position:relative; z-index:1; width:100%; }
        .ss-cta-badge {
          display:inline-flex; align-items:center; gap:7px;
          background:rgba(255,255,255,0.12);
          border:1px solid rgba(255,255,255,0.25);
          border-radius:999px; padding:5px 14px; margin-bottom:20px;
        }
        .ss-cta-badge-dot {
          width:6px; height:6px; border-radius:50%;
          background:#fff; animation:ss-pulse 2s ease-in-out infinite; flex-shrink:0;
        }
        .ss-cta-badge span {
          font-size:10px; font-weight:600; letter-spacing:0.18em;
          text-transform:uppercase; color:rgba(255,255,255,0.8);
          margin:0; padding:0;
        }
        .ss-count {
          font-size:clamp(64px,7vw,96px); font-weight:900; color:#fff;
          line-height:0.9; letter-spacing:-3px;
          margin:0 0 4px; padding:0;
          text-shadow:0 0 40px rgba(255,255,255,0.25);
        }
        .ss-count-label {
          font-size:14px; font-weight:700; color:rgba(255,255,255,0.9);
          letter-spacing:0.14em; text-transform:uppercase;
          margin:0 0 16px; padding:0;
        }
        .ss-cta-sub {
          font-size:14px; color:rgba(255,255,255,0.68);
          line-height:1.7; margin:0 0 32px; padding:0; font-weight:400;
          max-width:240px;
        }
        .ss-cta-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; border:none; cursor:pointer;
          color:#1155cc; font-family:'Inter',sans-serif;
          font-weight:700; font-size:12px;
          letter-spacing:0.1em; text-transform:uppercase;
          padding:13px 22px; border-radius:10px;
          box-shadow:0 4px 20px rgba(0,0,0,0.25);
          transition:all .3s ease; margin:0; width:100%;
          justify-content:center;
        }
        .ss-cta-btn:hover {
          transform:translateY(-2px);
          box-shadow:0 8px 32px rgba(0,0,0,0.3);
          background:#f0f8ff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width:1200px) {
          .ss-grid-cards { grid-template-columns:repeat(2,1fr) 280px; }
          .ss-grid-cards > *:nth-child(2) { display:none; }
        }
        @media (max-width:1023px) {
          .ss { padding:88px 0 100px; }
          .ss-inner { padding:0 36px; }
          .ss-grid-cards { grid-template-columns:1fr 1fr; gap:16px; }
          .ss-cta-panel { grid-column:1/-1; flex-direction:row; align-items:center; padding:32px 36px; }
          .ss-cta-content { display:flex; flex-direction:row; align-items:center; gap:32px; width:100%; }
          .ss-cta-sub { margin-bottom:0; }
          .ss-cta-btn { width:auto; flex-shrink:0; }
          .ss-count { font-size:60px; }
        }
        @media (max-width:767px) {
          .ss { padding:64px 0 80px; }
          .ss-inner { padding:0 20px; }
          .ss-head { margin-bottom:48px; }
          .ss-grid-cards { grid-template-columns:1fr; }
          .ss-grid-cards > *:nth-child(2) { display:flex; }
          .ss-cta-panel { flex-direction:column; padding:32px 24px; }
          .ss-cta-content { flex-direction:column; align-items:flex-start; gap:16px; }
          .ss-cta-btn { width:100%; }
          .ss-img-wrap { height:180px; }
        }
        @media (max-width:479px) {
          .ss-inner { padding:0 16px; }
          .ss-head .ss-title { font-size:26px; }
        }
      `}</style>

      <section className="ss" ref={ref}>
        <div className="ss-grid" />
        <div className="ss-orb1" />
        <div className="ss-orb2" />

        <div className="ss-inner">

          {/* Header */}
          <motion.div
            className="ss-head"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ss-eyebrow">
              <div className="ss-eyebrow-dot" />
              <span>Client Results</span>
            </div>
            <h2 className="ss-title">
              Success{" "}
              <span className="ss-title-blue">Stories</span>
            </h2>
            <p className="ss-subtitle">
              Real products. Real impact. See how we've helped businesses across
              industries ship software their customers love.
            </p>
            <div className="ss-divider" />
          </motion.div>

          {/* Cards + CTA panel */}
          <div className="ss-grid-cards">

            {/* Story cards */}
            {stories.map((s, i) => (
              <StoryCard key={s.id} story={s} index={i} inView={inView} />
            ))}

            {/* CTA panel */}
            <motion.div
              className="ss-cta-panel"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ss-cta-dots" />
              <div className="ss-cta-orb" />

              <div className="ss-cta-content">
                <div>
                  <div className="ss-cta-badge">
                    <div className="ss-cta-badge-dot" />
                    <span>Trusted Worldwide</span>
                  </div>
                  <p className="ss-count">{count}</p>
                  <p className="ss-count-label">Loyal Clients</p>
                  <p className="ss-cta-sub">
                    Over a decade of stellar software solutions across industries worldwide.
                  </p>
                </div>
               <button
  className="ss-cta-btn"
  onClick={() => (window.location.href = "/case-studies")}
>
  More Success Stories
  <MdArrowForward size={15} />
</button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}