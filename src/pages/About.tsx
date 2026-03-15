import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import BrandName from "@/components/BrandName";
import { Target, Lightbulb, Users, Heart, Brain, GraduationCap, Rocket, Crown, Code2, Palette, FileText, Zap, Megaphone } from "lucide-react";

// Import organizing committee images
import RamkumarImg from "@/assets/OC Images/Ramkumar Chaurasiya.jpg";
import AnandImg from "@/assets/OC Images/Anand Dangi_.jpg";
import MahikaImg from "@/assets/OC Images/Mahika Chaurasiya.jpeg";
import LakshitaImg from "@/assets/OC Images/Lakshita Hingar.jpg";
import AayushImg from "@/assets/OC Images/Aayush Gupta.jpg";
import AnanyaImg from "@/assets/OC Images/Ananya Pillai.jpg";
import KalpImg from "@/assets/OC Images/Kalp Doshi.jpg";
import NikitaImg from "@/assets/OC Images/Nikita Yadav.jpg";
import RiyaKasatImg from "@/assets/OC Images/Riya kasat.jpg";
import ShrutiImg from "@/assets/OC Images/Shruti Sawant.jpg";
import DeepImg from "@/assets/OC Images/Deep Singh.jpg";
import RituImg from "@/assets/OC Images/Ritu Howal.jpg";
import TanishaImg from "@/assets/OC Images/Tanisha Desai.jpg";
import AnushkaImg from "@/assets/OC Images/Anushka Jadhav.jpg";
import RiyaGuptaImg from "@/assets/OC Images/Riya Gupta.jpg";
import RudraImg from "@/assets/OC Images/Rudra Umatiya.jpg";
import GyaneshwarImg from "@/assets/OC Images/Gyaneshwar Jha.jpg";
import BhavyaImg from "@/assets/OC Images/Bhavya Sharma.jpg";
import GautamImg from "@/assets/OC Images/Gautam Gupta.png";
import PriyaImg from "@/assets/OC Images/Priya Tiwari.jpeg"
import VedImg from "@/assets/OC Images/Ved Nalavade.jpeg"

const objectives = [
  "Encourage students to build AI-based solutions",
  "Promote innovation for social and sustainability problems",
  "Improve technical and teamwork skills",
  "Provide hands-on learning experience",
  "Support problem solving in education and society",
];

const expectedOutcomes = [
  "Increased awareness of AI technologies",
  "Practical project development experience",
  "Better teamwork and innovation skills",
  "Solutions for real-world problems",
];

const organizingCommittee = [
  {
    section: "Core Leadership",
    icon: Crown,
    color: "text-yellow-500",
    bgcolor: "bg-yellow-500/20",
    members: [
      { name: "Ramkumar Chaurasiya", position: "President/Marketing Head", image: RamkumarImg },
      { name: "Anand Dangi", position: "Event Head/Design & Creative Head", image: AnandImg },
      { name: "Lakshita Hingar", position: "Content and Documentation Head", image: LakshitaImg },
      { name: "Mahika Chaurasiya", position: "Tech and Development Head",    },
       
    ]
  },
  {
    section: "Tech and Development Team",
    icon: Code2,
    color: "text-blue-500",
    bgcolor: "bg-blue-500/20",
    members: [
      { name: "Aayush Gupta", position: "Developer", image: AayushImg },
      { name: "Ananya Pillai", position: "Developer", image: AnanyaImg },
      { name: "Ved Nalavade", position: "Developer", image: VedImg},
      { name: "Kalp Doshi", position: "Developer", image: KalpImg },
    ]
  },
  {
    section: "Design and Creative Team",
    icon: Palette,
    color: "text-pink-500",
    bgcolor: "bg-pink-500/20",
    members: [
      { name: "Nikita Yadav", position: "Designer", image: NikitaImg },
      { name: "Riya Kasat", position: "Designer", image: RiyaKasatImg },
      { name: "Shruti Sawant", position: "Designer", image: ShrutiImg },
      { name: "Priya Tiwari", position: "Designer", image: PriyaImg}
    ]
  },
  {
    section: "Content and Documentation Team",
    icon: FileText,
    color: "text-green-500",
    bgcolor: "bg-green-500/20",
    members: [
      { name: "Deep Singh", position: "Content Creator", image: DeepImg },
      { name: "Ritu Howal", position: "Content Creator", image: RituImg },
      { name: "Tanisha Desai", position: "Content Creator", image: TanishaImg },
    ]
  },
  {
    section: "Operations and Logistics Team",
    icon: Zap,
    color: "text-orange-500",
    bgcolor: "bg-orange-500/20",
    members: [
      { name: "Anushka Jadhav", position: "Operations Lead", image: AnushkaImg },
      { name: "Riya Gupta", position: "Logistics Coordinator", image: RiyaGuptaImg },
      { name: "Rudra Umatiya", position: "Operations Support", image: RudraImg },
    ]
  },
  {
    section: "Marketing Team",
    icon: Megaphone,
    color: "text-red-500",
    bgcolor: "bg-red-500/20",
    members: [
      { name: "Gyaneshwar Jha", position: "Marketing Strategist", image: GyaneshwarImg },
      { name: "Bhavya Sharma", position: "Marketing Executive", image: BhavyaImg },
      { name: "Gautam Gupta", position: "Marketing Executive", image: GautamImg },
    ]
  },
];

