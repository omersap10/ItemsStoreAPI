import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />
            <h3 className="product-title no-select">{product.title}</h3>
            <p className="product-price">${product.price}</p>
        </div>
    );
};

export default ProductCard;