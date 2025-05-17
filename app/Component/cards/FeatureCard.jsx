import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border-2 p-20 bg-eerieBlack rounded-xl shadow-md hover:shadow-xl transition-all text-center">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
