import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Authors from "../../Pages/Authors/Authors";
import Books from "../../Pages/Books/Books";
import AddAuthor from "../../Pages/AddAuthor/AddAuthor";
import DeleteAuthor from "../../Pages/DeleteAuthor/DeleteAuthor";
import AddBook from "../../Pages/AddBook/AddBook";
import DeleteBook from "../../Pages/DeleteBook/DeleteBook";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addAuthor" element={<AddAuthor />} />
        <Route path="/deleteAuthor" element={<DeleteAuthor />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/deleteBook" element={<DeleteBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
