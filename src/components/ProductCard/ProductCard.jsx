import { Link } from "react-router-dom";
import "./ProductCard.scss";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const ProductCard = ({
  image,
  title,
  description,
  phone,
  id,
  price,
}) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link to={`/${id}`} className="product__card" onClick={handleClick}>
      <img src={image} alt={title} className="product__image" />
      <div className="product__content">
        <h2 className="product__title">{title}</h2>
        <p className="product__description">{truncateText(description, 100)}</p>
        <h3 className="product__h3">{price}</h3>
        <div href={`tel:${phone}`} className="product__phone">
          📞 {phone}
        </div>
      </div>
    </Link>
  );
};
