import router from "next/router";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Media = () => {
  return (
    <div className="lgl:gap-0 flex flex-col justify-between gap-6 text-white xl:flex-row">
      <div className="text-black">
        <h2 className="font-titleFont mb-4 text-base uppercase">Find me in</h2>
        <div className="flex items-center gap-4   ">
          {social?.map((data) => (
            <div
              key={data?.id}
              onClick={() => {
                router.push(`${data?.link}`);
              }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white !text-primary  shadow-lg transition-all duration-200 ease-in-out hover:bg-primary hover:!text-white"
            >
              {data?.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="text-black">
        <h2 className="font-titleFont mb-4 text-base uppercase">
          BEST SKILL ON
        </h2>
        <div className="flex items-center gap-4   ">
          {skill?.map((data) => (
            <div
              key={data?.id}
              onClick={() => {
                router.push(`${data?.link}`);
              }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white !text-primary  shadow-lg transition-all duration-200 ease-in-out hover:bg-primary hover:!text-white"
            >
              {data?.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;

const social = [
  {
    id: 2,
    icon: <FaLinkedinIn className="text-xl" />,
    tooltip: "Schedule a call",
  },
  {
    id: 3,
    icon: <FaGithub className="text-xl" />,
    tooltip: "Send email",
    link: "/admin/saved-templates",
  },
  { id: 4, icon: <FaFacebookF className="text-xl" />, tooltip: "Add notes" },
];

const skill = [
  {
    id: 2,
    icon: <FaReact className="text-xl" />,
    tooltip: "Schedule a call",
  },
  {
    id: 3,
    icon: <SiNextdotjs className="text-xl" />,
    tooltip: "Send email",
    link: "/admin/saved-templates",
  },
  { id: 4, icon: <SiTypescript className="text-xl" />, tooltip: "Add notes" },
  { id: 5, icon: <SiTailwindcss className="text-xl" />, tooltip: "Add notes" },
];
