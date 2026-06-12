import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowDown, FiCheck } from "react-icons/fi";

const benefits = [
  { icon: <FiArrowDown size={11} strokeWidth={2} />, text: "A shared understanding of project objectives" },
  { icon: <FiArrowDown size={11} strokeWidth={2} />, text: "A clear product strategy and development roadmap" },
  { icon: <FiArrowDown size={11} strokeWidth={2} />, text: "A project plan that includes risks and budgets" },
  { icon: <FiArrowDown size={11} strokeWidth={2} />, text: "An initial vision of the architecture of the project" },
  { icon: <FiCheck size={11} strokeWidth={2.5} />, text: "A transformation of business requirements into functional specifications" },
];

/* ── SVG Roadmap (unchanged) ── */
function RoadmapSVG() {
  return (
    <svg
      width="100%"
      viewBox="0 0 480 310"
      style={{ overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved beige path */}
      <path
        d="M 20 180 Q 65 180 90 162 Q 140 138 185 162 Q 228 182 272 162 Q 318 138 365 162 Q 410 180 450 138 Q 466 116 470 76"
        fill="none"
        stroke="#e8d5b0"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Dots on path */}
      {[
        { cx: 90, cy: 162 },
        { cx: 185, cy: 162 },
        { cx: 272, cy: 162 },
        { cx: 365, cy: 162 },
        { cx: 450, cy: 138 },
      ].map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={8}
          fill="#378ADD"
          stroke="#fff"
          strokeWidth="2.5"
        />
      ))}
      {/* Final launch dot */}
      <circle cx={470} cy={76} r={9} fill="#185FA5" stroke="#fff" strokeWidth="3" />

      {/* Rocket icon (text-based) */}
      <text
        x="468"
        y="32"
        textAnchor="middle"
        fontSize="30"
        fontFamily="sans-serif"
      >
        🚀
      </text>
      <text
        x="468"
        y="56"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#185FA5"
        fontFamily="'DM Sans',sans-serif"
      >
        Support
      </text>

      {/* TOP BOXES */}
      <rect x="18" y="86" width="128" height="44" rx="6" fill="#378ADD" />
      <text x="82" y="106" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Discovery Phase
      </text>
      <text x="82" y="121" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Workshop
      </text>

      <rect x="152" y="76" width="155" height="56" rx="6" fill="#378ADD" />
      <text x="229" y="95" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Iterative Development:
      </text>
      <text x="229" y="110" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#dbeafe" fontFamily="'DM Sans',sans-serif">
        UI/UX Design,
      </text>
      <text x="229" y="124" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#dbeafe" fontFamily="'DM Sans',sans-serif">
        Development, QA
      </text>

      <rect x="322" y="86" width="108" height="44" rx="6" fill="#378ADD" />
      <text x="376" y="106" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        MVP/Soft
      </text>
      <text x="376" y="121" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Launch
      </text>

      {/* BOTTOM BOXES */}
      <rect x="108" y="196" width="112" height="44" rx="6" fill="#378ADD" />
      <text x="164" y="215" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Project
      </text>
      <text x="164" y="230" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Initiation
      </text>

      <rect x="240" y="196" width="116" height="44" rx="6" fill="#378ADD" />
      <text x="298" y="215" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        User Acceptance
      </text>
      <text x="298" y="230" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Testing
      </text>

      <rect x="372" y="196" width="78" height="44" rx="6" fill="#185FA5" />
      <text x="411" y="223" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="'DM Sans',sans-serif">
        Launch
      </text>
    </svg>
  );
}

/* ── Decorative circles (same as HospitalitySolutions) ── */
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[500, 700, 900].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

/* ── Main export with HospitalitySolutions background ── */
export default function WorkshopProcess() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
        padding: "clamp(48px,8vw,96px) 0 clamp(40px,6vw,80px)",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        borderTop: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Blueprint grid SVG (same as HospitalitySolutions) */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hospgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hospgrid)" />
      </svg>

      {/* Animated orbs (same as HospitalitySolutions) */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.26, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -120, left: -80, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ position: "absolute", bottom: -80, right: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }}
      />

      <DecorativeCircles />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(16px,5vw,48px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* ── Heading (now light text) ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "clamp(28px,4vw,48px)" }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(20px,3vw,30px)",
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Workshop Process for Hospitality
            <br />
            Technology Solutions
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(13px,1.4vw,15px)",
              color: "rgba(186,230,255,0.60)",
              lineHeight: 1.85,
              maxWidth: 680,
              marginInline: "auto",
            }}
          >
            For each hospitality solution, the Srujan Infotech team offers a science-led,
            scalable process dedicated to addressing the client's technology needs in the best
            possible way. As a result, we have implemented a technical design workshop to create
            the initial vision of the solution architecture.
          </p>
        </motion.div>

        {/* ── Body: benefits + diagram ── */}
        <div
          style={{
            display: "flex",
            gap: "clamp(20px,3vw,40px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Benefits card (dark themed) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              minWidth: "clamp(180px,28%,240px)",
              background: "rgba(4,21,48,0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: 12,
              padding: "clamp(16px,2vw,24px)",
            }}
          >
            <h4
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(12px,1.3vw,14px)",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              Your Benefits:
            </h4>

            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={headInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: i < benefits.length - 1 ? 14 : 0,
                }}
              >
                {/* icon circle */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    border: "1.5px solid #f59e0b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                    color: "#f59e0b",
                  }}
                >
                  {b.icon}
                </div>

                <span
                  style={{
                    fontSize: "clamp(11px,1.2vw,12.5px)",
                    color: "rgba(186,230,255,0.75)",
                    lineHeight: 1.55,
                  }}
                >
                  {b.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: 1, minWidth: "clamp(280px,50%,600px)" }}
          >
            <RoadmapSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}