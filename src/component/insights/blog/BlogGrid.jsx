import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  BLOG GRID + ARTICLE DETAIL — Premium Edition               ║
 ║  Now supports hiding parent header via callbacks            ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const BLUE      = "#3b82f6";
const BLUE_LITE = "#60a5fa";
const E         = [0.22, 1, 0.36, 1];

/* ─── Mini SVG icons ─── */
const Ic = {
  ArrowLeft:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  ArrowRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Clock:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="13" height="13"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Tag:        () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="13" height="13"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Share:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  Bookmark:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  Check:      () => <svg viewBox="0 0 24 24" fill="none" stroke={BLUE_LITE} strokeWidth="2" width="15" height="15"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  ChevronR:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><polyline points="9 18 15 12 9 6"/></svg>,
  Down:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M7 2v10M3 8l4 4 4-4"/></svg>,
};

/* ─── Tag colour map ─── */
const TAG_COLORS = {
  AI: "#8b5cf6", DATA: "#06b6d4", NEWS: "#3b82f6",
  FINTECH: "#10b981", BANKING: "#0ea5e9", BUSINESS: "#f59e0b",
  DESIGN: "#ec4899", HEALTHCARE: "#14b8a6", OUTSOURCING: "#6366f1",
  OUTSTAFFING: "#a78bfa", "CUSTOM SOFTWARE DEVELOPMENT": "#3b82f6",
  "TECH TRENDS": "#f97316", COMMUNITY: "#34d399", "DEDICATED TEAM": "#60a5fa",
  CLOUD: "#0ea5e9", ENTERPRISE: "#f59e0b", BLOCKCHAIN: "#8b5cf6",
};
const tagColor = t => TAG_COLORS[t] || BLUE;

