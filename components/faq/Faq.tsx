"use client";

import { useState } from "react";
import MainContainer from "../MainContainer";

const faqItems = [
  {
    question: "What makes you the best candidate for University President?",
    answer: "I have a proven track record of leadership, transparency, and dedication to student needs. My goal is to create an inclusive and progressive environment for all students."
  },
  {
    question: "How do you plan to improve student welfare?",
    answer: "I will advocate for better housing, mental health support, and more accessible academic resources to ensure every student thrives."
  },
  {
    question: "What are your plans for campus security?",
    answer: "I will work with the administration and the county government to enhance security measures, including better lighting around the school, more security personnel, and a student safety hotline."
  },
  {
    question: "How will you ensure financial transparency?",
    answer: "I will implement a student budget committee that provides regular reports on how student funds are allocated and used."
  },
  {
    question: "What initiatives will you bring for student activities?",
    answer: "I will introduce more diverse clubs, organize student-led events such as the student participation, and secure funding for student organizations."
  },
  {
    question: "How do you plan to address academic concerns?",
    answer: "I will push for more flexible office hours with professors to improve academic advising. Additionally, I will collaborate with the university senate to introduce the Tri-Semester education system."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MainContainer>
        <div className="max-w-2xl mx-auto p-4 mb-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
            {faqItems.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
                <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg font-semibold text-gray-800 flex justify-between items-center"
                >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
            ))}
        </div>
        </div>
    </MainContainer>
  );
};

export default Faq;
