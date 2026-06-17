
// import { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// const GLASS = {
//   background: "rgba(255,255,255,0.05)",
//   backdropFilter: "blur(20px)",
//   WebkitBackdropFilter: "blur(20px)",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const ORBS = [
//   { size: 600, top: "-180px", left: "-120px", color1: "#1d4ed8", color2: "#0ea5e9" },
//   { size: 480, top: "160px", right: "-80px", color1: "#7c3aed", color2: "#1d6ff0" },
//   { size: 380, bottom: "-80px", left: "35%", color1: "#0e7490", color2: "#1d4ed8" },
// ];

// function FloatingOrb({ size, color1, color2, ...pos }) {
//   return (
//     <motion.div
//       animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
//       transition={{ duration: 9 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
//       style={{
//         position: "absolute",
//         width: size,
//         height: size,
//         borderRadius: "50%",
//         background: `radial-gradient(circle, ${color1}, ${color2}, transparent 70%)`,
//         filter: "blur(80px)",
//         pointerEvents: "none",
//         ...pos,
//       }}
//     />
//   );
// }

// function GridPattern() {
//   return (
//     <svg
//       style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//           <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" fill="url(#grid)" />
//     </svg>
//   );
// }

// const BADGES = [
//   { icon: "⚡", label: "10× Faster Delivery" },
//   { icon: "🔒", label: "SOC 2 Certified" },
//   { icon: "🌐", label: "99.99% Uptime" },
// ];

// const Hero = () => {
//   return (
//     <section
//       style={{
//         position: "relative",
//         minHeight: "88vh",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         background: "linear-gradient(135deg, #040d1a 0%, #071428 30%, #091e3a 60%, #0a1f3d 100%)",
//         fontFamily: "'DM Sans', sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

//         .hero-content {
//           position: relative;
//           z-index: 10;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 80px 80px;
//           width: 100%;
//           box-sizing: border-box;
//         }

//         .hero-text-block {
//           max-width: 620px;
//         }

//         .hero-cta-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           flex-wrap: wrap;
//           margin-bottom: 52px;
//         }

//         .hero-badges-row {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//         }

//         .hero-pill-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: #dc2626;
//           border-radius: 8px;
//           color: white;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           font-size: 12px;
//           padding: 14px 28px;
//           cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//         }

//         .hero-ghost-btn {
//           display: inline-flex;
//           align-items: center;
//           background: rgba(255,255,255,0.05);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 8px;
//           color: white;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           font-size: 12px;
//           padding: 14px 28px;
//           cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//           white-space: nowrap;
//         }

//         @media (max-width: 768px) {
//           .hero-content {
//             padding: 72px 24px 80px;
//           }
//           .hero-text-block {
//             max-width: 100%;
//           }
//           .hero-cta-row {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 12px;
//             margin-bottom: 40px;
//           }
//           .hero-pill-btn,
//           .hero-ghost-btn {
//             width: 100%;
//             justify-content: center;
//             font-size: 11px;
//             padding: 13px 20px;
//           }
//           .hero-badges-row {
//             gap: 8px;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-badges-row {
//             flex-direction: column;
//             gap: 8px;
//           }
//         }
//       `}</style>

//       {/* Grid */}
//       <GridPattern />

//       {/* Orbs */}
//       {ORBS.map((o, i) => <FloatingOrb key={i} {...o} />)}

