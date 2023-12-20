import { Card } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product, onCardClick, blurBackground }) => {
    const cardStyle = {
        filter: blurBackground ? 'blur(5px)' : 'none',
        transition: 'filter 0.3s ease-in-out',
    };
    return (
        <Card className="product-card" onClick={onCardClick} style={cardStyle}>
            <Card.Img className="card-image" variant="top" src={product.thumbnail} alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="price">Price: ${product.price} <span className="percent">{product.discountPercentage}% off</span>  </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
