import Banner from "@/components/Banner";
import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";
import LogoTicker from "@/components/sections/LogoTicker";
import Features from "@/components/sections/Features";
import Project from "@/components/sections/Project";
import FAQs from "@/components/sections/FAQs";
import CTA from '@/components/sections/CTA'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Project />
      <FAQs />
      <CTA/>
      <Footer />
    </main>
  );
}
