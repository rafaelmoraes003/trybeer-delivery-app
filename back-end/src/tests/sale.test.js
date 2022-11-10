const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const app = require("../api/app");
const { Sale } = require("../database/models/index");
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const createSaleMock = {
	userId: 3,
	sellerId: 3,
	totalPrice: 100,
	deliveryAddress: "avenida zebirita",
	deliveryNumber: 55,
	saleDate: "2022-11-03",
	status: "entregue"
}

const saleResponse = {
	id: 2,
	userId: 3,
	sellerId: 3,
	totalPrice: 100,
	deliveryAddress: "avenida zebirita",
	deliveryNumber: 55,
	saleDate: "2022-11-03T00:00:00.000Z",
	status: "entregue"
}

const saleArray = [
	{
		id: 1,
		userId: 3,
		sellerId: 2,
		totalPrice: "85.03",
		deliveryAddress: "Théo Rodovia",
		deliveryNumber: "716",
		saleDate: "2022-11-08T20:56:53.000Z",
		status: "Em Trânsito"
	},
  {
    id: 2,
		userId: 3,
		sellerId: 2,
		totalPrice: "85.03",
		deliveryAddress: "Théo Rodovia",
		deliveryNumber: "716",
		saleDate: "2022-11-08T20:56:53.000Z",
		status: "Em Trânsito"
  }
]

describe("Teste de Sale", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('metodo create', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'create').resolves({dataValues: saleResponse});
      sinon.stub(jwt, 'verify').returns('anytoken')

      const response = await chai.request(app).post('/sales').send(createSaleMock).set('Authorization', 'anytoken');
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(saleResponse);
    })
  });

  describe('metodo getAll', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'findAll').resolves(saleArray);

      const response = await chai.request(app).get('/sales');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(saleArray);
    })
  })

  describe('metodo getSaleById', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'findOne').resolves(saleResponse);

      const response = await chai.request(app).get('/sales/1');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(saleResponse);
    })
  })

  describe('metodo getAllBySellerId', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'findAll').resolves(saleArray);

      const response = await chai.request(app).get('/sales/seller/1');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(saleArray);
    })
  })

  describe('metodo getAllByUserId', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'findAll').resolves(saleArray);

      const response = await chai.request(app).get('/sales/customer/1');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(saleArray);
    })
  })

  describe('metodo updateSaleStatus', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Sale, 'update').resolves({status: 'preparando'});

      const response = await chai.request(app).patch('/sales/1');
      expect(response.status).to.be.eq(204);
      expect(response.body).to.be.deep.eq({});
    })
  })
})