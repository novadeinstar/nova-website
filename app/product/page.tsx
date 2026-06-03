"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";

export default function Product() {
  const [hasHover, setHasHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = [
    {
      title: "Proactive AI Prompts",
      content:
        "Distractions and mental overload reduce our productivity. NOVA solves this with a proactive, AI-powered assistant that recognizes situations and provides the right prompt at the right time.",
      borderColor: "rgba(96, 165, 250, 0.25)",
      shadowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
      title: "100% Local Processing",
      content:
        "Thanks to local data processing, we guarantee assistance without the need for the cloud. Your data remains secure on your local device for maximum privacy.",
      borderColor: "rgba(139, 92, 246, 0.25)",
      shadowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
      title: "Supernova Efficiency",
      content:
        "Optimize your focus and transform your workflow into a supernova of efficiency! Keep your momentum and stay in the zone without interruptions.",
      borderColor: "rgba(34, 211, 238, 0.25)",
      shadowColor: "rgba(34, 211, 238, 0.15)",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial",
        padding: "0px",
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
            "linear-gradient(to bottom, #5c93ec9c 0%, #8a5cf6d6 100%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          backgroundSize: "200% 200%",
          animation: "gradientMove 12s infinite",
        }}
      />

      {/* BACKGROUND VIDEO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/Drehen.mp4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
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
            filter: "blur(0.5px) brightness(0.4)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(40, 39, 39, 0.07), rgba(45, 45, 45, 0.37))",
            zIndex: 1,
          }}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "20px",
            maxWidth: "1000px",
          }}
        >
          <h1
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
            Our Robot
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 2vw, 2.7rem)",
              opacity: 0.85,
              marginTop: "20px",
            }}
          >
            "NOVA — Dein Star"
          </p>
        </motion.div>
      </section>

      {/* DESCRIPTION SECTION (Two Columns on Desktop, Stacked on Mobile) */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(40px, 6vw, 80px)",
          flexWrap: "wrap",
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "60px 16px" : "120px clamp(20px, 6vw, 100px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* glowing background orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            width: "clamp(300px, 50vw, 700px)",
            height: "clamp(300px, 50vw, 700px)",
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom, #02061769 0%, #9fa1a3 100%, transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        {/* Left SIDE (Image & Info Box) */}
        <div
          style={{
            flex: "1 1 300px",
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={hasHover ? "hover" : undefined}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "750px",
            }}
          >
            {/* IMAGE */}
            <motion.div
              variants={
                hasHover
                  ? {
                      hover: {
                        y: -12,
                        scale: 1.03,
                        rotateY: -2,
                      },
                    }
                  : undefined
              }
            >
              <Image
                src="/images/product/novad.png"
                alt="NOVA AI Description"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  borderRadius: "clamp(25px, 4vw, 45px)",
                  boxShadow: "0px 20px 60px rgba(0,0,0,0.45)",
                }}
              />
            </motion.div>

            {/* INFO BOX */}
            <motion.div
              variants={
                hasHover
                  ? {
                      hover: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : undefined
              }
              initial={{
                opacity: hasHover ? 0 : 1,
                y: hasHover ? 20 : 0,
              }}
              animate={!hasHover ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.35,
              }}
              style={{
                position: isMobile ? "relative" : "absolute",
                bottom: isMobile ? "auto" : "-30px",
                left: isMobile ? "auto" : "30px",
                right: isMobile ? "auto" : "30px",
                marginTop: isMobile ? "20px" : "0px",
                padding: "18px 22px",
                borderRadius: "20px",
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                  opacity: 0.9,
                  textAlign: "center",
                }}
              >
                The structure is a selfmade, modular 3D print
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right SIDE (Flashy Feature Card Grid) */}
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "800px",
            zIndex: 1,
            textAlign: "left",
          }}
        >
          {/* Label above */}
          <motion.p
            style={{
              color: "#798ca4",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "12px",
              opacity: 0.9,
              fontSize: "0.85rem",
            }}
          >
            AI Robotics Platform
          </motion.p>
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(2.4rem, 10vw, 4.2rem)",
              marginBottom: "24px",
              lineHeight: "1.1",
              background:
                "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              letterSpacing: "clamp(-1px, -0.15vw, -2px)",
            }}
          >
            NOVA
          </motion.h2>

          {/* FLASHY GRID OF 3 CARDS INSTEAD OF BLOCK PARAGRAPH */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                whileHover={hasHover ? { scale: 1.01, x: 5 } : undefined}
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  background: "rgba(15, 23, 42, 0.45)",
                  border: `1.5px solid ${feat.borderColor}`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.35), 0 0 15px ${feat.shadowColor}`,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: "2rem", lineHeight: "1" }}>{feat.icon}</div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: "700",
                      marginBottom: "6px",
                      color: "white",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: "1.5",
                      opacity: 0.85,
                      margin: 0,
                    }}
                  >
                    {feat.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO VIDEO SECTION */}
      <section
        style={{
          minHeight: isMobile ? "auto" : "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: isMobile
            ? "60px 16px"
            : "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #d0eee2, #bae9ed)",
          color: "black",
          position: "relative",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        {/* Label above */}
        <motion.p
          style={{
            color: "#798ca4",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "6px",
            marginTop: "0px",
            lineHeight: "1",
            opacity: 0.9,
          }}
        >
          Demo Video
        </motion.p>
        {/* Video */}
        <video
          src="/videos/Demo.mp4"
          poster="/images/product/demo-preview.jpg"
          controls
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            maxWidth: "1100px", // shrunken slightly to match pitch video layout
            margin: "0 auto",
            borderRadius: "20px",
            height: "auto",
            aspectRatio: "16 / 9",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </section>

      {/* FINAL SECTION */}
      <section
        style={{
          width: "100%",
          padding: isMobile
            ? "60px 16px"
            : "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
          background: "#1b5051",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* CARD */}
        <motion.div
          style={{
            width: "100%",
            maxWidth: "1400px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
            padding: isMobile ? "24px" : "40px",
            borderRadius: "32px",
            background: "rgba(81, 24, 99, 0.29)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 20px 60px rgba(86, 86, 86, 0.32)",
          }}
        >
          {/* Left TEXT */}
          <div
            style={{
              flex: "1 1 300px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                marginBottom: "20px",
              }}
            >
              Our Vision
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                opacity: 0.8,
                marginBottom: "30px",
              }}
            >
              We want to build a StartUp and bring NOVA to people worldwide!
            </p>

            <Button text="Support Us" href="/contact" />
          </div>

          {/* Right IMAGE */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              src="/images/product/Produkt.png"
              alt="NOVA Technology Card"
              width={900}
              height={600}
              style={{
                width: "100%",
                maxWidth: "700px",
                aspectRatio: "3 / 2",
                objectFit: "cover",
                display: "block",
                borderRadius: "24px",
                boxShadow: "0px 20px 50px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}