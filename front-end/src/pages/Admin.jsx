import NavBar from '../components/NavBar';
import AdminForm from '../components/AdminForm';
import Provider from '../Context/Provider';
import UsersTable from '../components/UsersTable';

function Admin() {
  return (
    <div>
      <Provider>
        <NavBar showProducts={ false } showOrders={ false } />
        <AdminForm />
        <UsersTable />
      </Provider>
    </div>
  );
}

export default Admin;
