'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    review: "Amazing experience! The coracle ride was thrilling and the waterfall views were breathtaking. The guides were very professional and made us feel safe throughout the journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    review: "Perfect family outing! The kids loved the boat ride and we got some amazing photos. The staff was very helpful and the facilities were clean and well-maintained.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Vikram Singh",
    rating: 4,
    review: "Great adventure! The early morning ride was worth it. The water was calm and the views were spectacular. Would definitely recommend the couple's package.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Ananya Reddy",
    rating: 5,
    review: "Best experience ever! The massage therapy by the riverside was so relaxing. The natural setting made it even more special. Can't wait to visit again!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    date: "2 months ago"
  }
];

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <section className="py-32 bg-[var(--color-rich-black)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-lg ml-2">
              {averageRating.toFixed(1)} out of 5
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-night)] rounded-xl p-6 shadow-2xl"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[var(--color-eerie-black)] mb-4">
                {testimonial.review}
              </p>
              <p className="text-[var(--color-cinereous)] text-sm">
                {testimonial.date}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[var(--color-cinereous)] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 