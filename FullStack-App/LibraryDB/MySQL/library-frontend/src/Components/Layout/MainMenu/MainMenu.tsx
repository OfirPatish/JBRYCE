import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { appStore } from "../../Redux/store";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = appStore.subscribe(() => {
      const state = appStore.getState();
      setIsLogged(state.auth.jwt.length > 0);
      switch (state.auth.role) {
        case "Admin":
          setIsAdmin(true);
          break;
        case "User":
          setIsUser(true);
          break;
        default:
          setIsAdmin(false);
          setIsUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const renderMainMenu = () => (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <hr />
      <NavLink to={"/authors"}>Authors</NavLink>
      <NavLink to={"/books"}>Books</NavLink>
      <hr />
    </>
  );

  const renderAdminMenu = () => (
    <>
      <NavLink to={"/addAuthor"}>Add Author</NavLink>
      <NavLink to={"/deleteAuthor"}>Delete Author</NavLink>
      <NavLink to={"/addBook"}>Add Book</NavLink>
      <NavLink to={"/deleteBook"}>Delete Book</NavLink>
      <hr />
    </>
  );

  const renderUserMenu = () => (
    <>
      <NavLink to={"/myBooks"}>My Books</NavLink>
      <hr />
    </>
  );

  return (
    <div className="MainMenu">
      <h2>Menu</h2>
      <hr />
      {isLogged ? (
        <>
          {renderMainMenu()}
          {isAdmin && renderAdminMenu()}
          {isUser && renderUserMenu()}
        </>
      ) : (
        <p style={{ color: "white" }}>Please login to view.</p>
      )}
    </div>
  );
}

export default MainMenu;
