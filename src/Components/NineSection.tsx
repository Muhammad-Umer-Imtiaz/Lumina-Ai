import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/insta.png";
import group from "../assets/Group.png";
import Link from "../assets/Link.png";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { id: 1, image: whatsapp, heading: "WhatsApp  & WhatsApp Business" },
  {
    id: 2,
    image: group,
    heading: "Clinic Website (Frames or other Platforms)",
  },
  { id: 3, image: insta, heading: "Instagram & Instagram Business" },
  { id: 4, image: Link, heading: "Facebook Messenger" },
];

export default function ConnectSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length); // Loop back to 0 after last item
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length); // Loop to last item when going before first
  };

  return (
    <div className="bg-[#5859B0] pl-24 py-28 flex items-center">
      {/* Left Heading */}
      <h2 className="w-2/5 bg-gradient-to-r from-[#FFFFFF] to-[#9AA7B8] bg-clip-text text-transparent text-6xl font-bold leading-tight">
        Connect Your AI Agents Where Your Patients Are!
      </h2>

      {/* Right Carousel */}
      <div className="relative w-3/5">
        {/* Cards Container */}
        <div className="overflow-hidden pl-10">
          {/* Cards Row */}
          <motion.div
            className="flex gap-6"
            animate={{ 
              x: `-${index * 53}%` // Simple calculation based on current index
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-4/12 bg-[#797AC0] text-white px-6 py-8 rounded-2xl shadow-lg"
              >
                {/* Top-right link icon */}
                <img
                  src={Link}
                  alt="link icon"
                  className="absolute top-4 right-4 w-16 h-16 opacity-80 hover:opacity-100 cursor-pointer"
                />

                {/* Icon */}
                <div className="w-18 h-18 p-4 rounded-full border-8 border-white bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`${item.heading} icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Heading */}
                <h3 className="mt-4 text-xl font-medium pr-4">{item.heading}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-6 items-center z-50">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors text-2xl bg-[#5859B0]"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors text-2xl bg-[#5859B0]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}