import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheck, FiArrowRight, FiActivity, FiShield, FiTrendingUp, FiDollarSign, FiCreditCard, FiBarChart2 } from "react-icons/fi";

const solutions = [
  {
    id: "healthcare",
    title: "FinTech and Healthcare Solutions",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    icon: <FiActivity size={22} strokeWidth={1.5}/>,
    items: [
      "Simplifying the Patient Care and Expenses",
      "Managing the Patient Payment Ecosystem",
      "End-to-end Business Transaction Tracking",
      "Automated, Paperless Health Savings Account (HSA) Enrollment",
      "Digital Access to Healthcare Data Through Open Banking",
    ],
  },
  {
    id: "insurance",
    title: "FinTech and Insurance Solutions",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    icon: <FiShield size={22} strokeWidth={1.5}/>,
    items: [
      "Simplifying Insurance Processes",
      "Managing Evolving Strategic, Operational, and Regulatory Risks",
      "Insurance Payments Automation",
      "Using Credit Scoring Algorithms for Insurance Pricing",
    ],
  },
  {
    id: "banking",
    title: "Digital Banking & Payments",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    icon: <FiCreditCard size={22} strokeWidth={1.5}/>,
    items: [
      "Core Banking System Modernisation",
      "Real-Time Payment Processing Infrastructure",
      "Open Banking API Integration",
      "Multi-Currency Digital Wallets",
      "PCI-DSS Compliant Transaction Systems",
    ],
  },
  {
    id: "wealth",
    title: "Wealth Management & Trading",
    accent: "#fb923c",
    grad: "linear-gradient(135deg,#ea580c,#fb923c)",
    icon: <FiTrendingUp size={22} strokeWidth={1.5}/>,
    items: [
      "Algorithmic Trading Platforms",
      "Robo-Advisory Solutions",
      "Portfolio Management & Rebalancing Tools",
      "Risk Assessment & Compliance Dashboards",
      "Real-Time Market Data Integration",
    ],
  },
  {
    id: "lending",
    title: "Lending & Credit Solutions",
    accent: "#c084fc",
    grad: "linear-gradient(135deg,#9333ea,#c084fc)",
    icon: <FiDollarSign size={22} strokeWidth={1.5}/>,
    items: [
      "AI-Powered Credit Scoring Models",
      "Automated Loan Origination Systems",
      "Peer-to-Peer Lending Platforms",
      "Mortgage Processing Automation",
    ],
  },
  {
    id: "analytics",
    title: "Financial Analytics & Reporting",
    accent: "#f472b6",
    grad: "linear-gradient(135deg,#db2777,#f472b6)",
    icon: <FiBarChart2 size={22} strokeWidth={1.5}/>,
    items: [
      "Regulatory Reporting Automation (Basel III, IFRS 9)",
      "Fraud Detection & AML Monitoring",
      "Real-Time Financial Dashboards",
      "Predictive Revenue Analytics",
      "ESG Reporting & Compliance Tools",
    ],
  },
];

function BulletItem({ text, accent, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity:0, x:-16 }}
      animate={inView ? { opacity:1, x:0 } : {}}
      transition={{ duration:0.45, delay:index*0.07, ease:[0.22,1,0.36,1] }}
      style={{ display:"flex", alignItems:"flex-start", gap:10, listStyle:"none" }}
    >
      <div style={{
        width:20, height:20, borderRadius:"50%", flexShrink:0, marginTop:2,
        background:`${accent}18`, border:`1px solid ${accent}35`,
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <FiCheck size={10} color={accent} strokeWidth={2.5}/>
      </div>
      <span style={{
        color:"rgba(186,230,255,0.65)",
        fontSize:"clamp(13px, 1.4vw, 15px)", lineHeight:1.7,
        fontFamily:"'DM Sans',sans-serif",
      }}>
        {text}
      </span>
    </motion.li>
  );
}

