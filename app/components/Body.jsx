import React from "react";
import avatarImg from "@/public/images/avatar.jpg";
import Image from "next/image";
import ChevronRight from "@/public/icons/ChevronRight";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Body = () => {
  return (
    <>
      {/* this is a background and layout settings */}
      <div className="max-w-screen flex min-h-screen flex-col  items-center justify-center bg-[#202023]">
        <div className="max-w-md">
          {/* a introduction rectangle */}
          <div className="my-[100px] flex justify-center rounded-[12px] bg-[#313134] px-[16px] py-[12px] text-white">
            <q>Hello, I'm a dummy dev trying to make some thing!</q>
          </div>

          {/* My name & description & logo */}
          <div className="pt-[20px] font-semibold text-white">
            {/* My name & description */}
            <div className="flex flex-col gap-x-[2px] sm:flex-row">
              <div>
                <h1 className="text-[22px]">Truong Nguyen Anh Khoa</h1>
                <p className="text-[14px] font-normal">
                  {"Student (Intern Developer / Video Editor / Gamer)"}
                </p>
              </div>
              <div className="vborder-r-[50%] flex justify-center border-r-[50%] pt-[50px] sm:pt-[0px]">
                {/* My avatar  */}
                <Image
                  src={avatarImg}
                  alt="avatar"
                  width={128}
                  height={128}
                  className="h-[128px] w-[128px] rounded-[50%] border-[2px] border-solid border-white object-cover"
                />
              </div>
            </div>
          </div>

          {/* Work here  */}
          <div className="pt-[20px] text-white">
            <h1 className="max-w-max border-b-[3px] border-solid border-[#525252] font-semibold">
              Work
            </h1>
            {/* Describe my work here */}
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
              }{" "}
              . He's currently a secondary years student. He want to be a
              full-stack developer in the future with a passion for building
              productivity apps for real life.
            </p>

            {/* Portfolio button */}
            <div className="flex flex-row justify-center">
              <Link href={"/"}>
                <div className="flex max-w-max gap-x-2 rounded-[8px] bg-[#4FD1C5] px-[18px] py-[10px] text-[#1A202C] hover:bg-[#7ee6db]">
                  <h4>My Portfolio</h4>
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </div>
          {/* My Bio  */}
          <div className="pt-[20px] text-white">
            <h1 className="max-w-max border-b-[3px] border-solid border-[#525252] font-semibold">
              Bio
            </h1>
            <div className="flex flex-row gap-x-4 pt-[20px]">
              <div className="flex flex-col font-bold">
                <p>2004</p>
                <p>2019</p>
                <p>2022 to present</p>
              </div>
              <div className="flex flex-col ">
                <p>Born in HCMC</p>
                <p>Attend Pham Van Sang High School</p>
                <p>Attend Van Lang University</p>
              </div>
            </div>
          </div>

          {/* My Habit  */}
          <div className="pt-[20px] text-white">
            <h1 className="max-w-max border-b-[3px] border-solid border-[#525252] font-semibold">
              I Love
            </h1>
            <p className="py-[20px] text-justify indent-[14px] text-[16px] font-normal">
              Basketball, Furniture, Music, Art, Tech, BlockChain
            </p>
          </div>

          {/* My sosical  */}
          <div className="pt-[20px] text-white">
            <h1 className="max-w-max border-b-[3px] border-solid border-[#525252] font-semibold">
              On the web
            </h1>
            <div className="flex flex-row gap-x-5 pt-[20px]">
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-[24px] w-[24px] py-[5px] text-[#81E6D9]"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[24px] w-[24px] py-[5px] text-[#81E6D9]"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-[24px] w-[24px] py-[5px] text-[#81E6D9]"
                />
              </div>
              <div className="flex flex-col">
                <a
                  target="_blank"
                  href="https://github.com/nhkhoaaa"
                  className="cursor-pointer text-[#81E6D9]"
                >
                  @nhkhoaaa
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/wkorea/"
                  className="cursor-pointer text-[#81E6D9]"
                >
                  @nhkhoaaa
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/nhkhoa.a"
                  className="cursor-pointer text-[#81E6D9]"
                >
                  @Truong Nguyen Anh Khoa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
