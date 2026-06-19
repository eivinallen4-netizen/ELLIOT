import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SneakPeek from "@/components/SneakPeek";
import Positioning from "@/components/Positioning";
import WhoItsFor from "@/components/WhoItsFor";
import Outcomes from "@/components/Outcomes";
import Method from "@/components/Method";
import FinalCta from "@/components/FinalCta";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { getNewsletterContent } from "@/lib/newsletter";

export default async function Home() {
  const newsletterContent = await getNewsletterContent();

  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <Hero />
        <SneakPeek />
        <Positioning />
        <WhoItsFor />
        <Method />
        <Outcomes />
        <FinalCta />
        <Newsletter content={newsletterContent} />
      </main>
      <Footer />
    </div>
  );
}
