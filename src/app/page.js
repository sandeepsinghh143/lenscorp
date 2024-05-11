import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import FooterCredit from "@/components/FooterCredit";
import FooterLinks from "@/components/FooterLinks";
import FrequentQues from "@/components/FrequentQues";
import HeroSection from "@/components/HeroSection";
import MeetTrueAI from "@/components/MeetTrueAI";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="w-full dark:bg-black">
      <HeroSection/>
      <About/>
      <Services/>
      <MeetTrueAI/>
      <Features/>
      <Vision/>
      <Blogs/>
      <Clients/>
      <Numbers/>
      <FrequentQues/>
      <Contact/>
      <FooterLinks/>
      <FooterCredit/>
    </div>
  );
}
