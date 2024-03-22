import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import { FormEvent } from "react";
export default function contact() {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <Head>
        <title>Soumya ranjan dash | Contact</title>
      </Head>
      <Wrapper
        pageIndex={4}
        className="text-White flex flex-col items-center justify-center gap-12 pt-28 lg:flex-row lg:pt-0"
      >
        <div className="py-6 text-center md:px-6">
          <div className="text-3xl font-semibold uppercase tracking-wide md:text-4xl md:tracking-widest">
            Contact
          </div>
          <p className="text-WhiteGray mb-8 mt-10 max-w-xl text-sm leading-8">
            If you&apos;re looking for a skilled frontend developer to help
            bring your web application ideas to life, feel free to contact me.
            Let&apos;s discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
          <div>
            {contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="mb-2 text-xl font-medium">{contact.title}</div>
                <div className="text-WhiteGray text-sm">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-6 text-center shadow-ShadowBlur sm:w-[30rem] lg:w-1/2">
          <div className="mb-10 text-3xl font-semibold uppercase tracking-wide md:text-4xl md:tracking-widest">
            Contact Form
          </div>
          <form onSubmit={submitHandler}>
            <div className="border-White mb-8 flex items-center border-b py-2">
              <input
                type="text"
                className=" text-White mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="border-White mb-8 flex items-center border-b py-2">
              <input
                type="text"
                className=" text-White mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="border-White mb-8 flex items-center border-b py-2">
              <input
                type="email"
                className=" text-White mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="border-White mb-8 flex items-center border-b py-2">
              <input
                type="text"
                className=" text-White mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:outline-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="mt-10 cursor-pointer px-8 py-4 text-sm uppercase shadow-ShadowBlur"
            >
              Send Message
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
