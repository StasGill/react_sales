import React from "react";
import "./SearchInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({
  placeholder = "Поиск по обьявлениям ...",
  value,
  onChange,
}) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faSearch} className="icon" />
    </div>
  );
};

export default SearchInput;
