// Mission.jsx
import React from "react";
import { FaHeart, FaHandsHelping, FaBolt } from "react-icons/fa";
import FeatureCard from "./cards/FeatureCard";

const missionData = [
  {
    icon: <FaBolt />,
    title: "Explore the Beauty",
    description:
      "We aim to offer you the best boat tours with stunning views of Hogenakkal Falls.",
  },
  {
    icon: <FaHeart />,
    title: "Support Local Communities",
    description:
      "We empower local boatmen by providing fair opportunities for growth and work.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Safety First",
    description:
      "We prioritize the safety and comfort of every passenger to ensure a pleasant experience.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-night-2 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cinereous">
          Our Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {missionData.map((mission, index) => (
            <FeatureCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
