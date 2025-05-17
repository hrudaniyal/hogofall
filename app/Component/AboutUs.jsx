// AboutCard.jsx
import React from "react";

const AboutCard = ({ imgSrc, altText, heading, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-eerieBlack p-8 rounded-xl shadow-lg">
      <img
        src={imgSrc}
        alt={altText}
        className="rounded-xl shadow-lg w-full md:w-1/2"
      />
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
