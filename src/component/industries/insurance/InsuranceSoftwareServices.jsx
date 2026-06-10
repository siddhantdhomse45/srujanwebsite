import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Custom Application Development",
    description: "Our custom fintech solutions are built to offer a superior user experience while keeping your customer's data secure. We architect scalable, compliant insurance platforms from the ground up.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="4" y="6" width="28" height="22" rx="3" />
        <path d="M4 14h28" />
        <path d="M11 20l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 28h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Quoting and Analysis Algorithms",
    description: "Insurance software development services offer the best-in-class quoting solutions to exceed end-users' and partners' needs and deliver high-quality results with real-time pricing engines.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M4 28l7-8 5 5 7-10 6 7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="22" r="3" />
        <path d="M4 30h28" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Claims and Policy Management Software",
    description: "Streamline the entire claims lifecycle with intelligent automation, reducing processing time and improving accuracy. Our policy management tools handle complex multi-line insurance products.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="8" y="4" width="20" height="28" rx="3" />
        <path d="M13 12h10M13 17h10M13 22h6" strokeLinecap="round" />
        <path d="M22 26l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Custom Portals and Website Development",
    description: "Build intuitive agent, broker, and policyholder portals that centralize information and simplify workflows. Responsive, accessible, and branded to your organization's identity.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="2" y="6" width="32" height="22" rx="3" />
        <path d="M2 12h32" />
        <circle cx="6" cy="9" r="1.2" fill="currentColor" />
        <circle cx="10" cy="9" r="1.2" fill="currentColor" />
        <path d="M10 19h16M10 23h10" strokeLinecap="round" />
        <path d="M18 28v4M12 32h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Mobile Applications and Chatbots",
    description: "Deliver seamless policyholder experiences on iOS and Android. Our AI-powered chatbots handle FNOL, renewals, and FAQs — reducing support burden while boosting customer satisfaction.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="10" y="2" width="16" height="28" rx="3" />
        <path d="M10 8h16M10 26h16" />
        <circle cx="18" cy="30" r="1.5" />
        <path d="M6 16c0-2 1-4 3-5M30 16c0-2-1-4-3-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Data Science and Analytics",
    description: "Transform raw insurance data into actionable insights. Our data science teams build predictive underwriting models, fraud detection systems, and executive dashboards for smarter decisions.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="4" y="18" width="6" height="14" rx="1" />
        <rect x="14" y="10" width="6" height="22" rx="1" />
        <rect x="24" y="4" width="6" height="28" rx="1" />
        <path d="M4 16l10-8 10 6 8-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "CRM/ERP/HR Platforms",
    description: "Integrated enterprise platforms that unify your customer relationships, resource planning, and human capital management. Purpose-built for the operational demands of insurance carriers.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="18" cy="12" r="5" />
        <circle cx="8" cy="26" r="4" />
        <circle cx="28" cy="26" r="4" />
        <path d="M14 16l-4 6M22 16l4 6M12 26h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Financial Software",
    description: "Robust financial management systems tailored for insurance operations — from premium accounting and reinsurance tracking to regulatory reporting, audit trails, and investment portfolio management.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 8v4M18 24v4" strokeLinecap="round" />
        <path d="M13 13c0-2.8 2.2-4 5-4s5 1.2 5 4-2.2 3-5 4-5 1.5-5 4 2.2 4 5 4 5-1.2 5-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Mock app screens for the left panel
