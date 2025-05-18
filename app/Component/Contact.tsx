import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[var(--color-rich-black)]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
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
                  />
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
                  <div className="text-[var(--color-cinereous)]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-[var(--color-eerie-black)]">
                      +91 94433 34808
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[var(--color-cinereous)]">
                    <svg
                      className="w-6 h-6"
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
                  <div className="text-[var(--color-cinereous)]">
                    <svg
                      className="w-6 h-6"
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
