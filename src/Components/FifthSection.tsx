import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import vector4 from "../assets/Vector4.png";
import vector5 from "../assets/Vector5.png";
import specialImg from "../assets/AiImage2.png"; // 👉 replace with your image

const data = [
  {
    id: 1,
    img: vector1,
    heading: "Always Impeccable Service",
    paragraph:
      "They reduce the fime from first contact with the patient. increasing the number of bookings immediately.",
  },
  {
    id: 2,
    img: vector2,
    heading: "Unlimited Scalability",
    paragraph:
      "Working day and night, without absenteeism, sick leave, labor issues - and no complaints!",
  },
  {
    id: 3,
    img: vector3,
    heading: "They Work 24/7, With No Breaks",
    paragraph:
      "They can serve 1, 1000, or even 1 million patients per month without losing quality, speed, or efficiency.",
  },
  {
    id: 4,
    img: vector4,
    heading: "Accelerate Conversions",
    paragraph:
      "They reduce the fime from first contact with the patient. increasing the number of bookings immediately.",
  },
  {
    id: 5,
    img: vector5,
    heading: "Cut Operational Costs",
    paragraph:
      "Less effort managing feams, exhausting meetings, and hiring processes.",
  },
];

const FifthSection = () => {
  return (
    <div className="px-24 bg-[#EDF0F2]/90 py-24 ">
      <h1 className="text-[#484C70] text-6xl">
        Why Does Your Clinic{" "}
        <span className="block ">
          Need An Al Agent?
        </span>
      </h1>

      {/* Grid Layout */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
        {/* First 4 cards */}
        {data.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white relative rounded-4xl shadow-md p-8 flex flex-col items-center text-center"
          >
            {/* Circle Icon */}
            <div className="absolute top-[-69px] w-40 h-40 rounded-full bg-[#EDF0F2]/90 flex items-center justify-center mb-6">
              <div className="w-34 h-34 rounded-full bg-white flex items-center justify-center p-12">
                <img
                  src={item.img}
                  alt="vector"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>

            {/* Content */}
            <h2 className="text-[#4F4C5E] text-2xl text-start font-semibold mb-2 mt-20">
              {item.heading}
            </h2>
            <p className="text-[#67676C] text-base text-start">
              {item.paragraph}
            </p>
          </div>
        ))}

        {/* Row 2: Container for last card and content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 col-span-1 sm:col-span-2 lg:col-span-4 gap-x-8">
          {/* Last Card - Fixed Height */}
          <div
            key={data[4].id}
            className="bg-white relative rounded-4xl shadow-md p-8 flex flex-col items-center text-center h-[350px]"
          >
            <div className="absolute top-[-69px] w-40 h-40 rounded-full bg-[#EDF0F2]/90 flex items-center justify-center mb-6">
              <div className="w-34 h-34 rounded-full bg-white flex items-center justify-center p-12">
                <img
                  src={data[4].img}
                  alt="vector"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
            <h2 className="text-[#4F4C5E] text-2xl text-start font-semibold mb-2 mt-20">
              {data[4].heading}
            </h2>
            <p className="text-[#67676C] text-base text-start">
              {data[4].paragraph}
            </p>
          </div>

          {/* Text + Button + Image Block */}
          <div className=" relative text-center rounded-3xl flex flex-col lg:flex-row items-center justify-between col-span-1 sm:col-span-2 lg:col-span-3">
            {/* Left content */}
            <div className="max-w-lg pl-36">
              <h1 className="text-[#4E4D5F] text-4xl">
                Discover How Your
                <span className="block">Clinic Can Profit More</span>
                <span className="block">With An Al Agent</span>
              </h1>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-lg text-white mt-5 px-14 py-4 tracking[-3px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                See It In Action
              </button>
            </div>

            {/* Right image */}
            <img
              src={specialImg}
              alt="special"
              className="w-[400px] absolute  right-0 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
