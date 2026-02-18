import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import HowItWorks from "./HowItWorks";

function LandingPage() {
  return (
    <section className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <ValueProps />

        <HowItWorks />

        <Section>
          <h2 className="text-3xl font-bold ">Pricing Section / Trading Rules Section</h2>
          <p>Purpose: Decision making</p>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold ">Payouts</h2>
          <p>Purpose: How It Works Section</p>
          <p>Fast & Reliable Rewards</p>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold ">24/7 Customer Support Section</h2>
          <p>Reassurance / trust</p>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold ">Final CTA Section</h2>
          <p>Conversion push</p>
          <p>“Start Your Challenge Today” “Get Funded”</p>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold ">FAQ Section</h2>
          <p>Objection handling</p>
        </Section>

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
