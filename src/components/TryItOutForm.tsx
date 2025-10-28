// src/components/TryItOutForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TryItOutForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    jobTitles: "",
    companySize: "",
    geography: "",
    technographics: "",
    painPoints: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send data to your webhook / automation
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-4xl mx-auto rounded-2xl p-8 relative text-center">
        <h3 className="text-3xl font-bold mb-4 text-[#0F1B3D]">Thank you!</h3>
        <p className="text-[#0F1B3D]">
          Your request has been submitted. You will receive your lead sheet shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl p-8 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#0F1B3D]">
        Try it Out
      </h2>

      <form className="grid gap-6" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry / Target Audience"
              value={formData.industry}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <Button
              type="button"
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold w-full"
            >
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="jobTitles"
              placeholder="Ideal Job Titles (e.g., CTO, VP of Sales)"
              value={formData.jobTitles}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="text"
              name="companySize"
              placeholder="Company Size (e.g., 50-200 employees)"
              value={formData.companySize}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="text"
              name="geography"
              placeholder="Geography / Location (e.g., US, EU)"
              value={formData.geography}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
              required
            />
            <input
              type="text"
              name="technographics"
              placeholder="Technographics (e.g., Salesforce, HubSpot)"
              value={formData.technographics}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition"
            />
            <textarea
              name="painPoints"
              placeholder="Pain Points / Challenges"
              value={formData.painPoints}
              onChange={handleChange}
              className="border rounded-lg p-4 w-full text-[#0F1B3D] focus:ring-2 focus:ring-primary outline-none transition resize-none"
              rows={4}
              required
            />

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={handleBack}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex-1"
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default TryItOutForm;
