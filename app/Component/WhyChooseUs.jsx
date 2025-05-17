// WhyChooseUs.jsx
import React from "react";
import { FaShieldAlt, FaWater, FaSmile, FaClock } from "react-icons/fa";
import FeatureCard from "./cards/FeatureCard";

const features = [
  {
    title: "Trusted Safety",
    icon: <FaShieldAlt className="text-accent-yellow text-4xl mb-4 mx-auto" />,
    description:
      "Life jackets, trained guides & secure boats for peace of mind.",
  },
  {
    title: "Breathtaking Views",
    icon: <FaWater className="text-accent-yellow text-4xl mb-4 mx-auto" />,
    description:
      "Cruise through scenic falls and lush landscapes on the river.",
  },
  {
    title: "Happy Visitors",
    icon: <FaSmile className="text-accent-yellow text-4xl mb-4 mx-auto" />,
    description:
      "Thousands of 5-star reviews and returning guests every season.",
  },
  {
    title: "Timely Service",
    icon: <FaClock className="text-accent-yellow text-4xl mb-4 mx-auto" />,
    description: "We value your time. Every trip starts and ends as scheduled.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-night text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cinereous">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover why travelers love Hogenakkal Boating. We combine safety,
          culture, and beauty to create unforgettable river experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
