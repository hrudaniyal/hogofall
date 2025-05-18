import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--color-rich-black)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[var(--color-night-2)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Book Your Experience
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-night)] text-white border border-[var(--color-cinereous)] focus:outline-none focus:border-[var(--color-cinereous)]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-night)] text-white border border-[var(--color-cinereous)] focus:outline-none focus:border-[var(--color-cinereous)]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-night)] text-white border border-[var(--color-cinereous)] focus:outline-none focus:border-[var(--color-cinereous)]"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-[var(--color-night)] text-white border border-[var(--color-cinereous)] focus:outline-none focus:border-[var(--color-cinereous)]">
                    <option value="">Select Service</option>
                    <option value="boat">Boat Ride</option>
                    <option value="massage">Massage Therapy</option>
                    <option value="campfire">Campfire Experience</option>
                    <option value="food">Home Style Food</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Additional Information"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-night)] text-white border border-[var(--color-cinereous)] focus:outline-none focus:border-[var(--color-cinereous)]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-cinereous)] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
            <div className="bg-[var(--color-night-2)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-[var(--color-cinereous)] text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-[var(--color-eerie-black)]">
                      +91 94433 34808
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[var(--color-cinereous)] text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Address</h4>
                    <p className="text-[var(--color-eerie-black)]">
                      Hogenakkal, Pennagaram Taluk
                      <br />
                      Dharmapuri District, Tamil Nadu
                      <br />
                      PIN: 636817
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[var(--color-cinereous)] text-xl">
                    ⏰
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Business Hours</h4>
                    <p className="text-[var(--color-eerie-black)]">
                      Open Daily: 6:00 AM - 6:00 PM
                      <br />
                      Best time to visit: Early morning or late afternoon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
