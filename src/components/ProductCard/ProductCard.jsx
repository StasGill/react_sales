import { Link } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ image, title, description, phone, id }) => {
  return (
    <Link to={`/${id}`} className="product__card">
      <img src={image} alt={title} className="product__image" />
      <div className="product__content">
        <h2 className="product__title">{title}</h2>
        <p className="product__description">{description}</p>
        <p className="product__phone">📞 {phone}</p>
      </div>
    </Link>
  );
};
