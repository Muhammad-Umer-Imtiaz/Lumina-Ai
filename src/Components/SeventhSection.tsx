import SevenSectionImage1 from "../assets/SevenSectionImage1.png";
import SevenSectionImage2 from "../assets/SevenSectionImage2.png";
import SevenSectionImage3 from "../assets/SevenSectionImage3.png";
import SevenSectionImage4 from "../assets/SevenSectionImage4.png";
import tick from "../assets/tick.png";
const data = [
  {
    id: 1,
    image: SevenSectionImage1,
    heading: "CRC/SDR",
    lines: [
      "Automatically schedule consultations and procedures",
      "Send reminders to reduce no-shows and cancellations",
      "Collect patient information before the appointment",
      "Redirect to a human agent when necessary",
    ],
  },
  {
    id: 2,
    image: SevenSectionImage2,
    heading: "Sales & Treatment Closure",
    lines: [
      "Qualify leads and identify interested patients",
      "Present special offers and payment conditions",
      "Recover patients who abandoned their treatment quote",
      "Close sales without manual intervention",
    ],
  },
  {
    id: 3,
    image: SevenSectionImage3,
    heading: "Customer Service & Support",
    lines: [
      "Answer questions about procedures and prices",
      "Resolve problems and guide patients",
      "Send links and automatic instructions",
      "Ensure fast and efficient service",
    ],
  },
  {
    id: 4,
    image: SevenSectionImage4,
    heading: "Social Media & Wp Management",
    lines: [
      "Respond to messages on Instagram, Facebook, and Whatsapp",
      "Ensure fast interaction in comments and DMs",
      "Maintain consistent service across all channels",
      "Operate 24/7, without delays or missing opportunities",
    ],
  },
];

const SeventhSection = () => {
  return (
    <div className="px-24 bg-[#D9D9D9]/20 pt-20">
      <h1 className="text-[#515577] text-6xl text-center leading-16 letterSpacing-[-2px]">
        If One Al Agent Makes A Difference,
        <span className="block">Imagine A Whole Team!</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-24 ">
        {data.map((items) => (
          <div
            key={items.id}
            className="border-4 border-white flex flex-col items-center px-6 py-6 rounded-[3rem]"
          >
            <div className="flex flex-col items-center h-40">
              <img src={items.image} alt="" width={50} height={46} />
              <h2 className="text-[#4E4D5B] font-bold text-2xl text-center mb-4 leading-6 letterSpacing-[-2px] mt-6">
                {items.heading}
              </h2>
            </div>
            {items.lines.map((line, index) => (
              <p key={index} className="flex items-center gap-3 pb-2 ">
                <img
                  src={tick}
                  alt="Tick Mark"
                  className="bg-[#5F5CF3] p-2 pt-3  w-8 object-fit rounded-full"
                />
                <span className="text-[#67676C] text-base ">{line}</span>
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center text-center  mt-10 pb-10">
        <h1 className="text-5xl text-[#504D59]">Start Now And See Immediate Results!</h1>
       <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white mt-5 px-20 py-5 tracking[-3px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Schedule A Demo
              </button>
      </div>
    </div>
  );
};

export default SeventhSection;
