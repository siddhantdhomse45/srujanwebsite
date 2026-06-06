// import { useEffect, useState, useRef } from "react";
// import { Briefcase, Users, Award, CalendarDays } from "lucide-react";

// const stats = [
//   {
//     icon: <Briefcase size={50} />,
//     title: "Completed Projects",
//     value: "1000+",
//     numericValue: 1000,
//     suffix: "+",
//   },
//   {
//     icon: <Users size={50} />,
//     title: "Client Satisfaction",
//     value: "100%",
//     numericValue: 100,
//     suffix: "%",
//   },
//   {
//     icon: <Award size={50} />,
//     title: "Experts",
//     value: "50+",
//     numericValue: 50,
//     suffix: "+",
//   },
//   {
//     icon: <CalendarDays size={50} />,
//     title: "Years in Business",
//     value: "9 YRS",
//     numericValue: 9,
//     suffix: " YRS",
//   },
// ];

// export default function StatsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState(stats.map(() => 0));
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     // Animate counters
//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const stepTime = duration / steps;

//     stats.forEach((stat, idx) => {
//       const target = stat.numericValue;
//       let current = 0;
//       const increment = target / steps;
//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(interval);
//         }
//         setCounters((prev) => {
//           const newCounters = [...prev];
//           newCounters[idx] = Math.floor(current);
//           return newCounters;
//         });
//       }, stepTime);
//     });
//   }, [isVisible]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 bg-gradient-to-r from-slate-100 via-white to-slate-100 overflow-hidden"
//     >
//       {/* Background Blur Effect */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className={`transform transition-all duration-700 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-12"
//               }`}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               <div className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
//                 {/* Icon with subtle floating animation */}
//                 <div className="flex justify-center mb-5 text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition duration-500">
//                   {item.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   {item.title}
//                 </h3>

//                 {/* Animated Counter Value */}
//                 <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   {isVisible
//                     ? `${counters[index]}${item.suffix}`
//                     : `0${item.suffix}`}
//                 </h2>

//                 {/* Bottom Animated Line */}
//                 <div className="w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-5 group-hover:w-20 transition-all duration-500"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Optional: Add custom keyframes for pulse delay if not using Tailwind */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.4; }
//         }
//         .animate-pulse {
//           animation: pulse 4s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// }





import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Award, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Briefcase,
    title: "Completed Projects",
    numericValue: 1000,
    suffix: "+",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    numericValue: 100,
    suffix: "%",
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    icon: Award,
    title: "Experts",
    numericValue: 50,
    suffix: "+",
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
  {
    icon: CalendarDays,
    title: "Years in Business",
    numericValue: 9,
    suffix: " YRS",
    accent: "#34d399",
    grad: "linear-gradient(135deg, #059669, #34d399)",
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    stats.forEach((stat, idx) => {
      const target = stat.numericValue;
      let current = 0;
      const increment = target / steps;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounters((prev) => {
          const next = [...prev];
          next[idx] = Math.floor(current);
          return next;
        });
      }, stepTime);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .stats-wrapper {
          padding: 100px 0;
        }
        .stats-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
        }
        .stats-heading {
          text-align: center;
          margin-bottom: 64px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .stats-wrapper {
            padding: 64px 0 72px;
          }
          .stats-inner {
            padding: 0 16px;
          }
          .stats-heading {
            margin-bottom: 40px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
        }
      `}</style>

      {/* Grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="statgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statgrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -80, left: -80,
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -80, right: -80,
          width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />

      {/* Center radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(29,111,240,0.07), transparent)",
        pointerEvents: "none",
      }} />

      <div className="stats-wrapper">
        <div className="stats-inner">

          {/* Section label */}
          <motion.div
            className="stats-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                By the Numbers
              </span>
            </div>
            <h2 style={{
              color: "white",
              fontSize: "clamp(24px, 3.5vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              margin: 0,
            }}>
              Trusted Results,{" "}
              <span style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Proven Impact
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="stats-grid">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StatCard
                    Icon={Icon}
                    item={item}
                    count={counters[index]}
                    isVisible={isVisible}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ Icon, item, count, isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 28px) clamp(20px, 3vw, 32px)",
        textAlign: "center",
        overflow: "hidden",
        cursor: "default",
        background: hovered
          ? `linear-gradient(145deg, ${item.accent}12, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${item.accent}45`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.35), 0 0 40px ${item.accent}18`
          : "0 4px 24px rgba(0,0,0,0.2)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)",
        width: 180, height: 180, borderRadius: "50%",
        background: `radial-gradient(circle, ${item.accent}30, transparent 70%)`,
        filter: "blur(30px)", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s", pointerEvents: "none",
      }} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.15 }}
        transition={{ duration: 0.4 }}
        style={{
          width: "clamp(52px, 8vw, 76px)",
          height: "clamp(52px, 8vw, 76px)",
          borderRadius: 18,
          background: item.grad,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 18px",
          boxShadow: `0 8px 28px ${item.accent}45`,
          position: "relative", zIndex: 1,
        }}
      >
        <Icon size={28} color="white" />
      </motion.div>

      {/* Title */}
      <h3 style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: "clamp(10px, 1.2vw, 13px)",
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 12,
        position: "relative", zIndex: 1,
        margin: "0 0 12px",
      }}>
        {item.title}
      </h3>

      {/* Counter */}
      <h2 style={{
        fontSize: "clamp(30px, 4vw, 52px)",
        fontWeight: 800,
        letterSpacing: "-2px",
        lineHeight: 1,
        background: item.grad,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        position: "relative", zIndex: 1,
        margin: 0,
      }}>
        {isVisible ? `${count}${item.suffix}` : `0${item.suffix}`}
      </h2>

      {/* Bottom line */}
      <div style={{
        height: 2, borderRadius: 2,
        background: item.grad,
        width: hovered ? "70%" : "0%",
        margin: "18px auto 0",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </div>
  );
}