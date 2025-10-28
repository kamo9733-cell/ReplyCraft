// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          © 2025 <span className="font-semibold text-foreground">ReplyCraft</span>. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          Disclaimer: Results may vary. ReplyCraft provides outreach automation and consulting services, not guaranteed business outcomes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
