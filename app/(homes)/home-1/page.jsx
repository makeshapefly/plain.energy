import Footer8 from "@/components/footers/Footer8";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-1/Hero";
import Contact from "@/components/contact/Contact";
import Steps from "@/components/homes/home-5/Steps";

export const metadata = {
  title: "Home 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      <SearchPopup />
      <Header1 />
      <Hero />
      <About />
      <Faq />
      <Features />
      <Steps />
      <Contact />
    </>
  );
}
