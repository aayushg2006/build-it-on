import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

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
              Have questions about Build-it ON? We'd love to hear from you!
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="card glass rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Reach Out</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: <Mail size={20} />, label: "Email", value: "ewt.tcet@gmail.com" },
                    { icon: <Phone size={20} />, label: "Phone", value: "+91-86920 13791" },
                    { icon: <MapPin size={20} />, label: "Venue", value: "Thakur College of Engineering & Technology, Mumbai" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
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
                      rel="noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                      title="Follow us on Instagram"
                    >
                      <Instagram size={20} />
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
                  Venue
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Thakur College of Engineering and Technology, Thakur Village, Kandivali (East), Mumbai - 400101
                </p>
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1908839498!2d72.87156937520567!3d19.20668798200882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TCET Location"
                  />
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
