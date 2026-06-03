"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Team() {
  // DESKTOP HOVER STATES
  const [hoveredD, setHoveredD] = useState(false);
  const [hoveredE, setHoveredE] = useState(false);
  const [hoveredA, setHoveredA] = useState(false);

  // HOVER SUPPORT DETECTION (True for mouse, false for touch devices like mobile & iPad)
  const [hasHover, setHasHover] = useState(true);

  // MOBILE/TOUCH OPEN STATES
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openA, setOpenA] = useState(false);

  // DETECT HOVER SUPPORT AND SCREEN SIZE
  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const [isMobileLayout, setIsMobileLayout] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileLayout(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #1e293b 0%, #020617 55%, #000 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
        padding:
          "140px clamp(18px, 5vw, 80px) clamp(40px, 6vw, 100px)",
        boxSizing: "border-box",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* INTRO */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(2.6rem, 9vw, 5.5rem)",
            fontWeight: "bold",
            marginBottom: "24px",
            background:
              "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
          }}
        >
          Meet The Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            lineHeight: "1.8",
            opacity: 0.8,
          }}
        >
          NOVA is built by a passionate interdisciplinary team combining AI, robotics, and modern software engineering.
        </motion.p>
      </section>

      {/* TEAM GRID */}
      <section
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "50px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* DAVID */}
        <motion.div
          onHoverStart={() => hasHover && setHoveredD(true)}
          onHoverEnd={() => hasHover && setHoveredD(false)}
          onClick={() => !hasHover && setOpenD(!openD)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px", // Prevent card stretching to huge sizes in single-column
            margin: "0 auto",
            height: isMobileLayout ? "auto" : "clamp(550px, 70vw, 750px)",
            cursor: !hasHover ? "pointer" : "default",
          }}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={
            hasHover
              ? {
                  y: -10,
                  scale: 1.02,
                }
              : undefined
          }
        >
          {/* IMAGE */}
          <Image
            src="/images/team/David.jpg"
            alt="David Shi"
            width={433}
            height={650}
            style={{
              width: "100%",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          {/* INFO BOX */}
          <motion.div
            animate={{
              y: hoveredD || openD ? -25 : 0,
              scale: hoveredD || openD ? 1.03 : 1,
              boxShadow:
                hoveredD || openD
                  ? "0px 25px 60px rgba(59,130,246,0.25)"
                  : "0px 20px 50px rgba(0,0,0,0.35)",
              minHeight: hoveredD || openD ? "170px" : "120px",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            style={{
              position: isMobileLayout ? "relative" : "absolute",
              overflow: "hidden",
              marginTop: isMobileLayout ? "-40px" : "-60px",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              width: "85%",
              padding: "24px",
              borderRadius: "24px",
              background: "rgba(30, 30, 30, 0.75)", // dark aesthetic matching design system
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px", fontWeight: "700" }}>
              David Shi
            </h2>

            <p style={{ opacity: 0.75, marginBottom: "12px", fontSize: "0.95rem" }}>
              Co-Founder - Hardware & Electronics
            </p>

            <motion.p
              animate={{
                y: hoveredD || openD ? 0 : 10,
                opacity: hoveredD || openD ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                marginTop: "14px",
                fontSize: "0.92rem",
                lineHeight: "1.6",
              }}
            >
              Specialized in customized PCBs, robotics, and modular 3D constructions.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* EMIL */}
        <motion.div
          onHoverStart={() => hasHover && setHoveredE(true)}
          onHoverEnd={() => hasHover && setHoveredE(false)}
          onClick={() => !hasHover && setOpenE(!openE)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px", // Prevent card stretching to huge sizes in single-column
            margin: "0 auto",
            height: isMobileLayout ? "auto" : "clamp(550px, 70vw, 750px)",
            cursor: !hasHover ? "pointer" : "default",
          }}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={
            hasHover
              ? {
                  y: -10,
                  scale: 1.02,
                }
              : undefined
          }
        >
          {/* IMAGE */}
          <Image
            src="/images/team/Emil.jpeg"
            alt="Emil Raba"
            width={433}
            height={650}
            style={{
              width: "100%",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          {/* INFO BOX */}
          <motion.div
            animate={{
              y: hoveredE || openE ? -25 : 0,
              scale: hoveredE || openE ? 1.03 : 1,
              boxShadow:
                hoveredE || openE
                  ? "0px 25px 60px rgba(59,130,246,0.25)"
                  : "0px 20px 50px rgba(0,0,0,0.35)",
              minHeight: hoveredE || openE ? "170px" : "120px",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            style={{
              position: isMobileLayout ? "relative" : "absolute",
              overflow: "hidden",
              marginTop: isMobileLayout ? "-40px" : "-60px",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              width: "85%",
              padding: "24px",
              borderRadius: "24px",
              background: "rgba(30, 30, 30, 0.75)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px", fontWeight: "700" }}>
              Emil Raba
            </h2>

            <p style={{ opacity: 0.75, marginBottom: "12px", fontSize: "0.95rem" }}>
              Co-Founder - AI Engineering
            </p>

            <motion.p
              animate={{
                y: hoveredE || openE ? 0 : 10,
                opacity: hoveredE || openE ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                marginTop: "14px",
                fontSize: "0.92rem",
                lineHeight: "1.6",
              }}
            >
              Specialized in AI development.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* AARUSH */}
        <motion.div
          onHoverStart={() => hasHover && setHoveredA(true)}
          onHoverEnd={() => hasHover && setHoveredA(false)}
          onClick={() => !hasHover && setOpenA(!openA)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px", // Prevent card stretching to huge sizes in single-column
            margin: "0 auto",
            height: isMobileLayout ? "auto" : "clamp(550px, 70vw, 750px)",
            cursor: !hasHover ? "pointer" : "default",
          }}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={
            hasHover
              ? {
                  y: -10,
                  scale: 1.02,
                }
              : undefined
          }
        >
          {/* IMAGE */}
          <Image
            src="/images/team/Aarush.jpeg"
            alt="Aarush Mayya"
            width={433}
            height={650}
            style={{
              width: "100%",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          {/* INFO BOX */}
          <motion.div
            animate={{
              y: hoveredA || openA ? -25 : 0,
              scale: hoveredA || openA ? 1.03 : 1,
              boxShadow:
                hoveredA || openA
                  ? "0px 25px 60px rgba(59,130,246,0.25)"
                  : "0px 20px 50px rgba(0,0,0,0.35)",
              minHeight: hoveredA || openA ? "170px" : "120px",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            style={{
              position: isMobileLayout ? "relative" : "absolute",
              overflow: "hidden",
              marginTop: isMobileLayout ? "-40px" : "-60px",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              width: "85%",
              padding: "24px",
              borderRadius: "24px",
              background: "rgba(30, 30, 30, 0.75)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px", fontWeight: "700" }}>
              Aarush Mayya
            </h2>

            <p style={{ opacity: 0.75, marginBottom: "12px", fontSize: "0.95rem" }}>
              Co-Founder - Software & App
            </p>

            <motion.p
              animate={{
                y: hoveredA || openA ? 0 : 10,
                opacity: hoveredA || openA ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                marginTop: "14px",
                fontSize: "0.92rem",
                lineHeight: "1.6",
              }}
            >
              Specialized in software systems.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}