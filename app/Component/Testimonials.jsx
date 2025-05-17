// components/Testimonials.jsx
import React from "react";
import TestimonialCard from "./cards/TestimonialCard";

const testimonialsData = [
  {
    name: "Priya Sharma",
    message:
      "The boat ride was magical! Felt safe and had fun. Definitely coming back!",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    message:
      "Great experience with breathtaking views and kind boatmen. Highly recommended!",
    location: "Chennai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Verma",
    message:
      "Loved every moment. The guides were polite, and the falls were mesmerizing.",
    location: "Hyderabad, India",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ajay Nair",
    message: "A peaceful and thrilling ride. Perfect for a weekend getaway!",
    location: "Kochi, India",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-night text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl  md:text-5xl font-extrabold mb-6 text-cinereous">
          What Our Guests Say
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Real stories from real people. Discover how Hogenakkal Boating made
          their trip memorable.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {testimonialsData.map((guest, index) => (
            <TestimonialCard key={index} {...guest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
