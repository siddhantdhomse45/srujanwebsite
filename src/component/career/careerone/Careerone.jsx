import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { FiClock, FiMapPin, FiBriefcase, FiUsers, FiGlobe } from "react-icons/fi";

/* ─────────────────────────────────────────
   JOB DATA
───────────────────────────────────────── */
const jobData = [
  {
    id: 1, title: "Shopify Developer", dept: "Engineering", tag: "E-Commerce",
    experience: "2–5 yrs", location: "Pune · On-site", color: "#22d3ee",
    description: "Craft conversion-optimised Shopify storefronts that merge brand identity with seamless UX — from Liquid templating to custom theme architecture.",
    responsibilities: ["Design & develop custom Shopify themes and templates","Integrate third-party apps and APIs into stores","Maintain and upgrade stores for peak performance","Ensure responsive design across all devices","Collaborate with design & marketing teams"],
    skills: ["Shopify & Liquid templating","HTML, CSS, JavaScript","Version control (Git)","E-commerce best practices","Performance optimisation"],
  },
  {
    id: 2, title: "Business Development", dept: "Sales", tag: "Growth",
    experience: "Fresher – 5 yrs", location: "Pune · On-site", color: "#f59e0b",
    description: "Drive business growth by identifying opportunities, forging client relationships and translating market insights into winning strategies.",
    responsibilities: ["Generate leads and develop business opportunities","Build and maintain client relationships","Collaborate with sales and marketing teams","Participate in negotiations and close sales","Prepare proposals and presentations"],
    skills: ["Excellent communication skills","Analytical & problem-solving abilities","Knowledge of IT services","Ability to work under pressure","Microsoft Office proficiency"],
  },
  {
    id: 3, title: "Node.js Developer", dept: "Engineering", tag: "Backend",
    experience: "2–5 yrs", location: "Pune · On-site", color: "#86efac",
    description: "Architect high-performance backend services and RESTful APIs that power web and mobile experiences at scale using Node.js.",
    responsibilities: ["Develop backend services and RESTful APIs","Integrate with front-end components","Write clean, maintainable code","Ensure high performance and responsiveness","Participate in code reviews"],
    skills: ["Node.js, Express.js","MongoDB, MySQL, PostgreSQL","RESTful API design","Git version control","Strong debugging skills"],
  },
  {
    id: 4, title: "Python Developer", dept: "Engineering", tag: "Backend",
    experience: "2–5 yrs", location: "Pune · On-site", color: "#c084fc",
    description: "Design scalable applications, automation pipelines, and intelligent systems using Python — from web APIs to machine learning integrations.",
    responsibilities: ["Design & develop scalable web applications","Write reusable, testable, efficient code","Develop APIs and integrate external services","Troubleshoot and maintain core software","Collaborate with front-end & PMs"],
    skills: ["Python, Flask/Django","MySQL, PostgreSQL","RESTful API development","Clean code practices","Unit testing & debugging"],
  },
  {
    id: 5, title: "PHP Developer", dept: "Engineering", tag: "Full-Stack",
    experience: "1–6 yrs", location: "Pune · On-site", color: "#fb7185",
    description: "Build dynamic web applications and APIs using PHP, powering robust online platforms with clean, maintainable server-side logic.",
    responsibilities: ["Develop and maintain web apps with PHP","Write clean and efficient PHP code","Collaborate with cross-functional teams","Troubleshoot and debug applications","Integrate third-party services and APIs"],
    skills: ["PHP, MySQL","Laravel or CodeIgniter","HTML, CSS, JavaScript","API integrations","Git & version control"],
  },
  {
    id: 6, title: "MERN / MEAN Stack", dept: "Engineering", tag: "Full-Stack",
    experience: "1–6 yrs", location: "Pune · On-site", color: "#67e8f9",
    description: "Deliver end-to-end JavaScript applications across the entire stack — from React/Angular frontends to Node.js APIs and MongoDB databases.",
    responsibilities: ["Build full-stack apps with MongoDB, Express, React/Angular, Node","Ensure seamless front-back integration","Optimise for speed and scalability","Write unit tests for reliability","Collaborate with cross-functional teams"],
    skills: ["MERN or MEAN stack","JavaScript, React, Angular, Node.js","Git version control","MongoDB / NoSQL databases","Debugging & problem-solving"],
  },
  {
    id: 7, title: "Android Developer", dept: "Mobile", tag: "Android",
    experience: "1–3 yrs", location: "Pune · On-site", color: "#a3e635",
    description: "Engineer high-quality Android applications with modern Kotlin patterns, seamless API integrations, and polished user experiences.",
    responsibilities: ["Build advanced Android platform applications","Write clean Kotlin code","Define and ship new features with cross-functional teams","Work with external APIs and data sources","Unit-test for robustness and reliability"],
    skills: ["Android SDK & Kotlin","REST APIs & JSON","Third-party libraries & APIs","Mobile architecture patterns","Full mobile development lifecycle"],
  },
  {
    id: 8, title: "iOS Developer", dept: "Mobile", tag: "iOS",
    experience: "2–5 yrs", location: "Pune · On-site", color: "#f9a8d4",
    description: "Create smooth, engaging iOS applications using Swift, UIKit and Apple frameworks that delight users across the Apple ecosystem.",
    responsibilities: ["Build advanced iOS platform applications","Collaborate on feature definition and delivery","Work with external data sources and APIs","Unit-test for edge cases and reliability","Fix bugs and improve app performance"],
    skills: ["Swift & Objective-C","UIKit, CoreData, Core Animation","iOS SDK","RESTful APIs & JSON","Full mobile development lifecycle"],
  },
  {
    id: 9, title: "Frontend Designer", dept: "Design", tag: "UI/UX",
    experience: "1–3 yrs", location: "Pune · On-site", color: "#fcd34d",
    description: "Combine design mastery with frontend craft to build visually stunning, responsive interfaces that make every interaction feel intentional.",
    responsibilities: ["Design and implement visually stunning websites","Create responsive web pages with developers","Maintain design consistency across devices","Keep websites updated and optimised","Improve speed and responsiveness"],
    skills: ["HTML, CSS, JavaScript","Bootstrap & responsive design","Figma, Adobe XD, Sketch","Git version control","SEO best practices"],
  },
];

