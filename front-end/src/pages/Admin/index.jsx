import NavBar from '../../components/NavBar/index';
import AdminForm from '../../components/AdminForm';

function Admin() {
  return (
    <div>
      <NavBar showProducts={ false } showOrders={ false } />
      <AdminForm />
    </div>
  );
}

export default Admin;
