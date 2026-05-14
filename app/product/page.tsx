"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import Button from "@/components/Button";

export default function team() {
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
          animation: "gradientMove 12s infinite"
        }}
      />

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
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(40px, 6vw, 80px)",
          flexWrap: "wrap",
          width: "100%",
          margin: "0 auto",
          padding: "160px clamp(20px, 6vw, 100px)",
          position:"relative",
          overflow:"hidden",
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
              "linear-gradient(to bottom, #02061769 0%, #9fa1a3 100%, transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        {/*section2*/}
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
            whileHover="hover"
            style={{
              position: "relative",
            }}
          >
          {/* INFO BOX */}
          <motion.div
            variants={{
              hover: {
                opacity: 1,
                y: 0,
              },
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "30px",
              right: "30px",
              padding: "18px 22px",
              borderRadius: "20px",
              background: "rgba(10, 10, 10, 0.35)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.15)",

              color: "white",
              maxWidth: "700px",

              boxShadow: "0px 10px 40px rgba(0,0,0,0.35)",
            }}
          >

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1",
                opacity: 0.85,
                textAlign: "center",
              }}
            >
              The structure is a selfmade, modular 3D print
            </p>
          </motion.div>
          <motion.div
            variants={{
              hover: {
                y: -12,
                scale: 1.03,
                rotateY: -2,
              },
            }}
          >
            <Image
              src="/images/product/novad.png"
              alt="NOVA AI"
              width={400}
              height={400}
              style={{
                width: "100%",
                maxWidth: "750px",
                aspectRatio:"16/9",
                objectFit: "cover",
                borderRadius: "clamp(25px, 4vw, 45px)",
                boxShadow:
                  "0px 20px 60px rgba(0,0,0,0.45)",
              }}
            />
          </motion.div>
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
              color: "#798ca4",
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
              fontSize: "clamp(2.4rem, 10vw, 4.2rem)",
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
              fontSize: "clamp(0.7rem, 2.5vw, 1.3rem)",
              fontFamily: "Inter, sans-serif",
              maxWidth: "650px",
              margin: "0",
              textAlign:"left",
              opacity: 0.9,
              lineHeight: "1.7",
            }}
          >
            Distractions and mental overload reduce our productivity and
            lead to procrastination. NOVA solves this problem with a proactive, AI-powered assistant
            that recognizes situations and provides the right prompt at the right time. Thanks to local data processing,
            we guarantee assistance without the need for the cloud. Optimize your focus and transform your
            workflow into a supernova of efficiency!
          </motion.p>
        </div>
      </section>
      {/*section3 */}
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding:
            "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #d0eee2, #bae9ed)",
          color: "black",
          position:"relative",
          overflow:"hidden",
          margin: "0 auto",
        }}
      >
      {/*Label above */}
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
            maxWidth: "1500px",
            margin:"0 auto",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0px 25px 80px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </section>
      {/* FINAL SECTION */}
      <section
      style={{
        width: "100%",
        padding:
          "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
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
          gap: "60px",
          padding: "40px",
          borderRadius: "32px",
          background:
            "rgba(81, 24, 99, 0.29)",
          border:
            "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0px 20px 60px rgba(86, 86, 86, 0.32)",
        }}
      >

        {/* Left TEXT */}
        <div
          style={{
            flex: "1 1 350px",
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

          <Button
            text="Support Us"
            href="/contact"
          />
        </div>
        {/* Right IMAGE */}
        <div
          style={{
            flex: "1 1 500px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/product/Produkt.png"
            alt="NOVA Technology"
            width={900}
            height={600}
            style={{
              width: "100%",
              maxWidth: "700px",
              aspectRatio: "3 / 2",
              objectFit: "cover",

              display: "block",
              borderRadius: "24px",

              boxShadow:
                "0px 20px 50px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      </motion.div>
    </section>
    </main>
  );
}
