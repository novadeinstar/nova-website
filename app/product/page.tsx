"use client";

import { motion } from "framer-motion";

export default function team() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
        background:
          "radial-gradient(circle at 50% 30%, #111827 0%, #020617 60%, #000 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* glowing background orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #3b82f6 0%, #8b5cf6 40%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/Drehen.mp4"
          animate={{
            scale:[1,1.05,1]
          }}
          transition={{
            duration:10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(1px) brightness(0.4)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            zIndex: 1,
          }}>
        </div>
        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:1,
          }}
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              zIndex: 1,
              background: "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            NOVA
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              opacity: 0.85,
              marginTop: "20px",
            }}
          >
            Next-generation observational AI systems
          </p>
        </motion.div>
      </section>
    </main>
  );
}