//       {/* Rotating rings */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         style={{
//           position: "absolute", width: 700, height: 700,
//           top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//           border: "1px solid rgba(56,189,248,0.07)",
//           borderRadius: "50%", pointerEvents: "none",
//         }}
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         style={{
//           position: "absolute", width: 950, height: 950,
//           top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//           border: "1px solid rgba(29,111,240,0.05)",
//           borderRadius: "50%", pointerEvents: "none",
//         }}
//       />

//       {/* Content */}
//       <div className="hero-content">
//         <div className="hero-text-block">

//           {/* Live pill */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             style={{
//               display: "inline-flex", alignItems: "center", gap: 8,
//               ...GLASS, borderRadius: 100, padding: "6px 16px", marginBottom: 32,
//             }}
//           >
//             <span style={{
//               width: 7, height: 7, borderRadius: "50%",
//               background: "#22d3ee", boxShadow: "0 0 8px #22d3ee",
//               display: "inline-block",
//             }} />
//             <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(11px, 1.5vw, 13px)", fontWeight: 500 }}>
//               Trusted by 2,400+ companies worldwide
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               fontSize: "clamp(32px, 5vw, 60px)",
//               fontWeight: 800,
//               color: "white",
//               lineHeight: 1.08,
//               letterSpacing: "-1.5px",
//               marginBottom: 20,
//               margin: "0 0 20px",
//             }}
//           >
//             AI-First Software<br />Engineering for Your<br />
//             <span style={{
//               background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}>
//               Business Growth
//             </span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.35 }}
//             style={{
//               color: "rgba(255,255,255,0.5)",
//               fontSize: "clamp(13px, 1.5vw, 17px)",
//               lineHeight: 1.7,
//               maxWidth: 500,
//               marginBottom: 44,
//             }}
//           >
//             Fortune 500 enterprises and startups rely on our top 1% talent and
//             AI-driven approach to design, build, and scale digital products.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="hero-cta-row"
//           >
//             <NavLink to="/contact" style={{ width: "auto", display: "contents" }}>
//               <motion.div
//                 whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="hero-pill-btn"
//               >
//                 Get In Touch
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M2 7h10M8 3l4 4-4 4" />
//                 </svg>
//               </motion.div>
//             </NavLink>

//             <NavLink to="/book-call" style={{ width: "auto", display: "contents" }}>
//               <motion.div
//                 whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="hero-ghost-btn"
//               >
//                 Book a 30-Minutes Intro Call
//               </motion.div>
//             </NavLink>
//           </motion.div>

//           {/* Trust badges */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="hero-badges-row"
//           >
//             {BADGES.map((b, i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex", alignItems: "center", gap: 8,
//                   ...GLASS, borderRadius: 8, padding: "7px 14px",
//                 }}
//               >
//                 <span style={{ fontSize: 13 }}>{b.icon}</span>
//                 <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(11px, 1.2vw, 12px)", fontWeight: 500 }}>
//                   {b.label}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         style={{
//           position: "absolute", bottom: 36, left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
//         }}
//       >
//         <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase" }}>Scroll</span>
//         <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
//           <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
//           <path d="M8 14l-3 3m3-3l3 3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;






// import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiZap, FiShield, FiGlobe } from "react-icons/fi";

const GLASS = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const ORBS = [
  { size: 600, top: "-180px", left: "-120px", color1: "#1d4ed8", color2: "#0ea5e9" },
  { size: 480, top: "160px", right: "-80px", color1: "#7c3aed", color2: "#1d6ff0" },
  { size: 380, bottom: "-80px", left: "35%", color1: "#0e7490", color2: "#1d4ed8" },
];

function FloatingOrb({ size, color1, color2, ...pos }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
      // eslint-disable-next-line react-hooks/purity
      transition={{ duration: 9 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color1}, ${color2}, transparent 70%)`,
        filter: "blur(80px)",
        pointerEvents: "none",
        ...pos,
      }}
    />
  );
}

function GridPattern() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// ✅ BADGES with proper React Icons
const BADGES = [
  { icon: <FiZap size={14} strokeWidth={2} />, label: "10× Faster Delivery" },
  { icon: <FiShield size={14} strokeWidth={2} />, label: "SOC 2 Certified" },
  { icon: <FiGlobe size={14} strokeWidth={2} />, label: "99.99% Uptime" },
];

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 30%, #091e3a 60%, #0a1f3d 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 80px;
          width: 100%;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text-block {
          max-width: 620px;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 560px;
          justify-self: end;
        }

        .hero-image {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15);
          position: relative;
        }

        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.7) saturate(1.1);
          transition: filter 0.6s ease, transform 0.8s ease;
        }

        .hero-image:hover img {
          filter: brightness(0.85) saturate(1.2);
          transform: scale(1.02);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(4,13,26,0.3) 0%, rgba(4,13,26,0.1) 50%, transparent 100%);
          pointer-events: none;
        }

        .hero-image-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(4,13,26,0.85);
          backdropFilter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 12px;
          padding: 10px 16px;
        }

        .hero-image-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 12px #22d3ee;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-image-badge-text {
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .hero-image-badge-sub {
          color: rgba(148,163,184,0.6);
          font-size: 10px;
          font-weight: 400;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }

        .hero-badges-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          border-radius: 8px;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          padding: 14px 28px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          border: none;
          box-shadow: 0 4px 20px rgba(37,99,235,0.4);
          transition: all 0.3s ease;
        }
        .hero-pill-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          box-shadow: 0 8px 32px rgba(37,99,235,0.6);
          transform: translateY(-2px);
        }

        .hero-ghost-btn {
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(59,130,246,0.5);
          border-radius: 8px;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          padding: 14px 28px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .hero-ghost-btn:hover {
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.8);
          transform: translateY(-2px);
        }

        .hero-image-dots {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          pointer-events: none;
          opacity: 0.2;
          background-image: radial-gradient(circle, rgba(96,165,250,0.8) 1px, transparent 1px);
          background-size: 12px 12px;
          z-index: 2;
        }

        .hero-image-dots-2 {
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 80px;
          height: 80px;
          pointerEvents: none;
          opacity: 0.15;
          background-image: radial-gradient(circle, rgba(96,165,250,0.8) 1px, transparent 1px);
          background-size: 10px 10px;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 40px 80px;
          }
          .hero-text-block {
            max-width: 100%;
          }
          .hero-image-wrapper {
            justify-self: center;
            max-width: 500px;
          }
          .hero-image-dots,
          .hero-image-dots-2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 72px 24px 80px;
          }
          .hero-image-wrapper {
            max-width: 100%;
          }
          .hero-image-badge {
            bottom: 16px;
            left: 16px;
            padding: 8px 12px;
          }
          .hero-image-badge-text {
            font-size: 11px;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 40px;
          }
          .hero-pill-btn,
          .hero-ghost-btn {
            width: 100%;
            justify-content: center;
            font-size: 11px;
            padding: 13px 20px;
          }
          .hero-badges-row {
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .hero-badges-row {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      {/* Grid */}
      <GridPattern />

      {/* Orbs */}
      {ORBS.map((o, i) => <FloatingOrb key={i} {...o} />)}

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", width: 700, height: 700,
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          border: "1px solid rgba(56,189,248,0.07)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", width: 950, height: 950,
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          border: "1px solid rgba(29,111,240,0.05)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="hero-content">
        {/* Left column – Text */}
        <div className="hero-text-block">

          {/* Live pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              ...GLASS, borderRadius: 100, padding: "6px 16px", marginBottom: 32,
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22d3ee", boxShadow: "0 0 8px #22d3ee",
              display: "inline-block",
            }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(11px, 1.5vw, 13px)", fontWeight: 500 }}>
              Trusted by 2,400+ companies worldwide
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              marginBottom: 20,
              margin: "0 0 20px",
            }}
          >
            AI-First Software<br />Engineering for Your<br />
            <span style={{
              background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Business Growth
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(13px, 1.5vw, 17px)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 44,
            }}
          >
            Fortune 500 enterprises and startups rely on our top 1% talent and
            AI-driven approach to design, build, and scale digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-cta-row"
          >
            <NavLink to="/contact" style={{ width: "auto", display: "contents" }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hero-pill-btn"
              >
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </motion.button>
            </NavLink>

            <NavLink to="/book-call" style={{ width: "auto", display: "contents" }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero-ghost-btn"
              >
                Book a 30-Minutes Intro Call
              </motion.button>
            </NavLink>
          </motion.div>

          {/* Trust badges – now using React Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-badges-row"
          >
            {BADGES.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  ...GLASS, borderRadius: 8, padding: "7px 14px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>{b.icon}</span>
                <span style={{ fontSize: "clamp(11px, 1.2vw, 12px)", fontWeight: 500 }}>
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right column – Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80"
              alt="Developer coding with AI-powered software development tools"
              loading="lazy"
            />
            <div className="hero-image-overlay" />

            <div className="hero-image-dots" />
            <div className="hero-image-dots-2" />

            <div className="hero-image-badge">
              <div className="hero-image-badge-dot" />
              <div>
                <div className="hero-image-badge-text">AI-Powered Development</div>
                <div className="hero-image-badge-sub">99.9% code accuracy</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 36, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
          <path d="M8 14l-3 3m3-3l3 3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;