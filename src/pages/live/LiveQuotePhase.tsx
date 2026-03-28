import LiveScreenLayout from "@/components/LiveScreenLayout";

type LiveQuotePhaseProps = {
  phaseTitle: string;
  headline: string;
  quote: string;
};

const LiveQuotePhase = ({ phaseTitle, headline, quote }: LiveQuotePhaseProps) => {
  return (
    <LiveScreenLayout phaseTitle={phaseTitle}>
      <div className="glass-strong mx-auto flex w-full max-w-5xl flex-col items-center gap-6 rounded-3xl border-primary/30 px-6 py-10 text-center shadow-[0_0_60px_hsla(210,100%,55%,0.24)] md:px-10 md:py-14">
        <h1 className="text-gradient font-display text-5xl font-black uppercase tracking-[0.05em] drop-shadow-[0_0_28px_hsla(210,100%,65%,0.38)] md:text-7xl xl:text-8xl">
          {headline}
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-2xl">
          {quote}
        </p>
      </div>
    </LiveScreenLayout>
  );
};

export default LiveQuotePhase;
