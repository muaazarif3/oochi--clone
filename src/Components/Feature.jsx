import React, { useState } from "react";
import FeatureCard from "./Cardcomponents/FeatureCard";
import myCss from "./Hero.module.css";
import { motion } from "framer-motion";
function Feature() {
  let [ishovering, sethovering] = useState(false);
  const cardonhover = () => {
    sethovering(true);
  };

  const cardonout = () => {
    sethovering(false);
  };

  return (
    <>
      <div className='w-full py-10 mt-4  font-["Neue_Montreal_Regular"]'>
        <h1 className="w-full border-b-[2px] border-[#CBCBCB] text-5xl leading-none px-10 pb-8 font-medium">
          Featured projects
        </h1>
        <div className="w-full px-10 py-5 gap-6 flex items-center justify-start flex-wrap mt-4">
          <FeatureCard
            btnarry={["audit", "copywriting", "sales deck", "slides design"]}
            featurename={"Fyde"}
            imagepath={
              "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            }
            handleOnHover={cardonhover}
            handleOnOut={cardonout}
          >
            <h1
              className={`${myCss.Myfont} text-8xl flex overflow-hidden absolute top-1/2 left-full z-10 text-[#CDEA68] -translate-x-[50%] -translate-y-[50%] font-semibold`}
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={ishovering ? { y: "0" } : { y: "100%" }}
                  className=" inline-block"
                  key={index}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </FeatureCard>
          <FeatureCard
            btnarry={["agency", "company presentation"]}
            featurename={"Vise"}
            imagepath={
              "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            }
          >
            <h1
              className={`${myCss.Myfont} text-7xl absolute top-1/2 right-full z-10 text-[#CDEA68] translate-x-[50%] -translate-y-[50%] font-semibold`}
            >
              {"VISE".split("").map((item, index) => (
                <span key={index}>{}</span>
              ))}
            </h1>
          </FeatureCard>
        </div>
      </div>
    </>
  );
}

export default Feature;
