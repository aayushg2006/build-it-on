type BrandNameProps = {
  className?: string;
  singleLine?: boolean;
};

const BrandName = ({ className, singleLine = true }: BrandNameProps) => {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: singleLine ? "row" : "column",
        alignItems: singleLine ? "baseline" : "center",
        gap: singleLine ? "0.35em" : 0,
        whiteSpace: singleLine ? "nowrap" : "normal",
        lineHeight: 1.05,
        transform: singleLine ? "none" : "scale(0.9)",
        transformOrigin: singleLine ? "initial" : "center",
      }}
    >
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
