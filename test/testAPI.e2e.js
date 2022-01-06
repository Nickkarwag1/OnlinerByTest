const request = require("supertest");
const {expect} = require("chai");

const URL = `https://reqres.in`

describe("test API", function () {
    it("GET list user", async function () {
        const response = await request(URL).get(`/api/users?page=2`);
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("page");
    });

    it("GET single user", async function () {
        const response = await request(URL).get(`/api/users/2`);
        expect(response.statusCode).to.eql(200)
    });

    it("GET single user not found", async function () {
        const response = await request(URL).get(`/api/users/23`);
        expect(response.statusCode).to.eql(404)
    });

    it("GET list resource", async function () {
        const response = await request(URL).get(`/api/unknown`);
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("data");
        expect(response.body.data[2]).to.have.property("id");
    });

    it("POST creat", async function () {
        const response = await request(URL).post(`/api/users`).send({
            name: "morpheus",
            job: "leader",
        });
        expect(response.statusCode).to.eql(201)
        expect(response.body).to.have.property("id");
    });

    it("PUT creat", async function () {
        const response = await request(URL).put(`/api/users/2`).send({
            name: "morpheus",
            job: "zion resident",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("updatedAt");
    });

    it("DELETE", async function () {
        const response = await request(URL).delete(`/api/users/2`);
        expect(response.statusCode).to.eql(204)
    });

    it("POST register - successful", async function () {
        const response = await request(URL).post(`/api/register`).send({
            email: "eve.holt@reqres.in",
            password: "pistol",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("token");
        expect(response.body.id).to.eql(4);
    });

    it("POST register - unsuccessful", async function () {
        const response = await request(URL).post(`/api/register`).send({
            email: "sydney@fife",
        });
        expect(response.statusCode).to.eql(400);
        expect(response.body).to.have.property("error");
    });

    it("POST login successful", async function () {
        const response = await request(URL).post(`/api/login`).send({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("token");
    });
});
