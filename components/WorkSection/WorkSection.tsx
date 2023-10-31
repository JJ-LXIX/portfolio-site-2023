import React from "react";
import Image from "next/image";
import Jwitter1 from "@/public/images/portfolio-work/jwitter.jpg";
import Jwitter2 from "@/public/images/portfolio-work/jwitter2.jpg";
import Dental1 from "@/public/images/portfolio-work/dentalSite1.png";
import Dental2 from "@/public/images/portfolio-work/dentalSite2.png";
import Poke1 from "@/public/images/portfolio-work/poke1.jpg";
import Poke2 from "@/public/images/portfolio-work/poke2.jpg";
import JMovies1 from "@/public/images/portfolio-work/JMovies.jpg";
import JMovies2 from "@/public/images/portfolio-work/JMovies2.jpg";
import Wordle1 from "@/public/images/portfolio-work/wordleClone.jpg";
import Wordle2 from "@/public/images/portfolio-work/wordleClone2.jpg";
import CryptoTracker from "@/public/images/portfolio-work/cryptoTracker.jpg";
import CryptoTracker2 from "@/public/images/portfolio-work/cryptoTracker2.jpg";
import InteractiveShoe from "@/public/images/portfolio-work/shoe.jpg";

type Props = {};

const WorkPortfolio = [
  {
    title: "Jwitter",
    description: "Image of a Twitter Clone Website",
    image1: Jwitter1,
    image2: Jwitter2,
  },
  {
    title: "Dental Website",
    description: "Image of a Website I made for a Dentist",
    image1: Dental1,
    image2: Dental2,
  },
  {
    title: "Interactive Pokemon Website",
    description: "Image of an Interactive Pokemon Website",
    image1: Poke1,
    image2: Poke2,
  },
  {
    title: "JMovies",
    description: "Image of a movie trailer website",
    image1: JMovies1,
    image2: JMovies2,
  },
  {
    title: "Wordle",
    description: "Image of a wordle clone website",
    image1: Wordle1,
    image2: Wordle2,
  },
];

export default function WorkSection({}: Props) {
  return (
    <div className="bg-[#1b1b1b] rounded-t-3xl">
      <div className="h-[10vh] text-white bg-full text-4xl pt-5 pl-5 ">
        Portfolio
      </div>
      <div className=" min-h-[875vh] w-full">
        {WorkPortfolio.map((work, index) => {
          return (
            <div key={index} className="h-[175vh] flex justify-center ">
              <div className="h-[75vh] w-[90%] rounded-3xl overflow-hidden mt-10 sticky top-10 border-2 border-zinc-800">
                <div className="h-full w-full relative rounded-3xl overflow-hidden">
                  <Image
                    src={work.image1}
                    alt={work.description}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
