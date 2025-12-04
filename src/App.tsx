import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudiesPage from "./pages/CaseStudies";
import PricingPage from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import TryItOut from "./pages/TryItOut";
import FAQPage from "./pages/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import BlogIndex from "./pages/blog/index";
import BlogPost from "./pages/blog/BlogPost";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";


// ✅ Import Analytics for Vercel
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/try-it-out" element={<TryItOut />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        {/* ✅ Add Analytics at the root of your app */}
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
