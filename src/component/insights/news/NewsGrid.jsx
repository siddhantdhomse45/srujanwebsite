import { useState } from "react";

const Icons = {
  Cloud: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="7" width="4" height="14" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
  Cpu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <rect x="7" y="7" width="10" height="10" rx="1" /><rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 3v-2M12 3v-2M16 3v-2M8 23v-2M12 23v-2M16 23v-2M3 8h-2M3 12h-2M3 16h-2M23 8h-2M23 12h-2M23 16h-2" strokeLinecap="round" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  ),
  Flag: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Upload: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  ),
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  UserPlus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Smartphone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

/* ── Article data ── */
const ALL_ARTICLES = [
  { id:1,  date:"June 9, 2026",        Icon: Icons.Cloud,      bg:"#0d1b2e", title:"Banking on the Hybrid Cloud: What Big Banks Can Learn from Neobanks",                                                               tags:["NEWS"] },
  { id:2,  date:"April 29, 2026",      Icon: Icons.BarChart,   bg:"#1a1a4e", title:"Why Power BI AI Fails Without a Solid Architecture",                                                                               tags:["NEWS"] },
  { id:3,  date:"April 28, 2026",      Icon: Icons.Cpu,        bg:"#0a2a1a", title:"AI-Driven Design and the New Speed of Product Development",                                                                        tags:["NEWS"] },
  { id:4,  date:"March 30, 2026",      Icon: Icons.Globe,      bg:"#0d1b4e", title:"Many U.S. Enterprise AI Projects Fail at the Proof Stage — How Our LATAM Engineers Close the Gap",                               tags:["NEWS"] },
  { id:5,  date:"September 12, 2025",  Icon: Icons.Star,       bg:"#1a0d3e", title:"Intellectsoft Design Lab is Now on Dribbble",                                                                                      tags:["NEWS"] },
  { id:6,  date:"September 10, 2025",  Icon: Icons.MapPin,     bg:"#0d2a3e", title:"Intellectsoft Opens Brazilian Hub for Seamless, Nearshore Project Delivery",                                                       tags:["NEWS"] },
  { id:7,  date:"August 14, 2025",     Icon: Icons.Award,      bg:"#1a1a00", title:"Intellectsoft Honoured as Software Company of the Year by the Netty Awards",                                                       tags:["NEWS"] },
  { id:8,  date:"July 31, 2025",       Icon: Icons.Flag,       bg:"#001a2e", title:"Ukraine's Tech Potential on Full Display as Intellectsoft Takes Part in Key Diplomacy Forum",                                      tags:["NEWS"] },
  { id:9,  date:"June 4, 2025",        Icon: Icons.Star,       bg:"#1a0d0d", title:"Intellectsoft Named to Techreviewer's Top 100 IT Services Companies of 2025",                                                     tags:["NEWS"] },
  { id:10, date:"December 30, 2024",   Icon: Icons.TrendingUp, bg:"#0d2244", title:"Wrapping Up 2024: A Year of Growth, Innovation, and Global Impact",                                                                tags:["NEWS"] },
  { id:11, date:"September 20, 2024",  Icon: Icons.TrendingUp, bg:"#0a1a2e", title:"How Intellectsoft is Driving Norwegian Digital Transformation: Part 2",                                                            tags:["NEWS"] },
  { id:12, date:"September 20, 2024",  Icon: Icons.TrendingUp, bg:"#0a1a2e", title:"How Intellectsoft is Driving Norwegian Digital Transformation: Part 1",                                                            tags:["NEWS"] },
  { id:13, date:"August 2, 2024",      Icon: Icons.Upload,     bg:"#1a0d2e", title:"Cloud Migration: Best Practices of Seamless Migration",                                                                            tags:["BUSINESS","CUSTOM SOFTWARE DEVELOPMENT","NEWS","TECH TRENDS"] },
  { id:14, date:"July 22, 2024",       Icon: Icons.User,       bg:"#042c44", title:"Intellectsoft Quarter Updates: Intellectsoft's Journey with CEO Olga Kavunenko",                                                   tags:["NEWS"] },
  { id:15, date:"February 20, 2024",   Icon: Icons.Award,      bg:"#0d1a00", title:"Intellectsoft Soars as a Rising Star on IAOP's Global Outsourcing 100 List!",                                                     tags:["NEWS"] },
  { id:16, date:"January 22, 2024",    Icon: Icons.Globe,      bg:"#0d1b3e", title:"The UK-Ukraine TechBridge: Intellectsoft Creates A Work Group To Build A Global Digital Infrastructure",                           tags:["AI","CONSULTING","CUSTOM SOFTWARE DEVELOPMENT","NEWS","TECH TRENDS"] },
  { id:17, date:"January 22, 2024",    Icon: Icons.UserPlus,   bg:"#001a3e", title:"Intellectsoft Welcomes New Chief of Growth, Olga Kavunenko",                                                                       tags:["NEWS"] },
  { id:18, date:"October 3, 2023",     Icon: Icons.Shield,     bg:"#1a1a4e", title:"Intellectsoft Earns Coveted Recognition from Private Community 50Pros",                                                            tags:["NEWS"] },
  { id:19, date:"March 5, 2021",       Icon: Icons.Award,      bg:"#0a0a1e", title:"Intellectsoft Is Recognized as One of Highly-Rated Software Development B2B Companies in 2021 by Clutch",                        tags:["BUSINESS","COMMUNITY","CUSTOM SOFTWARE DEVELOPMENT","NEWS"] },
  { id:20, date:"March 3, 2021",       Icon: Icons.Smartphone, bg:"#0d2a3e", title:"Intellectsoft Received Two Influential Awards as One of Top Mobile App Development Companies",                                     tags:["BUSINESS","COMMUNITY","MOBILE DEVELOPMENT","NEWS"] },
  { id:21, date:"February 25, 2021",   Icon: Icons.Star,       bg:"#2a0d1a", title:"Intellectsoft Hits TheManifest's Prestigious Award: Top 100 Software Development Companies",                                       tags:["BUSINESS","COMMUNITY","CUSTOM SOFTWARE DEVELOPMENT","NEWS"] },
];

