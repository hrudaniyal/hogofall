import Hero from "./Component/Hero";
import BoatServices from "./Component/BoatServices";
import Location from "./Component/Location";
import Contact from "./Component/Contact";
import BoatingPackages from "./Component/BoatingPackages";
import Testimonials from "./Component/Testimonials";
import PlanYourVisit from "./Component/PlanYourVisit";

export default function Home() {
  return (
    <main>
      <Hero />
      <BoatServices />
      <BoatingPackages />
      <Testimonials />
      <Location />
      <PlanYourVisit />
      <Contact />
    </main>
  );
}
