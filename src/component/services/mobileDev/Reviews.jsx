import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    company: "TechNova Solutions",
    person: "Rajesh Mehta",
    role: "CEO & Founder",
    location: "Mumbai, Maharashtra",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "Their attention to detail and technical expertise is outstanding. The team delivered our fintech platform 2 weeks ahead of schedule with zero critical bugs.",
    full: "The Waves Techno-Vision LLP team transformed our legacy banking system into a modern, scalable platform. Their proactive communication via daily standups and their ability to react quickly to our changing requirements made the entire experience seamless. We are onboard for all future versions.",
    accent: "#38bdf8",
  },
  {
    id: 2,
    company: "GreenLeaf Agritech",
    person: "Priya Sharma",
    role: "Co-Founder & CTO",
    location: "Pune, Maharashtra",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "Waves Techno-Vision LLP always finds time to explore new innovations for us and have demonstrated a real willingness to react quickly to change.",
    full: "Their work on our IoT-based farm monitoring app resulted in increased efficiency across 500+ farms in Maharashtra. The team fully built and tested every feature, pushing them live on schedule. We appreciated their project management, flexibility, and professionalism throughout.",
    accent: "#818cf8",
  },
  {
    id: 3,
    company: "Electragram Retail",
    person: "Amit Joshi",
    role: "Director of Technology",
    location: "Bengaluru, Karnataka",
    flag: "🇮🇳",
    rating: 4.5,
    quote: "We felt like they truly were a part of our internal team, not an outsourced group.",
    full: "Waves Techno-Vision LLP fully built and tested all e-commerce features which were pushed live to production. The team was very responsive to client requests and communicated regularly via Slack, email, and weekly video meetings. The client was impressed by their professionalism and technical depth.",
    accent: "#34d399",
  },
  {
    id: 4,
    company: "HealthFirst Clinics",
    person: "Dr. Sunita Kapoor",
    role: "Founder & Medical Director",
    location: "Delhi, NCR",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "The telemedicine platform they built for us has already served over 50,000 patients in just 6 months. Absolutely transformational.",
    full: "From initial discovery to post-launch support, every stage was handled with precision. Their HIPAA-compliant architecture and seamless video consultation module exceeded our expectations. The team's domain knowledge of healthcare tech was evident in every sprint review.",
    accent: "#fb923c",
  },
  {
    id: 5,
    company: "SwiftLogix",
    person: "Karan Malhotra",
    role: "Head of Product",
    location: "Hyderabad, Telangana",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "Our logistics app went from concept to 10,000 daily active users in under 4 months. The velocity and quality were exceptional.",
    full: "Waves Techno-Vision LLP delivered a real-time fleet tracking and delivery management system that our ops team loves. Their use of agile sprints with bi-weekly demos kept us fully informed. The React Native app performs flawlessly on both iOS and Android with a 4.8-star store rating.",
    accent: "#c084fc",
  },
  {
    id: 6,
    company: "EduBridge Academy",
    person: "Neha Verma",
    role: "CEO",
    location: "Jaipur, Rajasthan",
    flag: "🇮🇳",
    rating: 4.5,
    quote: "They built our entire LMS platform from scratch. 200,000 students are now learning on it daily. The stability is remarkable.",
    full: "The team understood our vision for accessible education and delivered a robust, multilingual LMS with live class streaming, quizzes, and progress tracking. Their QA process was thorough and their post-launch support team resolved every issue within hours. Outstanding partnership.",
    accent: "#f472b6",
  },
  {
    id: 7,
    company: "UrbanNest PropTech",
    person: "Vikram Singh",
    role: "CTO",
    location: "Chennai, Tamil Nadu",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "The real estate discovery platform they delivered cut our customer acquisition cost by 40%. ROI was visible within the first quarter.",
    full: "Waves Techno-Vision LLP built an AI-powered property recommendation engine with 3D virtual tours and instant loan eligibility checks. The backend handles 100,000 concurrent users without any performance degradation. Their architecture-first approach saved us from costly rewrites later.",
    accent: "#fbbf24",
  },
  {
    id: 8,
    company: "FoodieHub",
    person: "Anjali Deshmukh",
    role: "Founder",
    location: "Ahmedabad, Gujarat",
    flag: "🇮🇳",
    rating: 4.0,
    quote: "Our food delivery app launched in 3 cities simultaneously with zero downtime. The CI/CD pipeline they set up is world-class.",
    full: "From the restaurant partner portal to the customer app and delivery executive dashboard, Waves Techno-Vision LLP built all three surfaces cohesively. Real-time order tracking and dynamic pricing algorithms work flawlessly. The team's communication and transparency were top-notch throughout the project.",
    accent: "#38bdf8",
  },
  {
    id: 9,
    company: "SecureVault Fintech",
    person: "Rohit Agarwal",
    role: "VP Engineering",
    location: "Kolkata, West Bengal",
    flag: "🇮🇳",
    rating: 5.0,
    quote: "They passed our RBI compliance audit on the very first attempt. Their security-first mindset is exactly what fintech demands.",
    full: "Building a payment gateway requires precision and deep regulatory knowledge. Waves Techno-Vision LLP delivered a PCI-DSS compliant system with multi-factor authentication, fraud detection ML models, and a real-time transaction dashboard. Their documentation was so thorough that our compliance team was impressed.",
    accent: "#818cf8",
  },
  {
    id: 10,
    company: "TravelMitra",
    person: "Pooja Nair",
    role: "Product Manager",
    location: "Kochi, Kerala",
    flag: "🇮🇳",
    rating: 4.5,
    quote: "Our travel booking platform now handles 5 lakh bookings per month. Waves Techno-Vision LLP's scalable architecture made this possible.",
    full: "The team built a comprehensive travel super-app combining flights, hotels, buses, and holiday packages with a single checkout. The dynamic pricing engine and seat map integration were particularly impressive. Post-launch, they've been available around the clock for any issues — true partners.",
    accent: "#34d399",
  },
];

