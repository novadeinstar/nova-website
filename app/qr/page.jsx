"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      <div
        style={{
          padding: "40px",
          border: "1px solid #ddd",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <QRCodeSVG
          value="https://nova.sfzhamburg.de"
          size={350}
        />

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontFamily: "sans-serif",
          }}
        >
          nova.sfzhamburg.de
        </p>
      </div>
    </main>
  );
}