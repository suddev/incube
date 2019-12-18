var Request = require('request');

describe("Registration Handler Server", () => {
    beforeAll(() => {
        require('../../server/index');
    });

    describe("POST /api/registration", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/registration", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("registraation Successful", () => {
            expect(data.body.message).toBe('Registration Successful');
        });
        it("Email cannot be null", () => {
            expect(data.body.message).not.toBe('Email cannot be null');
        });
        it("Password cannot be null", () => {
            expect(data.body.message).not.toBe('Password cannot be null');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});