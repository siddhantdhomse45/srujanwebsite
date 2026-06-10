import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  MOBILE APPLICATION DEVELOPMENT SERVICES — Premium          ║
 ║  Color: #3b82f6 blue — matches full project palette         ║
 ║  Background: deep navy (same as hero, industries, clients)  ║
 ║  Cards: glassmorphism, border-grid layout, hover glow       ║
 ║  Motion: staggered fade-up, icon float, line reveal         ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const BLUE_DIM  = "rgba(59,130,246,0.18)";
const E         = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "iOS App Development",
    short: "Apple Ecosystem",
    description:
      "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="18" y="8" width="32" height="52" rx="5"/>
        <circle cx="34" cy="54" r="2.5"/>
        <path d="M28 13h12" strokeLinecap="round"/>
        <path d="M26 28c2-3 5-5 8-5s6 2 8 5" strokeLinecap="round"/>
        <path d="M29 33l5-8 5 8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "Android App Development",
    short: "Android Platform",
    description:
      "Our team builds Android software that puts your business front and center on any modern Android device. Create strong, user-friendly apps tailored specifically to your needs. From the initial concept to final deployment, our Android app development services ensure your app stands out in a competitive market and makes the experience of your users joyful.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="14" y="22" width="52" height="38" rx="4"/>
        <path d="M24 22v-6M56 22v-6" strokeLinecap="round"/>
        <circle cx="24" cy="14" r="2" fill="currentColor"/>
        <circle cx="56" cy="14" r="2" fill="currentColor"/>
        <rect x="22" y="30" width="10" height="10" rx="2"/>
        <rect x="35" y="30" width="10" height="10" rx="2"/>
        <rect x="48" y="30" width="10" height="10" rx="2"/>
        <path d="M14 36H8M66 36h6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "Wearables & Embedded Software",
    short: "IoT & Smart Devices",
    description:
      "In a fast-paced world, creating companion apps is a must-have for the present. Depending on your needs, we build a wide range of wearable devices that seamlessly integrate with smart gadgets or proprietary peripherals. From fitness trackers to smartwatches and other connected devices, we supercharge functionality and elevate the user experience.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="22" y="18" width="36" height="44" rx="5"/>
        <rect x="30" y="10" width="20" height="10" rx="3"/>
        <rect x="30" y="60" width="20" height="10" rx="3"/>
        <path d="M30 35h20M30 42h14" strokeLinecap="round"/>
        <path d="M56 32l6-4M56 48l6 4" strokeLinecap="round"/>
        <path d="M24 32l-6-4M24 48l-6 4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "Native Mobile Apps",
    short: "iOS & Android Native",
    description:
      "For someone looking for versatility, our team develops robust native apps for both iOS and Android platforms. We focus on aligning app development services with your business and security requirements. By leveraging platform-specific features, we create secure, scalable and intuitive mobile experiences that grow your business and captivate your end-users.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="8" y="16" width="26" height="42" rx="4"/>
        <rect x="46" y="16" width="26" height="42" rx="4"/>
        <path d="M18 52h6M56 52h6" strokeLinecap="round"/>
        <path d="M24 28h-8v12h8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 28h8v12h-8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 36h4M56 36h4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    number: "05",
    title: "Cross-Platform Apps",
    short: "Write Once, Run Anywhere",
    description:
      "Cross-platform apps are cost-effective and easy to maintain, making them a fantastic addition to your business. They work seamlessly across different environments, combining the best of native and web app technologies. With this approach, we create mobile apps that deliver flawless performance and a unified user experience on every device.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="10" y="20" width="28" height="40" rx="4"/>
        <rect x="42" y="20" width="28" height="40" rx="4"/>
        <path d="M20 36l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 36l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 40h12" strokeLinecap="round"/>
        <path d="M16 52h16M48 52h16" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    number: "06",
    title: "Progressive Web Apps",
    short: "Web + Native Hybrid",
    description:
      "Our Progressive Web App (PWA) development services bring you the best of both worlds — native-like features and easy installability. PWAs are fast, reliable, and engaging, blending the perks of web and mobile apps. With our expertise, you can deliver an amazing digital experience to your audience, no matter what device they're using.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.7" width="44" height="44">
        <rect x="12" y="24" width="56" height="36" rx="4"/>
        <path d="M12 32h56"/>
        <circle cx="20" cy="28" r="2" fill="currentColor"/>
        <circle cx="28" cy="28" r="2" fill="currentColor"/>
        <path d="M30 44l8-8 8 8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 36v16" strokeLinecap="round"/>
        <path d="M30 52h16" strokeLinecap="round"/>
        <path d="M20 42h6M54 42h6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ── Ambient orb ── */
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", borderRadius: "50%",
        filter: "blur(88px)", pointerEvents: "none", ...style,
      }}
    />
  );
}

