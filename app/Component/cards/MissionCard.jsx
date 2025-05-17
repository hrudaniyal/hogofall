// MissionCard.jsx
import React from "react";

const MissionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-eerieBlack p-8 rounded-xl shadow-lg text-center">
      <div className="text-4xl text-accent-yellow mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default MissionCard;
