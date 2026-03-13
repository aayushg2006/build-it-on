import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about Build It On? We'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Reach Out</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail size={20} />, label: "Email", value: "ewt.tcet@gmail.com" },
                  { icon: <Phone size={20} />, label: "Phone", value: "+91 XXXXX XXXXX" },
                  { icon: <MapPin size={20} />, label: "Venue", value: "Thakur College of Engineering & Technology, Mumbai" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Instagram size={20} />, label: "Instagram" },
                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
