import "./MainPage.css";
import ServerList from "../../Pages/ServerList/ServerList";

function MainPage(): JSX.Element {
  return (
    <div className="MainPage">
      <h1>Welcome to the Server Management Dashboard</h1>
      <p>Here you can view and manage all your servers efficiently.</p>
      <ServerList />
    </div>
  );
}

export default MainPage;
