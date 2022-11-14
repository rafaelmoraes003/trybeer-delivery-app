import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import * as S from './styled';

function NavBar({ showProducts, showOrders }) {
  const navigateTo = useNavigate();
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigateTo('/login');
  };

  return (
    <S.Container>
      {showProducts && (
        <S.ProductsButton
          className="btnColor"
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => { navigateTo('/customer/products'); } }
        >
          PRODUTOS

        </S.ProductsButton>
      )}

      {showOrders && (
        <S.OrdersButton
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => { navigateTo(`/${role}/orders`); } }
        >
          { showProducts ? 'MEUS PEDIDOS' : 'PEDIDOS' }
        </S.OrdersButton>
      )}

      <S.User
        data-testid={ `${role}_products__element-navbar-user-full-name` }
      >
        { name }
      </S.User>

      <S.Logout
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </S.Logout>

    </S.Container>
  );
}

NavBar.propTypes = {
  showProducts: PropTypes.bool.isRequired,
  showOrders: PropTypes.bool.isRequired,
};

export default NavBar;
