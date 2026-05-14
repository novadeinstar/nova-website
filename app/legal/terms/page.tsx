"use client";

import { motion } from "framer-motion";

export default function Terms() {
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
          Terms & Conditions
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            opacity: 0.8,
            lineHeight: "1.8",
          }}
        >
          Please read these terms carefully before using NOVA and
          its related services.
        </p>
      </motion.div>

      {/* Terms Card */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{
          width: "100%",
          maxWidth: "1200px",
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
        {/* Section */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            1. Introduction
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            These Terms & Conditions govern your access to and use
            of NOVA, including all related applications, services,
            and content. By using our platform, you agree to comply
            with these terms.
          </p>
        </div>

        {/* Section */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            2. Privacy & Data
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            NOVA prioritizes local data processing and privacy-first
            architecture. We aim to minimize cloud dependency and
            handle sensitive information responsibly.
          </p>
        </div>

        {/* Section */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            3. Usage Policy
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            Users may not misuse NOVA for unlawful, harmful, or
            abusive purposes. Any attempt to compromise the platform,
            reverse engineer systems, or exploit vulnerabilities is
            prohibited.
          </p>
        </div>

        {/* Section */}
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            4. Intellectual Property
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            All NOVA branding, visuals, technologies, and software
            remain the intellectual property of the NOVA team unless
            otherwise stated.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              color: "#93c5fd",
            }}
          >
            5. Contact
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            For questions regarding these Terms & Conditions,
            please contact us via the official NOVA contact page.
          </p>
        </div>
      </motion.section>
    </main>
  );
}