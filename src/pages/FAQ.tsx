import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import BrandName from "@/components/BrandName";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: (
      <>
        What is <BrandName />?
      </>
    ),
    a: (
      <>
        <BrandName /> is a 6-hour AI Buildathon organized by TCET EWT Students Chapter. Participants build
        AI-powered solutions across three tracks: Education For All, Sustainability, and Social Issues.
      </>
    ),
  },
  {
    q: "1. What do we need to submit in Round 1?",
    a: "You need to submit your idea in the given PPT format on Unstop based on Social, Education, or Sustainability themes.",
  },
  {
    q: "Is a prototype required for Round 1?",
    a: "No, only the idea PPT is required for Round 1.",
  },
  {
    q: "Will a problem statement be given in Round 1?",
    a: "No, you have to submit your own idea based on the theme. A problem statement will be given only for the final round if you are selected.",
  },
  {
    q: "What is the last date for Round 1 submission?",
    a: "25 March, 2 PM.",
  },
  {
    q: "When should the GitHub repository be created?",
    a: "The repository should be created only after the problem statement is released. Repositories made before that will not be considered",
  },
  {
    q: "What will happen in the final round?",
    a: "Participants can start planning and building after the problem statement is released. On the final day, there will be a 6-hour Buildathon where you will complete and present your prototype to the mentors.",
  },
  {
    q: "How long is the final Buildathon?",
    a: "It is a 6-hour offline Buildathon.",
  },
  {
    q: "Will refreshments be provided?",
    a: "Yes, refreshments will be provided during the event.",
  },
  {
    q: "Will there be mentors?",
    a: "Yes! Industry mentors and faculty members will be available throughout the Buildathon to guide teams and provide technical support.",
  },
  {
    q: "Participation criteria?",
    a: "Participants must be based in mumbai and students precuing degrees in STEAM!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageTransition tagline="Got Questions? We've Got Answers">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Questions?</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              FAQs
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about <BrandName />
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl mx-auto space-y-4" staggerChildren staggerStep={0.1}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="card glass rounded-2xl overflow-hidden tracking-wide"
                whileHover={{ boxShadow: "0 0 20px hsla(210, 100%, 50%, 0.15)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="glitch-link w-full px-6 py-5 flex items-center justify-between text-left"
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
            ))}
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQ;
