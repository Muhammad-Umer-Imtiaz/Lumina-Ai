import FourthSectionBG from "../Assets/FourthSectionBG.png";
import FourthSectionBG2 from "../assets/FourthSectionBG2.png";
import { Check } from "lucide-react";
import FourthSectionMid from "../Assets/FourthSectionMid.png";


const items = [
  "Beauty clinics struggling with turnover and lack of commitment at the position",
  "Clinics who want to scale their sales without increasing effort",
  "Clinics losing patients due to lack of follow-up and quick response on a chat.",
];
const items2 = [
  "More Appointments",
  "Less Appointment No-Shows",
  "Zero stress with disengaged staff",
];


const FourthSection = () => {
  return (
    <div className="px-22 pt-20 bg-[#D9D9D9]/20">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#10174F]  to-[#777796] text-6xl text-center">
        Stop Losing Patients And Money{" "}
        <span className="block bg-clip-text text-transparent bg-gradient-to-l from-[#10174F] to-[#777796]">
          Due To Service Failures!{" "}
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between  mt-10">
        {/*--------------------- First Section ---------------------*/}
        <div className="relative w-[400px] h-[500px] mr-10 ">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full  rounded-2xl"
            src={FourthSectionBG}
            alt="Background Image"
          />

          {/* Content */}
          <div className="relative z-10 px-6 pt-18 flex flex-col gap-6 text-white">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Lumina Assist <br />
              <span className="block">
                Ai Agents Are <span className="block">Ideal For</span>
              </span>
            </h2>

            {/* Items */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#7C79EC] p-4 rounded-2xl"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white text-[#6D6AE4] rounded-full flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*--------------------- Middle Section   ------------------------ */}
        <img src={FourthSectionMid} alt="" width={330} height={10} />

        {/*  ------------------- Third Section ----------------------*/}
        <div className="relative w-[400px] h-[500px] ml-10">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full  rounded-2xl"
            src={FourthSectionBG2}
            alt="Background Image"
          />

          {/* Content */}
          <div className="relative z-10 px-10 pt-18 flex flex-col gap-6 text-white">
            {/* Heading */}
            <h2 className="text-xl font-bold leading-snug">
              Our Al agents work <b>24/7, responding quickly</b> and
              professionally, making automated appointments, and ensuring no
              patient is forgotten.
            </h2>

            {/* Items */}
            <div className="space-y-4">
              {items2.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#7C79EC] p-4 rounded-2xl"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white text-[#6D6AE4] rounded-full flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 pb-10">
        <h1 className="bg-clip-text text-transparent  bg-gradient-to-r from-[#10174F]  to-[#777796] text-3xl text-center">
          Want To See How It Works In Practice?{" "}
        </h1>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-lg text-white mt-5 px-14 py-4 tracking[-3px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Schedule Your Demo{" "}
        </button>
      </div>
    </div>
  );
};

export default FourthSection;
