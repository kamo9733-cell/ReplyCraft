import React from "react";

const ThankYou: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-24">
      <div className="max-w-xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6 text-black/90">
          Thank You for Contacting Us!
        </h2>
        <p className="text-lg text-black/80">
          One of our representatives will get in touch with you shortly.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
