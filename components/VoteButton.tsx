"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// CONFIGURATION: Set to false to hide the button
// ==========================================
export const SHOW_VOTE_BUTTON = true;

export default function VoteButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!SHOW_VOTE_BUTTON) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Disappear when scrolling down past 60px
      if (currentScrollY > 60) {
        setIsVisible(false);
      } else {
        // Show again when at the very top
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!SHOW_VOTE_BUTTON || isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          style={{
            position: "fixed",
            top: "24px",
            left: "50%",
            zIndex: 2000, // Above navbar
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(90deg, #ff007f, #7928ca, #3b82f6, #00f0ff)",
            backgroundSize: "300% 300%",
            animation: "gradientMove 8s ease infinite",
            padding: "12px 24px 12px 28px", // Increased padding (was 8px 16px 8px 20px)
            borderRadius: "999px",
            boxShadow: "0 10px 40px rgba(255, 0, 127, 0.55), 0 0 20px rgba(0, 240, 255, 0.35)", // Stronger neon glow
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Main button text/link */}
          <a
            href="https://www.startupteens.de/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "900", // Thicker font weight
              fontSize: "0.95rem", // Increased font size (was 0.85rem)
              letterSpacing: "3px", // Increased letter spacing
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textTransform: "uppercase",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                background: "white",
                color: "#ff007f",
                padding: "4px 12px", // Larger badge padding
                borderRadius: "999px",
                fontSize: "0.85rem", // Increased badge font size
                fontWeight: "900",
                boxShadow: "0 4px 12px rgba(255, 0, 127, 0.35)",
              }}
            >
              VOTE
            </motion.span>
            <span style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
              FOR NOVA AT STARTUP TEENS
            </span>
          </a>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "1.3rem", // Larger dismiss button
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
              marginLeft: "6px",
              transition: "transform 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
