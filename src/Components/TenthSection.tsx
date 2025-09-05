
const Timeline = () => {
  const steps = [
    {
      id: 1,
      title: "Role Definition",
      desc: "We choose a name and a clear goal for your AI agent, like a job position. We align the tone of voice, guidelines, and instructions so it serves exactly how you want.",
    },
    {
      id: 2,
      title: "Teaching About Services",
      desc: "We upload files, add website links, and register data to ensure your AI agent knows everything about your clinic and treatments.",
    },
    {
      id: 3,
      title: "Process Configuration",
      desc: "We define exactly what your AI agent should do: schedule consultations, confirm appointments, answer questions, and even qualify patients for specific treatments.",
    },
    {
      id: 4,
      title: "Feedback And Evolution",
      desc: "We monitor performance, analyze responses, and adjust everything necessary to make your AI agent even more efficient.",
    },
  ];

  return (
    <div className="px-12 bg-[#D9D9D9]/20 ">
      {/* Heading */}
      <h2 className="text-6xl text-[#515577] text-center pt-20 ">
        Your First AI Employee, No
        <span className="block">Coding Required!</span>
      </h2>

      <div className="flex flex-col items-center py-10 px-6 w-full max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="relative w-full">
          {/* dashed Vertical Line */}
<div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 
  bg-[repeating-linear-gradient(to_bottom,#B0AFB3_0px,#B0AFB3_6px,transparent_6px,transparent_16px)]">
</div>

          <div className="space-y-12">
            {/* Big STEP circle at the top */}
            <div className="flex justify-center mb-12 absolute z-40 left-[45.5%]">
              <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#7369EC] to-[#BA55F0] flex items-center justify-center text-white text-xl font-bold">
                Step
              </div>
            </div>

            <div className="pt-64">
              {/* Steps */}
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-center mb-20">
                {/* Content wrapper */}
                <div
                  className={`w-full flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pl-10" : "pl-10"
                    } bg-gradient-to-b from-[#E3E5EB] to-[#F7F7F7] rounded-4xl `}
                  >
                    <div className="py-10 ">
                     <div className="bg-white px-4 py-4 inline-block rounded-4xl">
  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#6D6AE4] to-[#BC61E9] bg-clip-text text-transparent">
    {step.title}
  </h3>
</div>


                      <p className="text-[#67676C] mt-4 text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center pl-10 items-center">
                    <div className="bg-[#1D2977] w-10 h-10 rounded-full"></div>
                    <div className={`bg-gradient-to-r from-[#938ED6] to-[#FFFFFF] w-10 h-1 ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}></div>
                  </div>

                  {/* Empty side */}
                  <div className="w-5/12" />
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* ----------------------- Button Section------------------------------- */}
      <div className="flex flex-col items-center justify-center text-center  mt-10 pb-10">
        <h1 className="text-4xl text-[#504D59] pb-2">Want Your First AI Employee In Your Clinic?</h1>
       <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white mt-5 px-10 py-4 tracking[-3px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Schedule A Demo
              </button>
      </div>
      </div>
    </div>
  );
};

export default Timeline;
