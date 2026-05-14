"use client";

import { motion } from "framer-motion";

export default function Impressum() {
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
            fontSize: "clamp(3rem, 7vw, 5rem)",
            marginBottom: "24px",
            background:
              "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Impressum
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            opacity: 0.8,
            lineHeight: "1.8",
          }}
        >
          Information according to § 5 TMG
        </p>
      </motion.div>

      {/* Card */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "60px",
          borderRadius: "36px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          boxShadow:
            "0px 20px 80px rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      >
        {/* Responsible */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            Responsible for Content
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            NOVA Project
            <br />
            David Shi
            <br />
            Hamburg, Germany
          </p>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            Contact
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            Email: novadeinstar@gmail.com
            <br />
            Website: NOVA
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            Disclaimer
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            The contents of this website were created with great
            care. However, we cannot guarantee the accuracy,
            completeness, or timeliness of the content.
          </p>
        </div>

        {/* Copyright */}
        <div>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            Copyright
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            All texts, images, graphics, and technologies on this
            website are subject to copyright and intellectual
            property laws unless otherwise stated.
          </p>
        </div>
      </motion.section>
    </main>
  );
}