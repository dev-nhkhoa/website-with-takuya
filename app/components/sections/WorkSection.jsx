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
        <WorkBtn name={"My Portfolio"} link={"/"} />
        <WorkBtn
          name={"My Banking"}
          link={"https://damocloids-banking-info.vercel.app/"}
        />
      </div>
    </>
  );
};

const WorkDesc = () => {
  return (
    <p className="py-[20px] text-justify indent-[14px] text-[16px] font-normal">
      Anh Khoa&apos;s a Information Systems Student at{" "}
      {
        <a
          href={"https://vlu.edu.vn/"}
          target="_blank"
          className="text-[#FF63C3]"
        >
          Van Lang University
        </a>
      }
      . He&apos;s currently a secondary years student. He want to be a
      full-stack developer in the future with a passion for building
      productivity apps for real life.
    </p>
  );
};

const WorkBtn = ({ name, link }) => {
  return (
    <div className="flex flex-row justify-center">
      <Link href={link}>
        <div className="flex max-w-max gap-x-2 rounded-[8px] bg-[#4FD1C5] px-[18px] py-[10px] text-[#1A202C] hover:bg-[#7ee6db]">
          <h4>{name}</h4>
          <ChevronRight />
        </div>
      </Link>
    </div>
  );
};

export default WorkSection;
