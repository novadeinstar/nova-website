export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        NOVA
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        A new kind of AI assistant — private, local, and truly intelligent.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}>
        Learn more
      </button>
    </main>
  );
}