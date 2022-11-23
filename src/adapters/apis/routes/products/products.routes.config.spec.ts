import app from '../../../../infrastructure/app/app';
import request  from 'supertest';

let server: any;
beforeEach(() => {
    const PORT = process.env.PORT;
    server = app.listen(PORT);
});
afterEach(() => {
    server.close();
});

describe('GET in /products', () => {
    it("Should return a list of products", async () => {
        const response = await request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
    
    expect(response.body[0].idProduct).toEqual(13)
    });
});

let idResponse;
describe('POST in /products', () => {
    it("Should register a new product", async () => { //increation
        const response = await request(app)
        .post("/products")
        .send({
        name: "PRODUTO CADASTRADO NO TESTE",
		description: "Criado pelo JEST",
		image: "https://testes.com.br",
		price: 100.99,
		isVegan: false,
		isGlutenFree: false,
		isEnough: 2,
		category: 1
        })
        .expect(201);
    });
});