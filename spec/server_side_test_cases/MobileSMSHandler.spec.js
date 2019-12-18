var Request = require('request');

describe("Mobile Handler Server", () => {
    var emailhandler;
    beforeAll(() => {
        emailhandler = require('../../server/index');
    });

    describe("POST /api/mobile", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/mobile?mobile=+917543990436", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("SMS Sending Check", () => {
            expect(data.body.message).not.toBe('Error occured while sending');
        });
        it("Mobile No should not be null Check", () => {
            expect(data.body.message).not.toBe('Mobile Number cannot be null');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});