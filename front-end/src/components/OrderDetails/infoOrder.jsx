import React from 'react';

function Header() {
    const index = 1;
  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
          Pedido
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
          Vendedor
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
          Data
      </span>
      <span data-testid={`customer_order_details__element-order-details-label-delivery-status${index}`}>
          Entregue
      </span>

      <button data-testid="customer_order_details__button-delivery-check">
          Marcar como entregue
      </button>
      
    </div>
 )
}

export default Header;