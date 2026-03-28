import { Wifi } from "lucide-react";
import LiveScreenLayout from "@/components/LiveScreenLayout";

const LiveRound1 = () => {
  const wifiDetails = [
    { name: "Linksys_ICT", password: "Thakur@2025" },
    { name: "Linksys08559", password: "tcet@1234" },
    { name: "TCET", password: "Tcet#@2026" },
  ];

  return (
    <LiveScreenLayout phaseTitle="Coding Round 1">
      <div className="grid h-full w-full max-w-6xl grid-cols-1 gap-3 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="grid h-full min-h-0 grid-rows-2 gap-2.5">
          <article className="glass-strong flex h-full min-h-0 flex-col rounded-2xl border-[hsl(150_100%_45%/.35)] p-3 text-left shadow-[0_0_30px_hsla(150,100%,45%,0.18)] md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[hsl(150_100%_52%)]">.xyz Domain Claim</p>
              <span className="rounded-full border border-[hsl(150_100%_45%/.4)] bg-[hsl(150_100%_45%/.12)] px-3 py-1 text-sm font-semibold text-[hsl(150_100%_52%)]">
                Code: BIA26
              </span>
            </div>

            <h2 className="mt-1.5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">How To Redeem .xyz</h2>
            <ol className="mt-1.5 list-decimal space-y-1.5 pl-5 text-base leading-snug text-foreground/90 md:text-[20px]">
              <li>Open <span className="font-semibold text-foreground">gen.xyz</span> and select your domain.</li>
              <li>Set term to <span className="font-semibold text-foreground">1 year</span> and apply <span className="font-semibold text-foreground">BIA26</span>.</li>
              <li>Confirm total is <span className="font-semibold text-foreground">$0.00</span>, submit details, and verify email.</li>
            </ol>
          </article>

          <article className="glass-strong flex h-full min-h-0 flex-col rounded-2xl border-[#EA4B71]/35 p-3 text-left shadow-[0_0_30px_hsla(346,80%,60%,0.18)] md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#EA4B71]">n8n Voucher Claim</p>
              <span className="rounded-full border border-[#EA4B71]/45 bg-[#EA4B71]/12 px-3 py-1 text-sm font-semibold text-[#ff8ea7]">
                Code: 2026-COMMUNTIY-HACKATHON-INDIA-4F0897A2
              </span>
            </div>

            <h2 className="mt-1.5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">How To Redeem n8n Voucher</h2>
            <ol className="mt-1.5 list-decimal space-y-1.5 pl-5 text-base leading-snug text-foreground/90 md:text-[20px]">
              <li>Login and click <span className="font-semibold text-foreground">Upgrade now</span>.</li>
              <li>Select matching <span className="font-semibold text-foreground">plan + billing cycle</span>.</li>
              <li>Use <span className="font-semibold text-foreground">Add discount</span>, paste code, and continue.</li>
            </ol>
            <p className="mt-1.5 text-sm text-muted-foreground md:text-base">
              Help: events@n8n.io
            </p>
          </article>
        </div>

        <article className="glass-strong relative flex h-full min-h-0 flex-col justify-between rounded-3xl border-primary/35 p-4 text-left shadow-[0_0_50px_hsla(210,100%,55%,0.28)] md:p-5">
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
              <Wifi size={14} />
              Venue Wi-Fi
            </div>
            <h2 className="text-5xl font-semibold text-gradient-blue md:text-6xl">Venue Wi-Fi</h2>
            <p className="mt-1.5 max-w-md text-lg text-foreground/90 md:text-2xl">
              Stable internet for code pushes, package installs, and live demos.
            </p>
          </div>

          <div className="relative mt-4 grid gap-2">
            {wifiDetails.map((wifi, index) => (
              <div key={wifi.name} className="rounded-2xl border border-border/70 bg-card/60 p-3">
                <p className="text-sm font-medium text-muted-foreground">Wi-Fi {index + 1}</p>
                <p className="mt-1 text-[clamp(1.2rem,1.8vw,1.8rem)] font-semibold leading-tight text-foreground">{wifi.name}</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Password</p>
                <p className="mt-1 break-all text-[clamp(1.05rem,1.5vw,1.45rem)] font-semibold leading-tight text-foreground">{wifi.password}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </LiveScreenLayout>
  );
};

export default LiveRound1;
