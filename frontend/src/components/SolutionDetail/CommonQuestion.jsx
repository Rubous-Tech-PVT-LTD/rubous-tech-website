import { useState } from "react";
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is this an official WhatsApp API?",
    answer:
      "Yes, we use official WhatsApp Business API provided by Meta. This ensures full compliance, reliability, and access to all platform features.",
  },
  {
    question: "How many messages can I send daily?",
    answer:
      "Your daily message limit depends on your plan and WhatsApp tier. Starter plans begin at 1,000 messages/day and can scale up to unlimited with higher tiers.",
  },
  {
    question: "Can I integrate it with my CRM?",
    answer:
      "Absolutely. We support integrations with popular CRMs like HubSpot, Salesforce, Zoho, and more via our REST API and native connectors.",
  },
  {
    question: "Do you support rich media messages?",
    answer:
      "Yes! You can send images, videos, audio files, documents, and interactive buttons or list messages through our platform.",
  },
];

const ChevronIcon = () => (
  <ChevronDown className="w-3.5 h-3.5" />
);

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg mb-2.5 overflow-hidden cursor-pointer transition-all duration-300 ${
        isOpen ? "shadow-lg" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 select-none">
        <span className="text-sm font-medium text-gray-800">
          {question}
        </span>
        <span
          className={`flex items-center justify-center text-gray-500 transition-transform duration-300 ease-in-out flex-shrink-0 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronIcon />
        </span>
      </div>

      {/* Body */}
      <div
        className={`overflow-hidden transition-all duration-350 px-5 ease-in-out ${
          isOpen ? "max-h-48 py-5" : "max-h-0 py-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-7">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Common Questions
        </h2>

        <div className="max-w-3xl 2xl:max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 