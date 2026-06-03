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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!SHOW_VOTE_BUTTON) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Disappear when scrolling down past 50px
      if (currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // Show again when at the very top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
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
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            zIndex: 2000, // Make sure it sits above the Navbar (Navbar is zIndex 1000)
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "linear-gradient(90deg, #ff007f, #7928ca, #3b82f6)",
            backgroundSize: "200% 200%",
            animation: "gradientMove 6s ease infinite",
            padding: "8px 16px 8px 20px",
            borderRadius: "999px",
            boxShadow: "0 10px 30px rgba(255, 0, 127, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
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
              fontWeight: "800",
              fontSize: "0.85rem",
              letterSpacing: "2.5px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "uppercase",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                background: "white",
                color: "#ff007f",
                padding: "2px 8px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "900",
              }}
            >
              VOTE
            </motion.span>
            <span>FOR NOVA AT STARTUP TEENS</span>
          </a>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
              marginLeft: "4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