const AppMockup = () => (
  <div style={{ position:"relative", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
    {/* Tablet */}
    <div style={{
      position:"absolute", left:"8%", top:"50%", transform:"translateY(-50%)",
      width:"220px", height:"170px",
      background:"linear-gradient(145deg,rgba(15,35,80,0.9),rgba(8,20,50,0.95))",
      borderRadius:"12px",
      border:"1px solid rgba(59,130,246,0.3)",
      boxShadow:"0 20px 60px rgba(0,0,0,0.5)",
      overflow:"hidden",
      zIndex:1,
    }}>
      <div style={{ height:"24px", background:"rgba(37,99,235,0.3)", display:"flex", alignItems:"center", padding:"0 10px", gap:"6px" }}>
        {[0,1,2].map(i => <div key={i} style={{ width:6, height:6, borderRadius:"50%", background:["#ef4444","#f59e0b","#10b981"][i] }} />)}
      </div>
      <div style={{ padding:"10px" }}>
        {[70,50,80,40,60].map((w,i) => (
          <div key={i} style={{ height:i===0?"14px":"10px", width:`${w}%`, background:"rgba(59,130,246,0.2)", borderRadius:"3px", marginBottom:"8px" }} />
        ))}
        <div style={{ display:"flex", gap:"8px", marginTop:"12px" }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ flex:1, height:"32px", borderRadius:"6px", background:"linear-gradient(135deg,rgba(99,102,241,0.4),rgba(37,99,235,0.2))", border:"1px solid rgba(99,102,241,0.3)" }} />
          ))}
        </div>
      </div>
    </div>

    {/* Phone - front */}
    <div style={{
      position:"relative",
      width:"140px", height:"280px",
      background:"linear-gradient(145deg,rgba(8,15,40,0.95),rgba(4,10,30,0.98))",
      borderRadius:"24px",
      border:"2px solid rgba(59,130,246,0.4)",
      boxShadow:"0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(37,99,235,0.2)",
      overflow:"hidden",
      zIndex:3,
      marginLeft:"60px",
    }}>
      {/* Status bar */}
      <div style={{ height:"28px", background:"rgba(37,99,235,0.4)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 12px" }}>
        <span style={{ fontSize:"10px", color:"white", fontWeight:"700" }}>9:41</span>
        <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
          {[1,2,3].map(i => <div key={i} style={{ width:4, height:`${i*3+2}px`, background:"white", borderRadius:"1px" }} />)}
        </div>
      </div>
      {/* Header */}
      <div style={{ padding:"10px 12px 8px", background:"linear-gradient(135deg,rgba(37,99,235,0.5),rgba(99,102,241,0.3))" }}>
        <div style={{ fontSize:"11px", color:"rgba(255,255,255,0.6)", marginBottom:"3px" }}>Insurance Portal</div>
        <div style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>My Policies</div>
      </div>
      {/* Content rows */}
      <div style={{ padding:"10px" }}>
        {["Health Plan","Auto Cover","Home Shield"].map((name,i) => (
          <div key={i} style={{
            display:"flex", alignItems:"center", gap:"8px",
            padding:"8px", borderRadius:"8px",
            background:i===0 ? "rgba(37,99,235,0.25)" : "rgba(255,255,255,0.04)",
            border:i===0 ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.05)",
            marginBottom:"6px",
          }}>
            <div style={{ width:24, height:24, borderRadius:"6px", background:`rgba(${[37,99,235,16,185,129,234,179,8][i*3]},${[99,185,179][i]},${[235,129,8][i]},0.3)`, flexShrink:0 }} />
            <div>
              <div style={{ fontSize:"9px", fontWeight:"700", color:"rgba(255,255,255,0.8)" }}>{name}</div>
              <div style={{ fontSize:"8px", color:"rgba(148,163,184,0.6)" }}>Active</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Dot pattern decoration */}
    <div style={{
      position:"absolute", left:"0", bottom:"10%",
      display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:"8px",
    }}>
      {Array(24).fill(0).map((_,i) => (
        <div key={i} style={{ width:4, height:4, borderRadius:"50%", background:"rgba(59,130,246,0.3)" }} />
      ))}
    </div>
  </div>
);

