import audio from "../assets/Audio.png";
import call from "../assets/call.png";
import bell from "../assets/bell.png";
import chat from "../assets/chat.png";
import EightSectionImage from '../assets/EightSectionImage.png'

const data = [
  {
    id: 1,
    img: audio,
    heading: "Audio Interaction",
    paragraph:
      "Our AI agents engage with your patients using audio responses, delivering a personalized and human-like experience.",
  },
  {
    id: 2,
    img: bell,
    heading: "Proactive Patient Outreach",
    paragraph:
      "Automatically reach out to patients with promotions, appointment reminders, and treatment updates to keep them engaged.",
  },
  {
    id: 3,
    img: call,
    heading: "Smart Follow-Up",
    paragraph:
      "Connect with patients who requested information but haven’t booked yet, helping to recover missed appointment opportunities.",
  },
  {
    id: 4,
    img: chat,
    heading: "Personalized Support with Integrated Records",
    paragraph:
      "Keep track of all patient interactions to provide accurate answers and faster, more efficient support.",
  },
];
const EightSection = () => {
  return (
    <div className="px-24 bg-[#D9D9D9]/20 py-24 flex gap-1">
        <div>
      <h2 className="text-[#515577] text-6xl">Advanced Features for Your Clinic</h2>
      <p className="text-[#67676C] text-xl mt-6 mb-12">
        Lumina’s AI Agents Go Beyond the Basics, Delivering Solutions That
        Elevate Your Service
      </p>
      <div>
        {data.map((item)=>(
        <div key={item.id} className="flex items-start gap-8 mb-10 object-contain">
          <img src={item.img} alt={item.heading} width={70} height={60} className="object-center p-5 rounded-full bg-[#6F6AED]"/>
          <div>
            <h3 className="text-[#3C3E48] font-bold text-2xl">{item.heading}</h3>
          <p className="text-[#67676C] text-xl">{item.paragraph}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    
        <img src={EightSectionImage} alt="EightSectionImage" className="w-xl" />
    
    </div>
  );
};

export default EightSection;
