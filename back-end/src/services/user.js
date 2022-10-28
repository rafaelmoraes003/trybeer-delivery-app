const { User } = require('../database/models');

const user = async () => {

  const user = await User.findAll();
  return user;
  
}

module.exports =  {user}