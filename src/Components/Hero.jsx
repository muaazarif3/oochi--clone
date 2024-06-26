import mycss from "./Hero.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      data-scroll-section
      className="w-full h-screen bg-[#F1F1F1] pt-1"
    >
      <div className="textstructure mt-32 px-10">
        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className=" w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="mr-[1vw] w-[9vw]  -top-[0] relative "
                  >
                    <img
                      className="w-full h-[6vw] rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1
                  className={` ${mycss.Myfont} uppercase text-[9vw] leading-[7vw] tracking-tighte font-semibold`}
                  key={index}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hero-footer px-10 py-2 mt-32 border-t-[1px] w-full border-zinc-400 flex justify-between">
        {[
          "For compainer and private companies",
          "From the first  pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className={`font-['Neue_Montreal_Regular'] text-[#212121] capitalize text-sm ${
                index === 1 && "ml-40"
              }`}
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className=" start flex items-center gap-1">
          <div className="font-['Neue_Montreal_Regular'] px-5 py-1  border-[1px] rounded-full border-zinc-800 font-light text-md leading-[18px] capitalize">
            Start the project
          </div>
          <div className="arrow-circle w-8 h-8 flex justify-center items-center border-[1px] rounded-full border-zinc-800 font-light">
            <span className=" rotate-[-45deg]">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
