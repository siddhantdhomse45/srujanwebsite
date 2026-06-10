import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Big Data Services",
    description: "Unlock the potential of big data with tailored analytics services to process and analyze massive datasets. Turn complex information into actionable intelligence.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <ellipse cx="28" cy="12" rx="16" ry="5" />
        <path d="M12 12v10c0 2.8 7.2 5 16 5s16-2.2 16-5V12" />
        <path d="M12 22v10c0 2.8 7.2 5 16 5s16-2.2 16-5V22" />
        <path d="M12 32v10c0 2.8 7.2 5 16 5s16-2.2 16-5V32" />
      </svg>
    ),
    number: "01",
  },
  {
    id: 2,
    title: "Business Analytics Services",
    description: "Leverage advanced data analytics to uncover trends and optimize performance. Drive your organization forward with confident, insight-based decision-making.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="8" y="32" width="8" height="16" rx="2" />
        <rect x="22" y="22" width="8" height="26" rx="2" />
        <rect x="36" y="14" width="8" height="34" rx="2" />
        <circle cx="40" cy="10" r="5" />
        <path d="M35 13l-10 6M23 18l-10 12" strokeLinecap="round" />
      </svg>
    ),
    number: "02",
  },
  {
    id: 3,
    title: "Data Visualization",
    description: "Transform complex datasets into visually engaging formats that make insights easy to understand. Enable faster, more confident decision-making across your organization.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="6" y="30" width="10" height="18" rx="2" />
        <rect x="22" y="20" width="10" height="28" rx="2" />
        <rect x="38" y="10" width="10" height="38" rx="2" />
        <circle cx="42" cy="7" r="4" />
        <path d="M6 28l16-10M22 18l16-10" strokeLinecap="round" />
        <path d="M4 50h48" strokeLinecap="round" />
      </svg>
    ),
    number: "03",
  },
  {
    id: 4,
    title: "Data Integration Services",
    description: "Seamlessly unify data from diverse sources with robust analytics services for consistency and accuracy. Ensure reliable access to the information your business needs.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="6" y="10" width="18" height="12" rx="3" />
        <rect x="6" y="32" width="18" height="12" rx="3" />
        <rect x="32" y="20" width="18" height="14" rx="3" />
        <path d="M24 16h4l4 11M24 38h4l4-11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14h4M8 38h4" strokeLinecap="round" />
      </svg>
    ),
    number: "04",
  },
  {
    id: 5,
    title: "Data Warehousing Services",
    description: "Build scalable, efficient data warehouses to store and organize critical business information. Streamline data retrieval and improve operational efficiency with well-structured systems.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="10" y="14" width="36" height="28" rx="4" />
        <path d="M10 22h36M10 30h36" />
        <path d="M18 18h4M18 26h4M18 34h4" strokeLinecap="round" />
        <path d="M28 42v6M20 48h16" strokeLinecap="round" />
        <path d="M44 18c3 0 4 1.5 4 3s-1 3-4 3" strokeLinecap="round" />
      </svg>
    ),
    number: "05",
  },
  {
    id: 6,
    title: "Data Science Consulting",
    description: "Access expert guidance to develop predictive models and automate essential processes. Achieve better results and operational efficiency with advanced data science expertise.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="12" y="8" width="32" height="40" rx="3" />
        <path d="M18 18h20M18 24h20M18 30h12" strokeLinecap="round" />
        <circle cx="36" cy="36" r="7" />
        <path d="M33 36l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: "06",
  },
  {
    id: 7,
    title: "Data Governance Consulting",
    description: "Implement proven frameworks to ensure data quality, security, and compliance. Create consistent, reliable systems to manage your data assets effectively.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <circle cx="28" cy="16" r="7" />
        <circle cx="14" cy="36" r="6" />
        <circle cx="42" cy="36" r="6" />
        <path d="M22 21l-6 9M34 21l6 9M20 36h16" strokeLinecap="round" />
        <rect x="22" y="6" width="12" height="6" rx="2" strokeDasharray="2 2" />
      </svg>
    ),
    number: "07",
  },
  {
    id: 8,
    title: "Data Strategy Consulting",
    description: "Develop and execute strategies that align your data with your business goals. Maximize the value of your information to drive measurable growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <path d="M10 38l10-14 8 8 10-16 8 8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="46" cy="24" r="4" />
        <path d="M6 46h44" strokeLinecap="round" />
        <path d="M6 10v36" strokeLinecap="round" />
      </svg>
    ),
    number: "08",
  },
  {
    id: 9,
    title: "Real-Time Data Processing",
    description: "Process and analyze data as it's generated to enable instant decision-making. Optimize operations, detect anomalies, and enhance customer experiences with real-time insights.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
        <rect x="8" y="16" width="40" height="28" rx="4" />
        <path d="M8 24h40" />
        <path d="M20 32l4 4 10-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8l-6 8M40 8l6 8" strokeLinecap="round" />
        <path d="M28 44v6" strokeLinecap="round" />
      </svg>
    ),
    number: "09",
  },
];

