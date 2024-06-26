import React, { useEffect, useState } from "react";

function Eys() {
  let [rotate, setangle] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setangle(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen  overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="  relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-4">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-zinc-800 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%)  rotate(${rotate}deg)`,
                }}
                className="w-full h-5 p-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-zinc-800 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%)  rotate(${rotate}deg)`,
                }}
                className="w-full h-5 p-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eys;
