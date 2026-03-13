import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import devfolioLogo from "@/assets/devfolio-logo.png";

const DEVFOLIO_URL = "https://devfolio.co";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tracks", path: "/tracks" },
  { label: "Rewards", path: "/rewards" },
  { label: "Timeline", path: "/timeline" },
  { label: "Problem Statements", path: "/problem-statements" },
  { label: "Sponsors", path: "/sponsors" },
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
          <span className="font-display text-base font-bold">
            <span style={{ color: "hsl(210 100% 55%)" }}>Build-it</span>{" "}
            <span style={{ color: "hsl(150 100% 45%)" }}>ON</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={DEVFOLIO_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 45%))",
            color: "white",
            boxShadow: "0 0 20px hsla(210, 100%, 50%, 0.2)",
          }}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white ring-1 ring-white/70 shadow-sm">
            <img src={devfolioLogo} alt="Devfolio" className="h-3.5 w-3.5 object-contain" />
          </span>
          Register Now
        </a>

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
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DEVFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg font-semibold text-sm text-center mt-2 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 45%))",
                  color: "white",
                }}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white ring-1 ring-white/70 shadow-sm">
                  <img src={devfolioLogo} alt="Devfolio" className="h-3.5 w-3.5 object-contain" />
                </span>
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default GlassHeader;
