import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Payouts from "../components/Payouts";
import Support from "../components/Support";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";

function LandingPage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Pricing />
      <Payouts />
      <Support />
      <FinalCTA />
      <FAQ />
    </>
  );
}

export default LandingPage;
