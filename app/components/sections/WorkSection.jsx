import React from "react";
import Link from "next/link";
import ChevronRight from "@/public/icons/ChevronRight";
import SectionTitle from "../ui/SectionTitle";

const WorkSection = () => {
  return (
    <>
      <div className="pt-[20px] text-white">
        <SectionTitle title={"Work"} />
        <WorkDesc />
        <PortfolioBtn />
      </div>
    </>
  );
};

const WorkDesc = () => {
  return (
    <p className="py-[20px] text-justify indent-[14px] text-[16px] font-normal">
      Anh Khoa's a Information Systems Student at{" "}
      {
        <a
          href={"https://vlu.edu.vn/"}
          target="_blank"
          className="text-[#FF63C3]"
        >
          Van Lang University
        </a>
      }
      . He's currently a secondary years student. He want to be a full-stack
      developer in the future with a passion for building productivity apps for
      real life.
    </p>
  );
};

const PortfolioBtn = () => {
  return (
    <div className="flex flex-row justify-center">
      <Link href={"/"}>
        <div className="flex max-w-max gap-x-2 rounded-[8px] bg-[#4FD1C5] px-[18px] py-[10px] text-[#1A202C] hover:bg-[#7ee6db]">
          <h4>My Portfolio</h4>
          <ChevronRight />
        </div>
      </Link>
    </div>
  );
};

export default WorkSection;
