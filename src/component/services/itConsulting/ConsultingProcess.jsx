// import { useState } from "react";

// const steps = [
//   {
//     id: 1,
//     label: "Analysis",
//     title: "Deep Analysis",
//     description:
//       "Our IT consulting experts examine your current software solutions and how your staff uses them to find issues with workflows and automation. We identify bottlenecks and map out your technical landscape.",
//     icon: (
//       <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
//         <circle cx="18" cy="18" r="10" />
//         <path d="M26 26l8 8" strokeLinecap="round" />
//         <path d="M14 18h8M18 14v8" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     label: "Strategy",
//     title: "Tailored Strategy",
//     description:
//       "The consultants create a roadmap and strategy that will assist your company in utilizing cutting-edge technology and cleaning up your software infrastructure. KPIs for software and employee performance are established.",
//     icon: (
//       <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
//         <path d="M6 30l8-10 6 6 8-12 6 6" strokeLinecap="round" strokeLinejoin="round" />
//         <circle cx="34" cy="20" r="3" />
//         <path d="M6 34h28" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     label: "Performance",
//     title: "Peak Performance",
//     description:
//       "Collaboration between the client and the IT consulting company is essential for effective services. Our experts carefully analyze your workflows, monitoring results to identify problems. Hindering factors are removed by our developers.",
//     icon: (
//       <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
//         <circle cx="20" cy="20" r="14" />
//         <path d="M20 10v4M20 26v4M10 20h4M26 20h4" strokeLinecap="round" />
//         <path d="M20 16v4l4 3" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     label: "Improvements",
//     title: "Continuous Growth",
//     description:
//       "Our software engineers and IT consulting advisors make recommendations for future enhancements once the first aims have been met and help with their implementation to ensure sustained, measurable growth.",
//     icon: (
//       <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
//         <path d="M20 6v6M26 8l-3 5M14 8l3 5" strokeLinecap="round" />
//         <circle cx="20" cy="22" r="10" />
//         <path d="M15 22l4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//   },
// ];

// export default function ConsultingProcess() {
//   const [active, setActive] = useState(null);

//   return (
//     <section
//       style={{
//         background: "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
//         minHeight: "100vh",
//         padding: "90px 40px 110px",
//         fontFamily: "'DM Sans','Segoe UI',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Ambient bg */}
//       <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
//         <div style={{ position:"absolute", top:"-80px", left:"25%", width:"580px", height:"380px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)" }} />
//         <div style={{ position:"absolute", bottom:"-80px", right:"20%", width:"460px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)" }} />
//         <div style={{
//           position:"absolute", inset:0,
//           backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
//           backgroundSize:"60px 60px",
//         }} />
//       </div>

//       <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>

//         {/* ── Header ── */}
//         <div style={{ textAlign:"center", marginBottom:"72px" }}>
//           <span style={{
//             display:"inline-flex", alignItems:"center", gap:"8px",
//             padding:"6px 18px", borderRadius:"100px",
//             background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
//             color:"#60a5fa", fontSize:"11px", fontWeight:"700",
//             letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"20px",
//           }}>
//             <span style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"inline-block" }} />
//             How We Work
//           </span>

//           <h2 style={{
//             fontSize:"clamp(30px,4.5vw,54px)",
//             fontWeight:"900",
//             letterSpacing:"0.06em",
//             textTransform:"uppercase",
//             margin:"0 0 20px",
//             background:"linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
//             WebkitBackgroundClip:"text",
//             WebkitTextFillColor:"transparent",
//           }}>
//             Our IT Consulting Process
//           </h2>

//           <div style={{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"center", marginBottom:"24px" }}>
//             <div style={{ height:"1px", width:"80px", background:"linear-gradient(to right,transparent,rgba(59,130,246,0.6))" }} />
//             <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
//             <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"rgba(59,130,246,0.5)" }} />
//             <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#3b82f6" }} />
//             <div style={{ height:"1px", width:"80px", background:"linear-gradient(to left,transparent,rgba(59,130,246,0.6))" }} />
//           </div>

//           <p style={{ maxWidth:"780px", margin:"0 auto", fontSize:"16px", lineHeight:"1.85", color:"rgba(148,163,184,0.85)" }}>
//             A decade deep, and we're still innovating. Our legacy thrives on reshaping IT strategies for diverse organizations. With a team of seasoned experts boasting over fifteen years of hands-on experience, we deliver tailored solutions swiftly, ensuring tangible value every single time.
//           </p>
//         </div>

