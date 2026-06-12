import { useState } from "react";

const clients = [
  {
    name: "Guinness",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/guinness.svg",
  },
  {
    name: "Eurostar",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/eurostar.svg",
  },
  {
    name: "KJK",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/kjk.svg",
  },
  {
    name: "Melco",
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" width="110" height="46">
        <path d="M25 25 C25 18, 32 18, 35 25 L45 38 C48 45, 55 45, 58 38 L68 25 C71 18, 78 18, 78 25" 
              fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Audi",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/audi.svg",
  },
  {
    name: "Jaguar",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/jaguar.svg",
  },
  {
    name: "Walt Disney",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/walt-disney.svg",
  },
  {
    name: "Guest Services",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/guest-services.svg",
  },
  {
    name: "Griffins",
    imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/griffins.svg"
  },
];

export default function OurClients() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #020b18 0%, #041530 40%, #061d42 70%, #020e24 100%)",
        padding: "clamp(60px, 10vw, 90px) clamp(20px, 5vw, 40px)",
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
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 64px)" }}>
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
            fontSize: "clamp(32px, 6vw, 58px)",
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
            fontSize: "clamp(14px, 2vw, 16px)",
            lineHeight: "1.85",
            color: "rgba(148,163,184,0.85)",
            padding: "0 16px",
          }}>
            As a leading mobile application development company, we deliver customer excellence and timely results in every project. Trusted by top brands like EuroAccident, Wynn Las Vegas, and many other esteemed companies, we create mobile apps that truly connect with end users.
          </p>

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

        {/* Logos Grid - responsive with 10px gap */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          background: "transparent",
          borderRadius: "20px",
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
                padding: "clamp(32px, 6vw, 44px) clamp(20px, 4vw, 32px)",
                background: hovered === i
                  ? "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(59,130,246,0.08))"
                  : "linear-gradient(135deg, rgba(4,21,48,0.9), rgba(6,29,66,0.7))",
                transition: "all 0.35s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                border: "1px solid rgba(59,130,246,0.12)",
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

              {/* Corner accents on hover */}
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

              {/* Logo - enhanced visibility */}
              <div style={{
                color: "#f1f5f9",
                transform: hovered === i ? "scale(1.08)" : "scale(1)",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                filter: hovered === i
                  ? "drop-shadow(0 0 12px rgba(59,130,246,0.6)) drop-shadow(0 0 4px rgba(0,0,0,0.3))"
                  : "drop-shadow(0 0 2px rgba(0,0,0,0.4))",
              }}>
                {client.imageUrl ? (
                  <img 
                    src={client.imageUrl} 
                    alt={client.name}
                    style={{
                      height: "clamp(36px, 6vw, 46px)",
                      width: "auto",
                      maxWidth: "clamp(100px, 20vw, 140px)",
                      objectFit: "contain",
                      display: "block",
                      filter: "brightness(1.05) contrast(1.05)",
                    }}
                  />
                ) : (
                  <div style={{ color: hovered === i ? "#ffffff" : "#e2e8f0" }}>
                    {client.svg}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Stats bar */}
        <div style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          background: "transparent",
          borderRadius: "16px",
        }}>
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Global Clients" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "clamp(24px, 5vw, 32px) clamp(16px, 3vw, 24px)",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(4,21,48,0.9), rgba(6,29,66,0.7))",
              borderRadius: "16px",
              border: "1px solid rgba(59,130,246,0.12)",
            }}>
              <div style={{
                fontSize: "clamp(28px, 5vw, 36px)",
                fontWeight: "900",
                background: "linear-gradient(135deg, #fff 30%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
              }}>{stat.value}</div>
              <div style={{ 
                fontSize: "clamp(11px, 2vw, 13px)", 
                color: "rgba(148,163,184,0.7)", 
                letterSpacing: "0.08em", 
                textTransform: "uppercase" 
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive CSS Grid rules */}
      <style>{`
        @media (max-width: 900px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}