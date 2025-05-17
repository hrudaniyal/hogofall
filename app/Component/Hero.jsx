"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-[url('https://images.pexels.com/photos/3686883/pexels-photo-3686883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] 
      bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
    >
      {/* Optional overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Experience the Serenity of Hogenakkal Boating
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Explore the breathtaking beauty of Hogenakkal Falls with our guided
          boat tours.
        </p>
        <a
          href="#book"
          className="mt-6 inline-block bg-cinereous text-white px-6 py-3 rounded hover:bg-night transition drop-shadow-md"
        >
          Book Your Tour
        </a>
      </div>
    </section>
  );
}
