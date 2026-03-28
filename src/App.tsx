import { useState, useCallback, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlassHeader from "@/components/GlassHeader";
import CommonFooter from "@/components/CommonFooter";
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
import Shortlisted from "./pages/Shortlisted.tsx";
import NotFound from "./pages/NotFound.tsx";
import LiveAutoDirector from "./pages/live/LiveAutoDirector.tsx";
import LiveRegistration from "./pages/live/LiveRegistration.tsx";
import LiveBreakfast from "./pages/live/LiveBreakfast.tsx";
import LiveInauguration from "./pages/live/LiveInauguration.tsx";
import LiveRound1 from "./pages/live/LiveRound1.tsx";
import LiveEval1 from "./pages/live/LiveEval1.tsx";
import LiveLunch from "./pages/live/LiveLunch.tsx";
import LiveRound2 from "./pages/live/LiveRound2.tsx";
import LiveSubmission from "./pages/live/LiveSubmission.tsx";
import LivePrize from "./pages/live/LivePrize.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLiveRoute = location.pathname.startsWith("/live");
  useHolographicCards(location.pathname);

  // Fix: Automatically scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isLiveRoute && <ParticleBackground />}
      {!isHome && !isLiveRoute && <GlassHeader />}
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
        <Route path="/shortlisted" element={<Shortlisted />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/live" element={<LiveAutoDirector />} />
        <Route path="/live/registration" element={<LiveRegistration />} />
        <Route path="/live/breakfast" element={<LiveBreakfast />} />
        <Route path="/live/inauguration" element={<LiveInauguration />} />
        <Route path="/live/round-1" element={<LiveRound1 />} />
        <Route path="/live/eval-1" element={<LiveEval1 />} />
        <Route path="/live/lunch" element={<LiveLunch />} />
        <Route path="/live/round-2" element={<LiveRound2 />} />
        <Route path="/live/submission" element={<LiveSubmission />} />
        <Route path="/live/prize" element={<LivePrize />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isHome && !isLiveRoute && <CommonFooter />}
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
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
