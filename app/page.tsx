import Image from "next/image";
import { ArrowTopRightOnSquareIcon, LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Me, Curve, SS1, SS2, SS3 } from "./components/img";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full pt-20">
      <div className="gridbg inset-0 absolute z-10" />
      <section className="relative z-20">
        {/* Hero Section */}
        <div>
          <div className="pt-2 relative z-20 flex flex-row  justify-center">
            {/* Image for hero section */}
            <Image
              src={Me}
              alt="memoji 0f Edem Agbetor"
              className="md:w-2/4 sm:h-3/4"
            />
          </div>
          {/* Hero text goes here */}
          <div className="pl-10 pr-10 text-center">
            <h1 className="text-2xl tracking-wide w-full cursor-pointer lg:text-4xl sm:text-2xl">
              <span className="text-gray-500 hover:text-yellow-500">I'm</span>{" "}
              Edem Agbetor.{" "}
              <span className="text-gray-500 hover:text-yellow-500">
                An Aspiring
              </span>{" "}
              Full-Stack Developer and a<br />
              UI/UX Designer.{" "}
              <span className="text-gray-500 hover:text-yellow-500">
                I
              </span>{" "}
              build Modern,{" "}
              <span className="text-gray-500 hover:text-yellow-500">and</span>{" "}
              Effective websites{" "}
              <span className="text-gray-500 hover:text-yellow-500">that</span>
              <br /> increase Customer Engagement,{" "}
              <span className="text-gray-500 hover:text-yellow-500">
                and have
              </span>{" "}
              intuitive Digital <br />
              Designs.
            </h1>
          </div>
          {/* Quick Action Buttons go here */}
          <div className="pt-20 flex flex-row justify-around">
            <Link href="/contact">
              <h1 className="flex underline text-xl lg:text-2xl">
                Hire me{" "}
                <ArrowTopRightOnSquareIcon className="w-5 pt-2 text-gray-500 lg:w-6 pt-0" />
              </h1>
            </Link>
            <Link href="/works">
              <h1 className="flex underline text-xl lg:text-2xl">
                My Works{" "}
                <ArrowTopRightOnSquareIcon className="w-5 pt-2 text-gray-500 lg:w-6 pt-0" />
              </h1>
            </Link>
          </div>
          {/* Last hero text goes here */}
          <div className="pt-10 text-center">
            <h1 className=" bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
              Step up your Game, Increase Your numbers and stand out with me
            </h1>
          </div>
        </div>
        {/* Dummy Companies go here */}
        <div className="relative z-20">
          <div className="flex items-center justify-center ">
            <Image src={Curve} alt="dummy companies" />
          </div>
        </div>
        {/* Remaining Content */}
        <div className="p-10 z-20">
          <div>
            <Link href="/works">
              <h1 className="flex underline text-3xl justify-center pt-2">
                Featured Projects{" "}
                <ArrowTopRightOnSquareIcon className="w-7 text-gray-500" />
              </h1>
            </Link>
          </div>
          {/* Works */}
          <div className="flex flex-wrap justify-around items-center pt-20">
            <div>
              <div className="pb-10">
                <Image
                  src={SS1}
                  alt="project 1"
                  className="w-96 border-4 p-2 border-gray-500  rounded-3xl hover:transform hover:scale-110 transition duration-300 hover:border-gray-200"
                />
                <p className="text-center text-gray-500 pt-2">
                  See if you can guess the right number!
                </p>
                <Link href="https://justguess.netlify.app">
                  <h1 className="text-center pt-2 flex underline text-3xl item-center justify-center">
                    Justguess <LinkIcon className="w-7 text-gray-500" />
                  </h1>
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
}
