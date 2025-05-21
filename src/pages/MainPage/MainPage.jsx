import "./MainPage.scss";
import React, { useState } from "react";
import { products } from "../../data/data.js";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Filters } from "../../components/Filters/Filters";

const filters = ["Все", "Недвижимость", "Транспорт", "Техника"];

function MainPage() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container main_section">
      <main className="main">
        <SearchInput value={inputValue} onChange={handleChange} />
        <Filters
          filters={filters}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <div className="goods_container">
          <div className="goods_item">
            <div className="products__container">
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
                .map(
                  (product, index) =>
                    product && <ProductCard key={index} {...product} />
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
