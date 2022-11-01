import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';

function Products() {
  const navigateTo = useNavigate();
  const { role } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  const [cartSum, setCartSum] = useState('0.00');

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      const productsWithQuantity = data.map((product) => ({ ...product, quantity: 0 }));
      setProducts(productsWithQuantity);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const cartItems = products.filter((product) => product.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const sumOfItems = JSON.parse(localStorage.getItem('cart')).reduce((acc, curr) => (
      (Number(curr.price) * curr.quantity) + acc
    ), 0).toFixed(2);
    setCartSum(sumOfItems);
  }, [products]);

  return (
    <div>
      <NavBar />
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
      >
        {cartSum.replace('.', ',')}
      </button>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => navigateTo(`/${role}/checkout`) }
        disabled={ disableButton() }
      >
        Carrinho
      </button>
      {products.map(({ id, name, price, urlImage, quantity }) => (
        <ProductCard
          key={ name }
          id={ id }
          name={ name }
          price={ price }
          urlImage={ urlImage }
          quantity={ quantity }
          incrementFunc={ incrementQuantity }
          decrementFunc={ decrementQuantity }
          onChange={ handleQuantityChangeOnInput }
        />
      ))}
    </div>
  );
}

export default Products;