const PER_PAGE = 6;

/* ── Article Card ── */
function ArticleCard({ article, index }) {
  const { Icon, bg, date, title, tags } = article;
  const [hov, setHov] = useState(false);

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#ffffff",
        border: hov ? "1.5px solid #378ADD" : "1px solid #e5e7eb",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov ? "0 12px 36px -8px rgba(55,138,221,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: 180,
        background: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid overlay */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(55,138,221,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(55,138,221,0.07) 1px,transparent 1px)",
          backgroundSize:"30px 30px",
        }} />
        {/* Glow */}
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(55,138,221,0.15),transparent 65%)" }} />

        {/* Top accent bar */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:"3px",
          background: hov ? "linear-gradient(90deg,#185FA5,#378ADD,#60a5fa)" : "linear-gradient(90deg,rgba(55,138,221,0.4),transparent)",
          transition:"all 0.3s",
        }} />

        <div style={{
          position:"relative", zIndex:1,
          color: hov ? "#60a5fa" : "#378ADD",
          filter: hov ? "drop-shadow(0 0 10px rgba(55,138,221,0.6))" : "none",
          transform: hov ? "scale(1.1) translateY(-3px)" : "scale(1)",
          transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <Icon />
        </div>

        <span style={{
          position:"relative", zIndex:1,
          fontSize: 11,
          fontWeight: 600,
          color: hov ? "rgba(147,197,253,0.9)" : "#85B7EB",
          textAlign: "center",
          lineHeight: 1.5,
          transition: "color 0.3s",
        }}>
          {title.length > 55 ? title.slice(0, 55) + "…" : title}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 16px 14px" }}>
        <p style={{ fontSize:11, color:"#9ca3af", fontWeight:500, marginBottom:7 }}>{date}</p>

        <h3 style={{
          fontSize: 13,
          fontWeight: 700,
          color: hov ? "#185FA5" : "#111827",
          lineHeight: 1.5,
          marginBottom: 14,
          minHeight: 58,
          transition:"color 0.3s",
        }}>
          {title}
        </h3>

        {/* Tags */}
        <div style={{
          display:"flex", flexWrap:"wrap", gap:6,
          paddingTop:10,
          borderTop:"1px solid #f3f4f6",
        }}>
          {tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 10,
              fontWeight: 700,
              color: hov ? "#378ADD" : "#6b7280",
              letterSpacing: "0.06em",
              transition:"color 0.3s",
            }}>
              <span style={{ color:"#d1d5db", marginRight:1 }}>#</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── Main Export ── */
export default function NewsGrid({ filteredArticles }) {
  const articles = filteredArticles ?? ALL_ARTICLES;
  const [visible, setVisible] = useState(PER_PAGE);
  const [page, setPage] = useState(1);
  const [hovLoad, setHovLoad] = useState(false);

  const totalPages = Math.ceil(articles.length / PER_PAGE);
  const displayed = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  function handleLoadMore() {
    const next = Math.min(visible + PER_PAGE, articles.length);
    setVisible(next);
    setPage(Math.ceil(next / PER_PAGE));
  }

  function handlePage(p) {
    setPage(p);
    setVisible(p * PER_PAGE);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNext() {
    if (page < totalPages) handlePage(page + 1);
  }

  return (
    <section style={{
      background:
          "linear-gradient(135deg,#0a1628 0%,#0f2240 35%,#162d50 65%,#1a3660 100%)",    
      padding: "clamp(24px,4vw,48px) clamp(16px,5vw,56px) clamp(32px,5vw,72px)",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
    }}>

      {/* Breadcrumb */}
      <nav style={{
        display:"flex", alignItems:"center", gap:6,
        fontSize:12, color:"#6b7280",
        marginBottom:"28px",
      }}>
        {["Home","Blog","News"].map((crumb, i, arr) => (
          <span key={crumb} style={{ display:"flex", alignItems:"center", gap:6 }}>
            <span style={{
              color: i === arr.length - 1 ? "#111827" : "#6b7280",
              fontWeight: i === arr.length - 1 ? 700 : 400,
              cursor: i < arr.length - 1 ? "pointer" : "default",
              transition:"color 0.2s",
            }}>
              {crumb}
            </span>
            {i < arr.length - 1 && (
              <span style={{ color:"#d1d5db", display:"flex", alignItems:"center" }}>
                <Icons.ChevronRight />
              </span>
            )}
          </span>
        ))}
      </nav>

      {/* Section header */}
      <div style={{ marginBottom:"36px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"10px" }}>
          <div style={{ width:"4px", height:"32px", borderRadius:"2px", background:"linear-gradient(to bottom,#185FA5,#378ADD)" }} />
          <h2 style={{
            fontSize:"clamp(22px,3vw,32px)", fontWeight:"900",
            color:"#0f172a", letterSpacing:"-0.02em", margin:0,
          }}>
            Latest News
          </h2>
        </div>
        <p style={{ fontSize:"14px", color:"#64748b", marginLeft:"16px" }}>
          {articles.length} articles · Showing {Math.min(visible, articles.length)} of {articles.length}
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(clamp(200px,28%,340px),1fr))",
        gap:"clamp(16px,2.5vw,28px)",
        marginBottom:"36px",
      }}>
        {displayed.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i % PER_PAGE} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div style={{ textAlign:"center", marginBottom:"28px" }}>
          <button
            onClick={handleLoadMore}
            onMouseEnter={() => setHovLoad(true)}
            onMouseLeave={() => setHovLoad(false)}
            style={{
              background:"none", border:"none",
              color: hovLoad ? "#0C447C" : "#185FA5",
              fontSize:13, fontWeight:700,
              letterSpacing:"1px", textTransform:"uppercase",
              cursor:"pointer",
              display:"inline-flex", flexDirection:"column", alignItems:"center", gap:3,
              fontFamily:"'DM Sans',sans-serif",
              transition:"color 0.2s",
            }}
          >
            Load More
            <span style={{ transform: hovLoad ? "translateY(2px)" : "translateY(0)", transition:"transform 0.2s" }}>
              <Icons.ChevronDown />
            </span>
          </button>
        </div>
      )}

      {/* Pagination */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, flexWrap:"wrap" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(p)}
            style={{
              width:34, height:34, borderRadius:8,
              border: p === page ? "none" : "1px solid #e5e7eb",
              background: p === page ? "linear-gradient(135deg,#185FA5,#378ADD)" : "#fff",
              color: p === page ? "#fff" : "#374151",
              fontSize:13, fontWeight:600,
              cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif",
              transition:"all 0.25s",
              boxShadow: p === page ? "0 4px 12px rgba(24,95,165,0.35)" : "none",
              transform: p === page ? "scale(1.08)" : "scale(1)",
            }}
          >
            {p}
          </button>
        ))}

        {page < totalPages && (
          <button
            onClick={handleNext}
            style={{
              display:"inline-flex", alignItems:"center", gap:4,
              background:"none", border:"none",
              color:"#185FA5", fontSize:13, fontWeight:700,
              cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif",
              padding:"0 8px",
              transition:"color 0.2s",
            }}
          >
            Next
            <Icons.ChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}
