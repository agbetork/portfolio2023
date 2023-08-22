import Image from "next/image";
import { MeRound, SS1, SS2, SS3, SS6 } from "../components/img";
import { ArrowDownRightIcon, LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function page() {
  return (
    <div className="relative flex flex-col w-full pt-20">
      <div className="gridbg inset-0 absolute z-10" />
      {/* Top section */}
      <section className=" pb-40 pl-12 pr-12 relative z-20">
        <div className="pt-10 flex flex-row items-center justify-center">
          <h1 className=" p-2 text-3xl lg:text-5xl text-center bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
            "Experience Creativity"
          </h1>
          <Image
            className="w-24 pl-5"
            src={MeRound}
            alt="rounded memoji of Edem Agbetor"
          />
        </div>
        <div>
          <p className="text-gray-500 text-center text-sm">
            "A glimpse of projects i have worked on"
          </p>
        </div>
        {/* Projects */}
       
        <div>
          <h1 className="flex underline text-2xl lg:text-4xl mt-24 mb-10 lg:ml-28">
            Just Guess{" "}
            <ArrowDownRightIcon className="w-5 pt-2 text-gray-500 lg:w-6 pt-0" />
          </h1>
          <div className="pb-10 flex flex-row items-center justify-center">
            <Image
              src={SS1}
              alt="project 3"
              className="w-96 lg:w-2/4 border-4 p-2 border-gray-500 rounded-3xl"
            />
          </div>
          <div>
            <p className="text-center text-gray-500 pt-2">
              "A simple guessing game where a user is confined to stating a list
              of numbers from 1 to 20.Becareful though, your score is being
              tracked"
            </p>
            <Link href="https://justguess.netlify.app">
              <h1 className="text-center pt-2 flex underline text-2xl item-center justify-center">
                Check it out <LinkIcon className="w-7 text-gray-500" />
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="flex underline text-2xl lg:text-4xl mt-24 mb-10 lg:ml-28">
            Dice Roll{" "}
            <ArrowDownRightIcon className="w-5 pt-2 text-gray-500 lg:w-6 pt-0" />
          </h1>
          <div className="pb-10 flex flex-row items-center justify-center">
            <Image
              src={SS6}
              alt="project 3"
              className="w-96 lg:w-2/4 border-4 p-2 border-gray-500 rounded-3xl"
            />
          </div>
          <div>
            <p className="text-center text-gray-500 pt-2">
              "The objective of the game is to be the first player to reach a
              score of 50.
              <br />
              Risk-taking and decision-making is vital, as players can choose to
              hold their score or continue rolling the dice.
              <br />
              Rolling a 1 results in the player losing their current score and
              the turn moving to the next player"
            </p>
            <Link href="https://dicereollgame.netlify.app/">
              <h1 className="text-center pt-2 flex underline text-2xl item-center justify-center">
                Check it out <LinkIcon className="w-7 text-gray-500" />
              </h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
