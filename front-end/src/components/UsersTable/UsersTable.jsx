import { useState, useContext, useEffect } from 'react';
import UsersContext from '../../Context/UsersContext';
import getToast from '../../utils/getToast';

import * as S from './styled';

function UsersTable() {
  const { users, deleteUser } = useContext(UsersContext);
  const [tableUsers, setTableUsers] = useState([]);

  useEffect(() => {
    setTableUsers(users);
  }, [users]);

  const removeUser = async (id) => {
    getToast('success', 'Usuário removido.');
    const { token } = JSON.parse(localStorage.getItem('user'));
    deleteUser(id);
    await fetch(`http://localhost:3001/users/admin/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: token,
      }),
    });
  };

  return (
    <S.Main>
      <h1>Lista de usuários</h1>
      <S.Table>
        <thead>
          <S.TableRow>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </S.TableRow>
        </thead>
        {tableUsers.length ? (
          <tbody>
            {users.map((user, i) => (
              <S.TableRow key={ user.id }>
                <td data-testid={ `admin_manage__element-user-table-item-number-${i}` }>
                  {String(i).padStart(2 + 1, 0)}
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${i}` }>
                  {user.name}
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${i}` }>
                  {user.email}
                </td>
                <td data-testid={ `admin_manage__element-user-table-role-${i}` }>
                  {user.role === 'customer' ? 'Cliente' : 'Pessoa Vendedora'}
                </td>
                <td data-testid={ `admin_manage__element-user-table-remove-${i}` }>
                  <S.Button
                    type="button"
                    onClick={ () => removeUser(user.id) }
                  >
                    Excluir
                  </S.Button>
                </td>
              </S.TableRow>
            ))}
          </tbody>
        ) : null}
      </S.Table>
    </S.Main>
  );
}

export default UsersTable;