export default function InsuranceSoftwareServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      style={{
               background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#061d42 70%,#020e24 100%)",
        minHeight:"100vh",
        padding:"80px 40px 100px",
        fontFamily:"'DM Sans','Segoe UI',sans-serif",
        position:"relative",
        overflow:"hidden",
      }}
    >
      {/* Wave decoration */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          {[0,70,140,210,280,350].map((o,i) => (
            <path key={i}
              d={`M-200,${300+o} C300,${200+o} 800,${440+o} 1200,${260+o} S1700,${330+o} 1700,${300+o}`}
              fill="none" stroke="white" strokeWidth="1.5" />
          ))}
        </svg>
      </div>
      {/* Top glow */}
      <div style={{ position:"absolute", top:"-80px", left:"50%", transform:"translateX(-50%)", width:"700px", height:"300px", pointerEvents:"none", background:"radial-gradient(ellipse,rgba(255,255,255,0.12),transparent 70%)" }} />
      {/* Dot grid */}
      <div style={{
        position:"absolute", left:"2%", top:"30%",
        display:"grid", gridTemplateColumns:"repeat(8,1fr)", gap:"14px",
        opacity:0.25, pointerEvents:"none",
      }}>
        {Array(32).fill(0).map((_,i) => (
          <div key={i} style={{ width:4, height:4, borderRadius:"50%", background:"rgba(255,255,255,0.7)" }} />
        ))}
      </div>

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"60px" }}>
          <h2 style={{
            fontSize:"clamp(26px,4vw,50px)", fontWeight:"900",
            textTransform:"uppercase", color:"white",
            letterSpacing:"0.05em", lineHeight:1.15,
            margin:"0 0 20px", textShadow:"0 2px 24px rgba(0,0,0,0.2)",
          }}>
            Insurance Software<br/>Development Services
          </h2>
          <div style={{ display:"flex", justifyContent:"center", gap:"6px", alignItems:"center", marginBottom:"20px" }}>
            <div style={{ width:"56px", height:"3px", borderRadius:"2px", background:"rgba(255,255,255,0.9)" }} />
            <div style={{ width:"9px", height:"9px", borderRadius:"50%", background:"white" }} />
            <div style={{ width:"56px", height:"3px", borderRadius:"2px", background:"rgba(255,255,255,0.9)" }} />
          </div>
          <p style={{ maxWidth:"720px", margin:"0 auto", fontSize:"16px", lineHeight:"1.85", color:"rgba(255,255,255,0.82)" }}>
            Get custom insurance software and rely on our digitalization services and expertise to boost your organizational efficiency, reduce costs, and ensure a top-quality experience for your end user.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px", alignItems:"start" }}>

          {/* Left: App mockup */}
          <div style={{ position:"relative", height:"480px" }}>
            <AppMockup />
          </div>

          {/* Right: Service accordion list */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2px" }}>
            {services.map((s, i) => {
              const isAct = activeService === i;
              return (
                <div
                  key={s.id}
                  onClick={() => setActiveService(i)}
                  style={{
                    borderRadius:"14px",
                    overflow:"hidden",
                    border: isAct ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                    background: isAct ? "rgba(255,255,255,0.97)" : "transparent",
                    boxShadow: isAct ? "0 12px 40px rgba(0,0,0,0.25)" : "none",
                    transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                    cursor:"pointer",
                    marginBottom: isAct ? "4px" : "0",
                  }}
                >
                  {/* Row header */}
                  <div style={{
                    display:"flex", alignItems:"center",
                    justifyContent:"space-between",
                    padding: isAct ? "20px 24px 4px" : "14px 20px",
                    borderBottom: isAct ? "none" : "1px solid rgba(255,255,255,0.12)",
                    transition:"all 0.3s",
                  }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                      {/* Icon */}
                      <div style={{
                        width:"38px", height:"38px", borderRadius:"10px", flexShrink:0,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        background: isAct ? "rgba(29,78,216,0.1)" : "rgba(255,255,255,0.12)",
                        color: isAct ? "#1d4ed8" : "rgba(255,255,255,0.8)",
                        transition:"all 0.3s",
                      }}>
                        {s.icon}
                      </div>
                      <span style={{
                        fontSize:"15px", fontWeight:"700",
                        color: isAct ? "#0f172a" : "rgba(255,255,255,0.92)",
                        letterSpacing:"0.01em",
                        transition:"color 0.3s",
                      }}>
                        {s.title}
                      </span>
                    </div>

                    {/* Chevron */}
                    <div style={{
                      width:"26px", height:"26px", borderRadius:"50%",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background: isAct ? "rgba(29,78,216,0.1)" : "rgba(255,255,255,0.15)",
                      flexShrink:0,
                      transform: isAct ? "rotate(180deg)" : "rotate(0deg)",
                      transition:"all 0.35s ease",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={isAct ? "#1d4ed8" : "rgba(255,255,255,0.8)"} strokeWidth="2.5" width="14" height="14">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isAct && (
                    <div style={{ padding:"4px 24px 20px 76px" }}>
                      <p style={{ fontSize:"13px", lineHeight:"1.85", color:"#475569", margin:0 }}>
                        {s.description}
                      </p>
                      <div style={{ marginTop:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
                        <span style={{
                          fontSize:"11px", fontWeight:"700", letterSpacing:"0.12em",
                          textTransform:"uppercase", color:"#1d4ed8",
                        }}>
                          Learn More
                        </span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2.5" width="12" height="12">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
