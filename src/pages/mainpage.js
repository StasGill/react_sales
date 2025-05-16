import "./main_page.css";
import React, { useState } from "react";
import image from "../img/logo.jpg";
import { products } from "../data/data";
import { ProductCard } from "../modules/productCard";

const filters = ["Все", "Недвижимость", "Транспорт", "Техника"];

function MainPage() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [inputValue, setInputValue] = useState(""); // state for the input

  const handleChange = (e) => {
    setInputValue(e.target.value); // update state as user types
  };

  return (
    <div className="container">
      <header className="header">
        <logo className="header_logo">
          <img src={image} alt="logo" />
        </logo>
        <button className="header_button">Разместить обьявление</button>
      </header>
      <main className="main">
        <input
          placeholder="Поиск по обьявлениям"
          className="main_input"
          value={inputValue} // value comes from state (controlled)
          onChange={handleChange} // updates state on change
        ></input>
        <div className="filter-group">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="goods_container">
          <div className="goods_item">
            <div className="product-grid">
              {products
                .filter((card) => {
                  if (inputValue) {
                    return card.title.includes(inputValue);
                  }
                  if (activeFilter === "Все") {
                    return card;
                  }
                  if (card.filter === activeFilter) {
                    return card;
                  }
                  return null;
                })
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
