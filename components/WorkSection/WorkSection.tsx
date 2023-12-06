import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Jwitter1 from "@/public/images/portfolio-work/jwitter.jpg";
import Dental1 from "@/public/images/portfolio-work/dentalSite1.png";
import Poke1 from "@/public/images/portfolio-work/poke1.jpg";
import JMovies1 from "@/public/images/portfolio-work/JMovies.jpg";
import Wordle1 from "@/public/images/portfolio-work/wordle.jpg";
import dentalMobile from "@/public/images/portfolio-work/dental2.jpg";
import JMoviesMobile from "@/public/images/portfolio-work/JMovies2.jpg";
import pokeMobile from "@/public/images/portfolio-work/pokeMobile.jpg";
import { useScreenSize } from "@/utils/hooks/useScreenSize";
import WorkCard from "./WorkCard";
import WorkCardMobile from "./WorkCardMobile";

type Props = {};

const WorkPortfolio = [
  {
    title: "Jwitter",
    description: "Image of a Twitter Clone Website",
    image1: Jwitter1,
    mobileImage: Jwitter1,
    techStack: ["NextJS", "Tailwind", "Typescript", "SWR", "Zustand"],
    classes:
      "col-span-2 row-span-1 rounded-xl relative overflow-hidden shadow-2xl",
    link: "https://lxix-jwitter.vercel.app/",
    githubLink: "https://github.com/JJ-LXIX/jwitter",
  },
  {
    title: "Dental Website",
    description: "Image of a Website I made for a Dentist",
    image1: Dental1,
    mobileImage: dentalMobile,
    techStack: ["NextJS", "Framer Motion", "Tailwind", "ShadcnUI"],
    classes:
      "col-span-3 row-span-1 rounded-xl relative overflow-hidden shadow-2xl",
    link: "https://dental-site-test.vercel.app/",
    githubLink: "https://github.com/JJ-LXIX/dental-client-site",
  },
  {
    title: "Interactive Pokemon Website",
    description: "Image of an Interactive Pokemon Website",
    image1: Poke1,
    mobileImage: pokeMobile,
    techStack: ["Vite", "Tailwind", "React Three Fiber", "React Three Drei"],
    classes:
      "col-span-5 row-span-1 rounded-xl relative overflow-hidden shadow-2xl",
    link: "https://poke-r3f.vercel.app/",
    githubLink: "https://github.com/JJ-LXIX/poke-r3f-vite",
  },
  {
    title: "JMovies",
    description: "Image of a movie trailer website",
    image1: JMovies1,
    mobileImage: JMoviesMobile,
    techStack: ["ReactJS", "MovieDB API"],
    classes:
      "col-span-3 row-span-1 rounded-xl relative overflow-hidden shadow-2xl",
    link: "https://jmovies-app.vercel.app/",
    githubLink: "https://github.com/JJ-LXIX/react-movie-app",
  },
  {
    title: "Wordle",
    description: "Image of a wordle clone website",
    image1: Wordle1,
    mobileImage: Wordle1,
    techStack: ["ReactJS"],
    classes:
      "col-span-2 row-span-1 rounded-xl relative overflow-hidden shadow-2xl",
    link: "https://wordle-test-clone-site.netlify.app/",
    githubLink: "https://github.com/JJ-LXIX/wordle-clone",
  },
];

export default function WorkSection({}: Props) {
  const laptopPlus = useScreenSize();

  return (
    <div className="bg-white rounded-3xl 2xl:rounded-[4rem]">
      <div className=" h-[10vh] lg:h-[20vh] text-black bg-full  text-4xl text-center md:text-6xl lg:text-left pt-10 lg:pl-5 xl:pl-10 xl:text-7xl 2xl:text-8xl">
        Portfolio.
      </div>
      {laptopPlus ? (
        // Large screens
        <div className=" w-full h-[175vh] 3xl:h-[200vh]">
          <div className="h-[90%] w-11/12  mx-auto grid grid-cols-5  grid-rows-3 gap-4">
            {/* Work Cards */}
            {WorkPortfolio.map((work, index) => {
              return <WorkCard key={index} work={work} index={index} />;
            })}
          </div>
        </div>
      ) : (
        // Mobile/Tablet screens
        <div className="w-full">
          {WorkPortfolio.map((work, index) => {
            return <WorkCardMobile key={index} work={work} index={index} />;
          })}
        </div>
      )}
    </div>
  );
}
