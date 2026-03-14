import BrandName from "@/components/BrandName";

const CommonFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      <p>
        © 2026 All rights reserved | Made with {"\u2764"} by the <BrandName /> Team
      </p>
    </footer>
  );
};

export default CommonFooter;
