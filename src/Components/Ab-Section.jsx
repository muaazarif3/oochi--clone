function About() {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-.1"
        data-scroll-section
        className="font-['Neue_Montreal_Regular'] w-full pt-20 pb-20 bg-[#CDEA68] text-[#212121] rounded-tl-3xl rounded-tr-3xl "
      >
        <h1 className=" px-10 text-[3vw] leading-[3.5vw] capitalize font-medium">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
        <div className=" pt-10 px-7 w-full border-t-[1px] mt-20 border-[#545c399a] flex">
          <div className="w-1/2 ">
            <h1 className="text-5xl">Our approch:</h1>
            <button className="bg-[#212121] rounded-full px-6 py-4 text-white text-sm flex gap-10 items-center mt-4">
              Read more
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[65vh] bg-[#738534] rounded-lg ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
              className=" h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
