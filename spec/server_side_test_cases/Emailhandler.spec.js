var Request = require('request');

describe("Email Handler Server", () => {
    var emailhandler;
    beforeAll(() => {
        emailhandler = require('../../server/index');
    });

    describe("POST /api/email", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/email?email=pc22230@gmail.com", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("Email Sending Check", () => {
            expect(data.body.message).not.toBe('Error occured while sending');
        });
        it("Email Id should not be null Check", () => {
            expect(data.body.message).not.toBe('Email Id cannot be null');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});