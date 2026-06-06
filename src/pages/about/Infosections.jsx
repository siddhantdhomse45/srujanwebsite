// import { useEffect, useRef, useState } from "react";

// const sections = [
//   {
//     number: "01",
//     title: "OUR CLIENTS",
//     description: "See how we helped our clients succeed in Digital Transformation.",
//     link: "/our-clients",
//   },
//   {
//     number: "02",
//     title: "OUR TEAM",
//     description: "Meet the leadership and talents propelling Intellectsoft's progress.",
//     link: "/team",
//   },
//   {
//     number: "03",
//     title: "OUR CAREERS",
//     description: "Explore current career opportunities in our offices around the world.",
//     link: "/careers",
//   },
// ];

// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVisible(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, visible];
// }

// function SectionCard({ section, index }) {
//   const [ref, visible] = useInView(0.1);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative flex flex-col gap-5 p-10 overflow-hidden cursor-pointer bg-white"
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0px)" : "translateY(32px)",
//         transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.13}s,
//                      transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.13}s`,
//       }}
//     >
//       {/* gradient sweep on hover */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
//           transform: hovered ? "translateY(0%)" : "translateY(100%)",
//           transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
//         }}
//       />

//       {/* ghost number */}
//       <span
//         className="relative z-10 select-none leading-none font-black tracking-tighter"
//         style={{
//           fontSize: 52,
//           fontFamily: "'Poppins', sans-serif",
//           color: hovered ? "rgba(255,255,255,0.08)" : "#f0f0f8",
//           transition: "color 0.3s ease",
//         }}
//       >
//         {section.number}
//       </span>

//       {/* title */}
//       <h3
//         className="relative z-10 text-xs font-black tracking-[0.18em] uppercase"
//         style={{
//           fontFamily: "'Poppins', sans-serif",
//           color: hovered ? "#fff" : "#0f0f1a",
//           transition: "color 0.3s ease",
//         }}
//       >
//         {section.title}
//       </h3>

//       {/* accent bar */}
//       <div
//         className="relative z-10 h-0.5 rounded-full"
//         style={{
//           width: hovered ? "48px" : "28px",
//           background: hovered ? "rgba(255,255,255,0.4)" : "#6366f1",
//           transition: "width 0.4s ease, background 0.3s ease",
//         }}
//       />

//       {/* description */}
//       <p
//         className="relative z-10 text-sm leading-relaxed flex-1"
//         style={{
//           color: hovered ? "rgba(255,255,255,0.75)" : "#6b7280",
//           transition: "color 0.3s ease",
//         }}
//       >
//         {section.description}
//       </p>

//       {/* learn more */}
//       <a
//         href={section.link}
//         className="relative z-10 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase mt-1"
//         style={{
//           color: hovered ? "#fff" : "#6366f1",
//           transition: "color 0.3s ease",
//           textDecoration: "none",
//         }}
//       >
//         Learn More
//         <span
//           className="inline-flex items-center justify-center w-6 h-6 rounded-full border text-xs"
//           style={{
//             borderColor: hovered ? "rgba(255,255,255,0.4)" : "#6366f1",
//             background: hovered ? "rgba(255,255,255,0.12)" : "transparent",
//             transform: hovered ? "translateX(4px)" : "translateX(0px)",
//             transition: "all 0.35s ease",
//           }}
//         >
//           →
//         </span>
//       </a>
//     </div>
//   );
// }

// export default function InfoSections() {
//   return (
//     <>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800;900&display=swap');`}</style>
//       <section className="w-full bg-white py-16 px-6">
//         <div
//           className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "1px",
//             background: "#e8e8f0",
//           }}
//         >
//           {sections.map((section, index) => (
//             <SectionCard key={section.title} section={section} index={index} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }







import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sections = [
  {
    number: "01",
    title: "Our Clients",
    description: "See how we helped our clients succeed in Digital Transformation.",
    link: "/our-clients",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    number: "02",
    title: "Our Team",
    description: "Meet the leadership and talents propelling our company's progress.",
    link: "/team",
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    number: "03",
    title: "Our Careers",
    description: "Explore current career opportunities in our offices around the world.",
    link: "/careers",
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
];

function SectionCard({ section, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        padding: "44px 36px",
        overflow: "hidden",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        background: hovered
          ? `linear-gradient(145deg, ${section.accent}14, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${section.accent}45`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.35), 0 0 40px ${section.accent}18`
          : "0 4px 24px rgba(0,0,0,0.15)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderRadius: 0,
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -60, left: -40,
        width: 200, height: 200, borderRadius: "50%",
        background: `radial-gradient(circle, ${section.accent}25, transparent 70%)`,
        filter: "blur(40px)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Ghost number */}
      <span style={{
        position: "relative", zIndex: 1,
        fontSize: 80, fontWeight: 900, lineHeight: 1,
        letterSpacing: "-3px",
        color: hovered ? `${section.accent}18` : "rgba(255,255,255,0.04)",
        transition: "color 0.4s",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {section.number}
      </span>

      {/* Title */}
      <h3 style={{
        position: "relative", zIndex: 1,
        fontSize: 11, fontWeight: 800,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: hovered ? "white" : "rgba(255,255,255,0.85)",
        transition: "color 0.3s",
        margin: 0,
      }}>
        {section.title}
      </h3>

      {/* Accent bar */}
      <div style={{
        position: "relative", zIndex: 1,
        height: 2, borderRadius: 2,
        background: hovered ? section.grad : `${section.accent}50`,
        width: hovered ? 56 : 28,
        transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s",
      }} />

      {/* Description */}
      <p style={{
        position: "relative", zIndex: 1,
        fontSize: 14, lineHeight: 1.75,
        color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
        transition: "color 0.3s",
        flex: 1, margin: 0,
      }}>
        {section.description}
      </p>

      {/* Learn More */}
      <a
        href={section.link}
        style={{
          position: "relative", zIndex: 1,
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 11, fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: hovered ? "white" : section.accent,
          textDecoration: "none",
          transition: "color 0.3s",
          marginTop: 4,
        }}
      >
        Learn More
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 26, height: 26, borderRadius: "50%",
            border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : section.accent}`,
            background: hovered ? "rgba(255,255,255,0.1)" : "transparent",
            fontSize: 13,
            transition: "border-color 0.3s, background 0.3s",
          }}
        >
          →
        </motion.span>
      </a>
    </motion.div>
  );
}

export default function InfoSections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="infogrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#infogrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -100, left: -80,
          width: 440, height: 440, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -80, right: -80,
          width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Explore More
            </span>
          </div>

          <h2 style={{
            color: "white", fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16,
          }}>
            Get to Know{" "}
            <span style={{
              background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Us Better
            </span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
            Clients, team, and careers — three pillars that define who we are and how we work.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          borderRadius: 24,
          overflow: "hidden",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}>
          {sections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}