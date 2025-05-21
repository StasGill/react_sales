import React from "react";
import "./Filters.scss";

export const Filters = ({ filters, setActiveFilter, activeFilter }) => {
  return (
    <div className="filter__group">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`filter__button ${
            activeFilter === filter ? "active" : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
