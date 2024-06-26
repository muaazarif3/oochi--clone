import React from "react";

function FeatureCard({
  featurename,
  imagepath,
  btnarry,
  children,
  handleOnHover,
  handleOnOut
}) {
  return (
    <>
      <div onMouseEnter={handleOnHover} onMouseLeave={handleOnOut} className="w-[49%] font-['Neue_Montreal_Regular'] mt-2 relative">
        {children}
        <div className="featureheading flex items-center gap-2">
          <div className="h-3 w-3 bg-black rounded-full"></div>
          <p className="font-sm text-black uppercase">{featurename}</p>
        </div>
        <div className="w-full h-[80vh] rounded-2xl mt- overflow-hidden">
          <img
            className="h-full w-full rounded-4"
            src={`${imagepath}`}
            alt=""
          />
        </div>
        <div className="w-full flex item-center gap-2">
          {btnarry.map((item, index) => {
            return (
              <button
                className="px-4 border-[1px] border-[#212121] rounded-full py-[2px] mt-4 uppercase"
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
