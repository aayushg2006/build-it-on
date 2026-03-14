import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import BrandName from "@/components/BrandName";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition tagline="Let's Connect">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about <BrandName />? We'd love to hear from you!
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="card glass rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Reach Out</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Mail size={20} />,
                      label: "Email",
                      value: "tcetewt@gmail.com",
                    },
                    {
                      icon: <Phone size={20} />,
                      label: "Ramkumar Chaurasiya",
                      value: "+91 86920 13791",
                      meta: "EWT President",
                    },
                    {
                      icon: <Phone size={20} />,
                      label: "Anand Dangi",
                      value: "+91 89288 82369",
                      meta: "Event Head",
                    },
                    {
                      icon: <MapPin size={20} />,
                      label: "Venue",
                      value: "Thakur College of Engineering & Technology, Mumbai",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {"meta" in item && item.meta ? (
                          <p className="text-xs text-primary font-semibold">{item.meta}</p>
                        ) : null}
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/tcet_ewt/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                      title="Follow us on Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tcet-ewt-a5b5923b7/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                      title="Follow us on LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/tcet-ewt-a5b5923b7/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs text-primary font-medium hover:underline break-all"
                    >
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Venue Map */}
            <AnimatedSection delay={0.2}>
              <div className="card glass rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Where To Meet
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Thakur College of Engineering and Technology, Thakur Village, Kandivali (East), Mumbai - 400101
                </p>
                <div className="rounded-3xl border border-primary/20 bg-card/35 p-4 md:p-6">
                  <p className="text-center font-display tracking-[0.18em] text-lg md:text-2xl text-foreground mb-1">
                    GEOSPATIAL COORDINATES
                  </p>
                  <p className="text-center text-[11px] md:text-xs tracking-[0.22em] text-primary/85 mb-5">
                    PINPOINTING SIMULATION NEXUS...
                  </p>

                  <div className="flex justify-center">
                    <div className="relative aspect-square w-full max-w-[560px]">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,hsla(210,85%,42%,0.35),hsla(220,35%,8%,0.95)_64%)] shadow-[0_0_60px_hsla(210,100%,45%,0.18)]" />
                      <div className="absolute inset-[1.7%] rounded-full border-[7px] border-[hsla(200,100%,52%,0.22)]" />
                      <div className="absolute inset-[3.6%] rounded-full border border-[hsla(200,100%,60%,0.45)] bg-black/45 overflow-hidden">
                        <div className="absolute inset-[2.6%] rounded-full overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1908839498!2d72.87156937520567!3d19.20668798200882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="TCET Location"
                            className="rounded-full grayscale-[6%] contrast-105 saturate-110"
                          />

                          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_57%,hsla(220,25%,6%,0.84)_100%)]" />
                          <div className="pointer-events-none absolute inset-0 rounded-full opacity-30 bg-[repeating-radial-gradient(circle,transparent_0_26px,hsla(190,100%,70%,0.26)_26px_27px)]" />
                          <div className="pointer-events-none absolute inset-0 rounded-full opacity-20 bg-[linear-gradient(0deg,transparent_48%,hsla(190,100%,70%,0.4)_49%,transparent_50%)]" />

                          <div className="pointer-events-none absolute inset-0 rounded-full animate-[radar-spin_8.5s_linear_infinite]">
                            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,hsla(186,100%,60%,0.0)_0deg,hsla(186,100%,60%,0.34)_26deg,hsla(186,100%,60%,0.2)_42deg,hsla(186,100%,60%,0)_72deg,hsla(186,100%,60%,0)_360deg)]" />
                            <div className="absolute left-1/2 top-1/2 h-[2px] w-[49%] -translate-y-1/2 origin-left bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-[8.5%] rounded-full border border-primary/30" />
                      <div className="pointer-events-none absolute inset-[23%] rounded-full border border-primary/25" />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_hsla(150,100%,45%,0.95)]" />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
