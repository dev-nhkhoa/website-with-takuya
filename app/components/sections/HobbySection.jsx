import React from "react";
import Heart from "@/public/icons/Heart";
import SectionTitle from "../ui/SectionTitle";

export const whatILike = [
  { id: 1, name: "Basketball" },
  { id: 2, name: "Furniture" },
  { id: 3, name: "Art" },
  { id: 4, name: "Music" },
  { id: 5, name: "Tech" },
  { id: 6, name: "BlockChain" },
  { id: 7, name: "Games" },
];

const HobbySection = () => {
  return (
    <>
      <div className="pt-[20px] text-white">
        <SectionTitle
          title={
            <div className="flex flex-row gap-x-1 font-bold text-white">
              <h1>I</h1>
              <Heart />
            </div>
          }
        />
        {/* This is a body of Hobby Section  */}
        <p className="py-[20px] text-justify indent-[14px] text-[16px] font-normal">
          {whatILike.map((item) => item.name).join(", ")}
        </p>
      </div>
    </>
  );
};

export default HobbySection;
