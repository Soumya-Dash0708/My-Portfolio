import React from "react";

const RightBanner = () => {
  return (
    <div className="lgl:w-1/2 relative flex w-full items-center justify-center">
      <img
        className="lgl:w-[500px] lgl:h-[680px] z-10 h-[400px] w-[370px]"
        src="/Soumya.JPG"
        alt="bannerImg"
      />
      <div className="lgl:w-[500px] lgl:h-[500px] shadow-shadowOne absolute bottom-0 flex h-[300px] w-[450px] items-center justify-center bg-gradient-to-r from-orange-400 to-orange-400 "></div>
    </div>
  );
};

export default RightBanner;
