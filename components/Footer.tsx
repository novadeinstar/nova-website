import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#041042",
        color: "white",
        padding:
          "clamp(40px, 6vw, 80px) clamp(20px, 6vw, 80px)",
      }}
    >
      {/* TOP AREA */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "350px",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="NOVA Logo"
            width={70}
            height={70}
            style={{
              marginBottom: "20px",
              width: "clamp(50px, 6vw, 70px)",
              height: "auto",
            }}
          />

          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "12px",
            }}
          >
            NOVA
          </h2>

          <p
            style={{
              opacity: 0.75,
              lineHeight: "1.7",
            }}
          >
            Next-generation local AI systems focused on
            privacy, intelligence, and adaptive human
            interaction.
          </p>
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            flex: "1 1 180px",
          }}
        >
          <h3
            style={{
              marginBottom: "18px",
            }}
          >
            Navigation
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
            flex: "1 1 180px",
          }}
        >
          <h3
            style={{
              marginBottom: "18px",
            }}
          >
            Social Media
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* LINKS */}

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
              YouTube (comming soon)
            </a>
            <a
              href="https://instagram.com/"
              target= "_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >  
            </a>
          </div>
        </div>

        {/* SPONSORS */}
        <div
          style={{
            flex: "1 1 220px",
          }}
        >
          <h3
            style={{
              marginBottom: "18px",
            }}
          >
            Sponsors & Partners
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
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
                width={140}
                height={60}
                style={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />

              <span>SFZ Hamburg</span>
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
                width={140}
                height={60}
                style={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <span>akquinet</span>
            </a>

            <a
              href="https://easyeda.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={sponsorStyle}
            >
              <Image
                src="/images/sponsors/EasyEDA.jpg"
                alt="EasyEDA"
                width={140}
                height={60}
                style={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />

              <span>EasyEDA</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div
        style={{
          marginTop: "60px",
          paddingTop: "30px",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",

          opacity: 0.7,
          fontSize: "0.95rem",
        }}
      >
        {/* LEGAL */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
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
          © 2026 NOVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* LINK STYLE */
const linkStyle = {
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  transition: "0.2s",
};
const sponsorStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",

  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",

  padding: "10px 0px",
};