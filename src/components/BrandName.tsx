type BrandNameProps = {
  className?: string;
};

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <span className={className}>
      <span style={{ color: "hsl(210 100% 55%)" }}>Build-it</span>{" "}
      <span style={{ color: "hsl(150 100% 45%)" }}>ON</span>
    </span>
  );
};

export default BrandName;
