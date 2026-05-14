"use client";

import { motion } from "framer-motion";
import Image from "next/image"

export default function team() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter",
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
          backgroundSize: "200% 200%",
          animation: "gradientMova 12s infinite"
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
            filter: "blur(0.5px) brightness(0.2)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(40, 39, 39, 0.45), rgba(45, 45, 45, 0.7))",
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
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: "bold",
              marginBottom: "24px",
              background:
                "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "translateY(-40px)",
            }}
          >
            NextGen Observational Voice Assistant
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
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          flexWrap: "wrap",
          width: "100%",
          margin: "0 auto",
          padding: "160px clamp(20px, 6vw, 100px)",
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
              "linear-gradient(#020617 0%, #9fa1a3 100%, transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />
        {/* Left SIDE */}
        <div
          style={{
            flex: "1 1 500px",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
                y:-8,
                scale: 1.02,
              }}
          >
            <Image
              src="/images/product/novad.png"
              alt="NOVA AI"
              width={400}
              height={400}
              style={{
                width: "100%",
                maxWidth: "620px",
                aspectRatio:"16/9",
                objectFit: "cover",
                borderRadius: "clamp(25px, 4vw, 45px)",
                boxShadow:
                  "0px 20px 60px rgba(0,0,0,0.45)",
                transform: "perspective(1600px) readOrCreateRouteCacheEntry(60deg)",
              }}
            />
          </motion.div>
        </div>
        {/* Right SIDE */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "800px",
            zIndex: 1,
            textAlign: "left",
          }}
        >
          {/*Label above */}
          <motion.p
            style={{
              color: "#194171",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            AI Robotics Platform
          </motion.p>
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              marginBottom: "20px",
              lineHeight: "1",
              background:
                "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              letterSpacing: "clamp(-1px, -0.15vw, -2px)",
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
            NextGen Observational Voice Assistant
            <br />Helping you to be more productive in your life!
          </motion.p>
        </div>
      </section>
    </main>
  );
}
