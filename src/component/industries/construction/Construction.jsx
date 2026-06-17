import { useState } from "react";

export default function Construction() {
  const [hovBtn1, setHovBtn1] = useState(false);
  const [hovBtn2, setHovBtn2] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .construction-stats {
            flex-wrap: wrap;
            gap: 24px !important;
            margin-top: 40px !important;
            padding-top: 24px !important;
          }
          .construction-stats > div {
            min-width: 100px;
          }
        }
        @media (max-width: 900px) {
          .right-decor {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            top: auto !important;
            right: auto !important;
            transform: none !important;
            margin-top: 48px !important;
            padding: 32px 20px !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 24px !important;
            flex-wrap: wrap;
          }
          .decor-lines {
            display: none !important;
          }
          .badge-1, .badge-2 {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            margin: 0 !important;
          }
          .construction-content {
            text-align: center !important;
            max-width: 100% !important;
          }
          .construction-buttons {
            justify-content: center !important;
          }
          .construction-stats {
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .construction-padding {
            padding: 60px 24px !important;
          }
          .construction-heading {
            font-size: clamp(28px, 6vw, 42px) !important;
          }
          .construction-desc {
            font-size: 14px !important;
            max-width: 100% !important;
          }
          .construction-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: 12px !important;
          }
          .construction-buttons button {
            width: 100%;
            justify-content: center;
          }
          .construction-stats {
            flex-direction: column;
            align-items: center;
            gap: 20px !important;
          }
          .construction-stats > div {
            align-items: center;
            text-align: center;
          }
          .badge-1, .badge-2 {
            padding: 10px 16px !important;
          }
        }
        @media (max-width: 480px) {
          .construction-padding {
            padding: 40px 20px !important;
          }
          .badge-icon {
            width: 30px !important;
            height: 30px !important;
          }
          .badge-icon svg {
            width: 14px !important;
            height: 14px !important;
          }
          .badge-text div:first-child {
            font-size: 12px !important;
          }
          .badge-text div:last-child {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* Background dark blue base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,#020b18 0%,#041530 40%,#0a1f3d 70%,#061228 100%)",
        }}
      />

      {/* Decorative background layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: 0,
            bottom: 0,
            width: "62%",
            background:
              "linear-gradient(135deg,transparent 0%,rgba(15,40,80,0.6) 30%,rgba(10,30,60,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "10%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,0.13),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "22%",
            bottom: "5%",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "20%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "50%",
            background:
              "linear-gradient(to right,rgba(2,11,24,0.95) 0%,rgba(2,11,24,0.7) 60%,transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom,rgba(2,11,24,0.9),transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to top,rgba(2,11,24,0.9),transparent)",
          }}
        />
        {[
          { top: "18%", left: "48%", size: 3, opacity: 0.4 },
          { top: "32%", left: "62%", size: 2, opacity: 0.3 },
          { top: "55%", left: "55%", size: 4, opacity: 0.25 },
          { top: "70%", left: "70%", size: 2, opacity: 0.35 },
          { top: "25%", left: "75%", size: 3, opacity: 0.3 },
          { top: "80%", left: "45%", size: 2, opacity: 0.2 },
          { top: "10%", left: "55%", size: 2, opacity: 0.3 },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: "50%",
              background: "#60a5fa",
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div
        className="construction-padding"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Left content */}
          <div className="construction-content" style={{ maxWidth: "680px" }}>
            {/* Badge */}
            <div style={{ marginBottom: "24px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 18px",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.8)",
                    display: "inline-block",
                  }}
                />
                Construction Tech
              </span>
            </div>

            {/* Heading */}
            <h1
              className="construction-heading"
              style={{
                fontSize: "clamp(32px,5vw,62px)",
                fontWeight: "900",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1.1,
                margin: "0 0 28px",
                color: "white",
              }}
            >
              Construction{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Software
              </span>
              <br />
              Development
            </h1>

            {/* Description */}
            <p
              className="construction-desc"
              style={{
                fontSize: "16px",
                lineHeight: "1.85",
                color: "rgba(148,163,184,0.9)",
                maxWidth: "560px",
                margin: "0 0 44px",
              }}
            >
             Waves Techno-Vision LLP delivers construction software development and green
              building solutions to future-driven companies all over the world. Our
              team provides top-notch industry tailored services to drive operational
              efficiency and streamline business processes.
            </p>

            {/* CTA Buttons */}
            <div
              className="construction-buttons"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <button
                onMouseEnter={() => setHovBtn1(true)}
                onMouseLeave={() => setHovBtn1(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  borderRadius: "10px",
                  border: "none",
                  background: hovBtn1
                    ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                    : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: hovBtn1
                    ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                    : "0 8px 28px -4px rgba(37,99,235,0.55)",
                  transform: hovBtn1 ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="16"
                  height="16"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    strokeLinecap="round"
                  />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Contact Us
              </button>

              <button
                onMouseEnter={() => setHovBtn2(true)}
                onMouseLeave={() => setHovBtn2(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 32px",
                  borderRadius: "10px",
                  border: hovBtn2
                    ? "1.5px solid rgba(96,165,250,0.7)"
                    : "1.5px solid rgba(255,255,255,0.2)",
                  background: hovBtn2
                    ? "rgba(37,99,235,0.15)"
                    : "rgba(255,255,255,0.04)",
                  color: hovBtn2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: hovBtn2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
                  transform: hovBtn2 ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="16"
                  height="16"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div
              className="construction-stats"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                marginTop: "56px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "15+", label: "Years Experience" },
                { value: "98%", label: "Client Retention" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column", gap: "4px" }}
                >
                  <span
                    style={{
                      fontSize: "26px",
                      fontWeight: "900",
                      background: "linear-gradient(135deg,#ffffff,#60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(100,116,139,0.8)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Decor (moved below on mobile) */}
          <div
            className="right-decor"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "40%",
              height: "80%",
              pointerEvents: "none",
              zIndex: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 60px",
              gap: "18px",
            }}
          >
            {/* Horizontal lines */}
            <div className="decor-lines">
              {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: "1px",
                    width: `${w}%`,
                    background:
                      "linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
                    alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>

            {/* Badge 1 — Green Building */}
            <div
              className="badge-1"
              style={{
                position: "absolute",
                top: "18%",
                right: "60px",
                padding: "14px 20px",
                borderRadius: "14px",
                background: "rgba(4,21,48,0.85)",
                border: "1px solid rgba(59,130,246,0.25)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                pointerEvents: "none",
              }}
            >
              <div
                className="badge-icon"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  width="18"
                  height="18"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="badge-text">
                <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>
                  Green Building
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(148,163,184,0.7)",
                    letterSpacing: "0.05em",
                  }}
                >
                  LEED Certified
                </div>
              </div>
            </div>

            {/* Badge 2 — ISO */}
            <div
              className="badge-2"
              style={{
                position: "absolute",
                bottom: "22%",
                right: "80px",
                padding: "12px 18px",
                borderRadius: "12px",
                background: "rgba(4,21,48,0.85)",
                border: "1px solid rgba(59,130,246,0.2)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                pointerEvents: "none",
              }}
            >
              <div
                className="badge-icon"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#059669,#0d9488)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  width="16"
                  height="16"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="badge-text">
                <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>
                  ISO Certified
                </div>
                <div style={{ fontSize: "11px", color: "rgba(148,163,184,0.7)" }}>
                  Quality Assured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}