import { motion } from "framer-motion";
import Girlimage1 from "../assets/GirlImage1.png";
import Girlimage2 from "../assets/GirlImage2.png";
import Girlimage3 from "../assets/GirlImage3.png";
import Girlimage4 from "../assets/GirlImage41.png";
import Girlimage5 from "../assets/GirlImage51.png";
import Girlimage6 from "../assets/GirlImage61.png";
import Girlimage7 from "../assets/GirlImage71.png";

const TwelveSection = () => {
  const commonData = {
    paragraph:
      "The AI Agent has completely revolutionized how we manage our clinic. We're now booking significantly more appointments, and our patients are much happier with the speed and efficiency of our service.",
    name: "Dr. Laura Mendes",
    role: "Dentist and Owner of BrightSmile Clinic",
    rating: "5",
  };

  const data = [
     { id: 1, image: Girlimage1, ...commonData },
    { id: 2, image: Girlimage2, ...commonData },
    { id: 3, image: Girlimage3, ...commonData },
    { id: 4, image: Girlimage4, ...commonData },
    { id: 5, image: Girlimage5, ...commonData },
    { id: 6, image: Girlimage6, ...commonData },
    { id: 7, image: Girlimage7, ...commonData },
  ];

  return (
    <div className="bg-[#F6F6F6] py-20">
      {/* -------------------------------Heading--------------------------------------- */}
      <h2 className="bg-gradient-to-l from-[#10174F] to-[#777796] bg-clip-text text-transparent text-center  text-6xl">
        Who Uses It,
        <span className="block">Becomes A Fan!</span>
      </h2>

      {/* -------------------------------Container-------------------------*/}
      <div>
        {/* ---------------------------First Container Animation--------------------------- */}
        <div className="py-4 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 30, // adjust speed (higher = slower)
              repeat: Infinity,
            }}
          >
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F6F6] rounded-2xl  p-6 w-[550px] flex-shrink-0 border-2 border-[#FEFEFE]"
              >
                {/* Top: Image + Paragraph */}
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#67676C] text-lg leading-relaxed">
                    {item.paragraph}
                  </p>
                </div>

                {/* Bottom: Name, Role, Rating */}
                <div className="flex items-center justify-between mt-6 pl-24">
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-2xl font-semibold text-gray-900 ">
                    {item.rating}
                    <span className="text-purple-500 text-xl pb-1">⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------------------Second Container Animation--------------------------- */}

        <div className="bg-[#F6F6F6] py-6 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 30, // adjust speed (higher = slower)
              repeat: Infinity,
            }}
          >
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F6F6] rounded-2xl  p-6 w-[550px] flex-shrink-0 border-2 border-[#FEFEFE] "
              >
                {/* Top: Image + Paragraph */}
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#67676C] text-lg leading-relaxed">
                    {item.paragraph}
                  </p>
                </div>

                {/* Bottom: Name, Role, Rating */}
                <div className="flex items-center justify-between mt-6 pl-24">
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-2xl font-semibold text-gray-900 ">
                    {item.rating}
                    <span className="text-purple-500 text-xl pb-1">⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------------------Third Container Animation--------------------------- */}

        <div className="bg-[#F6F6F6] py-4 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 30, // adjust speed (higher = slower)
              repeat: Infinity,
            }}
          >
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F6F6] rounded-2xl  p-6 w-[550px] flex-shrink-0 border-2 border-[#FEFEFE]"
              >
                {/* Top: Image + Paragraph */}
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#67676C] text-lg leading-relaxed">
                    {item.paragraph}
                  </p>
                </div>

                {/* Bottom: Name, Role, Rating */}
                <div className="flex items-center justify-between mt-6 pl-24">
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-2xl font-semibold text-gray-900 ">
                    {item.rating}
                    <span className="text-purple-500 text-xl pb-1">⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TwelveSection;
