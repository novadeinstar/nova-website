"use client";

import { motion } from "framer-motion";

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
            fontSize: "clamp(3rem, 7vw, 5rem)",
            marginBottom: "24px",
            background:
              "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Datenschutzerklärung
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            opacity: 0.8,
            lineHeight: "1.8",
          }}
        >
          Information about how NOVA handles personal data.
        </p>
      </motion.div>

      {/* Privacy Card */}
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
            1. General Information
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            Protecting your personal data is important to us.
            This privacy policy explains what information we collect,
            how it is processed, and for what purpose.
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
            2. Data Collection
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            When using the NOVA website or contacting us through
            forms, certain personal information such as your name,
            email address, and message content may be processed.
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
            3. Purpose of Processing
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            Personal data is processed solely for communication,
            technical website functionality, security, and improving
            our services.
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
            4. Local Processing
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            NOVA is designed with a privacy-first philosophy.
            Wherever possible, data is processed locally on-device
            rather than through cloud-based systems.
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
            5. Your Rights
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            Under GDPR regulations, you have the right to request
            access, correction, deletion, or restriction of your
            personal data at any time.
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
            6. Contact
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              opacity: 0.85,
              fontSize: "1.05rem",
            }}
          >
            If you have questions regarding data protection,
            please contact:
            <br />
            novadeinstar@gmail.com
          </p>
        </div>
      </motion.section>
    </main>
  );
}