/* ─── All posts ─── */
const ALL_POSTS = [
  {
    id: 1, date: "June 9, 2026", readTime: "8 min", author: "Alex Morgan", authorRole: "Cloud Architect", authorInitials: "AM",
    title: "Banking on the Hybrid Cloud: What Big Banks Can Learn from Neobanks",
    excerpt: "Neobanks have reshaped the competitive landscape. Here's the hybrid cloud playbook traditional banks must adopt to keep pace.",
    tags: ["NEWS", "CLOUD", "FINTECH"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    body: `Ever since neobanks appeared on the scene, big banks have had to come to terms with a new competitor. Neobanks are glorified mobile-first banks that have a far more agile approach to customer service, allowing them to offer a much more personalized touch to their clients' query resolution.

For big banks, new strategic changes such as embracing a hybrid cloud model as an agile IT backbone shift are imperative. They now need to capture the most agile, cloud-empowered banking services that neobanks offer.

A bank hybrid cloud is an IT architecture that integrates a private cloud (on-premises, proprietary infrastructure) with a public cloud (a third-party-provided service). This gives banks the security and control of on-premise systems for core operations while leveraging public cloud scalability for customer-facing apps.

Market analysis estimates that the cloud finance industry will be worth over USD 51 billion in 2026, with projections to reach roughly USD 217 billion by 2034. This denotes a 19.78% CAGR over the next 9 years.

New entrants in the market, such as Revolut, Nubank, and Monzo, have completely altered the banking industry with their rapid growth and technology-focused strategies. With these changes, existing banking giants have something new to observe and rethink their strategies.

JPMorgan Chase devoted resources to Agile and DevOps practices, achieving over a 70% increase in code deployment within two years. Nubank scaled to over 100 million customers in seven years for a remarkably low cost per customer — crediting cloud architecture for permitting industry-leading data processing and personalization.`,
    keyPoints: [
      "Hybrid cloud lets banks balance security (private) with agility and cost-efficiency (public)",
      "Neobanks like Revolut and Nubank show how cloud-native architecture enables rapid scaling",
      "JPMorgan increased deployment velocity 70%+ after adopting agile and cloud practices",
      "FinOps and governance are essential to control costs and avoid cloud sprawl",
    ],
    stats: [{ label: "Cloud Finance 2034", value: "$217B" }, { label: "CAGR", value: "19.78%" }, { label: "On Hybrid Cloud", value: "82%" }, { label: "Deployment Uplift", value: "70%" }],
    quote: "The hybrid cloud is not a compromise — it's the strategic bridge that allows banks to innovate at the pace of fintech while protecting decades of institutional trust.",
    quoteAuthor: "— Alex Morgan, Cloud Architect",
  },
  {
    id: 2, date: "June 5, 2026", readTime: "6 min", author: "Pavlo Rudenko", authorRole: "Solution Architect", authorInitials: "PR",
    title: "AI Product Catalogs: Turning Manufacturer Documents into Searchable Knowledge",
    excerpt: "Manufacturers are sitting on vast, unstructured documentation. AI-powered catalogs transform that dead weight into live, searchable intelligence.",
    tags: ["AI"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    body: `Manufacturers generate enormous volumes of documentation — spec sheets, CAD files, compliance certificates, installation guides — that sit in scattered systems, unindexed and unsearchable. AI product catalogs change that entirely.

Modern large language models, combined with retrieval-augmented generation (RAG) architectures, can ingest thousands of PDFs and technical documents and expose them through a natural language interface. A procurement officer can ask "what's the maximum operating temperature of part SKU-4471?" and receive an instant, cited answer drawn from the original datasheet.

The business impact is significant. Sales cycles shorten when reps can answer technical questions instantly. Customer satisfaction improves when self-service portals actually work. Engineering teams spend less time answering repetitive documentation queries.

Implementation requires careful attention to document parsing quality, embedding model selection, and retrieval pipeline design. Poorly structured PDFs require pre-processing pipelines. Multilingual catalogs need language-aware indexing.

The organisations seeing the greatest return are those who treat the AI catalog as a living system — continuously ingesting new documents, monitoring retrieval accuracy, and iterating on the interface based on real user queries.`,
    keyPoints: [
      "RAG architectures enable natural language queries against unstructured manufacturer docs",
      "Sales cycles shorten when technical questions are answered instantly",
      "Document pre-processing quality is the most common implementation bottleneck",
      "Treating the catalog as a living system drives compounding returns",
    ],
    stats: [{ label: "Query Resolution", value: "94%" }, { label: "Support Tickets", value: "-60%" }, { label: "Docs Indexed", value: "10k+" }, { label: "Languages", value: "12" }],
    quote: "The catalog is not a database. It is a knowledge system. The difference is that a database answers questions it was designed for. A knowledge system answers questions nobody anticipated.",
    quoteAuthor: "— Pavlo Rudenko, Solution Architect",
  },
  {
    id: 3, date: "May 15, 2026", readTime: "5 min", author: "Sarah Chen", authorRole: "AI Practice Lead", authorInitials: "SC",
    title: "AI in Software Development: Launch Faster, Cut Time to Market by 40%",
    excerpt: "AI coding assistants, automated testing, and intelligent PR review are compressing the software delivery lifecycle. Here's the real-world evidence.",
    tags: ["AI"],
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    body: `The promise of AI-assisted development is not theoretical. Engineering teams that have systematically adopted AI tooling across the SDLC are reporting consistent, measurable gains in delivery velocity — with the most disciplined adopters cutting time-to-market by 40% or more.

The gains come from multiple compounding sources. AI code completion (GitHub Copilot, Cursor, Tabnine) reduces the time spent on boilerplate and routine implementations. AI-assisted code review catches issues earlier and at lower cost than traditional review cycles. AI-generated test cases increase coverage while reducing the time engineers spend writing repetitive test code.

The teams seeing the greatest gains share two characteristics: they invest in prompt engineering as a first-class skill, and they establish clear guidelines for when to use AI-generated code versus when human judgment is non-negotiable (security-critical paths, novel algorithms, compliance-sensitive logic).

The teams seeing the least benefit are those who adopted AI tools without changing workflows — adding Copilot to an existing process rather than redesigning the process around AI augmentation.

The next frontier is AI-assisted architecture decision-making: tools that analyse codebases, identify technical debt, propose refactoring strategies, and simulate the impact of architectural changes before a line of code is written.`,
    keyPoints: [
      "AI tooling across the SDLC can reduce time-to-market by 40%",
      "Prompt engineering is a first-class engineering skill in high-performing teams",
      "AI should augment human judgment, not replace it in security-critical paths",
      "Process redesign around AI yields far better results than tool addition alone",
    ],
    stats: [{ label: "Time-to-Market", value: "-40%" }, { label: "Test Coverage", value: "+35%" }, { label: "PR Review Time", value: "-55%" }, { label: "Defect Rate", value: "-28%" }],
    quote: "AI doesn't replace engineers. It eliminates the friction that stops engineers from doing their best work.",
    quoteAuthor: "— Sarah Chen, AI Practice Lead",
  },
  {
    id: 4, date: "May 14, 2026", readTime: "7 min", author: "Marcus Williams", authorRole: "Head of Consulting", authorInitials: "MW",
    title: "What Defines IT Outsourcing Price and How to Optimize Your Costs",
    excerpt: "From talent geography to engagement model, the levers that determine outsourcing cost are not always where buyers look first.",
    tags: ["BUSINESS", "CUSTOM SOFTWARE DEVELOPMENT", "OUTSTAFFING"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    body: `IT outsourcing pricing is one of the most misunderstood areas in enterprise procurement. Buyers often fixate on blended hourly rates while overlooking the total cost drivers that have far greater impact on overall engagement economics.

The primary cost levers are: talent geography (a $45/hour nearshore engineer may deliver better value than a $28/hour offshore equivalent if timezone alignment eliminates 3 hours of daily coordination overhead), engagement model (fixed-price contracts carry a premium for a reason — the vendor prices in uncertainty), team composition (senior-heavy teams cost more per hour but typically deliver 2-3x the output of junior-heavy alternatives), and transition costs (overlooked in every initial budget but often 15-20% of total engagement cost).

The organisations that consistently optimise outsourcing costs share a discipline: they measure total cost of engagement, not hourly rate. They track velocity, defect rates, and rework — the hidden costs that hourly rate comparisons never surface.

Nearshore models (Latin America, Eastern Europe) have emerged as the sweet spot for North American and Western European clients: English proficiency, cultural alignment, timezone overlap, and rates 30-50% below comparable US or UK hiring costs.

The single highest-leverage optimisation is investment in onboarding quality. Vendors consistently report that clients who invest 2-3x the typical onboarding time see sustained productivity 40-50% higher across the engagement lifetime.`,
    keyPoints: [
      "Total cost of engagement — not hourly rate — is the correct optimisation target",
      "Timezone alignment has measurable ROI that raw rate comparisons miss entirely",
      "Senior-heavy teams cost more per hour but deliver 2-3× the output",
      "Onboarding quality is the single highest-leverage cost optimisation",
    ],
    stats: [{ label: "Nearshore Saving", value: "40%" }, { label: "Transition Cost", value: "15-20%" }, { label: "Senior Multiplier", value: "3×" }, { label: "Onboarding ROI", value: "50%" }],
    quote: "The cheapest hourly rate and the lowest total engagement cost are almost never the same number. The gap between them is where outsourcing relationships fail.",
    quoteAuthor: "— Marcus Williams, Head of Consulting",
  },
  {
    id: 5, date: "May 13, 2026", readTime: "9 min", author: "Diana Rodriguez", authorRole: "Data Practice Lead", authorInitials: "DR",
    title: "Top 10 Custom Software Development Companies in the USA for Big Data Enterprise Solutions",
    excerpt: "Evaluating the market's best for complex data engineering, real-time analytics platforms, and enterprise-scale data architecture.",
    tags: ["DATA"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    body: `Enterprise big data engagements are among the most technically complex and economically significant in the software development market. The stakes are high: poorly architected data platforms produce misleading analytics, collapse under load, and create regulatory exposure.

Selecting a development partner for big data work requires evaluation across five dimensions: data engineering depth (the ability to build and maintain reliable ingestion pipelines at scale), cloud platform expertise (AWS, Azure, GCP — and critically, multi-cloud architectures), real-time processing capability (Apache Kafka, Flink, Spark Streaming), data governance and security posture, and the ability to bridge technical architecture with business intelligence requirements.

The best partners in this space share a common characteristic: they have delivered production data platforms that process billions of events per day, not just built proof-of-concepts. The gap between POC and production in big data is larger than in almost any other software category.

When evaluating partners, ask for architecture review sessions rather than just case studies. A company that can discuss tradeoffs in Lambda vs Kappa architectures, explain why they chose a specific serialisation format, or articulate the cost implications of their storage tiering strategy is demonstrably different from one that presents slides.

The US market leaders combine deep data engineering capability with domain expertise in the verticals where data complexity is highest: financial services, healthcare, e-commerce, and logistics.`,
    keyPoints: [
      "Evaluate across five dimensions: engineering depth, cloud expertise, real-time capability, governance, and BI bridge",
      "Production track record at scale is the key differentiator — not POC delivery",
      "Architecture review sessions reveal more than case studies",
      "Domain expertise in data-intensive verticals is a critical selection criterion",
    ],
    stats: [{ label: "Events/day", value: "10B+" }, { label: "Latency (P99)", value: "<50ms" }, { label: "Data Quality", value: "99.9%" }, { label: "Cloud Platforms", value: "3" }],
    quote: "The best data platform is not the most sophisticated one — it is the one that answers the business's questions reliably, at the speed the business needs, within a budget the business can sustain.",
    quoteAuthor: "— Diana Rodriguez, Data Practice Lead",
  },
  {
    id: 6, date: "May 8, 2026", readTime: "6 min", author: "Elena Kovacs", authorRole: "Healthcare IT Lead", authorInitials: "EK",
    title: "Top 10 Healthcare Data Analytics Companies Leading the Vertical in 2026",
    excerpt: "The healthcare analytics market is maturing rapidly. These are the firms setting the standard for clinical intelligence, population health, and operational analytics.",
    tags: ["BUSINESS", "HEALTHCARE"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    body: `Healthcare data analytics has moved from a nice-to-have to a clinical and operational imperative. Hospitals using advanced analytics report 15-25% reductions in readmission rates, 20-30% improvements in bed utilisation, and measurable gains in clinical outcomes for high-risk patient populations.

The leading companies in this space share several characteristics: HIPAA and HITRUST compliance as a baseline (not a differentiator), deep HL7 FHIR integration capability, the ability to work with both structured EHR data and unstructured clinical notes, and increasingly, AI-powered predictive models for clinical risk stratification.

The most significant technical challenge in healthcare analytics is not computation — it is data integration. A large health system may have 15-20 separate source systems: EHR, PACS, pharmacy, billing, patient portal, lab, and more. Each uses different standards, different data models, and different update frequencies. The companies that have built scalable healthcare data integration pipelines have a substantial competitive advantage.

Emerging capability areas include: ambient clinical documentation (AI that listens to patient-physician conversations and generates structured clinical notes), predictive sepsis and deterioration models, population health management platforms, and real-world evidence generation for life sciences clients.

The intersection of LLMs with clinical data is producing the most interesting new capabilities: tools that can synthesise a patient's entire medical history across fragmented records, flag medication interactions, and surface relevant clinical research — all within the EHR workflow.`,
    keyPoints: [
      "Advanced analytics reduces hospital readmissions by 15-25% in documented cases",
      "Data integration across 15-20 source systems is the hardest technical problem",
      "FHIR compliance is now a baseline requirement, not a differentiator",
      "LLMs applied to clinical data are producing genuinely novel capabilities",
    ],
    stats: [{ label: "Readmission Reduction", value: "25%" }, { label: "Bed Utilisation", value: "+30%" }, { label: "Source Systems", value: "15-20" }, { label: "FHIR Adoption", value: "78%" }],
    quote: "Healthcare analytics saves lives. That is not hyperbole — every percentage point improvement in sepsis prediction translates to real patients who survive.",
    quoteAuthor: "— Elena Kovacs, Healthcare IT Lead",
  },
  {
    id: 7, date: "April 29, 2026", readTime: "7 min", author: "James Okonkwo", authorRole: "BI Practice Lead", authorInitials: "JO",
    title: "Why Power BI AI Fails Without a Solid Architecture",
    excerpt: "AI-powered dashboards fail not because of the AI — but because of the data infrastructure underneath.",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    body: `Artificial intelligence features in Power BI promise transformative analytics capabilities, but many enterprise deployments fail to deliver measurable value. The root cause is almost always architectural: poor data modeling, inconsistent data quality, and absence of a governed data layer.

The most common failure pattern is the direct-query anti-pattern: connecting Power BI AI features directly to transactional databases or poorly modeled data warehouses. AI capabilities that work beautifully on well-structured semantic models produce misleading or contradictory results on raw transactional data.

Star schema modeling is not optional for AI-powered analytics. The AI Q&A feature, copilot capabilities, and smart narrative generation all depend on clearly defined fact tables, dimension tables, and established relationships. Organisations that invest in proper dimensional modeling before enabling AI features report 60% better AI response accuracy.

The second most common failure is the governance gap: multiple teams building Power BI reports from different data sources, with different metric definitions, producing dashboards that contradict each other. When users distrust the data, AI features become actively harmful — confident-sounding wrong answers erode analytical culture faster than no AI at all.

The organisations extracting real value from Power BI AI have three things in common: a governed semantic layer (either Power BI datasets or an enterprise data catalog), a clear data quality framework with ongoing monitoring, and an incremental adoption strategy that builds user trust before expanding AI feature usage.`,
    keyPoints: [
      "70% of Power BI AI failures trace to data quality and modeling issues",
      "Star schema modeling improves AI query accuracy by 60%",
      "A governed semantic layer is the highest-ROI investment before enabling AI",
      "Contradictory dashboards destroy analytical culture faster than no AI at all",
    ],
    stats: [{ label: "Failure Root Cause", value: "70%" }, { label: "Accuracy Gain", value: "60%" }, { label: "Data Waste", value: "40%" }, { label: "Time to Value", value: "-3mo" }],
    quote: "The most sophisticated AI model cannot compensate for inconsistent, ungoverned data. Architecture is not a technical detail — it is the product.",
    quoteAuthor: "— James Okonkwo, BI Practice Lead",
  },
  {
    id: 8, date: "April 28, 2026", readTime: "6 min", author: "Sasha Mokii", authorRole: "Design Director", authorInitials: "SM",
    title: "AI-Driven Design and the New Speed of Product Development",
    excerpt: "Generative AI is compressing the product design lifecycle from weeks to days — here's what that means for your team.",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    body: `Generative AI is fundamentally reshaping the product design lifecycle. Teams that once required weeks to move from wireframe to prototype are now delivering polished, tested interfaces in days.

AI-augmented design workflows follow a pattern: rapid ideation with generative tools, component-level refinement by experienced designers, automated consistency checks against the design system, and compressed user testing cycles using AI-synthesised personas and feedback.

The tools reshaping the landscape — Figma AI, purpose-built design AI assistants, and code generation from design files — are becoming standard in high-performing product teams. The organisations investing in prompt engineering skills for their design teams are seeing disproportionate productivity gains.

But the most challenging aspect of AI-driven design is not technological adoption — it is cultural change. Designers must evolve from pixel-pushers to systems thinkers who can direct AI effectively, validate its outputs critically, and focus human creativity where it matters most: the genuinely novel problems AI cannot solve.

The design teams winning with AI share one discipline: they use AI to eliminate the repetitive and formulaic, not to replace the strategic. Competitive analysis, accessibility auditing, component documentation, and design QA are being substantially automated. Concept exploration, user research synthesis, and design strategy remain firmly human.`,
    keyPoints: [
      "AI tools reduce wireframe-to-prototype time by 80% in optimised workflows",
      "Prompt engineering is a first-class design skill in leading product teams",
      "Cultural change is harder than technology adoption for most design organisations",
      "AI handles repetitive work; humans focus on genuinely novel design problems",
    ],
    stats: [{ label: "Speed Increase", value: "80%" }, { label: "Design Debt", value: "-45%" }, { label: "Team Velocity", value: "4×" }, { label: "User Satisfaction", value: "+32%" }],
    quote: "AI doesn't replace designers — it amplifies them. The teams winning with AI are those who use it to eliminate the repetitive and focus human creativity where it matters most.",
    quoteAuthor: "— Sasha Mokii, Design Director",
  },
  {
    id: 9, date: "April 27, 2026", readTime: "8 min", author: "Nadia Patel", authorRole: "Legacy Modernisation Lead", authorInitials: "NP",
    title: "Reliable Legacy Software Modernization Companies You Can Trust in 2026",
    excerpt: "The legacy modernisation market is crowded with vendors who claim expertise they lack. Here's how to evaluate partners who can actually deliver.",
    tags: ["BUSINESS", "CUSTOM SOFTWARE DEVELOPMENT"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    body: `Legacy software modernisation is one of the highest-stakes technology investments an organisation can make. The downside scenarios — failed migrations, prolonged downtime, data loss, regulatory exposure — are severe enough that partner selection deserves extraordinary care.

The market is filled with vendors who claim modernisation expertise but whose actual delivery portfolio consists largely of greenfield development. The distinguishing questions are specific: Can they describe a specific instance of the strangler-fig pattern they implemented, the technical decisions they made, and why? Can they explain their approach to zero-downtime cutover for a system processing real-time transactions? Do they have a systematic methodology for legacy codebase assessment?

Reliable modernisation partners share three characteristics: they invest significantly in discovery before proposing solutions (a partner who quotes a fixed price without deep codebase analysis should be disqualified), they have genuine experience with the specific technologies being modernised (COBOL, mainframe, early Java enterprise applications, and early .NET all require different expertise), and they can demonstrate working rollback procedures from past engagements.

The technical approaches that reliably deliver outcomes are incremental: strangler-fig, anti-corruption layer patterns, and event-driven decoupling. Big-bang rewrites have a failure rate exceeding 60% in enterprise contexts.

The organisations that navigate modernisation successfully treat it as a multi-year programme, not a project. They invest in parallel-running periods, gradual traffic migration, and continuous validation rather than seeking a single cutover date.`,
    keyPoints: [
      "Partners unable to discuss specific strangler-fig implementations should be disqualified",
      "Fixed-price quotes without deep codebase analysis signal inadequate expertise",
      "Incremental patterns (strangler-fig, anti-corruption layer) reliably outperform big-bang rewrites",
      "Successful modernisation is a multi-year programme, not a project",
    ],
    stats: [{ label: "Big-Bang Failure", value: "60%+" }, { label: "Discovery Saving", value: "35%" }, { label: "Incremental Success", value: "91%" }, { label: "Avg Duration", value: "18mo" }],
    quote: "Legacy modernisation done right is invisible to end users. That invisibility is the hardest thing to deliver and the clearest sign of real expertise.",
    quoteAuthor: "— Nadia Patel, Legacy Modernisation Lead",
  },
  {
    id: 10, date: "April 10, 2026", readTime: "8 min", author: "Teddy Walsh", authorRole: "Senior MLOps Engineer", authorInitials: "TW",
    title: "Stop Building Dashboards, Start Building Decisions: AI Copilots for Business Analytics",
    excerpt: "The era of passive dashboards is ending. AI copilots transform analytics from a reporting function into a decision-making engine.",
    tags: ["AI", "DATA"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    body: `For two decades, business intelligence meant dashboards. Analysts built them, business users looked at them, and decisions happened — somewhere — in the space between.

AI copilots collapse that space. Instead of consulting a dashboard and interpreting what they see, business users ask a question in natural language and receive a direct, contextualised answer with the data and reasoning behind it.

The architectural shift is significant. Traditional BI is pull-based: users navigate to reports and extract insights. AI copilots are push-and-pull: they surface relevant anomalies proactively (push) and answer ad-hoc questions instantly (pull). A well-configured copilot monitors KPIs continuously and alerts stakeholders to meaningful deviations before they escalate into crises.

Building an effective analytics copilot requires five capabilities: a governed semantic layer (without this, the copilot confidently answers wrong questions), a well-designed retrieval pipeline, careful prompt engineering for analytical reasoning tasks, a strong data quality baseline, and a feedback loop that improves response quality over time.

The organisations seeing the greatest impact are those where the copilot is integrated into existing workflows — embedded in Slack, Teams, or the tools where decisions are actually made — rather than requiring users to navigate to a separate analytics platform.

The transition from dashboard culture to copilot culture is as much organisational as technical. Analytics teams must shift their value from report production to question-answering infrastructure and insight quality governance.`,
    keyPoints: [
      "AI copilots shift BI from pull (passive reporting) to push-and-pull (proactive + conversational)",
      "A governed semantic layer is the non-negotiable foundation for reliable copilot answers",
      "Integration into existing workflows (Slack, Teams) drives adoption far more than standalone portals",
      "Analytics teams must evolve from report builders to insight infrastructure owners",
    ],
    stats: [{ label: "Decision Speed", value: "10×" }, { label: "Report Volume", value: "-60%" }, { label: "Insight Accuracy", value: "94%" }, { label: "Adoption Rate", value: "78%" }],
    quote: "Dashboards tell you what happened. Copilots tell you what to do about it. That is a fundamental shift in the value that analytics delivers.",
    quoteAuthor: "— Teddy Walsh, Senior MLOps Engineer",
  },
  {
    id: 11, date: "April 2, 2026", readTime: "7 min", author: "Rosa Mbeki", authorRole: "FinTech Practice Lead", authorInitials: "RM",
    title: "Top Fintech Software Development Companies You Can Trust in Regulated Markets",
    excerpt: "Regulated markets demand more than technical competence. These are the fintech development partners who can navigate compliance without sacrificing velocity.",
    tags: ["BANKING", "FINTECH"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    body: `Fintech software development in regulated markets — banking, payments, insurance, capital markets — is fundamentally different from standard enterprise software development. The regulatory environment is not a constraint to work around: it is a design input that shapes architecture, testing strategy, audit trails, and deployment procedures.

Development partners who lack genuine regulatory expertise consistently underestimate compliance scope and overestimate their ability to adapt. The consequences are severe: failed audits, delayed product launches, and in worst cases, regulatory sanction.

The markers of genuine expertise are specific and verifiable. Can the partner describe their approach to building audit logs that satisfy both technical and regulatory requirements simultaneously? Do they have experience with specific frameworks — PSD2, DORA, SOX, FINRA, PCI-DSS — relevant to your market? Have they delivered products that passed regulatory review on the first submission rather than requiring multiple revision cycles?

The best fintech development partners treat compliance as an engineering discipline, not a checkbox exercise. Compliance requirements are translated into technical specifications, automated compliance tests are integrated into CI/CD pipelines, and compliance evidence generation is built into the system from day one rather than assembled manually before each audit.

The fintech development market is bifurcating: partners who have invested in genuine regulatory engineering capability and those who have not. The gap between them is widening as regulatory complexity increases.`,
    keyPoints: [
      "Regulatory compliance must be a design input, not a post-development checkpoint",
      "Audit log architecture that satisfies both technical and regulatory requirements simultaneously is a key capability test",
      "Automated compliance testing in CI/CD pipelines distinguishes genuine expertise",
      "The best partners treat compliance as engineering, not as a checkbox exercise",
    ],
    stats: [{ label: "Compliance Failures", value: "-85%" }, { label: "Audit Pass Rate", value: "98%" }, { label: "Time to Compliance", value: "-40%" }, { label: "Regulatory Frameworks", value: "12+" }],
    quote: "Compliance done well is invisible in the product and bulletproof in the audit room. That combination is rare, and it is exactly what regulated market clients need.",
    quoteAuthor: "— Rosa Mbeki, FinTech Practice Lead",
  },
  {
    id: 12, date: "March 30, 2026", readTime: "9 min", author: "Carlos Mendez", authorRole: "VP of Engineering, LATAM", authorInitials: "CM",
    title: "Many U.S. Enterprise AI Projects Fail at the Proof Stage — How Our LATAM Engineers Close the Gap",
    excerpt: "Our five-phase validation framework has helped Fortune 500 clients move AI from POC to production in under six months.",
    tags: ["NEWS"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    body: `Research consistently shows that the majority of enterprise AI initiatives never progress beyond the proof-of-concept stage. Budget overruns, talent shortages, and misaligned expectations are the most cited culprits.

The disconnect between POC and production is almost always organisational rather than technical. Successful POCs are built by small, nimble teams with executive sponsorship. Production deployment requires cross-functional alignment, data governance, security review, and operational infrastructure that POC teams rarely consider.

Our Latin American engineering teams have developed a repeatable five-phase methodology for bridging this gap. Phase 1: Problem Validation — confirming that the AI solution addresses a genuinely high-value problem with measurable outcomes. Phase 2: Data Readiness Assessment — evaluating data quality, availability, and governance before committing to model development. Phase 3: Minimum Viable Model — building the simplest model that could deliver value, rather than the most impressive demo. Phase 4: Production Architecture Design — designing the full operational infrastructure before writing production code. Phase 5: Operational Handover — ensuring the client's team can own, monitor, and improve the system after delivery.

Each phase has clear entry and exit criteria. This prevents the momentum-driven progression that bypasses critical validation and leads to failed production deployments.

Latin American engineering teams offer timezone alignment with North American clients, cultural compatibility, English proficiency, and cost structures 35-45% below comparable US hiring. Our LATAM practice has become our fastest-growing service area precisely because it solves the AI talent scarcity problem without sacrificing quality.`,
    keyPoints: [
      "85% of enterprise AI POCs never reach production — the gap is organisational, not technical",
      "Five-phase validation framework with explicit entry/exit criteria prevents momentum-driven failures",
      "Data readiness assessment before model development is the most underinvested phase",
      "LATAM teams offer timezone alignment, quality, and 40% cost advantage vs US hiring",
    ],
    stats: [{ label: "POC Failure", value: "85%" }, { label: "Cost Saving", value: "40%" }, { label: "Time-to-Prod", value: "-60%" }, { label: "Client NPS", value: "72" }],
    quote: "The gap between a promising proof of concept and a production AI system is enormous. Most organisations underestimate it. We've built a methodology specifically to bridge it.",
    quoteAuthor: "— Carlos Mendez, VP of Engineering, LATAM",
  },
];
const FILTER_TAGS = ["All", "AI", "Data", "News", "FinTech", "Business", "Healthcare", "Cloud"];

/* ─── Dark background shell ─── */
function DarkBg({ children }) {
  return (
    <div style={{
      position: "relative",
      background: "linear-gradient(158deg, #050b18 0%, #070f22 55%, #050e1c 100%)",
      minHeight: "100vh", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(59,130,246,0.04) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }} />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}

/* ─── Article Detail Page (modified to accept onBack and onClose) ─── */
function ArticleDetail({ post, allPosts, onBack, onClose }) {
  const detailRef = useRef(null);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [post.id]);

  const related = allPosts.filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t))).slice(0, 3);

  const handleBack = () => {
    if (onClose) onClose();
    onBack();
  };

  return (
    <DarkBg>
      <div ref={detailRef} style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(24px,4vw,56px) clamp(16px,5vw,40px)", fontFamily: "'Barlow', sans-serif" }}>

        {/* Hero banner */}
        <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 36, height: "clamp(200px,35vw,340px)" }}>
          <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,11,24,0.45) 0%, rgba(5,11,24,0.82) 100%)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)` }} />

          <button onClick={handleBack} style={{
            position: "absolute", top: 20, left: 20,
            background: "rgba(5,11,24,0.75)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8,
            padding: "8px 16px", color: "#fff", fontSize: 13, fontWeight: 600,
            cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
          }}>
            <Ic.ArrowLeft /> Back
          </button>

          <div style={{ position: "absolute", bottom: 20, left: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags.map(t => (
              <span key={t} style={{
                background: `${tagColor(t)}22`, border: `1px solid ${tagColor(t)}55`,
                borderRadius: 6, padding: "4px 10px", fontSize: 10,
                color: tagColor(t), fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
              }}>#{t}</span>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
          marginBottom: 24, paddingBottom: 20,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: `linear-gradient(135deg, #1e3a5f, ${BLUE})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 14, flexShrink: 0,
            }}>{post.authorInitials}</div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{post.author}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{post.authorRole}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: "rgba(255,255,255,0.45)", fontSize: 12 }}><Ic.Clock />{post.date}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: "rgba(255,255,255,0.45)", fontSize: 12 }}><Ic.Tag />{post.readTime} read</div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            {[Ic.Share, Ic.Bookmark].map((Icon, i) => (
              <button key={i} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.55)", cursor: "pointer", outline: "none",
              }}><Icon /></button>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: "clamp(22px, 3.5vw, 40px)",
          letterSpacing: "-0.02em", lineHeight: 1.1,
          color: "#fff", marginBottom: 20,
          textTransform: "uppercase",
        }}>{post.title}</h1>

        {/* Excerpt pull-quote */}
        <p style={{
          fontSize: "clamp(15px, 1.4vw, 17px)", color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8, marginBottom: 28,
          borderLeft: `3px solid ${BLUE}`, paddingLeft: 20,
          fontStyle: "italic",
        }}>{post.excerpt}</p>

        {/* Stats */}
        {post.stats && (
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 12, marginBottom: 36,
            padding: 24, borderRadius: 16,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${BLUE}28`,
          }}>
            {post.stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900, fontSize: "clamp(24px, 2.5vw, 32px)",
                  color: BLUE_LITE, lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Accent line */}
        <div style={{ width: 56, height: 3, background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE})`, borderRadius: 2, marginBottom: 28 }} />

        {/* Body paragraphs */}
        {post.body.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: "clamp(14px,1.3vw,16px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.95, marginBottom: 22 }}>{para}</p>
        ))}

        {/* Key points */}
        {post.keyPoints && (
          <div style={{
            margin: "36px 0", padding: "24px 28px", borderRadius: 16,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${BLUE}28`,
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 18, display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", letterSpacing: 1 }}>
              <Ic.Check /> Key Takeaways
            </h3>
            {post.keyPoints.map(kp => (
              <div key={kp} style={{ display: "flex", gap: 12, marginBottom: 14, color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE, flexShrink: 0, marginTop: 7 }} />
                {kp}
              </div>
            ))}
          </div>
        )}

        {/* Block quote */}
        {post.quote && (
          <div style={{
            margin: "40px 0", padding: "28px 36px", borderRadius: 18,
            background: `${BLUE}08`,
            border: `1px solid ${BLUE}28`,
            position: "relative",
          }}>
            <div style={{ position: "absolute", top: 16, left: 24, fontSize: 48, color: BLUE, opacity: 0.15, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 19px)", fontWeight: 600, color: "#fff", fontStyle: "italic", lineHeight: 1.7, marginBottom: 12, paddingLeft: 12 }}>
              {post.quote}
            </p>
            <span style={{ fontSize: 12, color: BLUE_LITE, letterSpacing: 0.5 }}>{post.quoteAuthor}</span>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {post.tags.map(t => (
            <span key={t} style={{
              padding: "5px 14px", borderRadius: 999,
              background: `${tagColor(t)}14`,
              border: `1px solid ${tagColor(t)}35`,
              fontSize: 11, color: tagColor(t),
              fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
            }}>#{t}</span>
          ))}
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 24, display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
              <div style={{ width: 4, height: 20, background: BLUE, borderRadius: 2 }} />
              Related Articles
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {related.map(rel => (
                <motion.div key={rel.id} onClick={() => { window.scrollTo({ top: 0 }); handleBack(); setTimeout(() => document.getElementById(`card-${rel.id}`)?.click(), 100); }}
                  whileHover={{ y: -4, borderColor: BLUE }}
                  style={{
                    cursor: "pointer", background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12,
                    overflow: "hidden", transition: "border-color 0.25s",
                  }}>
                  <img src={rel.img} alt={rel.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
                  <div style={{ padding: "14px 16px" }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>{rel.date}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>
                      {rel.title.length > 70 ? rel.title.slice(0, 70) + "…" : rel.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Back button */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <motion.button onClick={handleBack} whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${BLUE}55` }}
            style={{
              background: `linear-gradient(135deg, ${BLUE}, #2563eb)`,
              border: "none", borderRadius: 40, padding: "11px 32px",
              color: "#fff", fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: 1.5,
              textTransform: "uppercase", cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: `0 0 18px ${BLUE}33`,
            }}>
            <Ic.ArrowLeft /> Back to Blog
          </motion.button>
        </div>
      </div>
    </DarkBg>
  );
}

