import "./MainPage.css";
import MeetingManager from "../../Pages/MeetingManager/MeetingManager";

function MainPage(): JSX.Element {
  return (
    <div className="MainPage">
      <h1>Welcome to the Meeting Management Dashboard</h1>
      <p>Here you can view and manage all your meetings efficiently.</p>
      <MeetingManager />
    </div>
  );
}

export default MainPage;
