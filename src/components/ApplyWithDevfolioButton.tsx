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

const DEFAULT_SLUG = import.meta.env.VITE_DEVFOLIO_HACKATHON_SLUG || "build-iton";
const THEME_FROM_ENV = import.meta.env.VITE_DEVFOLIO_BUTTON_THEME || "light";
const DEFAULT_THEME: DevfolioButtonTheme = isValidTheme(THEME_FROM_ENV) ? THEME_FROM_ENV : "light";

const ApplyWithDevfolioButton = ({
  className,
  slug = DEFAULT_SLUG,
  theme = DEFAULT_THEME,
  style,
  buttonWidth = 312,
}: ApplyWithDevfolioButtonProps) => {
  return (
    <div className={cn(className)} style={style}>
      <div
        className="apply-button"
        data-hackathon-slug={slug}
        data-button-theme={theme}
        data-button-width={String(buttonWidth)}
        style={{ height: "44px", width: `${buttonWidth}px` }}
      />
    </div>
  );
};

export default ApplyWithDevfolioButton;
