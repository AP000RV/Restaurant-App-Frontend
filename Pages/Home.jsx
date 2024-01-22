import About from "../src/components/About";
import Footer from "../src/components/Footer";
import HeroSection from "../src/components/HeroSection";
import Menu from "../src/components/Menu";
import Qualities from "../src/components/Qualities";
import Reservation from "../src/components/Reservation";
import Team from "../src/components/Team";
import WhoAreWe from "../src/components/WhoAreWe";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
