import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import HowItWorks from "./HowItWorks";
import { Pricing } from "./Pricing";
import { Payouts } from "./Payouts";
import { Support } from "./Support";
import { FinalCTA } from "./FinalCTA";
import { FAQ } from "./FAQ";

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

        <Section>
          <h2 className="text-3xl font-bold ">Footer</h2>
          <p>Company + legal + contact</p>
        </Section>
      </main>

      <footer></footer>
    </section>
  );
}

export default LandingPage;
