import LeftBanner from "@/components/LeftBanner";
import RightBanner from "@/components/RightBanner";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Soumya Ranjan Dash</title>
      </Head>
      <Wrapper
        pageIndex={1}
        className=" flex  items-center justify-between gap-64 "
      >
        {/* <div className="flex items-center gap-4 sm:justify-between sm:gap-0">
          <div className="text-xl font-bold uppercase text-WhiteGray sm:text-3xl">
            Hi I&apos;m
          </div>
          <div className="rounded-sm bg-Orange xs:w-[19rem] sm:h-2 sm:w-[30rem]"></div>
        </div>
        <div className="text-5xl font-medium text-White xs:text-7xl sm:text-[7.2rem]">
          Mozorozov
        </div>
        <div className="mt-8 text-end text-xl font-bold uppercase text-Orange xs:text-2xl">
          A Frontend <br />
          developer
        </div> */}
        <LeftBanner />
        <RightBanner />
      </Wrapper>

      {/* <section
        id="home"
        className="lgl:flex-row font-titleFont flex w-full flex-col items-center gap-10 border-b-[1px] border-b-black pb-20 pt-10 xl:gap-0"
      >
       
      </section> */}
    </>
  );
}
