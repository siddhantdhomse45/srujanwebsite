// import { Cpu, Layers3, Users, Building2, Globe, Award } from "lucide-react";

// const features = [
//   {
//     number: "01",
//     title: "Agentic AI Across Delivery",
//     description:
//       "We integrate AI into every stage of software delivery, accelerating development while maintaining enterprise-grade quality.",
//     icon: Cpu,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     number: "02",
//     title: "Architecture First",
//     description:
//       "Every engagement begins with deep technical architecture planning before a single line of code is written.",
//     icon: Layers3,
//     color: "from-red-500 to-orange-500",
//   },
//   {
//     number: "03",
//     title: "Long-Term Partnership",
//     description:
//       "We work as an extension of your internal team, focusing on outcomes and long-term success.",
//     icon: Users,
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     number: "04",
//     title: "Mid-Size By Design",
//     description:
//       "Large enough to deliver enterprise solutions, small enough for direct access to leadership.",
//     icon: Building2,
//     color: "from-amber-500 to-yellow-500",
//   },
//   {
//     number: "05",
//     title: "Global Coverage",
//     description:
//       "Engineering teams across multiple continents provide continuous delivery and support.",
//     icon: Globe,
//     color: "from-purple-500 to-violet-500",
//   },
//   {
//     number: "06",
//     title: "Top 1% Talent",
//     description:
//       "Only the strongest engineers pass our rigorous technical evaluation process.",
//     icon: Award,
//     color: "from-sky-500 to-blue-500",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="relative py-32 bg-white overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:30px_30px] opacity-40"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-24">
//           <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
//             Why Choose Us
//           </span>

//           <h2 className="mt-5 text-5xl md:text-6xl font-bold text-slate-900">
//             What Sets Us Apart
//           </h2>

//           <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
//             We don't just build software. We create scalable digital products
//             that deliver measurable business outcomes.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Center Line */}
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>

//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.number}
//                 className={`relative flex flex-col lg:flex-row items-center mb-24 ${
//                   index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Content */}
//                 <div className="w-full lg:w-1/2 px-8">
//                   <div className="relative group">
//                     {/* Huge Number */}
//                     <span className="absolute -top-16 left-0 text-[120px] md:text-[160px] font-black text-slate-100 select-none">
//                       {item.number}
//                     </span>

//                     <div className="relative z-10">
//                       <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">
//                         {item.title}
//                       </h3>

//                       <p className="text-slate-600 leading-8 text-lg">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Icon Circle */}
//                 <div className="relative z-20 my-10 lg:my-0">
//                   <div
//                     className={`w-24 h-24 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl hover:scale-110 transition duration-500`}
//                   >
//                     <Icon className="text-white" size={36} />
//                   </div>

//                   <div
//                     className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} blur-xl opacity-30`}
//                   ></div>
//                 </div>

//                 {/* Empty Side */}
//                 <div className="hidden lg:block w-1/2"></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Stats */}
//         <div className="mt-24 grid md:grid-cols-3 gap-8">
//           <div className="text-center p-10 rounded-3xl bg-slate-50 border">
//             <h3 className="text-5xl font-bold text-blue-600">40%</h3>
//             <p className="mt-3 text-slate-600">
//               Faster Product Delivery
//             </p>
//           </div>

//           <div className="text-center p-10 rounded-3xl bg-slate-50 border">
//             <h3 className="text-5xl font-bold text-emerald-600">24/7</h3>
//             <p className="mt-3 text-slate-600">
//               Global Engineering Support
//             </p>
//           </div>

