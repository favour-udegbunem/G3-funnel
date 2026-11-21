
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I'm struggling with confidence. Can G3 help me?",
    answer:
      "Absolutely! G3 is committed to helping girls discover their worth, recognise their strengths and develop the confidence to become the best version of themselves. You deserve to believe in yourself and your potential.",
  },
  {
    question: "What if I don't know what I want to become in life?",
    answer:
      "You don't have to have everything figured out yet. G3 encourages girls to discover their purpose, explore their abilities and begin making intentional decisions about the future they want to create.",
  },
  {
    question: "How can I deal with peer pressure?",
    answer:
      "Learning to make wise decisions, establish healthy boundaries and stand by your values is important. G3 provides guidance to help girls navigate peer pressure without losing sight of who they are.",
  },
  {
    question: "Are these books suitable for teenagers?",
    answer:
      "Yes! The G3 book collection is designed around important lessons and conversations that can help young girls navigate growing up, build confidence, make wise decisions and understand their purpose.",
  },
  {
    question: "What if my daughter doesn't like reading?",
    answer:
      "That's okay! Every girl develops at her own pace. Parents can encourage reading by making it an enjoyable experience, discussing the lessons together and helping their daughters connect the lessons to everyday life.",
  },
  {
    question: "How can I help my daughter become more confident and responsible?",
    answer:
      "Start by creating an environment where she feels heard, supported and encouraged to grow. G3 provides resources that can help parents guide their daughters through important conversations about confidence, character, purpose and decision-making.",
  },
  {
    question: "Is there mentorship available beyond the books?",
    answer:
      "Yes! G3 also offers a mentorship programme designed to provide girls with continued guidance, encouragement and support as they grow. Explore the available mentorship opportunities to learn more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-[670px]">

        {/* HEADER */}
        <div className="mb-12 text-center md:mb-14">
          <span className="mb-4 block text-[12px] font-extrabold tracking-[3px] text-[#0788FF]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-[#050B1C] sm:text-4xl md:text-[46px]">
            Questions? Answered.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500 md:text-[15px]">
            Everything you need to know about helping your girl
            grow into a confident, purposeful and empowered young woman.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#DCE2EC]"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-[19px] text-left"
                >
                  <span className="text-[15px] font-bold leading-snug text-[#050B1C] transition-colors hover:text-[#0788FF] sm:text-[17px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#64748B] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-6 text-[14px] leading-[1.9] text-[#64748B] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}