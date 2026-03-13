import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, BookOpen } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle gradient overlay - particles show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60 z-[1]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img src={logo} alt="Build It On Logo" className="w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              TCET EWT Social Body Club Presents
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient leading-tight">
              Build It On
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-body mb-2">
              AI For Social Impact & Sustainability
            </p>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              A 6-Hour Coding Sprint to build AI-powered solutions for Education & Sustainability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/register"
              className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg glow-primary hover:opacity-90 transition-all flex items-center gap-2"
            >
              Register Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-xl glass text-foreground font-semibold text-lg hover:bg-muted/30 transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Event date badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-muted-foreground"
          >
            <Sparkles size={16} className="text-primary" />
            28th March 2025 • 6 Hour Hackathon
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
              Why Build It On?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Harness AI to create meaningful impact in education and sustainability
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen size={32} />,
                title: "Education For All",
                desc: "Build AI solutions that make quality education accessible to everyone, everywhere.",
                delay: 0.1,
              },
              {
                icon: <Leaf size={32} />,
                title: "Sustainability",
                desc: "Create technology that promotes environmental sustainability and green innovation.",
                delay: 0.2,
              },
              {
                icon: <Sparkles size={32} />,
                title: "AI-Powered",
                desc: "Leverage cutting-edge AI technologies to solve real-world social challenges.",
                delay: 0.3,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay}>
                <div className="glass rounded-2xl p-8 card-hover text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 Build It On - AI For Social Impact & Sustainability</p>
          <p className="mt-1">Organized by TCET EWT Social Body Club</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
