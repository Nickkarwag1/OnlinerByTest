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

const DATA = {
    PAGE: "page",
    DATA: "data",
    ID: "id",
    UPDATED_AT: "updatedAt",
    ERROR: "error",
    TOKEN: "token",
}

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
}

const app =  request(BASE_URL)

describe("test API", function () {
    it("GET list user", async function () {
        response = await app.get(URL.LIST_USER);
        expect(response.statusCode).to.eql(STATUS_CODE.OK);
        expect(response.body).to.have.property(DATA.PAGE);
    });

    it("GET single user", async function () {
        response = await app.get(URL.SINGLE_USER);
        expect(response.statusCode).to.eql(STATUS_CODE.OK)
    });

    it("GET single user not found", async function () {
        response = await app.get(URL.USER_NOT_FOUND);
        expect(response.statusCode).to.eql(STATUS_CODE.NOT_FOUND)
    });

    it("GET list resource", async function () {
        response = await app.get(URL.LIST_RESOURCE);
        expect(response.statusCode).to.eql(STATUS_CODE.OK);
        expect(response.body).to.have.property(DATA.DATA);
        expect(response.body.data[2]).to.have.property(DATA.ID);
    });

    it("POST creat", async function () {
        response = await app.post(URL.CREAT_USER).send({
            name: "morpheus",
            job: "leader",
        });
        expect(response.statusCode).to.eql(STATUS_CODE.CREATED)
        expect(response.body).to.have.property(DATA.ID);
    });

    it("PUT creat", async function () {
        response = await app.put(URL.UPDATE_AND_DELETE_USER).send({
            name: "morpheus",
            job: "zion resident",
        });
        expect(response.statusCode).to.eql(STATUS_CODE.OK);
        expect(response.body).to.have.property(DATA.UPDATED_AT);
    });

    it("DELETE", async function () {
        response = await app.delete(URL.UPDATE_AND_DELETE_USER);
        expect(response.statusCode).to.eql(STATUS_CODE.NO_CONTENT)
    });

    it("POST register - successful", async function () {
        response = await app.post(URL.REGISTER_SUCCESSFUL_AND_UNSUCCESSFUL_USER).send({
            email: "eve.holt@reqres.in",
            password: "pistol",
        });
        expect(response.statusCode).to.eql(STATUS_CODE.OK);
        expect(response.body).to.have.property(DATA.ID);
        expect(response.body).to.have.property(DATA.TOKEN);
        expect(response.body.id).to.eql(4);
    });

    it("POST register - unsuccessful", async function () {
        response = await app.post(URL.REGISTER_SUCCESSFUL_AND_UNSUCCESSFUL_USER).send({
            email: "sydney@fife",
        });
        expect(response.statusCode).to.eql(STATUS_CODE.BAD_REQUEST);
        expect(response.body).to.have.property(DATA.ERROR);
    });

    it("POST login successful", async function () {
        response = await app.post(URL.LOGIN_USER).send({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        });
        expect(response.statusCode).to.eql(STATUS_CODE.OK);
        expect(response.body).to.have.property(DATA.TOKEN);
    });
});
