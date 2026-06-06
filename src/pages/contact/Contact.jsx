

import { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "D-88/5, Pocket D, Okhla Phase I, Okhla Industrial Estate, New Delhi.",
    href: null,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    icon: MapPin,
    label: "Branch Office",
    value: "Office 203, EFC Prime, Sharyu Complex, Baner, Pune - 411045",
    href: null,
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7249736102",
    href: "tel:+917249736102",
    accent: "#34d399",
    grad: "linear-gradient(135deg, #059669, #34d399)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@srujaninfotech.in",
    href: "mailto:info@srujaninfotech.in",
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
];

const GLASS = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const GLASS_BRIGHT = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.11)",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }
  return isMobile;
}

function InfoCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        ...GLASS,
        borderRadius: 16,
        padding: isMobile ? "14px 16px" : "20px 22px",
        border: hovered ? `1px solid ${item.accent}40` : "1px solid rgba(255,255,255,0.07)",
        background: hovered ? `${item.accent}0d` : "rgba(255,255,255,0.03)",
        boxShadow: hovered ? `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${item.accent}12` : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        cursor: item.href ? "pointer" : "default",
        flex: 1,
        minWidth: isMobile ? "calc(50% - 8px)" : "200px",
        boxSizing: "border-box",
      }}
    >
      <div style={{
        width: isMobile ? 36 : 44,
        height: isMobile ? 36 : 44,
        borderRadius: 10,
        flexShrink: 0,
        background: item.grad,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 4px 16px ${item.accent}40`,
      }}>
        <Icon size={isMobile ? 16 : 20} color="white" />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: isMobile ? 9 : 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: item.accent,
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: 3,
        }}>
          {item.label}
        </div>
        {item.href ? (
          <a href={item.href} style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: isMobile ? 11 : 13,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.5,
            textDecoration: "none",
            transition: "color 0.2s",
            wordBreak: "break-word",
          }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
          >
            {item.value}
          </a>
        ) : (
          <p style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: isMobile ? 11 : 13,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.5,
            margin: 0,
            wordBreak: "break-word",
          }}>
            {item.value}
          </p>
        )}
      </div>
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "12px 16px",
  color: "white",
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  transition: "border-color 0.3s, background 0.3s",
};

function StyledInput({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        border: focused ? "1px solid rgba(56,189,248,0.5)" : "1px solid rgba(255,255,255,0.08)",
        background: focused ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.04)",
        ...style,
      }}
    />
  );
}

function StyledSelect({ children, style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        border: focused ? "1px solid rgba(56,189,248,0.5)" : "1px solid rgba(255,255,255,0.08)",
        background: focused ? "rgba(56,189,248,0.06)" : "rgba(20,30,50,0.9)",
        ...style,
      }}
    >
      {children}
    </select>
  );
}

function StyledTextarea({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        resize: "vertical",
        minHeight: 120,
        border: focused ? "1px solid rgba(56,189,248,0.5)" : "1px solid rgba(255,255,255,0.08)",
        background: focused ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.04)",
        ...style,
      }}
    />
  );
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    title: "", name: "", mobile: "", email: "", query: "", message: "",
  });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-60px" });
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .contact-info-bar {
          padding: 28px 0;
        }
        .contact-info-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .contact-info-grid {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .main-content {
          padding: 100px 0 120px;
        }
        .main-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .form-map-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .form-map-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-info-inner {
            padding: 0 16px;
          }
          .contact-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .main-content {
            padding: 56px 0 72px;
          }
          .main-inner {
            padding: 0 16px;
          }
          .form-map-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 400px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none", zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cgrid)" />
      </svg>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -100, left: -80, zIndex: 0,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -100, right: -80, zIndex: 0,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* ── Contact Info Bar ── */}
      <div className="contact-info-bar" style={{ position: "relative", zIndex: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="contact-info-inner">
          <div className="contact-info-grid">
            {contactInfo.map((item, i) => (
              <InfoCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="main-content" style={{ position: "relative", zIndex: 10 }}>
        <div className="main-inner">

          {/* Header */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              ...GLASS, borderRadius: 100, padding: "6px 18px", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{
              color: "white",
              fontSize: "clamp(26px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              marginBottom: 14,
              margin: "0 0 14px",
            }}>
              Let's Build Something{" "}
              <span style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Together
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(13px, 2vw, 16px)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              Reach out and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Form + Map grid */}
          <div className="form-map-grid">

            {/* ── Contact Form ── */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ ...GLASS_BRIGHT, borderRadius: 24, overflow: "hidden" }}
            >
              {/* Form header */}
              <div style={{
                background: "linear-gradient(135deg, #1d6ff0, #0ea5e9)",
                padding: "18px 24px",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <Mail size={18} color="white" />
                <h3 style={{
                  color: "white", fontSize: 13, fontWeight: 700,
                  letterSpacing: 2, textTransform: "uppercase", margin: 0,
                }}>
                  Contact Us
                </h3>
              </div>

              <form onSubmit={handleSubmit} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 12 }}>
                <StyledSelect name="title" onChange={handleChange}>
                  <option style={{ background: "#071428" }}>Mr./Mrs.</option>
                  <option style={{ background: "#071428" }}>Mr.</option>
                  <option style={{ background: "#071428" }}>Mrs.</option>
                  <option style={{ background: "#071428" }}>Miss</option>
                </StyledSelect>

                <StyledInput type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} />
                <StyledInput type="text" name="mobile" placeholder="Enter Mobile Number" onChange={handleChange} />
                <StyledInput type="email" name="email" placeholder="Enter Email Address" onChange={handleChange} />

                <StyledSelect name="query" onChange={handleChange}>
                  <option style={{ background: "#071428" }}>Select Service</option>
                  <option style={{ background: "#071428" }}>Software Development</option>
                  <option style={{ background: "#071428" }}>Web Design</option>
                  <option style={{ background: "#071428" }}>Mobile App Development</option>
                  <option style={{ background: "#071428" }}>SEO Optimization</option>
                  <option style={{ background: "#071428" }}>Digital Marketing</option>
                </StyledSelect>

                <StyledTextarea name="message" placeholder="Enter Message" rows={5} onChange={handleChange} />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(29,111,240,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "linear-gradient(135deg, #1d6ff0, #0ea5e9)",
                    border: "none", borderRadius: 10,
                    color: "white", fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: 14, padding: "14px",
                    cursor: "pointer", letterSpacing: 0.5,
                    marginTop: 4,
                  }}
                >
                  Send Message →
                </motion.button>
              </form>
            </motion.div>

            {/* ── Map ── */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 40 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ ...GLASS_BRIGHT, borderRadius: 24, overflow: "hidden" }}
            >
              <div style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                padding: "18px 24px",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <MapPin size={18} color="white" />
                <h3 style={{
                  color: "white", fontSize: 13, fontWeight: 700,
                  letterSpacing: 2, textTransform: "uppercase", margin: 0,
                }}>
                  Find Us
                </h3>
              </div>

              <iframe
                title="Company Location"
                src="https://www.google.com/maps/d/embed?mid=1fJ5QBxJEsYBoOz_iBd5o9qbPCoY"
                style={{ width: "100%", height: "min(580px, 60vw)", minHeight: 300, display: "block", border: "none" }}
                loading="lazy"
                allowFullScreen
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;