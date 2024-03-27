import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
export default function about() {
  return (
    <>
      <Head>
        <title>Soumya ranjan dash | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="mb-12 flex min-h-screen flex-col items-center justify-center gap-12 pt-28 lg:mb-0 lg:flex-row lg:pt-0">
          <Image
            src={"/Soumya.JPG"}
            width={300}
            height={300}
            alt={"about image"}
          />
          <div className="max-w-md md:max-w-xl lg:ml-8 lg:w-1/2">
            <div className="text-sm font-semibold uppercase text-primary">
              - Introduction
            </div>
            <div className="text-White mt-8 text-3xl font-semibold uppercase">
              FrontEnd Developer, based on India
            </div>
            <p className="mt-8 text-sm leading-7 text-gray-500">
              I am a passionate frontend developer with a creative eye for
              design and a strong focus on delivering elegant and intuitive
              interfaces. Excited to collaborate on new projects!
            </p>
            <div className="mt-8 flex gap-8">
              <Link
                href="/contact"
                className="text-sm font-semibold uppercase text-primary hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/profile.pdf"
                download
                className="text-sm font-semibold uppercase text-primary hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills} />
      </Wrapper>
    </>
  );
}
