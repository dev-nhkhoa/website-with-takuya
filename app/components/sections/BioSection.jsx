import React from "react";
import SectionTitle from "../ui/SectionTitle";

export const timelineOfMe = [
  { id: 1, year: "2004", event: "Born in HCMC, Viet Nam!" },
  { id: 2, year: "2019", event: "Attend to Pham Van Sang High School" },
  { id: 3, year: "2022 to present", event: "Attend to Van Lang University" },
];

const BioSection = () => {
  return (
    <>
      <div className="pt-[20px] text-white">
        <SectionTitle title={"Bio"} />

        {/* This is a body of Bio  */}
        <div className="flex flex-col pt-[20px]">
          {timelineOfMe.map((timeLine) => (
            <div
              key={timeLine.id}
              className="flex flex-row gap-x-[20px] pl-[14px]"
            >
              <p className="font-bold">{timeLine.year}</p>
              <p>{timeLine.event}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BioSection;
