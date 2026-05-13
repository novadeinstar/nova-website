"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <main>
      <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding:
            "120px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
        background:
          "radial-gradient(circle at 50% 30%, #111827 0%, #020617 60%, #000 100%)",
        color: "white",
        overflow: "hidden",
      }}>
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
        Contact
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
        Lets cooperate and bring NOVA to the people in need!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{
          width: "100%",
          maxWidth: "800px",
          marginTop: "60px",
          padding: "40px",
          borderRadius: "32px",
          background: "rgba(147, 147, 147, 0.24)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          boxShadow:
            "0px 20px 60px rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "800px",
            zIndex: 1,
            textAlign: "center",
          }}
          >
            <p
              style={{
                textAlign: "left",
                opacity: 0.8,
                marginBottom: "8px",
              }}
            >
              First Name
            </p>
            <input
              type="text"
              placeholder="First Name"
              style={{
                transition: "0.3s",
                width: "100%",
                padding: "16px 18px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.target.style.border =
                  "1px solid rgba(96,165,250,0.8)")
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(255,255,255,0.1)")
              }
            />
            <p
              style={{
                textAlign: "left",
                opacity: 0.8,
                marginBottom: "8px",
              }}
            >
              Last Name
            </p>
            <input
              type="text"
              placeholder="Last Name"
              style={{
                transition: "0.3s",
                width: "100%",
                padding: "16px 18px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.target.style.border =
                  "1px solid rgba(96,165,250,0.8)")
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(255,255,255,0.1)")
              }
            /> 
            <p
              style={{
                textAlign: "left",
                opacity: 0.8,
                marginBottom: "8px",
              }}
            >
              Email
            </p>
            <input
              type="emil"
              placeholder="Email"
              style={{
                transition: "0.3s",
                width: "100%",
                padding: "16px 18px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}       
              onFocus={(e) =>
                (e.target.style.border =
                  "1px solid rgba(96,165,250,0.8)")
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(255,255,255,0.1)")
              }
            />
            <p
              style={{
                textAlign: "left",
                opacity: 0.8,
                marginBottom: "8px",
              }}
            >
              Your Message
            </p>
            <textarea
              placeholder="Your Message"
              rows={6}
              style={{
                width: "100%",
                padding: "16px 18px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.target.style.border =
                  "1px solid rgba(96,165,250,0.8)")
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(255,255,255,0.1)")
              }
            />
          </div>
        <div
          style={{
            marginTop: "clamp(25px, 4vw, 50px)",
          }}
        >
          <Button
            text="Send Message"
            href="/"
          />
          <p>to: novadeinstar@gmail.com</p>
        </div>
        </motion.div>
      </section>
    </main>
  );
}
