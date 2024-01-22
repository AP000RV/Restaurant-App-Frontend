import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is FOOD!</p>
          </div>
          <p className="mid">
            Indulge in the extraordinary at our Restaurant, where our sole
            devotion is to the art of food. Immerse yourself in a culinary
            journey that transforms every dish into a delightful tale. Our chefs
            passionately craft each creation, ensuring every bite is a symphony
            of flavors. Join us for an exceptional dining experience that
            celebrates the simplicity and richness of good food.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>{" "}
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
