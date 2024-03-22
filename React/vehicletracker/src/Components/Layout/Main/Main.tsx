import MainRoute from "../../Route/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";

function Main(): JSX.Element {
  return (
    <div className="Main">
      <header>
        <Header />
      </header>
      <main>
        <MainRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