const About = () => {
  return (
    <PageTransition tagline="Innovate - Build - Impact">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About The Event</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <BrandName />
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              AI For Social Impact & Sustainability — A structured Buildathon initiative organized by the Extension Work Team (EWT)
              aimed at promoting innovation, technical learning, and social responsibility among students.
            </p>
          </AnimatedSection>

          {/* What is Build-it ON */}
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <div className="card glass-strong rounded-3xl p-8 md:p-12 border border-primary/20 shadow-[0_0_30px_hsla(210,100%,50%,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain size={24} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  What is <BrandName />?
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <BrandName /> is a structured Buildathon initiative organized by the Extension Work Team (EWT) aimed at promoting innovation,
                technical learning, and social responsibility among students. The event focuses on developing Artificial Intelligence based
                solutions to address real-world challenges related to society, sustainability, and education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Buildathon will provide a collaborative platform where students can work in teams, apply their knowledge, and build practical
                solutions using modern AI tools and technologies. This initiative supports the overall development of students by encouraging
                creativity, teamwork, and problem-solving skills while contributing towards meaningful social impact.
              </p>
            </div>
          </AnimatedSection>

          {/* Objectives & Expected Outcomes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <AnimatedSection delay={0.1}>
              <div className="card glass-strong rounded-3xl p-8 h-full border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Objectives</h3>
                </div>
                <ul className="space-y-3">
                  {objectives.map((obj, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "hsl(210 100% 55%)" }} />
                      <span>{obj}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card glass-strong rounded-3xl p-8 h-full border border-border/50 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Rocket size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Expected Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  {expectedOutcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "hsl(150 100% 45%)" }} />
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
            {[
              { icon: <GraduationCap size={24} />, title: "6-Hour Sprint", desc: "Intensive coding" },
              { icon: <Users size={24} />, title: "Team-Based", desc: "Collaborate & build" },
              { icon: <Lightbulb size={24} />, title: "AI-Powered", desc: "Modern AI tools" },
              { icon: <Heart size={24} />, title: "Social Impact", desc: "Real-world solutions" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="card glass rounded-2xl p-5 text-center"
                >
                  <div className="text-primary mx-auto mb-3 flex justify-center">{item.icon}</div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Organizing Committee */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground">
              Meet the talented individuals behind <BrandName />
            </p>
          </AnimatedSection>

          {/* Committee Sections */}
          <div className="space-y-20 max-w-6xl mx-auto px-4">
            {organizingCommittee.map((team, teamIndex) => {
              const IconComponent = team.icon;
              return (
                <AnimatedSection key={teamIndex} delay={teamIndex * 0.1}>
                  <div className="w-full">
                    {/* Section Header - Centered */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                      <div className={`p-3 rounded-xl ${team.bgcolor}`}>
                        <IconComponent className={`${team.color} w-6 h-6`} />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
                        {team.section}
                      </h3>
                    </div>

                    {/* Team Members Grid - Centered */}
                    <div className="flex justify-center w-full">
                      <div className={`grid ${team.members.length === 4 ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4' : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'} gap-6 w-full max-w-5xl`}>
                        {team.members.map((member, memberIndex) => (
                          <AnimatedSection key={memberIndex} delay={memberIndex * 0.05}>
                            <motion.div
                              whileHover={{ y: -8, scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="group flex flex-col items-center"
                            >
                              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 hover:border-primary/30 transition-colors w-full">
                                {/* Image Container */}
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                
                                {/* Overlay - Only for Core Leadership */}
                                {teamIndex === 0 && (
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                                    <div className="p-4 w-full text-center">
                                      <p className="text-white text-xs font-semibold opacity-90">{member.position}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                              
                              {/* Member Info - Centered */}
                              <div className="w-full text-center">
                                <h4 className="font-display text-sm font-bold text-foreground line-clamp-2">
                                  {member.name}
                                </h4>
                                {teamIndex === 0 && (
                                  <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
                                    {member.position}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          </AnimatedSection>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
