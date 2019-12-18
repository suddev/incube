var Request = require('request');

describe("Verify user Handler Server", () => {
    beforeAll(() => {
        require('../../server/index');
    });

    describe("POST /api/mobileverification", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/mobileverification", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("Verify user", () => {
            expect(data.body.message).toBe('User is verified');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});