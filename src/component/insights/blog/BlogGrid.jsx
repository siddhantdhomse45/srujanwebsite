import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  BLOG / INSIGHTS GRID — Premium Edition                     ║
 ║  Layout: 3-col grid, photo + date + title + tags            ║
 ║  "LOAD MORE" button at bottom                               ║
 ║  Color: #3b82f6 deep navy premium                           ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

const ALL_POSTS = [
  {
    id: 1, date: "June 9, 2026",
    title: "Banking on the Hybrid Cloud: What Big Banks Can Learn from Neobanks",
    excerpt: "",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    id: 2, date: "June 5, 2026",
    title: "AI Product Catalogs: Turning Manufacturer Documents into Searchable Knowledge",
    excerpt: "",
    tags: ["AI"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    id: 3, date: "May 15, 2026",
    title: "AI in Software Development: Launch Faster, Cut Time to Market by 40%",
    excerpt: "",
    tags: ["AI"],
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80",
  },
  {
    id: 4, date: "May 14, 2026",
    title: "What Defines IT Outsourcing Price and How to Optimize Your Costs",
    excerpt: "",
    tags: ["BUSINESS", "CUSTOM SOFTWARE DEVELOPMENT", "OUTSTAFFING"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 5, date: "May 13, 2026",
    title: "Top 10 Custom Software Development Companies in the USA for Big Data Enterprise Solutions",
    excerpt: "",
    tags: ["DATA"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 6, date: "May 8, 2026",
    title: "Top 10 Healthcare Data Analytics Companies Leading the Vertical in 2026",
    excerpt: "",
    tags: ["BUSINESS", "HEALTHCARE"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: 7, date: "April 29, 2026",
    title: "Why Power BI AI Fails Without a Solid Architecture",
    excerpt: "",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    id: 8, date: "April 28, 2026",
    title: "AI-Driven Design and the New Speed of Product Development",
    excerpt: "",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    id: 9, date: "April 27, 2026",
    title: "Reliable Legacy Software Modernization Companies You Can Trust in 2026",
    excerpt: "",
    tags: ["BUSINESS", "CUSTOM SOFTWARE DEVELOPMENT"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: 10, date: "April 10, 2026",
    title: "Stop Building Dashboards, Start Building Decisions: AI Copilots for Business Analytics",
    excerpt: "",
    tags: ["AI", "DATA"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
  {
    id: 11, date: "April 2, 2026",
    title: "Top Fintech Software Development Companies You Can Trust in Regulated Markets",
    excerpt: "",
    tags: ["BANKING", "FINTECH"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    id: 12, date: "March 30, 2026",
    title: "Many U.S. Enterprise AI Projects Fail at the Proof Stage — How Our LATAM Engineers Close the Gap",
    excerpt: "",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
];

const TAG_COLORS = {
  AI:       "#8b5cf6",
  DATA:     "#06b6d4",
  NEWS:     "#3b82f6",
  FINTECH:  "#10b981",
  BANKING:  "#0ea5e9",
  BUSINESS: "#f59e0b",
  DESIGN:   "#ec4899",
  HEALTHCARE:"#14b8a6",
  OUTSOURCING: "#6366f1",
  OUTSTAFFING: "#a78bfa",
  "CUSTOM SOFTWARE DEVELOPMENT": "#3b82f6",
  "TECH TRENDS": "#f97316",
  "COMMUNITY": "#34d399",
  "DEDICATED TEAM": "#60a5fa",
};

function tagColor(tag) {
  return TAG_COLORS[tag] || BLUE;
}

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", filter: "blur(88px)", pointerEvents: "none", ...style }}
    />
  );
}

/* ── Single blog card ── */
function BlogCard({ post, index }) {
  const ref  = useRef(null);
  const inV  = useInView(ref, { once: true, margin: "-40px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      {/* Outer hover glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", inset: -2, borderRadius: 18,
          background: `radial-gradient(ellipse at 40% 30%, rgba(59,130,246,0.16), transparent 65%)`,
          filter: "blur(10px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          y: hov ? -5 : 0,
          boxShadow: hov
            ? `0 20px 52px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.28)`
            : "0 2px 16px rgba(0,0,0,0.28)",
          borderColor: hov ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.07)",
        }}
        transition={{ duration: 0.35, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex", flexDirection: "column",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
          <motion.img
            animate={{ scale: hov ? 1.06 : 1 }}
            transition={{ duration: 0.55, ease: E }}
            src={post.img}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Dark bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "55%",
            background: "linear-gradient(to top, rgba(5,11,24,0.75), transparent)",
            pointerEvents: "none",
          }} />
          {/* Top accent line on hover */}
          <motion.div
            animate={{ scaleX: hov ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.45, ease: E }}
            style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 2.5,
              background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)`,
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Content */}
        <div style={{
          padding: "22px 24px 26px",
          display: "flex", flexDirection: "column",
          gap: 0, flex: 1,
        }}>
          {/* Date */}
          <div style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 500, fontSize: 12,
            letterSpacing: 0.3,
            color: "rgba(255,255,255,0.35)",
            marginBottom: 12,
          }}>
            {post.date}
          </div>

          {/* Title */}
          <motion.h3
            animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.88)" }}
            transition={{ duration: 0.22 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: 1.55,
              margin: "0 0 12px",
              flex: 1,
            }}
          >
            {post.title}
          </motion.h3>

          {post.excerpt && (
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 13.5, lineHeight: 1.75,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 12px",
            }}>
              {post.excerpt}
            </p>
          )}

          {/* Divider */}
          <motion.div
            animate={{ background: hov ? `rgba(59,130,246,0.4)` : "rgba(255,255,255,0.07)" }}
            transition={{ duration: 0.3 }}
            style={{ height: 1, width: "100%", margin: "12px 0 14px" }}
          />

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            {post.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700, fontSize: 9.5,
                  letterSpacing: 1.5, textTransform: "uppercase",
                  color: tagColor(tag),
                  display: "flex", alignItems: "center", gap: 4,
                }}
              >
                <span style={{ opacity: 0.6, fontSize: 10 }}>#</span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function BlogGrid() {
  const INITIAL   = 6;
  const PER_LOAD  = 3;
  const [visible, setVisible] = useState(INITIAL);
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const visiblePosts = ALL_POSTS.slice(0, visible);
  const hasMore      = visible < ALL_POSTS.length;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .blog-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1000px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-section { padding: 80px 36px 96px !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-section { padding: 60px 16px 80px !important; }
          .blog-h2 { font-size: 24px !important; }
        }
      `}</style>

      <section ref={sectionRef} className="blog-section">
        <Orb style={{ width: 580, height: 580, background: "rgba(59,130,246,0.08)", top: -160, left: -100 }} />
        <Orb style={{ width: 460, height: 460, background: "rgba(96,165,250,0.06)", bottom: -80, right: -80 }} />
        <Orb style={{ width: 340, height: 340, background: "rgba(139,92,246,0.05)", top: "40%", left: "40%" }} />

        <motion.div style={{
          position: "absolute", inset: "-10%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: 72 }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={headInV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
            >
              <div style={{ width: 36, height: 2.5, background: BLUE, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: BLUE,
              }}>
                Insights & Resources
              </span>
            </motion.div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
              <motion.h1
                className="blog-h2"
                initial={{ opacity: 0, y: 32 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 56px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Our{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE}, ${BLUE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Blog
                </span>
              </motion.h1>

              {/* Filter pills */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={headInV ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2, ease: E }}
                style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
              >
                {["All", "AI", "FinTech", "Business", "News", "Data"].map((f, i) => (
                  <motion.button
                    key={f}
                    whileHover={{ background: `${BLUE}22`, borderColor: `${BLUE}55` }}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: i === 0 ? 700 : 500,
                      fontSize: 11, letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: i === 0 ? BLUE : "rgba(255,255,255,0.45)",
                      background: i === 0 ? `${BLUE}18` : "rgba(255,255,255,0.04)",
                      border: `1px solid ${i === 0 ? `${BLUE}44` : "rgba(255,255,255,0.08)"}`,
                      borderRadius: 8, padding: "7px 16px",
                      cursor: "pointer", outline: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    {f}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 40, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE} 40%, rgba(255,255,255,0.06) 100%)`,
                transformOrigin: "left", borderRadius: 2,
              }}
            />
          </div>

          {/* ── Blog grid ── */}
          <div className="blog-grid">
            <AnimatePresence>
              {visiblePosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {/* ── Load More ── */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: E }}
              style={{ marginTop: 64, textAlign: "center" }}
            >
              <motion.button
                onClick={() => setVisible(v => Math.min(v + PER_LOAD, ALL_POSTS.length))}
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "transparent",
                  color: BLUE_LITE,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700, fontSize: 12,
                  letterSpacing: 2.5, textTransform: "uppercase",
                  padding: "0 0 12px 0",
                  border: "none", borderBottom: `2px solid ${BLUE}`,
                  cursor: "pointer", outline: "none",
                  transition: "color 0.2s",
                }}
              >
                Load More
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 2v10M3 8l4 4 4-4"/>
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          )}

          {/* All loaded message */}
          {!hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: 56, textAlign: "center",
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13, letterSpacing: 2, textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              — All articles loaded —
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}