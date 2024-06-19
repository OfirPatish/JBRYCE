import { useEffect } from "react";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import "./MainPage.css";

function MainPage(): JSX.Element {
  useEffect(() => {
    validateAndDispatchJWT();
  }, []);

  return (
    <div className="MainPage">
      <h1>Welcome to Car Finder</h1>
      <p>
        Discover the best way to find your next vehicle. Our application offers a comprehensive search tool to help you
        locate cars, bikes, trucks, and off-road vehicles with ease.
      </p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Car Locator:</strong> Find the perfect car that meets your needs and preferences.
          </li>
          <li>
            <strong>Bike Locator:</strong> Explore a wide range of bikes available in your area.
          </li>
          <li>
            <strong>Truck Locator:</strong> Locate trucks for commercial or personal use.
          </li>
          <li>
            <strong>Offroad Locator:</strong> Discover off-road vehicles for your adventurous trips.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Comprehensive Database:</strong> Access a vast database of vehicles from various categories.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Enjoy a seamless and intuitive search experience.
          </li>
          <li>
            <strong>Real-Time Updates:</strong> Get the latest information on vehicle availability and prices.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Trust in our secure platform to protect your data and privacy.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MainPage;
