import React from "react";
import Navbar from "./Navbar";
import Users from "../assets/Users.png";
import background from "../assets/background.png";
import employee from "../assets/employee.png";
import landingLast from "../assets/landingLast.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import Assistant from "../assets/Assistant.png";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#E7E9F2] via-[#FEFEFE] to-[#E7E9F2] px-10 md:px-24 pb-20">
      <Navbar />

      {/* Heading */}
      <h6 className="text-center mt-10 text-5xl md:text-7xl lg:text-8xl font-semibold text-[#0D184A] leading-tight">
        Transform Your <br />
        Clinic With AI Agents
      </h6>

      {/* MAIN SECTION */}
      <div className=" flex items-center justify-between gap-12">

        {/* ---------------------------LEFT COLUMN-------------------------- */}
        <div className="flex flex-col items-start gap-6 max-w-xs">
          {/* Users badge */}
          <div className="w-fit inline-flex gap-2 bg-white py-4 ml-10 px-12 rounded">
            <img className="inline" src={Users} width={60} alt="" />
            <span className="inline self-center">98 Users</span>
          </div>

          {/* Background + Employee */}
          <div className="relative w-[280px] md:w-[320px]">
            {/* Background image */}
            <img
              src={background}
              alt=""
              className="absolute inset-0 w-full h-full object-contain pt-16"
            />
            {/* Foreground (employee) */}
            <img src={employee} alt="" className="relative z-10 w-full" />
          </div>

          {/* Description */}
          <p className="text-[#0D184A]/70 text-sm leading-relaxed">
            Ai employees working 24/7, ready to boost your sales by making
            appointments without breaks, vacations, or errors.
          </p>
        </div>

        {/* --------------------------------MIDDLE SECTION------------------------ */}

        <div className="relative flex items-center justify-center ">
          {/* Assistant (AI face) with bottom blur */}
          <div className="relative">
            {/* Assistant image */}
            <img src={Assistant} alt="" className="w-[360px] md:w-[460px]" />

            {/* Bottom overlay for blur + gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-2/5"
              style={{
                background:
                  "linear-gradient(to top, rgba(231,233,242,1), rgba(254,254,254,0.7), rgba(231,233,242,0))",
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
              }}
            />
          </div>

          {/* Left arrow */}
          <img
            src={arrow1}
            alt="arrow1"
            className="absolute left-[-130px] top-14 h-24"
          />

          {/* Right arrow */}
          <img
            src={arrow2}
            alt="arrow2"
            className="absolute right-[-80px] bottom-20 h-40"
          />
        </div>

        {/* ---------------------- RIGHT SIDE (service card)----------------------- */}
        
        <img src={landingLast} width={300} className="pt-20" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
