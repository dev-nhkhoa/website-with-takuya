import React from "react";
import {
  BioSection,
  HobbySection,
  InformationSection,
  RectangleIntroduction,
  SocialSection,
  WorkSection,
} from "./sections";

//TODO: Learn & Add Emotion Framer
const Body = () => {
  return (
    <>
      {/* this is a background and layout settings */}
      <div className="max-w-screen flex min-h-screen flex-col  items-center justify-center bg-[#202023]">
        <div className="max-w-md">
          <RectangleIntroduction />
          <InformationSection />
          <WorkSection />
          <BioSection />
          <HobbySection />
          <SocialSection />
        </div>
      </div>
    </>
  );
};

export default Body;
