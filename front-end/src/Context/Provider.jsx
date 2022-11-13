import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getUsers = async () => {
      const response = await
      fetch('http://localhost:3001/users/', {
        headers: new Headers({
          Authorization: token,
        }),
      });
      const data = await response.json();
      setUsers(data);
    };
    getUsers();

    return () => {
      setUsers([]);
    };
  }, [token]);

  const contextValue = useMemo(() => {
    const addUser = (newUser) => {
      setUsers((oldUsers) => [...oldUsers, newUser]);
    };

    const deleteUser = (id) => {
      const filteredUser = users.filter((user) => user.id !== id);
      setUsers(filteredUser);
    };

    return {
      users,
      addUser,
      deleteUser,
    };
  }, [users]);

  return (
    <UsersContext.Provider value={ contextValue }>
      { children }
    </UsersContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
