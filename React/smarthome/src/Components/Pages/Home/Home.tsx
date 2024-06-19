import { Link } from "react-router-dom";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1>Welcome to IntelliHome</h1>
      <p>
        This website provides comprehensive information about various smart home technologies. You can view the details
        of each smart device, including its current status, energy consumption, and more.
      </p>
      <p>
        Smart home technologies are digital or virtual systems that provide automation and control over various
        household functions. They are centralized and operate on technology called Internet of Things (IoT), which is a
        network of physical devices connected and exchanging data.
      </p>
      <p>
        With IntelliHome, you can explore the fascinating world of smart home technologies, understand their
        performance, and make informed decisions. Whether you're a seasoned homeowner or a curious beginner, this
        website is a valuable resource for all your smart home needs.
      </p>
      <Link to="/devices">View Devices</Link>
    </div>
  );
}

export default Home;
