import Link from "next/link";
import { WrapperProps } from "@/Types";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Wrapper({
  pageIndex,
  children,
  className,
}: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-White";
  return (
    <section className={className}>
      <div className="bg-Blur fixed -z-10 h-[20rem] w-[25rem] rounded-full blur-3xl xs:h-[28rem] xs:w-[35rem] md:-left-10 md:-top-40 md:h-[50rem] md:w-[50rem]"></div>
      <>{children}</>
      {/* 
      <div className="fixed bottom-12 left-6 hidden flex-col items-center gap-4 md:flex">
        <Link href={"https://www.github.com"}>
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link href={"https://www.instagram.com"}>
          <AiFillInstagram className={socialClassNames} />
        </Link>
        <Link href={"https://www.twitter.com"}>
          <AiFillTwitterCircle className={socialClassNames} />
        </Link>
      </div> */}
      <div className="text-Orange fixed bottom-14 right-6 text-2xl xs:text-3xl">
        0{pageIndex}
      </div>
    </section>
  );
}
