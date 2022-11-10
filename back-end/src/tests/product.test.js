const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const app = require("../api/app");
const { Product } = require("../database/models/index");
const joi = require('joi')

chai.use(chaiHttp);

const createProductMock = {
	"name": "Skol Lata 2501ml",
	"price": "2.4",	"urlImage":"http://localhost:3001/images/skol_lata_350ml.jpg"
}

const productResponse = {
	id: 12,
	name: "Skol Lata 2501ml",
	price: "2.4",
	urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg"
}

const productArray = [
  {
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": "2.20",
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  {
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },
]

describe("Teste de Product", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('metodo create', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Product, 'create').resolves(productResponse);
      sinon.stub(Product, 'findOne').resolves(null);

      const response = await chai.request(app).post('/products').send(createProductMock);
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(productResponse);
    })
    
    it('caso já exista um produto igual', async () => {
      sinon.stub(Product, 'create').resolves(productResponse);
      sinon.stub(Product, 'findOne').resolves(productResponse);

      const response = await chai.request(app).post('/products').send(createProductMock);
      expect(response.status).to.be.eq(404);
      expect(response.body).to.be.deep.eq({ error:'Product already exists' });
    });
  });

  describe('metodo getAll', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Product, 'findAll').resolves(productArray);

      const response = await chai.request(app).get('/products');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(productArray);
    })
  })

  describe('metodo getById', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Product, 'findOne').resolves(productResponse);

      const response = await chai.request(app).get('/products/1');
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(productResponse);
    })

    it('caso não exista o produto com id enviado', async () => {
      sinon.stub(Product, 'findOne').resolves(null);

      const response = await chai.request(app).get('/products/1')
      expect(response.status).to.be.eq(404);
      expect(response.body).to.be.deep.eq({ error: 'Product not Found'});
    })
  })

  describe('metodo update', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Product, 'update').resolves(productResponse);
      sinon.stub(Product, 'findOne').resolves(productResponse);

      const response = await chai.request(app).put('/products/1').send(createProductMock);
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq({message: 'product updated'});
    })
    
    it('caso não exista o produto com id enviado', async () => {
      sinon.stub(Product, 'findOne').resolves(null);

      const response = await chai.request(app).put('/products/1').send(createProductMock);
      expect(response.status).to.be.eq(404);
      expect(response.body).to.be.deep.eq({ error: 'Product not Found'});
    })
  })

  describe('metodo destroy', () => {
    it('caso de sucesso', async () => {
      sinon.stub(Product, 'destroy').resolves(productResponse);

      const response = await chai.request(app).delete('/products/1');
      expect(response.status).to.be.eq(204);
      expect(response.body).to.be.deep.eq({});
    })
  })

})