function StarRating({ rating, accent }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      {Array(full).fill(0).map((_, i) => (
        <FiStar key={"f" + i} size={14} fill={accent} stroke={accent} />
      ))}
      {half && (
        <div style={{ position: "relative", width: 14, height: 14 }}>
          <FiStar size={14} fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" style={{ position: "absolute" }} />
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: "50%" }}>
            <FiStar size={14} fill={accent} stroke={accent} />
          </div>
        </div>
      )}
      {Array(empty).fill(0).map((_, i) => (
        <FiStar key={"e" + i} size={14} fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.18)" />
      ))}
    </div>
  );
}

function ReviewCard({ review, position, isCenter }) {
  const variants = {
    center: { opacity: 1, scale: 1, x: 0, zIndex: 10, filter: "blur(0px)" },
    left: { opacity: 0.5, scale: 0.88, x: "-62%", zIndex: 5, filter: "blur(1px)" },
    right: { opacity: 0.5, scale: 0.88, x: "62%", zIndex: 5, filter: "blur(1px)" },
    hidden: { opacity: 0, scale: 0.8, x: 0, zIndex: 0, filter: "blur(4px)" },
  };

  return (
    <motion.div
      variants={variants}
      animate={position}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={isCenter ? "center-card" : ""}
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "clamp(300px, 38vw, 480px)",
        marginLeft: "clamp(-150px, -19vw, -240px)",
        borderRadius: 24,
        background: position === "center"
          ? `linear-gradient(145deg,${review.accent}0e,rgba(255,255,255,0.05))`
          : "rgba(255,255,255,0.02)",
        border: position === "center"
          ? `1px solid ${review.accent}35`
          : "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        padding: "clamp(24px, 3.5vw, 40px)",
        boxShadow: position === "center"
          ? `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${review.accent}14`
          : "none",
        pointerEvents: position === "center" ? "auto" : "none",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 56, lineHeight: 1, color: `${review.accent}30`, fontFamily: "Georgia,serif", marginBottom: -8 }}>
        "
      </div>

      <div style={{ flex: 1 }}>
        <p style={{
          color: "rgba(255,255,255,0.80)",
          fontSize: "clamp(14px, 1.6vw, 16px)",
          lineHeight: 1.8,
          fontWeight: 500,
          margin: "0 0 16px",
        }}>
          {review.quote}
        </p>
        <p style={{
          color: "rgba(186,230,255,0.45)",
          fontSize: "clamp(12px, 1.3vw, 13.5px)",
          lineHeight: 1.75,
          margin: 0,
        }}>
          {review.full}
        </p>
      </div>

      <div style={{ textAlign: "right", fontSize: 48, lineHeight: 0.8, color: `${review.accent}25`, fontFamily: "Georgia,serif", marginBottom: 16 }}>
        "
      </div>

      <div style={{ height: 1, background: `linear-gradient(90deg,${review.accent}40,transparent)`, marginBottom: 20 }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{
            color: "white",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            fontWeight: 800,
            letterSpacing: "-0.2px",
            marginBottom: 3,
          }}>
            {review.company}
          </div>
          <div style={{ color: "rgba(255,255,255,0.50)", fontSize: "clamp(11px, 1.2vw, 13px)", marginBottom: 4 }}>
            {review.person} · {review.role}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(186,230,255,0.50)", fontSize: 12 }}>
            <span>{review.flag}</span>
            <span>{review.location}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
          <div style={{
            fontSize: "clamp(20px, 2.5vw, 26px)",
            fontWeight: 900,
            background: `linear-gradient(90deg,${review.accent},#818cf8)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px",
          }}>
            {review.rating.toFixed(1)}
          </div>
          <StarRating rating={review.rating} accent={review.accent} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [containerHeight, setContainerHeight] = useState(520);
  const headRef = useRef(null);
  const carouselRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const total = reviews.length;

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  };

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  // Dynamically adjust container height to prevent overlap with controls
  useEffect(() => {
    const updateHeight = () => {
      const centerCard = document.querySelector(".center-card");
      if (centerCard) {
        const height = centerCard.getBoundingClientRect().height;
        setContainerHeight(height + 48); // add comfortable padding below
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [current]);

  const getPosition = (i) => {
    const diff = (i - current + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(64px,10vw,110px) 0 clamp(80px,12vw,130px)",
        background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        borderTop: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* background grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="rvgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rvgrid)" />
      </svg>

      {/* animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -100,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,5vw,48px)", position: "relative", zIndex: 10 }}>
        {/* header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.10)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 20,
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#38bdf8",
                boxShadow: "0 0 8px #38bdf8",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Client Reviews
            </span>
          </div>
          <h2
            style={{
              color: "white",
              fontSize: "clamp(26px,4.5vw,52px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clients Say
            </span>
          </h2>
          <p
            style={{
              color: "rgba(186,230,255,0.50)",
              fontSize: "clamp(14px,1.7vw,17px)",
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Real feedback from real Indian businesses we've partnered with across industries.
          </p>
        </motion.div>

        {/* carousel container with dynamic height */}
        <div
          ref={carouselRef}
          style={{
            position: "relative",
            height: containerHeight,
            marginBottom: 56,
            transition: "height 0.3s ease",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              position={getPosition(i)}
              isCenter={getPosition(i) === "center"}
            />
          ))}
        </div>

        {/* controls */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1, background: "rgba(59,130,246,0.20)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(59,130,246,0.10)",
                border: "1px solid rgba(59,130,246,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#93c5fd",
                cursor: "pointer",
                transition: "all 0.3s",
                outline: "none",
              }}
            >
              <FiChevronLeft size={20} />
            </motion.button>

            <span
              style={{
                color: "rgba(147,197,253,0.50)",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                minWidth: 60,
                textAlign: "center",
              }}
            >
              {current + 1} / {total}
            </span>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1, background: "rgba(59,130,246,0.20)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(59,130,246,0.10)",
                border: "1px solid rgba(59,130,246,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#93c5fd",
                cursor: "pointer",
                transition: "all 0.3s",
                outline: "none",
              }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          {/* dot progress bar */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {reviews.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                animate={{
                  width: i === current ? 28 : 8,
                  background:
                    i === current ? reviews[current].accent : "rgba(255,255,255,0.12)",
                }}
                transition={{ duration: 0.35 }}
                style={{
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}