import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: "88244b9a5ba892c3bf06c13abd966203",
        indexName: "zauru",
        inputSelector: "#nav-search",
        debug: true,
      });
    }
  }, []);

  return (
    <div className="control has-icons-left">
      <input
        className="input is-rounded docs-nav-search-input"
        type="text"
        placeholder="Buscar"
        id="nav-search"
        autoComplete="off"
        style={{ width: `100% !important` }}
      />
      <span className="icon is-left">
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBox;
