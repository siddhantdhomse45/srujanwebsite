import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function CustomHero() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          .hero-container {
            position: relative;
            width: 100%;
            min-height: 88vh;
            display: flex;
            align-items: center;
            overflow: hidden;
            font-family: 'Barlow', sans-serif;
          }
          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1400px;
            width: 100%;
            margin: 0 auto;
            padding: 100px 80px;
          }
          .hero-heading {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 900;
            font-size: clamp(34px, 4.8vw, 66px);
            line-height: 1.04;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #ffffff;
            margin: 0 0 28px;
          }
          .hero-text {
            font-family: 'Barlow', sans-serif;
            font-weight: 400;
            font-size: clamp(14px, 1.1vw, 16px);
            line-height: 1.85;
            color: rgba(255, 255, 255, 0.88);
            margin: 0 0 44px;
            max-width: 580px;
          }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #3b82f6;
            color: #ffffff;
            text-decoration: none;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            font-size: 12.5px;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 16px 32px;
            border-radius: 0;
            white-space: nowrap;
            transition: box-shadow 0.25s, transform 0.2s;
            border: none;
            cursor: pointer;
          }
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            color: #ffffff;
            text-decoration: none;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            font-size: 12.5px;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 14px 30px;
            border-radius: 0;
            border: 2px solid rgba(255, 255, 255, 0.65);
            background: transparent;
            white-space: nowrap;
            transition: background 0.2s, border-color 0.2s, transform 0.2s;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .hero-content {
              padding: 60px 32px;
            }
            .hero-heading {
              font-size: clamp(28px, 6vw, 44px);
              letter-spacing: 0.3px;
            }
            .hero-text {
              max-width: 100%;
              margin-bottom: 36px;
            }
          }
          @media (max-width: 480px) {
            .hero-content {
              padding: 40px 24px;
            }
            .btn-primary, .btn-secondary {
              white-space: normal;
              text-align: center;
              justify-content: center;
              padding: 14px 24px;
              font-size: 11px;
              letter-spacing: 1.5px;
            }
            .btn-primary svg {
              width: 11px;
              height: 11px;
            }
          }
          @media (max-width: 380px) {
            .hero-buttons {
              flex-direction: column;
              width: 100%;
            }
            .btn-primary, .btn-secondary {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>

      <section ref={ref} className="hero-container">
        {/* Parallax background */}
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

        {/* Modern gradient overlay – blue/purple tint for better contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, #0a0f1f 0%, rgba(10,15,31,0.92) 25%, rgba(37,99,235,0.35) 60%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Left accent bar – electric blue */}
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
            background: "#3b82f6",
            transformOrigin: "top",
            zIndex: 5,
            boxShadow: "0 0 12px #3b82f6",
          }}
        />

        <div className="hero-content">
          <div style={{ maxWidth: 660 }}>
            {/* Eyebrow */}
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
                style={{ width: 36, height: 2.5, background: "#3b82f6", borderRadius: 2 }}
              />
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: 3.5,
                  textTransform: "uppercase",
                  color: "#60a5fa",
                }}
              >
                Software Development
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="hero-heading"
            >
              Custom Software<br />
              Development<br />
              Services
            </motion.h1>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.44, ease }}
              className="hero-text"
            >
              We believe the 10% of the functionality of the software you won't
              find in off-the-shelf products often makes the biggest difference.
              That's where custom software applications and custom solutions come
              in — delivering unique business value tailored to your needs. Our
              custom software development services are built with a focus on
              enterprise-grade security and code quality, ensuring reliability,
              compliance, and long-term success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inV ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.58, ease }}
              className="hero-buttons"
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
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

              <motion.a
                href="#"
                whileHover={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "#3b82f6",
                }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
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