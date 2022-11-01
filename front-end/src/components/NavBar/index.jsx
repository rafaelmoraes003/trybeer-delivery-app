import React from 'react';
import { useNavigate } from 'react-router';

function NavBar() {
  const navigateTo = useNavigate();
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

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        USUÁRIO
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </button>

    </div>
  );
}

export default NavBar;
