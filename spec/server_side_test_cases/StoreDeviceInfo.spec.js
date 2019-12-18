var Request = require('request');

describe("Store Device Handler Server", () => {
    beforeAll(() => {
        require('../../server/index');
    });

    describe("POST /api/storedevice", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3001/api/storedevice", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status Check", () => {
            expect(data.status).toBe(200);
        });
        it("Device details stored uccessful", () => {
            expect(data.body.message).toBe('Device details stored successfully');
        });
        it("Network Check", () => {
            expect(data).not.toBe(undefined);
        });
    })
});