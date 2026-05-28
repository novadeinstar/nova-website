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
            "120px clamp(20px, 6vw, 80px) clamp(40px, 6vw, 100px)",
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
                width: "clamp(350px, 40vw, 450px)",
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
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding:
            "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
          color: "black",
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
            maxWidth: "1300px",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </section>



      {/* FINAL NEWS SECTION */}
      <section
        id="News"
        style={{
          padding:
            "clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)",
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

        {/* NAVIGATION BUTTONS */}
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
          {/* StartUp Teens 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            style={{
              minWidth: "100%",
              flex: "0 0 100%",
              scrollSnapAlign: "center",
              borderRadius: "32px",
              background:
                "rgba(37, 99, 235, 0.12)",
              border:
                "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0px 20px 60px rgba(86,86,86,0.3)",
              padding:
                "clamp(28px, 4vw, 50px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "50px",
              }}
            >
              {/* IMAGE */}
              <a href="https://www.startupteens.de/" target="_blank" rel="noopener noreferrer" style={{ flex: "1 1 320px", display: "flex", justifyContent: "center", alignItems: "center", transition: "transform 0.25s ease", }} > <Image src="/images/homepage/STLogo.png" alt="StartUp Teens" width={500} height={400} style={{ width: "100%", maxWidth: "420px", borderRadius: "24px", height: "auto", cursor: "pointer", }} /> </a>

              {/* TEXT */}
              <div
                style={{
                  flex: "1 1 400px",
                  color: "white",
                }}
              >
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", letterSpacing: "2px", marginBottom: "12px", textTransform: "uppercase", fontWeight: "600", }} > 28.05.2026 </p>
                <h2
                  style={{
                    fontSize:
                      "clamp(2rem, 4vw, 2.7rem)",
                    marginBottom: "20px",
                  }}
                >
                 TOP 5 Germany StartUp Teens
                </h2>
                <h2>
                  Vote for NOVA at{" "}
                  <a
                    href="https://www.startupteens.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#60a5fa",
                      textDecoration: "none",
                    }}
                  >
                    StartUp Teens
                  </a>
                </h2>

                <p
                  style={{
                    lineHeight: "1.8",
                    opacity: 0.82,
                    marginBottom: "30px",
                    fontSize: "1.05rem",
                  }}
                >
                  We reached the TOP 5 in the national competition StartUp Teens. For the next round be need to gather as much votes as possible.
                </p>

                <Button
                  text="The Robot"
                  href="/product"
                />
              </div>
            </div>
          </motion.div>
          {/*  JuFo */}
          <motion.div
            whileHover={{ y: -6 }}
            style={{
              minWidth: "100%",
              flex: "0 0 100%",
              scrollSnapAlign: "center",
              borderRadius: "32px",
              background:
                "rgba(81, 24, 99, 0.17)",
              border:
                "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0px 20px 60px rgba(86,86,86,0.3)",
              padding:
                "clamp(28px, 4vw, 50px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "50px",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  flex: "1 1 320px",
                }}
              >
                <Image
                  src="/images/homepage/JuFo.jpg"
                  alt="Jugend Forscht"
                  width={500}
                  height={400}
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    height: "auto",
                  }}
                />
              </div>

              {/* TEXT */}
              <div
                style={{
                  flex: "1 1 400px",
                  color: "white",
                }}
              >
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", letterSpacing: "2px", marginBottom: "12px", textTransform: "uppercase", fontWeight: "600", }} > 10.04.2026 </p>
                <h2
                  style={{
                    fontSize:
                      "clamp(2rem, 4vw, 2.7rem)",
                    marginBottom: "20px",
                  }}
                >
                  3rd Prize at Jugend Forscht
                </h2>

                <p
                  style={{
                    lineHeight: "1.8",
                    opacity: 0.82,
                    marginBottom: "30px",
                    fontSize: "1.05rem",
                  }}
                >
                  Perfect teamwork combined with
                  individual strengths makes NOVA
                  a successful project. Our vision
                  goes far beyond today's
                  possibilities.
                </p>

                <Button
                  text="Our Team"
                  href="/team"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SPONSOR SECTION */}
      <section
        style={{
          width: "100%",
          padding:
            "clamp(50px, 6vw, 90px) clamp(20px, 5vw, 80px)",
          background:
            "linear-gradient(to bottom, #dbeafe 0%, #f8fafc 45%, #ffffff 100%)",
          color: "black",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize:
              "clamp(2.4rem, 6vw, 4.2rem)",
            marginBottom: "22px",
            fontWeight: "800",
            letterSpacing: "-2px",
            color: "#0f172a",
            lineHeight: "1",
          }}
        >
          Supported by Industry & Innovation
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto 70px auto",
            lineHeight: "1.9",
            opacity: 0.72,
            fontSize: "1.15rem",
            color: "#334155",
          }}
        >
          NOVA is proudly supported by partners
          and organizations that believe in
          innovation, technology and the next
          generation of engineering talent.
        </p>

        {/* SPONSOR GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {/* SFZ */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 20px 60px rgba(37,99,235,0.18)",
            }}
            style={{
              padding: "34px",
              borderRadius: "28px",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.96))",
              border:
                "1.5px solid rgba(37,99,235,0.22)",
              boxShadow:
                "0 12px 40px rgba(30,41,59,0.10)",
              transition: "all 0.28s ease",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "2px",
              }}
            >
              GOLD SPONSOR
            </p>

            <a
              href="https://www.sfz.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsors/SFZ.png"
                alt="SFZ"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "110px",
                  objectFit: "contain",
                  margin: "22px auto 0 auto",
                  display: "block",
                  filter:
                    "drop-shadow(0px 10px 30px rgba(37,99,235,0.10))",
                }}
              />
            </a>
          </motion.div>

          {/* AKQUINET */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 20px 60px rgba(37,99,235,0.18)",
            }}
            style={{
              padding: "34px",
              borderRadius: "28px",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.96))",
              border:
                "1.5px solid rgba(37,99,235,0.22)",
              boxShadow:
                "0 12px 40px rgba(30,41,59,0.10)",
            }}
          >
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "2px",
              }}
            >
              GOLD SPONSOR
            </p>

            <a
              href="https://www.akquinet.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsors/Akquinet.png"
                alt="Akquinet"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "110px",
                  objectFit: "contain",
                  margin: "22px auto 0 auto",
                  display: "block",
                  filter:
                    "drop-shadow(0px 10px 30px rgba(37,99,235,0.10))",
                }}
              />
            </a>
          </motion.div>

          {/* EASYEDA */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 20px 60px rgba(37,99,235,0.18)",
            }}
            style={{
              padding: "34px",
              borderRadius: "28px",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.96))",
              border:
                "1.5px solid rgba(37,99,235,0.22)",
              boxShadow:
                "0 12px 40px rgba(30,41,59,0.10)",
            }}
          >
            <p
              style={{
                color: "#3b82f6",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "2px",
              }}
            >
              TECHNOLOGY SPONSOR
            </p>

            <a
              href="https://easyeda.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsors/EasyEDA.png"
                alt="EasyEDA"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "110px",
                  objectFit: "contain",
                  margin: "22px auto 0 auto",
                  display: "block",
                  filter:
                    "drop-shadow(0px 10px 30px rgba(37,99,235,0.10))",
                }}
              />
            </a>
          </motion.div>

          {/* ARIC */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 20px 60px rgba(37,99,235,0.18)",
            }}
            style={{
              padding: "34px",
              borderRadius: "28px",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.96))",
              border:
                "1.5px solid rgba(37,99,235,0.22)",
              boxShadow:
                "0 12px 40px rgba(30,41,59,0.10)",
            }}
          >
            <p
              style={{
                color: "#a855f7",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "2px",
              }}
            >
              SUPPORTER
            </p>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsors/Aric.png"
                alt="Aric"
                width={400}
                height={180}
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "110px",
                  objectFit: "contain",
                  margin: "22px auto 0 auto",
                  display: "block",
                  filter:
                    "drop-shadow(0px 10px 30px rgba(37,99,235,0.10))",
                }}
              />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}