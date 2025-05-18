import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-[var(--color-night)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
            <p className="text-[var(--color-eerie-black)] text-lg mb-6">
              We are a team of passionate individuals dedicated to creating
              innovative solutions that make a difference. Our mission is to
              provide cutting-edge technology that empowers businesses and
              individuals to achieve their goals.
            </p>
            <p className="text-[var(--color-eerie-black)] text-lg">
              With years of experience in the industry , we have helped countless
              clients transform their ideas into reality. Our commitment to
              excellence and customer satisfaction sets us apart.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-[var(--color-rich-black)] p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-[var(--color-cinereous)] mb-2">
                    10+
                  </div>
                  <div className="text-white">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-[var(--color-cinereous)] mb-2">
                    500+
                  </div>
                  <div className="text-white">Projects Completed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-[var(--color-cinereous)] mb-2">
                    50+
                  </div>
                  <div className="text-white">Team Members</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-[var(--color-cinereous)] mb-2">
                    24/7
                  </div>
                  <div className="text-white">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
