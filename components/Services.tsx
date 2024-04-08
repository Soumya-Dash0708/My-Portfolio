export default function Services() {
  return (
    <div className="my-8 text-center md:px-8">
      <div className="text-WhiteGray text-sm font-semibold uppercase">
        - Services
      </div>
      <div className="text-White mt-8 text-3xl font-semibold uppercase">
        What I am Great At
      </div>
      <p className="text-WhiteGray mx-auto mt-8 max-w-3xl text-sm leading-7">
        I offer a full range of web development services, from website design
        and development to API integration and performance optimization. I
        specialize in creating high-quality, responsive web applications that
        deliver an exceptional user experience.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-0 md:w-full md:grid-cols-2 md:gap-y-1 lg:grid-cols-4">
        {servicecards.map((card) => (
          <div
            key={card?.id}
            className="image-container group relative mt-6 h-32 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <div className="image-container group flex h-full cursor-pointer items-center overflow-hidden rounded-xl border bg-white px-5 py-6 group-hover:text-white">
              <div className="absolute left-0 top-0 z-0 h-0 w-0 rounded-xl transition-all duration-300 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-zinc-700" />
              <div className="flex cursor-pointer items-center justify-center gap-2">
                <div className="relative">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${card.gradientColor} gradient-container`}
                  >
                    <img
                      src={card.img}
                      alt="Your Image"
                      className="image h-11 w-11"
                    />
                  </div>
                </div>

                <div className="z-30 flex flex-col">
                  <p className="z-20 font-semibold">{card.service}</p>
                  <span className="text-gray-600 group-hover:text-white">
                    {card.desc}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const servicecards = [
  {
    id: 1,
    img: "/code.png",
    service: "Web Development",
    desc: "5 Projects",

    gradientColor: "bg-gradient-to-tl from-red-200 to-red-500",
  },
  {
    id: 2,
    img: "/ecommerce.png",
    service: "E-commerce Development",
    desc: "2 Projects",

    gradientColor:
      "bg-gradient-to-tl from-green-200 via-green-400 to-green-500",
  },
  {
    id: 3,
    img: "/custom.png",
    service: "Custom Software Solutions",
    desc: "1 Project",

    gradientColor: "bg-gradient-to-tl from-sky-300 to-blue-500",
  },

  {
    id: 4,
    img: "/bullhorn.png",
    service: "Digital Marketing",
    desc: "6 Projets",

    gradientColor: "bg-gradient-to-tl from-yellow-200 to-yellow-500",
  },
];
