import BrandName from "@/components/BrandName";

const DEVFOLIO_URL = "https://devfolio.co";

const CommonFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      <div className="mb-4 flex justify-center px-4">
        <a
          href={DEVFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/40 px-4 py-2 transition-colors hover:border-primary/40"
        >
          <span className="font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Powered by</span>
          <img src="/devfolio-logo-white.svg" alt="Devfolio" className="h-5 w-auto" loading="lazy" decoding="async" />
        </a>
      </div>
      <p>(c) 2026 All rights reserved | Made with care by the <BrandName /> Team</p>
    </footer>
  );
};

export default CommonFooter;
