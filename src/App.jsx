import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingProcess from "./components/WorkingProcess";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="container">
        <Hero />
        <Partners />
        <Services />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
