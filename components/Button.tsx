"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  href,
  onClick,
}: ButtonProps) {
  const buttonContent = (
    <motion.button
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{
        scale: 1.08,
        y: -2,
        boxShadow: "0px 0px 30px rgba(127, 128, 222, 0.7)",
      }}
      whileTap={{
        scale: 0.94,
      }}
      onClick={onClick}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(12px, 2vw, 16px) clamp(20px, 4vw, 36px)",
        borderRadius: "clamp(10px, 2vw, 16px)",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "600",
        letterSpacing: "0.5px",
        color: "white",
        background: "rgba(66, 114, 127, 0.61)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0px 10px 30px rgba(59,130,246,0.25)",
        transition: "all 0.2s ease",
      }}
    >
      {/* glow overlay */}
      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)",
          transform: "skewX(-20deg)",
        }}
      />

      {/* text */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {text}
      </span>
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}