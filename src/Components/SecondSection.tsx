import logo from "../assets/luminaAiLogo.png";
import appleLogo from "../assets/AppleIcon.png";
import playstoreLogo from "../assets/playstoreLogo.png";
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
    <div className="px-24 py-20 bg-[#D9D9D9]/40 relative">
      {/* Card of Apple and play store link */}
      <div className="w-4/12 -top-32 right-8 py-8  px-10 bg-white rounded-3xl absolute">
        <div className="flex gap-10">
          <h2 className="text-[#0D0D0E] text-4xl">Download our mobile app</h2>
          <img
            src={logo}
            className="bg-[#0D0D0E] rounded-2xl object-cover px-6 py-1"
            alt=""
          />
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <div className="flex items-center text-[#0D0D0E] border-[#010202]/40 gap-2 border-3 px-8 py-3 rounded-full">
            <img src={playstoreLogo} className="bg-[#0D0D0E] w-8 h-8" alt="" />
            <div className="">
              <p className="text-sm line">GET IT ON</p>
              <h2 className="text-base font-semibold">Google Play</h2>
            </div>
          </div>
          <div className="flex items-center text-[#0D0D0E] border-[#010202]/40 border-3 px-8 gap-2 py-3 rounded-full">
            <img src={appleLogo} className=" w-8 h-8" alt="" />
            <div className="">
              <p className="text-sm line">GET IT ON</p>
              <h2 className="text-base font-semibold">Apple store</h2>
            </div>
          </div>
        </div>
      </div>

      {/* main Section */}
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
