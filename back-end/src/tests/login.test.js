const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const app = require("../api/app");
const { User } = require("../database/models/index");
const decryptPassword = require('../utils/descryptPassword');
const jwt = require('jsonwebtoken');


chai.use(chaiHttp);


const loginMock = {
  email: "zebirita@email.com",
  password: "$#zebirita#$",
};

const InvalidLoginPassword = {
  email: "zebirita@email.com",
  password: "123456",
};

const fakeloginMock = {
  email: "fakelogin@email.com",
  password: "123456"
}

const loginResponse = {
  id: "3",
  name: "Cliente Zé Birita",
  role: "customer",
  email: "zebirita@email.com",
  password: "$#zebirita#$"
};

const loginResponseUser = {
  id: "3",
  name: "Cliente Zé Birita",
  role: "customer",
  email: "zebirita@email.com",
  token: "xablau"
}

describe("Teste de Login", () => {
  afterEach(() => {
    sinon.restore()
  })

  it("caso de sucesso", async () => {
    sinon.stub(User, "findOne").resolves(loginResponse);
    sinon.stub(decryptPassword, 'decryptPassword').returns("$#zebirita#$")
    sinon.stub(jwt, 'sign').returns('xablau')

    const response = await chai.request(app).post('/login').send(loginMock);
    expect(response.status).to.be.eq(200);
    expect(response.body).to.have.property("token");
    expect(response.body).to.be.deep.eq(loginResponseUser);
  });
  it("caso não encontrado um usuário", async () => {
    sinon.stub(User, "findOne").resolves(undefined);
    const response = await chai.request(app).post('/login').send(fakeloginMock);

    expect(response.status).to.be.eq(404);
    expect(response.body).to.be.deep.eq({error:'User not found'});
  })
  it("caso enviado senha incorreta", async () => {
    sinon.stub(User, "findOne").resolves(loginResponse);
    sinon.stub(decryptPassword, 'decryptPassword').returns("wrongpassword")

    const response = await chai.request(app).post('/login').send(InvalidLoginPassword);

    expect(response.status).to.be.eq(404);
    expect(response.body).to.be.deep.eq({error:'User not found'});
  })
});
