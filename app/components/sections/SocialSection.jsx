import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SectionTitle from "../ui/SectionTitle";

export const allLinks = {
  github: {
    name: "@nhkhoaaa",
    link: "https://github.com/nhkhoaaa",
  },
  instagram: {
    name: "@nhkhoaaa",
    link: "https://www.instagram.com/",
  },
  facebook: {
    name: "@Truong Nguyen Anh Khoa",
    link: "https://www.facebook.com/nhkhoa.a",
  },
};

const IncIcon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className="h-[24px] w-[24px] py-[5px] text-[#81E6D9]"
    />
  );
};

const SocicalLink = ({ link, name }) => {
  return (
    <a target="_blank" href={link} className="cursor-pointer text-[#81E6D9]">
      {name}
    </a>
  );
};

const SocialSection = () => {
  return (
    <>
      <div className="pt-[20px] text-white">
        <SectionTitle title={"On the web"} />
        <div className="flex flex-row gap-x-5 pl-[14px] pt-[20px]">
          <div className="flex flex-col">
            <IncIcon icon={faGithub} />
            <IncIcon icon={faInstagram} />
            <IncIcon icon={faFacebook} />
          </div>
          <div className="flex flex-col">
            <SocicalLink
              link={allLinks.github.link}
              name={allLinks.github.name}
            />
            <SocicalLink
              link={allLinks.instagram.link}
              name={allLinks.instagram.name}
            />
            <SocicalLink
              link={allLinks.facebook.link}
              name={allLinks.facebook.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSection;
