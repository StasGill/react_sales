import React from "react";
import "./sale_item.scss";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { products } from "../../data/data.js";

const ProductCard = ({ product }) => {
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
            <p className="product__phone">📞 {item.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
