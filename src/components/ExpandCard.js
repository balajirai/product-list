import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpandCard = ({ product, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        let intervalId;
        if (isHovered) {
            intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
                );
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isHovered, product.images]);

    return (
        <div className="position-fixed top-50 start-50 translate-middle w-80 p-4 bg-dark rounded w-full" >
            <div className="d-flex justify-content-between">
                <h3 className="text-light">{product.title}</h3>
                <button type="button" className="btn-close text-light" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className='flex'>
                <img
                    className="w-50 h-50 mt-2 mb-3 rounded cursor-pointer img-fluid"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                />
                <div>
                    <p className="text-light">{product.description}</p>
                    <ul className="list-unstyled text-light">
                        <li>Rating: {product.rating}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExpandCard;
