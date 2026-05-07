import { useState } from "react";
import { ChevronDown } from 'lucide-react';

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

export default function CommonQuestions({ serviceDetail }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = Array.isArray(serviceDetail?.faq?.items) ? serviceDetail.faq.items : [];
  const title = serviceDetail?.faq?.title || '';

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqItems.length === 0) {
    return null;
  }

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          {title}
        </h2>

        <div className="max-w-3xl 2xl:max-w-5xl mx-auto">
          {faqItems.map((faq, index) => (
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
 