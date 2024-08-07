import React from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for a recipe" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
