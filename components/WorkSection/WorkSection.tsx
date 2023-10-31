import React from "react";

type Props = {};

export default function WorkSection({}: Props) {
  return (
    <div className="bg-[#0c0c0c] rounded-t-3xl">
      <div className="h-[10vh] text-white bg-full text-4xl pt-5 pl-5 ">
        Portfolio
      </div>
      <div className=" min-h-[500vh] w-full">
        <div className="h-[100vh] pt-10">
          <div className="h-[50vh] w-9/12 bg-white mx-auto sticky top-10"></div>
        </div>
        <div className="h-[100vh] pt-10">
          <div className="h-[50vh] w-9/12 bg-white mx-auto sticky top-10"></div>
        </div>
        <div className="h-[100vh] pt-10">
          <div className="h-[50vh] w-9/12 bg-white mx-auto sticky top-10"></div>
        </div>
        <div className="h-[100vh] pt-10">
          <div className="h-[50vh] w-9/12 bg-white mx-auto sticky top-10"></div>
        </div>
        <div className="h-[100vh] pt-10">
          <div className="h-[50vh] w-9/12 bg-white mx-auto sticky top-10"></div>
        </div>
      </div>
    </div>
  );
}
