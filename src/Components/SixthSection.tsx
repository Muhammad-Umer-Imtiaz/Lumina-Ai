import SixthSectionImage from "../assets/SixthSectionImage.png"

const data =[
    {
        id: "01",
        heading:"Humanized And Natural Service",
        paragraph:"Provide An Incredible Experience For Your Patients With Quick. Personalized Support That's Always Available."
    },
    {
        id : "02",
        heading:"Intelligent Automation For Your Clinic",
        paragraph:"Let Al Take Care Of Scheduling. Confirmations, And Follow-Ups While Your Team Focuses On In-Person Service And Procedures."
    },
    {
        id : "03",
        heading:"Quick And Always Up-To-Date Responses",
        paragraph:"Ensure Accurate Information On Hours, Treatments, And Prices, Reducing Doubts And Improving New Patient Conversion."
    },
    {
        id : "04",
        heading:"Assertive Decision-Making And Problem Solving",
        paragraph:"Your Al Agent Identifies Needs, Provides Solutions, And Solves Problems Without Human Intervention, Optimizing The Clinic's Routine."
    }
]
const SixthSection = () => {
  return (
    <div className="px-24 py-20 bg-[#D9D9D9]/20 space-y-10 flex gap-14">
        <img src={SixthSectionImage} className="w-[640px]" alt="Image" />
        <div className="flex flex-col gap-10 ">
            <h1 className="text-6xl text-[#515577]">What Is An Al Agent For Beauty Clinics?</h1>
<p className="text-lg text-[#67676C]">Imagine Having An Exclusive "ChatGPT/ Deepseek/ Gemini" For Your Clinic! Our Al Agents Understand And Respond To Your Patients, Perform Automatic Tasks, And Ensure Flawless Service 24/7- Without Breaks, Failures, Or Complications.</p>
        {data.map((item)=>(
            <div key={item.id} className="flex items-start gap-4">
                <span className="bg-[#6D68F2] text-xl text-[#fff] px-3 py-2 mt-3 rounded-full">{item.id}</span>
                <div>
                    <h2 className="text-[#3C3E48] font-bold text-xl"> {item.heading}</h2>
                    <p className="text-[#67676CFF] text-lg">{item.paragraph}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default SixthSection