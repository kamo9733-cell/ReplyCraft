import { Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT: Socials */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Connect with us:
            </span>

            <a
              href="https://www.linkedin.com/company/reply-craft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Linkedin className="w-7 h-7" />
            </a>

            <a
              href="https://www.facebook.com/replycraftt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Facebook className="w-7 h-7" />
            </a>
          </div>

          {/* CENTER: Important Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition">
              Case Studies
            </Link>

            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>

            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition">
              Blog
            </Link>
          </div>

          {/* RIGHT: Disclaimer */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 <span className="font-semibold text-foreground">ReplyCraft</span>. All rights reserved.
            </p>
            
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
