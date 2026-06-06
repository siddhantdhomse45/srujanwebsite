import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    title: "IAATO Antarctica Expedition App",
    desc: "An intuitive mobile app that helps travellers and expedition staff access vital environmental protocols anytime, anywhere, even without an internet connection.",
    image: "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=800&q=80",
    accent: "#38bdf8", grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)", tag: "Mobile App",
  },
  {
    title: "All-in-One 3D Tool that Helped a Solar Innovator Close Deals Faster",
    desc: "Teamed up with a British design and engineering business rethinking how buildings are powered.",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80",
    accent: "#818cf8", grad: "linear-gradient(135deg,#6366f1,#818cf8)", tag: "SaaS Tool",
  },
  {
    title: "Client Management Platform for Dental Clinics",
    desc: "A tailor-made client management system designed for dental clinics in the UK to improve the quality of interaction between clinics, doctors, and their patients.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    accent: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)", tag: "HealthTech",
  },
  {
    title: "Advanced Inspection Management System",
    desc: "UK-based company competent in inspection & testing of installations within potentially explosive atmospheres.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#fb923c", grad: "linear-gradient(135deg,#ea580c,#fb923c)", tag: "Enterprise",
  },
  {
    title: "Skroote",
    desc: "A cutting-edge portal app and website with built-in AI that aggregates all available streaming content.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    accent: "#c084fc", grad: "linear-gradient(135deg,#9333ea,#c084fc)", tag: "Media & AI",
  },
  {
    title: "Eurostar",
    desc: "The high-speed railway pioneer gets automated solutions to process passenger information, improve on-board services, and report information to passengers.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
    accent: "#f472b6", grad: "linear-gradient(135deg,#db2777,#f472b6)", tag: "Transport",
  },
  {
    title: "EY",
    desc: "Forecasts in Focus confirms EY as a thought-leader in the eyes of an audience relying on data to drive smarter investment decisions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    accent: "#fbbf24", grad: "linear-gradient(135deg,#d97706,#fbbf24)", tag: "FinTech",
  },
  {
    title: "Harley Davidson",
    desc: "The iconic brand gets an iPad app that showcases product customisations, helping the company's exhibition staff sign prospective clients.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "#f87171", grad: "linear-gradient(135deg,#dc2626,#f87171)", tag: "Automotive",
  },
  {
    title: "EuroAccident",
    desc: "One of the key players on the Swedish insurance market performs a digital transformation with a comprehensive mobile solution.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    accent: "#38bdf8", grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)", tag: "InsurTech",
  },
  {
    title: "Cirrus Insight",
    desc: "Cirrus Insight Mobile helps users leverage their sales data to gain valuable insights and discover new opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#818cf8", grad: "linear-gradient(135deg,#6366f1,#818cf8)", tag: "Sales Tech",
  },
  {
    title: "Jaguar Land Rover",
    desc: "The JRL Talk is a multilingual app that lets the representative leap over language barriers in a matter of seconds, ensuring clear and productive conversations.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    accent: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)", tag: "Automotive",
  },
  {
    title: "Guinness",
    desc: "This marketing app for Arthur Guinness Day vitalized the conversation between the beloved beverage brand and its admirers.",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
    accent: "#fbbf24", grad: "linear-gradient(135deg,#d97706,#fbbf24)", tag: "FMCG",
  },
  {
    title: "Holmenkollen",
    desc: "Norway's legendary ski festival benefits from an essential event app in a smooth but swift digital transformation.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    accent: "#c084fc", grad: "linear-gradient(135deg,#9333ea,#c084fc)", tag: "Events",
  },
  {
    title: "AF Gruppen",
    desc: "One of the biggest construction companies in Norway gets a digital transformation of their ERP with three spot-on solutions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    accent: "#fb923c", grad: "linear-gradient(135deg,#ea580c,#fb923c)", tag: "Construction",
  },
  {
    title: "Wynn Las Vegas and Encore",
    desc: "One of the finest and largest resorts in the world gets an essential hotel app that makes their guests stay even more comfortable.",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&q=80",
    accent: "#f472b6", grad: "linear-gradient(135deg,#db2777,#f472b6)", tag: "Hospitality",
  },
  {
    title: "Smart Luxury Hotel",
    desc: "A grand new hotel by an award-winning Asian chain gets a single smart room app for all its suites.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    accent: "#38bdf8", grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)", tag: "Hospitality",
  },
  {
    title: "Smart Fridges",
    desc: "A Californian vending machine manufacturer elevates their IoT solution, ensuring they provide offices in the US with top of the line catering 24/7.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    accent: "#34d399", grad: "linear-gradient(135deg,#059669,#34d399)", tag: "IoT",
  },
  {
    title: "Identification Solutions Provider",
    desc: "Established US company elevates their chief IoT offering with a spot-on solution combining mobile and web.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    accent: "#818cf8", grad: "linear-gradient(135deg,#6366f1,#818cf8)", tag: "Healthcare IoT",
  },
];

