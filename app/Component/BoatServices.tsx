"use client";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  {
    title: "Boat Rides",
    description:
      "Experience the thrill of riding through the majestic Hogenakkal waterfalls in our traditional coracle boats. Our expert boatmen will guide you through the scenic beauty of the Kaveri river.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Massage Therapy",
    description:
      "Relax and rejuvenate with our traditional oil massage services by the riverside. Our experienced therapists use natural oils and techniques passed down through generations.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Campfire Experience",
    description:
      "Enjoy a magical evening by the campfire with traditional music and local delicacies. Perfect for groups and families looking for a unique experience.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Home Style Food",
    description:
      "Savor authentic local cuisine prepared with fresh ingredients and traditional recipes. Our chefs use age-old cooking methods to bring you the true taste of Hogenakkal.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const BoatServices = () => {
  return (
    <section id="services" className="py-32 bg-[var(--color-night)]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Our Services
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-[var(--color-rich-black)] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-eerie-black)] text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 bg-[var(--color-cinereous)] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Learn More
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

export default BoatServices;
