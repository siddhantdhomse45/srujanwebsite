import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Geolocation & Navigation",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: "Gamification",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    label: "Content Management",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    label: "Push Notifications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Social Networking",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: "Behavioural Analytics",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function MarketingAutomation() {
  const [hovBtn, setHovBtn] = useState(false);
  const [sectionRef, inView] = useInView(0.1);
  const [phoneRef, phoneInView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg,#020b18 0%,#041530 55%,#020b18 100%)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "10%", left: "0%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.08),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "5%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.07),transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          {/* ── LEFT: Text content ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>

            {/* Badge */}
            <div style={{ marginBottom: "22px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "7px 18px", borderRadius: "6px",
                background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white", fontSize: "11px", fontWeight: "800",
                letterSpacing: "0.2em", textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.8)", display: "inline-block" }} />
                Mobile Marketing
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: "clamp(28px,4vw,50px)",
              fontWeight: "900",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.08,
              margin: "0 0 8px",
              color: "white",
            }}>
              Marketing{" "}
              <span style={{
                background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Automation
              </span>
            </h2>

            {/* Accent line */}
            <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg,#2563eb,#6366f1)", margin: "18px 0 24px" }} />

            {/* Description */}
            <p style={{
              fontSize: "15px", lineHeight: "1.9",
              color: "rgba(148,163,184,0.88)",
              margin: "0 0 44px", maxWidth: "500px",
            }}>
              Reach out to your customers and drive foot traffic to your store
              with an engaging branded application made through a low-code mobile
              platform. Update your app on-the-fly and use comprehensive analytics
              to learn more about your users, automate your mobile marketing, and
              engage customers with targeted push notifications.
            </p>

            {/* Feature grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px",
              marginBottom: "44px",
            }}>
              {features.map((f, i) => (
                <FeatureItem key={i} feature={f} delay={i * 0.08} inView={inView} />
              ))}
            </div>

            {/* CTA */}
            <button
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 32px", borderRadius: "10px", border: "none",
                background: hovBtn
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white", fontSize: "13px", fontWeight: "800",
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovBtn
                  ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                  : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovBtn ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" />
              </svg>
              Get Started
            </button>
          </div>

          {/* ── RIGHT: Phone mockup ── */}
          <div
            ref={phoneRef}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "560px",
              opacity: phoneInView ? 1 : 0,
              transform: phoneInView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Glow behind phones */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "320px", height: "320px", borderRadius: "50%",
              background: "radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Back phone (slightly behind and offset) */}
            <div style={{
              position: "absolute",
              left: "30px",
              top: "60px",
              width: "200px",
              borderRadius: "28px",
              background: "rgba(4,21,48,0.9)",
              border: "1px solid rgba(59,130,246,0.25)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1)",
              overflow: "hidden",
              zIndex: 1,
            }}>
              {/* Phone top bar */}
              <div style={{ background: "rgba(2,11,24,0.95)", padding: "10px 14px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(59,130,246,0.12)" }}>
                <span style={{ fontSize: "9px", color: "rgba(148,163,184,0.6)", fontWeight: "700" }}>●●● BELL</span>
                <span style={{ fontSize: "9px", color: "rgba(148,163,184,0.6)", fontWeight: "700" }}>4:21</span>
              </div>
              {/* Screen content */}
              <div style={{ background: "linear-gradient(180deg,#0a1628,#041530)", padding: "14px 12px", minHeight: "340px" }}>
                {/* Search bar */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px", marginBottom: "12px", border: "1px solid rgba(59,130,246,0.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" width="12" height="12"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" /></svg>
                  <span style={{ fontSize: "10px", color: "rgba(148,163,184,0.5)" }}>Search products...</span>
                </div>
                {/* Product label */}
                <div style={{ fontSize: "10px", fontWeight: "800", color: "rgba(148,163,184,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>PRODUCTS</div>
                {/* Product cards */}
                {[
                  { name: "Summer Sale", sub: "GET UP TO 40% OFF", color: "#1d4ed8" },
                  { name: "New Arrivals", sub: "SPRING COLLECTION", color: "#4f46e5" },
                ].map((p, i) => (
                  <div key={i} style={{ borderRadius: "10px", overflow: "hidden", marginBottom: "8px", background: `linear-gradient(135deg,${p.color}33,rgba(4,21,48,0.8))`, border: "1px solid rgba(59,130,246,0.15)", padding: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "white", marginBottom: "3px" }}>{p.name}</div>
                    <div style={{ fontSize: "9px", fontWeight: "700", color: "#60a5fa", letterSpacing: "0.08em" }}>{p.sub}</div>
                  </div>
                ))}
                {/* Push notification */}
                <div style={{ marginTop: "12px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "8px", padding: "10px 10px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "linear-gradient(135deg,#1d4ed8,#4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="12" height="12"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", fontWeight: "800", color: "white" }}>Flash Deal!</div>
                    <div style={{ fontSize: "8px", color: "rgba(148,163,184,0.6)" }}>50% off ends in 2h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Front phone (main, larger) */}
            <div style={{
              position: "relative",
              width: "240px",
              marginLeft: "80px",
              borderRadius: "36px",
              background: "rgba(4,21,48,0.95)",
              border: "1.5px solid rgba(59,130,246,0.3)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.15), 0 0 60px rgba(37,99,235,0.15)",
              overflow: "hidden",
              zIndex: 2,
            }}>
              {/* Notch */}
              <div style={{ background: "rgba(2,11,24,0.98)", padding: "12px 16px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
                <span style={{ fontSize: "9px", color: "rgba(148,163,184,0.5)", fontWeight: "700" }}>●●● GS ▲</span>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontWeight: "700" }}>9:41 AM</span>
                <span style={{ fontSize: "9px", color: "rgba(148,163,184,0.5)", fontWeight: "700" }}>58% ▮</span>
              </div>

              {/* App header */}
              <div style={{ background: "rgba(4,21,48,0.98)", padding: "14px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(96,165,250,0.7)", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>Scan Result</div>
                  <div style={{ fontSize: "13px", fontWeight: "900", color: "white" }}>Desert Boots</div>
                </div>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </div>
              </div>

              {/* Product image area */}
              <div style={{ background: "linear-gradient(180deg,#0d1f3c,#061228)", padding: "20px 16px 14px", textAlign: "center", position: "relative" }}>
                {/* Floating product attributes */}
                <div style={{ position: "absolute", left: "12px", top: "24px", textAlign: "left" }}>
                  <div style={{ fontSize: "8px", color: "rgba(148,163,184,0.5)", marginBottom: "2px" }}>Material</div>
                  <div style={{ fontSize: "9px", fontWeight: "800", color: "rgba(148,163,184,0.8)" }}>Brown leather</div>
                </div>
                <div style={{ position: "absolute", right: "12px", top: "24px", textAlign: "right" }}>
                  <div style={{ fontSize: "8px", color: "rgba(148,163,184,0.5)", marginBottom: "2px" }}>Heel</div>
                  <div style={{ fontSize: "9px", fontWeight: "800", color: "rgba(148,163,184,0.8)" }}>0.75" height</div>
                </div>

                {/* Shoe image placeholder — stylised */}
                <div style={{ width: "130px", height: "100px", margin: "0 auto 16px", position: "relative" }}>
                  <div style={{ width: "130px", height: "80px", background: "linear-gradient(135deg,#b45309,#92400e,#78350f)", borderRadius: "0 40px 20px 50px", position: "relative", top: "10px", boxShadow: "0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(180,83,9,0.3)" }}>
                    <div style={{ position: "absolute", top: "8px", left: "20px", right: "20px", height: "3px", background: "rgba(255,255,255,0.15)", borderRadius: "2px" }} />
                    <div style={{ position: "absolute", top: "16px", left: "28px", right: "28px", height: "2px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
                    <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "40px", height: "2px", background: "rgba(255,255,255,0.12)", borderRadius: "2px" }} />
                  </div>
                </div>

                {/* Attribute pills */}
                <div style={{ display: "flex", gap: "6px", justifyContent: "center", flexWrap: "wrap", marginBottom: "4px" }}>
                  {["Lace-up closure", "Leather sole"].map((a) => (
                    <span key={a} style={{ fontSize: "8px", fontWeight: "700", color: "rgba(148,163,184,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.12)", borderRadius: "4px", padding: "3px 8px" }}>{a}</span>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(59,130,246,0.08)" }}>
                <div style={{ fontSize: "8px", fontWeight: "700", color: "rgba(148,163,184,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>AVAILABLE SIZES</div>
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {["8", "8.5", "9", "10", "10.5", "13"].map((s, i) => (
                    <div key={s} style={{ width: "28px", height: "24px", borderRadius: "6px", background: i === 2 ? "linear-gradient(135deg,#1d4ed8,#4f46e5)" : "rgba(255,255,255,0.05)", border: i === 2 ? "none" : "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "800", color: i === 2 ? "white" : "rgba(148,163,184,0.6)" }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete your look */}
              <div style={{ padding: "10px 16px 16px", borderTop: "1px solid rgba(59,130,246,0.08)" }}>
                <div style={{ fontSize: "8px", fontWeight: "700", color: "rgba(148,163,184,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>COMPLETE YOUR LOOK</div>
                <div style={{ display: "flex", gap: "5px" }}>
                  {["#92400e", "#1d4ed8", "#1f2937", "#374151"].map((c, i) => (
                    <div key={i} style={{ width: "44px", height: "36px", borderRadius: "8px", background: `${c}55`, border: `1px solid ${c}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "20px", height: "14px", borderRadius: "3px", background: c, opacity: 0.8 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <div style={{
              position: "absolute", top: "12%", right: "0px",
              padding: "12px 16px", borderRadius: "14px",
              background: "rgba(4,21,48,0.9)",
              border: "1px solid rgba(59,130,246,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              zIndex: 10,
            }}>
              <div style={{ fontSize: "18px", fontWeight: "900", background: "linear-gradient(135deg,#fff,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+47%</div>
              <div style={{ fontSize: "9px", fontWeight: "700", color: "rgba(148,163,184,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Engagement</div>
            </div>

            {/* Floating notification badge */}
            <div style={{
              position: "absolute", bottom: "12%", left: "0px",
              padding: "10px 14px", borderRadius: "12px",
              background: "rgba(4,21,48,0.9)",
              border: "1px solid rgba(59,130,246,0.2)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              zIndex: 10,
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg,#059669,#0d9488)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "800", color: "white" }}>Live Campaign</div>
                <div style={{ fontSize: "9px", color: "rgba(148,163,184,0.6)" }}>3.2k users reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, delay, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "14px",
        padding: "14px 16px", borderRadius: "12px",
        border: hov ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.05)",
        background: hov ? "rgba(37,99,235,0.12)" : "rgba(255,255,255,0.02)",
        cursor: "default",
        transition: "all 0.25s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay + 0.35}s`,
        boxShadow: hov ? "0 4px 20px rgba(37,99,235,0.15)" : "none",
      }}
    >
      <div style={{
        width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
        background: hov ? "linear-gradient(135deg,#1d4ed8,#4f46e5)" : "rgba(255,255,255,0.04)",
        border: hov ? "none" : "1px solid rgba(59,130,246,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hov ? "white" : "rgba(96,165,250,0.8)",
        transition: "all 0.25s ease",
      }}>
        {feature.icon}
      </div>
      <span style={{
        fontSize: "13px", fontWeight: hov ? "800" : "600",
        color: hov ? "white" : "rgba(148,163,184,0.85)",
        transition: "all 0.25s ease",
        letterSpacing: "0.01em",
      }}>
        {feature.label}
      </span>
    </div>
  );
}