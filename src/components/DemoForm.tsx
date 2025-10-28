// src/components/DemoForm.tsx
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

interface DemoFormProps {
  onBack?: () => void;
}

const companySizes = ["1-10", "11-50", "51-200", "201-500", "500+"];
const roles = ["Founder/CEO", "Sales Leader", "Marketing Leader", "Operations", "Other"];

const DemoForm: React.FC<DemoFormProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");

  // 🔒 Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    // read EmailJS values from Vite env vars
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing EmailJS env vars. Check .env.local or Vercel env settings.");
      alert("Configuration error. Please try again later.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl relative">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#0F1B3D]">Thank You!</h3>
            <p className="text-lg text-[#0F1B3D]/80">
              One of our representatives will get back to you shortly.
            </p>
            {onBack && (
              <button
                onClick={onBack}
                className="mt-6 text-sm text-[#0F1B3D] underline"
              >
                Back to Overview
              </button>
            )}
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-bold text-center mb-8 text-[#0F1B3D]">
              Schedule Your Demo
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 max-h-[70vh] overflow-y-auto pr-2"
            >
              {/* form fields unchanged */}
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                  Company Size
                </label>
                <select
                  name="company_size"
                  className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="">Select</option>
                  {companySizes.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="">Select</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* If Role is Other */}
              {role === "Other" && (
                <div>
                  <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                    Please specify your role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="other_role"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              )}

              {/* ICP */}
              <div>
                <label className="block text-sm font-medium text-[#0F1B3D] mb-1">
                  Ideal Customer Profile
                </label>
                <textarea
                  name="icp"
                  rows={4}
                  className="border border-gray-300 rounded-lg p-3 w-full text-[#0F1B3D] placeholder-[#0F1B3D]/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>

              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="text-sm text-[#0F1B3D] underline mt-2"
                >
                  Back to Overview
                </button>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoForm;
