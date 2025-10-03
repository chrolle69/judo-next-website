import Image from "next/image";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HeroSection from "./components/home/hero_section";
import FeaturesSection from "./components/home/features_section";
import BenefitsSection from "./components/home/benefits_section/benefits_section";
import ProcessSection from "./components/home/process_section";

export default function Home() {

  return (
    <div className="flex flex-col justify-between ">
      <Header></Header>
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <ProcessSection />
      </main>
      <Footer></Footer>
    </div>
  );
}