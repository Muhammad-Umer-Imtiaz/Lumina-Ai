import { useState } from "react";
import { Plus } from "lucide-react";
import Lastimageof from "../assets/Lastimageof.png";

const ThirteenSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Is An AI Agent For My Beauty Clinic?",
      answer:
        "An AI Agent is a virtual assistant that automates bookings, reminders, and customer support for your beauty clinic.",
    },
    {
      question: "How Can AI Agents Help My Staff?",
      answer:
        "AI agents reduce repetitive tasks like answering FAQs and scheduling, allowing staff to focus on clients.",
    },
    {
      question: "Do I Need Technical Knowledge To Use It?",
      answer:
        "No, AI agents are easy to set up and user-friendly. You can manage them without coding skills.",
    },
    {
      question: "Can AI Agents Increase My Revenue?",
      answer:
        "Yes! They improve customer satisfaction, reduce no-shows, and bring repeat clients through personalized follow-ups.",
    },
    {
      question: "Is My Data Safe With AI Agents?",
      answer:
        "Absolutely. AI agents use secure, encrypted systems to keep your client data safe and private.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="px-24 bg-[#F6F6F6] py-20">
      {/*-------------------- Heading----------------------------------- */}
      <h1 className="bg-gradient-to-l from-[#10174F] to-[#777796] bg-clip-text text-transparent text-center text-4xl md:text-6xl  mb-10">
        Still Have Doubts?
        <span className="block">Frequently Asked Questions</span>
      </h1>

      {/*-------------------- FAQS Section------------------------------- */}
      <div className="flex gap-6 items-start">
        {/* ------------------- Left Section ------------------------------*/}
        <img
          src={Lastimageof}
          alt="Robot Image"
          className="w-[570px] flex-shrink-0 object-contain"
        />

        {/*------------------- Right Section FAQS --------------------------*/}
        <div className="space-y-4 max-w-3xl flex-1 min-w-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] py-8 px-8 rounded-2xl border-4 border-[#FEFEFE] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[#67676C] text-2xl ">{faq.question}</h2>
                <Plus
                  className={`w-10 h-10 text-[#6C6CEC] font-black transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-500">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirteenSection;
