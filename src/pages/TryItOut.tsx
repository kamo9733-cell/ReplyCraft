// src/pages/TryItOut.tsx
import TryItOutForm from "@/components/TryItOutForm";

const TryItOutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
      <div className="flex-grow flex items-center justify-center py-24">
        <TryItOutForm />
      </div>
    </section>
  );
};

export default TryItOutPage;
