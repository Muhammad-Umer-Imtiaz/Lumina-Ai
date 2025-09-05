import ElevenVector1 from "../assets/ElevenVector1.png"
import ElevenVector2 from "../assets/ElevenVector2.png"
import ElevenVector3 from "../assets/ElevenVector3.png"
import ElevenVector4 from "../assets/ElevenVector4.png"
import ElevenVector5 from "../assets/ElevenVector5.png"
import { motion } from "framer-motion"
import { useState } from "react"
import { wrap } from "framer-motion" // ✅ helps loop index

const ElevenSection = () => {
  const data = [
    {
      id: 1,
      img: ElevenVector1,
      heading: "Audio Responses",
      para: "AI agent can answer your clients by voice, creating a humanized and close experience.",
    },
    {
      id: 2,
      img: ElevenVector2,
      heading: "Agenda Management",
      para: "Automatically schedule appointments, confirm times, and reduce no-shows without your team intervening.",
    },
    {
      id: 3,
      img: ElevenVector3,
      heading: "Recover Abandoned Quotes",
      para: "Follow up with patients who showed interest but haven’t closed the treatment, increasing conversions.",
    },
    {
      id: 4,
      img: ElevenVector4,
      heading: "Intelligent Follow-Ups",
      para: "Remind Patients About Return Visits, Promotional Campaigns, And Recommended Treatments.",
    },
    {
      id: 5,
      img: ElevenVector5,
      heading: "Full Integration",
      para: "Connects with WhatsApp, Instagram, Website, CRM, Google Calendar, and any other clinic tool.",
    },
  ]

  const [index, setIndex] = useState(0)

  // ✅ Looping index with wrap
  const wrappedIndex = wrap(0, data.length, index)

  const nextSlide = () => setIndex((prev) => prev + 1)
  const prevSlide = () => setIndex((prev) => prev - 1)

  return (
    <div className="bg-[#4E5CB9] py-20 overflow-hidden">
      {/* Heading */}
      <h1 className="px-24 bg-gradient-to-r from-[#FFFFFF] from-10% to-[#9AA7B8] to-40% bg-clip-text text-transparent text-6xl">
        Much More Than
        <span className="block">Simple Chatbots</span>
      </h1>

      {/* Carousel */}
      <div className="relative mt-20 px-10">
        {/* Cards Container */}
        <div className="">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${wrappedIndex * 53}%` }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-3/12 bg-[#F9F7FC] rounded-4xl shadow-md p-8 px-10 text-left"
              >
                {/* Circle Icon */}
                <div className="absolute -top-12 left-10 w-28 h-28 rounded-full bg-white flex items-center justify-center p-6 shadow-md">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <h2 className="text-[#4F4F5B] text-3xl mb-4 mt-16">
                  {item.heading}
                </h2>
                <p className="text-[#67676C] text-base">{item.para}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-6 items-center z-50">
          {/* Previous */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors text-2xl bg-[#4E5CB9]"
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
                  i === wrappedIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors text-2xl bg-[#4E5CB9]"
          >
            →
          </button>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center justify-center text-center mt-28">
        <h1 className="text-4xl text-white mb-6">
          Want To Put Your Clinic On Autopilot?
        </h1>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white px-10 py-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Talk To An Expert Now
        </button>
      </div>
    </div>
  )
}

export default ElevenSection
