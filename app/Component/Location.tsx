"use client";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const Location = () => {
  return (
    <section id="location" className="py-32 bg-[var(--color-rich-black)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollAnimation>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white">Visit Us</h2>
              <p className="text-[var(--color-eerie-black)] text-lg leading-relaxed">
                Located in the heart of Hogenakkal, our facility offers easy
                access to the famous waterfalls and surrounding natural beauty.
                Experience the perfect blend of adventure and relaxation in this
                serene setting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-[var(--color-cinereous)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white text-lg">
                    Hogenakkal Falls, Tamil Nadu, India
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-[var(--color-cinereous)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white text-lg">
                    Open Daily: 6:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
              <button className="bg-[var(--color-cinereous)] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Get Directions
              </button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hogenakkal Falls Location"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Location;
