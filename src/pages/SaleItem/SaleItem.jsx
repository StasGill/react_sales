import React from "react";
import "./sale_item.scss";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { products } from "../../data/data.js";
import { ProductCard } from "../../components/ProductCard/ProductCard.jsx";

const ProductCards = ({ product }) => {
  const { id } = useParams();
  const item = products.find((item) => item.id === +id);

  return (
    <div className="container main_section">
      <div className="sale__card">
        <div className="sale__header">
          <div className="sale__title">
            <FaCheckCircle className="sale__icon" />
            <h2>{item?.title}</h2>
          </div>
          <div className="sale__location">
            <FaMapMarkerAlt className="sale__icon" />
            <span>{item?.city}</span>
          </div>
        </div>

        <div className="sale__body">
          <img src={item.image} alt={item.title} className="sale__image" />
          <div className="sale__content">
            <h3>Описание:</h3>
            <p>{item.description}</p>
            {/* <ul>
            <li>Цвет: {item.color}</li>
            <li>Материал: {item.material}</li>
            <li>Состояние: {item.condition}</li>
          </ul> */}
            <h3 className="product__h3">{item.price}</h3>
            <a href={`tel:${item.phone}`} className="product__phone">
              📞 {item.phone}
            </a>
          </div>
        </div>
      </div>
      <h2 className="product__other-header">
        Другие обьявления в категории : {item.filter}
      </h2>
      <div className="goods_container">
        <div className="goods_item">
          <div className="products__container">
            {products
              .filter((card) => {
                if (card.filter === item.filter) {
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
    </div>
  );
};

export default ProductCards;
