"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Datenschutz() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "120px 20px",
        background:
          "radial-gradient(circle at 50% 30%, #111827 0%, #020617 60%, #000 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #3b82f6 0%, #8b5cf6 40%, transparent 70%)",
          filter: "blur(140px)",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          zIndex: 1,
          marginBottom: "80px",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1rem, 7vw, 3rem)",
            marginBottom: "24px",
            background:
              "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Congratulations!! You've found this website's Easter egg. Contact us and you will get 20€! (≈100% )
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            opacity: 0.8,
            lineHeight: "1.8",
            marginBottom:"16px",
          }}
        >
          You are smart!
        </p>
        <Button text="Get your money" href="/contact"/>
      </motion.div>
    </main>
  );
}