const DEPTS = ["All", "Engineering", "Mobile", "Design", "Sales"];

/* ─── Responsive hook ─── */
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    return window.innerWidth < 480 ? "mobile" : window.innerWidth < 768 ? "tablet-sm" : window.innerWidth < 1024 ? "tablet" : "desktop";
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

/* ─── Scroll Reveal ─── */
const Rev = ({ children, delay = 0, y = 40, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
};

/* ─── Particle Background ─── */
const Particles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const count = W < 480 ? 25 : 55;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.2 + .3, a: Math.random() * .35 + .08,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(148,163,184,${.07 * (1 - d / 110)})`;
          ctx.lineWidth = .4; ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
};

/* ─── Morph Blob ─── */
const Blob = ({ color, w, h, top, left, delay = 0 }) => (
  <motion.div style={{ position: "absolute", width: w, height: h, top, left, background: color, filter: "blur(70px)", opacity: .15, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%", pointerEvents: "none", zIndex: 0 }}
    animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/40% 50% 60% 50%", "60% 40% 30% 70%/60% 30% 70% 40%"], scale: [1, 1.12, 1] }}
    transition={{ duration: 12 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const Careerone = () => {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile" || bp === "tablet-sm";
  const isTablet = bp === "tablet";

  const px = isMobile ? "16px" : isTablet ? "32px" : "48px";

  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "", resume: null });
  const modalRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 60 : 120]);

  const filtered = filter === "All" ? jobData : jobData.filter(j => j.dept === filter);

  const openModal = (job, mode) => {
    setSelectedJob(job); setModalMode(mode); setSuccess(false);
    setForm({ name: "", email: "", phone: "", cover: "", resume: null });
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedJob(null); setModalMode(null); setSuccess(false);
    document.body.style.overflow = "";
  };
  const handleSubmit = (e) => { e.preventDefault(); setSuccess(true); setTimeout(closeModal, 3200); };

  useEffect(() => {
    const fn = e => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .cp { font-family:'Outfit',sans-serif; background:#080c14; color:#e2e8f0; overflow-x:hidden; }
        .cp-serif { font-family:'DM Serif Display',serif; }
        .cp-mono { font-family:'Space Mono',monospace; }

        .cp-glass {
          background:rgba(255,255,255,0.04);
          backdrop-filter:blur(20px);
          -webkit-backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.08);
        }
        .cp-glass-md {
          background:rgba(255,255,255,0.06);
          backdrop-filter:blur(28px);
          -webkit-backdrop-filter:blur(28px);
          border:1px solid rgba(255,255,255,0.1);
        }
        .cp-grid {
          background-image:
            linear-gradient(rgba(148,163,184,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.025) 1px, transparent 1px);
          background-size:72px 72px;
        }

        .cp-btn-primary {
          background: linear-gradient(135deg,#0ea5e9,#6366f1);
          border:none; cursor:pointer; color:#fff; font-weight:600;
          font-family:'Outfit',sans-serif; font-size:14px;
          padding:13px 28px; border-radius:12px;
          transition:all .3s ease;
          box-shadow: 0 0 24px rgba(14,165,233,0.25);
        }
        .cp-btn-primary:hover { transform:translateY(-2px); box-shadow: 0 0 40px rgba(14,165,233,0.45); }
        .cp-btn-ghost {
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.1);
          cursor:pointer; color:#94a3b8;
          font-family:'Outfit',sans-serif; font-size:14px;
          padding:13px 28px; border-radius:12px;
          transition:all .3s ease;
        }
        .cp-btn-ghost:hover { background:rgba(255,255,255,0.08); color:#e2e8f0; border-color:rgba(255,255,255,0.2); }

        .job-card { transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease; }
        .job-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 30px 80px rgba(0,0,0,0.5); }

        .filter-pill {
          font-family:'Space Mono',monospace;
          font-size:11px; text-transform:uppercase; letter-spacing:1.5px;
          padding:8px 18px; border-radius:999px; cursor:pointer;
          transition:all .25s ease; border:none; white-space:nowrap;
        }
        .filter-pill.active { background:linear-gradient(135deg,#0ea5e9,#6366f1); color:#fff; box-shadow: 0 0 20px rgba(14,165,233,0.3); }
        .filter-pill.inactive { background:rgba(255,255,255,0.05); color:#64748b; border:1px solid rgba(255,255,255,0.08); }
        .filter-pill.inactive:hover { background:rgba(255,255,255,0.09); color:#94a3b8; }

        .cp-input {
          width:100%; padding:13px 16px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:12px; color:#e2e8f0;
          font-family:'Outfit',sans-serif; font-size:15px;
          outline:none; transition:all .2s ease;
        }
        .cp-input::placeholder { color:#475569; }
        .cp-input:focus { border-color:rgba(14,165,233,0.5); background:rgba(14,165,233,0.04); box-shadow:0 0 0 3px rgba(14,165,233,0.08); }

        .shimmer-line { position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent); }

        @keyframes checkDraw { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
        @keyframes circleDraw { from { stroke-dashoffset: 170; } to { stroke-dashoffset: 0; } }
        .anim-circle { animation: circleDraw 0.7s ease forwards; }
        .anim-check { animation: checkDraw 0.4s 0.7s ease forwards; }

        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .modal-enter { animation: fadeSlideUp 0.35s cubic-bezier(.16,1,.3,1); }

        .filter-scroll {
          display:flex; gap:10px; overflow-x:auto; -webkit-overflow-scrolling:touch;
          scrollbar-width:none; padding-bottom:4px;
        }
        .filter-scroll::-webkit-scrollbar { display:none; }

        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:#080c14; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(#0ea5e9,#6366f1); border-radius:2px; }

        @media (max-width: 640px) {
          .modal-sheet {
            position:fixed !important;
            bottom:0 !important; top:auto !important;
            left:0 !important; right:0 !important;
            border-radius:24px 24px 0 0 !important;
            max-height:92vh !important;
            width:100% !important;
            max-width:100% !important;
            padding:32px 20px 40px !important;
          }
          .modal-sheet .modal-drag-handle {
            display:block !important;
          }
        }
      `}</style>

      <div className="cp">

        {/* ══ HERO ══ */}
        <section ref={heroRef} className="cp-grid"
          style={{ position: "relative", minHeight: isMobile ? "100svh" : "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

          <Particles />
          <Blob color="radial-gradient(circle,#0ea5e9,#6366f1)" w={isMobile ? "320px" : "700px"} h={isMobile ? "280px" : "500px"} top="-15%" left="-10%" delay={0} />
          <Blob color="radial-gradient(circle,#a78bfa,#ec4899)" w={isMobile ? "260px" : "500px"} h={isMobile ? "220px" : "400px"} top="30%" left="60%" delay={3} />

          {!isMobile && (
            <div className="cp-serif" style={{ position: "absolute", right: "5%", bottom: "10%", fontSize: "clamp(140px,18vw,260px)", fontWeight: 400, color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>
              HIRE
            </div>
          )}

          <motion.div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: isMobile ? "90px 16px 60px" : isTablet ? "90px 32px 60px" : "100px 48px", y: heroY }}>
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <span className="cp-mono" style={{ fontSize: isMobile ? 10 : 11, letterSpacing: "0.2em", color: "#0ea5e9", textTransform: "uppercase", display: "block", marginBottom: isMobile ? 20 : 28 }}>
                — Waves Techno-Vision LLP &nbsp;·&nbsp; Careers
              </span>
            </motion.div>

            <div style={{ overflow: "hidden", marginBottom: 8 }}>
              <motion.h1 className="cp-serif"
                style={{ fontSize: isMobile ? "2.6rem" : "clamp(3rem,7vw,6.5rem)", fontWeight: 400, color: "#f8fafc", lineHeight: 1, margin: 0 }}
                initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: .1 }}>
                Shape the
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: isMobile ? 20 : 32 }}>
              <motion.h1 className="cp-serif"
                style={{ fontSize: isMobile ? "2.6rem" : "clamp(3rem,7vw,6.5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1, margin: 0, background: "linear-gradient(135deg,#38bdf8,#a78bfa,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: .2 }}>
                Future of Tech
              </motion.h1>
            </div>

            <motion.p style={{ color: "#94a3b8", fontSize: isMobile ? 15 : 18, lineHeight: 1.8, maxWidth: 560, marginBottom: isMobile ? 28 : 40 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .45 }}>
              We're building world-class products from Pune. Join a team that values craftsmanship, curiosity, and the courage to ship something extraordinary.
            </motion.p>

            <motion.div style={{ display: "flex", gap: isMobile ? 10 : 12, flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .6 }}>
              {[{ n: jobData.length, label: "Open Roles", icon: <FiBriefcase size={14} /> }, { n: "14+", label: "Years Building", icon: <FiClock size={14} /> }, { n: "500+", label: "Clients Served", icon: <FiGlobe size={14} /> }].map((s, i) => (
                <div key={i} className="cp-glass" style={{ borderRadius: 16, padding: isMobile ? "12px 16px" : "16px 24px", minWidth: isMobile ? 90 : 120 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {s.icon}
                    <p className="cp-serif" style={{ fontSize: isMobile ? 22 : 28, fontWeight: 400, color: "#f8fafc", margin: 0, lineHeight: 1 }}>{s.n}</p>
                  </div>
                  <p className="cp-mono" style={{ fontSize: isMobile ? 8 : 10, color: "#64748b", letterSpacing: "0.12em", textTransform: "uppercase", margin: "6px 0 0" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom,transparent,#080c14)", pointerEvents: "none", zIndex: 10 }} />
        </section>

        {/* ══ JOBS ══ */}
        <section style={{ padding: isMobile ? "48px 0 80px" : "80px 0 120px", position: "relative" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>

            <Rev>
              <div style={{ marginBottom: isMobile ? 28 : 48 }}>
                <span className="cp-mono" style={{ fontSize: isMobile ? 10 : 11, color: "#0ea5e9", letterSpacing: "0.2em", textTransform: "uppercase" }}>// open_positions</span>
                <h2 className="cp-serif" style={{ fontSize: isMobile ? "2rem" : "clamp(2.2rem,4vw,3.2rem)", fontWeight: 400, color: "#f8fafc", margin: "10px 0 0", lineHeight: 1.15 }}>
                  Find Your Role
                </h2>
              </div>
            </Rev>

            {/* Filter pills — scrollable on mobile */}
            <Rev delay={0.05}>
              <div className="filter-scroll" style={{ marginBottom: isMobile ? 28 : 48 }}>
                {DEPTS.map(d => (
                  <button key={d} onClick={() => setFilter(d)}
                    className={`filter-pill ${filter === d ? "active" : "inactive"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </Rev>

            {/* Cards grid — 1 col mobile, 2 col tablet-sm, auto-fill desktop */}
            <motion.div layout style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : bp === "tablet-sm"
                  ? "repeat(2,1fr)"
                  : "repeat(auto-fill,minmax(320px,1fr))",
              gap: isMobile ? 16 : 24,
            }}>
              <AnimatePresence mode="popLayout">
                {filtered.map((job, i) => (
                  <motion.div key={job.id} layout
                    initial={{ opacity: 0, scale: .92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: .92 }}
                    transition={{ duration: .5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}>
                    <JobCard job={job} onApply={openModal} onDetails={openModal} isMobile={isMobile} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#475569" }}>
                <p className="cp-mono" style={{ fontSize: 13 }}>No roles in this department right now.</p>
              </div>
            )}
          </div>
        </section>

        {/* ══ BOTTOM CULTURE STRIP ══ */}
        <Rev>
          <div style={{ maxWidth: 1280, margin: isMobile ? "0 auto 60px" : "0 auto 100px", padding: `0 ${px}` }}>
            <div className="cp-glass" style={{ borderRadius: isMobile ? 20 : 28, padding: isMobile ? "36px 24px" : "56px 64px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,rgba(14,165,233,0.08),rgba(99,102,241,0.08))", border: "1px solid rgba(14,165,233,0.15)" }}>
              <div className="shimmer-line" />
              <Blob color="radial-gradient(circle,#6366f1,#a78bfa)" w={isMobile ? "200px" : "400px"} h={isMobile ? "160px" : "300px"} top="-20%" left="60%" delay={1} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 className="cp-serif" style={{ fontSize: isMobile ? "1.7rem" : "clamp(2rem,3.5vw,3rem)", fontWeight: 400, color: "#f8fafc", marginBottom: 16, lineHeight: 1.2 }}>
                  Don't see your role?<br />
                  <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#38bdf8,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Let's talk anyway.</span>
                </h2>
                <p style={{ color: "#94a3b8", fontSize: isMobile ? 14 : 16, maxWidth: 480, lineHeight: 1.8, marginBottom: isMobile ? 24 : 32 }}>
                  We're always looking for exceptional talent. Send us your story and we'll find a place where you can do the best work of your career.
                </p>
                <button className="cp-btn-primary" style={{ fontSize: isMobile ? 14 : 15, padding: isMobile ? "13px 28px" : "15px 36px", width: isMobile ? "100%" : "auto" }}>
                  Send an Open Application
                </button>
              </div>
            </div>
          </div>
        </Rev>

        {/* ══ MODAL ══ */}
        <AnimatePresence>
          {selectedJob && modalMode && (
            <motion.div
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 1000, display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center", padding: isMobile ? 0 : 24, overflowY: "auto" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={e => { if (!modalRef.current?.contains(e.target)) closeModal(); }}>

              <motion.div
                ref={modalRef}
                className="cp-glass-md modal-enter modal-sheet"
                initial={isMobile ? { y: "100%" } : { scale: 0.95, opacity: 0 }}
                animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1 }}
                exit={isMobile ? { y: "100%" } : { scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                style={{
                  width: "100%", maxWidth: isMobile ? "100%" : 760,
                  maxHeight: isMobile ? "92svh" : "90vh",
                  overflowY: "auto", borderRadius: isMobile ? "24px 24px 0 0" : 24,
                  padding: isMobile ? "32px 20px 40px" : "44px 48px",
                  position: "relative", border: `1px solid ${selectedJob.color}25`,
                }}
                onClick={e => e.stopPropagation()}
              >
                {/* Drag handle (mobile) */}
                {isMobile && (
                  <div className="modal-drag-handle" style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 24px" }} />
                )}

                {/* Close button */}
                <button onClick={closeModal}
                  style={{ position: "absolute", top: isMobile ? 16 : 20, right: isMobile ? 16 : 20, width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, lineHeight: 1, transition: "all .2s" }}>
                  ×
                </button>

                {modalMode === "details" && (
                  <DetailsPanel job={selectedJob} color={selectedJob.color} onApply={() => { setModalMode("apply"); setSuccess(false); }} isMobile={isMobile} />
                )}
                {modalMode === "apply" && (
                  <ApplyPanel job={selectedJob} form={form} setForm={setForm} success={success} onSubmit={handleSubmit} onClose={closeModal} isMobile={isMobile} />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   JOB CARD (with React Icons)
───────────────────────────────────────── */
const JobCard = ({ job, onApply, onDetails, isMobile }) => (
  <div className="cp-glass job-card" style={{ borderRadius: 20, padding: isMobile ? 20 : 28, height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderTop: `1px solid ${job.color}30`, borderLeft: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${job.color},transparent)` }} />

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 10, fontFamily: "'Space Mono',monospace", color: job.color, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 5 }}>{job.tag}</span>
        <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: isMobile ? 19 : 22, fontWeight: 400, color: "#f8fafc", margin: 0, lineHeight: 1.2 }}>{job.title}</h3>
      </div>
      <div style={{ background: `${job.color}12`, border: `1px solid ${job.color}25`, borderRadius: 10, padding: "5px 10px", textAlign: "center", flexShrink: 0, marginLeft: 10 }}>
        <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: job.color, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>{job.dept}</p>
      </div>
    </div>

    <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 14 }} />
    <p style={{ color: "#94a3b8", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, flexGrow: 1, marginBottom: 16 }}>{job.description}</p>

    <div style={{ display: "flex", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
      <span style={{ fontSize: 12, color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
        <FiClock size={12} /> {job.experience}
      </span>
      <span style={{ fontSize: 12, color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>
        <FiMapPin size={12} /> {job.location}
      </span>
    </div>

    <div style={{ display: "flex", gap: 8 }}>
      <button className="cp-btn-primary" style={{ flex: 1, padding: "11px 0", fontSize: 13, borderRadius: 10 }}
        onClick={() => onApply(job, "apply")}>Apply Now</button>
      <button className="cp-btn-ghost" style={{ flex: 1, padding: "11px 0", fontSize: 13, borderRadius: 10 }}
        onClick={() => onDetails(job, "details")}>View Details</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   DETAILS PANEL
───────────────────────────────────────── */
const DetailsPanel = ({ job, color, onApply, isMobile }) => (
  <div>
    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color, textTransform: "uppercase", letterSpacing: "0.25em", display: "block", marginBottom: 10 }}>{job.tag} · {job.dept}</span>
    <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: isMobile ? 24 : 32, fontWeight: 400, color: "#f8fafc", margin: "0 0 10px", paddingRight: 40 }}>{job.title}</h2>
    <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
      <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
        <FiClock size={14} />{job.experience}
      </span>
      <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
        <FiMapPin size={14} />{job.location}
      </span>
    </div>
    <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />
    <p style={{ color: "#94a3b8", fontSize: isMobile ? 14 : 15, lineHeight: 1.8, marginBottom: 24 }}>{job.description}</p>
    {[{ heading: "Key Responsibilities", items: job.responsibilities }, { heading: "Required Skills", items: job.skills }].map(({ heading, items }) => (
      <div key={heading} style={{ marginBottom: 24 }}>
        <h4 style={{ fontFamily: "'DM Serif Display',serif", fontSize: isMobile ? 16 : 19, fontWeight: 400, color: "#e2e8f0", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 4, height: 18, borderRadius: 2, background: `linear-gradient(${color},transparent)`, display: "inline-block", flexShrink: 0 }} />
          {heading}
        </h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 10, color: "#94a3b8", fontSize: isMobile ? 13 : 14, lineHeight: 1.7 }}>
              <span style={{ color, marginTop: 3, flexShrink: 0, fontSize: 10 }}>▸</span>{item}
            </li>
          ))}
        </ul>
      </div>
    ))}
    <button className="cp-btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={onApply}>Apply for this Position</button>
  </div>
);

/* ─────────────────────────────────────────
   APPLY PANEL
───────────────────────────────────────── */
const ApplyPanel = ({ job, form, setForm, success, onSubmit, onClose, isMobile }) => {
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  if (success) return (
    <div style={{ textAlign: "center", padding: "32px 0" }}>
      <svg width="80" height="80" viewBox="0 0 52 52" style={{ display: "block", margin: "0 auto 24px" }}>
        <circle cx="26" cy="26" r="24" fill="none" stroke={job.color} strokeWidth="2" strokeDasharray="170" strokeDashoffset="170" className="anim-circle" />
        <path d="M14 27l8 8 16-16" fill="none" stroke={job.color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="60" className="anim-check" />
      </svg>
      <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 26, fontWeight: 400, color: "#f8fafc", marginBottom: 12 }}>Application Sent!</h3>
      <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>Thank you for applying for <strong style={{ color: "#e2e8f0" }}>{job.title}</strong>. Our team will be in touch soon.</p>
      <button className="cp-btn-ghost" style={{ marginTop: 28 }} onClick={onClose}>Close</button>
    </div>
  );
  return (
    <div>
      <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: job.color, textTransform: "uppercase", letterSpacing: "0.25em", display: "block", marginBottom: 10 }}>Applying for</span>
      <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: isMobile ? 22 : 28, fontWeight: 400, color: "#f8fafc", margin: "0 0 24px", paddingRight: 40 }}>{job.title}</h2>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />
      <form onSubmit={onSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 12 : 16, marginBottom: isMobile ? 12 : 16 }}>
          {[{ k: "name", ph: "Full name", label: "Full Name", type: "text" }, { k: "email", ph: "Email address", label: "Email", type: "email" }].map(f => (
            <div key={f.k}>
              <label style={{ fontSize: 11, color: "#64748b", display: "block", marginBottom: 8, fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.label}</label>
              <input type={f.type} placeholder={f.ph} value={form[f.k]} onChange={e => set(f.k, e.target.value)} required className="cp-input" />
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 12 : 16, marginBottom: isMobile ? 12 : 16 }}>
          <div>
            <label style={{ fontSize: 11, color: "#64748b", display: "block", marginBottom: 8, fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Phone</label>
            <input type="tel" placeholder="Phone number" value={form.phone} onChange={e => set("phone", e.target.value)} required className="cp-input" />
          </div>
          <div>
            <label style={{ fontSize: 11, color: "#64748b", display: "block", marginBottom: 8, fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Position</label>
            <input type="text" value={job.title} readOnly className="cp-input" style={{ opacity: .6, cursor: "not-allowed" }} />
          </div>
        </div>
        <div style={{ marginBottom: isMobile ? 12 : 16 }}>
          <label style={{ fontSize: 11, color: "#64748b", display: "block", marginBottom: 8, fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Cover Letter</label>
          <textarea placeholder="Tell us why you're a great fit…" rows={4} value={form.cover} onChange={e => set("cover", e.target.value)}
            className="cp-input" style={{ resize: "vertical", minHeight: 100 }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 11, color: "#64748b", display: "block", marginBottom: 8, fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Resume / CV</label>
          <label style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 14px", background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.12)", borderRadius: 12, cursor: "pointer", transition: "all .2s" }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(14,165,233,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>📎</span>
            <span style={{ fontSize: 13, color: form.resume ? "#e2e8f0" : "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{form.resume ? form.resume.name : "Upload PDF or Word document"}</span>
            <input type="file" accept=".pdf,.doc,.docx" onChange={e => set("resume", e.target.files[0])} style={{ display: "none" }} />
          </label>
          <p style={{ fontSize: 11, color: "#334155", marginTop: 6, fontFamily: "'Space Mono',monospace" }}>PDF or .docx · Max 5MB</p>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 10 }}>
          <button type="submit" className="cp-btn-primary" style={{ flex: 1, padding: "14px 0", fontSize: 14 }}>Submit Application</button>
          <button type="button" className="cp-btn-ghost" style={{ flex: 1, padding: "14px 0", fontSize: 14 }} onClick={onClose}>Cancel</button>
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "#334155", marginTop: 18, fontFamily: "'Space Mono',monospace" }}>We never share your information with third parties.</p>
      </form>
    </div>
  );
};

export default Careerone;