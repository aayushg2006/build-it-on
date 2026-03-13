import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Hero Section - clean layout like reference */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* College level badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-xs md:text-sm mb-8"
          style={{ color: "hsl(210 80% 65%)" }}
        >
          <Zap size={14} className="text-accent" />
          <span className="font-display tracking-[0.2em] uppercase">College Level Tech Hackathon</span>
        </motion.div>

        {/* Presents line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base font-body mb-4 tracking-wide"
        >
          TCET EWT Students Chapter Presents
        </motion.p>

        {/* Main title - Build-it ON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="text-foreground">EWT </span>
            <span style={{ color: "hsl(210 100% 55%)" }}>Build-it</span>{" "}
            <span style={{ color: "hsl(150 100% 45%)" }}>ON</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-lg md:text-xl font-body mb-3"
          style={{ color: "hsl(210 80% 60%)" }}
        >
          AI For Social Impact & Sustainability
        </motion.p>

        {/* Free registration */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base mb-3"
        >
          Registrations are <span className="font-bold text-accent">FREE</span> for students across Mumbai
        </motion.p>

        {/* Location & Date */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-muted-foreground text-xs md:text-sm mb-8 flex-wrap"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" />
            Thakur College of Engineering and Technology
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-primary" />
            28th March 2025
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/register"
            className="group px-8 py-4 rounded-xl font-display font-bold text-base md:text-lg flex items-center gap-3 transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 45%))",
              color: "white",
              boxShadow: "0 0 30px hsla(210, 100%, 50%, 0.3), 0 0 60px hsla(210, 100%, 50%, 0.1)",
            }}
          >
            <img
              src="https://assets.devfolio.co/hackathons/slug/default/favicon.ico"
              alt="Devfolio"
              className="w-5 h-5 rounded"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            REGISTER NOW
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl glass font-display font-semibold text-base md:text-lg transition-all hover:bg-muted/30"
            style={{ color: "hsl(210 100% 60%)" }}
          >
            EXPLORE EVENT
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center text-muted-foreground text-xs">
        <p>© 2025 Build-it ON — AI For Social Impact & Sustainability</p>
        <p className="mt-1">Organized by TCET EWT Students Chapter</p>
      </footer>
    </div>
  );
};

export default Index;
