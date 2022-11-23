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

describe('GET in /tables', () => {
    it("Should return a list of tables", async () => {
        const response = await request(app)
        .get('/tables')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
    
    expect(response.body[0].idTable).toEqual(1)
    });
});

let id: any;
describe('POST in /tables', () => {
    it("Should register a new table", async () => { //increation
        const response = await request(app)
        .post("/tables")
        .send({
        idTable: 1,
        order: [
            {
                name: "order in Jest1",
                comment: "comment in order jest1"
            }, 
            {
                name: "order in Jest2",
                comment: "comment in order jest2"
            }
        ], 
        command: 12
        })
        .expect(201);
    });

    it("Should not add anythin, or required items when passing the empty body in POST Tables", async () =>{
        await request(app)
        .post('/tables')
        .send({})
        .expect(400)
    });
});
