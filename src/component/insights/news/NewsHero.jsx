import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

/* ── Categories ───────────────────────────────────────── */
const categories = [
  "All",
  "AI",
  "Mobile Development",
  "Blockchain",
  "Insurance",
  "Healthcare",
  "Fintech",
  "Outstaffing",
  "Ecommerce",
  "Hospitality",
  "Construction",
  "Custom Software Development",
  "IoT",
];

/* ── Background grid SVG ───────────────────────────────── */
function GridBg() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.06,
        pointerEvents: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="newsgrid"
          width="52"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 52 0 L 0 0 0 52"
            fill="none"
            stroke="white"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#newsgrid)" />
    </svg>
  );
}

/* ── Filter pill ───────────────────────────────────────── */
function Pill({ label, isActive, onClick, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "6px 14px",
        borderRadius: 100,
        background: isActive
          ? "rgba(55,138,221,0.22)"
          : "rgba(255,255,255,0.08)",
        border: isActive
          ? "1px solid #378ADD"
          : "1px solid rgba(255,255,255,0.15)",
        color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
        fontSize: "clamp(10px,1.1vw,11px)",
        fontWeight: 700,
        letterSpacing: "1.2px",
        textTransform: "uppercase",
        cursor: "pointer",
        fontFamily: "'DM Sans',sans-serif",
        whiteSpace: "nowrap",
        transition: "all 0.2s ease",
        outline: "none",
      }}
    >
      <span
        style={{
          color: isActive ? "#85B7EB" : "rgba(255,255,255,0.30)",
          fontWeight: 400,
          marginRight: 1,
        }}
      >
        #
      </span>
      {label.toUpperCase()}
    </motion.button>
  );
}

/* ── Main export ───────────────────────────────────────── */
export default function NewsHero({ onFilter, onSearch }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  function handleFilter(cat) {
    setActive(cat);
    onFilter?.(cat);
  }

  function handleSearch(e) {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  }

  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(135deg,#0a1628 0%,#0f2240 35%,#162d50 65%,#1a3660 100%)",
        padding: "clamp(48px,8vw,80px) clamp(16px,5vw,48px) clamp(32px,5vw,56px)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Grid */}
      <GridBg />

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -80,
          left: -60,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(55,138,221,0.22),transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.20, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: -60,
          right: -40,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(24,95,165,0.25),transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Inner content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(18px,2.5vw,26px)",
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            margin: 0,
            fontSize: "clamp(28px,5vw,48px)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "clamp(2px,0.5vw,5px)",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          News
        </motion.h1>

        {/* Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(6px,1vw,10px)",
            justifyContent: "center",
            maxWidth: 780,
          }}
        >
          {categories.map((cat, i) => (
            <Pill
              key={cat}
              label={cat}
              index={i}
              isActive={active === cat}
              onClick={() => handleFilter(cat)}
            />
          ))}
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.96)",
            borderRadius: 100,
            padding: "9px 20px",
            width: "clamp(220px,35vw,280px)",
            alignSelf: "flex-end",
          }}
        >
          <FiSearch size={16} color="#9ca3af" strokeWidth={2} style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search"
            aria-label="Search news"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 13,
              color: "#374151",
              width: "100%",
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 500,
            }}
          />
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                onClick={() => { setQuery(""); onSearch?.(""); }}
                aria-label="Clear search"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  color: "#9ca3af",
                  flexShrink: 0,
                }}
              >
                <FiX size={14} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}