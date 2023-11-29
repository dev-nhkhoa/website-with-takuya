import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h1 className="max-w-max border-b-[3px] border-solid border-[#525252] font-semibold">
        {title}
      </h1>
    </>
  );
};

export default SectionTitle;
