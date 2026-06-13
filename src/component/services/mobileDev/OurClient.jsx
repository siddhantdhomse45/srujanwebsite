import { useState } from "react";

const clients = [
  { name: "Guinness",        imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/guinness.svg" },
  { name: "Eurostar",        imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/eurostar.svg" },
  { name: "KJK",             imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/kjk.svg" },
  { name: "Audi",            imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/audi.svg" },
  { name: "Jaguar",          imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/jaguar.svg" },
  { name: "Walt Disney",     imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/walt-disney.svg" },
  { name: "Guest Services",  imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/guest-services.svg" },
  { name: "Griffins",        imageUrl: "https://www.intellectsoft.net/assets/b602fd8a/img/clients-logo/griffins.svg" },
  { name: "Nestlé",          imageUrl: "https://www.intellectsoft.net/blog/wp-content/uploads/nestle.svg" },
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
      {/* Ambient glow blobs and grid – same as before */}
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

        {/* Header – unchanged */}
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

        {/* Logo Grid – 3 columns, white box design */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "60px",
        }}
        className="oc-logo-grid"
        >
          {clients.map((client, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  padding: "clamp(24px, 4vw, 32px) clamp(16px, 3vw, 24px)",
                  background: isHov ? `rgba(59,130,246,0.12)` : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  border: isHov ? `1px solid rgba(59,130,246,0.5)` : "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                {/* Coloured top bar on hover */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  borderRadius: "20px 20px 0 0",
                  background: `linear-gradient(90deg, transparent, #3b82f6, transparent)`,
                  opacity: isHov ? 1 : 0,
                  transition: "opacity 0.3s",
                }} />

                {/* White logo box (key for visibility) */}
                <div style={{
                  width: "140px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "12px",
                  boxShadow: isHov ? `0 0 0 3px rgba(59,130,246,0.3), 0 10px 30px rgba(0,0,0,0.2)` : "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "box-shadow 0.3s",
                }}>
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                {/* Client name */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  fontWeight: 600,
                  color: isHov ? "#ffffff" : "rgba(255,255,255,0.7)",
                  margin: 0,
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  transition: "color 0.3s",
                }}>
                  {client.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar – same as before */}
        

      </div>

      <style>{`
        @media (max-width: 900px) {
          .oc-logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .oc-logo-grid {
            grid-template-columns: 1fr !important;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}