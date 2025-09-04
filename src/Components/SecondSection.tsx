import React from "react";

const data = [
  {
    id: 1,
    percentage: "95%",
    heading: "Up to 95% automated service",
    paragraph:
      "AI handles simple and repetitive tasks, freeing up your team to focus on more strategic activities.",
  },
  {
    id: 2,
    percentage: "78%",
    heading: "Up to 78% increase in appointment booking rates",
    paragraph:
      "AI handles simple and repetitive tasks, freeing up your team to focus on more strategic activities.",
  },
  {
    id: 3,
    percentage: "89%",
    heading: "Up to 89% saving on operational costs",
    paragraph:
      "AI handles simple and repetitive tasks, freeing up your team to focus on more strategic activities.",
  },
];
const SecondSection = () => {
  return (
    <div className="px-24 py-20 bg-[#D9D9D9]/40 ">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#10174F]  to-[#777796] text-6xl">
        Proven Results For{" "}
        <span className="block bg-clip-text text-transparent bg-gradient-to-l from-[#10174F] to-[#777796]">
          Your Beauty Clinic
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start  gap-4 mt-10 px-8 py-8 rounded-2xl  bg-gradient-to-b from-[#E3E5EB] to-[#F7F7F7]   shadow-sm"
          >
            {/* Percentage Circle */}
            <div className="bg-white   shadow-md px-6 py-3 rounded-full">
              <span className="text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6D6AE4] to-[#BC61E9]">
                {item.percentage}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl  text-[##0D0D0E] leading-8 tracking-[-2px]">
              {item.heading}
            </h2>

            {/* Paragraph */}
            <p className="text-[#67676C] text-lg leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
        <div className="flex flex-col items-center  justify-center text-center   pt-16 font-medium text-base/3 ">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl  leading-9 text-[#0D0D0E] mb-8 px-4">
            See How Your
            <span className="block">Clinic can</span>
            <span className="block">Achieve These</span>
            <span className="block ">Results</span>
          </h2>

          {/* Button */}
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-6 tracking[-3px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Speak To a Specialist Now!
          </button>
        </div>
      </div>

      {/* Add more sections or content as needed */}
      
    </div>
  );
};

export default SecondSection;
