import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";

const Register = () => {
  return (
    <PageTransition tagline="Join The Revolution">
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Join Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Register Now
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Be part of Build-it ON — AI For Social Impact & Sustainability. Register your team and
              start building solutions that matter.
            </p>

            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Team Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your team name" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Team Size</label>
                    <input type="number" min={1} max={4} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="2-4 members" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Leader Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="leader@email.com" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Preferred Track</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select a track</option>
                    <option value="education">Education For All</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="social">Social Issues</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Project Idea (Brief)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Describe your AI solution idea..." />
                </div>
                <button
                  className="w-full px-6 py-4 rounded-xl font-display font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 45%))",
                    color: "white",
                    boxShadow: "0 0 30px hsla(210, 100%, 50%, 0.3)",
                  }}
                >
                  <img
                    src="https://assets.devfolio.co/hackathons/slug/default/favicon.ico"
                    alt="Devfolio"
                    className="w-5 h-5 rounded"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  Submit Registration
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default Register;
