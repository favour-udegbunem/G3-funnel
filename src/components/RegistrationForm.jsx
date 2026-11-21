
import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyfXNoEUJ1YTFT-2W6xgKvjyavGCTC24e3k2xgf50IAwejoXzqdh7ZiL8nGFHayYEQo/exec";

const WHATSAPP_NUMBER = "2349167986000";

export default function MentorshipRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full rounded-xl border border-[#DCE3EF] bg-white px-4 py-[15px] text-sm text-[#050B1C] outline-none transition placeholder:text-gray-400 focus:border-[#FBBF24] focus:ring-2 focus:ring-[#FBBF24]/20";

  const labelClass = "mb-2 block text-sm font-bold text-[#050B1C]";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const details = {
      girlName: formData.get("girlName").trim(),
      ageGroup: formData.get("ageGroup"),
      parentName: formData.get("parentName").trim(),
      whatsapp: formData.get("whatsapp").trim(),
      email: formData.get("email").trim(),
      expectations: formData.get("expectations").trim(),
    };

    if (
      !details.girlName ||
      !details.ageGroup ||
      !details.parentName ||
      !details.whatsapp ||
      !details.email ||
      !details.expectations
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (
      !GOOGLE_SCRIPT_URL.includes("/exec") ||
      !WHATSAPP_NUMBER
    ) {
      setError("Registration form configuration is incomplete.");
      return;
    }

    setIsSubmitting(true);

    try {
      // SAVE REGISTRATION TO GOOGLE SHEETS
      const submission = new URLSearchParams({
        ...details,
        programme: "G3 One-Year Mentorship Programme",
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: submission,
      });

      // PERSONALIZED WHATSAPP MESSAGE
      const message = `Hello G3 Team!

My name is ${details.parentName}, and I am interested in registering my daughter, ${details.girlName}, for the G3 One-Year Mentorship Programme.

Here are our registration details:

Girl's Name: ${details.girlName}
Age Group: ${details.ageGroup}
Parent/Guardian: ${details.parentName}
WhatsApp Number: ${details.whatsapp}
Email: ${details.email}

What I hope my daughter gains from the mentorship:
${details.expectations}

I would love to know the next steps for completing her registration.

Thank you!`;

      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      window.location.assign(whatsappURL);
    } catch (err) {
      console.error("Registration error:", err);

      setError(
        "We couldn't process your registration. Please check your internet connection and try again."
      );

      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="mentorship-registration"
      className="w-full bg-[#F0F4F9] px-5 py-16 md:py-20"
    >
      <div className="mx-auto max-w-[540px]">

        {/* HEADER */}
        <div className="mb-9 text-center">
          <span className="mb-3 block text-xs font-extrabold tracking-[3px] text-[#0788FF]">
            G3 MENTORSHIP
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#050B1C] sm:text-[44px]">
            Begin Her Journey
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#718096]">
            Take the first step towards giving your daughter
            the guidance, support and mentorship she deserves.
          </p>

          <p className="mt-5 text-base font-bold text-[#050B1C]">
            G3 One-Year Mentorship Programme
          </p>

          <p className="mt-2 text-sm text-[#718096]">
            Complete the form below to express your interest.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[22px] bg-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.10)] sm:p-8"
        >
          {/* GIRL'S FULL NAME */}
          <div className="mb-5">
            <label className={labelClass}>
              Girl's Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="girlName"
              placeholder="Enter your daughter's full name"
              className={inputClass}
              required
            />
          </div>

          {/* AGE GROUP */}
          <div className="mb-5">
            <label className={labelClass}>
              Girl's Age Group <span className="text-red-500">*</span>
            </label>

            <select
              name="ageGroup"
              className={inputClass}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select her age group
              </option>
              <option value="Under 10">Under 10</option>
              <option value="10–12 years">10–12 years</option>
              <option value="13–15 years">13–15 years</option>
              <option value="16–18 years">16–18 years</option>
              <option value="19 years and above">19 years and above</option>
            </select>
          </div>

          {/* PARENT/GUARDIAN NAME */}
          <div className="mb-5">
            <label className={labelClass}>
              Parent/Guardian's Full Name{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="parentName"
              placeholder="Enter your full name"
              className={inputClass}
              autoComplete="name"
              required
            />
          </div>

          {/* WHATSAPP NUMBER */}
          <div className="mb-5">
            <label className={labelClass}>
              Parent/Guardian's WhatsApp Number{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="tel"
              name="whatsapp"
              placeholder="e.g. 0803 123 4567"
              className={inputClass}
              autoComplete="tel"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={inputClass}
              autoComplete="email"
              required
            />
          </div>

          {/* EXPECTATIONS */}
          <div className="mb-6">
            <label className={labelClass}>
              What do you hope your daughter will gain from this mentorship?{" "}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              name="expectations"
              rows={5}
              placeholder="Tell us about the areas you would love your daughter to grow in..."
              className={`${inputClass} resize-y`}
              required
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FBBF24] px-5 py-[17px] text-base font-bold text-[#050B1C] shadow-[0_10px_20px_rgba(251,191,36,0.25)] transition hover:-translate-y-0.5 hover:bg-[#F5B51B] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Register for Mentorship"}

            {!isSubmitting && <ArrowRight size={19} />}
          </button>

          {/* PRIVACY MESSAGE */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-[#718096]">
            <ShieldCheck size={16} className="shrink-0" />

            <span>
              Your information will only be used to process
              your mentorship enquiry and communicate with you.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}