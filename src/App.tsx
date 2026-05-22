import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const About = lazy(() => import("./pages/About"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const TryItOut = lazy(() => import("./pages/TryItOut"));
const BlogIndex = lazy(() => import("./pages/blog/index"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div data-loading-route className="min-h-screen bg-background" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/try-it-out" element={<TryItOut />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
