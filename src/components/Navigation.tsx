import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      const heroSection = document.querySelector("section");
      heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
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
          {/* Logo */}
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
            <HashLink smooth to="/#features" className="text-foreground hover:text-primary transition-colors duration-300">
              Features
            </HashLink>
            <HashLink smooth to="/#how-it-works" className="text-foreground hover:text-primary transition-colors duration-300">
              How it Works
            </HashLink>
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors duration-300">
              Case Studies
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors duration-300">
              FAQ
            </Link>
            <HashLink smooth to="/#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </HashLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://calendly.com/replyycraft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-4 pb-4 border-t border-border">
            <HashLink smooth to="/#features" className="text-foreground hover:text-primary transition-colors duration-300">
              Features
            </HashLink>
            <HashLink smooth to="/#how-it-works" className="text-foreground hover:text-primary transition-colors duration-300">
              How it Works
            </HashLink>
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors duration-300">
              Case Studies
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors duration-300">
              FAQ
            </Link>
            <HashLink smooth to="/#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </HashLink>
            <a
              href="https://calendly.com/replyycraft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium mt-2 text-center"
            >
              Book a call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
