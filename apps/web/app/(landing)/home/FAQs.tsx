/* eslint-disable no-redeclare */
"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => (
  <div
    className="flex cursor-pointer mb-8 pb-8 group w-full items-start justify-between border-b text-left"
    onClick={toggle}
  >
    <div className="max-w-xl pr-5">
      <h3 className={`text-lg font-semibold text-black"}`}>{question}</h3>
      {isOpen && <p className="text-lg text-gray-500 mt-3">{answer}</p>}
    </div>
    <div className="pt-1">
      {isOpen ? (
        <span className="relative top-3">
          <svg
            width="17"
            height="3"
            viewBox="0 0 17 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
              fill="black"
            />
          </svg>
        </span>
      ) : (
        <span className="relative top-1">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
              fill="black"
            />
          </svg>
        </span>
      )}
    </div>
  </div>
);

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is IdeaHub?Do you provide a complete design style?",
      answer:
        "IdeaHub is a platform where you can share your tech ideas or problems and connect with others to collaborate and find solutions.",
    },
    {
      question: "How do I submit an idea or problem?How was the license?",
      answer:
        "Simply create an account, go to the submission section, and fill in the details of your idea or problem.",
    },
    {
      question: "How can I find collaborators for my project?",
      answer:
        "Browse user profiles or use the collaborator matching feature to find people with the skills and interests you need.",
    },
    {
      question: "Can I get feedback on my idea or problem?",
      answer:
        "Yes, the community can vote and comment on your submissions, providing valuable feedback and validation.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mx-auto max-w-xl flex flex-col items-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight border rounded-2xl w-fit text-center px-3 py-1 bg-secondary-bg">
              FAQ's
            </h2>
            <p className="mt-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900">
              You ask? We answer
            </p>
          </div>
          <div className="pt-18 mt-16 px-8 sm:px-20 pb-18 bg-white rounded-4xl">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
