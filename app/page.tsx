"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import VoteButton from "@/components/VoteButton";

// ==========================================
// MODULAR NEWS DATA: Add new items here
// ==========================================
const newsData = [
  {
    id: "startupteens",
    date: "28.05.2026",
    title: "TOP 5 Germany StartUp Teens",
    subtitle: "Vote for NOVA at ",
    subtitleLink: "https://www.startupteens.de/challenge-2026/voting/",
    subtitleLinkText: "StartUp Teens",
    content: "We reached the TOP 5 in the national competition StartUp Teens. For the next round we need to gather as many votes as possible.",
    image: "/images/homepage/STLogo.png",
    imageAlt: "StartUp Teens Logo",
    imageLink: "https://www.startupteens.de/challenge-2026/voting/",
    buttonText: "The Robot",
    buttonHref: "/product",
    bgColor: "rgba(37, 99, 235, 0.08)",
    borderColor: "rgba(59, 130, 246, 0.25)",
    shadowColor: "rgba(37, 99, 235, 0.15)",
  },
  {
    id: "jufo",
    date: "10.04.2026",
    title: "3rd Prize at Jugend Forscht",
    content: "Perfect teamwork combined with individual strengths makes NOVA a successful project. Our vision goes far beyond today's possibilities.",
    image: "/images/homepage/JuFo.jpg",
    imageAlt: "Jugend Forscht",
    buttonText: "Our Team",
    buttonHref: "/team",
    bgColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.25)",
    shadowColor: "rgba(139, 92, 246, 0.15)",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    setHasHover(window.matchMedia("(hover: hover)").matches);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "#000",
      }}
    >
      {/* VOTE BANNER (Pops up and links to Startup Teens) */}
      <VoteButton />

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(30px, 6vw, 80px)",
          padding: isMobile
            ? "140px 16px 60px 16px"
            : "140px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 30%, #0d1224 0%, #020617 60%, #000 100%)",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* glowing pulsing background orb */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "clamp(300px, 60vw, 800px)",
            height: "clamp(300px, 60vw, 800px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #d7e3f6 0%, #8b5cf6 40%, #00f0ff 70%, transparent 100%)",
            filter: "blur(130px)",
            zIndex: 0,
          }}
        />

        {/* LEFT SIDE */}
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "800px",
            zIndex: 1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(3.5rem, 12vw, 7.5rem)",
              marginBottom: "20px",
              lineHeight: "1",
              background:
                "linear-gradient(90deg,#a4eded,#99f2bb,#a4ede5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "900",
              letterSpacing: "clamp(-1.5px, -0.2vw, -3px)",
              textShadow: "0 0 50px rgba(96, 165, 250, 0.1)",
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
              fontWeight: "500",
            }}
          >
            NextGen Observational Voice Assistant
            <br />
            <span style={{ color: "#54d6d6" }}>Helping you to be more productive in your life!</span>
          </motion.p>

          {/* BUTTON */}
          <div
            style={{
              marginTop: "clamp(25px, 4vw, 50px)",
            }}
          >
            <Button
              text="News"
              onClick={() => {
                document
                  .getElementById("News")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/homepage/robot_front.png"
              alt="NOVA AI Robot Model"
              width={400}
              height={530}
              style={{
                width: "clamp(260px, 80vw, 420px)",
                maxWidth: "480px",
                height: "auto",
                borderRadius: "32px",
                filter: "drop-shadow(0 20px 45px rgba(59, 130, 246, 0.35))", // Glowing shadow outline around the robot cutout!
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION (Futuristic Dark Slate Theme) */}
      <section
        style={{
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile
            ? "60px 16px"
            : "clamp(40px, 7vw, 80px) clamp(20px, 5vw, 80px)",
          background: "#030712", // Premium Dark Theme
          color: "white",
          width: "100%",
        }}
      >
        {/* CONTENT WRAPPER */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              color: "#a78bfa",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: "800",
              marginBottom: "28px",
              lineHeight: "1",
              fontSize: "0.95rem",
            }}
          >
            Pitch Video
          </motion.p>

          {/* VIDEO with Neon glow border */}
          <motion.video
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src="/videos/Nova_video.mp4"
            poster="/images/homepage/video-preview.png"
            controls
            playsInline
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "auto",
              aspectRatio: "16 / 9",
              borderRadius: "24px",
              border: "1.5px solid rgba(96, 165, 250, 0.35)",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.55), 0 0 30px rgba(96, 165, 250, 0.15)",
            }}
          />
        </div>
      </section>

      {/* FINAL NEWS SECTION */}
      <section
        id="News"
        style={{
          padding: isMobile
            ? "60px 16px"
            : "clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)",
          background: "#020617",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* TITLE */}
        <motion.p
          style={{
            color: "#cbd5e1",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontWeight: "700",
            marginBottom: "10px",
            textAlign: "center",
            opacity: 0.95,
            fontSize: "clamp(2.5rem, 6vw, 5.2rem)",
            lineHeight: "2",
          }}
        >
          News
        </motion.p>

        {/* NAVIGATION BUTTONS (Hidden on mobile/tablet) */}
        {!isMobile && (
          <>
            <button
              onClick={() => {
                document
                  .getElementById("newsScroller")
                  ?.scrollBy({
                    left: -700,
                    behavior: "smooth",
                  });
              }}
              style={{
                position: "absolute",
                left: "28px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "74px",
                height: "74px",
                borderRadius: "999px",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                color: "white",
                fontSize: "2.6rem",
                fontWeight: "200",
                cursor: "pointer",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1.12)";
                e.currentTarget.style.background =
                  "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.08))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1)";
                e.currentTarget.style.background =
                  "linear-gradient(to bottom right, rgba(255,255,255,0.12), rgba(255,255,255,0.04))";
              }}
            >
              ‹
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("newsScroller")
                  ?.scrollBy({
                    left: 700,
                    behavior: "smooth",
                  });
              }}
              style={{
                position: "absolute",
                right: "28px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "74px",
                height: "74px",
                borderRadius: "999px",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                color: "white",
                fontSize: "2.6rem",
                fontWeight: "200",
                cursor: "pointer",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1.12)";
                e.currentTarget.style.background =
                  "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.08))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-50%) scale(1)";
                e.currentTarget.style.background =
                  "linear-gradient(to bottom right, rgba(255,255,255,0.12), rgba(255,255,255,0.04))";
              }}
            >
              ›
            </button>
          </>
        )}

        {/* HORIZONTAL SCROLLER */}
        <div
          id="newsScroller"
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            paddingBottom: "20px",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {newsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={hasHover ? { y: -6 } : undefined}
              style={{
                minWidth: "100%",
                flex: "0 0 100%",
                scrollSnapAlign: "center",
                borderRadius: "32px",
                background: item.bgColor,
                border: `1.5px solid ${item.borderColor}`,
                backdropFilter: "blur(12px)",
                boxShadow: `0px 15px 45px ${item.shadowColor}`,
                padding: isMobile ? "24px 20px" : "40px", // reduced padding on mobile for compactness
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: isMobile ? "24px" : "50px", // reduced gaps
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    flex: "1 1 250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.imageLink ? (
                    <a
                      href={item.imageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "100%",
                        maxWidth: "380px", // slightly smaller to be compact
                        display: "flex",
                        justifyContent: "center",
                        transition: "transform 0.25s ease",
                      }}
                      onMouseEnter={(e) => hasHover && (e.currentTarget.style.transform = "scale(1.03)")}
                      onMouseLeave={(e) => hasHover && (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={500}
                        height={400}
                        style={{
                          width: "100%",
                          borderRadius: "24px",
                          height: "auto",
                        }}
                      />
                    </a>
                  ) : (
                    <div style={{ width: "100%", maxWidth: "380px" }}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={500}
                        height={400}
                        style={{
                          width: "100%",
                          borderRadius: "24px",
                          height: "auto",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* TEXT */}
                <div
                  style={{
                    flex: "1 1 300px",
                    color: "white",
                  }}
                >
                  <p style={{ color: "#a78bfa", fontSize: "0.85rem", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase", fontWeight: "700" }} >
                    {item.date}
                  </p>
                  <h2
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                      marginBottom: "12px",
                      fontWeight: "800",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", marginBottom: "12px", fontWeight: "600" }}>
                      {item.subtitle}
                      {item.subtitleLink && (
                        <a
                          href={item.subtitleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#60a5fa",
                            textDecoration: "none",
                          }}
                        >
                          {item.subtitleLinkText}
                        </a>
                      )}
                    </h3>
                  )}

                  <p
                    style={{
                      lineHeight: "1.6",
                      opacity: 0.85,
                      marginBottom: "20px",
                      fontSize: "clamp(0.92rem, 1.1vw, 1rem)",
                    }}
                  >
                    {item.content}
                  </p>

                  <Button
                    text={item.buttonText}
                    href={item.buttonHref}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPONSOR SECTION (Futuristic Dark Glassmorphic Grid) */}
      <section
        style={{
          width: "100%",
          padding: isMobile
            ? "60px 16px"
            : "clamp(50px, 6vw, 90px) clamp(20px, 5vw, 80px)",
          background: "#020617",
          color: "white",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontSize:
              "clamp(2rem, 5vw, 3.8rem)",
            marginBottom: "20px",
            fontWeight: "800",
            letterSpacing: "-1.5px",
            color: "white",
            lineHeight: "1.1",
          }}
        >
          Supported by Industry & Innovation
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            lineHeight: "1.8",
            opacity: 0.75,
            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            color: "#94a3b8",
          }}
        >
          NOVA is proudly supported by partners and organizations that believe in innovation, technology and the next generation of engineering talent.
        </p>

        {/* SPONSOR GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* SFZ */}
          <motion.div
            whileHover={
              hasHover
                ? {
                    y: -6,
                    borderColor: "rgba(245, 158, 11, 0.5)",
                    boxShadow: "0 15px 40px rgba(245, 158, 11, 0.15)",
                  }
                : undefined
            }
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "rgba(15, 23, 42, 0.45)",
              border: "1.5px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "800",
                marginBottom: "12px",
                letterSpacing: "2.5px",
                fontSize: "0.8rem",
              }}
            >
              GOLD SPONSOR
            </p>

            <a
              href="https://www.sfz-hamburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <Image
                src="/images/sponsors/SFZ.png"
                alt="SFZ"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "90px",
                  objectFit: "contain",
                  margin: "12px auto 0 auto",
                  display: "block",
                }}
              />
            </a>
          </motion.div>

          {/* AKQUINET */}
          <motion.div
            whileHover={
              hasHover
                ? {
                    y: -6,
                    borderColor: "rgba(245, 158, 11, 0.5)",
                    boxShadow: "0 15px 40px rgba(245, 158, 11, 0.15)",
                  }
                : undefined
            }
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "rgba(15, 23, 42, 0.45)",
              border: "1.5px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "800",
                marginBottom: "12px",
                letterSpacing: "2.5px",
                fontSize: "0.8rem",
              }}
            >
              GOLD SPONSOR
            </p>

            <a
              href="https://www.akquinet.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <Image
                src="/images/sponsors/Akquinet.png"
                alt="Akquinet"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "90px",
                  objectFit: "contain",
                  margin: "12px auto 0 auto",
                  display: "block",
                }}
              />
            </a>
          </motion.div>

          {/* EASYEDA */}
          <motion.div
            whileHover={
              hasHover
                ? {
                    y: -6,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 15px 40px rgba(59, 130, 246, 0.15)",
                  }
                : undefined
            }
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "rgba(15, 23, 42, 0.45)",
              border: "1.5px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                color: "#3b82f6",
                fontWeight: "800",
                marginBottom: "12px",
                letterSpacing: "2.5px",
                fontSize: "0.8rem",
              }}
            >
              TECHNOLOGY SPONSOR
            </p>

            <a
              href="https://easyeda.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <Image
                src="/images/sponsors/EasyEDA.png"
                alt="EasyEDA"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "90px",
                  objectFit: "contain",
                  margin: "12px auto 0 auto",
                  display: "block",
                }}
              />
            </a>
          </motion.div>

          {/* ARIC */}
          <motion.div
            whileHover={
              hasHover
                ? {
                    y: -6,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 15px 40px rgba(168, 85, 247, 0.15)",
                  }
                : undefined
            }
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "rgba(15, 23, 42, 0.45)",
              border: "1.5px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                color: "#a855f7",
                fontWeight: "800",
                marginBottom: "12px",
                letterSpacing: "2.5px",
                fontSize: "0.8rem",
              }}
            >
              SUPPORTER
            </p>

            <a
              href="https://aric-hamburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <Image
                src="/images/sponsors/Aric.png"
                alt="Aric"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "90px",
                  objectFit: "contain",
                  margin: "12px auto 0 auto",
                  display: "block",
                }}
              />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}