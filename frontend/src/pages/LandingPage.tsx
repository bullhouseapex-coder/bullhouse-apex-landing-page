import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import HowItWorks from "./HowItWorks";
import { Pricing } from "./Pricing";
import { Payouts } from "./Payouts";
import { Support } from "./Support";
import { FinalCTA } from "./FinalCTA";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

function LandingPage() {
  return (
    <section className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <ValueProps />

        <HowItWorks />

        <Pricing />

        <Payouts />

        <Support />

        <FinalCTA />

        <FAQ />
      </main>

      <Footer />
    </section>
  );
}

export default LandingPage;
