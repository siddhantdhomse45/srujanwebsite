import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
  ┌─────────────────────────────────────────────────────┐
  │  CUSTOM SOFTWARE DEVELOPMENT SERVICES — Hero Section │
  │  Matches screenshot exactly:                        │
  │  • Full-bleed team photo background                 │
  │  • Dark gradient overlay (left-heavy)               │
  │  • Bold condensed ALL-CAPS heading                  │
  │  • Body paragraph                                   │
  │  • Red filled CTA + outlined CTA                   │
  └─────────────────────────────────────────────────────┘
*/

const ease = [0.22, 1, 0.36, 1];

export default function CustomHero() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

  /* Subtle parallax on the background photo */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      {/* ── Fonts ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── Parallax background photo ── */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-12% 0",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            y: bgY,
          }}
        />

        {/* ── Overlay: strong dark on left, lighter on right ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.58) 60%, rgba(0,0,0,0.28) 85%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        {/* ── Red left accent bar ── */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inV ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 5,
            background: "#dc2626",
            transformOrigin: "top",
            zIndex: 5,
          }}
        />

        {/* ── Main content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1400,
            width: "100%",
            margin: "0 auto",
            padding: "100px 80px",
          }}
        >
          <div style={{ maxWidth: 660 }}>

            {/* ── Eyebrow label ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15, ease }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <div
                style={{ width: 36, height: 2.5, background: "#dc2626", borderRadius: 2 }}
              />
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: 3.5,
                  textTransform: "uppercase",
                  color: "#dc2626",
                }}
              >
                Software Development
              </span>
            </motion.div>

            {/* ── Heading — matches screenshot font exactly ── */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(34px, 4.8vw, 66px)",
                lineHeight: 1.04,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#ffffff",
                margin: "0 0 28px",
              }}
            >
              Custom Software<br />
              Development<br />
              Services
            </motion.h1>

            {/* ── Body text — exact original copy ── */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.44, ease }}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.1vw, 16px)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.88)",
                margin: "0 0 44px",
                maxWidth: 580,
              }}
            >
              We believe the 10% of the functionality of the software you won't
              find in off-the-shelf products often makes the biggest difference.
              That's where custom software applications and custom solutions come
              in — delivering unique business value tailored to your needs. Our
              custom software development services are built with a focus on
              enterprise-grade security and code quality, ensuring reliability,
              compliance, and long-term success.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.58, ease }}
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {/* Red solid CTA — matches screenshot exactly */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(220,38,38,0.55)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#dc2626",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "16px 32px",
                  borderRadius: 0,
                  whiteSpace: "nowrap",
                  transition: "box-shadow 0.25s",
                }}
              >
                Book a Free Consultation
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </motion.a>

              {/* Outlined CTA — white border, transparent fill */}
              <motion.a
                href="#"
                whileHover={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.9)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "14px 30px",
                  borderRadius: 0,
                  border: "2px solid rgba(255,255,255,0.65)",
                  background: "transparent",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                View Portfolio
              </motion.a>
            </motion.div>

          </div>
        </div>

        {/* ── Bottom fade into next section ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.35))",
            pointerEvents: "none",
          }}
        />
      </section>
    </>
  );
}