const VISIBLE_INIT = 6;

/* ─── Case Card ─── */
function CaseCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 600)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: hovered
          ? `linear-gradient(145deg,${item.accent}10,rgba(255,255,255,0.05))`
          : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${item.accent}40` : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${item.accent}15`
          : "0 4px 20px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        cursor: "pointer",
        fontFamily: "'DM Sans',sans-serif",
        display: "flex",
        flexDirection: "column",
        minWidth: 0, /* critical — prevents grid blowout */
        width: "100%",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            filter: hovered ? "brightness(0.75)" : "brightness(0.6)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 30%, rgba(4,13,26,0.85) 100%)",
        }} />

        {/* Tag */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          display: "inline-flex", alignItems: "center", gap: 6,
          background: `${item.accent}20`,
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          border: `1px solid ${item.accent}40`,
          borderRadius: 100, padding: "4px 12px",
          maxWidth: "calc(100% - 24px)",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: item.accent, boxShadow: `0 0 6px ${item.accent}`, flexShrink: 0 }} />
          <span style={{
            color: item.accent, fontSize: 10, fontWeight: 700,
            letterSpacing: 1.2, textTransform: "uppercase",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {item.tag}
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute", bottom: 14, right: 14,
            width: 34, height: 34, borderRadius: "50%",
            background: item.grad,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 4px 16px ${item.accent}50`,
            flexShrink: 0,
          }}
        >
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <h3 style={{
          color: "white", fontSize: 15, fontWeight: 700,
          lineHeight: 1.45, letterSpacing: "-0.2px", margin: 0,
          wordBreak: "break-word",
        }}>
          {item.title}
        </h3>
        <p style={{
          color: "rgba(255,255,255,0.45)", fontSize: 13,
          lineHeight: 1.75, margin: 0, flex: 1,
          wordBreak: "break-word",
        }}>
          {item.desc}
        </p>
        <div style={{
          height: 2, borderRadius: 2, marginTop: 6,
          background: item.grad,
          width: hovered ? "50%" : "0%",
          transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
        }} />
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function CaseStudies() {
  const [visible, setVisible] = useState(VISIBLE_INIT);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-40px" });
  const showAll = visible >= cases.length;

  return (
    <section className="cs-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .cs-section {
          position: relative;
          padding: 110px 0 120px;
          background: linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%);
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .cs-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }

        .cs-load-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          border-radius: 12px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .cs-inner { padding: 0 32px; }
          .cs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .cs-section { padding: 80px 0 90px; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .cs-section { padding: 60px 0 72px; }
          .cs-inner { padding: 0 16px; }
          .cs-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
            margin-bottom: 32px;
          }
          .cs-load-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            font-size: 14px;
          }
          .cs-header h2 {
            font-size: 28px !important;
            letter-spacing: -0.8px !important;
          }
          .cs-header p {
            font-size: 14px !important;
            padding: 0 4px;
          }
          .cs-header { margin-bottom: 36px !important; }
        }

        /* ── Small mobile ── */
        @media (max-width: 479px) {
          .cs-inner { padding: 0 14px; }
          .cs-grid { gap: 14px; }
        }
      `}</style>

      {/* Grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="csgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#csgrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1,1.1,1], opacity: [0.13,0.22,0.13] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -100, left: -80, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ scale: [1,1.08,1], opacity: [0.12,0.2,0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: -80, right: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
      />

      <div className="cs-inner">

        {/* Header */}
        <motion.div
          ref={headRef}
          className="cs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Our Work
            </span>
          </div>

          <h2 style={{
            color: "white",
            fontSize: "clamp(32px,4.5vw,56px)",
            fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 16,
          }}>
            Case{" "}
            <span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Studies
            </span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Developing a competitive advantage calls for developing more intelligent software solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="cs-grid">
          {cases.slice(0, visible).map((item, i) => (
            <CaseCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Load more */}
        <div style={{ textAlign: "center" }}>
          <motion.button
            onClick={() => setVisible(showAll ? VISIBLE_INIT : cases.length)}
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(56,189,248,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="cs-load-btn"
            style={{
              background: showAll ? "rgba(255,255,255,0.06)" : "linear-gradient(135deg,#1d6ff0,#0ea5e9)",
              border: showAll ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            {showAll ? (
              <>Show Less ↑</>
            ) : (
              <>
                Load More Cases
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </motion.button>

          {!showAll && (
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, marginTop: 12 }}>
              Showing {visible} of {cases.length} case studies
            </p>
          )}
        </div>
      </div>
    </section>
  );
}