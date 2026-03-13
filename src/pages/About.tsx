import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const committeeMembers = [
  { name: "Chairperson", designation: "Event Head", initials: "CH" },
  { name: "Vice Chairperson", designation: "Co-Event Head", initials: "VC" },
  { name: "Technical Lead", designation: "Tech Head", initials: "TL" },
  { name: "Design Lead", designation: "Creative Head", initials: "DL" },
  { name: "PR Lead", designation: "Outreach Head", initials: "PR" },
  { name: "Logistics Lead", designation: "Operations Head", initials: "LG" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About The Event</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            Build It On
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AI For Social Impact & Sustainability — A 6-hour coding sprint where innovators come together to build
            AI-powered solutions addressing real-world challenges in education and sustainability.
          </p>
        </AnimatedSection>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: <Target size={28} />,
              title: "Our Mission",
              desc: "To harness the power of Artificial Intelligence to create scalable solutions that make education accessible to all and promote environmental sustainability for a better future.",
            },
            {
              icon: <Lightbulb size={28} />,
              title: "What We Do",
              desc: "Build It On is a 6-hour intensive hackathon where participants ideate, prototype, and build AI-integrated solutions across two tracks: Education For All and Sustainability.",
            },
            {
              icon: <Users size={28} />,
              title: "TCET EWT Social Body",
              desc: "The EWT (Extension Work Team) Social Body Club at Thakur College of Engineering & Technology is dedicated to social welfare, community engagement, and tech-driven change.",
            },
            {
              icon: <Heart size={28} />,
              title: "Why It Matters",
              desc: "With AI advancing rapidly, we believe in channeling innovation toward social good — ensuring technology serves humanity and the planet, not just profits.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 card-hover h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Organizing Committee */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            Organizing Committee
          </h2>
          <p className="text-muted-foreground">The team behind Build It On</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {committeeMembers.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-display font-bold text-xl">
                  {member.initials}
                </div>
                <h4 className="font-display text-sm font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-muted-foreground text-xs">{member.designation}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
