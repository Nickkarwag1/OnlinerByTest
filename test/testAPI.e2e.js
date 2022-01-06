const request = require("supertest");
const {expect} = require("chai");

const BASE_URL = `https://reqres.in`

let response;

const URL = {
    LIST_USER: `/api/users?page=2`,
    SINGLE_USER: `/api/users/2`,
    USER_NOT_FOUND: `/api/users/23`,
    LIST_RESOURCE: `/api/unknown`,
    CREAT_USER: `/api/users`,
    UPDATE_AND_DELETE_USER: `/api/users/2`,
    REGISTER_SUCCESSFUL_AND_UNSUCCESSFUL_USER: `/api/register`,
    LOGIN_USER: `/api/login`,
}

describe("test API", function () {
    it("GET list user", async function () {
        response = await request(BASE_URL).get(URL.LIST_USER);
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("page");
    });

    it("GET single user", async function () {
        response = await request(BASE_URL).get(URL.SINGLE_USER);
        expect(response.statusCode).to.eql(200)
    });

    it("GET single user not found", async function () {
        response = await request(BASE_URL).get(URL.USER_NOT_FOUND);
        expect(response.statusCode).to.eql(404)
    });

    it("GET list resource", async function () {
        response = await request(BASE_URL).get(URL.LIST_RESOURCE);
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("data");
        expect(response.body.data[2]).to.have.property("id");
    });

    it("POST creat", async function () {
        response = await request(BASE_URL).post(URL.CREAT_USER).send({
            name: "morpheus",
            job: "leader",
        });
        expect(response.statusCode).to.eql(201)
        expect(response.body).to.have.property("id");
    });

    it("PUT creat", async function () {
        response = await request(BASE_URL).put(URL.UPDATE_AND_DELETE_USER).send({
            name: "morpheus",
            job: "zion resident",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("updatedAt");
    });

    it("DELETE", async function () {
        response = await request(BASE_URL).delete(URL.UPDATE_AND_DELETE_USER);
        expect(response.statusCode).to.eql(204)
    });

    it("POST register - successful", async function () {
        response = await request(BASE_URL).post(URL.REGISTER_SUCCESSFUL_AND_UNSUCCESSFUL_USER).send({
            email: "eve.holt@reqres.in",
            password: "pistol",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("token");
        expect(response.body.id).to.eql(4);
    });

    it("POST register - unsuccessful", async function () {
        response = await request(BASE_URL).post(URL.REGISTER_SUCCESSFUL_AND_UNSUCCESSFUL_USER).send({
            email: "sydney@fife",
        });
        expect(response.statusCode).to.eql(400);
        expect(response.body).to.have.property("error");
    });

    it("POST login successful", async function () {
        response = await request(BASE_URL).post(URL.LOGIN_USER).send({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        });
        expect(response.statusCode).to.eql(200);
        expect(response.body).to.have.property("token");
    });
});
