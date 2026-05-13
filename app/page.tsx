"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "#000",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 120px)",
          padding:
            "clamp(30px, 6vw, 100px) clamp(20px, 6vw, 80px)",
          position: "relative",
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
            width: "clamp(300px, 50vw, 700px)",
            height: "clamp(300px, 50vw, 700px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #3b82f6 0%, #8b5cf6 40%, transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        {/* LEFT SIDE */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "800px",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(3rem, 10vw, 6.7rem)",
              marginBottom: "20px",
              lineHeight: "1",
              background:
                "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              letterSpacing: "-2px",
            }}
          >
            NOVA
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
              maxWidth: "900px",
              margin: "0 auto",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            NextGen Observational Voice Assistant —
            private, local, and truly intelligent.
          </motion.p>

          {/* BUTTON */}
          <div
            style={{
              marginTop: "clamp(25px, 4vw, 50px)",
            }}
          >
            <Button
              text="Our Team"
              href="/team"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/nova.jpeg"
            alt="NOVA AI"
            width={400}
            height={400}
            style={{
              width: "100%",
              maxWidth: "370px",
              height: "auto",
              borderRadius: "clamp(25px, 4vw, 45px)",
            }}
          />
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 100px)",
          padding:
            "clamp(40px, 8vw, 100px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
          color: "black",
        }}
      >
        {/* IMAGE */}
        <video
          src="/videos/Nova_video.mp4"
          autoPlay
          loop
          playsInline
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "20px",
          }}
        />
      </section>

      {/* FINAL SECTION */}
      <section
      style={{
        padding: "120px 20px",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "60px",
          padding: "40px",
          borderRadius: "32px",
          background:
            "rgba(255,255,255,0.04)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0px 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            flex: "1 1 320px",
          }}
        >
          <Image
            src="/images/JuFo.jpeg"
            alt="NOVA Technology"
            width={500}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          style={{
            flex: "1 1 400px",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
            }}
          >
            Intelligent Local AI
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.8,
              marginBottom: "30px",
            }}
          >
            NOVA combines privacy-focused local AI with
            adaptive voice intelligence for next-generation
            interaction systems.
          </p>

          <Button
            text="Learn More"
            href="/product"
          />
        </div>
      </div>
    </section>
    </main>
  );
}