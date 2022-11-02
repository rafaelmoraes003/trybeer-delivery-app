import React from 'react';
import { useNavigate } from 'react-router';

function NavBar() {
  const navigateTo = useNavigate();
  const { name } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigateTo('/login');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => { navigateTo('/customer/products'); } }
      >
        PRODUTOS

      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => { navigateTo('/customer/orders'); } }
      >
        MEUS PEDIDOS
      </button>

      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </div>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </button>

    </div>
  );
}

export default NavBar;
