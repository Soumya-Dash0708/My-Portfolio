import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Social from "./Social";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Web Developer.", "Digital Marketer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="lgl:w-1/2 flex w-full flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold ">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize text-primary">
            Soumya
          </span>
        </h1>
        <h2 className="text-4xl font-bold ">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-justify text-base leading-6 tracking-wide text-gray-500">
          A dedicated software developer with a passion for crafting innovative
          solutions. With expertise in web development, I thrive on challenges
          and enjoy turning ideas into reality through code. Let&apos;s create
          something remarkable together.
        </p>
      </div>
      {/* Media */}
      <Social />
    </div>
  );
};

export default LeftBanner;
