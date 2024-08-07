import { Link } from "react-router-dom";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1>Welcome to Crypto API 2.0</h1>
      <p>
        This website provides comprehensive information about various cryptocurrencies. You can view the details of each
        cryptocurrency, including its current price, market cap, volume in the last 24 hours, and more.
      </p>
      <p>
        Cryptocurrencies are digital or virtual currencies that use cryptography for security. They are decentralized
        and operate on technology called blockchain, which is a distributed ledger enforced by a disparate network of
        computers.
      </p>
      <p>
        With Crypto API 2.0, you can explore the fascinating world of cryptocurrencies, understand their performance,
        and make informed decisions. Whether you're a seasoned trader or a curious beginner, this website is a valuable
        resource for all your cryptocurrency needs.
      </p>
      <Link to="/assets">View Assets</Link>
    </div>
  );
}

export default Home;