//           <div className="text-center p-10 rounded-3xl bg-slate-50 border">
//             <h3 className="text-5xl font-bold text-purple-600">Top 1%</h3>
//             <p className="mt-3 text-slate-600">
//               Vetted Engineering Talent
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useRef, useState, useEffect } from "react";
import { Cpu, Layers3, Users, Building2, Globe, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Agentic AI Across Delivery",
    description:
      "We integrate AI into every stage of software delivery, accelerating development while maintaining enterprise-grade quality.",
    icon: Cpu,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    number: "02",
    title: "Architecture First",
    description:
      "Every engagement begins with deep technical architecture planning before a single line of code is written.",
    icon: Layers3,
    accent: "#fb923c",
    grad: "linear-gradient(135deg, #ea580c, #fb923c)",
  },
  {
    number: "03",
    title: "Long-Term Partnership",
    description:
      "We work as an extension of your internal team, focusing on outcomes and long-term success.",
    icon: Users,
    accent: "#34d399",
    grad: "linear-gradient(135deg, #059669, #34d399)",
  },
  {
    number: "04",
    title: "Mid-Size By Design",
    description:
      "Large enough to deliver enterprise solutions, small enough for direct access to leadership.",
    icon: Building2,
    accent: "#fbbf24",
    grad: "linear-gradient(135deg, #d97706, #fbbf24)",
  },
  {
    number: "05",
    title: "Global Coverage",
    description:
      "Engineering teams across multiple continents provide continuous delivery and support.",
    icon: Globe,
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
  {
    number: "06",
    title: "Top 1% Talent",
    description:
      "Only the strongest engineers pass our rigorous technical evaluation process.",
    icon: Award,
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
];

const bottomStats = [
  { value: "40%", label: "Faster Product Delivery", accent: "#38bdf8", grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)" },
  { value: "24/7", label: "Global Engineering Support", accent: "#34d399", grad: "linear-gradient(135deg, #059669, #34d399)" },
  { value: "Top 1%", label: "Vetted Engineering Talent", accent: "#c084fc", grad: "linear-gradient(135deg, #9333ea, #c084fc)" },
];

const GLASS = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

/* ── Desktop timeline item ── */
function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 100px 1fr",
        alignItems: "center",
        marginBottom: 64,
        gap: 0,
      }}
    >
      {/* Left */}
      <div style={{ padding: "0 48px 0 0", display: "flex", justifyContent: "flex-end" }}>
        {isEven ? <ContentCard item={item} index={index} /> : <div />}
      </div>

      {/* Center icon */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
          style={{
            width: 72, height: 72, borderRadius: "50%",
            background: item.grad,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 40px ${item.accent}50`,
            position: "relative",
          }}
        >
          <Icon size={30} color="white" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: -4, borderRadius: "50%",
              border: `2px solid ${item.accent}`,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Right */}
      <div style={{ padding: "0 0 0 48px", display: "flex", justifyContent: "flex-start" }}>
        {!isEven ? <ContentCard item={item} index={index} /> : <div />}
      </div>
    </motion.div>
  );
}

/* ── Mobile stacked item ── */
function MobileTimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        gap: 16,
        marginBottom: 24,
        alignItems: "flex-start",
      }}
    >
      {/* Left: icon + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: item.grad,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 24px ${item.accent}45`,
          position: "relative", zIndex: 1, flexShrink: 0,
        }}>
          <Icon size={22} color="white" />
        </div>
        {index < features.length - 1 && (
          <div style={{
            width: 1, flex: 1, minHeight: 32,
            background: `linear-gradient(to bottom, ${item.accent}50, transparent)`,
            marginTop: 6,
          }} />
        )}
      </div>

      {/* Right: card */}
      <ContentCard item={item} index={index} mobile />
    </motion.div>
  );
}

