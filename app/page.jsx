import React from "react";
import Hero from "@/app/Component/Hero";
import BoatServices from "./Component/BoatServices";
import Location from "./Component/Location";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BoatServices />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
