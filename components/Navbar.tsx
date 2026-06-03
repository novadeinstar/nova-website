"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior to hide/show navbar
  useEffect(() => {
    const controlNavbar = () => {
      // If mobile menu is open, don't hide navbar
      if (isMobileMenuOpen) return;

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Handle responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: showNavbar ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(12px, 2.5vw, 20px) clamp(20px, 6vw, 80px)",
          background: "rgba(10, 10, 10, 0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* LOGO (Positioned left on mobile, right on desktop) */}
        {isMobile && (
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="NOVA Logo"
              width={45}
              height={45}
              style={{
                width: "42px",
                height: "auto",
              }}
            />
          </Link>
        )}

        {/* DESKTOP LINKS (Left side) */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 3.5vw, 50px)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* DESKTOP LOGO (Right side) */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{ display: "flex" }}>
              <Image
                src="/images/logo.png"
                alt="NOVA Logo"
                width={50}
                height={50}
                style={{
                  width: "50px",
                  height: "auto",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Link>
          </div>
        )}

        {/* MOBILE HAMBURGER BUTTON */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "24px",
              height: "18px",
              padding: 0,
              zIndex: 1002,
              outline: "none",
            }}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "2px",
                transformOrigin: "center",
              }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "2px",
              }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "2px",
                transformOrigin: "center",
              }}
            />
          </button>
        )}
      </motion.nav>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "auto",
              maxHeight: "100vh",
              background: "rgba(10, 10, 10, 0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 999,
              padding: "90px 40px 40px 40px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    display: "block",
                    padding: "8px 0",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}