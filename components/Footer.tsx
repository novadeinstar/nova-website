"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer
      style={{
        background: "#041042",
        color: "white",
        padding: isMobile
          ? "30px 16px 20px 16px"
          : "clamp(15px, 3vw, 30px) clamp(20px, 6vw, 80px)",
      }}
    >
      {/* TOP AREA */}
      <div
        style={{
          display: isMobile ? "grid" : "flex",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : undefined,
          flexWrap: isMobile ? undefined : "wrap",
          justifyContent: "space-between",
          gap: isMobile ? "24px 16px" : "15px",
        }}
      >
        {/* BRAND (Full width on mobile grid span 2 to look clean, or 1 column depending on design. Let's make it span 2 so it sits nicely at the top, or keep it in grid) */}
        <div
          style={{
            gridColumn: isMobile ? "span 2" : "auto",
            flex: "1 1 250px",
            maxWidth: isMobile ? "none" : "350px",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.06)" : "none",
            paddingBottom: isMobile ? "16px" : "0px",
            marginBottom: isMobile ? "-8px" : "0px",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="NOVA Logo"
            width={isMobile ? 80 : 125}
            height={isMobile ? 80 : 125}
            style={{
              marginBottom: "8px",
              width: isMobile ? "85px" : "120px",
              height: "auto",
            }}
          />


          <p
            style={{
              opacity: 0.75,
              lineHeight: "1.5",
              fontSize: "0.85rem",
            }}
          >
            NextGen Observational Voice Assistant
            <br />"NOVA - Dein Star"
          </p>
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            flex: "1 1 120px",
          }}
        >
          <h3
            style={{
              marginBottom: "12px",
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#60a5fa",
            }}
          >
            Navigation
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "0.85rem",
            }}
          >
            <Link href="/" style={linkStyle}>
              Home
            </Link>

            <Link href="/team" style={linkStyle}>
              Team
            </Link>

            <Link href="/product" style={linkStyle}>
              Product
            </Link>

            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div
          style={{
            flex: "1 1 150px",
          }}
        >
          <h3
            style={{
              marginBottom: "12px",
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#60a5fa",
            }}
          >
            Social Media
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "0.85rem",
              wordBreak: "break-word",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Email: novadeinstar@gmail.com
            </span>
            <a
              href="https://www.linkedin.com/in/david-shi-b845563b5"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              LinkedIn
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              YouTube
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* SPONSORS */}
        <div
          style={{
            gridColumn: isMobile ? "span 2" : "auto",
            flex: "1 1 220px",
            borderTop: isMobile ? "1px solid rgba(255,255,255,0.06)" : "none",
            paddingTop: isMobile ? "16px" : "0px",
          }}
        >
          <h3
            style={{
              marginBottom: "12px",
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#60a5fa",
            }}
          >
            Sponsoren
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              flexWrap: "wrap",
              gap: "16px",
              fontSize: "0.85rem",
            }}
          >
            <a
              href="https://www.sfz-hamburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={sponsorStyle}
            >
              <Image
                src="/images/sponsors/SFZ.png"
                alt="SFZ Hamburg"
                width={100}
                height={40}
                style={{
                  width: "70px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <span style={{ fontSize: "0.8rem" }}>SFZ Hamburg</span>
            </a>

            <a
              href="https://www.akquinet.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={sponsorStyle}
            >
              <Image
                src="/images/sponsors/Akquinet.png"
                alt="akquinet"
                width={100}
                height={40}
                style={{
                  width: "80px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <span style={{ fontSize: "0.8rem" }}>Akquinet</span>
            </a>

            <a
              href="https://easyeda.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={sponsorStyle}
            >
              <Image
                src="/images/sponsors/EasyEDA.png"
                alt="EasyEDA"
                width={80}
                height={30}
                style={{
                  width: "50px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <span style={{ fontSize: "0.8rem" }}>EasyEDA</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div
        style={{
          marginTop: isMobile ? "24px" : "30px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "12px",
          opacity: 0.7,
          fontSize: "0.8rem",
        }}
      >
        {/* LEGAL */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link href="/legal/impressum" style={linkStyle}>
            Impressum
          </Link>

          <Link href="/legal/datenschutz" style={linkStyle}>
            Datenschutz
          </Link>

          <Link href="/legal/terms" style={linkStyle}>
            Terms
          </Link>

          <Link href="/legal/cookies" style={linkStyle}>
            Cookies
          </Link>
        </div>

        {/* COPYRIGHT */}
        <div>
          <Link href="/fun/1" style={linkStyle}>
            © 2026 NOVA. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* LINK STYLE */
const linkStyle = {
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const sponsorStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  padding: "4px 0",
};