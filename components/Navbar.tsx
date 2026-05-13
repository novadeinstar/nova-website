"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
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
  }, [lastScrollY]);
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: showNavbar ? 0 : -120,
      }}
      transition={{
        duration: 0.35,
      }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "clamp(10px, 3vw, 20px) clamp(20px, 6vw, 80px)",
        background: "rgba(64, 61, 61, 0.83)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(16px, 4vw, 50px)",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            transition: "0.2s",
          }}
        >
          Home
        </Link>

        <Link
          href="/team"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            transition: "0.2s",
          }}
        >
          Team
        </Link>

        <Link
          href="/product"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            transition: "0.2s",
          }}
        >
          Product
        </Link>

        <Link
          href="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            transition: "0.2s",
          }}
        >
          Contact
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="NOVA Logo"
          width={60}
          height={60}
          style={{
            width: "clamp(42px, 6vw, 60px)",
            height: "auto",
          }}
        />
      </div>
    </motion.nav>
  );
}