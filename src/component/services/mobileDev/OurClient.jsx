import { useState } from "react";

const clients = [
  {
    name: "Guinness",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="10" y="36" fontFamily="Georgia,serif" fontSize="28" fontWeight="700" letterSpacing="-1">GUINNESS</text>
      </svg>
    ),
  },
  {
    name: "Eurostar",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="2" y="36" fontFamily="Georgia,serif" fontSize="22" fontStyle="italic" letterSpacing="1">eurostar</text>
      </svg>
    ),
  },
  {
    name: "KJK",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="10" y="36" fontFamily="Arial,sans-serif" fontSize="30" fontWeight="900" letterSpacing="3">KJ K</text>
      </svg>
    ),
  },
  {
    name: "Melco",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="5" y="30" fontFamily="Georgia,serif" fontSize="20" fontStyle="italic">∞ MELCO</text>
        <text x="22" y="44" fontFamily="Arial,sans-serif" fontSize="9" letterSpacing="2">NASDAQ: MLCO</text>
      </svg>
    ),
  },
  {
    name: "Audi",
    svg: (
      <svg viewBox="0 0 120 50" fill="none" width="110" height="46">
        {[18,36,54,72].map((cx,i) => (
          <circle key={i} cx={cx} cy="22" r="13" stroke="currentColor" strokeWidth="3" fill="none"/>
        ))}
        <text x="38" y="44" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="600" fill="currentColor" letterSpacing="4">AUDI</text>
      </svg>
    ),
  },
  {
    name: "Jaguar",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="5" y="34" fontFamily="Georgia,serif" fontSize="22" fontStyle="italic" letterSpacing="2">JAGUAR</text>
      </svg>
    ),
  },
  {
    name: "Walt Disney",
    svg: (
      <svg viewBox="0 0 140 50" fill="currentColor" width="130" height="46">
        <text x="2" y="36" fontFamily="Georgia,serif" fontSize="24" fontStyle="italic" letterSpacing="1">Walt Disney</text>
      </svg>
    ),
  },
  {
    name: "Guest Services",
    svg: (
      <svg viewBox="0 0 140 50" fill="currentColor" width="130" height="46">
        <rect x="2" y="8" width="26" height="26" rx="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <text x="6" y="26" fontFamily="Arial" fontSize="10" fill="currentColor">✦✦</text>
        <text x="34" y="22" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="800" letterSpacing="1">GUEST</text>
        <text x="34" y="36" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="800" letterSpacing="1">SERVICES</text>
      </svg>
    ),
  },
  {
    name: "Cirrus Insight",
    svg: (
      <svg viewBox="0 0 150 50" fill="currentColor" width="140" height="46">
        <circle cx="14" cy="25" r="10" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="25" r="5" fill="currentColor"/>
        <text x="30" y="30" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="600" letterSpacing="0.5">Cirrus Insight</text>
      </svg>
    ),
  },
  {
    name: "Griffins",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <text x="15" y="20" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="900" letterSpacing="2">⚔</text>
        <text x="5" y="38" fontFamily="Georgia,serif" fontSize="18" fontWeight="700" letterSpacing="1">GRIFFINS</text>
      </svg>
    ),
  },
  {
    name: "Ernst & Young",
    svg: (
      <svg viewBox="0 0 150 50" fill="currentColor" width="140" height="46">
        <text x="2" y="22" fontFamily="Arial,sans-serif" fontSize="28" fontWeight="900" letterSpacing="-1">EY</text>
        <text x="2" y="38" fontFamily="Arial,sans-serif" fontSize="11" letterSpacing="1">ERNST &amp; YOUNG</text>
      </svg>
    ),
  },
  {
    name: "Harley-Davidson",
    svg: (
      <svg viewBox="0 0 130 50" fill="currentColor" width="120" height="46">
        <rect x="2" y="6" width="116" height="38" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="10" y="24" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="900" letterSpacing="2">HARLEY</text>
        <text x="8" y="34" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="900" letterSpacing="1">DAVIDSON</text>
      </svg>
    ),
  },
];

export default function OurClients() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #020b18 0%, #041530 40%, #061d42 70%, #020e24 100%)",
        padding: "90px 40px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "10%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "40%", right: "5%",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }} />
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 18px", borderRadius: "100px",
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa", fontSize: "11px", fontWeight: "700",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
            Trusted Worldwide
          </span>

          <h2 style={{
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: "900",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 24px",
            background: "linear-gradient(135deg, #ffffff 30%, #93c5fd 70%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Our Clients
          </h2>

          <p style={{
            maxWidth: "780px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.85",
            color: "rgba(148,163,184,0.85)",
          }}>
            As a leading mobile application development company, we deliver customer excellence and timely results in every project. Trusted by top brands like EuroAccident, Wynn Las Vegas, and many other esteemed companies, we create mobile apps that truly connect with end users.
          </p>

          {/* Decorative divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            justifyContent: "center", marginTop: "36px",
          }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, rgba(59,130,246,0.5))" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(59,130,246,0.5)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }} />
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, rgba(59,130,246,0.5))" }} />
          </div>
        </div>

        {/* ── Logos Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(59,130,246,0.08)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(59,130,246,0.12)",
          boxShadow: "0 0 60px rgba(37,99,235,0.1), inset 0 0 60px rgba(0,0,0,0.2)",
        }}>
          {clients.map((client, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "44px 32px",
                background: hovered === i
                  ? "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(59,130,246,0.08))"
                  : "linear-gradient(135deg, rgba(4,21,48,0.9), rgba(6,29,66,0.7))",
                transition: "all 0.35s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Hover shimmer */}
              {hovered === i && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 60%)",
                  pointerEvents: "none",
                }} />
              )}

              {/* Top-left corner accent on hover */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: "40px", height: "40px",
                borderTop: hovered === i ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                borderLeft: hovered === i ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                borderTopLeftRadius: "4px",
                transition: "border-color 0.3s",
              }} />
              <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: "40px", height: "40px",
                borderBottom: hovered === i ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                borderRight: hovered === i ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                borderBottomRightRadius: "4px",
                transition: "border-color 0.3s",
              }} />

              {/* Logo */}
              <div style={{
                color: hovered === i ? "#93c5fd" : "rgba(148,163,184,0.55)",
                transform: hovered === i ? "scale(1.08)" : "scale(1)",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                filter: hovered === i
                  ? "drop-shadow(0 0 12px rgba(59,130,246,0.5))"
                  : "none",
              }}>
                {client.svg}
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <div style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(59,130,246,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(59,130,246,0.12)",
        }}>
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Global Clients" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "32px 24px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(4,21,48,0.9), rgba(6,29,66,0.7))",
            }}>
              <div style={{
                fontSize: "36px", fontWeight: "900",
                background: "linear-gradient(135deg, #fff 30%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
              }}>{stat.value}</div>
              <div style={{ fontSize: "13px", color: "rgba(148,163,184,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}