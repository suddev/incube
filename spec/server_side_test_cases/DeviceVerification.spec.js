var Request = require('request');

describe("device Verification Handler Server", () => {
    var emailhandler;
    beforeAll(() => {
        emailhandler = require('../../server/index');
    });

    describe("POST /api/deviceverification", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/deviceverification", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("User is verified", () => {
            expect(data.body.message).toBe('user is verified');
        });
        it("SMS Sending Check", () => {
            expect(data.body.message).not.toBe('Error occured while sending SMS');
        });
        it("Email Sending Check", () => {
            expect(data.body.message).not.toBe('Error occured while sending Email');
        });
        it("Otp generated", () => {
            expect(data.body.message).toBe('otp generated');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});