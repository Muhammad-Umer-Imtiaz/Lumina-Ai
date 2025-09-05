import AiAssistantphone from "../assets/AiAssistantphone.png";


const Third = () => {
  return (
<>
<div className="grid grid-cols-2   pt-24  bg-[#D9D9D9]/40">
        <div className="bg-white flex flex-col pl-20 rounded-r-4xl justify-center pr-16">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#10174F]  to-[#777796] text-5xl">
            Automate Your Clinic
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#10174F] to-[#777796]">
              Simply And Efficiently
            </span>
          </h1>
          <p className="text-[##67676C] text-xl  mt-8">
            Our AI agents are available 24/7, ready to assist your clinic around
            the clock. They operate seamlessly across multiple channels—such as
            WhatsApp, Instagram, and your website—delivering consistent accuracy
            and efficiency on every platform. <br /> <br/>
            With our platform, your clinic not only improves operational
            efficiency but also provides continuous, humanized support that
            enhances patient satisfaction and drives higher conversion rates.
          </p>
        </div>
        <div className="pl-28">
          <img src={AiAssistantphone} alt="AiAssistantphone" width={620}/>
        </div>
      </div>  
      </>  )
}

export default Third