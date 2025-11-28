import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import MonthlySpecial from "@/components/MonthlySpecial";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";
import SpecialPopup from "@/components/SpecialPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SpecialPopup />
      <main>
        <Hero />
        <About />
        <Treatments />
        <MonthlySpecial />
        <BookAppointment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
