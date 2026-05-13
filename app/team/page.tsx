"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [hoveredD, setHoveredD] = useState(false);
  const [hoveredE, setHoveredE] = useState(false);
  const [hoveredA, setHoveredA] = useState(false);
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
          "120px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
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
          onHoverStart={() => setHoveredD(true)}
          onHoverEnd={() => setHoveredD(false)}
          style={{
            position: "relative",
            height: "clamp(620px, 80vw, 760px)",
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
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          {/* INFO BOX */}
          <motion.div
            whileHover={{
              y: -25,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            style={{
              position: "absolute",
              overflow: "hidden",
              marginTop: "-60px",
              marginLeft: "auto",
              marginRight: "auto",
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
              minHeight: hoveredD ? "220px" : "170px",
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
                  y: hoveredD ? 0 : 10,
                  opacity: hoveredD ? 1 : 0,
                }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position:"relative",
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

        {/* Emil */}
        <motion.div
          onHoverStart={() => setHoveredE(true)}
          onHoverEnd={() => setHoveredE(false)}
          style={{
            position: "relative",
            height: "clamp(620px, 80vw, 760px)",
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
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          {/* IMAGE */}
          <Image
            src="/images/team/Emil.jpeg"
            alt="David Shi"
            width={433.33}
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
            whileHover={{
              y: -25,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            style={{
              position: "absolute",
              overflow: "hidden",
              marginTop: "-60px",
              marginLeft: "auto",
              marginRight: "auto",
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
              minHeight: hoveredE ? "220px" : "170px",
              
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "8px",
              }}
            >
              Emil Raba
            </h2>

            <p
              style={{
                opacity: 0.75,
                marginBottom: "12px",
              }}
            >
              Co-Founder 
              AI-Engineering
            </p>

            <motion.p
                animate={{
                  y: hoveredD ? 0 : 10,
                  opacity: hoveredD ? 1 : 0,
                }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position:"relative",
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

        {/* Aarush */}
        <motion.div
          onHoverStart={() => setHoveredA(true)}
          onHoverEnd={() => setHoveredA(false)}
          style={{
            position: "relative",
            height: "clamp(620px, 80vw, 760px)",
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
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          {/* IMAGE */}
          <Image
            src="/images/team/Aarush.jpeg"
            alt="Aarush Mayya"
            width={433.33}
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
            whileHover={{
              y: -25,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            style={{
              position: "absolute",
              overflow: "hidden",
              marginTop: "-60px",
              marginLeft: "auto",
              marginRight: "auto",
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
              minHeight: hoveredA ? "220px" : "170px",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "8px",
              }}
            >
              Aarush Mayya
            </h2>

            <p
              style={{
                opacity: 0.75,
                marginBottom: "12px",
              }}
            >
              Co-Founder 
              Software & APP
            </p>

            <motion.p
                animate={{
                  y: hoveredD ? 0 : 10,
                  opacity: hoveredD ? 1 : 0,
                }}
              transition={{
                duration: 0.3,
              }}
              style={{
                position:"relative",
                overflow: "hidden",
                marginTop: "14px",
                fontSize: "0.92rem",
                lineHeight: "1.6",
              }}
            >
              Specialized in Softwaresystem.
            </motion.p>
          </motion.div>
        </motion.div>

      </section>
    </main>
  );
}