import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ApplyWithUnstopButtonProps = {
  className?: string;
  style?: CSSProperties;
  buttonWidth?: number;
};

const UNSTOP_URL = "https://unstop.com/hackathons/build-it-on-thakur-college-of-engineering-and-technology-tcet-mumbai-1659606?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=congratulations-your-listing-for-build-it-on-is-complete";

const ApplyWithUnstopButton = ({
  className,
  style,
  buttonWidth = 312,
}: ApplyWithUnstopButtonProps) => {
  return (
    <div className={cn(className)} style={style}>
      <a
        href={UNSTOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-[44px] items-center justify-center rounded-lg border border-primary/45 bg-primary/15 px-5 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
        style={{ width: `${buttonWidth}px` }}
      >
        Apply via Unstop
      </a>
    </div>
  );
};

export default ApplyWithUnstopButton;