//         {/* ── Timeline connector ── */}
//         <div style={{ position:"relative", marginBottom:"56px" }}>
//           {/* Horizontal line */}
//           <div style={{
//             position:"absolute",
//             top:"36px", left:"12.5%", right:"12.5%",
//             height:"2px",
//             background:"linear-gradient(to right,rgba(37,99,235,0.6),rgba(99,102,241,0.6),rgba(14,165,233,0.6),rgba(37,99,235,0.3))",
//             zIndex:0,
//           }} />

//           {/* Animated pulse on line */}
//           <div style={{
//             position:"absolute",
//             top:"35px", left:"12.5%",
//             height:"4px", width:"60px",
//             borderRadius:"2px",
//             background:"linear-gradient(to right,#60a5fa,transparent)",
//             zIndex:1,
//             boxShadow:"0 0 12px rgba(96,165,250,0.6)",
//           }} />

//           {/* Step nodes */}
//           <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0" }}>
//             {steps.map((step, i) => {
//               const isAct = active === i;
//               return (
//                 <div
//                   key={step.id}
//                   onClick={() => setActive(active === i ? null : i)}
//                   style={{
//                     display:"flex", flexDirection:"column", alignItems:"center",
//                     cursor:"pointer", gap:"16px", position:"relative", zIndex:2,
//                   }}
//                 >
//                   {/* Circle node */}
//                   <div style={{
//                     width:"72px", height:"72px", borderRadius:"50%",
//                     display:"flex", alignItems:"center", justifyContent:"center",
//                     background: isAct
//                       ? "linear-gradient(135deg,#1d4ed8,#4f46e5)"
//                       : "rgba(255,255,255,0.04)",
//                     border: isAct
//                       ? "2px solid rgba(96,165,250,0.8)"
//                       : "2px solid rgba(59,130,246,0.25)",
//                     boxShadow: isAct
//                       ? "0 0 0 6px rgba(37,99,235,0.15), 0 8px 32px rgba(37,99,235,0.5)"
//                       : "0 4px 16px rgba(0,0,0,0.3)",
//                     transform: isAct ? "scale(1.12)" : "scale(1)",
//                     transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//                     backdropFilter:"blur(8px)",
//                   }}>
//                     <span style={{
//                       fontSize:"22px", fontWeight:"900",
//                       background: isAct
//                         ? "white"
//                         : "linear-gradient(135deg,#60a5fa,#a5b4fc)",
//                       WebkitBackgroundClip:"text",
//                       WebkitTextFillColor:"transparent",
//                       transition:"all 0.3s",
//                     }}>
//                       {step.id}
//                     </span>
//                   </div>

//                   {/* Step label */}
//                   <span style={{
//                     fontSize:"13px", fontWeight:"900",
//                     letterSpacing:"0.18em", textTransform:"uppercase",
//                     color: isAct ? "#93c5fd" : "rgba(148,163,184,0.6)",
//                     transition:"color 0.3s",
//                   }}>
//                     {step.label}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ── 4 Content Cards ── */}
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }}>
//           {steps.map((step, i) => {
//             const isAct = active === i;
//             return (
//               <div
//                 key={step.id}
//                 onMouseEnter={() => setActive(i)}
//                 onMouseLeave={() => setActive(null)}
//                 style={{
//                   borderRadius:"20px",
//                   padding:"36px 28px 32px",
//                   border: isAct
//                     ? "1px solid rgba(59,130,246,0.4)"
//                     : "1px solid rgba(255,255,255,0.06)",
//                   background: isAct
//                     ? "linear-gradient(145deg,rgba(29,78,216,0.18),rgba(99,102,241,0.07))"
//                     : "linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
//                   boxShadow: isAct
//                     ? "0 20px 60px -10px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
//                     : "0 4px 20px -4px rgba(0,0,0,0.3)",
//                   transform: isAct ? "translateY(-8px)" : "translateY(0)",
//                   transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//                   cursor:"pointer",
//                   position:"relative",
//                   backdropFilter:"blur(10px)",
//                   overflow:"hidden",
//                 }}
//               >
//                 {/* Top bar */}
//                 <div style={{
//                   position:"absolute", top:0, left:0, right:0, height:"3px",
//                   background: isAct
//                     ? "linear-gradient(90deg,#1d4ed8,#6366f1,transparent)"
//                     : "linear-gradient(90deg,rgba(37,99,235,0.2),transparent)",
//                   transition:"all 0.4s",
//                 }} />

