import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "What is this?", answer: "This is a sample FAQ." },
    { question: "How does it work?", answer: "Click to expand the answer." },
    { question: "Is this responsive?", answer: "Yes, it works on all devices." }
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-center">FAQs</h2>
      <div className="max-w-xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="w-full text-left p-4 bg-white border rounded shadow"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="transition-all ease-in-out p-4 text-gray-700 bg-white border-l-4 border-blue-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}