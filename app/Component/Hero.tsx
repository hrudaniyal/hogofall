import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hogenakkal Waterfalls"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            Experience Hogenakkal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in-up animation-delay-200">
            Discover the magic of Hogenakkal with our premium boat rides,
            traditional massage, campfire experiences, and authentic local
            cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-[var(--color-cinereous)] hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg transform hover:scale-105">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-night)] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg transform hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="mt-12 text-white animate-fade-in-up animation-delay-600">
            <p className="text-lg">Contact us: +91 94433 34808</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
