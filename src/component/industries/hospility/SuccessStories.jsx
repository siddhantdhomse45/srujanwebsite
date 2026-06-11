import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiCpu,
  FiHome,
} from "react-icons/fi";

/* ── Data (unchanged) ── */
const stories = [
  {
    id: "wynn",
    brand: "Wynn",
    imgLabel: "Wynn Las Vegas",
    Icon: FiBriefcase,
    intro:
      "One of the world's finest and largest resorts gets an essential hotel app that makes their guests' stay even more comfortable.",
    challenge:
      "Wynn turned to our team to create an essential hotel app, including an array of booking options, guest services, and a universal digital booklet for the resort.",
    solution:
      "Using our approach that combines custom software development and a low-code mobile app platform, we created an app that allows guests to book rooms, restaurant tables, and other locations in a few clicks.",
  },
  {
    id: "prince",
    brand: "Prince Hotel",
    imgLabel: "Prince Hotel Group",
    Icon: FiHome,
    intro:
      "A prestigious international hotel chain modernises guest experience across 50+ properties with a unified mobile platform.",
    challenge:
      "Prince Hotel needed a single app to unify booking, concierge, and in-room service requests across all their global properties while maintaining brand identity.",
    solution:
      "We built a white-label mobile platform with property-specific theming, real-time availability sync, and a multilingual guest service hub deployed across all 50+ hotels.",
  },
  {
    id: "guestservices",
    brand: "Guest Services",
    imgLabel: "Guest Services Inc.",
    Icon: FiMapPin,
    intro:
      "A leading hospitality management company elevates their guest service operations with AI-powered digital tools.",
    challenge:
      "Guest Services required a scalable digital operations platform to manage requests, maintenance tickets, and staff communications across hundreds of managed properties.",
    solution:
      "Our team delivered an intelligent operations dashboard with automated task routing, real-time staff notifications, and predictive maintenance scheduling integrated with existing PMS.",
  },
  {
    id: "smartluxury",
    brand: "Smart Luxury Hotel",
    imgLabel: "Smart Luxury Hotel",
    Icon: FiCpu,
    intro:
      "A next-generation smart hotel concept deploys IoT-connected rooms and a seamless guest control application.",
    challenge:
      "Smart Luxury Hotel needed to integrate room automation, keyless entry, personalised climate control, and entertainment into a single intuitive guest-facing app.",
    solution:
      "We architected an IoT middleware layer connecting 200+ room devices to a React Native app, enabling full room control, check-in/out automation, and personalised welcome experiences.",
  },
];

const logos = [
  { label: "Wynn Las Vegas", Icon: FiBriefcase },
  { label: "Prince Hotel", Icon: FiHome },
  { label: "Guest Services", Icon: FiMapPin },
  { label: "Smart Luxury Hotel", Icon: FiCpu },
];

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

/* ── Image placeholder (dark theme) ── */
function StoryImage({ story }) {
  const { Icon, imgLabel } = story;
  return (
    <div
      style={{
        width: "48%",
        flexShrink: 0,
        borderRadius: 10,
        overflow: "hidden",
        background: "linear-gradient(135deg,rgba(59,130,246,0.15),rgba(37,99,235,0.08))",
        border: "1px solid rgba(59,130,246,0.2)",
        height: 380,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
      }}
    >
      <Icon size={52} strokeWidth={1} color="#60a5fa" />
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "#93c5fd",
          fontFamily: "'DM Sans',sans-serif",
        }}
      >
        {imgLabel}
      </span>
    </div>
  );
}

/* ── Scrolling logo strip (dark theme) ── */
function LogoStrip({ activeIndex }) {
  const doubled = [...logos, ...logos];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(59,130,246,0.15)",
        marginTop: "3rem",
        overflow: "hidden",
        position: "relative",
        background: "rgba(4,21,48,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollLogos 18s linear infinite",
        }}
      >
        {doubled.map((logo, i) => {
          const isActive = i % logos.length === activeIndex;
          return (
            <div
              key={i}
              style={{
                minWidth: 170,
                padding: "18px 24px",
                borderRight: "1px solid rgba(59,130,246,0.1)",
                borderBottom: isActive ? "2.5px solid #60a5fa" : "2.5px solid transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                transition: "border-color 0.3s",
              }}
            >
              <logo.Icon
                size={18}
                strokeWidth={1.8}
                color={isActive ? "#60a5fa" : "rgba(148,163,184,0.5)"}
                style={{ flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: isActive ? "#60a5fa" : "rgba(186,230,255,0.5)",
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Sans',sans-serif",
                  letterSpacing: "0.3px",
                  transition: "color 0.3s",
                }}
              >
                {logo.label}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes scrollLogos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ── Main export (dark themed) ── */
export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const headRef = useRef(null);

  function goTo(idx) {
    setActive(idx);
    resetTimer(idx);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 4500);
  }

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const story = stories[active];

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
        padding: "clamp(48px,8vw,96px) 0 0",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        borderTop: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Blueprint grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="successgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#successgrid)" />
      </svg>

      {/* Animated orbs */}
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
        {/* ── Heading (dark theme) ── */}
        <div
          ref={headRef}
          style={{ textAlign: "center", marginBottom: "clamp(28px,4vw,48px)" }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(20px,3vw,30px)",
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Success Stories
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(13px,1.4vw,15px)",
              color: "rgba(186,230,255,0.60)",
              lineHeight: 1.85,
              maxWidth: 580,
              marginInline: "auto",
            }}
          >
            Fortune 1000 satisfied customers worldwide across hospitality vertical
            and a 13-year record of success speak for themselves.
          </p>
        </div>

        {/* ── Story Card (dark theme) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={story.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              gap: "clamp(20px,3.5vw,48px)",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* Image / placeholder */}
            <StoryImage story={story} />

            {/* Content */}
            <div
              style={{
                flex: 1,
                minWidth: "clamp(220px,40%,420px)",
                paddingTop: "0.25rem",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "clamp(18px,2.2vw,24px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.3px",
                }}
              >
                {story.brand}
              </h3>

              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: "clamp(13px,1.4vw,14.5px)",
                  color: "rgba(186,230,255,0.70)",
                  lineHeight: 1.85,
                }}
              >
                {story.intro}
              </p>

              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "clamp(13px,1.3vw,14px)",
                  fontWeight: 700,
                  color: "#93c5fd",
                }}
              >
                Challenge
              </p>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: "clamp(12.5px,1.3vw,13.5px)",
                  color: "rgba(186,230,255,0.60)",
                  lineHeight: 1.85,
                }}
              >
                {story.challenge}
              </p>

              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "clamp(13px,1.3vw,14px)",
                  fontWeight: 700,
                  color: "#93c5fd",
                }}
              >
                Solution
              </p>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: "clamp(12.5px,1.3vw,13.5px)",
                  color: "rgba(186,230,255,0.60)",
                  lineHeight: 1.85,
                }}
              >
                {story.solution}
              </p>

              {/* Dots */}
              <div style={{ display: "flex", gap: 8 }}>
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Story ${i + 1}`}
                    style={{
                      width: i === active ? 22 : 8,
                      height: 8,
                      borderRadius: 100,
                      background: i === active ? "#60a5fa" : "rgba(148,163,184,0.4)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.35s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Logo Strip (dark themed) ── */}
      <LogoStrip activeIndex={active} />
    </section>
  );
}