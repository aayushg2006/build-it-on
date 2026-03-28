import { ReactNode } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import geekRoomLogo from "@/assets/Sponsor Logos/GeekRoom.png";
import xyzLogo from "@/assets/Sponsor Logos/xyz.png";
import n8nLogo from "@/assets/Sponsor Logos/n8n.svg";
import pragatiBuildItOnHeaderLogo from "@/assets/pragatibuilditon-header.png";

type LiveScreenLayoutProps = {
  phaseTitle: string;
  children: ReactNode;
};

const LiveScreenLayout = ({ phaseTitle, children }: LiveScreenLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-body">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,hsl(210_100%_52%/.2),transparent_48%),radial-gradient(circle_at_82%_85%,hsl(150_100%_42%/.13),transparent_52%)]" />

      <div className="relative z-10 mx-auto grid h-screen w-full max-w-[1920px] grid-rows-[auto_1fr_auto] gap-2 p-3 md:gap-3 md:p-4 lg:p-5">
        <header className="relative min-h-[80px] px-2 py-2 md:min-h-[92px] md:px-3">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              src={pragatiBuildItOnHeaderLogo}
              alt="Pragati 2.0 Build-it ON"
              className="h-[58px] w-auto object-contain opacity-100 md:h-[72px] lg:h-[80px]"
              style={{ filter: "brightness(1.22) contrast(1.26) saturate(1.2) drop-shadow(0 0 12px rgba(0, 180, 255, 0.5)) drop-shadow(0 0 20px rgba(0, 255, 170, 0.3))" }}
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute right-1 top-1/2 -translate-y-1/2 rounded-xl border border-primary/35 bg-card/75 px-3 py-2 text-right md:right-2 md:px-4 md:py-2.5">
            <p className="text-[10px] font-medium text-muted-foreground md:text-xs">Current Phase</p>
            <p className="text-[12px] font-semibold text-primary md:text-base">{phaseTitle}</p>
          </div>
        </header>

        <main className="flex min-h-0 items-center justify-center overflow-hidden">
          <div className="flex h-full w-full max-w-7xl items-center justify-center overflow-hidden">{children}</div>
        </main>

        <footer className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-2 py-1 md:flex-row md:justify-between md:px-3 md:py-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary md:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Supported By
          </div>

          <div className="grid w-full max-w-2xl grid-cols-3 gap-2 md:gap-4">
            <div className="flex h-12 items-center justify-center rounded-xl border border-primary/20 bg-transparent p-2 md:h-14">
              <img src={geekRoomLogo} alt="GeekRoom" className="max-h-full max-w-full object-contain opacity-95" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 items-center justify-center rounded-xl border border-[hsl(150_100%_45%/.35)] bg-transparent p-2 md:h-14">
              <img src={xyzLogo} alt=".xyz" className="max-h-full max-w-full object-contain opacity-95" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 items-center justify-center rounded-xl border border-[#EA4B71]/35 bg-transparent p-2 md:h-14">
              <img src={n8nLogo} alt="n8n" className="max-h-full max-w-full object-contain opacity-95" loading="lazy" decoding="async" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LiveScreenLayout;
