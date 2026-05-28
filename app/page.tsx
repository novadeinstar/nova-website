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
            "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
          background: "#020617",
          maxWidth: "1600px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {/* TITLE */}
        <motion.p
          style={{
            color: "#798ca4",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "30px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          News
        </motion.p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={() => {
              document
                .getElementById("newsScroller")
                ?.scrollBy({
                  left: -500,
                  behavior: "smooth",
                });
            }}
            style={{
              padding: "12px 20px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              background: "#1e293b",
              color: "white",
              fontWeight: "600",
            }}
          >
            ← Previous
          </button>

          <button
            onClick={() => {
              document
                .getElementById("newsScroller")
                ?.scrollBy({
                  left: 500,
                  behavior: "smooth",
                });
            }}
            style={{
              padding: "12px 20px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              background: "#2563eb",
              color: "white",
              fontWeight: "600",
            }}
          >
            Next →
          </button>
        </div>

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
          {/* CARD 1 */}
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
              padding: "40px",
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

          {/* CARD 2 */}
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
              padding: "40px",
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
                  src="/images/homepage/nova.jpeg"
                  alt="New PCB"
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
                <h2
                  style={{
                    fontSize:
                      "clamp(2rem, 4vw, 2.7rem)",
                    marginBottom: "20px",
                  }}
                >
                  New PCB Generation
                </h2>

                <p
                  style={{
                    lineHeight: "1.8",
                    opacity: 0.82,
                    marginBottom: "30px",
                    fontSize: "1.05rem",
                  }}
                >
                  Using advanced engineering and
                  optimized manufacturing, our
                  latest hardware generation is
                  faster, smaller and more
                  efficient than ever before.
                </p>

                <Button
                  text="Learn More"
                  href="/technology"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPONSOR SECTION */}
      <section
        style={{
          padding:
            "clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)",
          background:
            "linear-gradient(to bottom, #020617, #000)",
          color: "white",
          textAlign: "center",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <motion.p
          style={{
            color: "#798ca4",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "20px",
            opacity: 0.9,
          }}
        >
          Sponsors & Supporters
        </motion.p>

        <h2
          style={{
            fontSize:
              "clamp(2rem, 5vw, 3rem)",
            marginBottom: "25px",
          }}
        >
          Supported by Industry & Innovation
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto 60px auto",
            lineHeight: "1.8",
            opacity: 0.75,
            fontSize: "1.1rem",
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
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {/* GOLD SPONSORS */}
          <div
            style={{
              padding: "30px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color: "#fbbf24",
                fontWeight: "700",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              GOLD SPONSOR
            </p>

            <h3>SFZ</h3>
          </div>

          <div
            style={{
              padding: "30px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color: "#fbbf24",
                fontWeight: "700",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              GOLD SPONSOR
            </p>

            <h3>akquinet</h3>
          </div>

          {/* TECHNOLOGY SPONSOR */}
          <div
            style={{
              padding: "30px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color: "#60a5fa",
                fontWeight: "700",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              TECHNOLOGY SPONSOR
            </p>

            <h3>EasyEDA</h3>
          </div>

          {/* SUPPORTER */}
          <div
            style={{
              padding: "30px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                color: "#c084fc",
                fontWeight: "700",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              SUPPORTER
            </p>

            <h3>Aric</h3>
          </div>
        </div>
      </section>

    </main>
  );
}