//                 {/* Step number badge */}
//                 <div style={{
//                   display:"inline-flex",
//                   alignItems:"center", justifyContent:"center",
//                   width:"40px", height:"40px",
//                   borderRadius:"50%",
//                   background: isAct
//                     ? "linear-gradient(135deg,#1d4ed8,#4f46e5)"
//                     : "rgba(255,255,255,0.04)",
//                   border: isAct ? "none" : "1px solid rgba(255,255,255,0.08)",
//                   marginBottom:"20px",
//                   boxShadow: isAct ? "0 4px 16px rgba(37,99,235,0.45)" : "none",
//                   transition:"all 0.35s",
//                 }}>
//                   <span style={{
//                     fontSize:"14px", fontWeight:"900",
//                     color: isAct ? "white" : "rgba(71,85,105,0.7)",
//                     transition:"color 0.3s",
//                   }}>
//                     {step.id}
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div style={{
//                   color: isAct ? "#60a5fa" : "rgba(148,163,184,0.35)",
//                   marginBottom:"20px",
//                   filter: isAct ? "drop-shadow(0 0 10px rgba(59,130,246,0.5))" : "none",
//                   transform: isAct ? "scale(1.05)" : "scale(1)",
//                   transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//                   display:"inline-block",
//                 }}>
//                   {step.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 style={{
//                   fontSize:"16px", fontWeight:"800",
//                   color: isAct ? "#f1f5f9" : "rgba(226,232,240,0.7)",
//                   marginBottom:"12px",
//                   letterSpacing:"0.02em",
//                   transition:"color 0.3s",
//                 }}>
//                   {step.title}
//                 </h3>

//                 {/* Description */}
//                 <p style={{
//                   fontSize:"13px", lineHeight:"1.85",
//                   color: isAct ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.75)",
//                   margin:0,
//                   transition:"color 0.3s",
//                 }}>
//                   {step.description}
//                 </p>

//                 {/* Watermark number */}
//                 <div style={{
//                   position:"absolute", bottom:"-10px", right:"16px",
//                   fontSize:"80px", fontWeight:"900", lineHeight:1,
//                   color:"rgba(255,255,255,0.025)",
//                   userSelect:"none", pointerEvents:"none",
//                 }}>
//                   {step.id}
//                 </div>

//                 {/* Corner glow */}
//                 {isAct && (
//                   <div style={{
//                     position:"absolute", inset:0, borderRadius:"20px", pointerEvents:"none",
//                     background:"radial-gradient(ellipse at top left,rgba(37,99,235,0.1),transparent 60%)",
//                   }} />
//                 )}
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }






import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "Analysis",
    title: "Deep Analysis",
    description:
      "Our IT consulting experts examine your current software solutions and how your staff uses them to find issues with workflows and automation. We identify bottlenecks and map out your technical landscape.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <circle cx="18" cy="18" r="10" />
        <path d="M26 26l8 8" strokeLinecap="round" />
        <path d="M14 18h8M18 14v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Strategy",
    title: "Tailored Strategy",
    description:
      "The consultants create a roadmap and strategy that will assist your company in utilizing cutting-edge technology and cleaning up your software infrastructure. KPIs for software and employee performance are established.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <path d="M6 30l8-10 6 6 8-12 6 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="20" r="3" />
        <path d="M6 34h28" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Performance",
    title: "Peak Performance",
    description:
      "Collaboration between the client and the IT consulting company is essential for effective services. Our experts carefully analyze your workflows, monitoring results to identify problems. Hindering factors are removed by our developers.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4" strokeLinecap="round" />
        <path d="M20 16v4l4 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Improvements",
    title: "Continuous Growth",
    description:
      "Our software engineers and IT consulting advisors make recommendations for future enhancements once the first aims have been met and help with their implementation to ensure sustained, measurable growth.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" width="36" height="36">
        <path d="M20 6v6M26 8l-3 5M14 8l3 5" strokeLinecap="round" />
        <circle cx="20" cy="22" r="10" />
        <path d="M15 22l4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ConsultingProcess() {
  const [active, setActive] = useState(null);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        minHeight: "100vh",
        padding: "90px 40px 110px",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "25%",
            width: "580px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(37,99,235,0.18),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "20%",
            width: "460px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "100px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60a5fa",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3b82f6",
                display: "inline-block",
              }}
            />
            How We Work
          </span>

          <h2
            style={{
              fontSize: "clamp(30px,4.5vw,54px)",
              fontWeight: "900",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: "0 0 20px",
              background:
                "linear-gradient(135deg,#ffffff 30%,#93c5fd 65%,#3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our IT Consulting Process
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "80px",
                background:
                  "linear-gradient(to right,transparent,rgba(59,130,246,0.6))",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#3b82f6",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(59,130,246,0.5)",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#3b82f6",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "80px",
                background:
                  "linear-gradient(to left,transparent,rgba(59,130,246,0.6))",
              }}
            />
          </div>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.85",
              color: "rgba(148,163,184,0.85)",
            }}
          >
            A decade deep, and we're still innovating. Our legacy thrives on
            reshaping IT strategies for diverse organizations. With a team of
            seasoned experts boasting over fifteen years of hands-on experience,
            we deliver tailored solutions swiftly, ensuring tangible value every
            single time.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div
          style={{
            position: "relative",
            marginBottom: "56px",
            padding: "0 0 20px",
          }}
        >
          {/* Horizontal line – centered under circles */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              background:
                "linear-gradient(to right,rgba(37,99,235,0.6),rgba(99,102,241,0.6),rgba(14,165,233,0.6),rgba(37,99,235,0.3))",
              zIndex: 0,
            }}
          />

          {/* Animated pulse (first segment) */}
          <div
            style={{
              position: "absolute",
              top: "35px",
              left: "12.5%",
              height: "4px",
              width: "60px",
              borderRadius: "2px",
              background: "linear-gradient(to right,#60a5fa,transparent)",
              zIndex: 1,
              boxShadow: "0 0 12px rgba(96,165,250,0.6)",
            }}
          />

          {/* Step nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            {steps.map((step, i) => {
              const isAct = active === i;
              return (
                <div
                  key={step.id}
                  onClick={() => setActive(active === i ? null : i)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  {/* Circle node */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isAct
                        ? "linear-gradient(135deg,#1d4ed8,#4f46e5)"
                        : "rgba(255,255,255,0.04)",
                      border: isAct
                        ? "2px solid rgba(96,165,250,0.8)"
                        : "2px solid rgba(59,130,246,0.25)",
                      boxShadow: isAct
                        ? "0 0 0 6px rgba(37,99,235,0.15), 0 8px 32px rgba(37,99,235,0.5)"
                        : "0 4px 16px rgba(0,0,0,0.3)",
                      transform: isAct ? "scale(1.12)" : "scale(1)",
                      transition:
                        "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: "900",
                        background: isAct
                          ? "white"
                          : "linear-gradient(135deg,#60a5fa,#a5b4fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "all 0.3s",
                      }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Step label */}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "900",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isAct ? "#93c5fd" : "rgba(148,163,184,0.6)",
                      transition: "color 0.3s",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 4 Content Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {steps.map((step, i) => {
            const isAct = active === i;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  borderRadius: "20px",
                  padding: "36px 28px 32px",
                  border: isAct
                    ? "1px solid rgba(59,130,246,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  background: isAct
                    ? "linear-gradient(145deg,rgba(29,78,216,0.18),rgba(99,102,241,0.07))"
                    : "linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
                  boxShadow: isAct
                    ? "0 20px 60px -10px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 4px 20px -4px rgba(0,0,0,0.3)",
                  transform: isAct ? "translateY(-8px)" : "translateY(0)",
                  transition:
                    "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  cursor: "pointer",
                  position: "relative",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* Top bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: isAct
                      ? "linear-gradient(90deg,#1d4ed8,#6366f1,transparent)"
                      : "linear-gradient(90deg,rgba(37,99,235,0.2),transparent)",
                    transition: "all 0.4s",
                  }}
                />

                {/* Step number badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: isAct
                      ? "linear-gradient(135deg,#1d4ed8,#4f46e5)"
                      : "rgba(255,255,255,0.04)",
                    border: isAct ? "none" : "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "20px",
                    boxShadow: isAct
                      ? "0 4px 16px rgba(37,99,235,0.45)"
                      : "none",
                    transition: "all 0.35s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "900",
                      color: isAct ? "white" : "rgba(71,85,105,0.7)",
                      transition: "color 0.3s",
                    }}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div
                  style={{
                    color: isAct ? "#60a5fa" : "rgba(148,163,184,0.35)",
                    marginBottom: "20px",
                    filter: isAct
                      ? "drop-shadow(0 0 10px rgba(59,130,246,0.5))"
                      : "none",
                    transform: isAct ? "scale(1.05)" : "scale(1)",
                    transition:
                      "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    display: "inline-flex",
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "800",
                    color: isAct ? "#f1f5f9" : "rgba(226,232,240,0.7)",
                    marginBottom: "12px",
                    letterSpacing: "0.02em",
                    transition: "color 0.3s",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.85",
                    color: isAct
                      ? "rgba(148,163,184,0.9)"
                      : "rgba(100,116,139,0.75)",
                    margin: 0,
                    transition: "color 0.3s",
                    flex: 1,
                  }}
                >
                  {step.description}
                </p>

                {/* Watermark number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "16px",
                    fontSize: "80px",
                    fontWeight: "900",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.025)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {step.id}
                </div>

                {/* Corner glow */}
                {isAct && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "20px",
                      pointerEvents: "none",
                      background:
                        "radial-gradient(ellipse at top left,rgba(37,99,235,0.1),transparent 60%)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}