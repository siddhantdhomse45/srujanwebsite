import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MdOutlinePointOfSale,
  MdOutlineLightbulb,
  MdOutlineBarChart,
  MdOutlineWifi,
  MdOutlineSchool,
  MdOutlineAutoAwesome,
} from "react-icons/md";

const features = [
  { Icon: MdOutlinePointOfSale, label: "POS",                col: 0 },
  { Icon: MdOutlineLightbulb,   label: "Smart Design",        col: 1 },
  { Icon: MdOutlineBarChart,    label: "Big Data Analytics",  col: 0 },
  { Icon: MdOutlineWifi,        label: "IoT",                 col: 1 },
  { Icon: MdOutlineSchool,      label: "Training Software",   col: 0 },
  { Icon: MdOutlineAutoAwesome, label: "AI Insights",         col: 1 },
];

/* ── animated bar chart inside phone ── */
const BAR_DATA = [
  { label:"Mon", val:62 },
  { label:"Tue", val:78 },
  { label:"Wed", val:55 },
  { label:"Thu", val:88 },
  { label:"Fri", val:72 },
  { label:"Sat", val:95 },
  { label:"Sun", val:83 },
];

function BarChart({ inView }) {
  return (
    <div style={{ padding:"12px 8px 0", height:"100%", display:"flex", flexDirection:"column" }}>
      {/* mini header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
        <span style={{ fontSize:9, fontWeight:700, color:"#dbeafe", letterSpacing:"0.1em" }}>STATISTICS</span>
        <span style={{ fontSize:7, color:"rgba(147,197,253,0.5)" }}>This week</span>
      </div>
      <div style={{ fontSize:7, color:"rgba(147,197,253,0.4)", marginBottom:10 }}>Items Sold This Week</div>
      {/* bars */}
      <div style={{ display:"flex", alignItems:"flex-end", gap:5, flex:1, paddingBottom:4 }}>
        {BAR_DATA.map((b, i) => (
          <div key={b.label} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
            {/* value label */}
            <motion.div
              initial={{ opacity:0 }}
              animate={inView ? { opacity:1 } : {}}
              transition={{ delay: 0.8 + i*0.1 }}
              style={{ fontSize:6, fontWeight:700, color:"#60a5fa", whiteSpace:"nowrap" }}
            >
              {(b.val * 120).toLocaleString()}
            </motion.div>
            {/* bar */}
            <motion.div
              initial={{ height:0 }}
              animate={inView ? { height: `${b.val}%` } : {}}
              transition={{ duration:0.8, delay: 0.5 + i*0.08, ease:[0.22,1,0.36,1] }}
              style={{
                width:"100%", borderRadius:"3px 3px 0 0",
                background: i === 5
                  ? "linear-gradient(to top,#1d4ed8,#60a5fa)"
                  : "linear-gradient(to top,#1e3a6e,#2563eb)",
                boxShadow: i === 5 ? "0 0 8px rgba(59,130,246,0.6)" : "none",
                maxHeight:"90%",
              }}
            />
            <span style={{ fontSize:6, color:"rgba(147,197,253,0.4)" }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TurnDataIntoRevenue() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset:["start end","end start"] });
  const phoneY1 = useTransform(scrollYProgress, [0,1], [30, -30]);
  const phoneY2 = useTransform(scrollYProgress, [0,1], [60, -20]);

  /* counter hook */
  function useCount(end, run, duration=1600) {
    const [n, setN] = useState(0);
    useEffect(() => {
      if (!run) return;
      let start = 0;
      const step = () => {
        start += end / (duration / 16);
        if (start >= end) { setN(end); return; }
        setN(Math.floor(start));
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [run, end]);
    return n;
  }

  const c1 = useCount(10, inView);
  const c2 = useCount(98, inView);
  const c3 = useCount(500, inView);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .tdr { font-family:'Inter',sans-serif; }
        .tdr *,.tdr *::before,.tdr *::after { box-sizing:border-box; }

        .tdr {
          background: #020b18;
          padding: 120px 0 140px;
          position: relative; overflow: hidden;
        }

        /* bg */
        .tdr-grid {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),
            linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px);
          background-size:52px 52px;
        }
        .tdr-orb1 {
          position:absolute; top:-180px; left:-160px;
          width:600px; height:600px; border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.22),transparent 70%);
          filter:blur(90px); pointer-events:none; z-index:0;
        }
        .tdr-orb2 {
          position:absolute; bottom:-100px; right:-100px;
          width:500px; height:500px; border-radius:50%;
          background:radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%);
          filter:blur(100px); pointer-events:none; z-index:0;
        }

        .tdr-inner {
          max-width:1200px; margin:0 auto; padding:0 56px;
          position:relative; z-index:2;
          display:grid; grid-template-columns:1fr 1fr;
          gap:80px; align-items:center;
        }

        /* ── LEFT ── */
        .tdr-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(59,130,246,0.08);
          border:1px solid rgba(59,130,246,0.25);
          border-radius:999px; padding:6px 16px; margin-bottom:22px;
        }
        .tdr-eyebrow-dot {
          width:7px; height:7px; border-radius:50%;
          background:#3b82f6; box-shadow:0 0 8px rgba(59,130,246,0.9);
          animation:tdr-pulse 2.4s ease-in-out infinite; flex-shrink:0;
        }
        @keyframes tdr-pulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(59,130,246,0.5); }
          50%    { box-shadow:0 0 0 6px rgba(59,130,246,0); }
        }
        .tdr-eyebrow span {
          font-size:11px; font-weight:600; letter-spacing:0.2em;
          text-transform:uppercase; color:#60a5fa; margin:0; padding:0;
        }

        .tdr-title {
          font-size:clamp(32px,4vw,56px);
          font-weight:900; color:#f0f8ff;
          line-height:1.04; letter-spacing:-1.2px;
          text-transform:uppercase; margin:0 0 6px; padding:0;
        }
        .tdr-title-blue {
          background:linear-gradient(90deg,#93c5fd,#3b82f6,#1d4ed8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .tdr-line {
          width:80px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa,transparent);
          margin:14px 0 26px;
        }
        .tdr-desc {
          font-size:clamp(14px,1.3vw,16px);
          color:rgba(186,210,255,0.55);
          line-height:1.85; max-width:500px;
          margin:0 0 44px; padding:0; font-weight:400;
        }

        /* stats row */
        .tdr-stats {
          display:flex; gap:24px; margin-bottom:44px; flex-wrap:wrap;
        }
        .tdr-stat { display:flex; flex-direction:column; gap:3px; }
        .tdr-stat-val {
          font-size:28px; font-weight:800;
          background:linear-gradient(135deg,#93c5fd,#3b82f6);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; line-height:1; margin:0; padding:0;
        }
        .tdr-stat-label {
          font-size:11px; color:rgba(147,197,253,0.4);
          text-transform:uppercase; letter-spacing:0.12em;
          font-weight:600; margin:0; padding:0;
        }
        .tdr-stat-sep {
          width:1px; background:rgba(59,130,246,0.15); align-self:stretch; margin:0 4px;
        }

        /* features grid */
        .tdr-feats {
          display:grid; grid-template-columns:1fr 1fr; gap:10px;
        }
        .tdr-feat {
          display:flex; align-items:center; gap:13px;
          padding:13px 15px; border-radius:12px;
          background:rgba(7,22,55,0.5);
          border:1px solid rgba(59,130,246,0.1);
          backdrop-filter:blur(12px);
          transition:background 0.3s,border-color 0.3s,transform 0.3s;
          cursor:default;
        }
        .tdr-feat:hover {
          background:rgba(37,99,235,0.12);
          border-color:rgba(59,130,246,0.32);
          transform:translateX(4px);
        }
        .tdr-feat-icon {
          width:38px; height:38px; border-radius:10px; flex-shrink:0;
          background:rgba(37,99,235,0.14);
          border:1px solid rgba(59,130,246,0.22);
          display:flex; align-items:center; justify-content:center;
          transition:transform 0.3s,background 0.3s;
        }
        .tdr-feat:hover .tdr-feat-icon {
          transform:scale(1.1) rotate(-4deg);
          background:rgba(37,99,235,0.22);
        }
        .tdr-feat-label {
          font-size:13px; font-weight:600;
          color:rgba(186,210,255,0.7);
          margin:0; padding:0;
          transition:color 0.3s;
        }
        .tdr-feat:hover .tdr-feat-label { color:#dbeafe; }

        /* CTA */
        .tdr-cta { display:flex; gap:12px; margin-top:36px; flex-wrap:wrap; }
        .tdr-btn-p {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#1d4ed8,#3b82f6);
          border:none; cursor:pointer; color:#fff;
          font-family:'Inter',sans-serif; font-weight:700; font-size:13px;
          letter-spacing:0.06em; text-transform:uppercase;
          padding:13px 28px; border-radius:11px;
          box-shadow:0 0 28px rgba(37,99,235,0.45),0 4px 20px rgba(0,0,0,0.4);
          transition:all .3s; margin:0;
        }
        .tdr-btn-p:hover { transform:translateY(-2px); box-shadow:0 0 48px rgba(37,99,235,0.65),0 8px 28px rgba(0,0,0,0.4); }
        .tdr-btn-g {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(59,130,246,0.07);
          border:1.5px solid rgba(59,130,246,0.3);
          cursor:pointer; color:rgba(147,197,253,0.85);
          font-family:'Inter',sans-serif; font-weight:600; font-size:13px;
          letter-spacing:0.06em; text-transform:uppercase;
          padding:13px 24px; border-radius:11px;
          transition:all .3s; margin:0;
        }
        .tdr-btn-g:hover { background:rgba(59,130,246,0.14); border-color:rgba(59,130,246,0.55); color:#93c5fd; transform:translateY(-2px); }

        /* ── RIGHT: phones ── */
        .tdr-phones {
          position:relative; display:flex;
          justify-content:center; align-items:flex-end;
          min-height:520px;
        }

        /* back phone */
        .tdr-phone-back {
          position:absolute; bottom:0; left:20px;
          width:200px; z-index:1;
          filter:brightness(0.5) saturate(0.6);
        }

        /* front phone */
        .tdr-phone-front {
          position:relative; width:270px; z-index:2;
        }
        .tdr-phone-svg { width:100%; display:block; }

        .tdr-screen {
          position:absolute;
          top:13.5%; left:6%;
          width:88%; height:73%;
          border-radius:4px; overflow:hidden;
          background:#071429;
        }

        /* glow ring behind front phone */
        .tdr-glow-ring {
          position:absolute; bottom:-20px; left:50%;
          transform:translateX(-50%);
          width:220px; height:60px; border-radius:50%;
          background:radial-gradient(ellipse,rgba(37,99,235,0.35),transparent 70%);
          filter:blur(18px); z-index:0;
        }

        /* floating data badge */
        .tdr-dbadge {
          position:absolute; top:40px; right:-20px; z-index:5;
          background:rgba(5,20,55,0.9);
          backdrop-filter:blur(18px);
          border:1px solid rgba(59,130,246,0.25);
          border-radius:14px; padding:12px 15px;
          display:flex; align-items:center; gap:10px;
          box-shadow:0 8px 30px rgba(0,0,0,0.45);
        }
        .tdr-dbadge-icon {
          width:34px; height:34px; border-radius:9px; flex-shrink:0;
          background:rgba(37,99,235,0.16);
          border:1px solid rgba(59,130,246,0.25);
          display:flex; align-items:center; justify-content:center; font-size:16px;
        }
        .tdr-dbadge-label {
          font-size:9px; color:rgba(147,197,253,0.45);
          text-transform:uppercase; letter-spacing:0.14em; font-weight:600;
          line-height:1; margin:0; padding:0;
        }
        .tdr-dbadge-val {
          font-size:18px; font-weight:800; line-height:1;
          margin:3px 0 0; padding:0;
          background:linear-gradient(135deg,#93c5fd,#3b82f6);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        /* ── RESPONSIVE ── */
        @media (max-width:1023px) {
          .tdr { padding:88px 0 100px; }
          .tdr-inner { padding:0 36px; gap:52px; }
          .tdr-phone-front { width:230px; }
          .tdr-phone-back { width:170px; }
        }
        @media (max-width:767px) {
          .tdr { padding:64px 0 80px; }
          .tdr-inner { grid-template-columns:1fr; padding:0 20px; gap:48px; }
          .tdr-phones { min-height:360px; }
          .tdr-phone-front { width:200px; }
          .tdr-phone-back { display:none; }
          .tdr-cta { flex-direction:column; }
          .tdr-btn-p,.tdr-btn-g { justify-content:center; width:100%; }
        }
        @media (max-width:479px) {
          .tdr-inner { padding:0 16px; }
          .tdr-title { font-size:26px; }
          .tdr-feats { grid-template-columns:1fr; }
        }
      `}</style>

      <section className="tdr" ref={ref}>
        <div className="tdr-grid" />
        <div className="tdr-orb1" />
        <div className="tdr-orb2" />

        <div className="tdr-inner">

          {/* ── LEFT ── */}
          <div>
            {/* eyebrow */}
            <motion.div
              initial={{ opacity:0, y:-16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
            >
              <div className="tdr-eyebrow">
                <div className="tdr-eyebrow-dot" />
                <span>Revenue Intelligence</span>
              </div>
            </motion.div>

            {/* title */}
            <div style={{ overflow:"hidden" }}>
              <motion.h2 className="tdr-title"
                initial={{ y:70, opacity:0 }}
                animate={inView ? { y:0, opacity:1 } : {}}
                transition={{ duration:1, delay:0.07, ease:[0.16,1,0.3,1] }}>
                Turn Data Into
              </motion.h2>
            </div>
            <div style={{ overflow:"hidden" }}>
              <motion.h2 className="tdr-title"
                initial={{ y:70, opacity:0 }}
                animate={inView ? { y:0, opacity:1 } : {}}
                transition={{ duration:1, delay:0.14, ease:[0.16,1,0.3,1] }}>
                <span className="tdr-title-blue">Revenue</span>
              </motion.h2>
            </div>

            {/* animated underline */}
            <motion.div className="tdr-line"
              initial={{ scaleX:0, opacity:0 }}
              animate={inView ? { scaleX:1, opacity:1 } : {}}
              style={{ transformOrigin:"left" }}
              transition={{ duration:0.8, delay:0.38, ease:[0.22,1,0.36,1] }}
            />

            {/* desc */}
            <motion.p className="tdr-desc"
              initial={{ opacity:0, y:18 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.8, delay:0.44, ease:[0.22,1,0.36,1] }}>
              With over a decade of experience in software development, our team
              helps you build a comprehensive solution that caters to your business needs —
              from warehouse management and logistics to POS software.
              Your imagination is the only limit.
            </motion.p>

            {/* stats */}
            <motion.div className="tdr-stats"
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, delay:0.5, ease:[0.22,1,0.36,1] }}>
              <div className="tdr-stat">
                <p className="tdr-stat-val">{c1}+</p>
                <p className="tdr-stat-label">Years Experience</p>
              </div>
              <div className="tdr-stat-sep" />
              <div className="tdr-stat">
                <p className="tdr-stat-val">{c2}%</p>
                <p className="tdr-stat-label">Client Satisfaction</p>
              </div>
              <div className="tdr-stat-sep" />
              <div className="tdr-stat">
                <p className="tdr-stat-val">{c3}+</p>
                <p className="tdr-stat-label">Projects Delivered</p>
              </div>
            </motion.div>

            {/* features */}
            <motion.div className="tdr-feats"
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, delay:0.54, ease:[0.22,1,0.36,1] }}>
              {features.map(({ Icon, label }, i) => (
                <motion.div key={label} className="tdr-feat"
                  initial={{ opacity:0, x:-16 }}
                  animate={inView ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.45, delay:0.58 + i*0.07, ease:[0.22,1,0.36,1] }}>
                  <div className="tdr-feat-icon">
                    <Icon size={18} color="#60a5fa" />
                  </div>
                  <p className="tdr-feat-label">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div className="tdr-cta"
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.65, delay:0.88, ease:[0.22,1,0.36,1] }}>
              <button className="tdr-btn-p">
                Start Your Project
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
              <button className="tdr-btn-g">View Case Studies</button>
            </motion.div>
          </div>

          {/* ── RIGHT: Phones ── */}
          <div style={{ position:"relative" }}>
            {/* back phone */}
            <motion.div
              className="tdr-phone-back"
              style={{ y: phoneY2 }}
              initial={{ opacity:0, x:40 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.9, delay:0.2, ease:[0.22,1,0.36,1] }}
            >
              <svg viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", display:"block" }}>
                <rect x="2" y="2" width="276" height="556" rx="38" fill="#0d1f3c" stroke="rgba(59,130,246,0.2)" strokeWidth="2"/>
                <rect x="12" y="12" width="256" height="536" rx="30" fill="#050e1e"/>
                <rect x="90" y="16" width="100" height="22" rx="11" fill="#0d1f3c"/>
                <rect x="100" y="533" width="80" height="6" rx="3" fill="rgba(59,130,246,0.25)"/>
              </svg>
              <div style={{ position:"absolute", top:"14%", left:"6.5%", width:"87%", height:"72%", borderRadius:4, overflow:"hidden", background:"#071429" }}>
                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80" alt="app" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>
            </motion.div>

            {/* front phone */}
            <motion.div
              className="tdr-phone-front"
              style={{ y: phoneY1, position:"absolute", right:0, bottom:0 }}
              initial={{ opacity:0, x:40 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.9, delay:0.1, ease:[0.22,1,0.36,1] }}
            >
              {/* glow ring */}
              <div className="tdr-glow-ring" />

              {/* floating data badge */}
              <motion.div className="tdr-dbadge"
                initial={{ opacity:0, x:16, scale:0.88 }}
                animate={inView ? { opacity:1, x:0, scale:1 } : {}}
                transition={{ duration:0.6, delay:0.9, ease:[0.22,1,0.36,1] }}>
                <div className="tdr-dbadge-icon">📈</div>
                <div>
                  <p className="tdr-dbadge-label">Revenue Up</p>
                  <p className="tdr-dbadge-val">+42%</p>
                </div>
              </motion.div>

              {/* phone SVG */}
              <svg className="tdr-phone-svg" viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="276" height="556" rx="42" fill="#0a1930" stroke="url(#tpg)" strokeWidth="2.5"/>
                <rect x="12" y="12" width="256" height="536" rx="34" fill="#050e1e"/>
                <rect x="95" y="18" width="90" height="28" rx="14" fill="#0a1930"/>
                <rect x="-2" y="130" width="4" height="50" rx="2" fill="#1e3a6e"/>
                <rect x="-2" y="195" width="4" height="80" rx="2" fill="#1e3a6e"/>
                <rect x="278" y="155" width="4" height="100" rx="2" fill="#1e3a6e"/>
                <rect x="95" y="534" width="90" height="7" rx="3.5" fill="rgba(59,130,246,0.35)"/>
                <rect x="12" y="12" width="256" height="2" rx="1" fill="url(#tps)"/>
                <defs>
                  <linearGradient id="tpg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7"/>
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.35"/>
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="tps" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="transparent"/>
                    <stop offset="50%" stopColor="rgba(96,165,250,0.6)"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* animated chart screen */}
              <div className="tdr-screen">
                <BarChart inView={inView} />
              </div>
            </motion.div>

            {/* spacer keeps layout height */}
            <div style={{ height:520 }} />
          </div>

        </div>
      </section>
    </>
  );
}