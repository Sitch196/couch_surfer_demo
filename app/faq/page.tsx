"use client";
import { useState } from "react";
interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const faqData: FAQItem[] = [
    {
      question: "How do I add an article?",
      answer:
        "On the main page, click the 'Guests' button which will take you to the publish page. There you can add your article.",
    },
    {
      question: "How will hosts contact me?",
      answer:
        "When you publish, make sure to leave your contact info in the description or potential hosts may leave a comment with their contact info.",
    },
    {
      question: "I can't seem to add an article?",
      answer:
        "Make sure to log in to your account first. After logging in, you will be able to go to the publish page and add an article or see others' posts.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md md:w-full  w-full max-w-screen-lg">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleAccordionClick(index)}
              className="w-full text-left font-medium text-blue-500 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
