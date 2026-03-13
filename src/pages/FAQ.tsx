import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Build It On?",
    a: "Build It On is a 6-hour AI hackathon organized by TCET EWT Social Body Club. Participants build AI-powered solutions focused on Education For All and Sustainability tracks.",
  },
  {
    q: "Who can participate?",
    a: "Any student with a passion for AI and social impact can participate. Teams of 2-4 members are recommended. Both beginners and experienced developers are welcome.",
  },
  {
    q: "What are the tracks?",
    a: "There are two tracks: (1) Education For All — build AI solutions for accessible education, and (2) Sustainability — create AI tools for environmental sustainability.",
  },
  {
    q: "Is there a registration fee?",
    a: "Registration details will be announced soon. Follow our social media channels for the latest updates on fees and early bird offers.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, student ID, and your creative mindset! All other resources and refreshments will be provided at the venue.",
  },
  {
    q: "How will projects be judged?",
    a: "Projects will be evaluated on innovation, AI integration, social impact, feasibility, and presentation quality by an expert panel of judges.",
  },
  {
    q: "Can I participate solo?",
    a: "While teams of 2-4 are recommended, solo participants are welcome. You can also find teammates at the event or during the registration process.",
  },
  {
    q: "Will there be mentors?",
    a: "Yes! Industry mentors and faculty members will be available throughout the hackathon to guide teams and provide technical support.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Questions?</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            FAQs
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Build It On
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className="glass rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-primary shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
