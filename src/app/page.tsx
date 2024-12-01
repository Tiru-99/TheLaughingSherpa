import LandingSection from "@/components/LandingSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUsCarousel from "@/components/WhyChooseUsDraggable";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandingSection></LandingSection>
      <ProductShowcase></ProductShowcase>
      <div className="bg-gray-50">
        <WhyChooseUsCarousel></WhyChooseUsCarousel>
      </div>
      <div className="bg-black">
        <div className="scale-90 bg-black">
          <AboutUs></AboutUs>
        </div>
      </div>
      <CoreValues></CoreValues>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}
