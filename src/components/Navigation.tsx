// src/components/Navigation.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // If already on the homepage → smooth scroll to top (Hero section)
      const heroSection = document.querySelector("section");
      heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If not on home → navigate home first, then scroll to Hero after load
      navigate("/");
      setTimeout(() => {
        const heroSection = document.querySelector("section");
        heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Clickable) */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold text-primary hover:opacity-80 transition"
            >
              ReplyCraft
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink
              smooth
              to="/#features"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Features
            </HashLink>
            <HashLink
              smooth
              to="/#how-it-works"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              How it Works
            </HashLink>
            <Link
              to="/case-studies"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Case Studies
            </Link>
            <Link
              to="/pricing"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              FAQ
            </Link>
            <HashLink
              smooth
              to="/#contact"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </HashLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://calendly.com/kamo97/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