/* ── Content card (shared) ── */
function ContentCard({ item, index, mobile = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: mobile ? "20px 20px" : "28px 32px",
        maxWidth: mobile ? "100%" : 440,
        width: "100%",
        background: hovered
          ? `linear-gradient(145deg, ${item.accent}12, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${item.accent}45` : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${item.accent}15` : "none",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Ghost number */}
      <div style={{
        position: "absolute", top: -20, right: 16,
        fontSize: mobile ? 64 : 100, fontWeight: 900, lineHeight: 1,
        color: `${item.accent}10`,
        fontFamily: "'DM Sans', sans-serif",
        userSelect: "none", pointerEvents: "none",
      }}>
        {item.number}
      </div>

      {/* Number badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 32, height: 32, borderRadius: 8,
        background: item.grad,
        color: "white", fontSize: 12, fontWeight: 700,
        fontFamily: "'DM Sans', sans-serif",
        marginBottom: 12,
        boxShadow: `0 4px 12px ${item.accent}40`,
      }}>
        {item.number}
      </div>

      <h3 style={{
        color: "white",
        fontSize: mobile ? 15 : 19,
        fontWeight: 700,
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "-0.3px",
        marginBottom: 8,
        margin: "0 0 8px",
      }}>
        {item.title}
      </h3>

      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: mobile ? 13 : 14,
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {item.description}
      </p>

      {/* Bottom line */}
      <div style={{
        height: 2, borderRadius: 2, marginTop: 16,
        background: item.grad,
        width: hovered ? "60%" : "0%",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </div>
  );
}

/* ── Bottom stat card ── */
function BottomStatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 28px)",
        textAlign: "center",
        background: hovered
          ? `linear-gradient(145deg, ${stat.accent}12, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${stat.accent}45` : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${stat.accent}15` : "none",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "default",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{
        fontSize: "clamp(28px, 4vw, 52px)",
        fontWeight: 800,
        letterSpacing: "-2px",
        lineHeight: 1,
        background: stat.grad,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        fontFamily: "'DM Sans', sans-serif",
        marginBottom: 10,
        margin: "0 0 10px",
      }}>
        {stat.value}
      </h3>
      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: "clamp(12px, 1.5vw, 14px)",
        fontFamily: "'DM Sans', sans-serif",
        margin: 0,
      }}>
        {stat.label}
      </p>
      <div style={{
        height: 2, borderRadius: 2,
        background: stat.grad,
        width: hovered ? "60%" : "0%",
        margin: "16px auto 0",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </motion.div>
  );
}

/* ── Main export ── */
export default function WhyChooseUs() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .wcu-wrapper {
          padding: 120px 0;
        }
        .wcu-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
        }
        .wcu-heading {
          text-align: center;
          margin-bottom: 96px;
        }
        .wcu-stats-grid {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .wcu-wrapper {
            padding: 72px 0 80px;
          }
          .wcu-inner {
            padding: 0 16px;
          }
          .wcu-heading {
            margin-bottom: 48px;
          }
          .wcu-stats-grid {
            margin-top: 48px;
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        @media (max-width: 480px) {
          .wcu-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      {/* Grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wcugrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wcugrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -100, left: -100,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      <div className="wcu-wrapper">
        <div className="wcu-inner">

          {/* Header */}
          <motion.div
            ref={headRef}
            className="wcu-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              ...GLASS, borderRadius: 100, padding: "6px 18px", marginBottom: 22,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                Why Choose Us
              </span>
            </div>

            <h2 style={{
              color: "white",
              fontSize: "clamp(26px, 4vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              marginBottom: 18,
              margin: "0 0 18px",
            }}>
              What Sets Us{" "}
              <span style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Apart
              </span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(13px, 1.5vw, 16px)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.75,
            }}>
              We don't just build software. We create scalable digital products
              that deliver measurable business outcomes.
            </p>
          </motion.div>

          {/* Timeline — desktop vs mobile */}
          {isMobile ? (
            /* Mobile: left-icon + card stacked list */
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: 25, top: 0, bottom: 0, width: 1,
                background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.2) 10%, rgba(192,132,252,0.2) 90%, transparent)",
                pointerEvents: "none",
              }} />
              {features.map((item, index) => (
                <MobileTimelineItem key={item.number} item={item} index={index} />
              ))}
            </div>
          ) : (
            /* Desktop: alternating left/right timeline */
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: "50%", top: 0, bottom: 0,
                width: 1,
                background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.2) 10%, rgba(129,140,248,0.2) 50%, rgba(192,132,252,0.2) 90%, transparent)",
                transform: "translateX(-50%)", pointerEvents: "none",
              }} />
              {features.map((item, index) => (
                <TimelineItem key={item.number} item={item} index={index} />
              ))}
            </div>
          )}

          {/* Bottom stats */}
          <div className="wcu-stats-grid">
            {bottomStats.map((stat, i) => (
              <BottomStatCard key={i} stat={stat} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}