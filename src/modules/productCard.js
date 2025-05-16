import "./productCard.css";

export const ProductCard = ({ image, title, description, phone }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-phone">📞 {phone}</p>
      </div>
    </div>
  );
};
