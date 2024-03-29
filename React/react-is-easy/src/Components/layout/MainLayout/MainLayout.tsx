import Cars from "../../REST/Cars/Cars";
import Login from "../Login/Login";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainMenu from "../MainMenu/MainMenu";
import MainPage from "../MainPage/MainPage";
import NameDisplayButton from "../NameDisplayButton/NameDisplayButton";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <MainHeader />
      </header>
      <aside>
        <MainMenu />
      </aside>
      <main>
        <Cars />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default MainLayout;