function SolutionRow({ solution, index, isLast }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity:0, y:36 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:0.65, delay:0.05, ease:[0.22,1,0.36,1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="sol-row"
        style={{
          display:"grid",
          gridTemplateColumns: "clamp(180px, 22%, 260px) 1fr",
          gap: "clamp(24px, 4vw, 48px)",
          padding: "clamp(28px, 3.5vw, 40px) clamp(20px, 3vw, 36px)",
          borderRadius: 20,
          background: hovered
            ? `linear-gradient(145deg,${solution.accent}0d,rgba(255,255,255,0.05))`
            : "rgba(255,255,255,0.02)",
          border: hovered
            ? `1px solid ${solution.accent}35`
            : "1px solid rgba(59,130,246,0.10)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: hovered
            ? `0 20px 50px rgba(0,0,0,0.28),0 0 36px ${solution.accent}10`
            : "none",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
          position: "relative", overflow: "hidden",
          alignItems: "start",
        }}
      >
        {/* left accent strip */}
        <div style={{
          position:"absolute", top:0, left:0, bottom:0, width:3,
          background: hovered ? solution.grad : "transparent",
          borderRadius:"20px 0 0 20px",
          transition:"background 0.4s",
        }}/>

        {/* corner glow */}
        <div style={{
          position:"absolute", top:-40, left:20,
          width:160, height:160, borderRadius:"50%",
          background:`radial-gradient(circle,${solution.accent}18,transparent 70%)`,
          filter:"blur(28px)",
          opacity: hovered ? 1 : 0,
          transition:"opacity 0.4s",
          pointerEvents:"none",
        }}/>

        {/* LEFT: icon + title */}
        <div className="sol-left" style={{ display:"flex", flexDirection:"column", gap:14, paddingLeft:16 }}>
          <div style={{
            width:48, height:48, borderRadius:14, flexShrink:0,
            background: hovered ? solution.grad : `${solution.accent}15`,
            border: `1px solid ${solution.accent}${hovered ? "00" : "28"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            color: hovered ? "white" : solution.accent,
            boxShadow: hovered ? `0 6px 20px ${solution.accent}40` : "none",
            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}>
            {solution.icon}
          </div>

          <h3 style={{
            margin:0,
            fontSize:"clamp(14px, 1.6vw, 17px)", fontWeight:800,
            background: solution.grad,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            letterSpacing:"-0.3px", lineHeight:1.3,
            fontFamily:"'DM Sans',sans-serif",
          }}>
            {solution.title}
          </h3>

          <motion.button
            whileHover={{ scale:1.04, boxShadow:`0 0 18px ${solution.accent}40` }}
            whileTap={{ scale:0.97 }}
            style={{
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"8px 16px", borderRadius:8, width:"fit-content",
              background: hovered ? solution.grad : "rgba(255,255,255,0.04)",
              border: hovered ? "none" : `1px solid ${solution.accent}25`,
              color:"white", fontFamily:"'DM Sans',sans-serif",
              fontWeight:600, fontSize:12, cursor:"pointer",
              transition:"all 0.4s",
            }}
          >
            Learn More <FiArrowRight size={12}/>
          </motion.button>
        </div>

        {/* RIGHT: bullet list */}
        <ul style={{ margin:0, padding:0, display:"flex", flexDirection:"column", gap:12 }}>
          {solution.items.map((item, i) => (
            <BulletItem key={i} text={item} accent={solution.accent} index={i}/>
          ))}
        </ul>
      </motion.div>

      {/* divider between rows (not after last) */}
      {!isLast && (
        <div style={{
          height:1, margin:"4px 0",
          background:"linear-gradient(90deg,transparent,rgba(59,130,246,0.15),transparent)",
        }}/>
      )}
    </>
  );
}

export default function FinancialIndustrySoftware() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const imgRef     = useRef(null);
  const imgInView  = useInView(imgRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position:"relative",
      padding:"clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background:"linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow:"hidden",
      fontFamily:"'DM Sans',sans-serif",
      borderTop:"1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* grid */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="fisgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#fisgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* ── header ── */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }} style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,72px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.10)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.25)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 8px #38bdf8",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Financial Technology</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:20 }}>
            Financial Industry{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Software Development
            </span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.85,maxWidth:680,margin:"0 auto" }}>
            We deliver robust, secure, and scalable financial software solutions that modernise operations,
            ensure compliance, and accelerate digital transformation for banks, insurers, and fintech innovators.
          </p>
        </motion.div>

        {/* ── two-column layout (responsive) ── */}
        <div className="fin-grid" style={{ display:"grid", gridTemplateColumns:"1fr clamp(280px,36%,480px)", gap:"clamp(24px,4vw,56px)", alignItems:"start" }}>

          {/* LEFT: solution rows */}
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {solutions.map((sol, i) => (
              <SolutionRow
                key={sol.id}
                solution={sol}
                index={i}
                isLast={i === solutions.length - 1}
              />
            ))}
          </div>

          {/* RIGHT: sticky image + quick stats */}
          <div className="fin-right" style={{ position:"sticky", top:80, display:"flex", flexDirection:"column", gap:20 }}>
            <motion.div
              ref={imgRef}
              initial={{ opacity:0, x:40, scale:0.96 }}
              animate={imgInView ? { opacity:1, x:0, scale:1 } : {}}
              transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
              style={{
                borderRadius:20, overflow:"hidden",
                border:"1px solid rgba(59,130,246,0.15)",
                boxShadow:"0 24px 60px rgba(0,0,0,0.4)",
                position:"relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85"
                alt="Financial software team"
                style={{ width:"100%", height:"clamp(220px,28vw,360px)", objectFit:"cover", display:"block" }}
              />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 50%,rgba(4,13,26,0.85))" }}/>
              <div style={{
                position:"absolute", bottom:16, left:16, right:16,
                display:"flex", alignItems:"center", gap:10,
                background:"rgba(5,15,45,0.88)", backdropFilter:"blur(16px)",
                border:"1px solid rgba(59,130,246,0.20)",
                borderRadius:12, padding:"10px 16px",
              }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:"#22d3ee", boxShadow:"0 0 8px #22d3ee", flexShrink:0 }}/>
                <span style={{ color:"rgba(186,230,255,0.75)", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
                  Trusted by 100+ Financial Institutions
                </span>
              </div>
            </motion.div>

            <div className="fin-stats" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {[
                { val:"RBI", label:"Compliance Ready",   accent:"#38bdf8", grad:"linear-gradient(135deg,#1d4ed8,#38bdf8)" },
                { val:"PCI", label:"DSS Certified",      accent:"#818cf8", grad:"linear-gradient(135deg,#6366f1,#818cf8)" },
                { val:"ISO", label:"27001 Standards",    accent:"#34d399", grad:"linear-gradient(135deg,#059669,#34d399)" },
                { val:"SOC", label:"2 Type II Audited",  accent:"#fb923c", grad:"linear-gradient(135deg,#ea580c,#fb923c)" },
              ].map((s,i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0,y:16 }}
                  animate={imgInView ? { opacity:1,y:0 } : {}}
                  transition={{ delay:0.3+i*0.1,duration:0.5 }}
                  style={{
                    borderRadius:14, padding:"clamp(10px, 2vw, 14px) clamp(12px, 2vw, 16px)", textAlign:"center",
                    background:"rgba(255,255,255,0.03)",
                    border:`1px solid ${s.accent}22`,
                    backdropFilter:"blur(16px)",
                  }}
                >
                  <div style={{ fontSize:"clamp(16px, 3vw, 18px)", fontWeight:900, letterSpacing:"-0.5px", background:s.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontFamily:"'DM Sans',sans-serif", marginBottom:4 }}>
                    {s.val}
                  </div>
                  <div style={{ color:"rgba(186,230,255,0.45)", fontSize:"clamp(10px, 2.5vw, 11px)", fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale:1.04, boxShadow:"0 0 40px rgba(59,130,246,0.50)" }}
              whileTap={{ scale:0.97 }}
              style={{
                display:"flex", alignItems:"center", justifyContent:"center", gap:9,
                padding:"clamp(13px, 1.8vw, 16px)", borderRadius:12,
                background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",
                border:"none", color:"white",
                fontFamily:"'DM Sans',sans-serif", fontWeight:700,
                fontSize:"clamp(12px, 1.4vw, 14px)", letterSpacing:"0.14em", textTransform:"uppercase",
                cursor:"pointer", boxShadow:"0 4px 24px rgba(59,130,246,0.35)",
              }}
            >
              Discuss Your Project <FiArrowRight size={15}/>
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        /* Main grid → single column on tablet/mobile */
        @media (max-width: 1024px) {
          .fin-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .fin-right {
            position: static !important;
          }
        }

        /* Each solution row → vertical stack on small screens */
        @media (max-width: 768px) {
          .sol-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 24px 20px !important;
          }
          .sol-left {
            padding-left: 0 !important;
            align-items: center !important;
            text-align: center;
          }
          .sol-left button {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Stats grid: two columns on tablet, optionally one column on very small phones */
        @media (max-width: 640px) {
          .fin-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 480px) {
          .fin-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}