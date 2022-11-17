import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import ProductCard from '../../components/ProductsCard/ProductCard';

import * as S from './styled';

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

    return () => {
      setProducts([]);
    };
  }, []);

  useEffect(() => {
    const cartItems = products.filter((product) => product.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const sumOfItems = JSON.parse(localStorage.getItem('cart')).reduce((acc, curr) => (
      (Number(curr.price) * curr.quantity) + acc
    ), 0).toFixed(2);
    setCartSum(sumOfItems);
  }, [products]);

  const incrementQuantity = (id) => {
    const productToIncrease = products.map((product) => {
      if (product.id === id) product.quantity += 1;
      return product;
    });
    setProducts(productToIncrease);
  };

  const decrementQuantity = (id) => {
    const productToDecrease = products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity -= 1;
      }
      return product;
    });
    setProducts(productToDecrease);
  };

  const handleQuantityChangeOnInput = (event) => {
    const productToModify = products.map((product) => {
      if (product.id === Number(event.target.id)) {
        product.quantity = Number(event.target.value);
      }
      return product;
    });
    setProducts(productToModify);
  };

  const disableButton = () => cartSum === '0.00';

  return (
    <div>
      <NavBar showProducts showOrders />
      <S.ButtonCart
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => navigateTo(`/${role}/checkout`) }
        disabled={ disableButton() }
      >
        Ver Carrinho
        <S.Text
          data-testid="customer_products__checkout-bottom-value"
          type="button"
        >
          {`R$${cartSum.replace('.', ',')}`}
        </S.Text>
      </S.ButtonCart>
      <S.Container>
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
      </S.Container>
    </div>
  );
}

export default Products;
