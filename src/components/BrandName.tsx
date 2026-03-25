type BrandNameProps = {
  className?: string;
};

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1.05,
        transform: "scale(0.9)", // 🔥 slightly smaller
        transformOrigin: "left",
      }}
    >
      {/* Pragati 2.0 */}
      <span
        style={{
          fontWeight: 700,
          fontSize: "0.9em",
          letterSpacing: "0.02em",
          background: "linear-gradient(90deg, #ffaa00, #00ff99)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Pragati 2.0
      </span>

      {/* Build-it ON */}
      <span
        style={{
          fontWeight: 800,
          fontSize: "1em",
          letterSpacing: "0.03em",
          background: "linear-gradient(90deg, #00bfff, #00ff99)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Build-it <span style={{ fontWeight: 900 }}>ON</span>
      </span>
    </span>
  );
};

export default BrandName;