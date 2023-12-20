import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import './ProductList.css';
import ExpandCard from './ExpandCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <div>
      <nav className="navbar navbar-dark custom-navbar border-bottom border-1 sticky-top">
        <span className="navbar-brand m-1 h1 mx-auto">Product List</span>
      </nav>
      <div className="container mt-4 mx-auto">
        <div className="row flex row-cols-1 row-cols-sm-2 row-cols-md-4">
          {products.map((product) => (
            <div key={product.id} className="col mb-2 mx-auto">
              <ProductCard
                product={product}
                onCardClick={() => setSelectedProduct(product)} 
                blurBackground={selectedProduct !== null}
                />
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ExpandCard
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      <footer
            className="text-light text-center p-3 mt-10 border-top border-1">        
            <div className="custom-footer p-7 text-center bottom-0">
                Copyright © {new Date().getFullYear()} balaji. All rights reserved.
            </div>
        </footer>
    </div>
  );
};
export default ProductList;