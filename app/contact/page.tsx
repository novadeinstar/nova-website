"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sendEmail = async () => {
    try {
      await emailjs.send(
        "service_uo9erau",
        "template_w0pc3cd",
        {
          name: `${firstName} ${lastName}`,
          email: email,
          message: message,
        },
        "e1W7ANfk4ycF56NMt"
      );

      alert("Message sent successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

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
          padding: isMobile
            ? "120px 16px 60px 16px"
            : "140px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
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
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            marginBottom: "20px",
            zIndex: 1,
            background: "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            lineHeight: "1.1",
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
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "600px",
            opacity: 0.9,
            zIndex: 1,
            lineHeight: "1.6",
            padding: "0 10px",
          }}
        >
          Let's cooperate and bring NOVA to the people in need!
        </motion.p>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            width: "100%",
            maxWidth: "800px",
            marginTop: isMobile ? "40px" : "60px",
            padding: isMobile ? "24px 20px" : "40px",
            borderRadius: "32px",
            background: "rgba(147, 147, 147, 0.15)", // slightly softer background
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "18px" : "28px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              zIndex: 1,
              textAlign: "left",
            }}
          >
            <p
              style={{
                opacity: 0.8,
                margin: "10px 0 6px 0",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              First Name*
            </p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                transition: "border-color 0.3s",
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.8)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />

            <p
              style={{
                opacity: 0.8,
                margin: "18px 0 6px 0",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              Last Name*
            </p>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                transition: "border-color 0.3s",
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.8)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />

            <p
              style={{
                opacity: 0.8,
                margin: "18px 0 6px 0",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              Email*
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                transition: "border-color 0.3s",
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.8)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />

            <p
              style={{
                opacity: 0.8,
                margin: "18px 0 6px 0",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              Your Message*
            </p>
            <textarea
              placeholder="Your Message"
              rows={isMobile ? 4 : 6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.8)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
          </div>

          <div
            style={{
              marginTop: isMobile ? "10px" : "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={sendEmail}
              style={{
                padding: "16px 36px",
                borderRadius: "18px",
                border: "none",
                background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(59, 130, 246, 0.35)",
                transition: "transform 0.2s, boxShadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(59, 130, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(59, 130, 246, 0.35)";
              }}
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
