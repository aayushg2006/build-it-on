import BrandName from "@/components/BrandName";

const UNSTOP_URL = "https://unstop.com/hackathons/build-it-on-thakur-college-of-engineering-and-technology-tcet-mumbai-1659606?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=congratulations-your-listing-for-build-it-on-is-complete";

const CommonFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      <div className="mb-4 flex justify-center px-4">
        <a
          href={UNSTOP_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-5 py-2 transition-colors hover:border-primary/40"
        >
          <span className="font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Powered by</span>
          <img src="/unstop-logo-white.svg" alt="Unstop" className="h-5 w-auto" loading="lazy" decoding="async" />
        </a>
      </div>
      <p>©2026 All rights reserved | Made with ❤︎⁠ by the <BrandName /> Team</p>
    </footer>
  );
};

export default CommonFooter;
