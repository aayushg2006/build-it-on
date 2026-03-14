import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlassHeader from "@/components/GlassHeader";
import ParticleBackground from "@/components/ParticleBackground";
import SplashScreen from "@/components/SplashScreen";
import useHolographicCards from "@/hooks/useHolographicCards";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Tracks from "./pages/Tracks.tsx";
import Prizes from "./pages/Prizes.tsx";
import Timeline from "./pages/Timeline.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import Contact from "./pages/Contact.tsx";
import FAQ from "./pages/FAQ.tsx";
import ProblemStatements from "./pages/ProblemStatements.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  useHolographicCards(location.pathname);

  return (
    <>
      {!isHome && <GlassHeader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/rewards" element={<Prizes />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/guidelines" element={<Sponsors />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <BrowserRouter>
          <ParticleBackground />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
