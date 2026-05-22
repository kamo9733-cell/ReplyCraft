// src/pages/TryItOut.tsx
import SEO from "@/components/SEO";
import TryItOutForm from "@/components/TryItOutForm";

const TryItOutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
      <SEO
        title="Try Reply Craft | Get a Free Sample Lead Sheet"
        description="Try Reply Craft — share your ICP and get a free sample lead sheet built by our AI-powered, intent-driven outreach system."
        canonical="https://reply-craft.com/try-it-out"
      />
      <div className="flex-grow flex items-center justify-center py-24">
        <TryItOutForm />
      </div>
    </section>
  );
};

export default TryItOutPage;
