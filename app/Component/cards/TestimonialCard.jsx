// components/TestimonialCard.jsx
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, message, location, image }) => {
  return (
    <div className="bg-cinereous p-6 rounded-xl shadow-md flex flex-col items-center text-center text-white hover:shadow-lg transition-shadow">
      <FaQuoteLeft className="text-accent-yellow text-3xl mb-4" />
      <p className="text-gray-300 italic mb-4">"{message}"</p>
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-accent-yellow mb-2"
      />
      <h4 className="font-semibold">{name}</h4>
      <span className="text-sm text-gray-400">{location}</span>
    </div>
  );
};
export default TestimonialCard;
