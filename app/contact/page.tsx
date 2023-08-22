import Image from "next/image";
import { MeStar } from "../components/img";

function page() {
  return (
    <div className="relative flex flex-col w-full pt-20">
      <div className="gridbg inset-0 absolute z-10" />
      <section className="relative z-10">
        <div className="pl-10 pr-10 text-center flex flex-row items-center justify-center">
          <h1 className=" pt-6 text-2xl tracking-wide cursor-pointer">
            TELL ME ABOUT YOUR PROJECT
          </h1>
          <Image
            className="w-24 pl-5 mt-4"
            src={MeStar}
            alt="rounded memoji of Edem Agbetor"
          />
          <hr className="bg-gray-500  h-0.5 mt-5" />
        </div>
        <div className="pl-10 pr-10 text-center">
          <p className="text-m uppercase pt-5 bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent lg:text-xl">
            Kindly fill out the form and i will get back to you shortly
          </p>
        </div>
        {/* Form goes here */}
        <section className="pb-20">
          <form className="text-gray-700">
            <div className="flex items-center justify-around">
              {/* Name */}
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                className="bg-transparent mt-2 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none max md:w-[60vw]  lg:text-2xl"
              />
            </div>
            {/* Last name */}
            <div className="flex items-center justify-around">
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="bg-transparent mt-8 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
              />
            </div>
            {/* Contact */}
            <div className="flex items-center justify-around">
              <input
                type="phone"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="bg-transparent mt-8 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
              />
            </div>
            {/* Email Address */}
            <div className="flex items-center justify-around">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent mt-8 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
              />
            </div>
            {/* Description */}
            <div className="flex items-center justify-around">
              <textarea
                id="project"
                name="project"
                placeholder="Describe your project"
                className="bg-transparent mt-8 pt-5 pb-5 border-b text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
              />
            </div>

            {/* Submit button goes here */}
            <div className="pt-16 flex justify-around items flex-wrap">
              <input
                type="submit"
                value="Submit"
                className="border-4 border-gray-600 pt-2 pb-2 pl-8 pr-8 rounded-3xl text-2xl hover:transform hover:scale-110 transition duration-300 hover:border-gray-200 hover:text-gray-200 mb-4 lg:text-2xl "
              />
              {/* Terms and policies */}
              <p className="text-center text-xl text-gray-500">
                By Submiting You Have Agreed To Our <br />{" "}
                <span className="text-gray-200">Terms & Agreements </span>
                and <span className="text-gray-200"> Privacy Policy </span>
              </p>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default page;
// Media queries for sizing everything on the page
