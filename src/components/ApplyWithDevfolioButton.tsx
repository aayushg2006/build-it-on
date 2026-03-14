import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type DevfolioButtonTheme = "light" | "dark" | "dark-inverted";

type ApplyWithDevfolioButtonProps = {
  className?: string;
  slug?: string;
  theme?: DevfolioButtonTheme;
  style?: CSSProperties;
  buttonWidth?: number;
};

const isValidTheme = (theme: string): theme is DevfolioButtonTheme =>
  theme === "light" || theme === "dark" || theme === "dark-inverted";

const DEFAULT_SLUG = (import.meta.env.VITE_DEVFOLIO_HACKATHON_SLUG || "").trim();
const THEME_FROM_ENV = import.meta.env.VITE_DEVFOLIO_BUTTON_THEME || "light";
const DEFAULT_THEME: DevfolioButtonTheme = isValidTheme(THEME_FROM_ENV) ? THEME_FROM_ENV : "light";
const DEVFOLIO_FALLBACK_URL = "https://devfolio.co/hackathons";

const ApplyWithDevfolioButton = ({
  className,
  slug = DEFAULT_SLUG,
  theme = DEFAULT_THEME,
  style,
  buttonWidth = 312,
}: ApplyWithDevfolioButtonProps) => {
  const normalizedSlug = slug.trim();

  if (!normalizedSlug) {
    return (
      <div className={cn(className)} style={style}>
        <a
          href={DEVFOLIO_FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-primary/45 bg-primary/15 px-5 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          style={{ width: `${buttonWidth}px` }}
        >
          Apply with Devfolio
        </a>
      </div>
    );
  }

  return (
    <div className={cn(className)} style={style}>
      <div
        className="apply-button"
        data-hackathon-slug={normalizedSlug}
        data-button-theme={theme}
        data-button-width={String(buttonWidth)}
        style={{ height: "44px", width: `${buttonWidth}px` }}
      />
    </div>
  );
};

export default ApplyWithDevfolioButton;
