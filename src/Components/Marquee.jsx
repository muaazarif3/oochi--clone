import "./Component.css";
import mycss from "./Hero.module.css";


function Marquee() {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-.1"
        data-scroll-section
        className=" w-full py-20 bg-[#224D44] rounded-tl-3xl rounded-tr-3xl mt-20"
      >
        <div className="marque heading w-full border-t-[1px] border-b-[1px]  border-zinc-400 flex  whitespace-nowrap  overflow-hidden">
          <h1
            className={` ${mycss.Myfont} myheading pr-10 -mb-[2vw] -mt-[3.5vw] text-white text-[25vw] uppercase leading-none font-semibold `}
          >
            We are oochi
          </h1>
          <h1
            className={` ${mycss.Myfont} myheading pr-10 -mb-[2vw] -mt-[3.5vw] text-white text-[25vw] uppercase leading-none font-semibold `}
          >
            We are oochi
          </h1>
          <h1
            className={` ${mycss.Myfont} myheading pr-10 -mb-[2vw] -mt-[3.5vw] text-white text-[25vw] uppercase leading-none font-semibold `}
          >
            We are oochi
          </h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
