import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- Icons ----------
const Icons = {
  Cloud:       () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>),
  BarChart:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>),
  Cpu:         () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><rect x="7" y="7" width="10" height="10" rx="1"/><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 3v-2M12 3v-2M16 3v-2M8 23v-2M12 23v-2M16 23v-2M3 8h-2M3 12h-2M3 16h-2M23 8h-2M23 12h-2M23 16h-2" strokeLinecap="round"/></svg>),
  Globe:       () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  Star:        () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  MapPin:      () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  Award:       () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>),
  Flag:        () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>),
  TrendingUp:  () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  Upload:      () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>),
  User:        () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
  UserPlus:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>),
  Shield:      () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  Smartphone:  () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
  ChevronDown: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>),
  ChevronRight:() => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><polyline points="9 18 15 12 9 6"/></svg>),
  ArrowLeft:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>),
  Clock:       () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Tag:         () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>),
  Share:       () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>),
  Bookmark:    () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>),
  CheckCircle: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
  ArrowRight:  () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
  Eye:         () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>),
  Quote:       () => (<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" opacity="0.15"/></svg>),
};

const ACCENT = "#60a5fa";

// ---------- Decorative circles ----------
function DecorativeCircles() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
      {[400, 600, 800].map((size, i) => (
        <div key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      ))}
    </div>
  );
}

