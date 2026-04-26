"use client";

import { motion } from "framer-motion";

export default function Home() {
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

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
      </motion.h1>

      {/* subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          opacity: 0.9,
          zIndex: 1,
        }}
      >
        NextGen Observational Voice Assistant — private, local, and truly intelligent.
      </motion.p>

      {/* animated button */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 25px rgba(99,102,241,0.8)",
        }}
        whileTap={{ scale: 0.96 }}
        style={{
          marginTop: "40px",
          padding: "14px 28px",
          fontSize: "1rem",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          color: "white",
          zIndex: 1,
          transition: "0.2s",
        }}
      >
        Learn more
      </motion.button>
    </main>
  );
}
