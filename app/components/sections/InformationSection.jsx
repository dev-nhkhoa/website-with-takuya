import React from "react";
import Image from "next/image";
import avatarImg from "@/public/images/avatar.jpg";

export const myInfo = {
  name: "Truong Nguyen Anh Khoa",
  avatar: avatarImg,
  role: "Student (Intern Developer / Video Editor / Gamer)",
};

const MyNameDesc = () => {
  return (
    <div>
      <h1 className="text-[22px]">{myInfo.name}</h1>
      <p className="text-[14px] font-normal">{myInfo.role}</p>
    </div>
  );
};

const MyAvatar = () => {
  return (
    <div className="flex justify-center border-r-[50%] pt-[50px] sm:pt-[0px]">
      {/* My avatar  */}
      <Image
        src={myInfo.avatar}
        alt="avatar"
        width={128}
        height={128}
        className="h-[128px] w-[128px] rounded-[50%] border-[2px] border-solid border-white object-cover"
      />
    </div>
  );
};

const InformationSection = () => {
  return (
    <>
      {/* My name & description & avatar */}
      <div className="pt-[20px] font-semibold text-white">
        <div className="flex flex-col gap-x-[2px] sm:flex-row">
          <MyNameDesc />
          <MyAvatar />
        </div>
      </div>
    </>
  );
};

export default InformationSection;
