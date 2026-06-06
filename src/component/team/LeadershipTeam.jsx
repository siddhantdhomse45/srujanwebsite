import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const leaderGroups = [
  {
    title: null,
    members: [
      { name: "Rahul Sharma", role: "Chief Executive Officer", image: "https://randomuser.me/api/portraits/men/32.jpg", flag: "🇮🇳", accent: "#38bdf8", grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)" },
      { name: "Amit Patel", role: "Co-Founder & CTO", image: "https://randomuser.me/api/portraits/men/45.jpg", flag: "🇮🇳", accent: "#818cf8", grad: "linear-gradient(135deg, #6366f1, #818cf8)" },
      { name: "Vikram Singh", role: "Chief Technology Officer", image: "https://randomuser.me/api/portraits/men/22.jpg", flag: "🇮🇳", accent: "#34d399", grad: "linear-gradient(135deg, #059669, #34d399)" },
      { name: "Rohit Verma", role: "Finance Director", image: "https://randomuser.me/api/portraits/men/68.jpg", flag: "🇮🇳", accent: "#fb923c", grad: "linear-gradient(135deg, #ea580c, #fb923c)" },
      { name: "Priya Deshmukh", role: "Head of Marketing", image: "https://randomuser.me/api/portraits/women/44.jpg", flag: "🇮🇳", accent: "#c084fc", grad: "linear-gradient(135deg, #9333ea, #c084fc)" },
      { name: "Neha Kapoor", role: "Head of Sales", image: "https://randomuser.me/api/portraits/women/65.jpg", flag: "🇮🇳", accent: "#f472b6", grad: "linear-gradient(135deg, #db2777, #f472b6)" },
      { name: "Anjali Mehta", role: "Head of Talent Acquisition", image: "https://randomuser.me/api/portraits/women/33.jpg", flag: "🇮🇳", accent: "#fbbf24", grad: "linear-gradient(135deg, #d97706, #fbbf24)" },
    ],
  },
  {
    title: "Delivery & Account",
    members: [
      { name: "Tetyana Galeva", role: "Delivery Lead", image: "https://randomuser.me/api/portraits/women/50.jpg", flag: "🇺🇦", accent: "#38bdf8", grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)" },
      { name: "Olha Soroka", role: "Design Lead", image: "https://randomuser.me/api/portraits/women/56.jpg", flag: "🇺🇦", accent: "#c084fc", grad: "linear-gradient(135deg, #9333ea, #c084fc)" },
    ],
  },
  {
    title: "Consulting & Solutions Advisory Team",
    members: [
      { name: "Anastasiia Lutsyshyn", role: "Digital Transformation Consultant", image: "https://randomuser.me/api/portraits/women/21.jpg", flag: "🇬🇧", accent: "#34d399", grad: "linear-gradient(135deg, #059669, #34d399)" },
      { name: "Olga Oleolenko", role: "Client Engagement & Partnership Manager", image: "https://randomuser.me/api/portraits/women/29.jpg", flag: "🇺🇸", accent: "#fb923c", grad: "linear-gradient(135deg, #ea580c, #fb923c)" },
      { name: "Anna Bogdanova", role: "Client Partner", image: "https://randomuser.me/api/portraits/women/55.jpg", flag: "🇺🇦", accent: "#818cf8", grad: "linear-gradient(135deg, #6366f1, #818cf8)" },
    ],
  },
];

/* ─── Responsive hook ─── */
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w < 480) return "mobile";
    if (w < 768) return "tablet-sm";
    if (w < 1024) return "tablet";
    return "desktop";
  });

  useState(() => {
    const handler = () => {
      const w = window.innerWidth;
      if (w < 480) setBp("mobile");
      else if (w < 768) setBp("tablet-sm");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return bp;
}

/* ─── Leader Card ─── */
function LeaderCard({ leader, index, compact = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const avatarSize = compact ? 80 : 110;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.4), ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 600)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: compact ? "24px 16px 20px" : "36px 24px 28px",
        borderRadius: compact ? 18 : 24,
        background: hovered
          ? `linear-gradient(145deg, ${leader.accent}12, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${leader.accent}45`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${leader.accent}18`
          : "0 4px 20px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        minWidth: 0,
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)",
        width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle, ${leader.accent}25, transparent 70%)`,
        filter: "blur(30px)", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s", pointerEvents: "none",
      }} />

      {/* Avatar */}
      <div style={{ position: "relative", marginBottom: 6, zIndex: 1 }}>
        <motion.div
          animate={hovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 6, repeat: hovered ? Infinity : 0, ease: "linear" }}
          style={{
            position: "absolute", inset: -4, borderRadius: "50%",
            background: hovered ? leader.grad : "transparent",
            opacity: hovered ? 0.7 : 0, transition: "opacity 0.4s", zIndex: 0,
          }}
        />
        <div style={{
          position: "absolute", inset: -3, borderRadius: "50%",
          border: `2px solid ${leader.accent}50`,
          opacity: hovered ? 0 : 1, transition: "opacity 0.4s",
        }} />
        <img
          src={leader.image} alt={leader.name}
          style={{
            width: avatarSize, height: avatarSize,
            borderRadius: "50%", objectFit: "cover", display: "block",
            border: "3px solid rgba(255,255,255,0.08)",
            position: "relative", zIndex: 1,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <motion.a
          href="#"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: "absolute", bottom: 2, right: -2,
            width: compact ? 22 : 28, height: compact ? 22 : 28,
            borderRadius: compact ? 6 : 8, background: "#0A66C2",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(10,102,194,0.5)", zIndex: 2, textDecoration: "none",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={compact ? 11 : 14} height={compact ? 11 : 14} fill="white" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0H12v2.3h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.5 3.1 5.5 7.1V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-5V8z" />
          </svg>
        </motion.a>
      </div>

      <div style={{ fontSize: compact ? 16 : 20, marginBottom: 8, zIndex: 1 }}>{leader.flag}</div>

      <h3 style={{
        color: "white",
        fontSize: compact ? 13 : 16,
        fontWeight: 700,
        textAlign: "center",
        margin: "0 0 5px",
        letterSpacing: "-0.2px",
        zIndex: 1,
        lineHeight: 1.3,
      }}>
        {leader.name}
      </h3>
      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: compact ? 11 : 13,
        textAlign: "center",
        lineHeight: 1.5,
        margin: 0,
        zIndex: 1,
      }}>
        {leader.role}
      </p>
      <div style={{
        height: 2, borderRadius: 2, marginTop: compact ? 14 : 18,
        background: leader.grad,
        width: hovered ? "60%" : "0%",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)", zIndex: 1,
      }} />
    </motion.div>
  );
}

