import LandingSection from "@/components/LandingSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUsCarousel from "@/components/WhyChooseUsDraggable";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <LandingSection></LandingSection>
      <ProductShowcase></ProductShowcase>
      <div className="bg-gray-50">
        <WhyChooseUsCarousel></WhyChooseUsCarousel>
      </div>
      <CustomerReviews></CustomerReviews>
      <Footer></Footer>
    </>
  );
}
