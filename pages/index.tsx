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
        className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-64 md:w-full"
      >
        <LeftBanner />
        <RightBanner />
      </Wrapper>
    </>
  );
}
