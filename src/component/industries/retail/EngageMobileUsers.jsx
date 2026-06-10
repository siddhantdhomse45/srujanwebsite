import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MdOutline360,
  MdOutlineLocationOn,
  MdOutlineExplore,
  MdOutlineSettings,
  MdOutlineShoppingCart,
  MdOutlinePhoneIphone,
} from "react-icons/md";

const features = [
  { Icon: MdOutline360,        label: "Augmented Reality"    },
  { Icon: MdOutlineLocationOn, label: "Geofenced Messaging"  },
  { Icon: MdOutlineExplore,    label: "In-Store Navigation"  },
  { Icon: MdOutlineSettings,   label: "Custom Features"      },
  { Icon: MdOutlineShoppingCart,label: "Recipe Shopping"     },
  { Icon: MdOutlinePhoneIphone, label: "Mobile-First Design" },
];

const PHONE_SCREENS = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
];

export default function EngageMobileUsers() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY   = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const [screenIdx, setScreenIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setScreenIdx(p => (p + 1) % PHONE_SCREENS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .emu { font-family:'Inter',sans-serif; }
        .emu *,.emu *::before,.emu *::after { box-sizing:border-box; }

        /* ── SECTION ── */
        .emu {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #020b18;
        }

        /* ── BG photo ── */
        .emu-bg {
          position: absolute; inset: -30px;
          background-image: url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80');
          background-size: cover; background-position: center;
          z-index: 0;
        }
        /* layered overlays */
        .emu-ov1 {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            105deg,
            rgba(2,11,24,0.55) 0%,
            rgba(2,11,24,0.42) 45%,
            rgba(2,11,24,0.72) 100%
          );
        }
        /* strong blue tint on right half where text is */
        .emu-ov2 {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            90deg,
            rgba(2,11,24,0.15) 0%,
            rgba(13,49,140,0.55) 50%,
            rgba(13,49,140,0.72) 100%
          );
        }
        /* dot grid */
        .emu-dots {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        /* blue glow top-right */
        .emu-glow {
          position: absolute; top: -120px; right: -100px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%);
          filter: blur(80px); z-index: 3; pointer-events: none;
        }

        /* ── INNER ── */
        .emu-inner {
          position: relative; z-index: 10;
          width: 100%; max-width: 1280px;
          margin: 0 auto;
          padding: 100px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ─────────────────────────────
           LEFT: PHONE MOCKUPS
        ───────────────────────────── */
        .emu-phones {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 520px;
        }

        /* back phone (smaller, behind) */
        .emu-phone-back {
          position: absolute;
          bottom: 0; right: 60px;
          width: 200px;
          z-index: 1;
          filter: brightness(0.65) saturate(0.7);
        }

        /* front phone (larger, main) */
        .emu-phone-front {
          position: relative;
          width: 260px;
          z-index: 2;
        }

        /* phone frame SVG container */
        .emu-phone-frame {
          position: relative;
          width: 100%;
        }
        .emu-phone-frame svg {
          width: 100%; display: block;
        }

        /* screen img inside phone */
        .emu-phone-screen {
          position: absolute;
          top: 14%; left: 6.5%;
          width: 87%; height: 72%;
          border-radius: 4px;
          overflow: hidden;
        }
        .emu-phone-screen img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: opacity 0.6s ease;
        }

        /* floating badge on front phone */
        .emu-badge {
          position: absolute;
          bottom: -18px; left: -24px;
          background: rgba(7,22,55,0.88);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 14px;
          padding: 11px 15px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          z-index: 5;
        }
        .emu-badge-icon {
          width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
          background: rgba(37,99,235,0.16);
          border: 1px solid rgba(59,130,246,0.25);
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .emu-badge-label {
          font-size: 10px; color: rgba(147,197,253,0.5);
          text-transform: uppercase; letter-spacing: 0.13em;
          font-weight: 600; line-height:1; margin: 0; padding: 0;
        }
        .emu-badge-val {
          font-size: 18px; font-weight: 800; color: #e0f0ff;
          line-height: 1; margin: 3px 0 0; padding: 0;
          background: linear-gradient(135deg,#93c5fd,#3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─────────────────────────────
           RIGHT: TEXT + FEATURES
        ───────────────────────────── */

        /* eyebrow */
        .emu-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.28);
          border-radius: 999px; padding: 6px 16px; margin-bottom: 24px;
        }
        .emu-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.9);
          animation: emu-pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes emu-pulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(59,130,246,0.5); }
          50%    { box-shadow:0 0 0 6px rgba(59,130,246,0); }
        }
        .emu-eyebrow span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin:0; padding:0;
        }

        /* headline */
        .emu-title {
          font-size: clamp(32px,4vw,58px);
          font-weight: 900; color: #f0f8ff;
          line-height: 1.04; letter-spacing: -1.2px;
          margin: 0 0 6px; padding: 0;
          text-transform: uppercase;
        }
        .emu-title-blue {
          background: linear-gradient(90deg,#93c5fd,#3b82f6,#1d4ed8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* animated underline */
        .emu-underline {
          width: 90px; height: 3px; border-radius: 3px;
          background: linear-gradient(90deg,#2563eb,#60a5fa,transparent);
          margin: 16px 0 28px;
        }

        /* body text */
        .emu-desc {
          font-size: clamp(15px,1.3vw,17px);
          color: rgba(186,210,255,0.62);
          line-height: 1.85; max-width: 520px;
          margin: 0 0 44px; padding: 0; font-weight: 400;
        }

        /* ── features grid ── */
        .emu-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .emu-feat {
          display: flex; align-items: center; gap: 13px;
          padding: 14px 16px; border-radius: 12px;
          background: rgba(7,22,55,0.5);
          border: 1px solid rgba(59,130,246,0.12);
          backdrop-filter: blur(12px);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .emu-feat:hover {
          background: rgba(37,99,235,0.12);
          border-color: rgba(59,130,246,0.32);
          transform: translateX(4px);
        }
        .emu-feat-icon {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          background: rgba(37,99,235,0.14);
          border: 1px solid rgba(59,130,246,0.22);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .emu-feat:hover .emu-feat-icon {
          transform: scale(1.1) rotate(-4deg);
          background: rgba(37,99,235,0.22);
        }
        .emu-feat-label {
          font-size: 13.5px; font-weight: 600; color: rgba(186,210,255,0.75);
          margin: 0; padding: 0; letter-spacing: -0.1px;
          transition: color 0.3s;
        }
        .emu-feat:hover .emu-feat-label { color: #dbeafe; }

        /* last item spans full width if odd count */
        .emu-feat:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: calc(50% - 7px);
        }

        /* ── CTA ── */
        .emu-cta {
          display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap;
        }
        .emu-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#1d4ed8,#3b82f6);
          border: none; cursor: pointer; color: #fff;
          font-family: 'Inter',sans-serif; font-weight: 700; font-size: 13px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 11px;
          box-shadow: 0 0 28px rgba(37,99,235,0.45), 0 4px 20px rgba(0,0,0,0.4);
          transition: all .3s ease; margin: 0;
        }
        .emu-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 48px rgba(37,99,235,0.65), 0 8px 28px rgba(0,0,0,0.4);
        }
        .emu-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.07);
          border: 1.5px solid rgba(59,130,246,0.3);
          cursor: pointer; color: rgba(147,197,253,0.85);
          font-family: 'Inter',sans-serif; font-weight: 600; font-size: 13px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 11px;
          transition: all .3s ease; margin: 0;
        }
        .emu-btn-ghost:hover {
          background: rgba(59,130,246,0.14);
          border-color: rgba(59,130,246,0.55);
          color: #93c5fd; transform: translateY(-2px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .emu-inner { padding: 88px 36px; gap: 56px; }
          .emu-phones { min-height: 420px; }
          .emu-phone-front { width: 220px; }
          .emu-phone-back { width: 170px; right: 40px; }
        }
        @media (max-width: 767px) {
          .emu-inner {
            grid-template-columns: 1fr;
            padding: 80px 20px 72px;
            gap: 48px;
          }
          .emu-phones { min-height: 340px; order: 2; }
          .emu-phone-front { width: 180px; }
          .emu-phone-back { width: 140px; right: 20px; }
          .emu-right { order: 1; }
          .emu-cta { flex-direction: column; }
          .emu-btn-primary,.emu-btn-ghost { justify-content: center; width: 100%; }
          .emu-feat:last-child:nth-child(odd) { max-width: 100%; }
        }
        @media (max-width: 479px) {
          .emu-inner { padding: 72px 16px 60px; }
          .emu-features { grid-template-columns: 1fr; }
          .emu-feat:last-child:nth-child(odd) { max-width: 100%; grid-column: auto; }
          .emu-title { font-size: 28px; }
          .emu-phones { min-height: 280px; }
          .emu-phone-back { display: none; }
          .emu-phone-front { width: 200px; }
        }
      `}</style>

      <section className="emu" ref={sectionRef}>
        {/* BG layers */}
        <motion.div className="emu-bg" style={{ y: bgY }} />
        <div className="emu-ov1" />
        <div className="emu-ov2" />
        <div className="emu-dots" />
        <div className="emu-glow" />

        <div className="emu-inner">

          {/* ── LEFT: Phone mockups ── */}
          <motion.div
            className="emu-phones"
            style={{ y: phoneY }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Back phone */}
            <div className="emu-phone-back">
              <div className="emu-phone-frame">
                <svg viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="272" height="552" rx="38" fill="#0d1f3c" stroke="rgba(59,130,246,0.25)" strokeWidth="2"/>
                  <rect x="16" y="16" width="248" height="528" rx="30" fill="#071429"/>
                  {/* notch */}
                  <rect x="90" y="16" width="100" height="24" rx="12" fill="#0d1f3c"/>
                  {/* home bar */}
                  <rect x="100" y="530" width="80" height="6" rx="3" fill="rgba(59,130,246,0.3)"/>
                </svg>
                {/* screen screenshot */}
                <div className="emu-phone-screen">
                  <img src={PHONE_SCREENS[1]} alt="App screen" style={{ opacity: 1 }} />
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div className="emu-phone-front" style={{ position: "relative" }}>
              <div className="emu-phone-frame">
                <svg viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* outer shell */}
                  <rect x="2" y="2" width="276" height="556" rx="42"
                    fill="#0a1930" stroke="url(#pg)" strokeWidth="2.5"/>
                  {/* screen border */}
                  <rect x="12" y="12" width="256" height="536" rx="34" fill="#050e1e"/>
                  {/* dynamic island */}
                  <rect x="95" y="18" width="90" height="28" rx="14" fill="#0a1930"/>
                  {/* side buttons */}
                  <rect x="-2" y="130" width="4" height="50" rx="2" fill="#1e3a6e"/>
                  <rect x="-2" y="195" width="4" height="80" rx="2" fill="#1e3a6e"/>
                  <rect x="278" y="155" width="4" height="100" rx="2" fill="#1e3a6e"/>
                  {/* home bar */}
                  <rect x="95" y="534" width="90" height="7" rx="3.5" fill="rgba(59,130,246,0.35)"/>
                  {/* shimmer top */}
                  <rect x="12" y="12" width="256" height="2" rx="1" fill="url(#ps)"/>
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.5"/>
                    </linearGradient>
                    <linearGradient id="ps" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="transparent"/>
                      <stop offset="50%" stopColor="rgba(96,165,250,0.5)"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* animated screen */}
                <div className="emu-phone-screen">
                  <motion.img
                    key={screenIdx}
                    src={PHONE_SCREENS[screenIdx]}
                    alt="App screen"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="emu-badge"
                initial={{ opacity: 0, y: 12, scale: 0.88 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="emu-badge-icon">📱</div>
                <div>
                  <p className="emu-badge-label">Active Users</p>
                  <p className="emu-badge-val">2.4M+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text + Features ── */}
          <div className="emu-right">

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="emu-eyebrow">
                <div className="emu-eyebrow-dot" />
                <span>Mobile Solutions</span>
              </div>
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                className="emu-title"
                initial={{ y: 70, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                Engage
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                className="emu-title"
                initial={{ y: 70, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="emu-title-blue">Mobile Users</span>
              </motion.h2>
            </div>

            <motion.div
              className="emu-underline"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="emu-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            >
              Merge the best features of your in-store and online shopping experience
              in one place — your customers' mobile phones. Leverage the latest
              technological developments to transform the way your customers think about shopping.
            </motion.p>

            {/* Features */}
            <motion.div
              className="emu-features"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              {features.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="emu-feat"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.56 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="emu-feat-icon">
                    <Icon size={20} color="#60a5fa" />
                  </div>
                  <p className="emu-feat-label">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="emu-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="emu-btn-primary">
                Start Your Project
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="emu-btn-ghost">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}