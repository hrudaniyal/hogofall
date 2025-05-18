import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hogenakkal Waterfalls"
          fill
          sizes="100vw"
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white animate-fade-in-up leading-tight">
            Experience Hogenakkal
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white animate-fade-in-up animation-delay-200 leading-relaxed px-2">
            Discover the magic of Hogenakkal with our premium boat rides,
            traditional massage, campfire experiences, and authentic local
            cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto bg-[var(--color-cinereous)] hover:bg-opacity-90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
            <Link 
              href="#planvisit" 
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-night)] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 text-white animate-fade-in-up animation-delay-600">
            <p className="text-base sm:text-lg font-medium">Contact us: +91 94433 34808</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
