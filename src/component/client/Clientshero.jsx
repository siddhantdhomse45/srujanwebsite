import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ClientsHero = () => {
  const [ready, setReady] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .ch-wrap {
          font-family: 'Barlow', sans-serif;
        }

        .ch-badge {
          display: inline-block;
          background: #2563eb;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 3px;
        }

        .ch-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.6rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0;
        }

        .ch-body {
          color: rgba(255,255,255,0.72);
          font-size: clamp(0.9rem, 1.3vw, 1.05rem);
          line-height: 1.85;
          max-width: 560px;
          margin: 0;
        }
      `}</style>

      <section ref={heroRef} className="ch-wrap"
        style={{ position: "relative", width: "100%", minHeight: "420px", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* ── Parallax BG ── */}
        <motion.div style={{ position: "absolute", inset: "-20px", y: bgY, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          {/* Dark overlay — matches screenshot */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.55) 55%, rgba(10,15,30,0.30) 100%)" }} />
          {/* Subtle blue tint */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,30,70,0.18)" }} />
        </motion.div>

        {/* ── Content ── */}
        <motion.div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1260, margin: "0 auto", padding: "clamp(48px,8vw,96px) clamp(24px,5vw,64px)", y: contentY, opacity }}>
          <div style={{ maxWidth: 620 }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 20 }}>
              <span className="ch-badge">Clients</span>
            </motion.div>

            {/* Headline — two lines, each sliding up */}
            <div style={{ overflow: "hidden", marginBottom: 6 }}>
              <motion.h1 className="ch-title"
                initial={{ y: 80, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
                Empowering Our Clients
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 28 }}>
              <motion.h1 className="ch-title"
                initial={{ y: 80, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}>
                To Succeed With Technologies
              </motion.h1>
            </div>

            {/* Body */}
            <motion.p className="ch-body"
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}>
              For over 13 years, Purple Techno-Vision LLP has been helping technology startups, global brands, and Fortune 500 companies create impactful software solutions. Learn why they have chosen us and how we have helped them to change people's lives.
            </motion.p>

          </div>
        </motion.div>

      </section>
    </>
  );
};

export default ClientsHero;