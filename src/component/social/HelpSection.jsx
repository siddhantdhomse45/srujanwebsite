import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const helpItems = [
  {
    title: "Donate",
    image: "https://www.intellectsoft.net/assets/b602fd8a/img/social-responsibility/help1.png",
    description:
      "The impact of war on the economy is formidable. The people of Ukraine require financial support, as the relentless drain on budgets is a significant challenge. Numerous charitable organizations are actively raising funds to address this pressing need.",
    points: [
      "The special fund of the Ukrainian President — United 24",
      "The National Bank of Ukraine donation initiative — Support the Armed Forces of Ukraine",
      "The Ukrainian charity organization supporting Defense Forces — Come Back Alive",
    ],
    footer: "Even small contributions can have a significant impact on making a difference.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    grad: "linear-gradient(135deg,#0369a1,#38bdf8)",
    num: "01",
  },
  {
    title: "Help the Refugees",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600",
    description:
      "Millions of displaced Ukrainians rely on social support and charity funds in the status of temporary protected civilians abroad. If interested in volunteering, find local help centers online or consider donating to a refugee center.",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.18)",
    grad: "linear-gradient(135deg,#4338ca,#818cf8)",
    num: "02",
  },
  {
    title: "Don't Support Russia",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600",
    description:
      "Don't support the russian war machine. Boycott russian products and products from companies operating in russia. By purchasing these items, you contribute to the budget of a state sponsor of terrorism.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    num: "03",
  },
];

