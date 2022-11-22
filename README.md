<h1 align="left">Trybeer Delivery App</h1>

###

<p align="left">Este projeto full-stack teve como objetivo criar um e-commerce que simula uma distribuidora de bebidas, sendo possível criar contas, realizar login, ter acesso a uma tela de produtos para fazer a compra deles, tela de checkout, telas sobre pedidos e atualizar status desse pedidos. Além disso, se o usuário for do tipo administrador, é possível criar novos usuários (cliente ou vendedor) e também removê-los.<br><br>O Front-end foi feito utilizando React.js com Hooks e styled-components para a estilização. o Back-end foi feito usando Node.js, Express e Sequelize como ORM. O banco de dados utilizado foi o MySQL.<br><br>Ambas as pontas da aplicação possuem testes que cobrem praticamente todas as linhas de suas respectivas pastas, sendo o Front-end feito com Jest e React Testing Library e o Back-end feito com Mocha, Chai e Sinon.</p>

###

<h2 align="left">Tecnologias utilizadas</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" width="62" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="62" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="62" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" width="62" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="50" width="62" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" width="62" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="62" alt="jest logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" height="50" width="62" alt="mocha logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="62" alt="docker logo"  />
</div>

###

<h2 align="left">Como utilizar a aplicação</h2>

###

Faça o clone da aplicação usando o comando `git clone`. Após isso, entre na pasta do projeto utilizando o comando `cd trybeer-delivery-app`.

###

<h2 align="left">Configurações necessárias</h2>

###

- `node` a partir da versão `16.0.0 LTS`
- `docker-compose` a partir da versão `2.5.0`

###

<h2 align="left">Rodando a aplicação com o Docker</h2>

###

Na pasta raiz do projeto, utilize o comando `docker-compose up -d`. O Front-end estará localizado na porta 3000, o Back-end na porta 3001 e o banco de dados (MySQL) na porta 3002.

###

<h2 align="left">Rodando a aplicação localmente</h2>

###

Para rodar localmente, é necessário rodar o comando `npm install` tanto na pasta de Front-end quanto na pasta de Back-end. Além disso, é preciso colocar as credencias do seu banco de dados no arquivo `./back-end/.env.example` e depois renomar o arquivos para apenas `.env` .Após as configurações serem feitas, basta usar o comando `npm start` em cada pasta.

###

<h2 align="left">Sobre o banco de dados</h2>

Ao inicializar os serviços através do `docker-compose` ou do `npm start` no Back-end, serão criados 3 usuários, que são estes:

```JavaScript
[
  {
    email: 'adm@deliveryapp.com',
    password: '--adm2@21!!--',
    role: 'administrator',
  },
  {
    email: 'fulana@deliveryapp.com',
    password: 'fulana@123',
    role: 'seller',
  },
  {
    email: 'zebirita@email.com',
    password: '$#zebirita#$',
    role: 'customer',
  },
],
```

Dependendo do usuário que será usado no login, a aplicação levará para diferente telas.

###

<h2 align="left">Telas</h2>

<table>
  <tr>
    <td valign="top">
      <h3 align="left">Login</h3>
      <img width="500px" src="./images/login.png" alt="login-preview"
      />
    </td>
    <td valign="top">
      <h3 align="left">Cadastro</h3>
      <img width="500px" src="./images/register.png" alt="register-preview"
      />
    </td>
    <td valign="top">
      <h3 align="left">Produtos</h3>
      <img width="500px" src="./images/products.png" alt="products-preview"
      />
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h3 align="left">Checkout</h3>
      <img widt/h="500px" src="./images/checkout.png" alt="checkout-preview"
      />
    </td>
     <td valign="top">
      <h3 align="left">Detalhes do Pedido (Cliente)</h3>
      <img width="500px" src="./images/order-details.png" alt="order-details-preview"
      />
      <h4>(Possível mudar status do pedido)</h4>
    </td>
    <td valign="top">
      <h3 align="left">Lista de Pedidos (Cliente)</h3>
      <img width="500px" src="./images/orders.png" alt="orders-preview"
      />
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h3 align="left">Detalhes do Pedido (Vendedor)</h3>
      <img width="500px" src="./images/seller-order-details.png" alt="seller-order-details-preview"
      />
      <h4>(Possível mudar status do pedido)</h4>
    </td>
    <td valign="top">
      <h3 align="left">Gerenciamento de Usuários (Administrador)</h3>
      <img width="500px" src="./images/admin.png" alt="admin-preview"
      />
    </td>
  </tr>
</table>

###

<h2 align="left">Observações ao criar usuário</h2>

Para se criar um usuário, é necessário que o usuário preencha as seguintes condições:

- `Email` com formato válido
- `Nome` com no mínimo 12 caracteres
- `Senha` com no mínimo 6 caracteres