/* ─── Group Divider ─── */
function GroupDivider({ title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", alignItems: "center", gap: 16, margin: "52px 0 40px" }}
    >
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1))" }} />
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "8px 18px",
      }}>
        <span style={{
          background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {title}
        </span>
      </div>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.1))" }} />
    </motion.div>
  );
}

/* ─── Responsive Card Grid ─── */
function CardGrid({ members, startIndex, bp }) {
  // cols per breakpoint
  const colMap = { mobile: 2, "tablet-sm": 2, tablet: 3, desktop: 4 };
  const cols = colMap[bp] ?? 4;
  const compact = bp === "mobile" || bp === "tablet-sm";

  const count = members.length;
  const lastRowCount = count % cols;
  const fullRows = Math.floor(count / cols);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 12 : 20 }}>
      {Array.from({ length: fullRows }).map((_, row) => (
        <div
          key={row}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: compact ? 12 : 20,
          }}
        >
          {members.slice(row * cols, row * cols + cols).map((leader, i) => (
            <LeaderCard
              key={i}
              leader={leader}
              index={startIndex + row * cols + i}
              compact={compact}
            />
          ))}
        </div>
      ))}
      {lastRowCount > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${lastRowCount}, minmax(0, ${compact ? 160 : 240}px))`,
            gap: compact ? 12 : 20,
            justifyContent: "center",
          }}
        >
          {members.slice(fullRows * cols).map((leader, i) => (
            <LeaderCard
              key={i}
              leader={leader}
              index={startIndex + fullRows * cols + i}
              compact={compact}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Section ─── */
const LeadershipTeam = () => {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile" || bp === "tablet-sm";

  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-40px" });
  let globalIndex = 0;

  return (
    <section style={{
      position: "relative",
      padding: isMobile ? "72px 0 80px" : "110px 0 120px",
      background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Grid pattern */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ltgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ltgrid)" />
      </svg>

      {/* Ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.13, 0.2, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -80, left: -60,
          width: isMobile ? 280 : 460, height: isMobile ? 280 : 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -60, right: -60,
          width: isMobile ? 280 : 480, height: isMobile ? 280 : 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: isMobile ? "0 16px" : bp === "tablet" ? "0 32px" : "0 48px",
        position: "relative",
        zIndex: 10,
      }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100,
            padding: isMobile ? "5px 14px" : "6px 18px", marginBottom: 16,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block",
            }} />
            <span style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: isMobile ? 10 : 12,
              fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
            }}>
              The People Behind It
            </span>
          </div>
          <h2 style={{
            color: "white",
            fontSize: isMobile ? "28px" : bp === "tablet" ? "38px" : "clamp(30px, 4vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: 14,
            margin: "0 0 14px",
          }}>
            Leadership{" "}
            <span style={{
              background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Team
            </span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: isMobile ? 14 : 16,
            maxWidth: 440,
            margin: "0 auto",
            lineHeight: 1.75,
            padding: isMobile ? "0 8px" : 0,
          }}>
            Meet the visionaries and experts driving our mission forward every single day.
          </p>
        </motion.div>

        {/* Groups */}
        {leaderGroups.map((group, gi) => {
          const startIndex = globalIndex;
          globalIndex += group.members.length;
          return (
            <div key={gi}>
              {group.title && <GroupDivider title={group.title} />}
              <CardGrid members={group.members} startIndex={startIndex} bp={bp} />
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default LeadershipTeam;