// ---------- Dark background wrapper ----------
function DarkBackground({ children }) {
  return (
    <div style={{ position: "relative", background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)", minHeight: "100vh", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="newsgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#newsgrid)" />
      </svg>
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: -80, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,#1d4ed8,#2563eb,transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }} style={{ position: "absolute", bottom: -60, right: -20, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,#4f46e5,#818cf8,transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />
      <DecorativeCircles />
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}

// ---------- Article Detail ----------
function ArticleDetail({ article, allArticles, onBack, onOpen }) {
  const detailRef = useRef(null);
  useEffect(() => { detailRef.current?.scrollTo({ top:0 }); window.scrollTo({ top:0 }); }, [article.id]);

  const related = article.relatedIds?.map(id => allArticles.find(a=>a.id===id)).filter(Boolean) || [];

  const { Icon, bg, date, readTime, views, title, tags, body, author, authorRole,
          authorAvatar, category, excerpt, keyPoints, stats, quote, quoteAuthor, sections } = article;

  return (
    <DarkBackground>
      <div ref={detailRef} style={{ fontFamily:"'DM Sans',sans-serif", maxWidth: 1100, margin: "0 auto", padding: "clamp(24px,4vw,48px) clamp(16px,5vw,40px)" }}>
        <div style={{ position:"relative", height:"clamp(200px,30vw,320px)", background: bg || "#0a1628", borderRadius: 20, marginBottom: 32, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(96,165,250,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.06) 1px,transparent 1px)", backgroundSize:"40px 40px" }}/>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(96,165,250,0.12),transparent 70%)" }}/>
          <div style={{ transform:"scale(2.5)", color: ACCENT, opacity:0.7 }}><Icon/></div>
          <button onClick={onBack} style={{ position:"absolute", top:20, left:20, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:8, padding:"8px 16px", color:"white", fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", gap:8 }}><Icons.ArrowLeft/> Back</button>
          <div style={{ position:"absolute", bottom:20, left:20, display:"flex", gap:8 }}>
            <span style={{ background:"rgba(96,165,250,0.2)", border:"1px solid rgba(96,165,250,0.4)", borderRadius:6, padding:"4px 10px", fontSize:10, color: ACCENT }}>{category}</span>
            {tags.map(t=><span key={t} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:6, padding:"4px 10px", fontSize:10, color:"rgba(255,255,255,0.6)" }}>{t}</span>)}
          </div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap", marginBottom:20, paddingBottom:16, borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:40, height:40, borderRadius:"50%", background:`linear-gradient(135deg,#185FA5,${ACCENT})`, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:700 }}>{authorAvatar}</div>
            <div><div style={{ fontWeight:700, color:"white" }}>{author}</div><div style={{ fontSize:12, color:"rgba(255,255,255,0.5)" }}>{authorRole}</div></div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:6, color:"rgba(255,255,255,0.5)", fontSize:12 }}><Icons.Clock/>{date}</div>
          <div style={{ display:"flex", alignItems:"center", gap:6, color:"rgba(255,255,255,0.5)", fontSize:12 }}><Icons.Tag/>{readTime} read</div>
          <div style={{ marginLeft:"auto", display:"flex", gap:8 }}>{[Icons.Share,Icons.Bookmark].map((Ic,i)=><button key={i} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.6)", cursor:"pointer" }}><Ic/></button>)}</div>
        </div>

        <h1 style={{ fontSize:"clamp(24px,4vw,40px)", fontWeight:800, color:"white", letterSpacing:"-0.02em", marginBottom:16 }}>{title}</h1>
        <p style={{ fontSize:"clamp(16px,1.6vw,18px)", color:"rgba(255,255,255,0.7)", lineHeight:1.7, marginBottom:24, borderLeft:`3px solid ${ACCENT}`, paddingLeft:20 }}>{excerpt}</p>

        {stats && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))", gap:12, marginBottom:32, padding:20, borderRadius:16, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(96,165,250,0.2)" }}>
            {stats.map(s=><div key={s.label} style={{ textAlign:"center" }}><div style={{ fontSize:"clamp(24px,3vw,32px)", fontWeight:900, color:ACCENT }}>{s.value}</div><div style={{ fontSize:11, color:"rgba(255,255,255,0.5)" }}>{s.label}</div></div>)}
          </div>
        )}

        <div style={{ width:60, height:3, background:ACCENT, marginBottom:24 }}></div>

        {body.split("\n\n").map((para,i)=>(
          <p key={i} style={{ fontSize:"clamp(14px,1.5vw,16px)", color:"rgba(255,255,255,0.8)", lineHeight:1.9, marginBottom:20 }}>{para}</p>
        ))}

        {keyPoints && (
          <div style={{ margin:"32px 0", padding:"20px 24px", borderRadius:16, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(96,165,250,0.2)" }}>
            <h3 style={{ fontSize:16, fontWeight:800, color:"white", marginBottom:16, display:"flex", alignItems:"center", gap:8 }}><Icons.CheckCircle/> Key Takeaways</h3>
            {keyPoints.map(kp=><div key={kp} style={{ display:"flex", gap:10, marginBottom:12, color:"rgba(255,255,255,0.7)", fontSize:14 }}><Icons.CheckCircle style={{ flexShrink:0, marginTop:2, color:ACCENT }}/>{kp}</div>)}
          </div>
        )}

        {sections?.map(sec=>(
          <div key={sec.heading} style={{ marginBottom:28 }}>
            <h2 style={{ fontSize:"clamp(18px,2vw,22px)", fontWeight:800, color:"white", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}><div style={{ width:4, height:20, background:ACCENT, borderRadius:2 }}/>{sec.heading}</h2>
            <p style={{ fontSize:"clamp(14px,1.5vw,16px)", color:"rgba(255,255,255,0.7)", lineHeight:1.9 }}>{sec.text}</p>
          </div>
        ))}

        {quote && (
          <div style={{ margin:"40px 0", padding:"24px 32px", borderRadius:20, background:"rgba(96,165,250,0.05)", border:"1px solid rgba(96,165,250,0.2)", position:"relative" }}>
            <div style={{ position:"absolute", top:16, left:20, color:ACCENT, opacity:0.3 }}><Icons.Quote/></div>
            <p style={{ fontSize:"clamp(16px,1.8vw,20px)", fontWeight:600, color:"white", fontStyle:"italic", marginBottom:12, paddingLeft:16 }}>"{quote}"</p>
            <span style={{ fontSize:12, color:ACCENT }}>{quoteAuthor}</span>
          </div>
        )}

        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:32, paddingTop:24, borderTop:"1px solid rgba(255,255,255,0.1)" }}>
          {tags.map(t=><span key={t} style={{ padding:"5px 12px", borderRadius:30, background:"rgba(96,165,250,0.1)", border:"1px solid rgba(96,165,250,0.3)", fontSize:11, color:ACCENT, fontWeight:600 }}>#{t}</span>)}
        </div>

        {related.length>0 && (
          <div style={{ marginTop:48 }}>
            <h3 style={{ fontSize:20, fontWeight:800, color:"white", marginBottom:20, display:"flex", alignItems:"center", gap:8 }}><div style={{ width:4, height:20, background:ACCENT, borderRadius:2 }}/> Related Articles</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:20 }}>
              {related.map(rel=>(
                <div key={rel.id} onClick={()=>onOpen(rel)} style={{ cursor:"pointer", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:12, padding:12, transition:"all 0.2s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor=ACCENT;e.currentTarget.style.transform="translateY(-4px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.transform="translateY(0)"}}>
                  <div style={{ height:80, background:rel.bg, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color:ACCENT, opacity:0.8 }}><rel.Icon/></div>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginTop:8 }}>{rel.date}</p>
                  <p style={{ fontSize:13, fontWeight:600, color:"white", lineHeight:1.4 }}>{rel.title.length>70?rel.title.slice(0,70)+"…":rel.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop:40, textAlign:"center" }}>
          <button onClick={onBack} style={{ background:`linear-gradient(135deg,#185FA5,${ACCENT})`, border:"none", borderRadius:40, padding:"10px 28px", color:"white", fontWeight:700, fontSize:13, cursor:"pointer" }}><Icons.ArrowLeft/> Back to all news</button>
        </div>
      </div>
    </DarkBackground>
  );
}

// ---------- Article Card ----------
function ArticleCard({ article, onOpen }) {
  const { Icon, bg, date, readTime, title, tags } = article;
  const [hov, setHov] = useState(false);
  return (
    <article onClick={()=>onOpen(article)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ background:"rgba(255,255,255,0.02)", border: hov?`1px solid ${ACCENT}`:"1px solid rgba(255,255,255,0.08)", borderRadius:16, overflow:"hidden", cursor:"pointer", transition:"all 0.3s", transform: hov?"translateY(-6px)":"translateY(0)", boxShadow: hov?`0 12px 32px rgba(0,0,0,0.3)`:"none", fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ height:160, background:bg, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(96,165,250,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.05) 1px,transparent 1px)", backgroundSize:"30px 30px" }}/>
        <div style={{ transform:"scale(1.6)", color: hov?ACCENT:"#60a5fa", opacity:0.8, transition:"all 0.3s" }}><Icon/></div>
        <div style={{ position:"absolute", top:12, right:12, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(4px)", borderRadius:30, padding:"3px 8px", fontSize:10, color:"rgba(255,255,255,0.7)" }}><Icons.Clock/> {readTime}</div>
      </div>
      <div style={{ padding:"16px" }}>
        <p style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginBottom:6 }}>{date}</p>
        <h3 style={{ fontSize:14, fontWeight:700, color:"white", lineHeight:1.5, marginBottom:12 }}>{title.length>70?title.slice(0,70)+"…":title}</h3>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:12 }}>
          <div style={{ display:"flex", gap:8 }}>{tags.slice(0,2).map(t=><span key={t} style={{ fontSize:10, color:ACCENT }}>#{t}</span>)}</div>
          <span style={{ fontSize:11, color:ACCENT, display:"flex", alignItems:"center", gap:4 }}>Read <Icons.ChevronRight/></span>
        </div>
      </div>
    </article>
  );
}

const ALL_ARTICLES = [
  {
  id: 1,
  date: "June 9, 2026",
  readTime: "12 min",
  views: "5.2k",
  Icon: Icons.Cloud,
  bg: "#0d1b2e",
  author: "Alex Morgan",
  authorRole: "Cloud Architect",
  authorAvatar: "AM",
  category: "Cloud & Infrastructure",
  tags: ["NEWS", "CLOUD", "FINTECH", "HYBRID CLOUD"],
  title: "Banking on the Hybrid Cloud: What Big Banks Can Learn from Neobanks",
  excerpt: "Ever since neobanks appeared on the scene, big banks have had to come to terms with a new competitor. Neobanks are glorified mobile-first banks that have a far more agile approach to customer service, allowing them to offer a much more personalized touch to their clients’ query resolution. For big banks, new strategic changes such as embracing a hybrid cloud model as an agile IT backbone shift are imperative.",
  body: `Ever since neobanks appeared on the scene, big banks have had to come to terms with a new competitor. Neobanks are glorified mobile-first banks that have a far more agile approach to customer service, allowing them to offer a much more personalized touch to their clients’ query resolution. For big banks, new strategic changes such as embracing a hybrid cloud model as an agile IT backbone shift are imperative. They now need to capture the most agile, cloud-empowered banking services that neobanks offer.

In this article, we will discuss the fundamentals of hybrid cloud banking and assess its adoption patterns and challenges. We will also explain the major insights that traditional banks need to adopt from digitally savvy banks to thrive in the changing environment.

What Is a Hybrid Cloud for Banking?
A bank hybrid cloud is an IT architecture that integrates a private cloud (on-premises, proprietary infrastructure) with a public cloud (a third-party-provided service). The two disparate environments are structured to interconnect in a manner that data and applications are not isolated in individual silos.

Why is this important for modern banks?
Financial institutions struggle to gain control and ensure security for sensitive data and core operations. Meanwhile, they also seek to reach flexibility, scalability, and cost efficiency in a public cloud for non-sensitive workloads and innovative applications.

The hybrid cloud banking model enables financial institutions to strike a balance between private and public clouds. For instance, a bank can store its customer financial records on a hybrid-private cloud to comply with data residency regulations. Simultaneously, it can run customer-facing mobile applications and other analytics on public cloud servers. This would allow the bank to integrate mobile applications with the private cloud in a seamless manner.

Hybrid Cloud Adoption in Banking
Market analysis estimates that the cloud finance industry will be worth over USD 51 billion in 2026, with projections to reach roughly USD 217 billion by 2034. This denotes a 19.78% CAGR over the next 9 years.

In 2025, an LSEG (London Stock Exchange Group) industry survey stated that 82% of orgs already function on a multi-cloud or hybrid-cloud basis. This implies that the transition to flexible cloud infrastructure is ongoing.

Banks are no longer in the exploratory phase. They are increasing investment. The same report states that 87% of financial services firms report that of all cloud expenditures in the last two years, over a quarter fueled spending focusing on scalability, revenue growth, and AI enablement.

How Traditional Banks Can Learn From Neobanks
New entrants in the market, such as Revolt, Nubank, Monzo, and other digital-only companies, have completely altered the banking industry with their rapid growth and technology-focused strategies. With these changes, existing banking giants such as JPMorgan Chase, HSBC, and BNP Paribas have something new to observe and rethink their strategies.

Let’s summarize the most important things traditional banks can learn from neobanks.

Agility and Reaching Market Quicker
Revamped agile strategies have enabled existing banks to break free from the historically long release cycles and siloed IT structures they endured in past decades.

For example, JPMorgan Chase devoted resources to Agile and DevOps practices to improve their software delivery processes, achieving over a 70% increase in code deployment within two years and greatly improving development efficiency.

Other large banks, like ING, have implemented agile transformations that seek to diversify into smaller cross-functional teams that are more easily able to adapt. The focus for these banks can be summarized as adopting the agility of hybrid cloud in banking, which is adopting flattening hierarchies, encouraging rapid prototyping, embracing DevOps automation, promoting culturally rewarding speed, and facilitating adaptability.

Innovation Culture and Business Models
Neobanks cultivate innovation cultures that maintain and encourage experimentation as well as rapid scaling of novel concepts. They usually begin with a niche or singular offering (like a basic checking account). Then, they incrementally branch out into offering more services through innovation or bank hybrid cloud partnerships.

Take Revolut, for instance. This bank started with a multi-currency travel card. Within a few years, it has expanded the system to include cryptocurrency trading, stock investing, insurance, and more.

Typically, neobanks are cloud-native fintechs that have a penchant for seamless integration with other fintech offerings through APIs. This allows for the embedded banking within other ecosystems or the adoption of “Banking-as-a-Service” models. Neobanks tend to have flatter and more tech-oriented hierarchies that encourage trying new features (and failing fast) as a learning mechanism. This is a lesson for larger banks to adopt a more entrepreneurial approach.

Cloud-Native Technology and Architecture
Neobanks had a head start because they came into existence during the cloud era.

See, legacy core banking systems weighed down traditional banks. Neobanks, however, constructed their systems on modern cloud-native architectures, which included APIs, microservices, and cloud databases.

Nubank, for instance, scaled to over 100 million customers in seven years and was able to serve them all for a low cost. This is one of the best examples of a neobank that leveraged cloud systems to expand internationally. Withdrawal, deposit, and transaction data from Nubank is processed in seconds; data is also ingested almost in real-time. The bank credits its cloud architecture for permitting what is described as industry data processing, product design, credit modeling, and personalization.

Benefits of Hybrid Cloud Banking
The main argument for adopting hybrid cloud banking comes with undeniable value propositions that tackle the needs of the financial services industry. The benefits span a wide range, from significant cost reductions to increased innovative capabilities.

Challenges of Cloud-based Banking
Mixing cloud solutions with on-premises infrastructures can yield a plethora of advantages, but the flip side still exists.

Integration with Legacy Software: Mainframe systems are still a popular method of storage among large banks. They are not user-friendly, and integrating with other hybrid cloud storage bank systems is a task that requires skilled professionals.
Security and Governance Complexity: The security and operational requirements for a hybrid cloud banking IT architecture are more complex than for a bank using a single private cloud and public cloud infrastructure.
Data Residency: Each bank will face unique operational RIAs based on the cloud bank operations, such as the geographic access restrictions.
Vendor Lock-in: Moving to a different provider or multi-cloud in the future can become difficult and expensive.
Cultural Skill Gaps: The integration of a hybrid cloud banking model will require staffing in architecture, DevOps, and IT security, raising the need for new skill sets.

How to Start Implementing a Hybrid Cloud in the Banking Sector
Adopting a hybrid cloud in banking requires a shift in organizational structure in addition to a change in technology. Below, we outline the three key aspects you need to keep in mind to maximize your success.

Understanding what the current infrastructure comprises is the most logical first step. In the banking context, this means looking into the existing applications, the sensitivity levels of the data, as well as how data is used.
Due to heavy regulations imposed on the banking sector, you should have a careful plan for migration at hand to avoid penalties or resource-intensive reviews.
To efficiently navigate hybrid cloud in banking, a strong governance structure must be put in place.

Hybrid Cloud Implementation Challenges and How to Address Them
Implementation of hybrid cloud in banking comes with certain obstacles. We will dwell on the most pressing ones while offering mitigation ways.

Underestimating Integration and Migration Efforts
Mitigation tips: Avoid “big bang” cutover strategies. Phase migrations and have roll-back plans. Test integrations in a staging environment.

Neglecting Exposure and Compliance Risks
Mitigation tips: Involve risk and compliance from the onset. Embed classification and control safeguards prior to migration.

Lack of Network Infrastructure and Resilience Strategies
Mitigation tips: Always plan for backup network connections and use SD-WAN. Test failovers.

Uncontrolled Cloud Sprawl and Cost Management Issues
Mitigation tips: Implement tagging and usage monitoring. Audit unused resources. Set up automated shutdown.

Neglecting Workforce Dynamics
Mitigation tip: Foster a culture of agility, advocate for safe-to-fail innovation, and drive processes towards more agile frameworks.

Customer Experience Impacts
Hybrid cloud for banks is useful only with regards to how it is used to enhance customer experience (CX). Today's banking customers require personalized service, continuous access, and innovation.

Enhancement of Service Delivery and Continuous Uptime
Workload distribution across private and public clouds can optimize service uptime. If one environment experiences problems, critical business functions can fail over.

Personalization and Analytics
Public cloud infrastructure provides immense capabilities for big data analytics, machine learning, and AI, which can yield insights from the bank’s data.

New Services and Innovation
The hybrid cloud for banking customers to receive additional and better services and gets access to faster cycles of innovation and newer technologies.

Seamless Omnichannel Interaction
Immediate information access on the cloud during customer service interactions improves the quality of service provided.

Optimizing Hybrid Cloud Investments for Financial Institutions
Banks using hybrid cloud have an opportunity to increase the ROI if they actively monitor and manage their hybrid cloud infrastructure. This will require more than just the installation; continuous adjustment and oversight will also be necessary.

To maximize ROI, banks can take advantage of the public cloud’s consumption-based billing. For hybrid cloud strategy in banking to yield positive results, financial institutions will have to take two vital steps: adjust spending strategies to focus on real-time financial optimization and enforce rigorous cost control policies and limits.

Final Word
Banking executives should consider adopting the bank on a hybrid cloud as a cross-enterprise evolution that spans technology, compliance, and corporate culture as an integrated system. Looking into early adopters, their best practices and learnings (from JPMorgan’s controlled cloud rollout, DBS’s multi-cloud innovation, CBA’s cost-saving move, to Taishin’s resilience-building) demonstrate that a balanced approach works best.

FAQs
What is Hybrid Cloud Banking?
A hybrid cloud merges on-premises systems with third-party cloud systems to handle workloads as required, hence providing banks with an increased level of adaptability.

How can Banks Optimize their Hybrid Cloud Costs?
Instituting a FinOps strategy, or enforcing policy-guardrails that automate the restriction of resource usage, continuous auditing of service contracts, and monitoring resource usage, allows banks to curb excess expenditure.

Why Use Hybrid Cloud for Banking?
A hybrid cloud provides five major benefits: Flexibility, Reduced costs, Compliance, Innovation, Resilience.

Cloud Banking vs. Traditional Banking: What is Better?
It's all dependent on the user. Traditional banking maintains and fosters a relationship based on face-to-face interaction, and cloud banking and trust provide speed, innovation, and accessibility. The combination of the two offers the optimal user experience.

How does a Hybrid Cloud Model Help with Security?
A bank hybrid cloud model allows for the allocation of sensitive data and applications to be hosted on highly secure private, on-premises servers, while performing less sensitive operations in the public cloud.`,
  keyPoints: [
    "Hybrid cloud allows banks to balance security (private cloud) with agility and cost-efficiency (public cloud)",
    "Neobanks like Revolut and Nubank have shown how cloud-native architecture enables rapid scaling and innovation",
    "Traditional banks like JPMorgan Chase have increased deployment velocity by over 70% after adopting agile and cloud practices",
    "FinOps and strong governance are essential to control costs and avoid cloud sprawl",
    "Hybrid cloud improves customer experience through personalization, omnichannel access, and near-zero downtime"
  ],
  stats: [
    { label: "Cloud Finance Market by 2034", value: "$217B" },
    { label: "CAGR", value: "19.78%" },
    { label: "Orgs on Hybrid/Multi-Cloud", value: "82%" },
    { label: "JPMorgan Deployment Increase", value: "70%" }
  ],
  quote: "The hybrid cloud is not a compromise — it's the strategic bridge that allows banks to innovate at the pace of fintech while protecting decades of institutional trust.",
  quoteAuthor: "— Alex Morgan, Cloud Architect",
  sections: [
    { heading: "What Is a Hybrid Cloud for Banking?", text: "A bank hybrid cloud is an IT architecture that integrates a private cloud with a public cloud, enabling data and applications to move seamlessly between environments. This gives banks the security and control of on-premise systems for core operations while leveraging public cloud scalability and innovation for customer-facing apps and analytics." },
    { heading: "Hybrid Cloud Adoption Trends", text: "The cloud finance industry is projected to grow from $51B in 2026 to $217B by 2034. Already, 82% of organizations operate on multi-cloud or hybrid-cloud infrastructure, and 87% of financial firms have increased cloud spending over the last two years, focusing on scalability, revenue growth, and AI enablement." },
    { heading: "Lessons from Neobanks: Agility, Culture, and Technology", text: "Neobanks have succeeded by adopting agile methodologies, DevOps automation, cross-functional teams, and cloud-native architectures. They also foster an innovation culture that encourages rapid experimentation and 'failing fast'. Traditional banks can emulate these practices to modernize their IT and business models." },
    { heading: "Benefits of Hybrid Cloud Banking", text: "Key benefits include: flexibility to scale resources on demand, reduced costs (using public cloud for non-sensitive workloads), compliance and risk control, access to advanced AI/ML tools for analytics, and improved business resilience through disaster recovery across environments." },
    { heading: "Challenges and Mitigation Strategies", text: "Common challenges include legacy integration, security complexity, data residency, vendor lock‑in, skill gaps, uncontrolled cloud sprawl, and cultural resistance. Solutions include phased migration, early compliance involvement, FinOps cost controls, SD‑WAN for network resilience, and fostering an agile, DevOps culture." },
    { heading: "Customer Experience Impact", text: "Hybrid cloud enables 24/7 uptime through failover, hyper‑personalization via AI analytics on public clouds, faster rollout of new services (e.g., blockchain, open banking APIs), and seamless omnichannel experiences where customers can start an application online and finish it in‑branch." },
    { heading: "Optimizing Hybrid Cloud Investments (FinOps)", text: "To maximize ROI, banks must adopt FinOps: real‑time cost monitoring, automated policies to remove under‑utilized resources, usage tagging, and continuous auditing. This prevents cloud sprawl and 'sticker shock' while ensuring that cloud spending directly supports business objectives." }
  ],
  relatedIds: [2, 4, 13]
},
  {
    id:2, date:"April 29, 2026", readTime:"7 min", views:"1.8k",
    Icon:Icons.BarChart, bg:"#1a1a4e",
    author:"Sarah Chen", authorRole:"Data Architect", authorAvatar:"SC",
    category:"Data & Analytics",
    tags:["NEWS","DATA","AI"],
    title:"Why Power BI AI Fails Without a Solid Architecture",
    excerpt:"AI-powered dashboards fail not because of the AI — but because of the data infrastructure underneath.",
    body:"Artificial intelligence features in Power BI promise transformative analytics capabilities, but many enterprise deployments fail to deliver measurable value. The root cause is almost always architectural: poor data modeling, inconsistent data quality, and absence of a governed data layer.\n\nThis deep-dive examines the most common architectural anti-patterns that undermine AI-powered dashboards, and provides a practical blueprint for building the foundational data infrastructure that makes Power BI AI actually work.",
    keyPoints:["70% of Power BI AI failures trace to data quality issues","Star schema modeling improves AI query performance by 60%","Governed semantic layers are the single most impactful investment","Incremental refresh strategies reduce compute costs significantly"],
    stats:[{label:"Failure Rate",value:"70%"},{label:"Perf Gain",value:"60%"},{label:"Data Waste",value:"40%"},{label:"Time to Value",value:"-3mo"}],
    quote:"The most sophisticated AI model cannot compensate for inconsistent, ungoverned data. Architecture is not a technical detail — it is the product.",
    quoteAuthor:"— Principal Data Engineer, Fortune 100 Retailer",
    sections:[
      { heading:"The Architecture Debt Problem", text:"Most organisations rush to enable Power BI AI features before establishing foundational data practices. The result is impressive-looking dashboards that surface misleading insights, eroding trust in analytics tooling across the organisation." },
      { heading:"Building the Semantic Foundation", text:"A well-designed semantic layer abstracts the complexity of raw data models and provides business users with consistent, governed metrics. This layer is the cornerstone of reliable AI-powered analytics." },
      { heading:"Data Quality as a Prerequisite", text:"Before enabling AI features, organisations must implement systematic data quality frameworks including profiling, cleansing pipelines, and ongoing monitoring. AI amplifies data quality issues rather than resolving them." },
    ],
    relatedIds:[1,3,16],
  },
  {
    id:3, date:"April 28, 2026", readTime:"6 min", views:"3.1k",
    Icon:Icons.Cpu, bg:"#0a2a1a",
    author:"Marcus Williams", authorRole:"Head of Product Design", authorAvatar:"MW",
    category:"AI & Design",
    tags:["NEWS","AI","DESIGN"],
    title:"AI-Driven Design and the New Speed of Product Development",
    excerpt:"Generative AI is compressing the product design lifecycle from weeks to days — here's what that means for your team.",
    body:"Generative AI is fundamentally reshaping the product design lifecycle. Teams that once required weeks to move from wireframe to prototype are now delivering polished, tested interfaces in days. This shift is not just about speed — it represents a fundamental change in how designers, engineers, and product managers collaborate.\n\nWe examine the tools, workflows, and cultural changes enabling this acceleration, with insights from product teams at leading technology companies.",
    keyPoints:["AI tools reduce wireframe-to-prototype time by 80%","Design system consistency improves significantly with AI guardrails","User testing cycles are compressed through AI-synthesised feedback","Cross-functional collaboration increases as bottlenecks reduce"],
    stats:[{label:"Speed Increase",value:"80%"},{label:"Design Debt",value:"-45%"},{label:"Team Velocity",value:"4×"},{label:"User Satisfaction",value:"+32%"}],
    quote:"AI doesn't replace designers — it amplifies them. The teams winning with AI are those who use it to eliminate the repetitive and focus human creativity where it matters most.",
    quoteAuthor:"— VP of Product Design, Leading SaaS Company",
    sections:[
      { heading:"The New Design Workflow", text:"AI-augmented design workflows typically follow a pattern: rapid ideation with generative tools, component-level refinement by experienced designers, automated consistency checks, and compressed user testing cycles using AI-synthesised personas." },
      { heading:"Tools Reshaping the Landscape", text:"Figma AI, GitHub Copilot for frontend, and purpose-built design AI tools are becoming standard in high-performing product teams. The organisations investing in prompt engineering skills for their design teams are seeing disproportionate productivity gains." },
      { heading:"Cultural Transformation", text:"The most challenging aspect of AI-driven design is not technological adoption but cultural change. Designers must evolve from pixel-pushers to systems thinkers, product managers must embrace faster iteration, and engineers must adapt to receiving higher-fidelity, more frequent design handoffs." },
    ],
    relatedIds:[2,4,16],
  },
  {
    id:4, date:"March 30, 2026", readTime:"8 min", views:"2.9k",
    Icon:Icons.Globe, bg:"#0d1b4e",
    author:"Diana Rodriguez", authorRole:"VP of Engineering", authorAvatar:"DR",
    category:"Enterprise AI",
    tags:["NEWS","AI","ENTERPRISE"],
    title:"Many U.S. Enterprise AI Projects Fail at the Proof Stage — How Our LATAM Engineers Close the Gap",
    excerpt:"Our five-phase validation framework has helped Fortune 500 clients move AI from POC to production in under six months.",
    body:"Research consistently shows that the majority of enterprise AI initiatives never progress beyond the proof-of-concept stage. Budget overruns, talent shortages, and misaligned expectations are the most cited culprits. Our Latin American engineering teams have developed a repeatable methodology for bridging this gap.\n\nThis article outlines our five-phase validation framework that has helped Fortune 500 clients move AI projects from concept to production in under six months.",
    keyPoints:["85% of enterprise AI POCs never reach production","Our framework reduces time-to-production by 60%","Nearshore teams reduce talent costs by 40% vs. US hiring","Structured validation gates eliminate scope creep"],
    stats:[{label:"POC Failure",value:"85%"},{label:"Cost Saving",value:"40%"},{label:"Time-to-Prod",value:"-60%"},{label:"Client NPS",value:"72"}],
    quote:"The gap between a promising proof of concept and a production AI system is enormous. Most organisations underestimate it. We've built a methodology specifically to bridge it.",
    quoteAuthor:"— Diana Rodriguez, VP of Engineering",
    sections:[
      { heading:"Why Enterprise AI Fails", text:"The disconnect between POC and production is almost always organisational rather than technical. Successful POCs are built by small, nimble teams with executive sponsorship. Production deployment requires cross-functional alignment, data governance, security review, and operational infrastructure that POC teams rarely consider." },
      { heading:"The Five-Phase Validation Framework", text:"Phase 1: Problem Validation. Phase 2: Data Readiness Assessment. Phase 3: Minimum Viable Model. Phase 4: Production Architecture Design. Phase 5: Operational Handover. Each phase has clear entry and exit criteria, preventing momentum-driven progression that bypasses critical validation." },
      { heading:"The LATAM Advantage", text:"Latin American engineering teams offer a combination of technical excellence, timezone alignment with North American clients, and significantly lower cost structures. Our LATAM practice has developed deep specialisation in enterprise AI delivery, making it our fastest-growing practice area." },
    ],
    relatedIds:[1,3,13],
  },
  {
    id:5, date:"September 12, 2025", readTime:"3 min", views:"980",
    Icon:Icons.Star, bg:"#1a0d3e",
    author:"Creative Team", authorRole:"Design Lab", authorAvatar:"CT",
    category:"Company News",
    tags:["NEWS","DESIGN"],
    title:" Waves Techno-Vision LLP Design Lab is Now on Dribbble",
    excerpt:"Follow our Design Lab on Dribbble for behind-the-scenes process, design systems, and visual explorations.",
    body:"Our Design Lab has officially launched its Dribbble presence, sharing the creative process behind some of our most impactful product designs. From healthcare dashboards to fintech mobile apps, our team of 40+ designers will be documenting their thinking, sharing design systems, and engaging with the global design community.\n\nFollow us on Dribbble to stay updated with our latest visual explorations and product design insights.",
    keyPoints:["40+ designers sharing work and process","Healthcare, fintech, and enterprise design showcased","Design system components published openly","Weekly design challenges and community engagement"],
    stats:[{label:"Designers",value:"40+"},{label:"Projects",value:"200+"},{label:"Followers",value:"1.2k"},{label:"Shots",value:"85"}],
    quote:"Design is not just how it looks — it's how it works. Our Dribbble presence lets us show both.",
    quoteAuthor:"— Lead Product Designer, Design Lab",
    sections:[
      { heading:"What We'll Share", text:"Our Dribbble profile will feature case study breakdowns, design system components, interaction prototypes, and the thinking behind key design decisions. We believe in design in public — sharing process is as valuable as sharing outcomes." },
    ],
    relatedIds:[3,6,7],
  },
  {
    id:6, date:"September 10, 2025", readTime:"4 min", views:"1.5k",
    Icon:Icons.MapPin, bg:"#0d2a3e",
    author:"Operations Team", authorRole:"Global Expansion", authorAvatar:"OT",
    category:"Company News",
    tags:["NEWS","EXPANSION"],
    title:" Waves Techno-Vision LLP Opens Brazilian Hub for Seamless, Nearshore Project Delivery",
    excerpt:"Our new São Paulo delivery hub strengthens nearshore capabilities for North American clients with timezone alignment and top-tier Brazilian talent.",
    body:"We are thrilled to announce the opening of our São Paulo delivery hub, our fourth office in Latin America. This expansion strengthens our nearshore capabilities for North American clients, offering timezone alignment, cultural compatibility, and access to Brazil's rapidly growing pool of world-class software engineers.\n\nThe hub will initially focus on full-stack development, data engineering, and QA automation, with plans to expand into AI/ML research by Q2 2026.",
    keyPoints:["Fourth LATAM office, first in Brazil","Full-stack, data engineering, and QA focus initially","AI/ML expansion planned for Q2 2026","Timezone alignment with entire North American market"],
    stats:[{label:"Time Zone",value:"EST-1"},{label:"Engineers",value:"50+"},{label:"Clients",value:"12"},{label:"Launch Q",value:"Q3'25"}],
    quote:"Brazil's engineering talent is world-class, and São Paulo gives us the best possible gateway into a market that is hungry for technology partnership.",
    quoteAuthor:"— Chief Operating Officer",
    sections:[
      { heading:"Why Brazil", text:"Brazil has one of the fastest-growing technology sectors in Latin America, with a deep pool of engineers trained in modern frameworks and cloud platforms. The country's time zones align almost perfectly with North American business hours, making real-time collaboration seamless." },
      { heading:"Services from São Paulo", text:"The hub will offer full-stack web and mobile development, cloud infrastructure engineering, data platform development, and QA automation services from day one, with an AI/ML specialisation team being recruited for a Q2 2026 launch." },
    ],
    relatedIds:[4,8,14],
  },
  {
    id:7, date:"August 14, 2025", readTime:"3 min", views:"2.2k",
    Icon:Icons.Award, bg:"#1a1a00",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["NEWS","AWARD"],
    title:" Waves Techno-Vision LLP Honoured as Software Company of the Year by the Netty Awards",
    excerpt:"The Netty Awards has recognised  Waves Techno-Vision LLP as Software Company of the Year, citing innovation, client satisfaction, and engineering excellence.",
    body:"We are proud to announce that  Waves Techno-Vision LLP has been recognised as Software Company of the Year at this year's Netty Awards, one of the most prestigious honours in the digital services industry. This recognition reflects our team's dedication to delivering exceptional software solutions across fintech, healthcare, logistics, and enterprise software.\n\nThe award committee cited our innovative approach to AI integration, client satisfaction scores, and our commitment to engineering excellence as distinguishing factors.",
    keyPoints:["Industry's most prestigious software company award","Recognised for AI integration leadership","Client NPS among the highest in the industry","500+ engineers contributing to the recognition"],
    stats:[{label:"Award Rank",value:"#1"},{label:"Client NPS",value:"72"},{label:"Projects/yr",value:"80+"},{label:"Engineers",value:"500+"}],
    quote:"This award belongs to every engineer, designer, and consultant who has poured their expertise into delivering for our clients. It is a team achievement.",
    quoteAuthor:"— CEO,  Waves Techno-Vision LLP",
    sections:[
      { heading:"About the Netty Awards", text:"The Netty Awards are presented annually to organisations demonstrating outstanding achievement in digital business, technology innovation, and client service excellence. Judges include senior executives from Fortune 500 companies, technology media, and independent industry analysts." },
      { heading:"Why This Recognition Matters", text:"Industry recognition serves as an independent validation of our quality standards and client outcomes. For prospective clients evaluating technology partners, awards like the Netty provide an additional layer of due diligence that complements client references and case studies." },
    ],
    relatedIds:[9,15,18],
  },
  {
    id:8, date:"July 31, 2025", readTime:"5 min", views:"1.1k",
    Icon:Icons.Flag, bg:"#001a2e",
    author:"Executive Team", authorRole:"Leadership", authorAvatar:"ET",
    category:"Company News",
    tags:["NEWS","UKRAINE"],
    title:"Ukraine's Tech Potential on Full Display as  Waves Techno-Vision LLP Takes Part in Key Diplomacy Forum",
    excerpt:"Our CEO presented Ukraine's case as a premier global technology hub at a 28-country diplomatic forum focused on post-war reconstruction.",
    body:"Representatives from  Waves Techno-Vision LLP joined senior Ukrainian government officials and technology leaders at a high-profile diplomatic forum focused on Ukraine's post-war economic reconstruction. Our CEO presented the case for Ukraine as a premier global technology talent hub, highlighting the country's engineering education system, growing startup ecosystem, and track record of delivering complex software for global enterprises.\n\nThe forum attracted delegates from 28 countries and resulted in several new international partnerships.",
    keyPoints:["28 countries represented at the forum","New international partnerships established","Ukraine's tech sector grew 30% despite wartime conditions"," Waves Techno-Vision LLP's Ukrainian team has expanded by 15% this year"],
    stats:[{label:"Countries",value:"28"},{label:"Tech Growth",value:"30%"},{label:"New Partners",value:"6"},{label:"Forum Year",value:"2025"}],
    quote:"Ukraine's technology community has demonstrated extraordinary resilience. The world is beginning to recognise that this resilience is matched by exceptional technical capability.",
    quoteAuthor:"— CEO,  Waves Techno-Vision LLP at the Diplomacy Forum",
    sections:[
      { heading:"The Forum's Significance", text:"This was one of the largest gatherings of technology and government leaders focused specifically on Ukraine's reconstruction economy. The forum produced a joint declaration supporting the development of Ukraine as a major global technology delivery hub." },
      { heading:" Waves Techno-Vision LLP's Role", text:"Our CEO was among five technology company leaders invited to present case studies of successful global delivery from Ukraine. The presentation highlighted our delivery model, talent pipeline, and the quality metrics our Ukrainian teams consistently achieve." },
    ],
    relatedIds:[11,12,16],
  },
  {
    id:9, date:"June 4, 2025", readTime:"2 min", views:"890",
    Icon:Icons.Star, bg:"#1a0d0d",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["NEWS"],
    title:" Waves Techno-Vision LLP Named to Techreviewer's Top 100 IT Services Companies of 2025",
    excerpt:"For the third consecutive year,  Waves Techno-Vision LLP earns a place on Techreviewer's prestigious Top 100 IT Services list.",
    body:"For the third consecutive year,  Waves Techno-Vision LLP has been included in Techreviewer's Top 100 IT Services Companies list. This recognition is based on a rigorous evaluation of service quality, client reviews, technical expertise, and market impact.\n\nWe are honoured to stand alongside the world's leading technology service providers, and this recognition energises our team to continue raising the bar for our clients globally.",
    keyPoints:["Third consecutive year on the Top 100","Evaluated on service quality and client reviews","One of 100 companies selected from 5,000+ reviewed","Recognition spans all core service areas"],
    stats:[{label:"Consecutive Years",value:"3"},{label:"Companies Reviewed",value:"5000+"},{label:"Selected",value:"100"},{label:"Client Score",value:"4.9/5"}],
    quote:"Consistency is the hallmark of great service. Three consecutive years on this list reflects our team's sustained commitment to excellence.",
    quoteAuthor:"— Managing Director",
    sections:[
      { heading:"About Techreviewer Rankings", text:"Techreviewer independently evaluates IT services companies globally based on client reviews, technical credentials, market presence, and delivery quality. The Top 100 list is considered one of the most objective rankings in the industry." },
    ],
    relatedIds:[7,15,18],
  },
  {
    id:10, date:"December 30, 2024", readTime:"9 min", views:"4.2k",
    Icon:Icons.TrendingUp, bg:"#0d2244",
    author:"Leadership Team", authorRole:"Executive", authorAvatar:"LT",
    category:"Company Updates",
    tags:["NEWS"],
    title:"Wrapping Up 2024: A Year of Growth, Innovation, and Global Impact",
    excerpt:"500+ engineers, two new delivery centres, 80+ client projects, and a deepened AI practice — 2024 was a landmark year.",
    body:"2024 was a landmark year for  Waves Techno-Vision LLP. We expanded our global team to over 500 engineers, opened two new delivery centres, and shipped more than 80 client projects. We deepened our AI capabilities, launching an internal AI practice with dedicated research and implementation teams.\n\nThis retrospective covers our biggest milestones, the challenges we overcame, the technologies we mastered, and our vision for 2025 and beyond.",
    keyPoints:["Team expanded to 500+ engineers globally","Two new delivery centres opened (Bogotá, Warsaw)","80+ client projects shipped in 2024","AI practice launched with dedicated R&D team"],
    stats:[{label:"Team Size",value:"500+"},{label:"Projects",value:"80+"},{label:"New Offices",value:"2"},{label:"Revenue Growth",value:"+42%"}],
    quote:"2024 tested our resilience and validated our strategy. We enter 2025 with a stronger team, deeper capabilities, and a clearer vision than ever before.",
    quoteAuthor:"— CEO, Year-End Message",
    sections:[
      { heading:"People & Culture Highlights", text:"We welcomed 120 new engineers across all our offices, expanded our leadership development programme, and achieved our best-ever scores in our bi-annual team satisfaction survey. Retention improved for the third consecutive year." },
      { heading:"Technology & Innovation", text:"Our AI practice delivered its first production AI systems for clients in healthcare and financial services. We invested in developer experience tooling that reduced our average time-to-deploy by 35%. Our internal AI coding assistant is now used by 60% of our engineering team daily." },
      { heading:"Client Success", text:"Client NPS reached 72, up from 65 in 2023. We onboarded 18 new enterprise clients and expanded engagements with 12 existing clients. Three clients published independent case studies recognising our contributions to their digital transformation." },
      { heading:"Looking Ahead to 2025", text:"Our priorities for 2025 include deepening our AI delivery capabilities, expanding our presence in the Nordic market, launching a dedicated healthcare IT practice, and continuing to invest in the engineering culture that makes  Waves Techno-Vision LLP a destination for top talent." },
    ],
    relatedIds:[11,12,14],
  },
  {
    id:11, date:"September 20, 2024", readTime:"6 min", views:"1.7k",
    Icon:Icons.TrendingUp, bg:"#0a1a2e",
    author:"Nordic Practice Team", authorRole:"Regional Lead", authorAvatar:"NP",
    category:"Case Study",
    tags:["NEWS"],
    title:"How  Waves Techno-Vision LLP is Driving Norwegian Digital Transformation: Part 2",
    excerpt:"Outcomes and lessons from our Norwegian public sector partnerships — concrete improvements in citizen experience and operational efficiency.",
    body:"In the second part of our Norwegian Digital Transformation series, we examine the outcomes of our partnerships with three of Norway's largest public sector organisations. From digitising healthcare record systems to modernising municipal services platforms, our Norwegian practice has delivered measurable improvements in citizen experience and operational efficiency.\n\nWe share key lessons learned and the technical decisions that made the difference.",
    keyPoints:["Healthcare record digitisation reduced admin time by 65%","Municipal platform serving 2M+ citizens launched on schedule","Public sector delivery requires specialised compliance expertise","Norwegian government is one of Europe's most ambitious digitalisers"],
    stats:[{label:"Admin Reduction",value:"65%"},{label:"Citizens Served",value:"2M+"},{label:"On-time Delivery",value:"100%"},{label:"Projects",value:"3"}],
    quote:"Norway's digital ambitions are matched by a genuine willingness to invest in quality. It has been one of our most rewarding partnerships.",
    quoteAuthor:"— Nordic Practice Lead",
    sections:[
      { heading:"Healthcare Record Modernisation", text:"Our largest Norwegian engagement involved migrating a fragmented healthcare record system serving 400,000 patients to a modern, cloud-hosted platform with full FHIR compliance and seamless integration with national health infrastructure." },
      { heading:"Municipal Services Platform", text:"We rebuilt a digital services platform for one of Norway's largest municipalities, serving over two million citizens. The new platform consolidated 14 separate systems into a single, accessible interface with full digital accessibility compliance." },
    ],
    relatedIds:[8,10,12],
  },
  {
    id:12, date:"September 20, 2024", readTime:"6 min", views:"1.6k",
    Icon:Icons.TrendingUp, bg:"#0a1a2e",
    author:"Nordic Practice Team", authorRole:"Regional Lead", authorAvatar:"NP",
    category:"Case Study",
    tags:["NEWS"],
    title:"How  Waves Techno-Vision LLP is Driving Norwegian Digital Transformation: Part 1",
    excerpt:"An overview of Norway's digitalisation strategy and how our engineering practices meet the stringent requirements of Norwegian government procurement.",
    body:"Norway has set ambitious targets for digital government services, and  Waves Techno-Vision LLP is proud to be a key technology partner in this journey. This first article in our series provides an overview of Norway's digitalisation strategy, the unique challenges of public sector software delivery, and how our teams have adapted our engineering practices to meet the stringent requirements of Norwegian government procurement.\n\nUpcoming articles will dive deep into specific projects and their outcomes.",
    keyPoints:["Norway targets 90% digital government services by 2026","Public sector procurement requires ISO 27001 and Statsbygg compliance","Our Norwegian practice has 25 dedicated engineers","Norwegian digital strategy is funded by sovereign wealth resources"],
    stats:[{label:"Digital Target",value:"90%"},{label:"Deadline",value:"2026"},{label:"Engineers",value:"25"},{label:"Partners",value:"4"}],
    quote:"Norway is a blueprint for how governments can approach digital transformation — ambitious, well-funded, and genuinely committed to citizen-centric design.",
    quoteAuthor:"— Country Manager, Norway",
    sections:[
      { heading:"Norway's Digital Ambition", text:"Norway's government has committed to having 90% of all government services fully digital by 2026, backed by some of the most generous public sector technology investment in Europe. This creates an extraordinary opportunity for technology partners who can navigate public sector procurement." },
      { heading:"Building Our Norwegian Practice", text:"Establishing a strong presence in the Norwegian market required investment in compliance certifications, local partnerships, and engineers with Norwegian language skills and cultural understanding. We spent 18 months building the foundation before winning our first major contract." },
    ],
    relatedIds:[8,10,11],
  },
  {
    id:13, date:"August 2, 2024", readTime:"10 min", views:"5.1k",
    Icon:Icons.Upload, bg:"#1a0d2e",
    author:"Cloud Practice Team", authorRole:"Principal Architects", authorAvatar:"CP",
    category:"Technical Guide",
    tags:["BUSINESS","CUSTOM SOFTWARE DEVELOPMENT","NEWS","TECH TRENDS"],
    title:"Cloud Migration: Best Practices of Seamless Migration",
    excerpt:"A comprehensive guide to planning and executing cloud migrations — from workload assessment to post-migration optimisation.",
    body:"Cloud migration remains one of the most complex and high-stakes undertakings in enterprise technology. In this comprehensive guide, we share the frameworks, tools, and decision-making processes our teams use to plan and execute migrations for clients across industries.\n\nTopics covered include workload assessment, provider selection, migration strategy selection (rehost, replatform, refactor), risk mitigation, and post-migration optimisation. Real-world examples from financial services and healthcare migrations are included throughout.",
    keyPoints:["The 6 Rs of migration: Rehost, Replatform, Refactor, Re-purchase, Retire, Retain","Workload assessment is the most underinvested phase","Security architecture must be redesigned, not migrated","Post-migration optimisation delivers 20-30% additional cost savings"],
    stats:[{label:"Avg. Cost Saving",value:"35%"},{label:"Migration Time",value:"-40%"},{label:"Post-Opt Saving",value:"25%"},{label:"Success Rate",value:"94%"}],
    quote:"Migration is not a project with an end date — it is the beginning of a new operational model. Teams that treat it as a one-time event consistently underperform.",
    quoteAuthor:"— Principal Cloud Architect",
    sections:[
      { heading:"Phase 1: Discovery and Assessment", text:"Every successful migration begins with an honest, comprehensive inventory of what you have. This includes not just servers and applications, but interdependencies, data flows, compliance requirements, and the business criticality of each workload. Organisations that invest adequately in this phase consistently report smoother migrations." },
      { heading:"Choosing Your Migration Strategy", text:"The 6 Rs framework provides a structured approach to classifying workloads. Rehost (lift-and-shift) offers speed but limited cloud benefit. Replatform adds targeted cloud optimisations without full refactoring. Refactor delivers the highest cloud-native benefit but requires the most investment. Most enterprise migrations use all three strategies across different workload types." },
      { heading:"Managing Migration Risk", text:"Risk management in cloud migration requires parallel running periods, robust rollback procedures, comprehensive monitoring, and clear escalation paths. Our risk framework includes pre-migration testing environments, staged cutover procedures, and a 24/7 operations team during critical migration windows." },
      { heading:"Post-Migration Optimisation", text:"Most organisations see their greatest cloud value not at migration completion, but 6-12 months later during optimisation. Right-sizing compute resources, implementing reserved instances, and adopting cost allocation tagging typically deliver 20-30% additional savings beyond the initial migration benefits." },
    ],
    relatedIds:[1,4,16],
  },
  {
    id:14, date:"July 22, 2024", readTime:"5 min", views:"2.8k",
    Icon:Icons.User, bg:"#042c44",
    author:"Editorial Team", authorRole:"Company Blog", authorAvatar:"ED",
    category:"Leadership",
    tags:["NEWS"],
    title:" Waves Techno-Vision LLP Quarter Updates:  Waves Techno-Vision LLP's Journey with CEO Olga Kavunenko",
    excerpt:"CEO Olga Kavunenko shares her reflections on scaling a global technology firm and building an engineering culture that attracts top talent.",
    body:"In our Q2 2024 leadership update, CEO Olga Kavunenko shares her reflections on  Waves Techno-Vision LLP's strategic priorities, the challenges of scaling a global technology firm, and her vision for the company's next chapter. Topics include talent strategy, AI investments, geographic expansion, and how we're building a culture that attracts and retains top engineering talent.\n\nOlga also addresses questions submitted by clients and team members from across our global offices.",
    keyPoints:["AI investments tripled in FY2024","Talent retention improved to 88% globally","Three new markets targeted for expansion","Engineering culture index reached all-time high"],
    stats:[{label:"AI Investment",value:"3×"},{label:"Retention",value:"88%"},{label:"NPS",value:"72"},{label:"Markets",value:"+3"}],
    quote:"The best engineering organisations are not built on processes — they are built on trust, autonomy, and a shared belief that the work matters.",
    quoteAuthor:"— Olga Kavunenko, CEO",
    sections:[
      { heading:"On AI Strategy", text:"We have been deliberate about where we invest in AI — both in our own operations and in the services we offer clients. We are not chasing every trend. We are investing deeply in the applications of AI that consistently deliver measurable client outcomes: code generation, test automation, data analytics, and intelligent process automation." },
      { heading:"On Talent and Culture", text:"The competition for engineering talent is fierce globally. We win on culture — on the quality of the work, the calibre of the teams, and the trust we extend to our engineers. Our retention improvements are a direct result of investments in engineering experience: better tooling, clearer career paths, and leadership development." },
    ],
    relatedIds:[10,17,7],
  },
  {
    id:15, date:"February 20, 2024", readTime:"3 min", views:"1.4k",
    Icon:Icons.Award, bg:"#0d1a00",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["NEWS"],
    title:" Waves Techno-Vision LLP Soars as a Rising Star on IAOP's Global Outsourcing 100 List!",
    excerpt:"IAOP's most prestigious ranking recognises  Waves Techno-Vision LLP as a Rising Star among the world's best outsourcing service providers.",
    body:" Waves Techno-Vision LLP has been recognised as a Rising Star on the prestigious IAOP Global Outsourcing 100 list, which ranks the world's best outsourcing service providers. This recognition is based on rigorous evaluation of capabilities, customer references, awards and certifications, and corporate social responsibility programmes.\n\nBeing named to this list validates our position as a trusted partner for organisations seeking high-quality global technology services.",
    keyPoints:["IAOP is the gold standard for outsourcing industry recognition","Rising Star designation reflects exceptional growth trajectory","Evaluated across 5 dimensions of excellence","Recognition opens doors to Global 2000 procurement processes"],
    stats:[{label:"Ranking Body",value:"IAOP"},{label:"Evaluation Dims",value:"5"},{label:"Companies Listed",value:"100"},{label:"Category",value:"Rising Star"}],
    quote:"The IAOP recognition is meaningful because it is peer-reviewed and based entirely on verifiable client outcomes. It is one of the industry's most credible validations.",
    quoteAuthor:"— Chief Business Development Officer",
    sections:[
      { heading:"What the IAOP Evaluates", text:"The IAOP ranking evaluates companies across five dimensions: client satisfaction, capabilities, management capabilities, global delivery, and innovation. The Rising Star category specifically recognises organisations with exceptional growth trajectories and strong upward trends in all evaluation dimensions." },
    ],
    relatedIds:[7,9,18],
  },
  {
    id:16, date:"January 22, 2024", readTime:"7 min", views:"3.3k",
    Icon:Icons.Globe, bg:"#0d1b3e",
    author:"Policy Team", authorRole:"Strategic Initiatives", authorAvatar:"PT",
    category:"Partnerships",
    tags:["AI","CONSULTING","CUSTOM SOFTWARE DEVELOPMENT","NEWS","TECH TRENDS"],
    title:"The UK-Ukraine TechBridge:  Waves Techno-Vision LLP Creates A Work Group To Build A Global Digital Infrastructure",
    excerpt:"A bilateral technology work group focused on talent mobility, joint AI research, and pathways for Ukrainian startups to access UK markets.",
    body:" Waves Techno-Vision LLP has established a new bilateral technology work group in partnership with UK-based organisations to create digital infrastructure bridges between the two countries. This initiative focuses on three pillars: talent mobility, joint research in AI and cybersecurity, and creating pathways for Ukrainian technology startups to access UK and European markets.\n\nThe work group includes representatives from government, academia, and leading technology companies on both sides.",
    keyPoints:["Three-pillar initiative: talent, research, and market access","Government, academia, and industry represented","Focus on AI and cybersecurity as primary research domains","Aimed at supporting Ukraine's long-term economic recovery"],
    stats:[{label:"Countries",value:"2"},{label:"Pillars",value:"3"},{label:"Members",value:"24"},{label:"Timeline",value:"3yr"}],
    quote:"Technology partnerships built in times of adversity tend to be the most durable. This work group is built on mutual respect and shared commitment.",
    quoteAuthor:"— Head of Strategic Partnerships",
    sections:[
      { heading:"Pillar 1: Talent Mobility", text:"The first pillar establishes frameworks for Ukrainian engineers to work on UK-based projects through structured talent exchange programmes, ensuring Ukrainian technology expertise reaches global markets while contributing to economic recovery." },
      { heading:"Pillar 2: Joint Research", text:"AI and cybersecurity have been identified as the primary research domains due to Ukraine's recognised excellence in both fields and the UK's strong research university ecosystem. Joint publications and patent applications are expected in the first 18 months." },
      { heading:"Pillar 3: Market Access", text:"Ukrainian technology startups face significant barriers to UK and European market entry. The work group is developing accelerator programmes, investor introduction frameworks, and regulatory navigation support to lower these barriers." },
    ],
    relatedIds:[8,11,12],
  },
  {
    id:17, date:"January 22, 2024", readTime:"2 min", views:"1.1k",
    Icon:Icons.UserPlus, bg:"#001a3e",
    author:"HR Team", authorRole:"People & Culture", authorAvatar:"HR",
    category:"Company News",
    tags:["NEWS"],
    title:" Waves Techno-Vision LLP Welcomes New Chief of Growth, Olga Kavunenko",
    excerpt:"Olga Kavunenko joins  Waves Techno-Vision LLP as Chief of Growth, bringing 15 years of enterprise technology sales and business development expertise.",
    body:"We are delighted to announce the appointment of Olga Kavunenko as Chief of Growth at  Waves Techno-Vision LLP. Olga brings 15 years of experience in technology sales and business development, with a particular focus on enterprise software and digital transformation consulting.\n\nIn her new role, Olga will lead our global go-to-market strategy, client acquisition, and partnership development. She will be based in our London office and will work closely with our regional teams across North America, Europe, and Asia.",
    keyPoints:["15 years enterprise technology experience","Previous roles at top-tier technology firms","Will lead global GTM strategy","Based in London, UK"],
    stats:[{label:"Experience",value:"15yrs"},{label:"Prior Roles",value:"3"},{label:"Markets Led",value:"4"},{label:"Start Date",value:"Q1'24"}],
    quote:"I am joining  Waves Techno-Vision LLP at an exciting inflection point — the company has built exceptional delivery capabilities, and now it is time to match that with world-class go-to-market execution.",
    quoteAuthor:"— Olga Kavunenko, Chief of Growth",
    sections:[
      { heading:"About Olga's Background", text:"Olga has spent her career at the intersection of enterprise technology and business strategy. Her previous roles included VP of Sales at a leading cloud services firm and Head of Business Development at a global digital transformation consultancy." },
    ],
    relatedIds:[14,10,7],
  },
  {
    id:18, date:"October 3, 2023", readTime:"3 min", views:"860",
    Icon:Icons.Shield, bg:"#1a1a4e",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["NEWS"],
    title:" Waves Techno-Vision LLP Earns Coveted Recognition from Private Community 50Pros",
    excerpt:"Membership in 50Pros — awarded by invitation only — places  Waves Techno-Vision LLP among the world's most trusted professional service firms.",
    body:" Waves Techno-Vision LLP has been awarded membership in 50Pros, an exclusive community of the world's top professional service firms. Membership is by invitation only and requires peer nomination followed by a rigorous vetting process covering service quality, client outcomes, and industry reputation.\n\nThis recognition places  Waves Techno-Vision LLP among a select group of firms trusted by the world's most sophisticated buyers of professional services.",
    keyPoints:["Invitation-only community of elite professional service firms","Peer-nominated and independently vetted","Access to exclusive industry intelligence and networking","Membership validates exceptional service quality"],
    stats:[{label:"Community Size",value:"50"},{label:"Selection Type",value:"Invite"},{label:"Vetting Months",value:"3"},{label:"Industry Rank",value:"Top 1%"}],
    quote:"50Pros membership is not applied for — it is earned through a track record that speaks for itself. We are proud to be among this distinguished group.",
    quoteAuthor:"— Chief Client Officer",
    sections:[
      { heading:"About 50Pros", text:"50Pros is a private community of professional services firms recognised for exceptional delivery quality and client outcomes. Members benefit from peer knowledge sharing, joint thought leadership, and access to a curated network of senior buyers across the Fortune 500." },
    ],
    relatedIds:[7,9,15],
  },
  {
    id:19, date:"March 5, 2021", readTime:"4 min", views:"2.1k",
    Icon:Icons.Award, bg:"#0a0a1e",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["BUSINESS","COMMUNITY","CUSTOM SOFTWARE DEVELOPMENT","NEWS"],
    title:" Waves Techno-Vision LLP Is Recognized as One of Highly-Rated Software Development B2B Companies in 2021 by Clutch",
    excerpt:"Clutch's verified client reviews place  Waves Techno-Vision LLP among the highest-rated software development companies globally for 2021.",
    body:"Clutch, the leading B2B ratings and reviews platform, has named  Waves Techno-Vision LLP among its highest-rated software development companies for 2021. This recognition is based entirely on verified client reviews, evaluating technical expertise, communication, project management, and overall satisfaction.\n\nWe are deeply grateful to our clients for taking the time to share their experiences, and we remain committed to the excellence that earned this recognition.",
    keyPoints:["100% verified client reviews basis","Evaluated on 4 key dimensions of delivery quality","One of the most objective third-party validations in the industry","Consistent recognition across multiple years"],
    stats:[{label:"Review Score",value:"4.9/5"},{label:"Reviews",value:"85+"},{label:"Evaluation Dims",value:"4"},{label:"Clutch Rank",value:"Top 5%"}],
    quote:"Clutch recognition matters because it is built on real client voices. Every review represents a relationship we have invested in and outcomes we are proud of.",
    quoteAuthor:"— VP of Client Success",
    sections:[
      { heading:"About Clutch Rankings", text:"Clutch independently verifies all client reviews through phone interviews, ensuring authenticity and accuracy. Their methodology weights recent reviews more heavily and considers consistency of performance over time, making it one of the most rigorous third-party evaluation systems in the industry." },
    ],
    relatedIds:[7,15,18],
  },
  {
    id:20, date:"March 3, 2021", readTime:"3 min", views:"1.9k",
    Icon:Icons.Smartphone, bg:"#0d2a3e",
    author:"Mobile Practice Team", authorRole:"Mobile Development", authorAvatar:"MP",
    category:"Awards",
    tags:["BUSINESS","COMMUNITY","MOBILE DEVELOPMENT","NEWS"],
    title:" Waves Techno-Vision LLP Received Two Influential Awards as One of Top Mobile App Development Companies",
    excerpt:"AppFutura and MobileAppDaily recognise  Waves Techno-Vision LLP among the global top tier for iOS and Android app development.",
    body:"We are proud to announce that  Waves Techno-Vision LLP has received two prestigious industry awards recognising our mobile app development practice. The awards, presented by AppFutura and MobileAppDaily, rank us among the global top-tier providers for iOS and Android development.\n\nOur mobile practice has delivered over 200 applications across healthcare, fintech, logistics, and entertainment, and these awards reflect the quality and innovation our team brings to every mobile engagement.",
    keyPoints:["Awards from AppFutura and MobileAppDaily","200+ mobile apps delivered across 4 industry verticals","iOS and Android recognised separately","Mobile practice is one of our longest-established services"],
    stats:[{label:"Apps Delivered",value:"200+"},{label:"Awards",value:"2"},{label:"Platforms",value:"iOS+Android"},{label:"App Store Rating",value:"4.8"}],
    quote:"Mobile excellence requires obsessive attention to performance, usability, and the countless edge cases that separate good apps from great ones.",
    quoteAuthor:"— Head of Mobile Practice",
    sections:[
      { heading:"Our Mobile Delivery Model", text:"Our mobile practice operates on a platform-first principle: we build robust, reusable component architectures that enable faster delivery and more consistent quality across engagements. This approach has allowed us to scale our mobile practice without sacrificing the craftsmanship that our clients expect." },
    ],
    relatedIds:[3,5,19],
  },
  {
    id:21, date:"February 25, 2021", readTime:"3 min", views:"1.3k",
    Icon:Icons.Star, bg:"#2a0d1a",
    author:"PR Team", authorRole:"Communications", authorAvatar:"PR",
    category:"Awards",
    tags:["BUSINESS","COMMUNITY","CUSTOM SOFTWARE DEVELOPMENT","NEWS"],
    title:" Waves Techno-Vision LLP Hits TheManifest's Prestigious Award: Top 100 Software Development Companies",
    excerpt:"TheManifest places  Waves Techno-Vision LLP among the Top 100 Software Development Companies globally, recognising visibility and verified client reviews.",
    body:"TheManifest has named  Waves Techno-Vision LLP to its list of Top 100 Software Development Companies globally. This recognition is based on a combination of company visibility, verified reviews, and demonstrated technical capabilities.\n\nBeing included in this list reflects our consistent delivery of complex software projects and our reputation for technical excellence in the global software development community.",
    keyPoints:["Top 100 from thousands of evaluated companies","Based on visibility, reviews, and capabilities","Consistent recognition builds cumulative industry credibility","Complements Clutch and IAOP recognitions"],
    stats:[{label:"Global Rank",value:"Top 100"},{label:"Companies Eval.",value:"5000+"},{label:"Criteria",value:"3"},{label:"Category",value:"Custom SW"}],
    quote:"Being recognised by multiple independent platforms simultaneously is meaningful — it confirms that our reputation is consistent across different evaluation methodologies.",
    quoteAuthor:"— Chief Marketing Officer",
    sections:[
      { heading:"About TheManifest", text:"TheManifest is a B2B resource that compiles, analyses, and organises companies to help buyers find technology partners. Their rankings combine algorithmic analysis of online presence with manual review of client testimonials and verified project portfolios." },
    ],
    relatedIds:[7,19,15],
  },
];

// ---------- Main NewsGrid Component (with callbacks) ----------
export default function NewsGrid({ filteredArticles, onDetailOpen, onDetailClose }) {
  const articles = filteredArticles ?? ALL_ARTICLES;
  const [visible, setVisible] = useState(6);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [hovLoad, setHovLoad] = useState(false);
  const totalPages = Math.ceil(articles.length / 6);
  const displayed = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  function openArticle(art) {
    setSelected(art);
    onDetailOpen?.(true);         // notify parent: detail opened
    window.scrollTo({ top:0, behavior:"smooth" });
  }
  function handleBack() {
    setSelected(null);
    onDetailClose?.(false);       // notify parent: detail closed
    window.scrollTo({ top:0, behavior:"smooth" });
  }
  function handleLoadMore() {
    setVisible(Math.min(visible+6, articles.length));
    setPage(Math.ceil(visible/6)+1);
  }
  function handlePage(p) {
    setPage(p);
    setVisible(p*6);
    window.scrollTo({ top:0, behavior:"smooth" });
  }

  return (
    <DarkBackground>
      <AnimatePresence mode="wait">
        {selected ? (
          <ArticleDetail
            key={`detail-${selected.id}`}
            article={selected}
            allArticles={articles}
            onBack={handleBack}
            onOpen={openArticle}
          />
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.3 }}
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "clamp(32px,5vw,64px) clamp(16px,5vw,48px)",
            }}
          >
            <nav style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"rgba(255,255,255,0.5)", marginBottom:32 }}>
              <span style={{ color:"rgba(255,255,255,0.8)" }}>Home</span><Icons.ChevronRight/><span>Blog</span><Icons.ChevronRight/><span style={{ color:"white", fontWeight:600 }}>News</span>
            </nav>
            <div style={{ marginBottom:40 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:4, height:32, background:ACCENT, borderRadius:2 }}/>
                <h1 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:900, color:"white", letterSpacing:"-0.02em", margin:0 }}>Latest News</h1>
              </div>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", marginTop:12, marginLeft:16 }}>{articles.length} articles · Showing {Math.min(visible,articles.length)} of {articles.length}</p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"24px", marginBottom:48 }}>
              {displayed.map(a=><ArticleCard key={a.id} article={a} onOpen={openArticle}/>)}
            </div>

            {hasMore && (
              <div style={{ textAlign:"center", marginBottom:32 }}>
                <button onClick={handleLoadMore} onMouseEnter={()=>setHovLoad(true)} onMouseLeave={()=>setHovLoad(false)}
                  style={{ background:"none", border:"none", color: hovLoad?ACCENT:"rgba(255,255,255,0.7)", fontSize:13, fontWeight:600, cursor:"pointer", display:"inline-flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                  Load more <span style={{ transform:hovLoad?"translateY(2px)":"translateY(0)" }}><Icons.ChevronDown/></span>
                </button>
              </div>
            )}

            <div style={{ display:"flex", justifyContent:"center", gap:8, flexWrap:"wrap" }}>
              {Array.from({length:totalPages},(_,i)=>i+1).map(p=>(
                <button key={p} onClick={()=>handlePage(p)} style={{ width:36, height:36, borderRadius:10, border:p===page?"none":"1px solid rgba(255,255,255,0.2)", background:p===page?`linear-gradient(135deg,#185FA5,${ACCENT})`:"transparent", color:p===page?"white":"rgba(255,255,255,0.6)", fontWeight:600, cursor:"pointer", transition:"all 0.2s", transform:p===page?"scale(1.05)":"scale(1)" }}>{p}</button>
              ))}
              {page<totalPages && (
                <button onClick={()=>handlePage(page+1)} style={{ background:"none", border:"none", color:ACCENT, fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", gap:4 }}>Next <Icons.ChevronRight/></button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </DarkBackground>
  );
}