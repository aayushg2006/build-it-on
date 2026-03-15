import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import BrandName from "@/components/BrandName";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ApplyWithUnstopButton from "@/components/ApplyWithUnstopButton";
import { BookText, Download, FileDown, ShieldCheck } from "lucide-react";
import BrochurePDF from "@/assets/PPT and Brochure/Brochure BUILD-IT ON.pdf";
import PPTTemplate from "@/assets/PPT and Brochure/PPT TEMPLATE Build-it ON.pptx";

const Sponsors = () => {
  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition tagline="Guidelines That Turn Ideas Into Impact">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Information Center</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Participation Guidelines
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review all important rules, submission directions, and event resources for <BrandName /> in one place.
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-5xl mx-auto">
            <Tabs defaultValue="rules" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 h-auto gap-2 bg-transparent p-0 mb-6">
                <TabsTrigger
                  value="rules"
                  className="h-12 rounded-xl glass data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:border-primary/40 border border-border/60 font-display text-sm md:text-base"
                >
                  <ShieldCheck className="mr-2" size={18} />
                  Rules and Guidelines
                </TabsTrigger>
                <TabsTrigger
                  value="brochure"
                  className="h-12 rounded-xl glass data-[state=active]:bg-accent/15 data-[state=active]:text-accent data-[state=active]:border-accent/40 border border-border/60 font-display text-sm md:text-base"
                >
                  <BookText className="mr-2" size={18} />
                  For More Information
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rules" className="mt-0 data-[state=inactive]:hidden" forceMount>
                <div className="card glass rounded-3xl p-5 md:p-8 border-primary/20">
                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">1.</span> Team Size: 2-4 members.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">2.</span> Individual applications will not be accepted.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">3.</span> Registration is absolutely free for all participants.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground mb-3">
                        <span className="font-semibold text-primary">4.</span> Register your team on Unstop and follow the platform submission steps.
                      </p>
                      <ApplyWithUnstopButton className="w-full sm:w-auto flex justify-start" buttonWidth={292} />
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">5.</span> Your idea should align with the generalized{" "}
                        <span className="font-semibold"><BrandName /></span>{" "}
                        tracks.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground mb-3">
                        <span className="font-semibold text-primary">6.</span> Use the PPT template to prepare a PPT for your idea.
                      </p>
                      <Button
                        type="button"
                        onClick={() => handleDownload(PPTTemplate, "PPT TEMPLATE Build-it ON.pptx")}
                        className="h-11 rounded-xl bg-primary/20 text-primary border border-primary/35 hover:bg-primary/30 transition-colors font-display"
                      >
                        <FileDown size={18} />
                        Download PPT Template
                      </Button>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">7.</span> Only top 20 teams will be selected for the final Buildathon day (6-hour build).
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">8.</span> A prototype is not required for the registration and idea submission stage.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">9.</span> Problem statements will be released 24 hours prior to the event for finalists.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">10.</span> Finalists must choose one released problem statement and build an AI-powered solution on it.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5">
                      <p className="text-sm md:text-base text-foreground">
                        <span className="font-semibold text-primary">11.</span> Projects will be evaluated by an expert panel on innovation, AI integration, social impact, feasibility, and presentation quality.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brochure" className="mt-0 data-[state=inactive]:hidden" forceMount>
                <div className="card glass rounded-3xl p-6 md:p-10 border-accent/20">
                  <div className="max-w-2xl">
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      Event Brochure and Additional Information
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                      Download the official event brochure for schedule details, participation flow, and process guidance.
                    </p>
                    <Button
                      type="button"
                      onClick={() => handleDownload(BrochurePDF, "Brochure BUILD-IT ON.pdf")}
                      className="h-11 rounded-xl bg-accent/20 text-accent border border-accent/35 hover:bg-accent/30 transition-colors font-display"
                    >
                      <Download size={18} />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-8 text-center">
            <div className="glass rounded-2xl p-4 md:p-5 max-w-4xl mx-auto border border-border/60">
              <p className="text-xs md:text-sm text-muted-foreground">
                Need help with registration or submissions? Reach out at{" "}
                <a href="mailto:tcetewt@gmail.com" className="text-primary font-semibold hover:underline">
                  tcetewt@gmail.com
                </a>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default Sponsors;
