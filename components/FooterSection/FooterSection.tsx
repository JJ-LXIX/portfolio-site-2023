import React from "react";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <div className="h-[30vh] bg-black w-full text-white">
      <div className="h-[70%] md:h-[60%] lg:h-[80%] w-full flex flex-col justify-around mt-6 ml-5 md:ml-10">
        <p className="text-3xl md:text-4xl font-semibold">Project in Mind?</p>
        <p className="md:text-2xl">You can contact me to work with you!</p>
        <button className="px-4 py-2 w-36 h-12 md:h-16 md:w-40 md:text-xl border border-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 duration-300 rounded-xl text-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