/* ─── Blog card ─── */
function BlogCard({ post, onOpen, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: "-40px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.article
      id={`card-${post.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: E }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(post)}
      style={{ position: "relative", display: "flex", flexDirection: "column", cursor: "pointer" }}
    >
      <motion.div style={{ position: "absolute", inset: -2, borderRadius: 18, background: `radial-gradient(ellipse at 40% 30%, rgba(59,130,246,0.16), transparent 65%)`, filter: "blur(10px)", zIndex: 0, pointerEvents: "none", opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />

      <motion.div
        animate={{ y: hov ? -5 : 0, boxShadow: hov ? `0 20px 52px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.28)` : "0 2px 16px rgba(0,0,0,0.28)", borderColor: hov ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.07)" }}
        transition={{ duration: 0.35, ease: E }}
        style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
      >
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
          <motion.img animate={{ scale: hov ? 1.06 : 1 }} transition={{ duration: 0.55, ease: E }} src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top, rgba(5,11,24,0.75), transparent)", pointerEvents: "none" }} />
          <motion.div animate={{ scaleX: hov ? 1 : 0 }} initial={{ scaleX: 0 }} transition={{ duration: 0.45, ease: E }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LITE}44)`, transformOrigin: "left" }} />
        </div>

        <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{post.date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "rgba(255,255,255,0.28)" }}><Ic.Clock />{post.readTime}</span>
          </div>

          <motion.h3 animate={{ color: hov ? "#ffffff" : "rgba(255,255,255,0.88)" }} transition={{ duration: 0.22 }} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.55, margin: "0 0 12px", flex: 1 }}>
            {post.title}
          </motion.h3>

          <motion.div animate={{ background: hov ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.07)" }} transition={{ duration: 0.3 }} style={{ height: 1, width: "100%", margin: "12px 0 14px" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 9.5, letterSpacing: 1.5, textTransform: "uppercase", color: tagColor(tag), display: "flex", alignItems: "center", gap: 3 }}>
                  <span style={{ opacity: 0.55, fontSize: 10 }}>#</span>{tag}
                </span>
              ))}
            </div>
            <motion.span animate={{ color: hov ? BLUE_LITE : "rgba(255,255,255,0.3)", x: hov ? 3 : 0 }} transition={{ duration: 0.22 }} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600 }}>
              Read <Ic.ArrowRight />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT — receives callbacks from parent
