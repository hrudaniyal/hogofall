import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-night)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Boat Rides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Massage Therapy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Campfire Experience
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)] text-2xl"
              >
                📱
              </a>
              <a
                href="#"
                className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)] text-2xl"
              >
                💻
              </a>
              <a
                href="#"
                className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)] text-2xl"
              >
                📷
              </a>
              <a
                href="#"
                className="text-[var(--color-eerie-black)] hover:text-[var(--color-cinereous)] text-2xl"
              >
                📘
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-rich-black)] mt-8 pt-8 text-center">
          <p className="text-[var(--color-eerie-black)]">
            © 2024 Hogenakkal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
