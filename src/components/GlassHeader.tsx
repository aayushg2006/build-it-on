import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandName from "@/components/BrandName";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tracks", path: "/tracks" },
  { label: "Rewards", path: "/rewards" },
  { label: "Timeline", path: "/timeline" },
  { label: "Problem Statements", path: "/problem-statements" },
  { label: "Guidelines", path: "/guidelines" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const GlassHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-base font-bold leading-none">
            <BrandName singleLine={false} />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-glitch-text={link.label}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              } glitch-link`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/shortlisted"
          data-glitch-text="View Results"
          className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-xl font-display font-bold text-sm uppercase tracking-[0.12em] border border-primary/45 bg-primary/20 text-primary shadow-[0_0_25px_hsla(210,100%,55%,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/30 hover:border-primary/70 hover:shadow-[0_0_38px_hsla(210,100%,55%,0.55)] glitch-link"
        >
          View Results
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border/50 overflow-y-auto max-h-[85vh]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  data-glitch-text={link.label}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  } glitch-link`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/shortlisted"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-primary/45 bg-primary/20 px-4 py-3 font-display font-bold text-sm uppercase tracking-[0.1em] text-primary shadow-[0_0_20px_hsla(210,100%,55%,0.35)] transition-all duration-300 hover:bg-primary/30 hover:border-primary/70"
              >
                View Results
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default GlassHeader;
