import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function NavBar({ showProducts }) {
  const navigateTo = useNavigate();
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigateTo('/login');
  };

  return (
    <div>
      {showProducts && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => { navigateTo('/customer/products'); } }
        >
          PRODUTOS

        </button>
      )}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => { navigateTo(`/${role}/orders`); } }
      >
        { showProducts ? 'MEUS PEDIDOS' : 'PEDIDOS' }
      </button>

      <div
        data-testid={ `${role}-navbar-user-full-name` }
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

NavBar.propTypes = {
  showProducts: PropTypes.bool.isRequired,
};

export default NavBar;
