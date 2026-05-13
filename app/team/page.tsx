"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [hovered, setHovered] = useState(false);
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
          "clamp(40px, 6vw, 100px) clamp(20px, 6vw, 80px)",
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
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: "bold",
            marginBottom: "24px",
            background:
              "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
          NOVA is built by a passionate interdisciplinary team
          combining AI, robotics, and modern
          software engineering.
        </motion.p>
      </section>

      {/* TEAM GRID */}
      <section
        style={{
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "50px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* David */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
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
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          {/* IMAGE */}
          <Image
            src="/images/team/David.jpg"
            alt="David Shi"
            width={433.33}
            height={650}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          {/* INFO BOX */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y:-8,
              paddingBottom: "40px",
              boxShadow:
                "0px 25px 60px rgba(59,130,246,0.25)",
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            style={{
              position: "relative",
              bottom: "-30px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "85%",
              padding: "24px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0px 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "8px",
              }}
            >
              David Shi
            </h2>

            <p
              style={{
                opacity: 0.75,
                marginBottom: "12px",
              }}
            >
              Co-Founder 
              Hardware & Electronics
            </p>

            <motion.p
                animate={{
                  opacity: hovered ? 1 : 0,
                  maxHeight: hovered ? 200 : 0,
                }}
              transition={{
                duration: 0.3,
              }}
              style={{
                overflow: "hidden",
                marginTop: "14px",
                fontSize: "0.92rem",
                lineHeight: "1.6",
              }}
            >
              Specialized in customized PCBs,
              robotics, and modular 3D Constructions.
            </motion.p>
          </motion.div>
        </motion.div>

      </section>
    </main>
  );
}