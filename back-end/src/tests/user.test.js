const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const app = require("../api/app");
const { User } = require("../database/models/index");
const decryptPassword = require('../utils/descryptPassword');
const jwt = require('jsonwebtoken');


chai.use(chaiHttp);


const AdmLoginMock = {
	email: "adm@deliveryapp.com",
	password: "--adm2@21!!--"
}

const createMock = {
  name: "new user customer",
  role: "customer",
  email: "newuser@email.com",
  password: "newuser",
};

const createResponseUser = {
  id: "4",
  name: "Cliente",
  role: "customer",
  email: "teste@email.com",
  password:"anypassword",
  token: "anytoken"
}

const allUsersMock = [
	{
		"id": 1,
		"name": "Delivery App Admin",
		"email": "adm@deliveryapp.com",
		"role": "administrator"
	},
	{
		"id": 2,
		"name": "Fulana Pereira",
		"email": "fulana@deliveryapp.com",
		"role": "seller"
	},
]

const allSellersMock = [
	{
		"id": 1,
		"name": "Delivery App Admin",
		"email": "adm@deliveryapp.com",
		"role": "seller"
	},
	{
		"id": 2,
		"name": "Fulana Pereira",
		"email": "fulana@deliveryapp.com",
		"role": "seller"
	},
]

describe("Teste de User", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('metodo create', () => {
    it("caso de sucesso", async () => {
      sinon.stub(User, "findOne").resolves(null)
      sinon.stub(User, "create").resolves({ dataValues: createResponseUser });
      sinon.stub(decryptPassword, 'decryptPassword').returns("anypassword")
      sinon.stub(jwt, 'sign').returns('anytoken')
  
      const response = await chai.request(app).post('/users').send(createMock);
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(createResponseUser)
    });
  })

  describe('metodo getAll', () => {
    it("caso de sucesso", async () => {
      sinon.stub(User, "findAll").resolves(allUsersMock)
      sinon.stub(jwt, 'verify').returns({userData: {role: 'administrator'}})
  
      const response = await chai.request(app).get('/users').set('Authorization', 'anytoken');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(allUsersMock)
    });
  })

  describe('metodo getSellers', () => {
    it("caso de sucesso", async () => {
      sinon.stub(User, "findAll").resolves(allSellersMock)
      sinon.stub(jwt, 'verify').returns({userData: {role: 'administrator'}})
  
      const response = await chai.request(app).get('/users/sellers').set('Authorization', 'anytoken');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(allSellersMock)
    });
  })

  describe('metodo removeUser', () => {
    it('caso de sucesso', async () => {
      sinon.stub(User, 'findOne').resolves(createResponseUser)
      sinon.stub(User, 'destroy').resolves();
      sinon.stub(jwt, 'verify').returns({userData: {role: 'administrator'}})

      const response = await chai.request(app).delete('/users/admin/1').set('Authorization', 'anytoken');
      expect(response.status).to.be.eq(204);
      expect(response.body).to.be.deep.eq({});
    });
  })
})