/* ── Service card ── */
function ServiceCard({ service, index }) {
  const ref       = useRef(null);
  const inV       = useInView(ref, { once: true, margin: "-50px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.09, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative", cursor: "default" }}
    >
      {/* Card glow behind on hover */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0, scale: hov ? 1 : 0.85 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute", inset: -2, borderRadius: 20,
          background: `radial-gradient(ellipse at 40% 40%, ${BLUE_DIM}, transparent 65%)`,
          filter: "blur(14px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          background: hov
            ? "rgba(59,130,246,0.08)"
            : "rgba(255,255,255,0.03)",
          borderColor: hov
            ? "rgba(59,130,246,0.38)"
            : "rgba(255,255,255,0.07)",
          boxShadow: hov
            ? "0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.3)"
            : "0 2px 16px rgba(0,0,0,0.25)",
          y: hov ? -6 : 0,
        }}
        transition={{ duration: 0.35, ease: E }}
        style={{
          position: "relative", zIndex: 1,
          padding: "40px 32px",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 18,
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Top sliding accent line */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: E }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 2.5,
            background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)`,
            transformOrigin: "left",
          }}
        />

        {/* Number + icon row */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", marginBottom: 24,
        }}>
          {/* Number */}
          <motion.span
            animate={{ color: hov ? BLUE : "rgba(255,255,255,0.18)" }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 12,
              letterSpacing: 3, textTransform: "uppercase",
            }}
          >
            {service.number}
          </motion.span>

          {/* Icon container */}
          <motion.div
            animate={{
              background: hov ? `${BLUE}22` : "rgba(255,255,255,0.05)",
              color: hov ? BLUE : "rgba(255,255,255,0.55)",
              borderColor: hov ? `${BLUE}44` : "rgba(255,255,255,0.08)",
              y: hov ? -4 : 0,
              filter: hov
                ? `drop-shadow(0 6px 18px ${BLUE}55)`
                : "none",
            }}
            transition={{ duration: 0.35, ease: E }}
            style={{
              width: 64, height: 64, borderRadius: 16,
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {service.icon}
          </motion.div>
        </div>

        {/* Short tag */}
        <motion.div
          animate={{ color: hov ? BLUE : "rgba(255,255,255,0.28)" }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: 10,
            letterSpacing: 2.5, textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {service.short}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.9)" }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 20,
            textTransform: "uppercase", letterSpacing: "0.3px",
            lineHeight: 1.15, margin: "0 0 6px",
          }}
        >
          {service.title}
        </motion.h3>

        {/* Animated divider */}
        <motion.div
          animate={{
            background: hov
              ? `${BLUE}55`
              : "rgba(255,255,255,0.07)",
          }}
          transition={{ duration: 0.3 }}
          style={{ height: 1, width: "100%", margin: "14px 0 16px" }}
        />

        {/* Description */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 14, lineHeight: 1.85,
          color: "rgba(255,255,255,0.48)",
          margin: "0 0 20px",
        }}>
          {service.description}
        </p>

        {/* Learn more */}
        <motion.div
          animate={{
            x: hov ? 4 : 0,
            color: hov ? BLUE : "rgba(255,255,255,0.25)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700, fontSize: 11,
            letterSpacing: 2, textTransform: "uppercase",
          }}
        >
          <div style={{ width: 18, height: 1.5, background: "currentColor", borderRadius: 2 }} />
          Learn More
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M7 3l3 3-3 3"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function MobileServicesPremium() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .ms-section {
          position: relative;
          background: linear-gradient(158deg, #050b18 0%, #07101f 55%, #050e1c 100%);
          padding: 112px 72px 128px;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }
        .ms-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .ms-grid { grid-template-columns: repeat(2, 1fr); }
          .ms-section { padding: 88px 40px 104px !important; }
        }
        @media (max-width: 640px) {
          .ms-grid { grid-template-columns: 1fr; }
          .ms-section { padding: 64px 20px 80px !important; }
          .ms-h2 { font-size: 26px !important; }
          .ms-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .ms-sub { text-align: left !important; }
        }
      `}</style>

      <section ref={sectionRef} className="ms-section">

        {/* ── Atmosphere ── */}
        <Orb style={{ width: 640, height: 640, background: "rgba(59,130,246,0.08)", top: -200, left: -160 }} />
        <Orb style={{ width: 500, height: 500, background: "rgba(96,165,250,0.06)", bottom: -100, right: -80 }} />
        <Orb style={{ width: 360, height: 360, background: "rgba(59,130,246,0.05)", top: "40%", left: "38%" }} />

        {/* Parallax dot grid */}
        <motion.div style={{
          position: "absolute", inset: "-12%",
          backgroundImage: "radial-gradient(rgba(59,130,246,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          y: gridY, pointerEvents: "none",
        }} />

        {/* Vertical structural lines */}
        {[20, 50, 80].map((l, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0, left: `${l}%`, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.06) 30%, rgba(59,130,246,0.06) 70%, transparent)",
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* ── Header ── */}
          <div ref={headRef} style={{ marginBottom: 80 }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={headInV ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
            >
              <div style={{ width: 36, height: 2.5, background: BLUE, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase",
                color: BLUE,
              }}>
                Mobile Development
              </span>
            </motion.div>

            {/* Heading + subtitle row */}
            <div
              className="ms-header-row"
              style={{
                display: "flex", alignItems: "flex-end",
                justifyContent: "space-between", flexWrap: "wrap", gap: 28,
              }}
            >
              <motion.h2
                className="ms-h2"
                initial={{ opacity: 0, y: 36 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 56px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  lineHeight: 1.06,
                  color: "#ffffff",
                  margin: 0, maxWidth: 680,
                }}
              >
                Mobile App Development<br />
                <span style={{
                  background: `linear-gradient(90deg, ${BLUE_LITE} 0%, ${BLUE} 50%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Services for Various Platforms
                </span>
              </motion.h2>

              <motion.p
                className="ms-sub"
                initial={{ opacity: 0, y: 20 }}
                animate={headInV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: E }}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15, lineHeight: 1.85,
                  color: "rgba(255,255,255,0.42)",
                  maxWidth: 400, margin: 0,
                  textAlign: "right",
                }}
              >
                Our mobile app developers have over a decade-long expertise in
                building solutions that meet market needs, empower companies'
                brand identity, and encourage business growth.
              </motion.p>
            </div>

            {/* Animated gradient rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headInV ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: E }}
              style={{
                marginTop: 44, height: 1.5, width: "100%",
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE} 40%, rgba(255,255,255,0.06) 100%)`,
                transformOrigin: "left", borderRadius: 2,
              }}
            />
          </div>

          {/* ── 3×2 Service cards ── */}
          <div className="ms-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                col={i % 3}
                isLastRow={i >= 3}
              />
            ))}
          </div>

    

        </div>
      </section>
    </>
  );
}