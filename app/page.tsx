import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCtaBar from "@/components/MobileCtaBar";
import TrustStrip from "@/components/TrustStrip";
import SneakPeek from "@/components/SneakPeek";
import Positioning from "@/components/Positioning";
import WhoItsFor from "@/components/WhoItsFor";
import Method from "@/components/Method";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import Outcomes from "@/components/Outcomes";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { getNewsletterContent } from "@/lib/newsletter";

export default async function Home() {
  const newsletterContent = await getNewsletterContent();

  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        <Hero />
        <TrustStrip />
        <SneakPeek />
        <Positioning />
        <WhoItsFor />
        <Method />
        <Offer />
        <HowItWorks />
        <Outcomes />
        <FAQ />
        <FinalCta />
        <Newsletter content={newsletterContent} />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
