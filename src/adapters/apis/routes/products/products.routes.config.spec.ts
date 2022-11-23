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

let idProduct: any;
describe('POST in /products', () => {
    it("Should register a new product", async () => { //increation
        const response = await request(app)
        .post("/products")
        .send({
        name: "PRODUCT REGISTERED IN THE TEST",
		description: "Created by JEST",
		image: "https://tests.com",
		price: 100.99,
		isVegan: false,
		isGlutenFree: false,
		isEnough: 2,
		category: 1
        })
        .expect(201);
    });

    it("Should not add anythin, or required items when passing the empty body in POST Products", async () =>{
        await request(app)
        .post('/products')
        .send({})
        .expect(400)
    });
});

describe('GET in /products/id', () => {
    it("Should return by id in the products", async () =>{
        await request(app)
        .get(`/products/${idProduct}`)
        .expect(400)
    });
});

describe ('PUT in /products/id', () => {
    test.each([
                ["name",{name: "Put in testes --name"}],
                ["description", {description:" Description in the update by testing on product routes"}],
                ["image", {image:"Updated picture on the PUT of the products - tests"}],
                ["price", {price:1.50}],
                ["isVegan", {isVegan: true}],
                ["isGlutenFree", {isGlutenFree: false}],
                ["isEnough", {isEnough: 1}],
                ["category", {category: 1}],
    ])
            (`You must change the $s field`, async (key, param) => {
                await request(app)
                .put(`/products/${idProduct}`)
                .send(param)
                .expect(400)
            });
});

describe("DELETE in /products/:idProduct", () => {
    it(" You must delete the product saved in the previous test", async () => {
        await request(app)
        .delete(`/products/${idProduct}`)
        .expect(400)
    })
})