import React from "react";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <div className="h-[30vh] lg:h-[40vh] bg-black w-full text-white overflow-hidden">
      <div className="h-[80%] md:h-[85%] lg:h-[90%] xl:h-[85%] w-full flex flex-col justify-around mt-6 ml-5 md:ml-10">
        <p className="text-3xl md:text-5xl font-semibold">Project in Mind?</p>
        <p className="md:text-3xl">You can contact me to work with you!</p>
        <p className="text-md md:text-3xl">jagrathshettylxix@gmail.com</p>
        <button className="px-4 py-2 w-36 h-12 md:h-20 md:w-44 md:text-xl border border-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 duration-300 rounded-xl text-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
