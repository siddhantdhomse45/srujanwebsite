import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiPlay, FiMapPin, FiStar, FiUsers } from "react-icons/fi";

export default function TravelHospitalityHero() {
  const [hovBtn1, setHovBtn1] = useState(false);
  const [hovBtn2, setHovBtn2] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    { value: "400+", label: "Hotel Brands", icon: <FiMapPin size={14} /> },
    { value: "10+", label: "Years in Travel", icon: <FiStar size={14} /> },
    { value: "2M+", label: "End Users Served", icon: <FiUsers size={14} /> },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* ── Background image ── */}
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=80"
        alt="Travel and Hospitality"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          filter: "brightness(0.32)",
        }}
      />

      {/* ── Gradient overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,rgba(2,11,24,0.96) 0%,rgba(4,21,48,0.82) 50%,rgba(2,11,24,0.55) 100%)",
        }}
      />
      {/* Left vignette */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0, width: "60%",
          background:
            "linear-gradient(to right,rgba(2,11,24,0.99) 0%,rgba(2,11,24,0.7) 60%,transparent 100%)",
        }}
      />
      {/* Top vignette */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, height: "220px",
          background: "linear-gradient(to bottom,rgba(2,11,24,0.95),transparent)",
        }}
      />
      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0, height: "220px",
          background: "linear-gradient(to top,rgba(2,11,24,0.95),transparent)",
        }}
      />

      {/* Blueprint grid */}
      <svg
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          opacity: 0.04, pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="travgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#travgrid)" />
      </svg>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-80px", left: "-60px",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          position: "absolute", bottom: "-60px", right: "10%",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle,#4f46e5,#6366f1,transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {[
        { top: "20%", left: "52%", size: 3, opacity: 0.35 },
        { top: "38%", left: "67%", size: 2, opacity: 0.25 },
        { top: "62%", left: "58%", size: 4, opacity: 0.2 },
        { top: "74%", left: "74%", size: 2, opacity: 0.3 },
        { top: "26%", left: "80%", size: 3, opacity: 0.22 },
        { top: "84%", left: "50%", size: 2, opacity: 0.18 },
      ].map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: d.top, left: d.left,
            width: `${d.size}px`, height: `${d.size}px`,
            borderRadius: "50%", background: "#60a5fa",
            opacity: d.opacity, pointerEvents: "none",
          }}
        />
      ))}

      {/* ── Content ── */}
      <div
        ref={ref}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,48px)",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 700 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 24 }}
          >
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(59,130,246,0.12)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(59,130,246,0.28)",
                borderRadius: 100, padding: "6px 18px",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#60a5fa",
                  boxShadow: "0 0 8px #60a5fa",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#93c5fd", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                Travel &amp; Hospitality
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(30px,5vw,64px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.06,
              margin: "0 0 10px",
              color: "white",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Custom Software{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Development
            </span>
            <br />
            for Travel &amp;{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a5b4fc,#7dd3fc,#60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hospitality
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              width: 56, height: 3, borderRadius: 2,
              background: "linear-gradient(90deg,#2563eb,#6366f1)",
              margin: "18px 0 22px",
              transformOrigin: "left",
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(14px,1.7vw,17px)",
              lineHeight: 1.9,
              color: "rgba(148,163,184,0.9)",
              maxWidth: 580,
              margin: "0 0 44px",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Meet your customers' and partners' needs with our end-to-end technology
            solutions for hospitality. From impactful mobile applications to
            comprehensive custom-made systems, leading brands rely on our expertise
            and engineering experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
          >
            {/* Primary */}
            <motion.button
              onMouseEnter={() => setHovBtn1(true)}
              onMouseLeave={() => setHovBtn1(false)}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "16px 32px", borderRadius: 12, border: "none",
                background: hovBtn1
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white",
                fontSize: 13, fontWeight: 800,
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovBtn1
                  ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                  : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transition: "background 0.3s, box-shadow 0.3s",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Talk to Us
              <motion.span animate={{ x: hovBtn1 ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <FiArrowRight size={15} strokeWidth={2.5} />
              </motion.span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              onMouseEnter={() => setHovBtn2(true)}
              onMouseLeave={() => setHovBtn2(false)}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "15px 32px", borderRadius: 12,
                border: hovBtn2
                  ? "1.5px solid rgba(96,165,250,0.7)"
                  : "1.5px solid rgba(255,255,255,0.18)",
                background: hovBtn2
                  ? "rgba(37,99,235,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: hovBtn2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
                fontSize: 13, fontWeight: 800,
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovBtn2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              <FiPlay size={14} strokeWidth={2.5} />
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              display: "flex", alignItems: "center",
              gap: "clamp(20px,4vw,40px)",
              marginTop: 56, paddingTop: 32,
              borderTop: "1px solid rgba(59,130,246,0.15)",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#60a5fa" }}>{s.icon}</span>
                  <span
                    style={{
                      fontSize: "clamp(20px,2.5vw,28px)",
                      fontWeight: 900,
                      background: "linear-gradient(135deg,#ffffff,#60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {s.value}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(100,116,139,0.8)",
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Right side decorative lines + floating badges ── */}
      <div
        style={{
          position: "absolute", right: 0, top: "50%",
          transform: "translateY(-50%)",
          width: "38%", height: "80%",
          pointerEvents: "none", zIndex: 5,
          display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "0 60px", gap: 18,
        }}
      >
        {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
          <div
            key={i}
            style={{
              height: "1px", width: `${w}%`,
              background:
                "linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
              alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
              opacity: 0.55,
            }}
          />
        ))}

        {/* Floating badge 1 */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "16%", right: 48,
            padding: "14px 20px", borderRadius: 16,
            background: "rgba(4,21,48,0.88)",
            border: "1px solid rgba(59,130,246,0.28)",
            backdropFilter: "blur(14px)",
            display: "flex", alignItems: "center", gap: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
            }}
          >
            <FiMapPin size={18} color="white" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif" }}>
              Global Reach
            </div>
            <div style={{ fontSize: 11, color: "rgba(148,163,184,0.65)", fontFamily: "'DM Sans',sans-serif" }}>
              60+ countries served
            </div>
          </div>
        </motion.div>

        {/* Floating badge 2 */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{
            position: "absolute", bottom: "20%", right: 64,
            padding: "12px 18px", borderRadius: 14,
            background: "rgba(4,21,48,0.88)",
            border: "1px solid rgba(59,130,246,0.22)",
            backdropFilter: "blur(14px)",
            display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 10px 36px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg,#059669,#0d9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <FiStar size={15} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "white", fontFamily: "'DM Sans',sans-serif" }}>
              5-Star Rated
            </div>
            <div style={{ fontSize: 11, color: "rgba(148,163,184,0.65)", fontFamily: "'DM Sans',sans-serif" }}>
              Client satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}