const Rev = ({ children, delay = 0, x = 0, y = 40 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function HelpSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0 100px",
        background: "linear-gradient(160deg,#020d1e 0%,#04152d 45%,#060e20 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .hs-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
          z-index: 10;
        }

        .hs-card {
          display: flex;
          align-items: stretch;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: default;
          transition:
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .hs-card:hover {
          transform: translateY(-6px);
        }

        .hs-img-wrap {
          flex-shrink: 0;
          width: 240px;
          position: relative;
          overflow: hidden;
        }
        .hs-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease;
          filter: brightness(0.7) saturate(0.8);
        }
        .hs-card:hover .hs-img-wrap img {
          transform: scale(1.07);
          filter: brightness(0.85) saturate(1.1);
        }

        .hs-content {
          flex: 1;
          padding: clamp(20px, 4vw, 44px);
          position: relative;
          overflow: hidden;
          /* Ensure content doesn't overflow on small cards */
          min-width: 0;
        }

        .hs-accent-line {
          height: 2px;
          border-radius: 2px;
          margin-top: 20px;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        /* ── Tablet (≤900px) ── */
        @media (max-width: 900px) {
          .hs-inner {
            padding: 0 32px;
          }
          .hs-img-wrap {
            width: 200px;
          }
        }

        /* ── Mobile (≤640px): stack image above content ── */
        @media (max-width: 640px) {
          .hs-inner {
            padding: 0 16px;
          }
          .hs-card {
            flex-direction: column;
            border-radius: 16px;
          }
          .hs-card:hover {
            /* Avoid layout jump on mobile */
            transform: translateY(-3px);
          }
          .hs-img-wrap {
            width: 100%;
            height: 200px;
            flex-shrink: 0;
          }
          .hs-content {
            padding: 20px 18px 24px;
          }
        }

        /* ── Small mobile (≤380px) ── */
        @media (max-width: 380px) {
          .hs-img-wrap {
            height: 170px;
          }
        }
      `}</style>

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-10%", left: "-8%",
          width: "min(520px, 80vw)", height: "min(520px, 80vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.10, 1], opacity: [0.10, 0.16, 0.10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", bottom: "-8%", right: "-6%",
          width: "min(480px, 75vw)", height: "min(480px, 75vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* Grid texture */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hsgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hsgrid)" />
      </svg>

      <div className="hs-inner">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>

          <Rev>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 22,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22d3ee", boxShadow: "0 0 8px #22d3ee",
                display: "inline-block",
              }} />
              <span style={{
                color: "rgba(255,255,255,0.6)", fontSize: 12,
                fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase",
              }}>
                Take Action
              </span>
            </div>
          </Rev>

          <Rev delay={0.1}>
            <h2 style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 3.4rem)",
              fontWeight: 800, color: "white",
              letterSpacing: "-1px", lineHeight: 1.1,
              margin: "0 0 22px",
            }}>
              How Can{" "}
              <span style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                You Help
              </span>
            </h2>
          </Rev>

          <Rev delay={0.2}>
            <p style={{
              color: "rgba(148,163,184,0.65)",
              fontSize: "clamp(13px, 1.6vw, 17px)",
              lineHeight: 1.78, maxWidth: 680, margin: "0 auto",
              padding: "0 8px",
            }}>
              Every action counts. Whether it's a donation, volunteering, or
              spreading awareness — your support helps Ukraine stand strong against
              aggression and rebuild what was lost.
            </p>
          </Rev>
        </div>

        {/* ── Cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vw, 24px)" }}>
          {helpItems.map((item, i) => {
            const active = hovered === i;
            return (
              <Rev key={i} delay={0.15 + i * 0.12} x={i % 2 === 0 ? -30 : 30} y={0}>
                <motion.div
                  className="hs-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onTouchStart={() => setHovered(i)}
                  onTouchEnd={() => setTimeout(() => setHovered(null), 700)}
                  style={{
                    borderColor: active ? `${item.color}40` : "rgba(255,255,255,0.08)",
                    boxShadow: active
                      ? `0 24px 64px rgba(0,0,0,0.5), 0 0 40px ${item.glow}`
                      : "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Image */}
                  <div className="hs-img-wrap">
                    <img src={item.image} alt={item.title} />

                    {/* Number overlay */}
                    <div style={{
                      position: "absolute", bottom: 14, left: 14,
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "clamp(36px, 5vw, 48px)",
                      fontWeight: 800, lineHeight: 1,
                      color: active ? `${item.color}25` : "rgba(255,255,255,0.12)",
                      userSelect: "none", pointerEvents: "none",
                      transition: "color 0.4s",
                    }}>
                      {item.num}
                    </div>

                    {/* Color tint on hover */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to right, ${item.color}12, transparent)`,
                      opacity: active ? 1 : 0,
                      transition: "opacity 0.4s ease",
                      pointerEvents: "none",
                    }} />
                  </div>

                  {/* Content */}
                  <div className="hs-content">

                    {/* Top glow blob */}
                    <div style={{
                      position: "absolute", top: -40, right: "20%",
                      width: 220, height: 220, borderRadius: "50%",
                      background: `radial-gradient(circle,${item.color}15,transparent 70%)`,
                      filter: "blur(40px)",
                      opacity: active ? 1 : 0,
                      transition: "opacity 0.4s",
                      pointerEvents: "none",
                    }} />

                    {/* Number badge */}
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      width: 28, height: 28, borderRadius: 8,
                      background: item.grad,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, color: "white",
                      opacity: 0.75,
                      boxShadow: `0 2px 10px ${item.color}30`,
                      flexShrink: 0,
                    }}>
                      {item.num}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "clamp(16px, 2.2vw, 24px)",
                        fontWeight: 700,
                        marginBottom: 12,
                        marginTop: 0,
                        paddingRight: 40, /* avoid overlap with badge */
                        color: active ? item.color : "white",
                        transition: "color 0.3s ease",
                        position: "relative", zIndex: 1,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: "rgba(148,163,184,0.65)",
                      fontSize: "clamp(12px, 1.3vw, 15px)",
                      lineHeight: 1.78, margin: "0 0 12px",
                      position: "relative", zIndex: 1,
                    }}>
                      {item.description}
                    </p>

                    {/* Bullet points */}
                    {item.points && (
                      <ul style={{
                        listStyle: "none", padding: 0, margin: "0 0 12px",
                        position: "relative", zIndex: 1,
                      }}>
                        {item.points.map((pt, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -12 }}
                            animate={active ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                            transition={{ duration: 0.4, delay: j * 0.06 }}
                            style={{
                              display: "flex", alignItems: "flex-start", gap: 10,
                              color: "rgba(148,163,184,0.75)",
                              fontSize: "clamp(11px, 1.2vw, 14px)",
                              lineHeight: 1.75, marginBottom: 8,
                            }}
                          >
                            <span style={{
                              width: 6, height: 6, borderRadius: "50%",
                              background: item.color,
                              flexShrink: 0, marginTop: 7,
                              boxShadow: `0 0 6px ${item.color}`,
                              opacity: active ? 1 : 0.5,
                              transition: "opacity 0.3s",
                            }} />
                            {pt}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* Footer note */}
                    {item.footer && (
                      <p style={{
                        color: `${item.color}cc`,
                        fontSize: "clamp(11px, 1.1vw, 14px)",
                        fontWeight: 500, fontStyle: "italic",
                        lineHeight: 1.6, margin: 0,
                        position: "relative", zIndex: 1,
                      }}>
                        {item.footer}
                      </p>
                    )}

                    {/* Animated accent line */}
                    <div
                      className="hs-accent-line"
                      style={{
                        background: item.grad,
                        width: active ? "55%" : "0%",
                      }}
                    />
                  </div>
                </motion.div>
              </Rev>
            );
          })}
        </div>

      </div>
    </section>
  );
}