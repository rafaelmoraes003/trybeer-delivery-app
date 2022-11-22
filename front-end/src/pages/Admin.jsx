import NavBar from '../components/Navbar/NavBar';
import AdminForm from '../components/AdminForm/AdminForm';
import Provider from '../Context/Provider';
import UsersTable from '../components/UsersTable/UsersTable';

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
