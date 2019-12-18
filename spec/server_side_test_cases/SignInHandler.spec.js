var Request = require('request');

describe("Sign In Handler Server", () => {
    beforeAll(() => {
        require('../../server/index');
    });

    describe("POST /api/signin", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/signin", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("Sign In Successful", () => {
            expect(data.body.message).toBe('Sign In Successful');
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