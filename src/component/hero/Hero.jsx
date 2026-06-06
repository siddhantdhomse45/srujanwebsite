// import { NavLink } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section
//       className="relative min-h-[88vh] flex items-center overflow-hidden"
//       style={{
//         background: "linear-gradient(105deg, #0b1f3a 0%, #0d2a50 35%, #0e6eb8 65%, #0ea5e9 100%)",
//         fontFamily: "'Barlow', sans-serif",
//       }}
//     >
//       {/* Topographic wave lines */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ opacity: 0.18 }}
//         viewBox="0 0 1400 900"
//         preserveAspectRatio="xMidYMid slice"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {[
//           "M400,0 Q500,80 600,30 Q700,-20 800,60 Q900,140 1000,80 Q1100,20 1200,100 Q1300,160 1400,120",
//           "M350,60 Q450,140 560,85 Q670,30 775,115 Q880,195 990,135 Q1100,75 1210,155 Q1310,215 1400,180",
//           "M300,130 Q420,205 540,145 Q660,85 775,170 Q890,250 1005,185 Q1120,120 1235,200 Q1330,260 1400,235",
//           "M250,200 Q380,275 505,210 Q630,145 755,230 Q880,310 1005,245 Q1130,180 1255,255 Q1350,315 1400,290",
//           "M200,275 Q345,345 480,280 Q615,215 750,295 Q885,375 1015,310 Q1145,245 1270,315 Q1360,370 1400,350",
//           "M150,355 Q310,420 455,355 Q600,290 745,365 Q890,440 1025,375 Q1160,310 1285,378 Q1370,430 1400,415",
//           "M100,440 Q275,500 430,440 Q585,378 740,450 Q895,520 1035,458 Q1175,396 1300,458 Q1375,498 1400,488",
//           "M50,530 Q240,585 405,528 Q570,470 735,540 Q900,608 1045,550 Q1190,490 1315,545 Q1382,578 1400,570",
//           "M0,625 Q205,672 385,622 Q565,570 745,635 Q925,698 1065,648 Q1205,596 1330,642 Q1385,668 1400,660",
//           "M0,725 Q185,765 375,720 Q565,672 755,730 Q945,785 1085,745 Q1225,702 1345,740 Q1388,758 1400,755",
//         ].map((d, i) => (
//           <path key={i} d={d} fill="none" stroke="#ffffff" strokeWidth="0.9" />
//         ))}
//       </svg>

//       {/* Content */}
//       <div className="relative z-10 max-w-[1400px] mx-auto px-20 py-24 w-full">
//         <div style={{ maxWidth: "620px" }}>

         
//           {/* <div className="mb-7">
//             <p
//               className="text-white font-bold leading-none mb-1"
//               style={{ fontSize: "22px" }}
//             >
//               Clutch
//             </p>
//             <div className="flex items-center gap-2">
//               <span className="text-slate-300 text-[13px]">4.9/5.0</span>
//               <span className="text-red-500 text-[14px] tracking-wide">★★★★★</span>
//             </div>
//           </div> */}

//           {/* Heading */}
//           <h1
//             className="text-white font-extrabold leading-[1.1] mb-5"
//             style={{
//               fontSize: "clamp(32px, 4vw, 52px)",
//               letterSpacing: "-0.3px",
//             }}
//           >
//             AI-First Software<br />
//             Engineering for Your<br />
//             Business Growth
//           </h1>

//           {/* Subtitle */}
//           <p
//             className="leading-relaxed mb-10"
//             style={{
//               color: "#b0c8e0",
//               fontSize: "clamp(14px, 1.2vw, 16px)",
//               maxWidth: "500px",
//             }}
//           >
//             Fortune 500 enterprises and startups rely on our top 1% talent and
//             AI-driven approach to design, build, and scale digital products.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex items-center gap-4 flex-wrap">
//             <NavLink
//               to="/contact"
//               className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[2px] text-[12px] px-8 py-4 transition-all duration-200 hover:opacity-90 active:scale-95"
//               style={{ background: "#dc2626" }}
//             >
//               Get In Touch
//               <svg
//                 width="14" height="14" viewBox="0 0 14 14"
//                 fill="none" stroke="white" strokeWidth="2"
//                 strokeLinecap="round" strokeLinejoin="round"
//               >
//                 <path d="M2 7h10M8 3l4 4-4 4" />
//               </svg>
//             </NavLink>

//             <NavLink
//               to="/book-call"
//               className="inline-flex items-center text-white font-bold uppercase tracking-[2px] text-[12px] px-8 py-4 transition-all duration-200 hover:bg-white/10 active:scale-95"
//               style={{ border: "1.5px solid rgba(255,255,255,0.6)" }}
//             >
//               Book a 30-Minutes Intro Call
//             </NavLink>
//           </div>

//         </div>
//       </div>

//       {/* Barlow font */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700;800&display=swap"
//         rel="stylesheet"
//       />
//     </section>
//   );
// };

// export default Hero;






import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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

const BADGES = [
  { icon: "⚡", label: "10× Faster Delivery" },
  { icon: "🔒", label: "SOC 2 Certified" },
  { icon: "🌐", label: "99.99% Uptime" },
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
        }

        .hero-text-block {
          max-width: 620px;
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
          background: #dc2626;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          padding: 14px 28px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-ghost-btn {
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
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
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 72px 24px 80px;
          }
          .hero-text-block {
            max-width: 100%;
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
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="hero-pill-btn"
              >
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </motion.div>
            </NavLink>

            <NavLink to="/book-call" style={{ width: "auto", display: "contents" }}>
              <motion.div
                whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="hero-ghost-btn"
              >
                Book a 30-Minutes Intro Call
              </motion.div>
            </NavLink>
          </motion.div>

          {/* Trust badges */}
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
                }}
              >
                <span style={{ fontSize: 13 }}>{b.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(11px, 1.2vw, 12px)", fontWeight: 500 }}>
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
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