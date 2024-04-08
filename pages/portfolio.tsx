import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import Services from "@/components/Services";
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <Head>
        <title>Soumya ranjan dash | Portfolio</title>
      </Head>
      <Wrapper pageIndex={3}>
        <div className="flex flex-col items-center pt-40 text-center">
          <div className="text-WhiteGray text-sm font-semibold uppercase">
            - Portfolio
          </div>
          <div className="text-White mt-8 text-3xl font-semibold uppercase">
            My Masterpiece Collections
          </div>
          <p className="text-WhiteGray mt-8 max-w-3xl text-sm leading-7">
            I specialize in developing custom web applications that cater to
            diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <div className="my-8 grid gap-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="bg-Blur rounded-lg  p-4">
                <div className="group relative w-full shadow-md">
                  <img
                    src={project.img}
                    alt=""
                    className=" h-48 w-full  border object-contain" // Adjust width and height as needed
                  />
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full scale-0 items-center justify-center gap-4 bg-orange-400 transition-all duration-300 group-hover:scale-100">
                    <Link href="">
                      <AiFillGithub className="text-3xl text-white transition-all duration-300 hover:scale-110" />
                    </Link>
                    <Link href="">
                      <AiFillEye className="text-3xl text-white transition-all duration-300 hover:scale-110" />
                    </Link>
                  </div>
                </div>

                <div className=" mt-2 text-start font-semibold text-primary">
                  {project.name}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full px-3 py-2 text-sm "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -----Services ----- */}
        <Services />
        {/* -------Count Up */}
        <div className="flex flex-wrap justify-center gap-12" ref={ref}>
          {countUpItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className="text-Orange text-3xl">
                {inView && (
                  <MyCountUp start={0} end={item.number} duration={3} />
                )}
                +
              </div>
              <div className="text-WhiteGray mt-2 text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
