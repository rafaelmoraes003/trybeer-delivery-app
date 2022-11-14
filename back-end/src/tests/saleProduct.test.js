const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const app = require("../api/app");
const { SaleProduct } = require("../database/models/index");
const jwt = require('jsonwebtoken');


const createSaleProductMock = [
	{
		"saleId": 2,
		"productId": 2,
		"quantity": 12
	}
]	

describe("Teste de Sale", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('metodo create', () => {
    it('caso de sucesso', async () => {
      sinon.stub(SaleProduct, 'bulkCreate').resolves(createSaleProductMock);
      // sinon.stub(jwt, 'verify').returns('anytoken')

      const response = await chai.request(app).post('/sales-products').send(createSaleProductMock)
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(createSaleProductMock);
    })
  });
})