export default function DataServices() {
  const [hovered, setHovered] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Analytics", "Integration", "Consulting"];

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "90px 40px 110px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-120px", left:"20%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"-100px", right:"15%", width:"460px", height:"460px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.14),transparent 70%)" }} />
        <div style={{ position:"absolute", top:"40%", left:"-80px", width:"320px", height:"320px", borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.1),transparent 70%)" }} />
        {/* grid */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"72px" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"6px 18px", borderRadius:"100px",
            background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
            color:"#60a5fa", fontSize:"11px", fontWeight:"700",
            letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block", animation:"pulse 2s infinite" }} />
            What We Offer
          </span>

          <h2 style={{
            fontSize:"clamp(36px,5vw,60px)",
            fontWeight:"900",
            letterSpacing:"0.06em",
            textTransform:"uppercase",
            margin:"0 0 20px",
            background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
          }}>
            Our Services
          </h2>

          {/* Divider */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"24px" }}>
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
            <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
          </div>

          <p style={{ maxWidth:"680px", margin:"0 auto", fontSize:"16px", lineHeight:"1.8", color:"rgba(148,163,184,0.85)" }}>
            Comprehensive data analytics and intelligence solutions designed to transform raw information into strategic business advantage.
          </p>
        </div>

        {/* ── Services List (alternating layout) ── */}
        <div style={{ display:"flex", flexDirection:"column", gap:"2px" }}>
          {services.map((service, i) => {
            const isHov = hovered === i;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"0",
                  borderRadius:"16px",
                  overflow:"hidden",
                  border: isHov ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(255,255,255,0.05)",
                  background: isHov
                    ? "linear-gradient(135deg,rgba(37,99,235,0.15),rgba(99,102,241,0.08))"
                    : "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))",
                  boxShadow: isHov ? "0 16px 48px -8px rgba(37,99,235,0.35)" : "none",
                  transform: isHov ? "translateX(6px)" : "translateX(0)",
                  transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  cursor:"pointer",
                  backdropFilter:"blur(8px)",
                  WebkitBackdropFilter:"blur(8px)",
                  marginBottom:"10px",
                }}
              >
                {/* Number + Icon block */}
                <div style={{
                  flexShrink:0,
                  width:"180px",
                  padding:"32px 28px",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                  gap:"12px",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  background: isHov
                    ? "linear-gradient(135deg,rgba(37,99,235,0.2),rgba(59,130,246,0.1))"
                    : "rgba(255,255,255,0.02)",
                  transition:"background 0.35s",
                }}>
                  {/* Big number */}
                  <span style={{
                    fontSize:"13px",
                    fontWeight:"900",
                    letterSpacing:"0.15em",
                    background: isHov
                      ? "linear-gradient(135deg,#60a5fa,#a5b4fc)"
                      : "rgba(148,163,184,0.3)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    transition:"all 0.3s",
                  }}>
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div style={{
                    color: isHov ? "#60a5fa" : "rgba(148,163,184,0.45)",
                    transform: isHov ? "scale(1.1)" : "scale(1)",
                    filter: isHov ? "drop-shadow(0 0 10px rgba(96,165,250,0.5))" : "none",
                    transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  }}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex:1, padding:"32px 40px" }}>
                  <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"16px" }}>
                    <div>
                      <h3 style={{
                        fontSize:"20px",
                        fontWeight:"800",
                        color: isHov ? "#f1f5f9" : "rgba(241,245,249,0.8)",
                        marginBottom:"10px",
                        letterSpacing:"0.01em",
                        transition:"color 0.3s",
                      }}>
                        {service.title}
                      </h3>
                      <p style={{
                        fontSize:"14px",
                        lineHeight:"1.85",
                        color: isHov ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.85)",
                        maxWidth:"680px",
                        margin:0,
                        transition:"color 0.3s",
                      }}>
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div style={{
                      flexShrink:0,
                      width:"40px",
                      height:"40px",
                      borderRadius:"50%",
                      border: isHov ? "1.5px solid rgba(96,165,250,0.6)" : "1.5px solid rgba(255,255,255,0.08)",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      background: isHov ? "rgba(37,99,235,0.2)" : "transparent",
                      transform: isHov ? "translateX(4px) rotate(-45deg)" : "translateX(0) rotate(0)",
                      transition:"all 0.35s ease",
                      marginTop:"4px",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={isHov ? "#60a5fa" : "rgba(100,116,139,0.6)"} strokeWidth="2" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Progress/tag line */}
                  {isHov && (
                    <div style={{
                      marginTop:"18px",
                      display:"flex",
                      alignItems:"center",
                      gap:"12px",
                    }}>
                      <div style={{
                        height:"2px",
                        flex:1,
                        borderRadius:"2px",
                        background:"linear-gradient(to right,rgba(37,99,235,0.8),rgba(99,102,241,0.4),transparent)",
                      }} />
                      <span style={{
                        fontSize:"11px",
                        fontWeight:"700",
                        letterSpacing:"0.15em",
                        textTransform:"uppercase",
                        color:"rgba(96,165,250,0.7)",
                      }}>
                        Learn More →
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign:"center", marginTop:"60px" }}>
          <button
            style={{
              display:"inline-flex",
              alignItems:"center",
              gap:"12px",
              padding:"16px 40px",
              borderRadius:"14px",
              border:"none",
              background:"linear-gradient(135deg,#1d4ed8,#2563eb,#4f46e5)",
              color:"white",
              fontSize:"15px",
              fontWeight:"800",
              letterSpacing:"0.05em",
              cursor:"pointer",
              boxShadow:"0 8px 32px -4px rgba(37,99,235,0.6)",
              transition:"all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow="0 16px 48px -4px rgba(37,99,235,0.75)"; e.currentTarget.style.transform="translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow="0 8px 32px -4px rgba(37,99,235,0.6)"; e.currentTarget.style.transform="translateY(0)"; }}
          >
            <span>Explore All Services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}