"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const packages = [
  {
    id: 1,
    title: "Family Adventure",
    duration: "2 hours",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c",
    category: "Family",
    description:
      "Perfect for families with coracle rides and waterfall viewing",
    features: [
      "Coracle rides",
      "Waterfall viewing",
      "Family photos",
      "Safety gear included",
    ],
  },
  {
    id: 2,
    title: "Couple's Special",
    duration: "3 hours",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    category: "Couple",
    description: "Romantic private coracle ride with professional photos",
    features: [
      "Private coracle",
      "Professional photos",
      "Romantic setup",
      "Champagne included",
    ],
  },
  {
    id: 3,
    title: "Adventure Explorer",
    duration: "4 hours",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    category: "Adventure",
    description: "Extended rides with waterfall swimming and nature trek",
    features: [
      "Waterfall swimming",
      "Nature trek",
      "Adventure gear",
      "Snacks included",
    ],
  },
  {
    id: 4,
    title: "Group Expedition",
    duration: "5 hours",
    price: "₹4,000",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    category: "Group",
    description: "Group activities with lunch included",
    features: [
      "Group activities",
      "Lunch included",
      "Team building",
      "Guide included",
    ],
  },
];

const categories = ["All", "Family", "Couple", "Adventure", "Group"];

const BoatingPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages =
    selectedCategory === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <section className="py-32 bg-[var(--color-night)]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Boating Packages
          </h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[var(--color-cinereous)] text-white"
                    : "bg-[var(--color-rich-black)] text-[var(--color-eerie-black)] hover:bg-[var(--color-cinereous)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPackages.map((pkg) => (
            <ScrollAnimation key={pkg.id}>
              <div className="bg-[var(--color-rich-black)] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-[var(--color-eerie-black)] mb-4">
                    {pkg.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-[var(--color-eerie-black)] flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-[var(--color-cinereous)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[var(--color-eerie-black)]">
                      {pkg.duration}
                    </span>
                    <span className="text-white font-bold">{pkg.price}</span>
                  </div>
                  <button className="w-full bg-[var(--color-cinereous)] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoatingPackages;