══════════════════════════════════════════ */
export default function BlogGrid({ onDetailOpen, onDetailClose }) {
  const INITIAL  = 6;
  const PER_LOAD = 3;
  const [visible, setVisible]   = useState(INITIAL);
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const headInV    = useInView(headRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const filtered = activeFilter === "All" ? ALL_POSTS : ALL_POSTS.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));
  const visiblePosts = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function openPost(post) {
    if (onDetailOpen) onDetailOpen();
    setSelected(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closePost() {
    if (onDetailClose) onDetailClose();
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        .bg-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:1000px){ .bg-grid{grid-template-columns:repeat(2,1fr);} .bg-section{padding:80px 36px 96px!important;} }
        @media(max-width:600px){ .bg-grid{grid-template-columns:1fr;} .bg-section{padding:60px 16px 80px!important;} }
      `}</style>

      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div key={`detail-${selected.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <ArticleDetail post={selected} allPosts={ALL_POSTS} onBack={closePost} onClose={onDetailClose} />
          </motion.div>
        ) : (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <DarkBg>
              <section ref={sectionRef} className="bg-section" style={{ padding: "112px 72px 128px", fontFamily: "'Barlow',sans-serif" }}>
                <div style={{ position: "absolute", inset: "-10%", backgroundImage: "radial-gradient(rgba(59,130,246,0.05) 1px,transparent 1px)", backgroundSize: "44px 44px", y: gridY, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>

                  {/* Breadcrumb */}
                  <nav style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 40 }}>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>Home</span>
                    <Ic.ChevronR />
                    <span style={{ color: "#fff", fontWeight: 600 }}>Blog</span>
                  </nav>

                  {/* Header */}
                  <div ref={headRef} style={{ marginBottom: 72 }}>
                    <motion.div initial={{ opacity: 0, x: -24 }} animate={headInV ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.75, ease: E }} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                      <div style={{ width: 36, height: 2.5, background: BLUE, borderRadius: 2 }} />
                      <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: BLUE }}>Insights & Resources</span>
                    </motion.div>

                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
                      <motion.h1 initial={{ opacity: 0, y: 32 }} animate={headInV ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: E }}
                        style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,56px)", textTransform: "uppercase", letterSpacing: "0.4px", lineHeight: 1.06, color: "#fff", margin: 0 }}>
                        Our <span style={{ background: `linear-gradient(90deg,${BLUE_LITE},${BLUE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Blog</span>
                      </motion.h1>
                      <motion.p initial={{ opacity: 0 }} animate={headInV ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                        {filtered.length} articles · Showing {Math.min(visible, filtered.length)}
                      </motion.p>
                    </div>

                    {/* Filter pills */}
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={headInV ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
                      {FILTER_TAGS.map(f => (
                        <motion.button key={f} onClick={() => { setActiveFilter(f); setVisible(INITIAL); }}
                          whileHover={{ scale: 1.04 }}
                          style={{
                            fontFamily: "'Barlow',sans-serif", fontWeight: f === activeFilter ? 700 : 500,
                            fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
                            color: f === activeFilter ? BLUE : "rgba(255,255,255,0.45)",
                            background: f === activeFilter ? `${BLUE}18` : "rgba(255,255,255,0.04)",
                            border: `1px solid ${f === activeFilter ? `${BLUE}44` : "rgba(255,255,255,0.08)"}`,
                            borderRadius: 8, padding: "7px 16px",
                            cursor: "pointer", outline: "none", transition: "all 0.2s",
                          }}>
                          {f === activeFilter ? `# ${f}` : f}
                        </motion.button>
                      ))}
                    </motion.div>

                    <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={headInV ? { scaleX: 1, opacity: 1 } : {}} transition={{ duration: 1.1, delay: 0.35, ease: E }}
                      style={{ height: 1.5, width: "100%", background: `linear-gradient(90deg,${BLUE},${BLUE_LITE} 40%,rgba(255,255,255,0.06) 100%)`, transformOrigin: "left", borderRadius: 2 }} />
                  </div>

                  {/* Grid */}
                  <div className="bg-grid">
                    <AnimatePresence>
                      {visiblePosts.map((post, i) => (
                        <BlogCard key={post.id} post={post} onOpen={openPost} index={i} />
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Load more */}
                  {hasMore && (
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: E }} style={{ marginTop: 64, textAlign: "center" }}>
                      <motion.button onClick={() => setVisible(v => Math.min(v + PER_LOAD, filtered.length))}
                        whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${BLUE}44` }} whileTap={{ scale: 0.97 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "transparent", color: BLUE_LITE, fontFamily: "'Barlow',sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", padding: "0 0 12px 0", border: "none", borderBottom: `2px solid ${BLUE}`, cursor: "pointer", outline: "none" }}>
                        Load More
                        <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Ic.Down /></motion.div>
                      </motion.button>
                    </motion.div>
                  )}

                  {!hasMore && (
                    <div style={{ marginTop: 56, textAlign: "center", fontFamily: "'Barlow',sans-serif", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
                      — All articles loaded —
                    </div>
                  )}
                </div>
              </section>
            </DarkBg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}