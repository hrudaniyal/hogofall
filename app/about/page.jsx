import WhyChooseUs from "../Component/WhyChooseUs";
import MissionSection from "../Component/MissionSection";
import Testimonials from "../Component/Testimonials";

export default function About() {
  return (
    <div className="bg-night text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.pexels.com/photos/6817501/pexels-photo-6817501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Hogenakkal Boating
          </h1>
          <p className="text-xl">
            Discover the story behind Tamil Nadu's most scenic boating
            destination.
          </p>
        </div>
      </section>

      {/* Mission Section */}

      <MissionSection />

      {/* Story Section */}
      <section className="py-20 px-6 md:px-20 bg-eerieBlack text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Image Side */}
          <div className="flex">
            <img
              src="https://images.pexels.com/photos/12940501/pexels-photo-12940501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Boating Story"
              className="rounded-2xl object-cover w-full h-full max-h-[450px] shadow-xl"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cinereous">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              What started as a small community boating initiative has blossomed
              into one of Tamil Nadu’s most iconic river adventures.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Guided by passionate locals and powered by traditional coracle
              boats, our journey reflects heritage, harmony, and the magic of
              Hogenakkal Falls.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Testimonials */}
      <Testimonials />
      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-night text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Explore?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-300">
          Book your unforgettable Hogenakkal boat tour today and dive into a
          world of natural wonder.
        </p>
        <a
          href="/book"
          className="inline-block bg-cinereous text-white px-8 py-4 rounded hover:bg-night2 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
