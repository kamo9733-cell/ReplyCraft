import openaiLogo from "@/assets/logos/openai.png";
import makeLogo from "@/assets/logos/make.png";
import n8nLogo from "@/assets/logos/n8n.png";
import gmailLogo from "@/assets/logos/gmail.png";
import apolloLogo from "@/assets/logos/apollo.png";
import instantlyLogo from "@/assets/logos/instantly.png";

const logos = [
  { name: "OpenAI", src: openaiLogo },
  { name: "Make.com", src: makeLogo },
  { name: "n8n", src: n8nLogo },
  { name: "Gmail", src: gmailLogo },
  { name: "Apollo", src: apolloLogo },
  { name: "Instantly", src: instantlyLogo },
];

const LogoBar = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Powered by industry-leading tools
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;