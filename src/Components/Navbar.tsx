import LuminaLogo from "../assets/LuminaLogo.png"

const Navbar = () => {
  return (
    <>
        <nav className="flex justify-between items-center py-6">
        <img src={LuminaLogo} alt="LuminaLogo" className="w-[180px] h-[60px]" />
        <ul className='bg-white rounded-full flex gap-8 px-14  py-6 text-lg font-normal list-none shadow-lg'>
            <li>Home</li>
            <li>Result</li>
            <li>Why Choose Us</li>
            <li>Testimonial</li>
            <li>Faq</li>
        </ul>
        <button className="bg-linear-to-r from-[#6C69E7] to-[#AE62DE] text-white px-16 text-xl py-5 rounded-full">Try now </button>
        </nav>
    </>
  )
}

export default Navbar