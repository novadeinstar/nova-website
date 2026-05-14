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
        boxSizing:"border-box",
        background: "#000",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 120px)",
          padding:
            "140px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 30%, #111827 0%, #020617 60%, #000 100%)",
          color: "white",
          overflow: "hidden",
          maxWidth: "1600px",
          margin: "0 auto",
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
            width:"100%",
          }}
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(2.5rem, 10vw, 6.7rem)",
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

          {/* BUTTON */}
          <div
            style={{
              marginTop: "clamp(25px, 4vw, 50px)",
            }}
          >
            <Button
              text="Our Robot"
              href="/product"
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
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/homepage/nova.jpeg"
              alt="NOVA AI"
              width={400}
              height={400}
              style={{
                width: "min(90vw, 450px)",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "clamp(25px, 4vw, 45px)",
                boxShadow:
                  "0px 20px 60px rgba(0,0,0,0.45)"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* video SECTION */}
      <section
        style={{
          width:"100%",
          minHeight: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column",
          gap: "20px",
          padding:
            "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
          color: "black",
          maxWidth: "1600px",
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
            Pitch Video
          </motion.p>
        {/* Video */}
        <video
          src="/videos/Nova_video.mp4"
          poster="/images/homepage/video-preview.png"
          controls
          playsInline
          style={{
            width: "100%",
            maxWidth: "100%",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </section>

      {/* FINAL SECTION */}
      <section
      style={{
        width:"100%",
        padding:
          "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      {/* CARD */}
      <motion.div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection:"column",
          gap: "30px",
          padding: "clamp(30px,5vw,40px)",
          borderRadius: "32px",
          background:
            "rgba(81, 24, 99, 0.17)",
          border:
            "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0px 20px 60px rgba(86, 86, 86, 0.3)",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            flex: "1 1 320px",
          }}
        >
          <Image
            src="/images/homepage/JuFo.jpg"
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
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              marginBottom: "20px",
            }}
          >
            3. prize on state level of "Jugend Forscht" competition 
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.8,
              marginBottom: "30px",
            }}
          >
            Perfect teamwork combined with individuall strength makes NOVA a successful project. Our vision is going far beyond!
          </p>

          <Button
            text="Our Team"
            href="/team"
          />
        </div>
      </motion.div>
    </section>
    </main>
  );
}