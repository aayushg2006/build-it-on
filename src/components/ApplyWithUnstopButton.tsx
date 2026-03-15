import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ApplyWithUnstopButtonProps = {
  className?: string;
  style?: CSSProperties;
  buttonWidth?: number | string;
  buttonHeight?: number | string;
};

const UNSTOP_URL = "https://unstop.com/hackathons/build-it-on-thakur-college-of-engineering-and-technology-tcet-mumbai-1659606?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=congratulations-your-listing-for-build-it-on-is-complete";

const ApplyWithUnstopButton = ({
  className,
  style,
  buttonWidth = 312,
  buttonHeight = 44,
}: ApplyWithUnstopButtonProps) => {
  return (
    <div className={cn(className)} style={style}>
      <a
        href={UNSTOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/45 bg-primary/15 px-5 font-display text-sm md:text-base font-semibold text-primary transition-colors hover:bg-primary/20"
        style={{ 
          width: typeof buttonWidth === 'number' ? `${buttonWidth}px` : buttonWidth,
          height: typeof buttonHeight === 'number' ? `${buttonHeight}px` : buttonHeight
        }}
      >
        <span>Register via</span>
        <img src="/unstop-logo-white.svg" alt="Unstop" className="h-[22px] w-auto object-contain drop-shadow-md pb-[2px]" />
      </a>
    </div>
  );
};

export default ApplyWithUnstopButton;
