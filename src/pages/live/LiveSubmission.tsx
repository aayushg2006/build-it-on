import LiveScreenLayout from "@/components/LiveScreenLayout";

const LiveSubmission = () => {
  return (
    <LiveScreenLayout phaseTitle="Evaluation 2 & Final Submission">
      <div className="glass-strong mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl border-primary/35 px-6 py-8 text-center shadow-[0_0_60px_hsla(210,100%,55%,0.24)] md:px-10 md:py-10">
        <h1 className="text-gradient font-display text-4xl font-black uppercase tracking-[0.05em] md:text-6xl">
          Evaluation 2 & Final Submission
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-xl">
          Scan to submit your GitHub repo & Presentation. Deadline is strict.
        </p>

        <div className="glass flex w-full max-w-md items-center justify-center rounded-2xl border-border/70 bg-card/40 p-5 md:p-6">
          <img
            src="/submission-qr.png"
            alt="Submission QR code"
            className="h-52 w-52 rounded-xl border border-border/70 bg-white p-3 shadow-[0_0_30px_hsla(210,100%,55%,0.2)] md:h-60 md:w-60"
            onError={(event) => {
              event.currentTarget.src = "/placeholder.svg";
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </LiveScreenLayout>
  );
};

export default LiveSubmission;
