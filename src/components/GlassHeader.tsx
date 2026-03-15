import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ApplyWithUnstopButton from "@/components/ApplyWithUnstopButton";
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
          <span className="font-display text-base font-bold"><BrandName /></span>
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

        <ApplyWithUnstopButton
          className="hidden lg:block"
          buttonWidth={240}
        />

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
              <div className="mt-2 flex justify-center px-2" onClick={() => setMobileOpen(false)}>
                <ApplyWithUnstopButton
                  className="w-full flex justify-center"
                  buttonWidth={312}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default GlassHeader;
