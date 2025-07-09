import UserClass from "./UserClass";
import UserFunctional from "./UserFunctional";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our Food Order App! We are dedicated to bringing you the best
        food delivery experience.
      </p>
      <p>
        Our team is passionate about food and technology, and we strive to
        connect you with your favorite restaurants.
      </p>
      <p>Thank you for choosing us for your food delivery needs!</p>
      <UserClass name="SIVA" />
      <UserFunctional />
    </div>
  );
};
export default AboutUs;
